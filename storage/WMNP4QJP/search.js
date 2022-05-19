(function (React,reactDom) {
'use strict';

var React__default = 'default' in React ? React['default'] : React;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
var browserRaw = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

var core = Promise$1;

function Promise$1(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._U = 0;
  this._V = 0;
  this._W = null;
  this._X = null;
  if (fn === noop) { return; }
  doResolve(fn, this);
}
Promise$1._Y = null;
Promise$1._Z = null;
Promise$1._0 = noop;

Promise$1.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise$1) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise$1(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise$1(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._V === 3) {
    self = self._W;
  }
  if (Promise$1._Y) {
    Promise$1._Y(self);
  }
  if (self._V === 0) {
    if (self._U === 0) {
      self._U = 1;
      self._X = deferred;
      return;
    }
    if (self._U === 1) {
      self._U = 2;
      self._X = [self._X, deferred];
      return;
    }
    self._X.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  browserRaw(function() {
    var cb = self._V === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._V === 1) {
        resolve(deferred.promise, self._W);
      } else {
        reject(deferred.promise, self._W);
      }
      return;
    }
    var ret = tryCallOne(cb, self._W);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise$1
    ) {
      self._V = 3;
      self._W = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._V = 1;
  self._W = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._V = 2;
  self._W = newValue;
  if (Promise$1._Z) {
    Promise$1._Z(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._U === 1) {
    handle(self, self._X);
    self._X = null;
  }
  if (self._U === 2) {
    for (var i = 0; i < self._X.length; i++) {
      handle(self, self._X[i]);
    }
    self._X = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) { return; }
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) { return; }
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

var DEFAULT_WHITELIST = [
  ReferenceError,
  TypeError,
  RangeError
];

var enabled = false;
var disable_1 = disable;
function disable() {
  enabled = false;
  core._Y = null;
  core._Z = null;
}

var enable_1 = enable;
function enable(options) {
  options = options || {};
  if (enabled) { disable(); }
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};
  core._Y = function (promise) {
    if (
      promise._V === 2 && // IS REJECTED
      rejections[promise._1]
    ) {
      if (rejections[promise._1].logged) {
        onHandled(promise._1);
      } else {
        clearTimeout(rejections[promise._1].timeout);
      }
      delete rejections[promise._1];
    }
  };
  core._Z = function (promise, err) {
    if (promise._U === 0) { // not yet handled
      promise._1 = id++;
      rejections[promise._1] = {
        displayId: null,
        error: err,
        timeout: setTimeout(
          onUnhandled.bind(null, promise._1),
          // For reference errors and type errors, this almost always
          // means the programmer made a mistake, so log them after just
          // 100ms
          // otherwise, wait 2 seconds to see if they get handled
          matchWhitelist(err, DEFAULT_WHITELIST)
            ? 100
            : 2000
        ),
        logged: false
      };
    }
  };
  function onUnhandled(id) {
    if (
      options.allRejections ||
      matchWhitelist(
        rejections[id].error,
        options.whitelist || DEFAULT_WHITELIST
      )
    ) {
      rejections[id].displayId = displayId++;
      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(
          rejections[id].displayId,
          rejections[id].error
        );
      } else {
        rejections[id].logged = true;
        logError(
          rejections[id].displayId,
          rejections[id].error
        );
      }
    }
  }
  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn(
          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
        );
        console.warn(
          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
          rejections[id].displayId + '.'
        );
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

var rejectionTracking = {
	disable: disable_1,
	enable: enable_1
};

//This file contains the ES6 extensions to the core Promises/A+ API



var es6Extensions = core;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new core(core._0);
  p._V = 1;
  p._W = value;
  return p;
}
core.resolve = function (value) {
  if (value instanceof core) { return value; }

  if (value === null) { return NULL; }
  if (value === undefined) { return UNDEFINED; }
  if (value === true) { return TRUE; }
  if (value === false) { return FALSE; }
  if (value === 0) { return ZERO; }
  if (value === '') { return EMPTYSTRING; }

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new core(then.bind(value));
      }
    } catch (ex) {
      return new core(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

var iterableToArray = function (iterable) {
  if (typeof Array.from === 'function') {
    // ES2015+, iterables exist
    iterableToArray = Array.from;
    return Array.from(iterable);
  }

  // ES5, only arrays and array-likes exist
  iterableToArray = function (x) { return Array.prototype.slice.call(x); };
  return Array.prototype.slice.call(iterable);
};

core.all = function (arr) {
  var args = iterableToArray(arr);

  return new core(function (resolve, reject) {
    if (args.length === 0) { return resolve([]); }
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof core && val.then === core.prototype.then) {
          while (val._V === 3) {
            val = val._W;
          }
          if (val._V === 1) { return res(i, val._W); }
          if (val._V === 2) { reject(val._W); }
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new core(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

core.reject = function (value) {
  return new core(function (resolve, reject) {
    reject(value);
  });
};

core.race = function (values) {
  return new core(function (resolve, reject) {
    iterableToArray(values).forEach(function(value){
      core.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

core.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob();
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ];

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift();
      return {done: value === undefined, value: value}
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    };
  }

  return iterator
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function(name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null
};

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
};

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function(callback, thisArg) {
  var this$1 = this;

  for (var name in this$1.map) {
    if (this$1.map.hasOwnProperty(name)) {
      callback.call(thisArg, this$1.map[name], name, this$1);
    }
  }
};

Headers.prototype.keys = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push(name);
  });
  return iteratorFor(items)
};

Headers.prototype.values = function() {
  var items = [];
  this.forEach(function(value) {
    items.push(value);
  });
  return iteratorFor(items)
};

Headers.prototype.entries = function() {
  var items = [];
  this.forEach(function(value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items)
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result);
    };
    reader.onerror = function() {
      reject(reader.error);
    };
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function(body) {
    this._bodyInit = body;
    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer);
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    };

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    };
  }

  this.text = function() {
    var rejected = consumed(this);
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  };

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    };
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  };

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url;
    this.credentials = input.credentials;
    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }
    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;
    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }
  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body);
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
};

function decode(body) {
  var form = new FormData();
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers();
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':');
    var key = parts.shift().trim();
    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers
}

Body.call(Request.prototype);

function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = 'statusText' in options ? options.statusText : 'OK';
  this.headers = new Headers(options.headers);
  this.url = options.url || '';
  this._initBody(bodyInit);
}

Body.call(Response.prototype);

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
};

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''});
  response.type = 'error';
  return response
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
};

var DOMException = self.DOMException;
try {
  new DOMException();
} catch (err) {
  DOMException = function(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };
  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch$1(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value);
    });

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  })
}

fetch$1.polyfill = true;

if (!self.fetch) {
  self.fetch = fetch$1;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f$1
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) { throw TypeError("Can't call method on " + it); }
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) { return input; }
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) { return val; }
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) { return val; }
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) { return val; }
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty$1 = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty$1.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) { try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ } }
  if (has(O, P)) { return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]); }
};

var objectGetOwnPropertyDescriptor = {
	f: f
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) { try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ } }
  if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported'); }
  if ('value' in Attributes) { O[P] = Attributes.value; }
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store$1;

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
  sharedStore.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

var inspectSource = sharedStore.inspectSource;

var WeakMap$1 = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

var isPure = false;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: isPure ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap = global_1.WeakMap;
var set;
var get;
var has$3;

var enforce = function (it) {
  return has$3(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$3 = new WeakMap();
  var wmget = store$3.get;
  var wmhas = store$3.has;
  var wmset = store$3.set;
  set = function (it, metadata) {
    wmset.call(store$3, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$3, it) || {};
  };
  has$3 = function (it) {
    return wmhas.call(store$3, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$3 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$3,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) { createNonEnumerableProperty(value, 'name', key); }
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global_1) {
    if (simple) { O[key] = value; }
    else { setGlobal(key, value); }
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) { O[key] = value; }
  else { createNonEnumerableProperty(O, key, value); }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) { while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) { return true; }
    // Array#indexOf ignores holes, Array#includes - not
    } } else { for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) { return IS_INCLUDES || index || 0; }
    } } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) { !has(hiddenKeys, key) && has(O, key) && result.push(key); }
  // Don't enum bug & hidden keys
  while (names.length > i) { if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$3 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$3);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) { defineProperty(target, key, getOwnPropertyDescriptor(source, key)); }
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) { for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else { targetProperty = target[key]; }
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) { continue; }
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  } }
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject$1 = function (argument) {
  return Object(requireObjectCoercible(argument));
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) { objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)); }
  else { object[propertyKey] = value; }
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var useSymbolAsUid = nativeSymbol
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';

var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

var wellKnownSymbol = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (nativeSymbol && has(Symbol$1, name)) { WellKnownSymbolsStore[name] = Symbol$1[name]; }
    else { WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name); }
  } return WellKnownSymbolsStore[name];
};

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) { C = undefined; }
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) { C = undefined; }
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

var process$1 = global_1.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8;
var match;
var version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (engineUserAgent) {
  match = engineUserAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = engineUserAgent.match(/Chrome\/(\d+)/);
    if (match) { version = match[1]; }
  }
}

var engineV8Version = version && +version;

var SPECIES$1 = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return engineV8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES$1] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) { return false; }
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) {
    var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
    var O = toObject$1(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments$1[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) { throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED); }
        for (k = 0; k < len; k++, n++) { if (k in E) { createProperty(A, n, E[k]); } }
      } else {
        if (n >= MAX_SAFE_INTEGER) { throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED); }
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) { objectDefineProperty.f(O, key = keys[index++], Properties[key]); }
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var GT = '>';
var LT = '<';
var PROTOTYPE$1 = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) { delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]]; }
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE$1] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else { result = NullProtoObject(); }
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNames.f;

var toString$2 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames$1(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$2.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames$1(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f$5
};

var f$6 = wellKnownSymbol;

var wellKnownSymbolWrapped = {
	f: f$6
};

var defineProperty = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) { defineProperty(Symbol, NAME, {
    value: wellKnownSymbolWrapped.f(NAME)
  }); }
};

var defineProperty$1 = objectDefineProperty.f;



var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
    defineProperty$1(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var functionBindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) { return fn; }
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject$1($this);
    var self = indexedObject(O);
    var boundFunction = functionBindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) { if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) { target[index] = result; } // map
        else if (result) { switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } } else if (IS_EVERY) { return false; }  // every
      }
    } }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore$1 = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) { delete ObjectPrototype[P]; }
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) { symbol.description = description; }
  return symbol;
};

var isSymbol = useSymbolAsUid ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) { $defineProperty(ObjectPrototypeSymbols, P, Attributes); }
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) { nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {})); }
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) { O[HIDDEN][key] = false; }
      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) { $defineProperty(O, key, properties[key]); }
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) { return false; }
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) { return; }
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) { result.push(key); }
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) { throw TypeError('Symbol is not a constructor'); }
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) { setter.call(ObjectPrototypeSymbols, value); }
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) { this[HIDDEN][tag] = false; }
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (descriptors && USE_SETTER) { setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter }); }
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  wellKnownSymbolWrapped.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!isPure) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
  defineWellKnownSymbol(name);
});

_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) { return StringToSymbolRegistry[string]; }
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) { throw TypeError(sym + ' is not a symbol'); }
    if (has(SymbolToStringRegistry, sym)) { return SymbolToStringRegistry[sym]; }
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject$1(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var arguments$1 = arguments;

      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) { args.push(arguments$1[index++]); }
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) { return; } // IE8 returns string on undefined
      if (!isArray(replacer)) { replacer = function (key, value) {
        if (typeof $replacer == 'function') { value = $replacer.call(this, key, value); }
        if (!isSymbol(value)) { return value; }
      }; }
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');

var defineProperty$2 = objectDefineProperty.f;


var NativeSymbol = global_1.Symbol;

if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') { EmptyStringDescriptionStore[result] = true; }
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$2(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) { return ''; }
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  _export({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');

// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global_1.JSON, 'JSON', true);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');

// TODO: remove from `core-js@4`


defineWellKnownSymbol('replaceAll');

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) { return CONVERT_TO_STRING ? '' : undefined; }
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject$1(O);
  if (has(O, IE_PROTO$1)) { return O[IE_PROTO$1]; }
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$1 : null;
};

var ITERATOR$1 = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

var returnThis$2 = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2;
var PrototypeOfArrayIteratorPrototype;
var arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) { BUGGY_SAFARI_ITERATORS$1 = true; }
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) { IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype; }
  }
}

if (IteratorPrototype$2 == undefined) { IteratorPrototype$2 = {}; }

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!isPure && !has(IteratorPrototype$2, ITERATOR$1)) {
  createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$1, returnThis$2);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var iterators = {};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) { setter.call(O, proto); }
    else { O.__proto__ = proto; }
    return O;
  };
}() : undefined);

var IteratorPrototype = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) { return defaultIterator; }
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) { return IterablePrototype[KIND]; }
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!isPure && objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (isPure) { iterators[TO_STRING_TAG] = returnThis; }
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!isPure || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) { for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } } else { _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods); }
  }

  return methods;
};

var charAt = stringMultibyte.charAt;



var STRING_ITERATOR = 'String Iterator';
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$1(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$1(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) { return { value: undefined, done: true }; }
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) { anObject(returnMethod.call(iterator)); }
    throw error;
  }
};

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var ITERATOR$3 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) { return it[ITERATOR$3]
    || it['@@iterator']
    || iterators[classof(it)]; }
};

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$1(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) { mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); }
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) { return false; }
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: arrayFrom
});

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  rejectionTracking.enable();
  self.Promise = es6Extensions;
}

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = objectAssign;

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;



var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) { return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it; }
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) { return 'F'; }
    // not necessary to add metadata
    if (!create) { return 'E'; }
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) { return true; }
    // not necessary to add metadata
    if (!create) { return false; }
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) { setMetadata(it); }
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;
});

var iterate_1 = createCommonjsModule(function (module) {
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') { throw TypeError('Target is not iterable'); }
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) { return result; }
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) { return result; }
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};
});

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) { objectSetPrototypeOf($this, NewTargetPrototype); }
  return $this;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) { $instance[ADDER](index, index); }
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) { iterate_1(iterable, that[ADDER], that, IS_MAP); }
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) { fixMethod(ADDER); }

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) { delete NativePrototype.clear; }
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) { common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP); }

  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) { redefine(target, key, src[key], options); }
  return target;
};

var SPECIES$2 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$2]) {
    defineProperty(Constructor, SPECIES$2, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var defineProperty$3 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$2 = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) { that.size = 0; }
      if (iterable != undefined) { iterate_1(iterable, that[ADDER], that, IS_MAP); }
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) { state.first = entry; }
        if (previous) { previous.next = entry; }
        if (descriptors) { state.size++; }
        else { that.size++; }
        // add to index
        if (index !== 'F') { state.index[index] = entry; }
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') { return state.index[index]; }
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) { return entry; }
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) { entry.previous = entry.previous.next = undefined; }
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) { state.size = 0; }
        else { that.size = 0; }
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) { prev.next = next; }
          if (next) { next.previous = prev; }
          if (state.first == entry) { state.first = next; }
          if (state.last == entry) { state.last = prev; }
          if (descriptors) { state.size--; }
          else { that.size--; }
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var this$1 = this;

        var state = getInternalState(this);
        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this$1);
          // revert to the last existing entry
          while (entry && entry.removed) { entry = entry.previous; }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) { defineProperty$3(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    }); }
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) { entry = entry.previous; }
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') { return { value: entry.key, done: false }; }
      if (kind == 'values') { return { value: entry.value, done: false }; }
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
var es_map = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: objectCreate(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$2 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') { return { value: index, done: false }; }
  if (kind == 'values') { return { value: target[index], done: false }; }
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var ITERATOR$5 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) { try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$5] = ArrayValues;
    } }
    if (!CollectionPrototype[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
    }
    if (domIterables[COLLECTION_NAME]) { for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) { try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      } }
    } }
  }
}

// https://tc39.github.io/proposal-setmap-offrom/




var collectionFrom = function from(source /* , mapFn, thisArg */) {
  var length = arguments.length;
  var mapFn = length > 1 ? arguments[1] : undefined;
  var mapping, A, n, boundFunction;
  aFunction$1(this);
  mapping = mapFn !== undefined;
  if (mapping) { aFunction$1(mapFn); }
  if (source == undefined) { return new this(); }
  A = [];
  if (mapping) {
    n = 0;
    boundFunction = functionBindContext(mapFn, length > 2 ? arguments[2] : undefined, 2);
    iterate_1(source, function (nextItem) {
      A.push(boundFunction(nextItem, n++));
    });
  } else {
    iterate_1(source, A.push, A);
  }
  return new this(A);
};

// `Map.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_export({ target: 'Map', stat: true }, {
  from: collectionFrom
});

// https://tc39.github.io/proposal-setmap-offrom/
var collectionOf = function of() {
  var arguments$1 = arguments;

  var length = arguments.length;
  var A = new Array(length);
  while (length--) { A[length] = arguments$1[length]; }
  return new this(A);
};

// `Map.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_export({ target: 'Map', stat: true }, {
  of: collectionOf
});

// https://github.com/tc39/collection-methods
var collectionDeleteAll = function (/* ...elements */) {
  var arguments$1 = arguments;

  var collection = anObject(this);
  var remover = aFunction$1(collection['delete']);
  var allDeleted = true;
  var wasDeleted;
  for (var k = 0, len = arguments.length; k < len; k++) {
    wasDeleted = remover.call(collection, arguments$1[k]);
    allDeleted = allDeleted && wasDeleted;
  }
  return !!allDeleted;
};

// `Map.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});

var getIterator = function (it) {
  var iteratorMethod = getIteratorMethod(it);
  if (typeof iteratorMethod != 'function') {
    throw TypeError(String(it) + ' is not iterable');
  } return anObject(iteratorMethod.call(it));
};

var getMapIterator = isPure ? getIterator : function (it) {
  // eslint-disable-next-line no-undef
  return Map.prototype.entries.call(it);
};

// `Map.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  every: function every(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate_1(iterator, function (key, value) {
      if (!boundFunction(value, key, map)) { return iterate_1.stop(); }
    }, undefined, true, true).stopped;
  }
});

var SPECIES$3 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$3]) == undefined ? defaultConstructor : aFunction$1(S);
};

// `Map.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction$1(newMap.set);
    iterate_1(iterator, function (key, value) {
      if (boundFunction(value, key, map)) { setter.call(newMap, key, value); }
    }, undefined, true, true);
    return newMap;
  }
});

// `Map.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  find: function find(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate_1(iterator, function (key, value) {
      if (boundFunction(value, key, map)) { return iterate_1.stop(value); }
    }, undefined, true, true).result;
  }
});

// `Map.prototype.findKey` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  findKey: function findKey(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate_1(iterator, function (key, value) {
      if (boundFunction(value, key, map)) { return iterate_1.stop(key); }
    }, undefined, true, true).result;
  }
});

// `Map.groupBy` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', stat: true }, {
  groupBy: function groupBy(iterable, keyDerivative) {
    var newMap = new this();
    aFunction$1(keyDerivative);
    var has = aFunction$1(newMap.has);
    var get = aFunction$1(newMap.get);
    var set = aFunction$1(newMap.set);
    iterate_1(iterable, function (element) {
      var derivedKey = keyDerivative(element);
      if (!has.call(newMap, derivedKey)) { set.call(newMap, derivedKey, [element]); }
      else { get.call(newMap, derivedKey).push(element); }
    });
    return newMap;
  }
});

// `SameValueZero` abstract operation
// https://tc39.github.io/ecma262/#sec-samevaluezero
var sameValueZero = function (x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y || x != x && y != y;
};

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  includes: function includes(searchElement) {
    return iterate_1(getMapIterator(anObject(this)), function (key, value) {
      if (sameValueZero(value, searchElement)) { return iterate_1.stop(); }
    }, undefined, true, true).stopped;
  }
});

// `Map.keyBy` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', stat: true }, {
  keyBy: function keyBy(iterable, keyDerivative) {
    var newMap = new this();
    aFunction$1(keyDerivative);
    var setter = aFunction$1(newMap.set);
    iterate_1(iterable, function (element) {
      setter.call(newMap, keyDerivative(element), element);
    });
    return newMap;
  }
});

// `Map.prototype.includes` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  keyOf: function keyOf(searchElement) {
    return iterate_1(getMapIterator(anObject(this)), function (key, value) {
      if (value === searchElement) { return iterate_1.stop(key); }
    }, undefined, true, true).result;
  }
});

// `Map.prototype.mapKeys` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  mapKeys: function mapKeys(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction$1(newMap.set);
    iterate_1(iterator, function (key, value) {
      setter.call(newMap, boundFunction(value, key, map), value);
    }, undefined, true, true);
    return newMap;
  }
});

// `Map.prototype.mapValues` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  mapValues: function mapValues(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newMap = new (speciesConstructor(map, getBuiltIn('Map')))();
    var setter = aFunction$1(newMap.set);
    iterate_1(iterator, function (key, value) {
      setter.call(newMap, key, boundFunction(value, key, map));
    }, undefined, true, true);
    return newMap;
  }
});

// `Map.prototype.merge` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  // eslint-disable-next-line no-unused-vars
  merge: function merge(iterable /* ...iterbles */) {
    var arguments$1 = arguments;

    var map = anObject(this);
    var setter = aFunction$1(map.set);
    var i = 0;
    while (i < arguments.length) {
      iterate_1(arguments$1[i++], setter, map, true);
    }
    return map;
  }
});

// `Map.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aFunction$1(callbackfn);
    iterate_1(iterator, function (key, value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, key, map);
      }
    }, undefined, true, true);
    if (noInitial) { throw TypeError('Reduce of empty map with no initial value'); }
    return accumulator;
  }
});

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  some: function some(callbackfn /* , thisArg */) {
    var map = anObject(this);
    var iterator = getMapIterator(map);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate_1(iterator, function (key, value) {
      if (boundFunction(value, key, map)) { return iterate_1.stop(); }
    }, undefined, true, true).stopped;
  }
});

// `Set.prototype.update` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  update: function update(key, callback /* , thunk */) {
    var map = anObject(this);
    var length = arguments.length;
    aFunction$1(callback);
    var isPresentInMap = map.has(key);
    if (!isPresentInMap && length < 3) {
      throw TypeError('Updating absent value');
    }
    var value = isPresentInMap ? map.get(key) : aFunction$1(length > 2 ? arguments[2] : undefined)(key, map);
    map.set(key, callback(value, key, map));
    return map;
  }
});

// `Map.prototype.upsert` method
// https://github.com/thumbsupep/proposal-upsert
var mapUpsert = function upsert(key, updateFn /* , insertFn */) {
  var map = anObject(this);
  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
  var value;
  if (typeof updateFn != 'function' && typeof insertFn != 'function') {
    throw TypeError('At least one callback required');
  }
  if (map.has(key)) {
    value = map.get(key);
    if (typeof updateFn == 'function') {
      value = updateFn(value);
      map.set(key, value);
    }
  } else if (typeof insertFn == 'function') {
    value = insertFn();
    map.set(key, value);
  } return value;
};

// `Map.prototype.upsert` method
// https://github.com/thumbsupep/proposal-upsert
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  upsert: mapUpsert
});

// TODO: remove from `core-js@4`




// `Map.prototype.updateOrInsert` method (replaced by `Map.prototype.upsert`)
// https://github.com/thumbsupep/proposal-upsert
_export({ target: 'Map', proto: true, real: true, forced: isPure }, {
  updateOrInsert: mapUpsert
});

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
var es_set = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

// `Set.from` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
_export({ target: 'Set', stat: true }, {
  from: collectionFrom
});

// `Set.of` method
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
_export({ target: 'Set', stat: true }, {
  of: collectionOf
});

// https://github.com/tc39/collection-methods
var collectionAddAll = function (/* ...elements */) {
  var arguments$1 = arguments;

  var set = anObject(this);
  var adder = aFunction$1(set.add);
  for (var k = 0, len = arguments.length; k < len; k++) {
    adder.call(set, arguments$1[k]);
  }
  return set;
};

// `Set.prototype.addAll` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  addAll: function addAll(/* ...elements */) {
    return collectionAddAll.apply(this, arguments);
  }
});

// `Set.prototype.deleteAll` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  deleteAll: function deleteAll(/* ...elements */) {
    return collectionDeleteAll.apply(this, arguments);
  }
});

var getSetIterator = isPure ? getIterator : function (it) {
  // eslint-disable-next-line no-undef
  return Set.prototype.values.call(it);
};

// `Set.prototype.every` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  every: function every(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return !iterate_1(iterator, function (value) {
      if (!boundFunction(value, value, set)) { return iterate_1.stop(); }
    }, undefined, false, true).stopped;
  }
});

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  difference: function difference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction$1(newSet['delete']);
    iterate_1(iterable, function (value) {
      remover.call(newSet, value);
    });
    return newSet;
  }
});

// `Set.prototype.filter` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  filter: function filter(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction$1(newSet.add);
    iterate_1(iterator, function (value) {
      if (boundFunction(value, value, set)) { adder.call(newSet, value); }
    }, undefined, false, true);
    return newSet;
  }
});

// `Set.prototype.find` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  find: function find(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate_1(iterator, function (value) {
      if (boundFunction(value, value, set)) { return iterate_1.stop(value); }
    }, undefined, false, true).result;
  }
});

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  intersection: function intersection(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var hasCheck = aFunction$1(set.has);
    var adder = aFunction$1(newSet.add);
    iterate_1(iterable, function (value) {
      if (hasCheck.call(set, value)) { adder.call(newSet, value); }
    });
    return newSet;
  }
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  isDisjointFrom: function isDisjointFrom(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction$1(set.has);
    return !iterate_1(iterable, function (value) {
      if (hasCheck.call(set, value) === true) { return iterate_1.stop(); }
    }).stopped;
  }
});

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  isSubsetOf: function isSubsetOf(iterable) {
    var iterator = getIterator(this);
    var otherSet = anObject(iterable);
    var hasCheck = otherSet.has;
    if (typeof hasCheck != 'function') {
      otherSet = new (getBuiltIn('Set'))(iterable);
      hasCheck = aFunction$1(otherSet.has);
    }
    return !iterate_1(iterator, function (value) {
      if (hasCheck.call(otherSet, value) === false) { return iterate_1.stop(); }
    }, undefined, false, true).stopped;
  }
});

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  isSupersetOf: function isSupersetOf(iterable) {
    var set = anObject(this);
    var hasCheck = aFunction$1(set.has);
    return !iterate_1(iterable, function (value) {
      if (hasCheck.call(set, value) === false) { return iterate_1.stop(); }
    }).stopped;
  }
});

// `Set.prototype.join` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  join: function join(separator) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var sep = separator === undefined ? ',' : String(separator);
    var result = [];
    iterate_1(iterator, result.push, result, false, true);
    return result.join(sep);
  }
});

// `Set.prototype.map` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  map: function map(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))();
    var adder = aFunction$1(newSet.add);
    iterate_1(iterator, function (value) {
      adder.call(newSet, boundFunction(value, value, set));
    }, undefined, false, true);
    return newSet;
  }
});

// `Set.prototype.reduce` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    aFunction$1(callbackfn);
    iterate_1(iterator, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = callbackfn(accumulator, value, value, set);
      }
    }, undefined, false, true);
    if (noInitial) { throw TypeError('Reduce of empty set with no initial value'); }
    return accumulator;
  }
});

// `Set.prototype.some` method
// https://github.com/tc39/proposal-collection-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  some: function some(callbackfn /* , thisArg */) {
    var set = anObject(this);
    var iterator = getSetIterator(set);
    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
    return iterate_1(iterator, function (value) {
      if (boundFunction(value, value, set)) { return iterate_1.stop(); }
    }, undefined, false, true).stopped;
  }
});

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  symmetricDifference: function symmetricDifference(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    var remover = aFunction$1(newSet['delete']);
    var adder = aFunction$1(newSet.add);
    iterate_1(iterable, function (value) {
      remover.call(newSet, value) || adder.call(newSet, value);
    });
    return newSet;
  }
});

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
_export({ target: 'Set', proto: true, real: true, forced: isPure }, {
  union: function union(iterable) {
    var set = anObject(this);
    var newSet = new (speciesConstructor(set, getBuiltIn('Set')))(set);
    iterate_1(iterable, aFunction$1(newSet.add), newSet);
    return newSet;
  }
});

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id$1 = 0
    , queue$1 = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue$1.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue$1.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue$1.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue$1.push({
      handle: ++id$1,
      callback: callback,
      cancelled: false
    });
    return id$1
  };

  caf = function(handle) {
    for(var i = 0; i < queue$1.length; i++) {
      if(queue$1[i].handle === handle) {
        queue$1[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

// React 16+ relies on Map, Set, and requestAnimationFrame



raf_1.polyfill();

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning$1 = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning = function() {};

{
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      printWarning('Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var subscriptionShape = propTypes.shape({
  trySubscribe: propTypes.func.isRequired,
  tryUnsubscribe: propTypes.func.isRequired,
  notifyNestedSubs: propTypes.func.isRequired,
  isSubscribed: propTypes.func.isRequired
});

var storeShape = propTypes.shape({
  subscribe: propTypes.func.isRequired,
  dispatch: propTypes.func.isRequired,
  getState: propTypes.func.isRequired
});

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } }

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render$$1() {
      return React.Children.only(this.props.children);
    };

    return Provider;
  }(React.Component);

  {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: propTypes.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

var Provider = createProvider();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty$4 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var getPrototypeOf$1 = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf$1 && getPrototypeOf$1(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf$1(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols$1) {
            keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor$2(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$4(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var browser = invariant;

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) { next = current.slice(); }
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) { return; }
        isSubscribed = false;

        if (next === current) { next = current.slice(); }
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck$2(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

var _extends = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

var hotReloadingVersion = 0;
var dummyState = {};
function noop$1() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    browser(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits$1(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck$1(this, Connect);

        var _this = _possibleConstructorReturn$1(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        browser(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) { return; }

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) { this.forceUpdate(); }
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) { this.subscription.tryUnsubscribe(); }
        this.subscription = null;
        this.notifyNestedSubs = noop$1;
        this.store = null;
        this.selector.run = noop$1;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        browser(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) { return; }

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) { return props; }
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) { withExtras.ref = this.setWrappedInstance; }
        if (renderCountProp) { withExtras[renderCountProp] = this.renderCount++; }
        if (this.propsMode && this.subscription) { withExtras[subscriptionKey] = this.subscription; }
        return withExtras;
      };

      Connect.prototype.render = function render$$1() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return React.createElement(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(React.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoistNonReactStatics_cjs(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) { return true; }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) { return false; }

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */
var root$1;

if (typeof self !== 'undefined') {
  root$1 = self;
} else if (typeof window !== 'undefined') {
  root$1 = window;
} else if (typeof global !== 'undefined') {
  root$1 = global;
} else if (typeof module !== 'undefined') {
  root$1 = module;
} else {
  root$1 = Function('return this')();
}

var result = symbolObservablePonyfill(root$1);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) { return false; }
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning$1(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) { return; }

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning$1("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning$1(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i] != null ? arguments$1[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  var arguments$1 = arguments;

  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments$1[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  var arguments$1 = arguments;

  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments$1[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning$1('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$2 = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$2 = root$2.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$2(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString$2(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject$1(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      { verifyPlainObject(props, displayName, methodName); }

      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}

var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

var _extends$2 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends$2({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) { mergedProps = nextMergedProps; }
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        { verifyPlainObject(mergedProps, displayName, 'mergeProps'); }
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) { dispatchProps = mapDispatchToProps(dispatch, ownProps); }

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) { stateProps = mapStateToProps(state, ownProps); }

    if (mapDispatchToProps.dependsOnOwnProps) { dispatchProps = mapDispatchToProps(dispatch, ownProps); }

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) { mergedProps = mergeProps(stateProps, dispatchProps, ownProps); }

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) { return handleNewPropsAndNewState(); }
    if (propsChanged) { return handleNewProps(); }
    if (stateChanged) { return handleNewState(); }
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties$2(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

var _extends$1 = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) { continue; } if (!Object.prototype.hasOwnProperty.call(obj, i)) { continue; } target[i] = obj[i]; } return target; }

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match$1(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) { return result; }
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties$1(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match$1(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match$1(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match$1(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends$1({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

var connect = createConnect();

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Detect free variable `global` from Node.js. */
var freeGlobal$2 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$2;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$4 = _freeGlobal || freeSelf$1 || Function('return this')();

var _root = root$4;

/** Built-in value references. */
var Symbol$4 = _root.Symbol;

var _Symbol = Symbol$4;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$2 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$3 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$5.call(value, symToStringTag$3),
      tag = value[symToStringTag$3];

  try {
    value[symToStringTag$3] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$2.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}

var _getRawTag = getRawTag$2;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$3 = objectProto$5.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$4(value) {
  return nativeObjectToString$3.call(value);
}

var _objectToString = objectToString$4;

/** `Object#toString` result references. */
var nullTag$1 = '[object Null]';
var undefinedTag$1 = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$2 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$2(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }
  return (symToStringTag$2 && symToStringTag$2 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag$2;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$3 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$6.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$7.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var this$1 = this;

  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this$1.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var defineProperty$5 = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty$5;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$8.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$2;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$10.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$10.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$10.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$2 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$2 = '[object Function]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$2 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag$1] = typedArrayTags[float64Tag$1] =
typedArrayTags[int8Tag$1] = typedArrayTags[int16Tag$1] =
typedArrayTags[int32Tag$1] = typedArrayTags[uint8Tag$1] =
typedArrayTags[uint8ClampedTag$1] = typedArrayTags[uint16Tag$1] =
typedArrayTags[uint32Tag$1] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$2] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$9.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$12;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$2;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$11.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$11.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys$1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$13.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$12.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$14.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/** Built-in value references. */
var getPrototype$2 = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$2;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/* Built-in method references that are verified to be native. */
var DataView$1 = _getNative(_root, 'DataView');

var _DataView = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise$3 = _getNative(_root, 'Promise');

var _Promise = Promise$3;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap$2 = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap$2;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';
var objectTag$3 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$2 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$2)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$3 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$2;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$13 = objectProto$15.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$13.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/** Built-in value references. */
var Uint8Array$1 = _root.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return _cloneArrayBuffer(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return _cloneDataView(object, isDeep);

    case float32Tag$2: case float64Tag$2:
    case int8Tag$2: case int16Tag$2: case int32Tag$2:
    case uint8Tag$2: case uint8ClampedTag$2: case uint16Tag$2: case uint32Tag$2:
      return _cloneTypedArray(object, isDeep);

    case mapTag$3:
      return new Ctor;

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return _cloneRegExp(object);

    case setTag$3:
      return new Ctor;

    case symbolTag$1:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate$2 = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate$2) {
      return objectCreate$2(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike_1(value) && _getTag(value) == mapTag$4;
}

var _baseIsMap = baseIsMap;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

var isMap_1 = isMap;

/** `Object#toString` result references. */
var setTag$4 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike_1(value) && _getTag(value) == setTag$4;
}

var _baseIsSet = baseIsSet;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

var isSet_1 = isSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag$1] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet_1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_1(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

var cloneDeep_1 = cloneDeep;

var file$7 = 'util';

var tbodyId = 0; // used in objToHtml function, where it will be incremented without any need to reset to 0
var numSearchGroups = 0;

// add quotes to s
function quote(s) {
    return '"' + s +  '"'
}

// use cloneDeep to return clone of o
function clone(o) {
    return cloneDeep_1(o)
}

// 07/17/2004 -> 1984-07-17T00:00:00Z
function dateToISODate(s, limit) {
   var T = (limit && limit === 'to') ? 'T23:59:59Z' : 'T00:00:00Z'; // if limit = 'to' set 'T' to 1 sec before midnight
   return s.substring(6) + '-' + s.substring(0, 2) + '-' + s.substring(3, 5) + T
}

// delete props in 'arr' from object 'o'
function deleteProps(o, arr) {
    arr.forEach(function (a) { return delete o[a]; });
}

// format iterable field lists of ids, returning id_1, id_2, ... id_n


/*
    Async function to get data from 'url' using 'options'. After rerieval the data is passed to the callback function, 
    or 'err' is passed if an error occurs.  
    
    @param string url 
    @param object options
    @param function callback
*/
function getData$1(url, options, callback, payload) {
    //console.log(file, url)
    if (payload) { logJson(file$7, payload); }
    options.referrer = ENV.referer;

    fetch(url, options)
        .then(function (response) {
            if (!response.ok) { throw Error(response.status + ': ' + response.statusText) }
            return response.text()
        })
        .then(function (data) {
            data = JSON.parse(data); // this will throw a parse error if data is invalid json
            callback(data, null, payload);
        })
        .catch(function (err) {
            console.error(file$7, err);
            callback(null, err, payload);
        });        
}

// convert timestamp in ms to locale string
function getDateStr(timestamp) { 
    return (timestamp) ? new Date(timestamp).toLocaleString('en-US') : null
}

// return default objects by 'name'
function getDefault(name) {
    if (name === 'booleans') {
        return {
              appLoaded: false
            , countLoading: false
            , dataLoading: false
            , dev: false        
            , hasMypdb: false
            , addUrl: true }

    } else if (name === 'chemical') {
        return { 
              count: -1 
            , value: ''
            , type: DEFAULT_CHEMICAL_QUERY_TYPE 
            , match_subset: false 
            , descriptor_type: DEFAULT_CHEMICAL_DESCRIPTOR_TYPE 
            , match_type: DEFAULT_CHEMICAL_MATCH_TYPE }

    } else if (name === 'menu-state') {
        return { 
              menuIndex: -1
            , menuItems: []
            , menuOpen: false
            , loading: false }

    } else if (name === 'tabular-report') {
        return { 
              batch: false 
            , format: null
            , mode: null
            , clicked: []
        }    
    } else if (name === 'request-options') {
        return { 
              pager: { 
                  start: 0
                , rows: DEFAULT_REQUEST_PAGER_ROWS }
            , scoring_strategy: DEFAULT_SCORING_STRATEGY
            , sort: [{ 
                  sort_by: 'score'
                , direction: 'desc' }] }

    } else if (name === 'request-pager') {
        return { 
              start: 0
            , rows: DEFAULT_REQUEST_PAGER_ROWS }

    } else if (name === 'request-sort') {
        return [{ 
              sort_by: 'score'
            , direction: 'desc' }]

    } else if (name === 'sequence') {
        return { 
              count: -1
            , value: ''
            , entry_id: ''
            , evalue_cutoff: DEFAULT_EVALUE_CUTOFF
            , identity_cutoff: DEFAULT_IDENTITY_CUTOFF
            , target: DEFAULT_SEQUENCE_TARGET }

    } else if (name === 'seqmotif') {
        return { 
              count: -1
            , value: ''
            , pattern_type: DEFAULT_SEQUENCE_MOTIF_PATTERN_TYPE
            , target: SEQUENCE_TARGET_OPTIONS[0].key
            , placeholder: PLACE_HOLDERS.sequenceMotifSearch[0] }

    } else if (name === 'structure') {
        return { 
              count: -1
            , entry_id: ''
            , operator: 'strict_shape_match'
            , property: ''
            , value: '' }
    } else if (name === 'views') {
        return { 
              tree:   tree_ids[0]
            , dev:    null
            , help:   'overview'        // TODO create constants
            , mypdb:  'login'           // login, queries, account, documentation - TODO create constants
            , report: SEARCH_SUMMARY
            , search: SUMMARY
            , tab:    TAB_SEARCH      // see TAB_ definitions
        }

    } else {
        console.error('getDefault(): UNKNOWN NAME=' + name);
    }
}

// get display name from metadata
function getDisplayName(attribute) {
    if (attribute.indexOf('.keyword') !== -1) { attribute = attribute.replace('.keyword', ''); }
    return (metadata[attribute]) ? metadata[attribute].display_name : attribute
}

function getEl(id) {
    return document.getElementById(id)
}

function getElVal(id) {
    return document.getElementById(id).value
}

// get field object from metadata
function getFieldObj(attribute) {
    return metadata[attribute] ? metadata[attribute] : null
}

// generate a guid - see: http://stackoverflow.com/a/2117523.
function getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    })
}

/*
    Async function to get text/html from a url using options. After retrieval the data is passed to
    the callback function.  
    
    @param string url 
    @param function callback
*/
function getHtml$1(url, callback) {
    var options = { method: 'GET', 'Content-Type': 'text/html' };
    //console.log(file + ': getHtml()')

    fetch(url, options)
        .then(function (response) {
            if (!response.ok) { throw Error(response.status + ': ' + response.statusText) }
            return response.text()
        })
        .then(function (data) {
            callback(data, null);
        })
        .catch(function (err) {
            console.error(file$7, err);
            callback(null, err);
        });        
}

// return array of identifiers from either searchResults or dataResults
function getIdentifiers(results, rows, start) {
    if ( rows === void 0 ) rows = DEFAULT_REQUEST_PAGER_ROWS;
    if ( start === void 0 ) start = 0;

    var identifiers = [];

    if (results.result_set) { // searchResults
        var rs = results.result_set;
        for (var i = 0; i < rows; i++) { // get single page of identifiers for gql
            var j = start + i;
            if (rs[j]) { identifiers.push(rs[j].identifier); }
            else { break }    
        }
    } else { // dataResults
        results.forEach(function (r) { return identifiers.push(r.identifier); });
    }
    return identifiers
}

/*
    value is:
        arr, 
            or 
        space or comma separated list - if it is, convert it to an array
    otherwise return a single element array
*/    
function getIterable(value, attribute) {
    var fo = getFieldObj(attribute);
    var arr;

    if (Array.isArray(value)) {
        arr = value;
    } else {
        value = value.toUpperCase(); // OK to assume all iterable ID fields use UC?
        if (value.indexOf(',') !== -1) { arr = value.split(','); }  
        else if (value.indexOf(' ') !== -1) { arr = value.split(' '); }  
    }

    if (arr) {
        for(var i = 0, n = arr.length; i < n; i++) { arr[i] = arr[i].trim(); } 
        arr = arr.filter(function (s) { return s.length > 1; });
        if (fo.type === 'integer') {
            for(var i$1 = 0, n$1 = arr.length; i$1 < n$1; i$1++) { arr[i$1] = parseInt(arr[i$1]); }
        } else if (fo.type === 'number') {
            for(var i$2 = 0, n$2 = arr.length; i$2 < n$2; i$2++) { arr[i$2] = parseFloat(arr[i$2]); }
        }

        return arr
    } else {
        if (fo.type === 'integer') { value = parseInt(value); }
        else if (fo.type === 'number') { value = parseFloat(value); }
        return [value]
    }
}

// return a map object in the form { "scientific_name" : "Scientific Name" }


// init and/or return the number of searchGroups in global selectorItems
function getNumSearchGroups() {
    if (numSearchGroups === 0) { selectorItems.forEach(function (item) { if (item.type === 'header') { numSearchGroups++; } }); }
    return numSearchGroups
}


// return a map object in the form { "scientific_name" : obj }


//return query string parameters as an object with key/value pairs
function getQsParams(qs) {
    var params = {};
    if (qs && qs.length > 0) {
        var match;
        //const plus = /\+/g  // regex for replacing '+' with ' '
        var search = /([^&=]+)=?([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s) }; // .replace(plus, ' ')
        while ((match = search.exec(qs))  !== null) {
            var key = decode(match[1]);
            var val = decode(match[2]);
            params[key] = val;
        }
    }
    return params
}

function getReferer() {
    var href = window.location.href;
    var index = href.lastIndexOf('/search');
    if (index !== -1) { return href.substring(0, index) }
    return href
}

// return s as a sort obj, for example: 'pdb_id desc' -> { sort_by: 'pdb_id', direction: 'desc' }
function getSort(s) {
    var arr = s.split(' ');
    return [ { sort_by: arr[0], direction: arr[1] } ]
}

// return storage
function getStorage() {
    if (typeof(Storage) !== 'undefined') {
        return (STORAGE_TYPE === 'session') ? window.sessionStorage : window.localStorage
    } else {
        return null
    }    
}

/*
Date.prototype.getDate()
Returns the day of the month (1-31) for the specified date according to local time.
Date.prototype.getDay()
Returns the day of the week (0-6) for the specified date according to local time.
Date.prototype.getFullYear()
Returns the year (4 digits for 4-digit years) of the specified date according to local time.
Date.prototype.getHours()
Returns the hour (0-23) in the specified date according to local time.
Date.prototype.getMilliseconds()
Returns the milliseconds (0-999) in the specified date according to local time.
Date.prototype.getMinutes()
Returns the minutes (0-59) in the specified date according to local time.
Date.prototype.getMonth()
Returns the month (0-11) in the specified date according to local time.
Date.prototype.getSeconds()
Returns the seconds (0-59) in the specified date according to local time.
*/


// return document.title
function getTitle(s) { return 'RCSB PDB: ' + s}

// get total_count from search data.results[0].pager


// return the field type


// return query string from url
function getUrlQs(search) {
    if (!search) { search = window.location.search; }
    return (search && search.length > 0) ? decodeURIComponent(search.substring(1)) : null // remove leading '?' and decode
}

function getWidth(id) {
    return (document.getElementById(id)) ? document.getElementById(id).offsetWidth : -1
}

// Return true if attribute 'a' is a special case. If so, then a search by that attribute should go directly to a page instead of returning search results
function isAttributeSpecialCase(a) {
    return (   a === 'rcsb_entry_container_identifiers.entry_id'
            || a === 'rcsb_repository_holdings_removed_entry_container_identifiers.entry_id'
            || a === 'rcsb_repository_holdings_unreleased_entry_container_identifiers.entry_id'
            || a === 'rcsb_chem_comp_container_identifiers.comp_id'
            || a === 'rcsb_chem_comp_container_identifiers.prd_id')
}            

// return true if fo is a date field
function isDate(fo) {
    return fo && (fo.format === 'date' || fo.format === 'date-time')
}    

// check if sort is default sort


/*
    check if o is empty
    return true if
        o is undefined
        o is a function
        o is object with no properties
        o is empty array
        o is empty string or string with whitespace only
*/
function isEmpty(o) {
    if (o === null) { return true }  // note: const n = null is typeof 'object'!

    var type = typeof o;
    if (type === 'undefined' || type  === 'function') {
        return true
    } else if (type === 'object') {
        if (Array.isArray(o)) { return o.length === 0 } // array is also obj so check for it before checking for object
        else { return Object.keys(o).length === 0 }
    } else if (type === 'string') {
        return o.trim().length === 0
    } else if (type === 'number' || type === 'boolean') { // number or boolean will always have a value
        return false
    } else {
        return true // anything else, e.g. symbol
    }
}

// 1984-07-17T00:00:00Z -> 07/17/2004 
function isoDateToDate(s) {
    return s.substring(5, 7) + '/' + s.substring(8, 10) + '/' + s.substring(0, 4)
}

// return true if o is a range operator
function isRange(o) {
    return (o === 'range' || o === 'range_closed')
}    

// log obj as json string, for developer use
function logJson(file, o, name) {
    if (name === null || typeof name  === 'undefined' || typeof name !== 'string') { name = 'object'; }
    console.log(file + ': ' + name + '=' + toJson(o, 2));
}

// log top-level props of obj, for developer use


// log obj recursively, for developer use - note: use with care - may cause out-of-memory browser crash if used on large objs that have functions and possible circular references


// recursive function to generate a hierarchical html representation of an object, for developer use
function objToHtml(o, depth, excludes) {
    //if (depth === 0) console.log(file, 'objToHtml')
    var level = depth;
    depth++;
    var s, id;
    if (o == null) {
        return 'null'
    } else if (Array.isArray(o)) {
        s = '<table class="obj">';
        id = tbodyId++;
        s += '<thead><tr><th onclick="toggleStateObj(' + id + ')" class="array">&darr; Array</th><th onclick="toggleAll(' + id + ')">&darr;&darr;</th></tr></thead>';
        s += '<tbody class="tbody" id="tbody' + id + '">';
        for (var i = 0, n = o.length; i < n; i++) {
            s += '<tr><td>' + i + '</td><td>' + objToHtml(o[i], depth, excludes) + '</td></tr>';
        }
        s += '</tbody>';
        s += '</table>';
        return s
    } else if (typeof o === 'undefined') {
        return 'undefined'
    } else if (typeof o === 'boolean') {
        return (o) ? 'true' : 'false'
    } else if (typeof o === 'number' || typeof o === 'string') {
        return o
    } else if (typeof o === 'function') {
        return 'function'
    } else if (typeof o === 'object') {
        s = '<table class="obj">';
        id = tbodyId++;
        s += '<thead><tr><th onclick="toggleStateObj(' + id + ')" class="object">&darr; Object</th><th onclick="toggleAll(' + id + ')">&darr;&darr;</th></tr></thead>';
        if (level === 0) { s += '<tbody id="tbody' + id + '">'; } // display level 0
        else { s += '<tbody class="tbody" id="tbody' + id + '">'; }
        for (var prop in o) {
            if (!excludes.includes(prop)) {
                s += '<tr><td>' + prop + '</td><td>' + objToHtml(o[prop], depth, excludes) + '</td></tr>';
            } else {
                var desc = (Array.isArray(o[prop])) ? o[prop].length : typeof o[prop];
                s += '<tr><td>' + prop + ' [' + desc +  ']</td><td>[exclude]</td></tr>';
            }    
        }
        s += '</tbody>';
        s += '</table>';
        return s
    } else {
        return 'unkown'
    }
}

// simple pad function that assumes only 2 digits


// remove html tags from query


// remove '<b>', '<em>' tags and possibly other tags from s - TODO refactor to not use <b> in menus - use em and set to 'bold' in css
function removeHtml(s) {
    return s
        .replace(/<b>/g,'')
        .replace(/<\/b>/g,'')
        .replace(/<em>/g,'')
        .replace(/<\/em>/g,'')
}    

// remove quotes from s - note: applies to double-quote only


/*
    track in google analytics
    see: https://rcsbpdb.atlassian.net/wiki/spaces/S23PM/pages/406126887/Google+Analytics+Tracking
*/
function setGtag$1(event_action, event_label) {
    if (typeof gtag !== 'undefined') {
        console.log(file$7, 'setGtag: event_action=' + event_action + ', event_label=' + event_label);
        var event_category = EVENT_CATEGORY_SEARCH;
        gtag('event', event_action, { event_category: event_category, event_label: event_label });
    }
}

// return boolean indicating that sort1 is equal to sort2


// return sort obj as string, for example: 'pdb_id asc'
function sortToStr(sort) {
    return sort[0].sort_by + ' ' + sort[0].direction
}

// see https://stackoverflow.com/questions/38619981/react-prevent-event-bubbling-in-nested-components-on-click for discussion on this issue


// return object o as json string, mainly for developer use
function toJson(o, format) {
    if (typeof format  === 'undefined' || isNaN(format)) { format = 2; } // set format to 2 if param is undefined or isNaN
    return JSON.stringify(o, null, format)
}

// uppercase first character of string 's'


// return null if value is not valid (null|undefined|zero-length string)
function validateValue(s) {
    return (   typeof s === 'undefined'
            || s === null
            || s.trim().length === 0) ? null : s.trim()
}

var integer = /^[0-9]*$/;
var scientific = /^[0-9e.-]*$/i;

// sequence
var sequenceRegex = {
      pdb_protein_sequence: /^[ARNDBCEQZGHILKMFPSTWYVX]+$/
    , pdb_dna_sequence: /^[ACTG]+$/
    , pdb_rna_sequence: /^[ACUG]+$/
};    
var sequenceTargetChars = {
      pdb_protein_sequence: 'ARNDBCEQZGHILKMFPSTWYVX'
    , pdb_dna_sequence: 'ACTG'
    , pdb_rna_sequence: 'ACUG'
};
/*
    Note: the order of target ids in this array is important. The array is used to determine
          the correct target for a given sequence. A regex 'pdb_protein_sequence' test on a 
          DNA sequence would return true, therefore it is necessary to test for 'pdb_dna_sequence'
          before testing for 'pdb_protein_sequence'. 
          
          A regex 'pdb_rna_sequence' test will ONLY return
          true for an RNA sequence, because 'U'is only found in RNA.
*/
var sequenceTargets = [
      'pdb_dna_sequence'
    , 'pdb_rna_sequence'
    , 'pdb_protein_sequence'
];
var sequenceTargetsLen = sequenceTargets.length;
var sequenceMsg = 'You may need to enter a different sequence, or select a different "Target" value. Allowable characters are: \n\n';

/*
    check if o is empty

    returns true if
        o is undefined
        o is a function
        o is object with no properties
        o is empty array
        o is empty string or string with whitespace only
*/
function isEmpty$1(o) {
    if (o === null) { return true }  // note: const n = null is typeof 'object'!

    var type = typeof o;
    if (type === 'undefined' || type  === 'function') {
        return true
    } else if (type === 'object') {
        if (Array.isArray(o)) { return o.length === 0 } // array is also obj so check for it before checking for object
        else { return Object.keys(o).length === 0 }
    } else if (type === 'string') {
        return o.trim().length === 0
    } else if (type === 'number' || type === 'boolean') { // number or boolean will always have a value
        return false
    } else {
        return true // anything else, e.g. symbol
    }
}


function isInteger(val) { return integer.test(val) }
function isScientific(val) { return scientific.test(val) }

function evalueCutoff(val) {
    val = parseFloat(val);
    if (!isNaN(val)) { return true }
    else {
        alert('E-Value Cutoff must be a value in either scientific, decimal or integer notation');
        return false
    }
}

function identityCutoff(val) {
    val = parseInt(val);
    if (Number.isInteger(val) && val >= 0 && val <= 100) { return true }
    else {
        alert('Identity Cutoff must be an integer value of 0-100 (representing a percentage value)');
        return false
    }
    
}

/*
    Test cases:
        3FO4 - RNA
        3FHZ - Protein/DNA
        6V7B - ATATATATATATATATATATATATATATATATATATATATAT - ERROR
*/
function sequence(val, target) {
    if (!sequenceLength(val)) { return false }

    var result = sequenceRegex[target].test(val);
    if (!result) {
        var msg = MAP[target] + ' sequences may only contain the characters ' + sequenceTargetChars[target] + '\n';
        msg += sequenceMsg;
        for (var p in sequenceTargetChars) {
            msg += MAP[p] + ': ' + sequenceTargetChars[p] + '\n';
        }
        alert(msg);
        return false 
    }    
    return true
}

function sequenceMotif(val) {
    if (val.length < MIN_SEQUENCE_MOTIF_LENGTH) {
        alert('The sequence motif must contain at least ' + MIN_SEQUENCE_MOTIF_LENGTH + ' characters');
        return false
    } 
    return true
}

function sequenceLength(val) {
    if (val.length < MIN_SEQUENCE_LENGTH) {
        alert('The sequence must contain at least ' + MIN_SEQUENCE_LENGTH + ' residues');
        return false
    } 
    return true
} 

function getTarget(val) {
    for (var i = 0; i < sequenceTargetsLen; i++) {
        var target = sequenceTargets[i];
        if (sequenceRegex[target].test(val)) { return target }
    }
    return null
}

/* functions to parse or process a request.query object */

var file$6 = 'common/query';

/*
    - take a query node and remove unnecessarily nested nodes
    - note: this function should not be used to transform a query before submitting to sierra
        - it is called:
            - when converting a query to html - see actions/helpers/request-to-html.js
            - when opening a refinement query in the query builder
*/    
function cleanNode(query) {
    var removed = { value: true };
    var count = 1;
    while (removed.value) {
        cleanNodes(query, null, -1, removed);
        //console.log(file, 'cleanNode: count=' + count + ' removed.value=' + removed.value)
        count++;
        if (count > 10) {
            //console.log(file, 'cleanNode: RUNAWAY LOOP: count=' + count + ' removed.value=' + removed.value)
            break // guard against runaway loop
        }    
    }
    removeNodeIds(query);
}

// non-recursive function to get a node with the given label - this function only parses the root node
function getChildNodeByLabel(query, label) {
    if (hasLabel(query, label)) { return query }
    if (query.type === 'group') {
        for (var i = 0; i < query.nodes.length; i++) {
            var node = query.nodes[i];
            if (hasLabel(node, label)) { return node }
        }    
    }
    return null
}

/* 
    return an empty group node with specified properties
        - if no parameters are passed, an 'and' node with no label will be returned 
*/    
function getEmptyGroupNode(label, logical_operator) {
    if ( logical_operator === void 0 ) logical_operator = 'and';

    var node = { type: 'group', logical_operator: logical_operator, nodes: [] };
    if (label) { node.label = label; }
    return node
}

// return an empty terminal node of given service type, or a 'text' service terminal node if no parameter is passed
function getEmptyTerminalNode(service) {
    if ( service === void 0 ) service = 'text';

    return { type: 'terminal', service: service }
}

// recursive function that returns a node at any level of nesting with the given label
function getNodeByLabel(o, label, result) {
    if (!result.node) {
        if (o.label === label) {    
            result.node = o;
        } else {
            if (o.type === 'group') {
                o.nodes.forEach(function (node) { return getNodeByLabel(node, label, result); });
            }    
        }
    }
}

/*
    convert request query to qbQuery

          LABEL_INPUT_GROUP     = 'input_group'     // input group in Rule
        , LABEL_QUERY_BUILDER   = 'query_builder' 
        , LABEL_REFINEMENTS     = 'refinements'
        , LABEL_RULE            = 'rule'
        , LABEL_SEQUENCE        = 'sequence'
        , LABEL_STRUCTURE       = 'structure'
        , LABEL_TEXT            = 'text'

        [QUERY] // NO LABEL
        [ + REFINEMENTS]

        - OR -

        QUERY_BUILDER
            [ SEQUENCE ]
            [ STRUCTURE ]
            [ TEXT ]
                [ RULE ]
                    [ INPUT_GROUP ]
        [ + REFINEMENTS ]  
        
    convert a request into a queryBuilder request, called from components/Query.js openInQb()
*/    
function getQbRequest(request) {
    request = clone(request);

    var query = request.query;
    //u.logJson(file, query, 'query')

    var qbNode = getChildNodeByLabel(query, LABEL_QUERY_BUILDER);
    var refinementNode = getChildNodeByLabel(query, LABEL_REFINEMENTS);

    //if (qbNode) u.logJson(file, qbNode, 'qbNode')
    //if (refinementNode) u.logJson(file, refinementNode, 'refinementNode')
    if (qbNode) { console.log(file$6, 'FOUND qbNode'); }
    if (refinementNode) { console.log(file$6, 'FOUND refinementNode'); }

    var queryBuilderNode;

    if (qbNode && refinementNode) { // merge refinement node into qb text service node
        queryBuilderNode = qbNode;

        removeRefinementNode(query);
        delete refinementNode.label;

        //u.logJson(file, query, 'query')
        //u.logJson(file, refinementNode, 'refinementNode')
        cleanNode(refinementNode);
        //u.logJson(file, refinementNode, 'refinementNode: after cleanNode')

        var ret = {};
        getServiceNode(qbNode, ret, 'text');
        if (ret.node) {
            var textNode = ret.node;
            if (textNode.logical_operator === 'and') {
                if (refinementNode.type === 'terminal') {
                    var groupNode = getEmptyGroupNode();
                    groupNode.nodes.push(refinementNode);
                    textNode.nodes.push(groupNode);
                } else {
                    textNode.nodes.push(refinementNode);
                }
            }
        }    
    } else if (qbNode) {
        return request // qb node only, so return original request
    } else if (refinementNode) {
        queryBuilderNode = getEmptyGroupNode(LABEL_QUERY_BUILDER);
        // must be non-qb query + refinement

        removeRefinementNode(query);
        delete refinementNode.label;

        if (query.logical_operator === 'and') {
            refinementNode.nodes.forEach(function (n) {
                query.nodes.push(n);
            });
        }
        var textNode$1 = getEmptyGroupNode(LABEL_TEXT);
        textNode$1.nodes.push(query);
        queryBuilderNode.nodes.push(textNode$1);

    } else { // convert to qb node
        // must be non-qb query
        queryBuilderNode = getEmptyGroupNode(LABEL_QUERY_BUILDER);

        if (query.type === 'terminal') {
            if (query.service === 'text') {
                var groupNode$1 = getEmptyGroupNode();
                groupNode$1.nodes.push(query);
                
                var textNode$2 = getEmptyGroupNode(LABEL_TEXT);
                textNode$2.nodes.push(groupNode$1);
                queryBuilderNode.nodes.push(textNode$2);
            } else {
                query.label = query.service;
                queryBuilderNode.nodes.push(query);
            }
        } else {
            // query is a group
            //const logical_operator = query.logical_operator
            // if (logical_operator === 'and') {

            // } else {
            //     // TODO
            // }
            var textNode$3 = getEmptyGroupNode(LABEL_TEXT);
            textNode$3.nodes.push(query);
            queryBuilderNode.nodes.push(textNode$3);
        }
    }

    //u.logJson(file, queryBuilderNode, 'queryBuilderNode')
    request.query = queryBuilderNode;

    return request
}

function getQueryBuilderEventLabel(query) {
    try {
        var node = getChildNodeByLabel(query,  LABEL_QUERY_BUILDER);
        var services = [];
        if (node) {
            var serviceNodes = getQueryBuilderServiceNodes(node);
            //u.logJson(file, serviceNodes, 'getQueryBuilderEventLabel: serviceNodes')
            for (var p in serviceNodes) { services.push(QB_SERVICE_MAP[p]); }
            if (services.length > 0) { return services.join(', ') }
        }
    } catch(e) { console.error('getQueryBuilderLabel: ' + e); }    
    return null
}

// parse queryBuilder node to get individual service nodes
function getQueryBuilderServiceNodes(node) {
    var serviceNodes = {};
    QB_SERVICES.forEach(function (service) {
        var ret = {};
        getServiceNode(node, ret, service); 
        if (ret.node) { serviceNodes[service] = ret.node; }
    });
    return serviceNodes
}

// return a query object from a 'q' querystring parameter
function getQueryFromQ(q) {
    console.log(file$6, 'q=' + q);
    if (isEmpty$1(q)) { return null }

    var arr, logical_operator, query;

    if (q.indexOf(QS_OR) !== -1) {
        arr = (q.split(QS_OR));
        logical_operator = 'or';
    }    
    if (q.indexOf(QS_AND) !== -1) {
        arr = (q.split(QS_AND));
        logical_operator = 'and';
    }
    
    if (arr) {
        query = getEmptyGroupNode(null, logical_operator); // create enclosing group node, without label
        arr.forEach(function (a) { return query.nodes.push(getQueryFromStr(a)); });
    } else {
        query = getQueryFromStr(q);
    }

    return query
}

function getRefinementsEventLabel(query) {
    try {
        var node = getChildNodeByLabel(query, LABEL_REFINEMENTS);
        if (node) {
            //u.logJson(file, node, 'getRefinementsEventLabel: node')
            var attributes = [];
            node.nodes.forEach(function (n) {
                if (n.nodes && n.nodes[0] && n.nodes[0].parameters) {
                    var attribute = n.nodes[0].parameters.attribute;
                    if (metadata[attribute]) { attributes.push(metadata[attribute].display_name); }
                    else { throw 'attribute ' + attribute + ' NOT FOUND' }
                }
            }); 
            //u.logJson(file, attributes, 'getRefinementsEventLabel: attributes')
            if (attributes.length > 0) { return attributes.join(', ') }
        }
    } catch(e) { console.error('getRefinementsEventLabel: ' + e); }    
    return null
}

// recursive function to find the specified service node
function getServiceNode(o, ret, service) {
    if (!ret.node) {
        if (o.label === service || o.service === service) { // note: added 'o.service === service' condition because not all incoming requests will have an assigned label
            ret.node = o;
        } else {
            if (o.type === 'group') { o.nodes.forEach(function (node) { return getServiceNode(node, ret, service); }); }
        }
    }
}

/*
    return a query obj for a single attr/value pair, without setting 'type' and 'service' params
    - these will be set to default values when the query is processed
*/    
function getSimpleQuery(attribute, value) {
    if (attribute) {
        var operator = getDefaultOperator(attribute);
        if (operator === 'in') { value = getIterable(value, attribute); }
        return { parameters: { attribute: attribute, operator: operator, value: value } }
    } else {
        return { parameters: { value: value } }
    }    
}

// return an href containing a query obj for a single attr/value pair
function getSimpleQueryHref(attribute, value) {
    return '/search?query=' + encodeURIComponent(JSON.stringify(getSimpleQuery(attribute, value)))
}

// return a text group nested attribute node
function getTextGroupNestedNode(node, nestedNode) {
    return  {
                  type: 'group'
                , logical_operator: 'and'
                , nodes: [ node, nestedNode ]
                , label: LABEL_NESTED_ATTRIBUTE  
            }
}

// return a text terminal node object using the 'in' operator
function getTextTerminalInNode(o, values) {
    return  getTextTerminalNode({
                attribute: o.attribute, 
                operator: 'in',
                negation: o.not,
                value: values 
            })
}

// return a text terminal node with the given parameters
function getTextTerminalNode(parameters) {
    return { type: 'terminal', service: 'text' , parameters: parameters }
}


// non-recursive function that returns true if query has a top-level node where 'label' property = label 
function hasChildNodeByLabel(query, label) {
    if (hasLabel(query, label)) { return true }
    if (query.type === 'group') {
        for (var i = 0; i < query.nodes.length; i++) {
            if (hasLabel(query.nodes[i], label)) { return true }
        }    
    }
    return false
}

// recursive function that returns true if node has a child node at any level of nesting with the given label
// currently not called from anywhere


/*
    check if request has a valid queryBuilder
        - added because some saved queries have an invalid qb label due to an earlier bug - this has now been fixed
        - if the label is invalid, remove it
*/
function hasValidQueryBuilder(request) {
    //u.logJson(file, request, 'hasValidQueryBuilder: request')
    
    var result = {};
    getNodeByLabel(request.query, LABEL_QUERY_BUILDER, result);

    if (result.node) {   
        var node = result.node;  
        if (node.type === 'terminal') {
            delete node.label;
            console.log('hasValidQueryBuilder: INVALID QB LABEL DELETED FROM terminal NODE');
            return false
        } else { // group
            if ( node.nodes && node.nodes[0] && node.nodes[0].type === 'terminal' && node.nodes[0].label === 'text') {
                delete node.label;
                console.log('hasValidQueryBuilder: INVALID QB LABEL DELETED FROM group NODE');
                return false
            }    
        }
        return true // qb node is valid
    } 
    return false // request no qb node
}     


// check if query contains a valid populated terminal node
function isValid(query) {
    if (!query || !query.type) { return false }

    //u.logJson(file, query, 'isValid: query')

    var ret = { found: false };
    hasValidNode(query, ret);
    return ret.found
}

// prepare query for sending to server
function prepareQuery(query) {
    setNodeIds(query, { id: 0 });
}

// non-recursive function to remove 'refinements' node from query - note: 'refinements' node is always in a root-level nodes array
function removeRefinementNode(query) {
    query.nodes = query.nodes.filter(function (node) { return node.label !== LABEL_REFINEMENTS; });
}

// set gtag event label if query is either queryBuilder or refinement query (basic searwch is handled in components/SearchBar.js)
function setGtag$$1(query) {
    var action, label;
    if (hasChildNodeByLabel(query, LABEL_REFINEMENTS)) {
        action = 'Refinements';    
        label = getRefinementsEventLabel(query);
    } else if (hasChildNodeByLabel(query, LABEL_QUERY_BUILDER)) {
        action = 'Advanced Search Query Builder';
        label = getQueryBuilderEventLabel(query);
    }
    if (label) { setGtag$1(action, label); }
}

// recursive function to set 'text' service for all terminal nodes in query node that do not have a defined 'service'
function setService(o) {
    if (o.type === 'group') {
        o.nodes.forEach(function (node) { return setService(node); });
    } else {
        if (!o.service) { o.service = 'text'; }
    }    
}


// private functions ---------------------------------------------------------------------------------------------------

// recursive function to remove unnecessary group nodes
function cleanNodes(o, parent, index, removed) {
    removed.value = false;
    delete o.label;
    if (o.type === 'group') {
        if (o.nodes.length === 1) {
            var node = o.nodes[0];
            if (parent) {
                parent.nodes[index] = node;
                removed.value = true;
            } else {
                Object.assign(o, node);
                if (node.type === 'terminal') {
                        delete o.nodes;
                        delete o.logical_operator;
                }
                removed.value = true;
            }    
        } else {
            o.nodes.forEach(function (node, i) { cleanNodes(node, o, i, removed); });
        }
    }
}

// return the default operator for a given attribute
function getDefaultOperator(attribute) {
    var fo = getFieldObj(attribute);
    //logJson(file, fo, 'fo')
    if (fo) { return fo.default_operator }
    else { throw 'FIELD OBJECT NOT FOUND FOR ' + attribute }
}

/*
    format:
        q=*                        // all
        q=val                      // value only - full-text
        q=attr:val                 // single atribute, value 

        // TODO deprecate 'q' url requests where the operator is not the default operator - use 'query' for those 
        // https://127.0.0.1:8443/search?q=exptl.method:(ELECTRON MICROSCOPY OR ELECTRON CRYSTALLOGRAPHY)
*/
function getQueryFromStr(s) {
    console.log(file$6, 'getQueryFromStr: s=' + s);
    var negation = false;    
    var i = s.indexOf(':');
    var attribute, value, query;

    if (i === -1) { // no field specified, therefore this is a fulltext search
        value = s;
        if (value === '*') { query = {}; } // special case for all structures
        else { query = { parameters: { value: value } }; }
    } else {
        attribute = s.substring(0, i).trim();
        value = s.substring(i + 1).trim();

        if (attribute.substring(0, 1) === '-') {
            attribute = attribute.substring(1);
            negation = true;
        }
        
        var operator = getDefaultOperator(attribute);
        console.log(operator);
        if (operator === 'in') { value = getIterable(value, attribute); }
        if (operator === 'exact_match' && typeof value !== 'string') { value = '' + value; } // convert numeric value to string if operator is 'exact_match'

        if (value.indexOf('>') === 0 || value.indexOf('<') === 0) { // TODO deprecate this format - see stats pages
            // q=rcsb_entry_info.resolution_combined:>= 1.8
            operator = value.substring(0, 1);
            if (value.substring(1, 2) === '=') { operator += '='; }
            console.log(file$6, 'operator=' + operator);
            value = value.replace(operator, '').trim();
            operator = OPERATOR_MAP_REVERSE[operator];
            value = (value.indexOf('.') !== -1) ? parseFloat(value) : parseInt(value);
        } else if (value.indexOf(' - ') !== -1) {
            // q=rcsb_entry_info.resolution_combined:1.8 - 2.0
            var a = value.split(' - ');
            if (!isNaN(a[0]) && !isNaN(a[1])) {
                operator = 'range';
                value = [ parseFloat(a[0]), parseFloat(a[1]) ];
            }
        }

        query = { parameters: { attribute: attribute, negation: negation, operator: operator, value: value } };
        //u.logJson(file, query, 'query')
    }    
    query = Object.assign(getEmptyTerminalNode(), query);
    //u.logJson(file, query, 'query: getQueryFromStr')

    return query
} 

// return true if node has a given label
function hasLabel(node, label) {
    return (node.label === label)
}

// recursive function to check if query has at least one valid (non-empty) node
function hasValidNode(o, ret) {
    if (ret.found === false) {
        if (o.type === 'group') {
            o.nodes.forEach(function (node) { return hasValidNode(node, ret); });
        } else {
            if (o.service === 'text') {
                if (o.parameters) {
                    if (o.parameters.operator === 'exists' || !isEmpty$1(o.parameters.value)) { ret.found = true; }
                } else {
                    ret.found = true; // full_text for * has no parameters
                }
            } else { // sequence|seqmotif|structure|chemical
                if (!isEmpty$1(o.parameters.value)) { ret.found = true; }
            }   
        }
    }        
}

// recursive function to remove node_ids from query 'o'
function removeNodeIds(o) {
    if (o.type === 'group') { o.nodes.forEach(function (node) { return removeNodeIds(node); }); }
    else { delete o.node_id; }
}

// recursive function to set node_ids for query 'o'
function setNodeIds(o, nodeId) {
    if (o.type === 'group') { o.nodes.forEach(function (node) { return setNodeIds(node, nodeId); }); }
    else { o.node_id = nodeId.id++; } 
}

/* 
    Script to translate a request object to its 'human-readble' HTML representation.
    This is a one-way process. 
    
    The HTML representation is not intended to be translated back to a request object.

    The HTML representation is used to display in the UI, and to save the request to either the
    seawrch history array or to MyPDB.
*/

var EQUALS = ' = ';

// get html representation of query
function getHtml$$1(request) {
    var query = clone(request.query);
    cleanNode(query);

    var html = '';
    html += (query.type === 'group') ? groupToHtml(query, 'root') : terminalToHtml(query);    
    return html
}

// private functions ---------------------------------------------------------------------------------------------------

// return group node as html
function groupToHtml(node, level) {
    var html = '';

    var logical_operator = node.logical_operator;
    var nodes = node.nodes;
    var label = node.label;

    html += (level === 'root') ? '' : '( ';
    var arr = [];
    nodes.forEach(function (node) {
        if (node.type === 'terminal') { arr.push(terminalToHtml(node)); }
        else { arr.push(groupToHtml(node, false)); }
    });
    html += arr.join(toHtml(logical_operator));
    html += (level === 'root') ? '' : ' )';

    return html        
}

// return terminal node as html string
/*
"parameters": {
          "evalue_cutoff": 1000000,
          "identity_cutoff": 0,
          "target": "pdb_protein_sequence",
          "value": "SMSVKKPKRDDSKDLALCSMILTEMETHEDAWPFLLPVNLKLVPGYKKVIKKPMDFSTIREKLSSGQYPNLETFALDVRLVFDNCETFNEDDSDIGRAGHNMRKYFEKKWTDTFKVS"
        },
*/        
function terminalToHtml(node) {
    var chemical, seqmotif, sequence$$1, structure, text; // html strings
    var services = [];
    
    var service = node.service;
    var parameters = node.parameters;
    var attribute, evalue_cutoff, identity_cutoff, pattern_type, negation, operator, target, value, 
            type, match_subset, descriptor_type, match_type;
    
    if (parameters) {
        attribute = parameters.attribute, 
        evalue_cutoff = parameters.evalue_cutoff;
        identity_cutoff = parameters.identity_cutoff;
        pattern_type = parameters.pattern_type;
        negation = parameters.negation, 
        operator = parameters.operator, 
        target = parameters.target;
        value = parameters.value;
        type = parameters.type;
        match_subset = parameters.match_subset;
        descriptor_type = parameters.descriptor_type;
        match_type = parameters.match_type;
    }

    if (service === 'chemical') {
        chemical = QB_SERVICE_MAP[service] + ' Search = <span class="sequence-wrap">' + value + '</span>';
        chemical += toHtml('where') + MAP.query_type + EQUALS + MAP[type];
        if (type === 'formula') {
            chemical += toHtml('and') + MAP.match_subset + EQUALS + match_subset;
        } else {
            chemical += toHtml('and') + MAP.descriptor_type + EQUALS + MAP[descriptor_type];
            chemical += toHtml('and') + MAP.match_type + EQUALS + MAP[match_type];
        }
        services.push(chemical);
    } else if (service === 'text') {
        text = '';
        var fo = (attribute) ? getFieldObj(attribute) : getFieldObj('full_text');
        //u.logJson(file, fo, 'fo')

        if (fo === null) {
            console.error('fo IS NULL FOR ' + attribute);
        } else {
            text += fo.display_name;
            text += (negation) ? toHtml('not') : '';

            if (operator === 'exists') {
                text += ' ' + toHtml(operator);
            } else {
                value = (fo.attribute === 'full_text' && isEmpty$1(value)) ? '*' : formatValue(value, operator, fo); // format value before setting operator
                //console.log('value=' + value + ' ' + typeof value)
        
                // modify operator if required, but only after value has been set 
                if (typeof value === 'number') {
                    if (operator === 'in' || isRange(operator)) { operator = 'exact_match'; } // iterable field has only a single value
                } else {
                    if ((operator === 'in' && value.indexOf('(') === -1) || isRange(operator) ) { operator = 'exact_match'; } // iterable field has only a single value
                }
        
                text += (operator && operator !== 'exact_match') 
                    ? toHtml(OPERATOR_MAP[operator])
                    : toHtml('=');
                text += value;
            }
            services.push(text);
        }    
    } else if (service === 'seqmotif') {
        seqmotif = QB_SERVICE_MAP[service] 
                + ' = <span class="sequence-wrap">' + value + '</span>'
                + toHtml('and') + MAP.target + EQUALS + MAP[target]
                + toHtml('and') + MAP.pattern_type + EQUALS + MAP[pattern_type];
        services.push(seqmotif);
    } else if (service === 'sequence') {
        sequence$$1 = QB_SERVICE_MAP[service] 
                + ' = <span class="sequence-wrap">' + value + '</span>'
                + toHtml('and') + MAP.target + EQUALS + MAP[target]
                + toHtml('and') + MAP.evalue_cutoff + EQUALS + evalue_cutoff
                + toHtml('and') + MAP.identity_cutoff + EQUALS + identity_cutoff;
        services.push(sequence$$1);
    } else if (service === 'structure') {
        var param = value.assembly_id ? MAP.assembly_id + EQUALS + quote(value.assembly_id) : MAP.asym_id + EQUALS + quote(value.asym_id);
        var arr = [
            MAP.entry_id + EQUALS + quote(value.entry_id),
            param,
            MAP.shape_match + EQUALS + quote(MAP[operator])
        ];
        structure = QB_SERVICE_MAP[service] + toHtml('where') + '( ' + arr.join(toHtml('and')) + ' )';
        services.push(structure);
    } else if (service === 'chemical') {
        // const param = value.assembly_id ? c.MAP.assembly_id + EQUALS + u.quote(value.assembly_id) : c.MAP.asym_id + EQUALS + u.quote(value.asym_id)
        // const arr = [
        //     c.MAP.entry_id + EQUALS + u.quote(value.entry_id),
        //     param,
        //     c.MAP.shape_match + EQUALS + u.quote(c.MAP[operator])
        // ]
        // structure = c.QB_SERVICE_MAP[service] + toHtml('where') + '( ' + arr.join(toHtml('and')) + ' )'
        // services.push(structure)
    }

    return services.join(toHtml('and'))
}

// format value
function formatValue(value, operator, fo) {
    if (fo.format && fo.format === 'date') {
        if (Array.isArray(value)) { return '[ ' + isoDateToDate(value[0]) + ' - ' + isoDateToDate(value[1]) + ' ]' } 
        return isoDateToDate(value)
    } else {
        if (typeof value === 'string') {
            return (value === '*') ? value : quote(value)
        } else if (Array.isArray(value)) {
            if (isRange(operator)) {
                return '[ ' + value[0] + ' - ' + value[1] + ' ]' 
            } else if (operator === 'in') {
                if (value.length === 1) { return value[0] }
                else { return '(' + value.join(', ') + ')' }
            }
        }
    }
    return value    
}

function toHtml(s, strong) { 
    return (strong || typeof strong === 'undefined')
        ? ' <strong>' + s.toUpperCase() + '</strong> '
        : ' ' + s.toUpperCase() + ' '
}

/* script to init refinements after searchResults has been retrieved */

function initRefinements(data, request) {
    setReleaseDateGroups(data);
    setRefinementsChecked(data, request);
    reorderDrilldown(data);
}

// private functions ---------------------------------------------------------------------------------------------------

// rearrange the drilldown attributes in the order defined in drilldownAttributes
function reorderDrilldown(data) {
    if (data.drilldown) {
        var arr = [];
        var map = {};
        data.drilldown.forEach(function (item) { return map[item.attribute] = item; });
        drilldownAttributes.forEach(function (attribute) {
            if (map[attribute]) { arr.push(map[attribute]); }
            //else console.error(attribute + ' drilldown attribute NOT FOUND IN map: ' + attribute)
        });
        data.drilldown = arr;
    }
}

// set checked refinements in searchResults.drilldown based on request.query
function setRefinementsChecked(data, request) {
    var query = request.query;
    var refinementNode = getChildNodeByLabel(query, LABEL_REFINEMENTS);

    if (data.drilldown && refinementNode) {
        var values = []; // TODO this is not safe - identical values could be present in multiple attributes - inspect attribute as well to avoid namespace collisions 
        setValues(refinementNode, values);
        
        // u.logJson(file, refinementNode, 'refinementNode')
        // u.logJson(file, values, 'values')

        data.drilldown.forEach(function (item) {
            item.groups.forEach(function (group) { return group.checked = values.includes(group.label); });
        });
    }
}

// set searchResults.drilldown release date groups
function setReleaseDateGroups(data) {
    if (data.drilldown) {
        var loop = function ( i, n ) {
            var item = data.drilldown[i];
            if (item.attribute === 'rcsb_accession_info.initial_release_date') {
                if (item.groups) {
                    var aggregates = {};
                    var aggregateYears = [];
                    item.groups.forEach(function (group) {
                        var year = parseInt(group.label);
                        var aggregateYear = year - (year % 5);
                        if (aggregates[aggregateYear]) {
                            aggregates[aggregateYear] += group.population;
                        } else {
                            aggregateYears.push(aggregateYear);
                            aggregates[aggregateYear] = group.population;
                        }    
                    });
                    aggregateYears.sort();

                    item.groups = [];
                    aggregateYears.forEach(function (year) { return item.groups.push(
                        { 
                            label: '' + year, 
                            population: aggregates[year], 
                            checked: false 
                        }); });
                }
                return 'break'    
            }
        };

        for(var i = 0, n = data.drilldown.length; i < n; i++) {
            var returned = loop( i, n );

            if ( returned === 'break' ) break;
        }
    }
}

// recursive function to set refinement attribute values - 'o' is the refinementNode from the query
function setValues(o, values) {
    if (o.type === 'terminal') {
        var ref = o.parameters;
        var attribute = ref.attribute;
        var value = ref.value;
        var operator = ref.operator;
        if (attribute === 'rcsb_accession_info.initial_release_date') {
            values.push(value[0].substring(0, 4));
        } else if (attribute === 'rcsb_entry_info.resolution_combined') {
            //u.logJson(file, value, 'value')
            if (operator === 'less') { //  value.indexOf('*') === 0
                value = '*-' + value.toFixed(1);
            } else if (operator === 'greater_or_equal') { // value.indexOf('-*') !== -1
                value = value.toFixed(1) + '-*'; 
            } else {
                value = value[0].toFixed(1) + '-' + value[1].toFixed(1);
            }
            values.push(value); // convert arr to str
        } else {
            values.push(value);
        } 
    } else {
        o.nodes.forEach(function (node) { setValues(node, values); });
    }
}

var file$11 = 'common/process-path';

/* 
    dispatch actions based on value of 'path'

    this function is called 
        - when the user enters the search app
        - when the user clicks the back/forward button and an object of type 'path' is retrieved from the urls array
*/    
function processPath(path, dispatch, dispatchAction, booleans) {
    var id = getLastElement(path);
    console.log('========== processPath: ' + path + ': ' + id);

    if (path.indexOf('/advanced') === 0) {
        var service = (id) ? id : 'text'; // set qb service to the value in path, or to the default value

        processAction(dispatch, dispatchAction, SET_VIEW, { tab: TAB_SEARCH });
        processAction(dispatch, dispatchAction, QB_INIT, { service: service });
        processAction(dispatch, dispatchAction, SET_MSG, { type: MSG_NO_QUERY, value: MSGS.advancedSearchNoQuery });

    } else if (path.indexOf('/browse') === 0) {
        var tree_id = (id) ? id : getDefault('views').tree;
        console.log(file$11, 'tree_id=' + tree_id);

        processAction(dispatch, dispatchAction, SET_VIEW, { tab: TAB_TREE_BROWSER, tree: tree_id });

    } else if (path.indexOf('/help') === 0) {
        var help = (id) ? id : HELP_PAGES[0].id;

        processAction(dispatch, dispatchAction, SET_VIEW, { tab: TAB_HELP, help: help });

    } else if (path.indexOf('/mypdb') === 0) {
        var mypdb = (id) ? id : (booleans.mypdb) ? 'queries' : 'login';

        processAction(dispatch, dispatchAction, SET_VIEW, { tab: TAB_MYPDB, mypdb: mypdb });

    }
}

/*
    return the last element of a path, or null if it is a single element

    example: 
        if path = 'advanced', return null
        else if path = 'advanced/', return null
        else if path = 'advanced/sequence' return sequence
        else if path = 'advanced/sequence/' return sequence
*/
function getLastElement(path, s) {
    var arr = path.split('/');
    arr = arr.filter(function (a) { return !isEmpty(a); });
    logJson(file$11, arr, path);
    return (arr.length === 1) ? null : arr[1]
}

function processAction(dispatch, dispatchAction, type, payload) {
    if (dispatchAction) { dispatchAction(type, payload); }
    else { dispatch({ type: type, payload: payload }); }
}

var crypt = createCommonjsModule(function (module) {
(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        { n[i] = crypt.endian(n[i]); }
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        { bytes.push(Math.floor(Math.random() * 256)); }
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        { words[b >>> 5] |= bytes[i] << (24 - b % 32); }
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        { bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF); }
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        { bytes.push(parseInt(hex.substr(c, 2), 16)); }
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          { if (i * 8 + j * 6 <= bytes.length * 8)
            { base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F)); }
          else
            { base64.push('='); } }
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) { continue; }
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();
});

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        { bytes.push(str.charCodeAt(i) & 0xFF); }
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        { str.push(String.fromCharCode(bytes[i])); }
      return str.join('');
    }
  }
};

var charenc_1 = charenc;

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1$2 = function (obj) {
  return obj != null && (isBuffer$1(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer$1 (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer$1(obj.slice(0, 0))
}

var md5 = createCommonjsModule(function (module) {
(function(){
  var crypt$$1 = crypt,
      utf8 = charenc_1.utf8,
      isBuffer = isBuffer_1$2,
      bin = charenc_1.bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      { if (options && options.encoding === 'binary')
        { message = bin.stringToBytes(message); }
      else
        { message = utf8.stringToBytes(message); } }
    else if (isBuffer(message))
      { message = Array.prototype.slice.call(message, 0); }
    else if (!Array.isArray(message))
      { message = message.toString(); }
    // else, assume byte array already

    var m = crypt$$1.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt$$1.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      { throw new Error('Illegal argument ' + message); }

    var digestbytes = crypt$$1.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt$$1.bytesToHex(digestbytes);
  };

})();
});

/* return or process a request object */

// return a request object
function getRequest(
        query, 
        return_type,
        sort,
        scoring_strategy) {
    if ( return_type === void 0 ) return_type = DEFAULT_RETURN_TYPE;


    var request_options = getDefault('request-options');
    //u.logJson(file, request_options, 'request_options')
    if (sort) { request_options.sort = sort; }
    if (scoring_strategy) { request_options.scoring_strategy = scoring_strategy; }

    return { 
        query: query,
        return_type: return_type,
        request_options: request_options
    }
}

/*
    return a count request object
        - if 'id' param is present, the request is for a Rule count, where 'id' corresponds to the rule.id
*/    
function getCountRequest(query, return_type, rule_id) {
    var request = { 
                        query: query,
                        return_type: return_type,
                        request_options: { return_counts: true }
                    };
    if (rule_id) { request.request_info = { query_id: rule_id }; }               

    return request
}

// set request_info
function setRequestInfo(request) {
    if (!request.request_info) { request.request_info = {}; }

    //if this is a Rule count request, request_info.query_id will already been set to the rule.guid
    if (!request.request_info.src) { request.request_info.src = 'ui'; }
    if (!request.request_info.query_id) { request.request_info.query_id = getHash(request); }    
} 


// return md5 hash of request, using query, return_type, scoring_strategy, sort
function getHash(request) {
    var query = request.query;
    var return_type = request.return_type;
    var request_options = request.request_options;
    var scoring_strategy = request_options.scoring_strategy;
    var sort = request_options.sort;
    var s = JSON.stringify(query) + return_type;
    if (scoring_strategy) { s += scoring_strategy; }
    if (sort) { s += JSON.stringify(sort); }
    
    return md5(s)
}

/* return a request object from refinements */

var file$14 = 'actions/helpers/refinements-to-request';

/* 
    get request object from refinements
    TODO fix potentail problem with non-unique values across categories
*/    
function getRequestFromRefinements(getState) {
    var ref = getState();
    var request = ref.request;
    var searchResults = ref.searchResults;
    if (request.request_info && request.request_info.query_id) { delete request.request_info.query_id; }

    // get refinement data from searchResults
    var refinementData = getRefinementDataFromSearchResults(searchResults); // returns null if no refinements are selected
    
    var refinementNode;
    if (refinementData) { // get refinementNode
        //u.logJson(file, refinementData, 'getRequestFromRefinements: refinementData')
        var service = 'text';
    
        refinementNode = getEmptyGroupNode(LABEL_REFINEMENTS);

        refinementData.forEach(function (item) { // item represents a refinement category
            var attribute = item.attribute;
            var type = item.type;
            var is_date = item.is_date;
            var values = item.values;
            //u.logJson(file, item, 'getRequestFromRefinements: item')

            var attributeNode = getEmptyGroupNode(null, 'or');

            var operator;
            values.forEach(function (value) {
                if (facetFilters[attribute]) {
                    // if the attribute has a facet filter, then create a group node
                    /*
                        facetFilters={
                            "rcsb_polymer_entity.rcsb_ec_lineage.name": {
                                "attribute": "rcsb_polymer_entity.rcsb_ec_lineage.id",
                                "operator": "in",
                                "value": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            },
                            "rcsb_membrane_lineage.name": {
                                "attribute": "rcsb_membrane_lineage.depth",
                                "operator": "equals",
                                "value": 0
                            },
                            "rcsb_struct_symmetry.type": {
                                "attribute": "rcsb_struct_symmetry.kind",
                                "operator": "exact_match",
                                "value": "Global Symmetry"
                            }
                        }
                    */    

                    operator = 'exact_match';
                    var node = getEmptyTerminalNode();
                    node.parameters = { attribute: attribute, operator: operator, value: value };

                    var facetNode = getEmptyTerminalNode();
                    facetNode.parameters = facetFilters[attribute];

                    var facetGroup = getEmptyGroupNode();
                    facetGroup.nodes.push(node);
                    facetGroup.nodes.push(facetNode);

                    attributeNode.nodes.push(facetGroup);
                    
                } else {
                    if (attribute === 'rcsb_entry_info.resolution_combined') { // operator may be range, less, greater_or_equal
                        var arr = value.split('-');
                        if (value.indexOf('*') === 0) {
                            operator = 'less';
                            value = parseFloat(arr[1]);
                        } else if (value.indexOf('-*') !== -1) {
                            operator = 'greater_or_equal';
                            value = parseFloat(arr[0]);
                        } else {
                            operator = 'range';
                            value = [parseFloat(arr[0]), parseFloat(arr[1])];
                        }
                    } else if (attribute === 'rcsb_accession_info.initial_release_date') {
                        operator = 'range_closed';
                        value = [value + '-01-01T00:00:00Z', (parseInt(value) + 4) + '-12-31T23:59:59Z'];    
                    } else {
                        operator = 'exact_match';
                    }
                    attributeNode.nodes.push({
                        type: 'terminal',
                        service: service,
                        parameters: { attribute: attribute, operator: operator, value: value }
                    });
                }
            });

            refinementNode.nodes.push(attributeNode);
        });
        //u.logJson(file, refinementNode, 'refinementNode')
    }

    var cRequest = clone(request); // cloned request
    cRequest.request_options.pager.start = 0; // reset pager
    var queryNode = cRequest.query;

    if (refinementNode) {
        if (hasChildNodeByLabel(queryNode, LABEL_REFINEMENTS)) {
            removeRefinementNode(queryNode);
            queryNode.nodes.push(refinementNode);
        } else {
            cRequest.query = {
                type: 'group',
                logical_operator: 'and',
                nodes: [queryNode, refinementNode]
            };
        }    
    } else { // refinements were cleared
        if (hasChildNodeByLabel(queryNode, LABEL_REFINEMENTS)) {
            removeRefinementNode(queryNode);
            cRequest.query = queryNode.nodes[0]; // params or qb node
        } 
    }

    return cRequest
}

// private functions ---------------------------------------------------------------------------------------------------

// get refinements from searchResults
function getRefinementDataFromSearchResults(searchResults) {
    if (searchResults.drilldown) {
        var refinements = [];

        //console.log(file, 'getRefinementDataFromSearchResults')
        searchResults.drilldown.forEach(function (item) {
            var attribute = item.attribute.replace('.keyword', '');
            var fo = getFieldObj(attribute); // assume it will be found, otherwise nothing else works
            if (!fo) { console.error(file$14, 'fo NOT FOUND for ' + attribute); }
            var type = fo.type;
            var is_date = isDate(fo);
            var values = [];
            item.groups.forEach(function (group) {
                if (group.checked) {
                    values.push(group.label);
                }    
            });
            if (values.length > 0) {
                refinements.push({ attribute: attribute, type: type, is_date: is_date, values: values });
            }
        });
        return (refinements.length > 0) ? refinements : null
    }
    return null
}

/* 
    Convert a queryBuilder object into a Search API request object.

    See the reverse process in reducers/helpers/get-query-builder.js

    scoring_strategy rules:
    
        text + sequence search  → scoring_strategy = ‘sequence’
        text + structure search  → scoring_strategy = ‘structure'
        text + structure + sequence search  → scoring_strategy = ‘combined’
        structure + sequence search  → scoring_strategy = ‘combined’
*/

var file$15 = 'actions/helpers/query-builder-to-request';

// rule props that do not belong in the query node
var ruleProps = [
      'attribute'
    , 'count'
    , 'from'
    , 'id'
    , 'inputs'
    , 'nested_attribute'
    , 'nested_attribute_value'
    , 'not'
    , 'operator'
    , 'placeholder'
    , 'to'
    , 'units'
];

// convert a queryBuilder object into a Search API request object  
function getRequestFromQueryBuilder(getState, count_only) {
    var ref = getState();
    var queryBuilder = ref.queryBuilder;
    var returnType = ref.returnType;
    var sort = ref.sort;
    var services = [];
    var ref$1 = queryBuilder.services;
    var chemical = ref$1.chemical;
    var text = ref$1.text;
    var seqmotif = ref$1.seqmotif;
    var sequence$$1 = ref$1.sequence;
    var structure = ref$1.structure;
    var query;
    var scoring_strategy = DEFAULT_SCORING_STRATEGY;

    if (text.open && text.root) {
        var root = clone(text.root); // text.root belongs to state so do not mutate - use a clone
        //u.logJson(file, root, 'root')
        removeEmptyNodes(root); // this only removes empty rules and groups
        console.log('root.items.length=' + root.items.length);
        if (root.items.length > 0) {
            toTextQuery(root); // convert qb text node to a Search API text service query node
            //u.logJson(file, root, 'root')

            root.label = LABEL_TEXT;
            services.push(root);
        }
    }

    if (sequence$$1.open) {
        var sequenceNode = getSequenceNode(sequence$$1);

        if (sequenceNode) {
            if (!isEmpty$1(sequenceNode)) {
                services.push(sequenceNode);
                scoring_strategy = 'sequence';
            }    
        } else {
            return null // invalid sequence query, so do not submit a request
        }
    }

    if (seqmotif.open) {
        var seqmotifNode = getSeqmotifNode(seqmotif);

        if (seqmotifNode) {
            if (!isEmpty$1(seqmotifNode)) {
                services.push(seqmotifNode);
                scoring_strategy = 'combined';
            }
        } else {
            return null // invalid seqmotif query, so do not submit a request
        }
    }

    if (structure.open) {
        var structureNode = getStructureNode(structure);

        if (structureNode) {
            if (!isEmpty$1(structureNode)) {
                services.push(structureNode);
                scoring_strategy = 'combined';
            }
        } else {
            return null // invalid structure query, so do not submit a request
        }
    }

    if (chemical.open) {
        var chemicalNode = getChemicalNode(chemical);

        if (chemicalNode) {
            if (!isEmpty$1(chemicalNode)) {
                services.push(chemicalNode);
                scoring_strategy = 'combined';
            }
        } else {
            return null // invalid chemical query, so do not submit a request
        }
    }

    // combine service queries into a single query object
    if (services.length === 0) {
        alert(MSGS.emptyQuery);
        return null
    }    

    query = {
        type: 'group',
        logical_operator: 'and',
        nodes: services,
        label: LABEL_QUERY_BUILDER
    };

    //u.logJson(file, query, 'getRequestFromQueryBuilder: query')
    return (count_only)
        ? getCountRequest(query, returnType)
        : getRequest(query, returnType, sort, scoring_strategy)
}

// count request for a Rule
function getRuleCountRequest(rule, returnType) {
    var o = clone(rule);
    ruleToTextQuery(o);
    o.label = LABEL_RULE;
    return getCountRequest(o, returnType, rule.id)
}

function getServiceCountRequest(getState, service) {
    console.log(file$15, 'getServiceCountRequest', service);
    
    var ref = getState();
    var queryBuilder = ref.queryBuilder;
    var returnType = ref.returnType;
    var serviceObj = queryBuilder.services[service];

    var query;
    if      (service === 'chemical')  { query = getChemicalNode(serviceObj, true); }
    else if (service === 'seqmotif')  { query = getSeqmotifNode(serviceObj, true); }
    else if (service === 'sequence')  { query = getSequenceNode(serviceObj, true); }
    else if (service === 'structure') { query = getStructureNode(serviceObj, true); }
    //else if (service === 'text')      query = getTextNode(serviceObj, true) // TODO

    return (query) ? getCountRequest(query, returnType) : null
}

// private functions ---------------------------------------------------------------------------------------------------

// service nodes ///////////////////////

/* 
    Return a valid query node from a service object, or null if the service params are invalid.
    This function is called for either a search request or a count request.

    @param service - the service object
*/
function getChemicalNode(service, getCount) {
    logJson(file$15, service, 'getChemicalNode: service');
    var value = service.value;
    var type = service.type;
    var match_subset = service.match_subset;
    var descriptor_type = service.descriptor_type;
    var match_type = service.match_type;
    
    if (isEmpty$1(value)) {
        if (getCount) {
            alert('Enter a value'); // only raise alert for a count request
            return null
        } else {
            return {} // for search request return empty obj
        }    
    } else {
        var parameters = (type === 'formula') 
                ? { value: value, type: type, match_subset: match_subset }
                : { value: value, type: type, descriptor_type: descriptor_type, match_type: match_type };
        
        return {
            type: 'terminal',
            service: 'chemical',
            parameters: parameters,
            label: LABEL_CHEMICAL
        }
    }
}

/* 
    Return a valid query node from a service object, or null if the service params are invalid.
    This function is called for either a search request or a count request.

    @param service - the service object
*/
function getSequenceNode(service, getCount) {
    logJson(file$15, service, 'getSequenceNode: service');
    var evalue_cutoff = service.evalue_cutoff;
    var identity_cutoff = service.identity_cutoff;
    var target = service.target;
    var value = service.value;

    if (isEmpty$1(value)) {
        if (getCount) {
            alert('Enter a sequence'); // only raise alert for a count request
            return null
        } else {
            return {} // for search request return empty obj
        }    
    } else {
        if (    sequence(value, target) &&
                evalueCutoff(evalue_cutoff) &&
                identityCutoff(identity_cutoff)) {

            evalue_cutoff = parseFloat(evalue_cutoff);   
            identity_cutoff = parseInt(identity_cutoff) / 100;   
            
            return {
                type: 'terminal',
                service: 'sequence',
                parameters: { evalue_cutoff: evalue_cutoff, identity_cutoff: identity_cutoff, target: target, value: value },
                label: LABEL_SEQUENCE
            }
        } else {
            return null
        }
    }
}

/* 
    Return a valid query node from a service object, or null if the service params are invalid.
    This function is called for either a search request or a count request.

    @param service - the service object
*/
function getSeqmotifNode(service, getCount) {
    logJson(file$15, service, 'getSeqmotifNode: service');
    var pattern_type = service.pattern_type;
    var target = service.target;
    var value = service.value;

    if (isEmpty$1(value)) {
        if (getCount) {
            alert('Enter a sequence motif'); // only raise alert for a count request
            return null
        } else {
            return {} // for search request return empty obj
        }    
    } else {
        if (sequenceMotif(value)) {
            return {
                type: 'terminal',
                service: 'seqmotif',
                parameters: { pattern_type: pattern_type, target: target, value: value },
                label: LABEL_SEQMOTIF
            }
        } else {
            return null
        }
    }    
}

/* 
    Return a valid query node from a service object, or null if the service params are invalid.
    This function is called for either a search request or a count request.

    @param service - the service object
*/
function getStructureNode(service, getCount) {
    //u.logJson(file, service, 'getStructureNode: service')
    var entry_id = service.entry_id;
    var operator = service.operator;
    var property = service.property;
    var value = service.value;
    
    if (isEmpty$1(entry_id)) {
        if (getCount) {
            alert('Enter a PDB ID'); // only raise alert for a count request
            return null
        } else {
            return {} // for search request return empty obj
        }    
    } else {
        if (entry_id.length === 4 && property && value) {
            value = (property === 'assembly_id')
                ? { entry_id: entry_id, assembly_id: value }
                : { entry_id: entry_id, asym_id: value };
            return {
                type: 'terminal',
                service: 'structure',
                parameters: { value: value, operator: operator },
                label: LABEL_STRUCTURE,
            }
        } else {
            alert('Enter a valid PDB ID');
            return null
        }
    }    
}

// END service nodes ///////////////////////

// Return value as json type and format, based on fo.type or fo.format. Return null if value is empty.
function getValue$3(value, fo, limit) {
    if (isEmpty(value)) { return null }
    if (typeof value === 'string') { value = value.trim(); }
    if (fo) {
        if (fo.is_iterable) { return value } // could be string or number
        else if (fo.type === 'number') { return parseFloat(value) }
        else if (fo.type === 'integer') { return parseInt(value) }
        else if (isDate(fo)) { return dateToISODate(value, limit) }
        else { return value }
    }
    return value
}

// remove empty groups from queryBuilder.services.text.root - TODO remove from map?
function removeEmptyGroups(group) {
    group.items.forEach(function (item) {
        if (item.type === 'group') { removeEmptyGroups(item); }
    });
    group.items = group.items.filter(function (item) { return (item.type === 'rule' || (item.type === 'group' && item.items.length > 0) ); });
}

// remove empty rules and groups from a text root node
function removeEmptyNodes(node) {
    removeEmptyRules(node);
    removeEmptyGroups(node);
}

// remove empty rules from queryBuilder.services.text.root - TODO remove from map?
function removeEmptyRules(group) {
    group.items = group.items.filter(function (item) { 
        if (item.type === 'group') {
            return true
        } else { // rule
            //u.logJson(file, item, 'item')
            if (item.operator === 'exists') { return true }
            else if (ruleHasValues(item)) { return true }
            else { return false }
        }    
    });
    group.items.forEach(function (item) {
        if (item.type === 'group') { removeEmptyRules(item); }
    });
}

// return true if rule has non-empty valid values
function ruleHasValues(rule) {
    if (isRange(rule.operator)) { return (!isEmpty$1(rule.from) && !isEmpty$1(rule.to)) }
    rule.inputs = rule.inputs.filter(function (input) { return !isEmpty$1(input.value); });
    return rule.inputs.length > 0
}

/* 
    - convert cloned Rule object to Search API text service query node

    - possible scenarios for converting a single attribute to a query, where
        - 'o'  is the Rule object:
        - 'fo' is the field object: 
    
        if (o.nested_attribute)                                         // need to append the nested 'type=value' node to the primary attribute node
            if (o.operator === 'exists')                                    // 
            else if (values.length === 1)                                   // single input value
                if (is_iterable)                                            // uses 'in' operator    
                else                                                        // use specified operator
            else                                                            // multiple input values
                if (fo.useIn && o.operator === 'equals|exact_match')        // convert multiple input values to an array and change the operator to 'in'*
                else                                                        // use input-group
        else                                                            // non-nested    
            if (o.operator === 'exists')                                    //
            else if (values.length === 1)                                   // single input value
                if (is_iterable)                                    
                else
            else                                                            //
                if (fo.useIn && o.operator === 'equals|exact_match')        // use 'in'
                else                                                        // use input-group

        * note: the 'equals|exact_match' -> 'in' operator conversion has to be reversed when loading the query back into the queryBuilder, based on the attribute type:
                - number|integer -> equals
                - string         -> exact_match
                - the reverse logic is in reducers/get-query-builder.js   

*/        
function ruleToTextQuery(o) {
    var attribute = o.attribute;
    var nested_attribute = o.nested_attribute;
    var nested_attribute_value = o.nested_attribute_value;
    var from = o.from;
    var inputs = o.inputs;
    var not = o.not;
    var operator = o.operator;
    var to = o.to;
    var fo = getFieldObj(attribute);

    if (fo) {
        // u.logJson(file, o, 'o')
        // u.logJson(file, fo, 'fo')
        var is_iterable = fo.is_iterable;
        var useIn = fo.useIn;
        
        var negation = (typeof not === 'undefined') ? false : not;
        //console.log(file, 'ruleToTextQuery: attribute=' + attribute + ', negation=' + negation + ', operator=' + operator + ', from=' + from + ', to=' + to)
        
        // convert inputs to values array which may be of any length, including 0
        var values = [];
        if (isRange(operator) && (typeof from !== 'undefined') && (typeof to !== 'undefined')) {
            values[0] = [getValue$3(from, fo, 'from'), getValue$3(to, fo, 'to')];
        } else if (inputs) {
            inputs.forEach(function (input) {
                var value = getValue$3(input.value, fo);
                //console.log(file + ': ruleToTextQuery: typeof value=' + typeof value + ' ' + value)
                if (!isEmpty(value)) { values.push(value); }
            });
        }

        if (nested_attribute) { // OK to assume no range inputs for nested attributes?
            o.type = 'group';
            
            var nestedNode = getTextTerminalNode({
                attribute: nested_attribute,
                operator: 'exact_match',
                value: nested_attribute_value
            });

            if (operator === 'exists') {
                var node = getTextTerminalNode({ attribute: attribute, negation: negation, operator: operator });
                Object.assign(o, getTextGroupNestedNode(node, nestedNode));
            } else if (values.length === 1) {
                var value = values[0];
                if (is_iterable) { value = getIterable(value, attribute); }
                var node$1 = getTextTerminalNode({ attribute: attribute, negation: negation, operator: operator, value: value });
                Object.assign(o, getTextGroupNestedNode(node$1, nestedNode));
            } else {
                //u.logJson(file, o, 'o')
                //u.logJson(file, fo, 'fo')
                console.log(file$15, 'operator=' + operator);
                if (useIn && (operator === 'exact_match' || operator === 'equals')) {
                    console.log(file$15, 'using IN for nested');
                    Object.assign(o, getTextGroupNestedNode(
                        getTextTerminalInNode(o, values), 
                        nestedNode));
                } else {
                    o.logical_operator = (negation) ? 'and' : 'or'; // and|or based on rule 'not' property
                    o.nodes = [];
                    values.forEach(function (value) {
                        var node = getTextTerminalNode({ attribute: attribute, negation: negation, operator: operator, value: value });
                        o.nodes.push(getTextGroupNestedNode(node, nestedNode));
                    });
                    o.label = LABEL_INPUT_GROUP;
                }
            }
        } else { // not nested_attribute
            if (operator === 'exists') { // note: values will contain a null element, so do not check for 'values.length === 0' here
                Object.assign(o, getTextTerminalNode({ attribute: attribute, operator: operator, negation: negation }));
            } else if (values.length === 1) {
                var value$1 = values[0];
                if (is_iterable) { value$1 = getIterable(value$1, attribute); }
                var parameters = {
                    operator: operator,
                    negation: negation,
                    value: value$1
                };
                if (attribute !== 'full_text') { parameters.attribute = attribute; }
                Object.assign(o, getTextTerminalNode(parameters));
            } else { // note: 'full_text' does not allow multiple inputs (but why not?) - no need to check for that here
                if (useIn && (operator === 'exact_match' || operator === 'equals')) {
                    Object.assign(o, getTextTerminalInNode(o, values));
                } else {
                    o.type = 'group';
                    o.logical_operator = (not) ? 'and' : 'or'; // and|or based on rule 'not' property - TODO this needs to be tested
                    o.nodes = [];
                    values.forEach(function (value) {
                        o.nodes.push(getTextTerminalNode({
                            attribute: attribute,
                            negation: negation,
                            operator: operator,
                            value: value
                        }));
                    });
                }    
                o.label = LABEL_INPUT_GROUP;
            }
        }

        // remove Rule properties that do not belong in the query node
        deleteProps(o, ruleProps);
    } else {
        console.error(file$15, 'fo NOT FOUND for attribute=' + attribute);
    }    
}

/*  
    recursive function to convert a queryBuilder.services.text.root node object into an api request.query object
    note:  the conversion is done 'in-place', that is the input rule object is transformed into the output API query object
*/        
function toTextQuery(o, nodeId) {
    if (o.type === 'group') {
        o.nodes = [].concat( o.items ); // TODO rename group.items -> group.nodes for greater consistency between qb and api
        delete o.id;
        delete o.items;
        delete o.is_root;
        o.nodes.forEach(function (node) { return toTextQuery(node, nodeId); });
    } else if (o.type === 'rule') {
        ruleToTextQuery(o);
    }
}

/* 
    this script handles all search actions:

        attributeValueSearch
        countSearch
        editSearch
        prevNextSearch
        queryBuilderSearch
        refinementsSearch
        requestSearch
        serviceCountSearch
        urlSearch
*/
var file$12 = 'actions/search';
var COUNT_ONLY = true;

/*
    single atrr/value search called from:

        - searchBar if the search app is already loaded (see urlSearch if searchapp is not loaded) 
            search on a single text field using (attribute, value) params
                or 
            execute a full-text search if the 'attribute' param is null|undefined 
    
        - links on the search-results, tree-browser pages, etc.

*/
function attributeValueSearch(attribute, value, return_type) {
    return function (dispatch, getState) {
        var query = getSimpleQuery(attribute, value);
        query.service = 'text';
        query.type = 'terminal';
        var request = getRequest(query, return_type);

        dispatch({ type: QB_SET_PROPS, payload: { open: false, src: file$12 + ': attributeValueSearch' } }); // TODO only for search-bar?
        
        var views = getState().views;
        if (views.search === 'REPORT' && views.report === 'create_custom_report') {
            // invalid state, so revert to default views
            dispatch({ type: SET_VIEW, payload: { report: 'search_summary', search: SUMMARY } });
        }
        
        getData$$1(REQ_SEARCH, request)(dispatch, getState);
    }
}

// called from either the 'Count' button associated with a single Rule, or from the main queryBuilder 'Count' button
function countSearch(rule) {
    return function (dispatch, getState) {
        var request;
        if (rule) {
            var ref = getState();
            var returnType = ref.returnType;
            request = getRuleCountRequest(rule, returnType);
        } else {
            request = getRequestFromQueryBuilder(getState, COUNT_ONLY);
        }
        if (request) { getData$$1(REQ_COUNT, request)(dispatch, getState); }
    }
}

// called from components/EditSearch.js - allows in-place editing of json request, for dev use only 
function editSearch(str) {
    return function (dispatch, getState) {
        //console.log(file, 'editSearch', str)
        var request = JSON.parse(str);
        getData$$1(REQ_SEARCH, request) (dispatch, getState);
    }
}

// called from prev/next btns in components/Query.js
function prevNextSearch(op) {
    return function (dispatch, getState) {
        if (op) {
            var ref = getState();
            var history = ref.history;
            var request = ref.request;
            var id = history.id;
            var ids = history.ids;
            var map = history.map;
            var len = ids.length;

            var item; // item in history
            for (var i = 0; i < len; i++) {
                if (ids[i] === request.request_info.query_id) {
                    if (op === 'prev') {
                        if (i < len - 1) { item = map[ids[i + 1]]; }
                    } else {
                        if (i > 0) { item = map[ids[i - 1]]; }
                    }    
                    if (item) { break }
                }
            }
            if (!item) { item = map[id]; } // most likely the last query did not return anything, return the current item in history

            if (item) {
                dispatch({ type: SET_BOOLEAN, payload: { addUrl: false } });
                requestSearch(item.request, 'prevNext') (dispatch, getState);
            }    
        }    
    }
}

// called from queryBuilder 
function queryBuilderSearch() {
    return function (dispatch, getState) {
        var request = getRequestFromQueryBuilder(getState);
        if (request) { getData$$1(REQ_SEARCH, request) (dispatch, getState); }
    }
}

// refinements search
function refinementsSearch() {
    return function (dispatch, getState) {
        var request = getRequestFromRefinements(getState);
        getData$$1(REQ_SEARCH, request) (dispatch, getState);
    }
}

// called from history, next, prev, mypdb, back, forward, with existing request
function requestSearch(request, src) {
    return function (dispatch, getState) {
        //u.logJson(file, request, 'requestSearch: request')


        var request_info = request.request_info;
        var request_options = request.request_options;
        var return_type = request.return_type;
        var query = request.query;

        // set default pager in all cases?
        request_options.pager = getDefault('request-pager');

        var query_id = request_info.query_id;
        // if (qu.hasChildNodeByLabel(query, c.LABEL_QUERY_BUILDER)) dispatch({ type: c.QB_INIT, payload: { request } })
        // else dispatch({ type: c.QB_SET_PROPS, payload: { open: false, src: file + ': requestSearch' } })

        if (hasValidQueryBuilder(request)) { dispatch({ type: QB_INIT, payload: { request: request } }); }
        else { dispatch({ type: QB_SET_PROPS, payload: { open: false, src: file$12 + ': requestSearch' } }); }

        dispatch({ type: SET_RETURN_TYPE, payload: { returnType: return_type } });
        
        if (src !== 'mypdb') { dispatch({ type: SET_HISTORY_ID, payload: { id: query_id } }); }
        
        getData$$1(REQ_SEARCH, request) (dispatch, getState);
    }
}

// called from service 'Count' button
function serviceCountSearch(service) {
    //console.log(file, 'serviceCountSearch', service)
    
    return function (dispatch, getState) {
        var request = getServiceCountRequest(getState, service);
        //u.logJson(file, request, 'serviceCountSearch: request')
        if (request) { getData$$1(REQ_COUNT, request)(dispatch, getState); }
    }
}

/*
    Called from components/App.js when the user enters search page from another page. 
    If there is a querystring it is converted into a request object and passed to getData(). 
    
    accepted formats:
        /search                                 // no qs - display empty search page

        -- legacy format using 'q='
        /search?q=hemoglobin                    
        /search?q=entity.rcsb_macromolecular_names_combined.name:hemoglobin // links from other pages (for example: SSP, Annotation Browsers)
        
        -- abbreviated Search API format using 'query=', where maybe not all properties are set 
        /search?query={}                        // passed from external page using query={}

        -- Search API format using full 'request='
        /search?request=%7B"request_info"%3A%7B"query_id"%3A"5aa0a968-1db9-4e51-b36e-5f2a36f97b52"%2C"... // request param - from link, bookmark
*/
function urlSearch() {
    return function (dispatch, getState) {
        try {
            var qs = getUrlQs(); // everything following the '?' in the url
            //console.log(file, 'urlSearch: qs=' + qs)
    
            if (qs) {
                /*
                    format:
                        1.  q=[&rt=]
                                if q param is present, there may be an optional 'rt' (return_type)
                            
                                examples:
                                    q=*                        // all
                                    q=val                           // value only - full-text
                                    q=attr:val                      // single atribute, value 
                                    q=-attr:val                     // negated single atribute, value 
                                    q=attr1:val1 AND|OR attr2:val2  // 2 attributes - and/or
                                    q=attr:val1 - val2              // range
                                    q:attr:id1,id2,id3              // in, comma-separated - for iterable attributes 
                                    q:attr:id1 id2 id3              // in, space-separated - for iterable attributes 
                                    q=resoultion>=1.5
                                    
                                    // TODO deprecate 'q' url
     
                        2.  query=[&rt=]
                                if 'query' param is present, there may be an optional 'rt' (return_type) param, and an optional 'service' param 
                                if no 'rt', return_type defaults to 'entry'
     
                        3.  request=
                                if 'request' param is present, it will be the only param - the qs contains a fully urlEncoded request object
                */
                var ref = getQsParams(qs);
                var q = ref.q;
                var query = ref.query;
                var request = ref.request;
                var return_type = ref.return_type;
                var rt = ref.rt;
    

                // /search?request=%7B"query"%3A%7B"type"%3A"group"%2C"logical_operator"%3A"and"%2C"nodes"%3A%5B%7B"parameters"%3A%7B"value"%3A"2ARM"%7D%2C"type"%3A"terminal"%2C"service"%3A"text"%2C"node_id"%3A0%7D%5D%2C"label"%3A"query-builder"%7D%2C"return_type"%3A"entry"%2C"request_options"%3A%7B"pager"%3A%7B"start"%3A0%2C"rows"%3A100%7D%2C"scoring_strategy"%3A"combined"%2C"sort"%3A%5B%7B"sort_by"%3A"score"%2C"direction"%3A"desc"%7D%5D%7D%2C"request_info"%3A%7B"src"%3A"ui"%2C"query_id"%3A"b1711e6ac73c21d5330f4671ee09372e"%7D%7D
                if (q || query || request) {
                    if (q) {
                        // see allowed format in helpers/params.js
                        console.log(file$12, 'urlSearch: q=' + q);
                        query = getQueryFromQ(q); 
                        //u.logJson(file, query, 'query')
                        request = getRequest(query, rt);
                        //u.logJson(file, request, 'request')
        
                        // special case for '*'
                        if (q === '*') {
                            var sort = getSort('rcsb_accession_info.initial_release_date desc');
                            request.request_options.sort = sort;
                            dispatch({ type: SET_SORT, payload: { sort: sort } });
                        }    
                    } else if (query) {
                        //u.logJson(file, query, 'query')
        
                        query = JSON.parse(query);
        
                        // set default values if not defined in query object
                        if (!query.type) { query.type = 'terminal'; }
                        if (query.type === 'terminal') {
                            if (!query.service) { query.service = 'text'; }
                            if (query.service === 'structure' && !query.parameters.operator) { query.parameters.operator = 'strict_shape_match'; }
                            if (query.service === 'sequence') {
                                var parameters = query.parameters;
                                if (!parameters.target) { parameters.target = DEFAULT_SEQUENCE_TARGET; }
                                if (!parameters.evalue_cutoff) { parameters.evalue_cutoff = DEFAULT_EVALUE_CUTOFF; }
                                if (!parameters.identity_cutoff) { parameters.identity_cutoff = DEFAULT_IDENTITY_CUTOFF; }
                            }    
                        }    
                        setService(query); // set default service: 'text' recursively on nested terminal nodes if it has not already been set
                        //u.logJson(file, query, 'query')
    
                        request = getRequest(query, return_type);    
                        logJson(file$12, request, 'request');
                    } else if (request) {
                        request = JSON.parse(request);
                        if (request.request_options) { request.request_options.pager = getDefault('request-pager'); }
                        //u.logJson(file, request, 'urlSearch: request')

                        if (hasValidQueryBuilder(request)) { dispatch({ type: QB_INIT, payload: { request: request } }); }
                    }

                    getData$$1(REQ_SEARCH, request)(dispatch, getState);
                } else {
                    var msg = 'UNKNOWN ERROR in urlSearch(): qs=' + qs;
                    console.error(file$12, msg);
                    dispatch({ type: SET_BOOLEAN, payload: { dataLoading: false } });
                    dispatch({ type: SET_MSG, payload: { type: MSG_ERROR, value: msg } });
                }
    
            } else {
                dispatch({ type: SET_BOOLEAN, payload: { dataLoading: false } });
                dispatch({ type: SET_MSG, payload: { type: MSG_NO_QUERY, value: MSGS.noQuery } });
            }
        } catch (err) {
            dispatch({ type: SET_MSG, payload: { type: MSG_ERROR, value: 'ERROR: ' + err } });
        }
    }
}

/*
    this script:
        1. updates the browser location bar
        2. handles browser back/forward btn actions
        
    note: 
        Since this is a SPA (single page app), back/forward btn actions have to be generated programatically. This 
        is done by building an array of significant page views. When the user clicks the back/forward browser btn,
        this array is traversed, and the individual views are regenerated

    TODO not working correctly for browse    
*/

var file$10 = 'actions/urls';
var BASE_URL = '/search';

// handle browser back/forward actions
function popState(event) {
    return function (dispatch, getState) {
        var ref = getState();
        var booleans = ref.booleans;
        var history = ref.history;
        var urls = ref.urls; // TODO rename history -> searchHistory to avoid confusion with browser history

        var state = JSON.parse(event.state);
        logJson(file$10, state, 'popState: state~~~~~~~~~~~~~~~~~~~');

        if (!state) {
            window.location = urls[0].value;
        } else {
            //const history_index = state.history_index
            var ref$1 = getState().urls;
            var arr = ref$1.arr;
            var index = ref$1.index;
            var history_index = ref$1.history_index;
            //u.logJson(file, { index, history_index }, 'urls')

            index = (state.history_index < history_index) ? index - 1 : index + 1;
            if (index < 0) { index = 0; }
            if (index > arr.length - 1) { index = arr.length; }
            var urlObj = arr[index];
            //u.logJson(file, urlObj, 'popState: urlObj')
    
            dispatch({ type: SET_URLS_PROPS, payload: { history_index: state.history_index, index: index } });
    
            var value = urlObj.value;
            var type = urlObj.type;
    
            if (type === 'request') {
                dispatch({ type: SET_BOOLEAN, payload: { addUrl: false } });
                var request = history.map[value].request;
                requestSearch(request, 'popState')(dispatch, getState);
            } else if (type === 'referrer') {
                window.location = value;
            } else if (type === 'path') {
                dispatch({ type: SET_BOOLEAN, payload: { addUrl: false } });
                var path = value.substring(7); // remove leading '/search'
                processPath(path, dispatch, null, booleans);
                pushState({ path: value });
            }
        }
    }    
}

/*
    update the browser location bar

    notes: 
        1.  use empty pushState() call to set window.location to BASE_URL - this is used when retrieveing imgs from CDN server 
            in order to avoid long urls being passed to CDN in the http request 'referer' header 

        2.  Only coarse-grained actions are stored in the browser history object. For example, if the user is paging through a 
            result set, individual page requests will not be stored in browser history, since these are not set in the url either.
            Only the initial search request will be stored in history.
*/    
function pushState(params) {
    return function (dispatch, getState) {
        var ref = getState();
        var booleans = ref.booleans;
        var urls = ref.urls;
        var history_index = urls.history_index + 1;
        var historyObj = { history_index: history_index };
        //u.logJson(file, historyObj, 'pushState: historyObj')
        var url;

        if (params) { // params will contain one of [path, referrer, request], and 'src', which is only used for debugging
            //u.logJson(file, params, 'pushState: params')
            var path = params.path;
            var referrer = params.referrer;
            var request = params.request;
            var src = params.src;
            var view = params.view;
            var id = params.id;

            var value, type;
            if (request) {
                value = request.request_info.query_id;
                type = 'request';
                url = BASE_URL + '?request=' + encodeURIComponent(JSON.stringify(request));
            } else if (path) {
                value = path;
                type = 'path';
                url = path;
            } else if (referrer) {
                //console.log(file, 'referrer=' + referrer)
                value = referrer;
                type = 'referrer';
            }

            var urlObj = { value: value, src: src, type: type, view: view, id: id };
            //u.logJson(file, urlObj, 'pushState: urlObj')
            
            if (booleans.addUrl) {
                dispatch({ type: URLS_ADD, payload: { urlObj: urlObj } }); // only add if this was not a back request
            } else {
                dispatch({ type: SET_BOOLEAN, payload: { addUrl: true } }); // reset to true
            }    
        } else {
            url = BASE_URL; // set url to default for retrieving images from cdn
        }
        history.pushState(JSON.stringify(historyObj), null, url);
        dispatch({ type: SET_URLS_PROPS, payload: { history_index: history_index } });
    }    
}

/* script to process data retrieved from actions/get-data.js async calls */

var file$4 = 'actions/process-data';

// process data returned from getData()
function processData(reqType, request, dispatch, getState, data, took) {
    if (reqType === REQ_COUNT)         { processCount(request, dispatch, getState, data); }
    else if (reqType === REQ_GQL_DATA) { processGqlData(request, dispatch, getState, data); }
    else if (reqType === REQ_SEARCH)   { processSearch(request, dispatch, getState, data, took); }
}

// process error returned from getData()
function processDataError(reqType, request, dispatch, msg) {
    console.log(file$4, 'processDataError:', reqType, msg);
    dispatch({ type: SET_MSG, payload: { type: MSG_ERROR, value: 'ERROR: ' + msg } });
    dispatch({ type: SET_BOOLEAN, payload: { countLoading: false, dataLoading: false } });
}

// private functions ------------------------------------------------------------------------------------------------

// using dataResults, check if any matching item in searchResults.map has its 'checked' property equal to false; if so then return false 
function getSelectAllChecked(dataResults, searchResults) {
    var identifiers = getIdentifiers(dataResults);
    var map = searchResults.map;
    var checked = true;
    for (var i = 0, n = identifiers.length; i < n; i++) {
        if (map[identifiers[i]].checked === false) { checked = false; }
        break
    }
    return checked
}

// merge data from searchResults -> dataResults
function mergeResults(dataResults, searchResults) {
    var map = searchResults.map;
    dataResults.forEach(function (dr) {
        var sr = map[dr.identifier];
        if (sr) {
            var sequence_match = sr.sequence_match;
            var seqmotif_match = sr.seqmotif_match;
            var structure_match = sr.structure_match;
            Object.assign(dr, { sequence_match: sequence_match, seqmotif_match: seqmotif_match, structure_match: structure_match });
        }
    });
}

// process count request
function processCount(request, dispatch, getState, data) {
    //u.logJson(file, data, 'processCount: data')
    var count = (data.statusCode && data.statusCode === 204) ? 0 : data.total_count;

    if (request.query.label === LABEL_CHEMICAL) {
        dispatch({ type: QB_CHEMICAL_SET_PROPS, payload: { count: count } });
    } else if (request.query.label === LABEL_RULE) {
        var ruleId = request.request_info.query_id; // rule.id is stored in request for count requests
        dispatch({ type: QB_TEXT_SET_RULE_PROPERTY, payload: { ruleId: ruleId, count: count } });
    } else if (request.query.label === LABEL_SEQMOTIF) {
        dispatch({ type: QB_SEQUENCE_MOTIF_SET_PROPS, payload: { count: count } });
    } else if (request.query.label === LABEL_SEQUENCE) {
        dispatch({ type: QB_SEQUENCE_SET_PROPS, payload: { count: count } });
    } else if (request.query.label === LABEL_STRUCTURE) {
        dispatch({ type: QB_STRUCTURE_SET_PROPS, payload: { count: count } });
    } else {
        dispatch({ type: QB_SET_PROPS, payload: { count: count } }); // queryBuilder count
    }

    dispatch({ type: SET_BOOLEAN, payload: { countLoading: false } });
}

// process gql data
function processGqlData(gqlRequest, dispatch, getState, data) {
    var report = gqlRequest.report;
    console.log(file$4 + ': processGqlData: report=' + report);

    var dataResults;
    if (report === SEARCH_SUMMARY) { 
        dataResults = data; // data returned directly from gql
        console.log(file$4, 'processGqlData', 'dataResults.length=' + dataResults.length);

        var ref = getState();
        var searchResults = ref.searchResults;

        var checked = getSelectAllChecked(dataResults, searchResults);
        mergeResults(dataResults, searchResults);
        dispatch({ type: SET_SELECT_ALL, payload: { checked: checked } });
    } else {
        // data returned from tabular reports - not all props may be present in the 'data' object
        //let { table } = data // columns, rows, results,  
        //u.logJson(file, data, 'data')
        dataResults = {}; //set to empty object, or null?

        dispatch({ type: SET_REPORT_PROPS, payload: { table: data.table, batch: null, format: null, mode: null } });
    }  

    dispatch({ type: SET_DATA_RESULTS, payload: { dataResults: dataResults } });
    dispatch({ type: SET_VIEW, payload: { report: report } });
    dispatch({ type: SET_BOOLEAN, payload: { dataLoading: false } });

    var request = getState().request;  

    var src = 'process-data.processGqlData';
    setTimeout(function () { pushState({ request: request, src: src })(dispatch, getState); }, 500); 
}

// process search data returned from search request:
function processSearch(request, dispatch, getState, data, took) {
    //console.log(file, 'processSearch')

    // set request
    var html = setRequest(request, dispatch);
    
    if (data.statusCode === 204) { // no results, which is not handled as an error - note: checking for 204 is not necessary because statusCode will only be set in routes file if arches returns 204
        dispatch({ type: SET_MSG, payload: { type: MSG_NO_RESULTS, value: MSGS.noResults } });
        dispatch({ type: SET_SEARCH_RESULTS, payload: {} });
        dispatch({ type: SET_BOOLEAN, payload: { dataLoading: false } });

        dispatch({ type: HISTORY_ADD, payload: { request: request, html: html, count: 0, took: took } });
        
        var src = 'process-data.processSearch';
        setTimeout(function () { pushState({ request: request, src: src })(dispatch, getState); }, 500); 

    } else {
        dispatch({ type: SET_SEARCH_RESULTS, payload: { data: data, request: request } });

        var total_count = data.total_count;
        if (request.request_options.pager.start === 0) { // new search
            initRefinements(data, request);

            dispatch({ type: SET_PAGER, payload: { start: 0, total_count: total_count } }); // retain pager.rows value
            dispatch({ type: HISTORY_ADD, payload: { request: request, html: html, count: total_count, took: took } });
        }

        var ref = getState().views;
        var report = ref.report;
        var search = ref.search;
        
        if (search === REPORT && report === 'pdb_ids') {
            // pdb_ids report - no need to get gql data
            dispatch({ type: SET_BOOLEAN, payload: { dataLoading: false } });
        } else {
            getData$$1(REQ_GQL_DATA)(dispatch, getState);
        }    
    }
}

// set request and corresponding requestHtml
function setRequest(request, dispatch) {
    dispatch({ type: SET_REQUEST, payload: { request: request } }); // TODO rename state request -> searchRequest

    var html = getHtml$$1(request); // TODO refactoring needed
    dispatch({ type: SET_REQUEST_HTML, payload: { html: html } });

    return html
}

/* 
    this script handles actions that need to asynchronously retrieve data from the server
*/

var dataLoading = { dataLoading: true }; // dataLoading payload
var countLoading = { countLoading: true }; // countLoading payload

/*
    This function handles requests to retrieve data asynchronously from the server. Note that
    some components handle async requests locally - see getData in util.js.

    TODO combine all getData() functionality in a single function

    reqTypes:
        REQ_ALL_IDS
        REQ_COUNT
        REQ_GQL_DATA
        REQ_SEARCH

    if reqType === REQ_GQL_DATA then 'request' is undefined

    // if reqType === REQ_GQL_DATA then 'request' is a gql request object containing all or some 
    // of { searchResults, returnType, report, attributes }
*/
function getData$$1(reqType, request) {
    return function (dispatch, getState) {
        dispatch({ type: SET_MSG, payload: null });

        //u.logJson(file, request, 'request')

        var start = Date.now();

        var url, data, msg;

        if (reqType === REQ_ALL_IDS) { // request all ids
            
            request = clone(request);
            delete request.request_options.pager;
            delete request.request_options.scoring_strategy;

            dispatch({ type: SET_BOOLEAN, payload: dataLoading });
            url = SEARCH_URL;
        
        } else if (reqType === REQ_COUNT) {
        
            var query = (request) ? request.query : null;
            //u.logJson(file, query, 'query')

            if (isValid(query)) {
                prepareQuery(query);
                setRequestInfo(request);

                dispatch({ type: SET_BOOLEAN, payload: countLoading });
                url = SEARCH_URL;
            } else {
                alert(MSGS.emptyQuery);
            }
        
        } else if (reqType === REQ_GQL_DATA) { // 'request' param here is a gqlRequest object
            pushState()(dispatch, getState); // set to null
            
            request = getGqlRequest(getState());

            dispatch({ type: SET_BOOLEAN, payload: dataLoading });
            url = GQL_DATA_URL;
        
        } else if (reqType === REQ_SEARCH) { // all search requests
            pushState()(dispatch, getState); // set to null

            var query$1 = (request) ? request.query : null;
            //u.logJson(file, query, 'query')

            if (isValid(query$1)) {
                prepareQuery(query$1);
                setRequestInfo(request);
                    
                dispatch({ type: SET_BOOLEAN, payload: dataLoading });            
                dispatch({ type: SET_RETURN_TYPE, payload: { returnType: request.return_type } });
                dispatch({ type: SET_VIEW, payload: { tab: TAB_SEARCH } });
                
                setGtag$$1(query$1);

                url = SEARCH_URL;
            } else {
                console.log('query is NOT valid');
                alert(MSGS.emptyQuery);
            }
        }

        if (url) {
            //u.logJson(file, request, 'getData: request')

            var body = JSON.stringify(request);

            fetch(url, {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    referrer: ENV.referer,
                    body: body 
                })
                .then(function (response) {
                    if (!response.ok) { throw Error(response.status + ': ' + response.statusText) }
                    return response.text()
                })
                .then(function (text) {
                    try {
                        data = JSON.parse(text); // this will throw a parse error if data is invalid json
                    } catch(e) {
                        throw e
                    }
                    var took = Date.now() - start;
                    if (data.statusCode && data.statusCode !== 204) { // 204 denotes no results so do not process as err
                        //u.logJson(file, data, 'data')
                        msg = data.statusCode + ' ' + data.msg;
                        processDataError(reqType, request, dispatch, msg);
                    } else {
                        //if (data.statusCode && data.statusCode === 204) u.logJson(file, data, 'data')
                        processData(reqType, request, dispatch, getState, data, took);
                    }
                })
                .catch(function (err) {
                    msg = err.message;
                    processDataError(reqType, request, dispatch, msg);
                });
        }
    }
}

// page through the search results
function pageResults(op) {
    return function (dispatch, getState) {
        var ref = getState();
        var pager = ref.pager;
        var searchResults = ref.searchResults;
        var views = ref.views;
        var rows = pager.rows;
        var start = pager.start;
        var result_set = searchResults.result_set;
        var report = views.report;
        
        start = (op === 'next') ? start + rows : start - rows;
        dispatch({ type: SET_PAGER, payload: { start: start } });

        if (start >= result_set.length) {
            // searchResults is retrieved in batches of length equal to c.DEFAULT_REQUEST_PAGER_ROWS - if start >= result_set.length
            // then get a new batch of searchResults - this subsequent request does not need to retrieve the drilldown data
            dispatch({ type: SET_REQUEST_PAGER }); // modify pager in the request
            
            var request = getState().request; // important to get from state after c.SET_REQUEST_PAGER dispatch is called
            console.log(SEPARATOR, 'retrieving next searchResults.result_set');
            getData$$1(REQ_SEARCH, request)(dispatch, getState);
        } else {
            if (!(views.search === REPORT && report === 'pdb_ids')) {
                getData$$1(REQ_GQL_DATA)(dispatch, getState);
            }
        }
    }
}

// change the number of results per page 
// - note: this action always resets the start to 0, but does not require a new search request, because 'rows' is always less than or equal to the default result_set.length
function perPageData(rows) {
    return function (dispatch, getState) {
        rows = parseInt(rows);
        dispatch({ type: SET_PAGER, payload: { rows: rows, start: 0 } });

        var ref = getState();
        var searchResults = ref.searchResults;
        var views = ref.views;
        var result_set = searchResults.result_set;
        var report = views.report;
        
        if (result_set && report !== 'pdb_ids') {
            // do not get gql data if report is ids // && views.search == c.REPORT
            getData$$1(REQ_GQL_DATA)(dispatch, getState);
        }
    }
}

function sortData(sort) {
    return function (dispatch, getState) {
        var state = getState();
        var pager = state.pager;
        var request = clone(state.request);
        dispatch({ type: SET_SORT, payload: { sort: sort } });

        request.request_options.sort = sort;

        // reset request pager
        request.request_options.pager = getDefault('request-pager');
        request.request_options.pager.rows = pager.rows;
        
        getData$$1(REQ_SEARCH, request)(dispatch, getState);
    }
}

// private functions -----------------------------------------------------------

/*
    return gql request object populated by data from state
*/
function getGqlRequest(state) {
    var pager = state.pager;
    var returnType = state.returnType;
    var searchResults = state.searchResults;
    var tabularReport = state.tabularReport;
    var views = state.views;
    var report = views.report;

    var identifiers = getIdentifiers(searchResults, pager.rows, pager.start);
    var attributes = (report === 'custom_report') ? tabularReport.attributes : null;
    return { attributes: attributes, identifiers: identifiers, returnType: returnType, report: report }
}

/* 
    this script handles miscellaneous actions
*/

var file$16 = 'actions/misc';

/*
    Generic function to call an action of type 'type'
        - if 'payload' param is present, call action with payload object
        - if 'payload' param is null, call action with name/value
    
    This function is useful when a component needs to update a single property in the state, without any intermediate 
    logic or processing. It saves the overhead of having to create additional functions in the 'actions' folder whose 
    only purpose is to pass the value or object on to a reducer function.
*/
function dispatchAction(type, payload, name, value) {
    //console.log(file, 'dispatchAction', type)
    if (!payload) {
        if (name && value) {
            payload = {};
            payload[name] = value;
        } 
    }
    return function (dispatch) { return dispatch({ type: type, payload: payload }); }
}

// set tree_id and tree
function saveTreeData(tree_id, tree) {
    return function (dispatch, getState) {
        console.log(file$16, 'saveTreeData: tree_id=' + tree_id);
        dispatch({ type: SET_TREE, payload: { tree_id: tree_id, tree: tree } });
    }
}

/*
    Set control, specifying which search operation will be run if user hits the 'enter' key. 
    Possible values are:
        QUERY_BUILDER
        REFINEMENTS
        SEARCH_BAR
*/    
function setControl(control, src) {
    //console.log(file, 'setControl: control=' + control, src)
    return function (dispatch, getState) {
        dispatch({ type: SET_CONTROL, payload: { control: control } });
    }
}

// set 'checked' property for a single result_set item when a search results item is checked
function setItemChecked(id, checked) {
    return function (dispatch, getState) {
        dispatch({ type: SET_ITEM_CHECKED, payload: { id: id, checked: checked } }); // update item in searchResults.result_set
        
        var result_set = getState().searchResults.result_set;
        var value = true;
        for(var i = 0, n = result_set.length; i < n; i++) {
            if (!result_set[i].checked) { // set value false if any item is not checked
                value = false;
                break
            }
        }
        dispatch({ type: SET_SELECT_ALL, payload: { checked: value } });
    }
}

/* 
    set views.search view and if required, set views.report and get data from gql for report

    views.report	
    views.search	
    views.tab	    

    note: only if report === 'custom_report' will the 'attributes' parameter be present


        tree	
        dev	    state
        help	overview
        mypdb	login
        report	<tabular-report>|'pdb_ids'|'create_custom_report'|'custom_report'
        search	GALLERY|SUMMARY|COMPACT|REPORT
        tab	    TAB_SEARCH|TAB_HISTORY|TAB_TREE_BROWSER|TAB_MYPDB|TAB_HELP

*/    
function setViews(search, report) {
    return function (dispatch, getState) {
        var ref = getState();
        var returnType = ref.returnType;
        var views = ref.views;

        console.log(file$16, 'setViews: BEFORE: views.search=' + views.search + ', views.report=' + views.report + ', search=' + search + ', report=' + report + ', returnType=' + returnType);

        // either search AND/OR report has changed
        if (search !== views.search || report !== views.report) {
            dispatch({ type: SET_VIEW, payload: { search: search, report: report } });

            // report has changed
            if (views.report !== report) {
                if (!(report === 'pdb_ids' || report === 'create_custom_report')) {
                    getData$$1(REQ_GQL_DATA)(dispatch, getState);
                }
            }
        } 
    }
}

// set search.selectAll property, and set searchResults checked property for all dataResults items
function setSelectAll(checked) {
    return function (dispatch, getState) {
        dispatch({ type: SET_SELECT_ALL, payload: { checked: checked } });
        var dataResults = getState().dataResults;
        dispatch({ type: SET_ALL_CHECKED, payload: { checked: checked, dataResults: dataResults } });
    }
}

/* 
    this script handles query builder actions

    TODO refactor using dispatchAction - these functions are not needed
*/

function addGroup(id){
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_ADD_GROUP, payload: { id: id } });
        update(dispatch, getState);
    }
}

function addInput(rule) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_ADD_INPUT, payload: { rule: rule } });
        update(dispatch, getState);
    }
}

function addRule(id){
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_ADD_RULE, payload: { id: id } });
        update(dispatch, getState);
    }
}

function deleteGroup(parentId, groupId){
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_DELETE_GROUP, payload: { parentId: parentId, groupId: groupId } });
        update(dispatch, getState);
    }
}

function deleteInput(rule, guid) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_DELETE_INPUT, payload: { rule: rule, guid: guid } });
        update(dispatch, getState);
    }
}

function deleteRule(groupId, ruleId){
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_DELETE_RULE, payload: { groupId: groupId, ruleId: ruleId } });
        update(dispatch, getState);
    }
}

function setAttribute(ruleId, item) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_SET_ATTRIBUTE, payload: { ruleId: ruleId, item: item } });
        update(dispatch, getState);
    }
}

function setBooleanOperator(id) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_SET_GROUP_BOOL, payload: { id: id } });
        update(dispatch, getState);
    }
}

function setNot(id){
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_SET_NOT, payload: { id: id } });
        update(dispatch, getState);
    }
}

function setOperator(id, operator) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_SET_OPERATOR, payload: { id: id, operator: operator } });
        update(dispatch, getState);
    }
}

function setValue(ruleId, inputId, value) {
    return function (dispatch, getState) {
        dispatch({ type: QB_TEXT_SET_VALUE, payload: { ruleId: ruleId, inputId: inputId, value: value } });
        update(dispatch, getState);
    }
}

// private functions -----------------------------------------------------------

function update(dispatch, getState) {
    //console.log(file, 'update')
    dispatch({ type: QB_SET_PROPS, payload: { count: -1 } });
}

/* this script handles refinements actions */

//import * as u from '../util'

//const file = 'actions/refinements'

// clear refinement in refinements panel
function clearRefinement(refinement) {
    return function (dispatch, getState) {
        dispatch({ type: CLEAR_REFINEMENT, payload: { refinement: refinement } });
    }
}

// clear refinements panel
function clearRefinements() {
    return function (dispatch, getState) {
        dispatch({ type: CLEAR_REFINEMENTS });
    }
}

// set 'checked' property for a single result_set item when a refinements item is checked
function setRefinement(refinement, value, checked) {
    return function (dispatch, getState) {
        dispatch({ type: SET_REFINEMENT, payload: { refinement: refinement, value: value, checked: checked } });
    }
}

/* all constants for routes/search */

/*
    map all state properties to props, so that any state property is available to any component that includes:
        export default connect(c.mapStateToProps, c.mapDispatchAllToProps)(<COMPONENT_NAME>)
*/        
var mapStateToProps = function (state) { return state; };

/*
    map all dispatch actions in actions/*.js files to props, so that any action is available to any component that exports a Redux connect function:
        export default connect(c.mapStateToProps, c.mapDispatchAllToProps)(<COMPONENT_NAME>)
*/        
var mapDispatchAllToProps = function (dispatch) {
    return {
          getData: function (reqType, request)                    { return dispatch(getData$$1(reqType, request)); }
        , pageResults: function (op)                              { return dispatch(pageResults(op)); }
        , perPageData: function (rows)                            { return dispatch(perPageData(rows)); }
        , sortData: function (sort)                               { return dispatch(sortData(sort)); }

        , dispatchAction: function (type, payload)                { return dispatch(dispatchAction(type, payload)); }
        , setControl: function (control, src)                     { return dispatch(setControl(control, src)); }
        , setItemChecked: function (id, checked)                  { return dispatch(setItemChecked(id, checked)); }
        , setSelectAll: function (checked)                        { return dispatch(setSelectAll(checked)); }
        , saveTreeData: function (tree_id, tree)                  { return dispatch(saveTreeData(tree_id, tree)); }
        , setViews: function (view, report, attributes)           { return dispatch(setViews(view, report, attributes)); }  

        , addGroup: function (id)                                 { return dispatch(addGroup(id)); }
        , addInput: function (rule)                               { return dispatch(addInput(rule)); }
        , addRule: function (id)                                  { return dispatch(addRule(id)); }
        , deleteInput: function (rule, guid)                      { return dispatch(deleteInput(rule, guid)); }
        , deleteRule: function (groupId, ruleId)                  { return dispatch(deleteRule(groupId, ruleId)); }
        , deleteGroup: function (parentId, id)                    { return dispatch(deleteGroup(parentId, id)); }
        , setBooleanOperator: function (id)                       { return dispatch(setBooleanOperator(id)); }
        , setAttribute: function (ruleId, item)                   { return dispatch(setAttribute(ruleId, item)); }
        , setNot: function (id)                                   { return dispatch(setNot(id)); }
        , setOperator: function (id, operator)                    { return dispatch(setOperator(id, operator)); }
        , setValue: function (ruleId, inputId, value)             { return dispatch(setValue(ruleId, inputId, value)); }

        , clearRefinement: function (refinement)                  { return dispatch(clearRefinement(refinement)); }
        , clearRefinements: function ()                           { return dispatch(clearRefinements()); }
        , setRefinement: function (refinement, value, checked)    { return dispatch(setRefinement(refinement, value, checked)); }

        , attributeValueSearch: function (attribute, value, type) { return dispatch(attributeValueSearch(attribute, value, type)); }
        , countSearch: function (rule)                            { return dispatch(countSearch(rule)); }
        , editSearch: function (str)                              { return dispatch(editSearch(str)); }
        , prevNextSearch: function (op)                           { return dispatch(prevNextSearch(op)); }
        , queryBuilderSearch: function ()                         { return dispatch(queryBuilderSearch()); }
        , refinementsSearch: function ()                          { return dispatch(refinementsSearch()); }
        , requestSearch: function (request, src)                  { return dispatch(requestSearch(request, src)); }
        , serviceCountSearch: function (service)                  { return dispatch(serviceCountSearch(service)); }
        , urlSearch: function ()                                  { return dispatch(urlSearch()); }

        , popState: function (event)                              { return dispatch(popState(event)); }
        , pushState: function (params)                            { return dispatch(pushState(params)); }
    }
};

/*
    an empty function for components that do not need use any dispatch actions 
        - this avoids an empty dispatch function being added to props when mapDispatchToProps is set to null 
        - see console output if mapDispatchToProps is set to null
        format: 
            export default connect(c.mapStateToProps, c.mapDispatchNoneToProps)(<COMPONENT_NAME>)
*/        
var mapDispatchNoneToProps = function () { return {} };

var ENV = {};
var CDN_RCSB_URL      = '//cdn.rcsb.org/rcsb-pdb/';
var DOWNLOADS_URL     = '/downloads?ids=';
var FILE_DOWNLOAD_URL = 'http://files.rcsb.org/download/';
var FILE_VIEW_URL     = 'http://files.rcsb.org/view/';
var GQL_DATA_URL      = '/search/gql';
var HELP_URL          = '/search/html/help';
var MYPDB_URL         = '/mypdb/';
var SEARCH_URL        = '/search/data';
var CONTROL_QUERY_BUILDER = 'QUERY_BUILDER';
var CONTROL_REFINEMENTS   = 'REFINEMENTS';
var CONTROL_SEARCH_BAR    = 'SEARCH_BAR';
var TAB_SEARCH        = 'TAB_SEARCH';
var TAB_HISTORY       = 'TAB_HISTORY';
var TAB_TREE_BROWSER  = 'TAB_TREE_BROWSER';
var TAB_MYPDB         = 'TAB_MYPDB';
var TAB_HELP          = 'TAB_HELP';
var TABS = [TAB_SEARCH, TAB_HISTORY, TAB_TREE_BROWSER, TAB_MYPDB, TAB_HELP];
var TAB_NAMES = {
          TAB_SEARCH:       'Search'
        , TAB_HISTORY:      'History'
        , TAB_TREE_BROWSER: 'Browse Annotations'
        , TAB_MYPDB:        'MyPDB'
        , TAB_HELP:         'Help' };
var GALLERY   = 'GALLERY';
var SUMMARY   = 'SUMMARY';
var COMPACT   = 'COMPACT';
var REPORT    = 'REPORT';
var SEARCH_VIEWS = [SUMMARY, GALLERY, COMPACT, REPORT];
var SEARCH_VIEW_NAMES = {
          GALLERY: 'Gallery'
        , SUMMARY: 'Summary'
        , COMPACT: 'Compact'
        , REPORT:  'Tabular Report'
    };
var CLEAR_REFINEMENT      = 'CLEAR_REFINEMENT';
var CLEAR_REFINEMENTS     = 'CLEAR_REFINEMENTS';
var SET_REQUEST_PAGER     = 'SET_REQUEST_PAGER';
var SET_ALL_CHECKED       = 'SET_ALL_CHECKED';
var SET_BOOLEAN           = 'SET_BOOLEAN';
var SET_CONTAINER_WIDTH   = 'SET_CONTAINER_WIDTH';
var SET_CONTROL           = 'SET_CONTROL';
var SET_CW                = 'SET_CW';
var SET_HELP              = 'SET_HELP';
var SET_ITEM_CHECKED      = 'SET_ITEM_CHECKED';
var SET_MAX_GROUPS        = 'SET_MAX_GROUPS';
var SET_MSG               = 'SET_MSG';
var SET_PAGER             = 'SET_PAGER';
var SET_REFINEMENT        = 'SET_REFINEMENT';
var SET_REQUEST           = 'SET_REQUEST';
var SET_REQUEST_HTML      = 'SET_REQUEST_HTML';
var SET_DATA_RESULTS      = 'SET_DATA_RESULTS';
var SET_RETURN_TYPE       = 'SET_RETURN_TYPE';
var SET_SEARCH_RESULTS    = 'SET_SEARCH_RESULTS';
var SET_SELECT_ALL        = 'SET_SELECT_ALL';
var SET_SORT              = 'SET_SORT';
var SET_URLS_PROPS        = 'SET_URLS_PROPS';
var SET_VIEW              = 'SET_VIEW';
var URLS_ADD              = 'URLS_ADD';
var QB_CHEMICAL_SET_PROPS         = 'QB_CHEMICAL_SET_PROPS';
var QB_INIT                       = 'QB_INIT';
var QB_RESET_COUNTS               = 'QB_RESET_COUNTS';
var QB_SEQUENCE_SET_PROPS         = 'QB_SEQUENCE_SET_PROPS';
var QB_SEQUENCE_MOTIF_SET_PROPS   = 'QB_SEQUENCE_MOTIF_SET_PROPS';
var QB_SERVICE_SET_OPEN           = 'QB_SERVICE_SET_OPEN';
var QB_SET_PROPS                  = 'QB_SET_PROPS';
var QB_STRUCTURE_SET_PROPS        = 'QB_STRUCTURE_SET_PROPS';
var QB_TEXT_ADD_GROUP             = 'QB_TEXT_ADD_GROUP';
var QB_TEXT_ADD_INPUT             = 'QB_TEXT_ADD_INPUT';
var QB_TEXT_ADD_RULE              = 'QB_TEXT_ADD_RULE';
var QB_TEXT_DELETE_INPUT          = 'QB_TEXT_DELETE_INPUT';
var QB_TEXT_DELETE_GROUP          = 'QB_TEXT_DELETE_GROUP';
var QB_TEXT_DELETE_RULE           = 'QB_TEXT_DELETE_RULE';
var QB_TEXT_SET_ATTRIBUTE         = 'QB_TEXT_SET_ATTRIBUTE';
var QB_TEXT_SET_GROUP_BOOL        = 'QB_TEXT_SET_GROUP_BOOL';
var QB_TEXT_SET_NOT               = 'QB_TEXT_SET_NOT';
var QB_TEXT_SET_OPERATOR          = 'QB_TEXT_SET_OPERATOR';
var QB_TEXT_SET_RULE_PROPERTY     = 'QB_TEXT_SET_RULE_PROPERTY';
var QB_TEXT_SET_VALUE             = 'QB_TEXT_SET_VALUE';
var SET_TREE      = 'SET_TREE';
var SET_HISTORY           = 'SET_HISTORY';
var SET_HISTORY_ID        = 'SET_HISTORY_ID';
var HISTORY_ADD           = 'HISTORY_ADD';
var HISTORY_REMOVE        = 'HISTORY_REMOVE';
var HISTORY_REMOVE_ALL    = 'HISTORY_REMOVE_ALL';
var SET_CUSTOM_REPORT_ATTRIBUTE   = 'SET_CUSTOM_REPORT_ATTRIBUTE';
var SET_CUSTOM_REPORT_ATTRIBUTES  = 'SET_CUSTOM_REPORT_ATTRIBUTES';
var SET_PREDEFINED_ATTRIBUTES     = 'SET_PREDEFINED_ATTRIBUTES';
var SET_REPORT_PROPS              = 'SET_REPORT_PROPS';
var REQ_ALL_IDS   = 'REQ_ALL_IDS';
var REQ_GQL_DATA  = 'REQ_GQL_DATA';
var REQ_SEARCH    = 'REQ_SEARCH';
var REQ_COUNT     = 'REQ_COUNT';
var OPERATOR_MAP = {
        // string
          exact_match:      'equals'                
        , contains_words:   'contains words'
        , contains_phrase:  'contains phrase'
        , exists:           'exists'
        , in:               'in' // TODO number also?

        // number, date
        , equals:           '='
        , greater:          '>'
        , greater_or_equal: '>='
        , less:             '<'
        , less_or_equal:    '<='
        , range:            'range (upper excl.)'   // stats and refinements queries
        , range_closed:     'range (upper incl.)'
    };
var UNITS = {
          angstroms: 'Å'
        , angstroms_cubed_per_dalton: 'Å³/Da'	
        , angstroms_squared: 'Å²'
        , kelvins: 'K'
        , kilodaltons: 'kDa'
        , kilojoule_per_mole: 'kJ/mol'
        , megahertz: 'MHz'
        , daltons: 'Da'
        , degrees: '°'
        , nanomole: 'nM'
        , per_mole: 'M\u207B\u00B9' // unicode <sup>-1</sup> - TODO replace other unocode chars with unicode equivalent
    };
var LABEL_CHEMICAL         = 'chemical';
var LABEL_INPUT_GROUP      = 'input-group';
var LABEL_NESTED_ATTRIBUTE = 'nested-attribute';
var LABEL_QUERY_BUILDER    = 'query-builder';
var LABEL_REFINEMENTS      = 'refinements';
var LABEL_RULE             = 'rule';
var LABEL_SEQUENCE         = 'sequence';
var LABEL_SEQMOTIF         = 'seqmotif';
var LABEL_STRUCTURE        = 'structure';
var LABEL_TEXT             = 'text';
var ALIGNMENT_VIEW = 'ALIGNMENT_VIEW';
var SORT_OPTIONS = [
          { key: 'score desc', value: '\u2193 Score'}
        , { key: 'rcsb_accession_info.initial_release_date desc', value: '\u2193 Release Date: Newest to Oldest'}
        , { key: 'rcsb_accession_info.initial_release_date asc', value: '\u2191 Release Date: Oldest to Newest'}
        , { key: 'rcsb_entry_container_identifiers.entry_id asc', value: '\u2191 PDB ID: A to Z'}
        , { key: 'rcsb_entry_container_identifiers.entry_id desc', value: '\u2193 PDB ID: Z to A'}
        , { key: 'rcsb_entry_info.resolution_combined asc', value: '\u2191 Resolution: Best to Worst'}
        , { key: 'rcsb_entry_info.resolution_combined desc', value: '\u2193 Resolution: Worst to Best'}
    ];
var QB_SERVICES = [ 'text', 'sequence', 'seqmotif', 'structure', 'chemical' ];
var QB_SERVICE_MAP = {
        chemical: 'Chemical',
        sequence: 'Sequence',
        seqmotif: 'Sequence Motif',
        structure: 'Structure Similarity',
        text: 'Attribute'
    };
var SEQUENCE_TARGET_OPTIONS = [
          { key: 'pdb_protein_sequence', value: 'Protein'}
        , { key: 'pdb_dna_sequence', value: 'DNA'}
        , { key: 'pdb_rna_sequence', value: 'RNA'}
    ];
var DEFAULT_SEQUENCE_TARGET = SEQUENCE_TARGET_OPTIONS[0].key;
var DEFAULT_EVALUE_CUTOFF = 1000000;
var DEFAULT_IDENTITY_CUTOFF = 0;
var SEQUENCE_MOTIF_PATTERN_TYPE_OPTIONS = [
          { key: 'simple', value: 'Simple' }
        , { key: 'prosite', value: 'PROSITE' }
        , { key: 'regex', value: 'RegEx' }
    ];
var DEFAULT_SEQUENCE_MOTIF_PATTERN_TYPE = SEQUENCE_MOTIF_PATTERN_TYPE_OPTIONS[0].key;
var STRUCTURE_PROPERTY_OPTIONS = [
          { key: 'assembly_id', value: 'Assembly ID' }
        , { key: 'asym_id', value: 'Chain ID' }
    ];
var CHEMICAL_QUERY_TYPE_OPTIONS = [
          { key: 'formula', value: 'Formula' }
        , { key: 'descriptor', value: 'Descriptor' }
    ];
var CHEMICAL_DESCRIPTOR_TYPE_OPTIONS = [
          { key: 'SMILES', value: 'SMILES' }
        , { key: 'InChI', value: 'InChI' }
    ];
var CHEMICAL_MATCH_TYPE_OPTIONS = [
          { key: 'graph-relaxed', value: 'Graph Relaxed' }
        , { key: 'graph-relaxed-stereo', value: 'Graph Relaxed Stereo' } 
        , { key: 'graph-strict', value: 'Graph Strict' }
        , { key: 'fingerprint-similarity', value: 'Fingerprint Similarity' }
    ];
var DEFAULT_CHEMICAL_QUERY_TYPE       = CHEMICAL_QUERY_TYPE_OPTIONS[0].key;
var DEFAULT_CHEMICAL_DESCRIPTOR_TYPE  = CHEMICAL_DESCRIPTOR_TYPE_OPTIONS[0].key;
var DEFAULT_CHEMICAL_MATCH_TYPE       = CHEMICAL_MATCH_TYPE_OPTIONS[0].key;
var BTN_SM          = 'btn btn-default btn-sm';
var BTN_SM_PRIMARY  = 'btn btn-primary btn-sm';
var BTN_XS          = 'btn btn-default btn-xs';

// return types
var RETURN_TYPES = [
      { key: 'entry', core: 'entry', value: 'Structures', name: 'Structure' }
    , { key: 'polymer_entity', core: 'polymer_entities', value: 'Polymer Entities', name: 'Polymer Entity' }
    , { key: 'assembly', core: 'assemblies', value: 'Assemblies', name: 'Assembly' }
    , { key: 'non_polymer_entity', core: 'nonpolymer_entities', value: 'Non-polymer Entities', name: 'Non-polymer Entity' }
];

// misc    
var DATA_DOWNLOAD_COUNT       = 5000;
var EVENT_CATEGORY_SEARCH     = 'Search';
var IDS_COUNT                 = 25000;
var MAX_HISTORY_REQUESTS      = 50;
var MIN_SEQUENCE_LENGTH       = 20;
var MIN_SEQUENCE_MOTIF_LENGTH = 2;
var MYPDB_COOKIE_NAME         = 'rcsb_pdb_2b1e729e-a9ff-4003-8a34-c74cf1937824';
var OPTION_LIMIT              = 60;
var PER_PAGE_OPTIONS          = [25, 50, 100];
var SEARCH_SUMMARY            = 'search_summary';
var SEPARATOR                 = '-------------------------------------------------------------------------------- ';
var STORAGE_TYPE              = 'session';             // 'local'    

// defaults - must be declared after // misc
var DEFAULT_REQUEST_PAGER_ROWS = 100;
var DEFAULT_RETURN_TYPE        = RETURN_TYPES[0].key;
var DEFAULT_SCORING_STRATEGY   = 'combined';

// querystring operators
var QS_AND = ' AND ';
var QS_OR  = ' OR ';

/*
    Extra small devices (phones, less than 768px)
    Small devices       (tablets, 768px and up)
    Medium devices      (desktops, 992px and up)
    Large devices       (large desktops, 1200px and up)    
*/
var XS = 'XS';
var SM = 'SM';
var MD = 'MD';
var LG = 'LG';

// options used by u.getData    
var headers = { 'Content-Type': 'application/json' };
var OPTIONS_GET = {
          method: 'GET' 
        , headers: headers
    };
var OPTIONS_POST = {
          method: 'POST' 
        , headers: headers
    };
var OPTIONS_MYPDB = Object.assign({}, OPTIONS_POST, { credentials: 'include' });

/* msg strings */
var MSGS = {
      advancedSearchNoQuery:  'Use the <strong>Advanced Search Query Builder</strong> tool to create composite boolean queries. See the <a onclick="help()">Help</a> page for more detailed information.'
    , countLoading:           'Loading count data...'
    , downloadData:           'Your query returned more than ' + DATA_DOWNLOAD_COUNT + ' records. To download the entire data set in CSV or JSON format, you will be required to download the data as a series of batch files, each containing ' + DATA_DOWNLOAD_COUNT + ' rows. \n\nTo download data in a single file you may wish to further refine your query to limit the number of records returned. \n\nClick "OK" to proceed with the batch download, otherwise click "Cancel".'
    , downloadMsg:            'For large data sets you may find it more convenient to use the <a href="/pages/webservices" target="_blank">Search and Data APIs.'
    , dataError:              'There was an error loading the data.'
    , dataLoading:            'Loading data...'
    , emptyQuery:             'Please enter search criteria by selecting one or more fields and entering or selecting corresponding values.'
    , idsData:                'Your query returned more than ' + IDS_COUNT + ' ids. To download the entire data set, you will be required to download the data as a series of batch files, each containing ' + IDS_COUNT + ' ids. \n\nTo download IDs in a single file you may wish to further refine your query to limit the number of IDs returned. \n\nClick "OK" to proceed with the batch download, otherwise click "Cancel".'
    , noMyPdbQueries:         'You have no saved queries.'
    , noQuery:                'Use the <strong>Search Bar</strong> at the top of the page to run a Basic Search query or use the <strong>Advanced Search Query Builder</strong> tool below to create composite boolean queries. See the <a onclick="help()">Help</a> page for more detailed information.'
    , noResults:              'No results were found matching the current query.'
    , noSearchHistory:        'Currently there is no search history.'
    , noTabularResults:       'There are no Search results to display. Use Basic Search or Advanced Search to run a query. The results may then be displayed in the Tabular Reports tab.'
    , okToProceed:            '\n\nClick "OK" to proceed, otherwise click "Cancel".'
};

var MSG_ERROR         = 'MSG_ERROR';
var MSG_NO_QUERY      = 'MSG_NO_QUERY';
var MSG_NO_RESULTS    = 'MSG_NO_RESULTS'; 

/* tooltips */
var searchText = '<p>Click the &nbsp;<span class="glyphicon glyphicon-search" style="color:#fff;"></span>&nbsp; button to run the query.</p><p>When the &nbsp;<span class="glyphicon glyphicon-search" style="color:#0f0;"></span>&nbsp; icon is green, it indicates that the query may also be run by pressing the "Enter" key.</p>';

// TODO links in tooltips cannot be clicked - another solution?
//const helpText = '<p>See <a onclick="reactDispatchAction(\'SET_VIEW\', null, \'help\', \'structure-search\')">Structure Search Help Page</a> for more details</p>'

var TOOLTIPS = {
      chemicalSearch:           'Search ligands bound to macromolecules in the PDB by Chemical Formula, SMILES String, or InChI.'
    , chemicalType:             'The type of chemical search to be executed.'
    , chemicalMatchSubset:      'Find formulas satisfying only a subset of the query conditions.'       
    , chemicalDescriptorType:   'Type of chemical descriptor (SMILES or InChI).' 
    , chemicalMatchType:        'Qualitative graph matching or fingerprint comparison criteria.'  
    , displayResultsAs:         'Select the type of items to be returned in the search results. The same query may be used to return Structures, Polymer Entities, Non-polymer Entities, or Assemblies.'
    , history:                  '<p>Search History displays upto ' + MAX_HISTORY_REQUESTS + ' searches, beginning with the most recent. The Search History will persist only for as long as the current browser tab remains open.</p><p>To permanently save a search query, after logging in to MyPDB, click the "Save to MyPDB" button.</p>'
    , sequenceEvalue:           'Enter a value for E-Value Cutoff using either decimal or scientific notation, for example: 0.000003 or 3E-6. Hits with an E-Value above the cutoff value are filtered out.'  
    , sequenceIdentity:         'Hits with sequence identity below the cutoff value are filtered out.'
    , sequenceMotifMode:        '<p>Specify the format of the sequence motif.</p><p>Simple motifs represent sequence fragments and can contain X/x as wildcard character (e.g., GxxxG).</p><p>Use PROSITE pattern notation or RegEx to express complex patterns.</p>'
    , sequenceMotifTarget:      'Identifies a specific search scope.'
    , sequenceTarget:           'Identifies a specific search scope.'
    , queryBuilder:             '<p>Use the Query Builder tool to build a new query or to modify an existing query.</p>' + searchText
    , refinements:              '<p>Use the Refinements panel to filter the search results by selecting one or more values from the refinement categories. Selected values within a refinement category will be joined by a logical "OR" boolean operator. Refinement categories will be joined by a boolean "AND" operator.</p><p>For example, selecting two values from the "EXPERIMENTAL METHOD" category would result in the query ... AND EXPERIMENTAL METHOD = ("X-RAY DIFFRACTION" or "SOLUTION NMR") ...</p>' + searchText
    , sequenceSearch:           '<p>Search protein and nucleic acid sequences using the mmseqs2 method to find similar protein or nucleic acid chains in the PDB Archive.</p><p>To view the Sequence Identity, E-Value, and Region information in the search results, you must select "Polymer Entities" from the "Display Results as" dropdown.</p>'
    , seqmotifSearch:           '<p>Search for small sequence motifs in protein and nucleic acid sequences.</p><p>Enter a sequence motif in Simple, PROSITE or RegEx format.</p><p>To view the Sequence Motif Matching Region information in the search results, you must select "Polymer Entities" from the "Display Results as" dropdown. </p>'
    , structureMatchScore:      '<p>Probability (in percentage) that the structure match is similar to the query (0-100).</p>'
    , structureSearch:          '<p>Search protein structure shapes by using BioZernike descriptors as described in Guzenko et al 2020. The search will find structures whose volumes are globally similar to the query structure.</p><p>To view the Structure Match Score in the search results, you must select "Assemblies" from the "Display Results as" dropdown.</p>'
    , textSearch:               '<p>Use Attribute Search to search specific fields in the database, or to perform a full-text search against all searchable fields. </p><p>The interface allows for the creation of composite boolean queries by combining and grouping fields using boolean "AND", "OR", and "NOT" operators.</p>'
};

/* placeholder for text fields */
var PLACE_HOLDERS = {
      chemicalFormula:          'C12 H28 N4 O. Note that a Chemical Formula Search is case-sensitive. For example: "NIC4" (Nitrogen, Iodine, Carbon) and "NiC4" (Nickel, Carbon), will yield different results.'
    , chemicalSMILES:           'CC(=O)NCCCNCCCCNCCCN'
    , chemicalInChI:            'InChI=1S/C12H28N4O/c1-12(17)16-11-5-10-15-8-3-2-7-14-9-4-6-13/h14-15H,2-11,13H2,1H3,(H,16,17)'
    , identityCutoff:           '0-100'  
    , searchBar:                'Enter search terms or PDB ID(s)'
    , sequenceSearch:           'MTTQAPTFTQPLQSVVVLEG. Enter a sequence containing a minimum of ' + MIN_SEQUENCE_LENGTH + ' residues, OR enter a PDB ID in the text box below and select from the sequence list. The second option is useful for finding sequences that are similar to a sequence from a given structure and chain.'
    , sequenceMotifSearch:      ['MQTIF', 'C-x(2,4)-C-x(3)-[LIVMFYWC]-x(8)-H-x(3,5)-H', '[AG]....GK[ST]']
    , searchChemicalFormula:    'Molecular formula'
    , searchChemicalDescriptor: 'SMILES or InChI chemical descriptor.'
    , searchEntryId:            '1MBN'    
    , textSearch:               'Enter search term(s)'
    , treeSearchBar:            'Enter a word or phrase to search the tree'
};

var HELP_PAGES = [
      { id: 'overview',              name: 'Overview' }
    , { id: 'basic-search',          name: 'Basic Search' }
    , { id: 'advanced-search',       name: 'Advanced Search' }
    , { id: 'attribute-search',      name: 'Attribute Search' }
    , { id: 'sequence-search',       name: 'Sequence Search' }
    , { id: 'sequence-motif-search', name: 'Sequence Motif Search' }
    , { id: 'structure-search',      name: 'Structure Search' }
    , { id: 'chemical-search',       name: 'Chemical Search' }
    , { id: 'search-examples',       name: 'Search Examples' } ];

var PAGE_TITLES = {
      documentation: 'Documentation'
    , login: 'Sign In'
    , queries: 'Search Queries'
    , account: 'Account Settings'
};

// mypdb auth providers
var AUTHS = [
        {
              id: 'google'
            , name: 'Google'
        },
        {
              id: 'facebook'
            , name: 'Facebook'
        },
        {
              id: 'orcid'
            , name: 'ORCID'
        }
    ];

// note: to view/edit long text lines in VSCode use 'option + z' to toggle line wrap
var BROWSE_ANNOTATION = {
      goFooter: '<i><strong>Note:</strong> Not all PDB IDs/chains have been mapped to GO terms.</i>'
    , goHeader: '<p style="font-size:12px;"><i><strong>Note:</strong> to search by GO ID it is only necessary to enter the numeric portion of the ID, for example, to search for <strong>"GO:0007610"</strong>, enter <strong>"761"</strong>.</i></p>'
    , headers: {
          atc:                        '<p>The <a href="http://www.whocc.no/atc/structure_and_principles/" target="_blank">Anatomical Therapeutic Chemical (ATC) </a> Classification System is used for the classification of drugs. It is controlled by the <a href="http://www.whocc.no/" target="_blank">WHO Collaborating Centre</a> for Drug Statistics Methodology.<br /><i>ATC names are only listed when there are corresponding PDB entries.</i></p><p>Here you can <strong>browse</strong> an ATC name, <strong>view</strong> the number of associated PDB structures, and <strong>search</strong> for the specific ATC code.<p>'
        , biological_process:         '<p>Vocabulary terms describing biological processes developed by the <a href="http://www.geneontology.org/" target="_blank">Gene Ontology Consortium (GO)</a> have been mapped to PDB entities by <a href="http://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">SIFTS</a>.</p><p>Browse this Biological Process tree by selecting a GO term, or enter a GO term in the search box to identify the corresponding PDB entities.</p>'
        , cath:                       '<p><a href="http://www.cathdb.info/" target="_blank">CATH</a> is a novel hierarchical classification of protein domain structures, which clusters proteins at four major levels, Class(C), Architecture(A), Topology(T) and Homologous superfamily (H). Class, derived from secondary structure content, is assigned for more than 90% of protein structures automatically. Architecture, which describes the gross orientation of secondary structures, independent of connectivities, is currently assigned manually. The topology level clusters structures according to their toplogical connections and numbers of secondary structures. The homologous superfamilies cluster proteins with highly similar structures and functions. The assignments of structures to toplogy families and homologous superfamilies are made by sequence and structure comparisons.</p>'
        , cellular_component:         '<p>Vocabulary terms describing cellular component locations developed by the <a href="http://www.geneontology.org/" target="_blank">Gene Ontology Consortium (GO)</a> have been mapped to PDB entities by <a href="http://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">SIFTS</a>.</p><p>Browse this Cellular Component tree by selecting a GO term, or enter a GO term in the search box to identify the corresponding PDB entities.</p>'
        , ec:                         '<p>The PDB assigns EC (Enzyme Commission) numbers to structures and chains in the archive. These assignments are based on UniProtKB/GenBank/KEGG/author specified mapping of the enzyme to EC numbers. Enzyme Classification is based on the recommendations of the Nomenclature Committee of the International Union of Biochemistry and Molecular Biology (<a class="static" href="https://www.qmul.ac.uk/sbcs/iubmb/enzyme/" target="_blank">IUBMB</a>). It describes each enzyme for which an EC number has been provided (<a class="static" href="http://www.expasy.ch/enzyme/" target="_blank">EC</a>).</p><p>Here you can <strong>browse</strong> an EC name, <strong>view</strong> the number of associated PDB structures, and <strong>search</strong> for the specific associated structures. In addition to searching for an enzyme in the tree by term, you can search for the enzyme by either partial or full EC number.</p>'
        , genome_location:            '<p>The genome browser is a hierarchical representation of structures from genomes of various organisms. RCSB PDB has mapped the structures to the chromosomal loci based on UniProtKB/GenBank accession numbers associated with the structures and the loci. The genomes represented are a subset of the genomes in the NCBI genome database and whose curated sequences for genetic loci are archived at <a class="static" href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=gene" target="_blank">Entrez Gene</a>. The top level in the hierarchy is the organism\'s  genome. Each genome expands into chromosomes which in turn expand into a list of loci on the chromosomes. Each locus is a link to retrieve structures associated with that locus.</p><p>Here you can <strong>browse</strong> by Gene name, <strong>view</strong> the number of associated PDB structures, and <strong>search</strong> for the specific associated structures. Genes may be <strong>searched</strong> using their <strong>names</strong>.</p>'
        , membrane:                   '<p>Transmembrane proteins in the PDB are identified using the <a href="http://blanco.biomol.uci.edu/mpstruc/" target="_blank">mpstruc database</a> (Stephen White, UC Irvine), sequence clustering, and data derived from UniProt. <a href="/pages/help/advancedsearch/mpstruc">Details are available</a>.</p>'
        , mesh:                       '<a href="http://www.nlm.nih.gov/mesh/" target="_blank">MeSH (Medical Subject Headings)</a> are used to classify publications indexed by the National Library of Medicine (NLM). MeSH is a hierarchical set of keywords applied to each publication by a human annotator. The majority of PDB structures have associated a primary citation that is listed on the Structure Summary page. That citation includes an abstract and keywords. The keywords are in fact MeSH terms. Thus by browsing the MeSH tree you are finding all structures at a given level of the tree that have an abstract which include the selected MeSH term as a keyword.'
        , molecular_function:         '<p>Vocabulary terms describing molecular function developed by the <a href="http://www.geneontology.org/" target="_blank">Gene Ontology Consortium (GO)</a> have been mapped to PDB entities by <a href="http://www.ebi.ac.uk/pdbe/docs/sifts/" target="_blank">SIFTS</a>.</p><p>Browse this Molecular Function tree by selecting a GO term, or enter a GO term in the search box to identify the corresponding PDB entities.</p>'
        , protein_modification:       '<p>Browse protein residue modifications in the PDB archive using the protein modification ontology (<a href="http://www.ebi.ac.uk/ols/ontologies/mod" target="_blank">PSI-MOD</a>) from         the Proteomics Standards Initiative (<a href="http://www.psidev.info/MOD" target="_blank">PSI</a>). Here you can <strong>browse</strong> the PSI-MOD Protein Modifications, <strong>view</strong> the number of associated PDB structures, and <strong>search</strong> for the specific associated structures.</p><p>Please cite:<br />BioJava-ModFinder: Identification of protein modifications in 3D structures from the Protein Data Bank (2017) Bioinformatics, https://doi.org/10.1093/bioinformatics/btx101</p>'
        , scop:                       '<p>Nearly all proteins have structural similarities with other proteins and, in some of these cases, share a common evolutionary origin. The <a  href="http://scop.mrc-lmb.cam.ac.uk/scop/" target="_blank">SCOP</a> database, created by manual inspection and abetted by a battery of automated methods, aims to provide a detailed and comprehensive description of the structural and evolutionary relationships between all proteins whose structure is known. As such, it provides a broad survey of all known protein folds, detailed information about the close relatives of any particular protein, and a framework for future research and classification.</p><p>Here you can <strong>browse</strong> by SCOP structural classifications (version 1.75 <a href="http://scop.mrc-lmb.cam.ac.uk/scop/" target="_blank"><span class="iconSet-main icon-external" title="Link out to SCOP">&nbsp;</span></a>).</p>'
        , symmetry:                   '<p>Protein symmetry is calculated for all protein complexes in the PDB, and updated weekly.</p>'
        , taxonomy:                   '<p>The Source Organism browser is a hierarchical representation of all organisms in the NCBI Taxonomy database (Taxonomy). All organisms which have structures in the PDB are listed as active links in the browser. These organisms are the source of the individual naturally-occurring polypeptides. The PDB source organism assignment is based on author/UniProtKB specified mapping of polypeptides.</p><p>Here you can browse by source organism, view the number of associated PDB structures, and search for the specific associated structures.</p>'
        , transporter_classification: '<p>Browse membrane transport proteins in the PDB archive using the Transporter Classification (TC) system from the Transporter Classification Database (<a href="http://www.tcdb.org" target="_blank">www.tcdb.org</a>).</p><p>Here you can <strong>browse</strong> the TCDB superfamilies, <strong>view</strong> the number of associated PDB structures, and <strong>search</strong> for the specific associated structures.</p>'
    } 
};

// these constants initialized when app is loaded
var CORE_MAP = {};
var MAP = {
          custom_report:        'Custom'
        , entry_id:             'PDB ID'
        // sequence search
        , evalue_cutoff:        'E-Value Cutoff'
        , identity_cutoff:      'Identity Cutoff'
        , target:               'Target'   
        // sequence motif search (also has 'target' property)
        , pattern_type:         'Mode'
        // structure search
        , relaxed_shape_match:  'Relaxed' 
        , shape_match:          'Shape Match'
        , strict_shape_match:   'Strict'
        // chemical search
        , descriptor_type:      'Descriptor Type' 
        , match_subset:         'Match Subset' 
        , match_type:           'Match Type'
        , query_type:           'Query Type'
    };
var OPERATOR_MAP_REVERSE = {};
var RETURN_TYPE_MAP = {}; 

// initialize when app is loaded    
function init() {
    AUTHS.forEach(function (o) { return MAP[o.id] = o; });
    CHEMICAL_DESCRIPTOR_TYPE_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    CHEMICAL_MATCH_TYPE_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    CHEMICAL_QUERY_TYPE_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    HELP_PAGES.forEach(function (o) { return MAP[o.id] = o.name; } );
    SEQUENCE_MOTIF_PATTERN_TYPE_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    SEQUENCE_TARGET_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    STRUCTURE_PROPERTY_OPTIONS.forEach(function (o) { return MAP[o.key] = o.value; });
    
    for (var p in OPERATOR_MAP) { OPERATOR_MAP_REVERSE[OPERATOR_MAP[p]] = p; }
    
    RETURN_TYPES.forEach(function (type) {
        RETURN_TYPE_MAP[type.key] = type;
        CORE_MAP[type.core] = type;
    });
    
    // init global tabularReportGroups
    tabularReportGroups.forEach(function (g) { return g.reports.forEach(function (r) { return MAP[r.id] = r.name; }); });
    
    // init global selectorItems
    selectorItems.forEach(function (item) { if (item.type !== 'header') { item.nameLc = item.name.toLowerCase(); } });

    console.log('constants INITIALIZED');
}

/* this script contains functions for updating state.pager */



function calculate(pager, payload) {
    pager = Object.assign({}, pager, payload); // payload may contain any combination of [rows, start, total_count]

    var rows = pager.rows;
    var start = pager.start;
    var total_count = pager.total_count;

    // set calculated values
    pager.page = start / rows + 1;
    pager.total_pages = Math.ceil(total_count / rows);
    pager.start_num = start + 1;

    var max_count = pager.page * rows;
    pager.end_num = (total_count < max_count) ? total_count : max_count;

    return pager
}

/* 
    This script contains a single public function to initialize the state.queryBuilder object, either to 
    a default empty state, or using an existing request object.
 */

var file$20 = 'reducers/helpers/get-query-builder';

/*
    return queryBuilder from an existing request, or initialize an empty queryBuilder if request is null

    see: actions/helpers/query-builder-to-request.js for the reverse process

    called from:
                                       _ 
        /search/advanced url            |
        open qb                         |- request is null
                                       _|

                                       _ 
        url                             |
        next|prev                       |
        back/forward browser button     |- request contains a 'query-builder' node    
        history                         |
        mypdb                           |
        openInQb                       _|

    @params queryBuilder - empty queryBuilder object that will be initialized
    @params payload - contains the request object if present
*/
function getQueryBuilder(payload) {
    var request, service; // payload, if present, may contain either 'request' OR 'service', but not both
    if (payload) {
        request = payload.request;
        service = payload.service;
    }

    if (request) { console.log(file$20, 'getQueryBuilder: return qb from request'); }
    else { console.log(file$20, 'getQueryBuilder: return empty queryBuilder, service=' + service); }

    var queryBuilder = getEmptyQueryBuilder(service);

    if (request) {
        //u.logJson(file, request, 'getQueryBuilder: request')

        var query = request.query;
        var serviceNodes = getQueryBuilderServiceNodes(query);
        var open = true;
        var count = -1;

        //u.logJson(file, serviceNodes, 'serviceNodes')

        if (serviceNodes.text) { // text service
            //u.logJson(file, serviceNodes.text, 'getQueryBuilder: serviceNodes.text')

            var text = queryBuilder.services.text;
            text.map = {};  // map of guids -> group|rule objects
            text.open = true;
            text.count = count; // TODO not implemented yet in UI

            var queryNode = clone(serviceNodes.text); // get clone of textNode to convert to queryBuilder node
            queryNodeToQbNode(queryNode, text.map);
            queryNode.is_root = true;
            text.root = queryNode;
        } else {
            addDefaultService(queryBuilder, 'text');
        }
        
        if (serviceNodes.sequence) { // sequence service
            var ref =  serviceNodes.sequence.parameters;
            var evalue_cutoff = ref.evalue_cutoff;
            var identity_cutoff = ref.identity_cutoff;
            var target = ref.target;
            var value = ref.value;
            var sequence = queryBuilder.services.sequence;
            identity_cutoff = parseInt(identity_cutoff * 100);
            Object.assign(sequence, { count: count, open: open, evalue_cutoff: evalue_cutoff, identity_cutoff: identity_cutoff, target: target, value: value });
            // sequence.value = value
            // sequence.target = target
            // sequence.evalue_cutoff = evalue_cutoff
            // sequence.identity_cutoff = parseInt(identity_cutoff * 100)
        } else {
            addDefaultService(queryBuilder, 'sequence');
        }

        if (serviceNodes.seqmotif) { // sequence motif service
            var ref$1 =  serviceNodes.seqmotif.parameters;
            var pattern_type = ref$1.pattern_type;
            var target$1 = ref$1.target;
            var value$1 = ref$1.value;
            var seqmotif = queryBuilder.services.seqmotif;
            Object.assign(seqmotif, { count: count, open: open, pattern_type: pattern_type, target: target$1, value: value$1 });
        } else {
            addDefaultService(queryBuilder, 'seqmotif');
        }

        if (serviceNodes.structure) { // structure service
            var parameters = serviceNodes.structure.parameters;
            var operator = parameters.operator;
            var entry_id = parameters.value.entry_id;
            var property = (parameters.value.assembly_id) ? 'assembly_id' : 'asym_id';
            var value$2 = (property === 'assembly_id') ? parameters.value.assembly_id : parameters.value.asym_id;
            var structure = queryBuilder.services.structure;
            Object.assign(structure, { count: count, open: open, entry_id: entry_id, operator: operator, property: property, value: value$2 }); // assign structure node parameters to qb service object
        } else {
            addDefaultService(queryBuilder, 'structure');
        }

        if (serviceNodes.chemical) { // chemical service
            logJson(file$20, serviceNodes.chemical, 'serviceNodes.chemical');
            var ref$2 = serviceNodes.chemical.parameters;
            var value$3 = ref$2.value;
            var type = ref$2.type;
            var match_subset = ref$2.match_subset;
            var descriptor_type = ref$2.descriptor_type;
            var match_type = ref$2.match_type;
            var chemical = queryBuilder.services.chemical;
            Object.assign(chemical, { count: count, open: open, value: value$3, type: type, match_subset: match_subset, descriptor_type: descriptor_type, match_type: match_type }); // assign chemical node parameters to qb service object
            logJson(file$20, chemical, 'chemical');
        } else {
            addDefaultService(queryBuilder, 'chemical');
        }
    } else {
        QB_SERVICES.forEach(function (s) { return addDefaultService(queryBuilder, s); });

        if (service) { queryBuilder.services[service].open = true; }
        else { queryBuilder.services.text.open = true; }
    }

    setShowAnd(queryBuilder);

    return queryBuilder
}

// set the 'showAnd' property for all queryBuilder services 
function setShowAnd(o) {
    var serviceOpenExists = false;
    for (var i = 0, n = QB_SERVICES.length; i < n; i++) {
        var s = o.services[QB_SERVICES[i]];
        s.showAnd = serviceOpenExists;
        if (s.open) { serviceOpenExists = true; }
    }
}

// private functions ---------------------------------------------------------------------------------------------------

// add default service of type 'service' to queryBuilder object
function addDefaultService(queryBuilder, service) {
    if (service === 'text') {
        var text = queryBuilder.services.text;
        text.map = {};  // map of guids -> group|rule objects
        
        var group = getEmptyGroup();
        group.is_root = true;
        text.root = group; // set root-level group
        text.map[group.id] = group;
        addEmptyGroup(text.map, text.root.id);
    } else {
        Object.assign(queryBuilder.services[service], getDefault(service));
    }
    queryBuilder.services[service].open = false;
}

/*
    return empty queryBuilder object
    
    if 'service' param is present, set the service to open, otherwise set 'text' service to open bt defualt
*/
function getEmptyQueryBuilder(service) {
    var qb = { 
        open: true,
        services: {},
        label: LABEL_QUERY_BUILDER
    };
    QB_SERVICES.forEach(function (s) { return qb.services[s] = { open: false, label: s }; });
    
    if (service) { qb.services[service].open = true; }
    else { qb.services.text.open = true; } // if no service is specified then set 'text' service to open

    return qb
}

// return true if group node 'o' contains a nested attribute (note: assumes nested attribute will be the first node in the nodes array)
function isNestedAttribute(o) {
    if(o.nodes && o.nodes.length === 2) {
        if (o.nodes[0].parameters && o.nodes[0].parameters.attribute) {
            var attribute = o.nodes[0].parameters.attribute;
            var fo = metadata[attribute];
            //u.logJson(file, fo, 'isNestedAttributeGroup: fo')
            if (fo.nestedAttribute) {
                // check o.nodes[1]
                if (o.nodes[1].parameters && o.nodes[1].parameters.attribute && o.nodes[1].parameters.attribute === fo.nestedAttribute.attribute) { return true }
            }
        }        
    }
    return false
}

/* 
    convert a Search API query text node to a queryBuilder text node 
        - see actions/helpers/query-builder-to-request.js for reverse process

    a node can be any one of the following

        group
            mixed - contains a nodes array of terminal and/or group nodes -> process recursively
            input-group -> convert to a single qb rule with multiple inputs
            nested-attribute -> convert to a single qb rule

        terminal
            input-group - multiple values using 'in' operator -> convert to qb rule with multiple inputs
            single value
            full-text - has no value
*/    

function queryNodeToQbNode(o, map) {
    if (o.type === 'group') {
        if (o.label === LABEL_NESTED_ATTRIBUTE || isNestedAttribute(o)) {
            // nested attribute uses a single input
            o.type = 'rule';
            o.id = getGuid();
            map[o.id] = o;

            var ref = o.nodes[0].parameters;
            var attribute = ref.attribute;
            var negation = ref.negation;
            var operator = ref.operator;
            var value = ref.value;
            o.attribute = attribute;
            o.not = negation;
            o.operator = operator;
            o.inputs = [{ value: value, guid: getGuid() }];
            o.nested_attribute = o.nodes[1].parameters.attribute;
            o.nested_attribute_value = o.nodes[1].parameters.value;

            deleteProps(o, ['label', 'logical_operator', 'node_id', 'nodes']); // group -> rule, so delete all group props
        
        } else if (o.label === LABEL_INPUT_GROUP) {
            // convert group to a single rule with multiple values
            o.type = 'rule';
            o.id = getGuid();
            map[o.id] = o;

            if (o.nodes[0].label === LABEL_NESTED_ATTRIBUTE) { // input-group with nested attributes
                var ref$1 = o.nodes[0].nodes[0].parameters;
                var attribute$1 = ref$1.attribute;
                var negation$1 = ref$1.negation;
                var operator$1 = ref$1.operator;
                o.attribute = attribute$1;
                o.not = negation$1; // TODO check logic here - see reverse logic in query-builder-to-request.js
                o.operator = operator$1;

                // set inputs
                o.inputs = [];
                o.nodes.forEach(function (node) {
                    o.inputs.push({ value: node.nodes[0].parameters.value, guid: getGuid() });
                });
                o.nested_attribute = o.nodes[0].nodes[1].parameters.attribute;
                o.nested_attribute_value = o.nodes[0].nodes[1].parameters.value;
            } else {
                // set additional rule properties to those of the first node
                var ref$2 = o.nodes[0].parameters;
                var attribute$2 = ref$2.attribute;
                var negation$2 = ref$2.negation;
                var operator$2 = ref$2.operator;
                o.attribute = attribute$2;
                o.not = negation$2; // TODO check logic here - see reverse logic in query-builder-to-request.js
                o.operator = operator$2;

                // set inputs
                o.inputs = [];
                o.nodes.forEach(function (node) { o.inputs.push({ value: node.parameters.value, guid: getGuid() }); });
            }
            deleteProps(o, ['label', 'logical_operator', 'node_id', 'nodes']); // group -> rule, so delete all group props
        
        } else {
            o.id = getGuid();
            map[o.id] = o;
            o.items = [].concat( o.nodes );

            deleteProps(o, ['label', 'node_id', 'nodes']); // group -> group, so delete all group props except for 'logical_operator'
            o.items.forEach(function (item) { return queryNodeToQbNode(item, map); });
        }

    } else { // terminal
        /*
            {
                "type": "terminal",
                "service": "text",
                "parameters": {
                    "attribute": "pdbx_SG_project.initial_of_center",
                    "operator": "in",
                    "negation": false,
                    "value": [
                        "ATCG3D",
                        "BIGS"
                    ]
                },
                "label": "input-group",
                "node_id": 0
            }
        */
        o.type = 'rule';
        o.id = getGuid();
        map[o.id] = o;

        if (o.parameters) {
            var ref$3 = o.parameters;
            var attribute$3 = ref$3.attribute;
            var negation$3 = ref$3.negation;
            var operator$3 = ref$3.operator;
            var value$1 = ref$3.value;
            o.attribute = (attribute$3) ? attribute$3 : 'full_text'; // if full_text, only value will be present
            o.not = (typeof negation$3 === 'undefined') ? false : negation$3;
            o.operator = operator$3; // for full_text ok to be null
            var fo = getFieldObj(o.attribute);

            if (o.label === LABEL_INPUT_GROUP) {
                // convert to a single rule with multiple inputs
                o.inputs = [];
                value$1.forEach(function (v) { o.inputs.push({ value: v, guid: getGuid() }); });
                // convert operator from 'in' -> 'equals|exact_match' - see actions/helpers/query-builder-to-request.js for reverse process
                o.operator = (fo.type === 'string') ? 'exact_match' : 'equals';
            } else {
                if (isRange(operator$3)) {
                    if (fo.format === 'date') {
                        o.from = isoDateToDate(value$1[0]);
                        o.to = isoDateToDate(value$1[1]);    
                    } else {
                        o.from = value$1[0];
                        o.to = value$1[1];
                    }
                } else {
                    if (fo.format === 'date' && operator$3 !== 'exists') { value$1 = isoDateToDate(value$1); } // value will be null for 'exists'
                }
                o.inputs = [{ value: value$1, guid: getGuid() }];
            }

        } else {
            // unique case for full_text *
            o.attribute = 'full_text';
            var value$2 = '*';
            o.inputs = [{ value: value$2, guid: getGuid() }];
        }

        deleteProps(o, ['label', 'node_id', 'parameters', 'service']); // terminal -> rule, so delete all terminal props
    }
}

/* 
    This script contains functions for updating state.queryBuilder.

    A queryBuilder object can be converted to a request.query object and vice-versa. 
    
    The queryBuilder object will have a label property equal to 'query_builder'. 
*/
var file$19 = 'reducers/helpers/query-builder';

// add group with 2 empty rules to parent group
function addEmptyGroup(map, parentId) {
    var parentGroup = map[parentId];
    var group = getEmptyGroup(false);
    parentGroup.items.push(group);
    map[group.id] = group; // add group to map
    addEmptyRules(group, map);
}

// add group with 2 empty rules to the parent group
function addGroup$1(map, parentId) {
    addEmptyGroup(map, parentId);
}

// add empty rule to group
function addRule$1(map, parentId) {
    var group = map[parentId];
    addEmptyRule(group, map);
}

// add input to rule.inputs array
function addInput$1(map, rule) {
    var guid = getGuid();
    var value = null;
    map[rule.id].inputs.push({ guid: guid, value: value });
}

// delete group from parent group
function deleteGroup$1(map, payload) {
    var parentId = payload.parentId;
    var groupId = payload.groupId;
    var parent = map[parentId];
    parent.items = parent.items.filter(function (item) { return item.id !== groupId; });
    delete map[groupId];
}

// delete input from rule.inputs array
function deleteInput$1(map, payload) {
    var rule = payload.rule;
    var guid = payload.guid;
    map[rule.id].inputs = rule.inputs.filter(function (input) { return input.guid !== guid; });
    map[rule.id].count = -1; // reset
}

// delete rule from group
function deleteRule$1(map, payload) {
    var groupId = payload.groupId;
    var ruleId = payload.ruleId;
    var group = map[groupId];
    group.items = group.items.filter(function (item) { return item.id !== ruleId; });
    delete map[ruleId];
}

// return an empty group
function getEmptyGroup() {
    return {
            type: 'group',
            id: getGuid(),
            items: [],
            logical_operator: 'and' }
}

// reset all service counts to -1
function resetCounts(o) {
    o.count = -1;
    var map = o.services.text.map;
    if (map) {
        for (var p in map) {
            if (map[p].type === 'rule') { map[p].count = -1; }
        }
    }
    QB_SERVICES.forEach(function (service) {
        if (service !== 'text') { if (o.services[service]) { o.services[service].count = -1; } }
    });
    // if (o.services.sequence) o.services.sequence.count = -1
    // if (o.services.structure) o.services.structure.count = -1
    // if (o.services.seqmotif) o.services.seqmotif.count = -1
    // if (o.services.chemical) o.services.chemical.count = -1
}

// set rule attribute
function setAttribute$1(map, payload) {
    var ruleId = payload.ruleId;
    var item = payload.item;
    var rule = map[ruleId]; // rule is the previous rule state
    if (item === null) {
        console.log(file$19 + ': setAttribute: item === null');
        rule.attribute = null;
    } else {
        rule.attribute = item.attribute;
        rule.nested_attribute = item.nested_attribute;
        rule.nested_attribute_value = item.nested_attribute_value;
        rule.placeholder = item.placeholder;
        rule.units = item.units;
        console.log(file$19, 'setAttribute: item.placeholder=' + item.placeholder);
        console.log(file$19, 'setAttribute: item.units=' + item.units);
    
        // get the field object associated with 'attribute'
        var fo = getFieldObj(item.attribute);
    
        // set default operator
        rule.operator = fo.default_operator;
    
        var guid = getGuid();
        rule.inputs = [ { guid: guid, value: null } ];
        rule.not = false;
        rule.to = null;
        rule.from = null;
        rule.count = -1; // reset
    }
}

// set group.logical_operator
function setBooleanOperator$1(map, id) {
    map[id].logical_operator = (map[id].logical_operator === 'and') ? 'or' : 'and';
}

function setNot$1(map, id) {
    var rule = map[id];
    rule.not = !rule.not;
    rule.count = -1; // reset
}

// set service.open for an individual service, and set corresponding 'hasAnd' property for all services
function setOpen(o, payload) {
    if (payload) { o.services[payload.service].open = !o.services[payload.service].open; }
    setShowAnd(o);
}

// set rule operator
function setOperator$1(map, payload) {
    var id = payload.id;
    var operator = payload.operator;
    var rule = map[id];
    //u.logJson(file, rule, 'setOperator: rule')
    var prevOperator = rule.operator;
    if (isRange(prevOperator) && isRange(operator)) {
        // switching between range <-> range_closed - do NOT set 'to' and 'from' to null
        if (rule.inputs && rule.inputs[0]) { rule.inputs[0].value = null; }
    } else if (isRange(prevOperator)) {
        // switching from range -> non-range operator
        rule.from = null;
        rule.to = null;
        if (rule.inputs && rule.inputs[0]) { rule.inputs[0].value = null; }
    } else if (isRange(operator)) {
        // switching from non-range -> range operator
        if (rule.inputs && rule.inputs[0]) { rule.inputs[0].value = null; }
    }
    rule.operator = operator;
    rule.count = -1; // reset
    //u.logJson(file, rule, 'setOperator: AFTER: rule')
}

function setRuleProperty(map, payload) {
    //map[payload.ruleId].linkedValue = payload.linkedValue
    //map[payload.id].count = payload.count
    var ruleId = payload.ruleId;
    delete payload.ruleId;
    Object.assign(map[ruleId], payload);
}

// set rule value
function setValue$1(map, payload) {
    var ruleId = payload.ruleId;
    var inputId = payload.inputId;
    var value = payload.value;
    var rule = map[ruleId];
    var inputs = rule.inputs;
    var attribute = rule.attribute;
    var operator = rule.operator;
    if (isRange(operator)) { // inputId will be to/from
        rule[inputId] = value;
    } else {
        inputs.forEach( function (input) {
            if (    attribute === 'rcsb_entry_container_identifiers.entry_id' ||
                    attribute === 'rcsb_entity_container_identifiers.entry_id' ||
                    attribute === 'rcsb_chem_comp_container_identifiers.comp_id' ||
                    attribute === 'rcsb_chem_comp_descriptor.InChIKey') { // TODO move this logic to metadata layer
                value = value.toUpperCase();
            }
            if (input.guid === inputId) { input.value = value; }
        });
    }
    rule.count = -1; // reset
}


// private functions ---------------------------------------------------------------------------------------------------

// add a rule to a group and also add to map
function addEmptyRule(group, map) {
    var rule = getEmptyRule(); 
    group.items.push(rule);
    map[rule.id] = rule; // add to map
}

// add 2 empty rules
function addEmptyRules(group, map) {
    addEmptyRule(group, map);
    //addEmptyRule(group, map)
}

// return an empty rule
function getEmptyRule() {
    return {
            type: 'rule',
            id: getGuid(),
            attribute: null,
            operator: null,
            inputs : [] }
}

/* this script contains functions for updating state.history */

var file$21 = 'reducers/helpers/history';

// add item to history
function add(prevHistory, item) {
    // if o already exists in history, based on id, then do not add it // TODO but move request to end of ids ?
    
    var query_id = item.request.request_info.query_id;
    var request = clone(item.request);
    delete request.request_options.pager;
    item.request = request; // save request without pager

    var history = clone(prevHistory);
    var map = history.map;
    var ids = history.ids;

    if (!map[query_id]) {
        ids.unshift(query_id); // add to beginning of ids
        item.last_run = Date.now();
        map[query_id] = item; // add to map
        history.id = query_id; // set current id to query_id
    } else {
        map[query_id].last_run = Date.now();
        //console.log(file, query_id + ' exists')
    }

    console.log(file$21, 'add query_id=' + query_id + ', ids.length=' + ids.length);

    while (ids.length > MAX_HISTORY_REQUESTS) {
        var id = ids.pop();
        delete map[id];
    }     

    getStorage().setItem('history', JSON.stringify(history));

    return history
}

/*
    history object:
    { 
        map: {},  // map of history items
        ids: [], // map of history item ids
        id: null // current id
    }
*/
function remove(prevHistory, query_id) {
    var history = clone(prevHistory);
    
    var ids = history.ids;
    history.ids = ids.filter(function (id) { return (id !== query_id); });
    
    delete history.map[query_id];

    if (history.id === query_id) { history.id = null; }
    
    getStorage().setItem('history', JSON.stringify(history));

    return history
}

function removeAll() {
    return { map: {}, ids: [], id: null}
}

/* this script contains functions for updating state.request */

function setPager(request) {
    var o = clone(request);
    var pager = o.request_options.pager;
    pager.start += pager.rows;
    return o
}

/* this script contains functions for updating state.searchResults */

function clearRefinement$1(o, refinement) {
    //u.logJson(file, refinement, 'clearRefinement: refinement')
    var drilldown = o.drilldown;
    drilldown.forEach(function (item) {
        if (item.attribute === refinement.attribute) {
            item.groups.forEach(function (group) { return group.checked = false; });
        }
    });
}

// clear refinements by setting group.checked to false for all groups
function clearRefinements$1(o) {
    o.drilldown.forEach(function (item) { return item.groups.forEach(function (group) { return group.checked = false; }); });
}

/*
    process search data returned from search request:
        {
            "total_count": 3899,
            "result_type": "entry", // NOT USED
            "result_set": [
                {
                    "score": 0,
                    "identifier": "5LZS"
                },
                ...
            ],
            "drilldown": []    
        }
*/
function getSearchResults(o, payload) {
    var data = payload.data;
    var request = payload.request;

    if (data && request) {
        var ref = request.request_options;
        var pager = ref.pager;
        //u.logJson(file, pager, 'pager')

        if (pager.start === 0) {
            // this is a new set of data
            data.map = {};
            data.result_set.forEach(function (r) {
                r.checked = true;
                data.map[r.identifier] = r;
            });
            return data
        } else if (pager.start > 0) {
            // this is a new page of data, so append data to the existing result_set
            data.result_set.forEach(function (r) {
                r.checked = true;
                o.result_set.push(r);
                o.map[r.identifier] = r;
            });
            return o
        }    
    }
    return null 
}

// set checked property for all dataResults
function setAllChecked(o, payload) {
    var checked = payload.checked;
    var dataResults = payload.dataResults;
    var ids = getIdentifiers(dataResults);
    ids.forEach(function (id) { return o.map[id].checked = checked; });
}

// set 'checked' property for a single result_set item
function setItemChecked$1(o, payload) {
    var result_set = o.result_set;
    var id = payload.id;
    var checked = payload.checked;
    if (result_set) {
        for(var i = 0, n = result_set.length; i < n; i++ ) {
            var item = result_set[i];
            if (item.identifier === id) {
                item.checked = checked;
                break
            }
        }
    }
}

function setMaxGroups(o, refinement) {
    var drilldown = o.drilldown;
    drilldown.forEach(function (item) {
        if (item.attribute === refinement.attribute) {
            item.maxGroups += 10;
        }
    });
}

// set refinement
function setRefinement$1(data, obj) {
    var refinement = obj.refinement;
    var value = obj.value;
    var checked = obj.checked;
    var attribute = refinement.attribute;
    var drilldown = data.drilldown;
    for (var i = 0; i < drilldown.length; i++) {
        if (drilldown[i].attribute === attribute) {
            var groups = drilldown[i].groups;
            if (groups) {
                for (var j = 0; j < groups.length; j++) {
                    if (groups[j].label === value) {
                        groups[j].checked = checked;
                        break
                    }
                }
                break
            }
        }
    }
}

/*
    The main reducers file. 
    
    Each function in the reducers file defines and corresponds to a redux store state property, and is responsible for setting/updating that property.

    All functions are imported by reducers/index.js.

    Object.assign creates only a shallow copy of an object, so 'state' properties that are objects with nested properties 
    should use u.cloneDeep(o) to create a clone of the object. 
        See https://www.npmjs.com/package/lodash.clonedeep

    All action objects in the search app contain a payload property. This property is always an object, so even if the 
    only value being passed is a primitive, it should still be wrapped in an object, e.g.:

        dispatch({ type: c.SET_RETURN_TYPE, payload: { returnType } })
*/

var file$1 = 'reducers/reducers';

/*
    TODO
        group all booleans into 'booleans' - TODO selectAll
        group booleans.countLoading, booleans.dataLoading into booleans.loading, and use for all loading functions, using msg parameter
*/
var reducers = {
      booleans: booleans$1               // array[boolean]   - array of all boolean state properties
    , containerWidth: containerWidth         // number           - the current container width set by onload/onresize event
    , control: control                // string           - the ui component controlling search - [searchbar | querybuilder | refinements]
    , customReport: customReport           // object
    , cw: cw                     // string           - the current container width expressed as SM|MD|LG set by onload/onresize event - see containerWidth
    , help: help                   // object           - help obj
    , history: history$2                // object           - search history obj
    , msg: msg                    // object           - 
    , pager: pager                  // object           - pager
    , queryBuilder: queryBuilder           // object           - query builder
    , request: request                // object           - the request object
    , requestHtml: requestHtml            // string           - html representation of the request object
    , dataResults: dataResults            // array[object]    - current page of data results
    , searchResults: searchResults          // object           - current search results (result_set + drilldowns)
    , returnType: returnType$1             // string           - query search type - corresponds to the core
    , selectAll: selectAll              // boolean          - indicates that all items are selected
    , sort: sort                   // object           - sort order for searchResults
    , tabularReport: tabularReport          // object           - object containing table, columns, rows, attributes objects and the properties 'batch' and 'format'
    , trees: trees                  // object           - tree map of id -> tree
    , urls: urls                   // object           - mimic back/forward btn behavior
    , alignmentView: alignmentView          // string           - Protein Feature View Sequence Alignment display type -> query | subject | pairwise
    , views: views                  // object           - manage the state of all views in the app - dev|help|mypdb|report|search|tab|tree
};




// store all boolean state properties in this object
function booleans$1(booleans, action) {
    if ( booleans === void 0 ) booleans = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_BOOLEAN:
            return Object.assign({}, booleans, payload)
        default:
            return booleans
    }
}

function containerWidth(containerWidth, action) {
    if ( containerWidth === void 0 ) containerWidth = 1170;
 // default to LG
    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_CONTAINER_WIDTH:
            return payload.containerWidth
        default:
            return containerWidth
    }
}

function alignmentView(alignmentView, action) {
    if ( alignmentView === void 0 ) alignmentView = "query";
 // default to LG
    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case ALIGNMENT_VIEW:
            return payload.alignmentView;
        default:
            return alignmentView
    }
}

// return the current control
function control(control, action) {
    if ( control === void 0 ) control = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_CONTROL:
            return payload.control
        default:
            return control
    }
}

function customReport(customReport, action) {
    if ( customReport === void 0 ) customReport = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_CUSTOM_REPORT_ATTRIBUTE: {
            var o = clone(customReport);
            var attribute = payload.attribute;
            var checked = payload.checked;
            console.log(file$1, attribute, checked);
            o.map[attribute].checked = checked;
            return o
        }
        case SET_CUSTOM_REPORT_ATTRIBUTES: {
            return payload.data
        }
        case SET_PREDEFINED_ATTRIBUTES: {
            var attributes = payload.attributes;
            var o$1 = clone(customReport);
            var map = o$1.map;
            var keys = Object.keys(map); 
            keys.forEach(function (k) { return map[k].checked = false; });
            attributes.forEach(function (a) { if (map[a]) { map[a].checked = true; } });
            return o$1 
        }
        default:
            return customReport
    }
}

function cw(cw, action) {
    if ( cw === void 0 ) cw = 1200;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_CW:
            return payload.cw
        default:
            return cw
    }
}

// help object: { id: content }
function help(help, action) {
    if ( help === void 0 ) help = {};

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_HELP: {
            var o = Object.assign({}, help);
            var id = payload.id;
            var html = payload.html;
            o[id] = html; 
            return o
        }    
        default:
            return help
    }
}

/*
    history object:
    { 
        map: {}, // map of history items
        ids: [], // list of item ids, corresponding to item.request.request_info.query_id
        id: null // current id
    }
*/
function history$2(history, action) {
    if ( history === void 0 ) history = { map: {}, ids: [], id: null };

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_HISTORY_ID:
            return Object.assign({}, history, payload)
        case SET_HISTORY:
            return payload.history
        case HISTORY_ADD:
            return add(history, payload)
        case HISTORY_REMOVE:
            return remove(history, payload.id)
        case HISTORY_REMOVE_ALL:
            return removeAll(history)           
        default:
            return history
    }
}

// msg - { type: c.MSG_NO_QUERY, value: c.MSGS.noQuery }
function msg(msg, action) {
    if ( msg === void 0 ) msg = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_MSG:
            return payload
        default:
            return msg
    }
}

function pager(pager, action) {
    if ( pager === void 0 ) pager = { rows: 25, start: 0, total_count: 0 };

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_PAGER:
            return calculate(pager, payload)
        default:
            return pager
    }
}

// query builder object
function queryBuilder(queryBuilder, action) {
    if ( queryBuilder === void 0 ) queryBuilder = null;

    var type = action.type;
    var payload = action.payload;
    var map, o;
    if (type !== QB_INIT) {
        o = clone(queryBuilder);
        if (type.indexOf('QB_TEXT') === 0) { map = o.services.text.map; }
    }

    switch (type) {
        case QB_CHEMICAL_SET_PROPS:
            Object.assign(o.services.chemical, payload);
            return o  
        case QB_INIT:
            return getQueryBuilder(payload)
        case QB_RESET_COUNTS:
            resetCounts(o);
            return o
        case QB_SEQUENCE_SET_PROPS:
            Object.assign(o.services.sequence, payload);
            return o
        case QB_SEQUENCE_MOTIF_SET_PROPS:
            Object.assign(o.services.seqmotif, payload);
            return o
        case QB_SERVICE_SET_OPEN:
            setOpen(o, payload);
            return o
        case QB_SET_PROPS: 
            if (o) { Object.assign(o, payload); } // set open, count
            return o
        case QB_STRUCTURE_SET_PROPS:
            Object.assign(o.services.structure, payload);
            return o  
        case QB_TEXT_ADD_GROUP:
            addGroup$1(map, payload.id);
            return o
        case QB_TEXT_ADD_INPUT:
            addInput$1(map, payload.rule);
            return o
        case QB_TEXT_ADD_RULE:
            addRule$1(map, payload.id);
            return o
        case QB_TEXT_DELETE_GROUP:
            deleteGroup$1(map, payload);
            return o
        case QB_TEXT_DELETE_INPUT:
            deleteInput$1(map, payload);
            return o
        case QB_TEXT_DELETE_RULE:
            deleteRule$1(map, payload);
            return o
        case QB_TEXT_SET_ATTRIBUTE:
            setAttribute$1(map, payload);
            return o
        case QB_TEXT_SET_GROUP_BOOL:
            setBooleanOperator$1(map, payload.id);
            return o
        case QB_TEXT_SET_NOT:
            setNot$1(map, payload.id);
            return o
        case QB_TEXT_SET_OPERATOR:
            setOperator$1(map, payload);
            return o
        case QB_TEXT_SET_RULE_PROPERTY: // set rule count, // linkedValue - deprecated
            setRuleProperty(map, payload);
            return o
        case QB_TEXT_SET_VALUE:
            setValue$1(map, payload);
            return o
        default:
            return queryBuilder
    }
}

function request(request, action) {
    if ( request === void 0 ) request = {};

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_REQUEST_PAGER:
            return setPager(request)
        case SET_REQUEST:
            return payload.request
        default:
            return request
    }
}

function requestHtml(requestHtml, action) {
    if ( requestHtml === void 0 ) requestHtml = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_REQUEST_HTML:
            return payload.html
        default:
            return requestHtml
    }
}

// the current dataResults
function dataResults(dataResults, action) {
    if ( dataResults === void 0 ) dataResults = null;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_DATA_RESULTS:
            return (payload === null) ? null : payload.dataResults
        default:
            return dataResults
    }
}

// the current search data, which includes result_set, drilldown
function searchResults(searchResults, action) {
    if ( searchResults === void 0 ) searchResults = null;

    var type = action.type;
    var payload = action.payload;
    var o = clone(searchResults);
    switch (type) {
        case CLEAR_REFINEMENT: {
            clearRefinement$1(o, payload.refinement);
            return o
        }
        case CLEAR_REFINEMENTS: {
            clearRefinements$1(o);
            return o
        }
        case SET_ALL_CHECKED: {
            setAllChecked(o, payload);
            return o
        }
        case SET_ITEM_CHECKED: {
            setItemChecked$1(o, payload);
            return o
        }
        case SET_MAX_GROUPS: {
            setMaxGroups(o, payload.refinement);
            return o
        }
        case SET_REFINEMENT: {
            setRefinement$1(o, payload);
            return o
        }
        case SET_SEARCH_RESULTS: 
            return (payload === null) ? null : getSearchResults(o, payload)
        default:
            return searchResults
    }
}

function returnType$1(returnType, action) {
    if ( returnType === void 0 ) returnType = 'entry';

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_RETURN_TYPE:
            return payload.returnType
        default:
            return returnType
    }
}

// sets the selectAll prop
function selectAll(selectAll, action) {
    if ( selectAll === void 0 ) selectAll = true;

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_SELECT_ALL:
            return payload.checked
        default:
            return selectAll
    }
}

function sort(sort, action) {
    if ( sort === void 0 ) sort = getDefault('request-sort');

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_SORT:
            return payload.sort
        default:
            return sort
    }
}

function tabularReport(tabularReport, action) {
    if ( tabularReport === void 0 ) tabularReport = getDefault('tabular-report');

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_REPORT_PROPS: 
            return Object.assign({}, tabularReport, payload)
        default:
            return tabularReport
    }
}

function trees(trees, action) {
    if ( trees === void 0 ) trees = {};

    var type = action.type;
    var payload = action.payload;
    var o = clone(trees);
    switch (type) {
        case SET_TREE: {
            console.log(file$1, type);
            var tree_id = payload.tree_id;
            var tree = payload.tree;
            o[tree_id] = tree;
            return o
        }
        default:
            return trees
    }
}

function urls(urls, action) {
    if ( urls === void 0 ) urls = { arr: [], index: 0, history_index: 0 };

    var type = action.type;
    var payload = action.payload;
    var o = clone(urls);
    switch (type) {
        case URLS_ADD: {
            var obj = payload.urlObj;
            obj.index = o.arr.length; 
            o.arr.push(obj);
            o.index = o.arr.length - 1;
            return o
        }
        case SET_URLS_PROPS: {
            Object.assign(o, payload);
            return o
        }
        default:
            return urls
    }
}

// TODO rename to type to SET_VIEW after 'view' is refactored
function views(views, action) {
    if ( views === void 0 ) views = getDefault('views');

    var type = action.type;
    var payload = action.payload;
    switch (type) {
        case SET_VIEW:
            return Object.assign({}, views, payload)
        default:
            return views
    }
}

var rootReducer = combineReducers(reducers);

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

/* 
    This file defines common inline styles using React JSON format, as opposed to CSS format.

    Notes:
        1.  lineHeight always has to be expressed in '28px' format, not as integer. 
            All other measurement properties can be expressed as ints - React will convert to px

        2.  Some value definitions use a <property_name>_08 format, where the last 2 digits indicate a decimal value:
                border_08 -> '1px solid rgba(0, 0, 0, 0.08)'
        
        3.  Wherever possible, styles are defined in the component in which they are used. This file is for style definitions 
            that are shared across components        
*/    

/* 
    common values:
        gray-scale rgba definitions use a color_<number> format, where <number> represents the 2 digit 
        decimal representation of the alpha value:
            _02 -> 0.02
            _10 -> 0.1  (0.10)

    see
        https://mobiforge.com/news-comment/720x1280-is-the-most-common-mobile-screen-resolution-in-q3-2016-new-report
        
         720×1280  is most used in 9 countries including India, Italy, and Spain
         750×1334  is most used in 5 countries including Sweden, UK and USA
         640×1136  is most used in 3 countries including Canada, France and Russia
        1080×1920  is most used in 2 countries including Germany and Malaysia
        1440×2560  is most used in South Africa
*/

var color_02 = 'rgba(0, 0, 0, 0.02)';
var color_03 = 'rgba(0, 0, 0, 0.03)';
var color_04 = 'rgba(0, 0, 0, 0.04)';
var color_06 = 'rgba(0, 0, 0, 0.06)';
var color_08 = 'rgba(0, 0, 0, 0.08)';
var color_10 = 'rgba(0, 0, 0, 0.10)';
var color_15 = 'rgba(0, 0, 0, 0.15)';
var color_20 = 'rgba(0, 0, 0, 0.20)';
var color_40 = 'rgba(0, 0, 0, 0.40)';
var color_60 = 'rgba(0, 0, 0, 0.60)';
var color_80 = 'rgba(0, 0, 0, 0.80)';
var color_link                 = '#337ab7';
var color_link_visited         = '#b77ab7';
var color_header_dark          = 'rgb(94, 105, 115)';
var color_header_dark_disabled = 'rgba(94, 105, 115, 0.66)';
var debugBg  = 'rgba(0, 0, 255, 0.1)';
var white    = 'rgb(255, 255, 255)';
var white_50 = 'rgba(255, 255, 255, 0.5)';
var border_04 = '1px solid ' + color_04;
var border_06 = '1px solid ' + color_06;
var border_08 = '1px solid ' + color_08;
var border_10 = '1px solid ' + color_10;
var border_15 = '1px solid ' + color_15;
var border_20 = '1px solid ' + color_20;
var border_40 = '1px solid ' + color_40;
var border_60 = '1px solid ' + color_60;
var radius = 4;
var borderRadius = radius;
var bottomRadius = { // apply radius to bottom only
          borderBottomLeftRadius: radius
        , borderBottomRightRadius: radius
    };
var disabled = { color: color_20, cursor: 'not-allowed' };
var lineHeight = '28px';
var padding = '2px 4px';
var topRadius = { // apply radius to top only
          borderTopLeftRadius: radius
        , borderTopRightRadius: radius
    };
var inline = { 
          display: 'inline-block'
        , verticalAlign: 'top'
        //, backgroundColor: debugBg 
    };
var lStyle = Object.assign({}, inline, { width: '50%' });
var rStyle = Object.assign({}, inline, { width: '50%', textAlign: 'right' });

// btns
var btn = { // apply to div
          border: border_20
        , color: color_80
        , cursor: 'pointer'
        , display: 'inline-block'
        , fontWeight: 'normal'
        , fontSize: 12
        , padding: '0 8px'
        , userSelect: 'none'
        , whiteSpace: 'nowrap'
        , lineHeight: '26.5px'
        , verticalAlign: 'top'
    };
var btnRt = Object.assign({}, btn, { borderRight: 'none' });
var btnDisabled = Object.assign({}, btn, disabled);
var btnRtDisabled = Object.assign({}, btnRt, disabled);
var btnSearch = Object.assign({}, btn, { // search icon
          border: 'none' 
        , backgroundColor: 'rgb(50, 88, 128)'
        , color: white
        , lineHeight: lineHeight
        , width: 28
        , textAlign: 'center'
    });
var btnSearchActive = Object.assign({}, btnSearch, { color: 'rgb(51, 255, 51)' });
var btnSm = Object.assign({}, btn, { padding: '0 5px', lineHeight: '21.5px' });
var btnSmRt = Object.assign({}, btnSm, {borderRight: 'none' });
var btnSmDisabled = Object.assign({}, btnSm, disabled);
var btnSmRtDisabled = Object.assign({}, btnSmRt, disabled);
var selectStyle = { border: border_20, height: 28, borderRadius: 0, backgroundColor: '#fff', width: 'auto' };

// misc
var msg$1 = {
          backgroundColor: color_03
        , border: border_10
        , marginBottom: 10
        , padding: 4
    };

// queryBuilder common styles for components  
var qb = {
      style: { 
          fontSize: 12
        , border: border_10
        , backgroundColor: color_02
    }
    , toggle: { paddingRight: 5 }
    , headerStyle: { padding: 5 }
    , label: {
          whiteSpace: 'nowrap'
        , lineHeight: lineHeight
        , marginRight: 5
    }
    , service: {
          marginRight: 5
        , marginBottom: 5
        , position: 'relative'
    }
    , serviceTab: {
          padding: '4px 4px 2px'
        , backgroundColor: 'rgb(244, 244, 244)'
        , borderTop: border_10
        , borderLeft: border_10
        , borderRight: border_10
        //, borderTopRightRadius: 14
        , display: 'inline-block'
        , width: 180
        , marginLeft: 50
    }
    , serviceTable: { width: '100%' }
    , serviceTableBody: { width: '100%' }
    , serviceLabel: { paddingRight: 5 }
    , serviceOperator: { 
          width: 50
        , textAlign: 'right'
        , fontWeight: 'bold'
        , marginTop: 4
        , paddingRight: 5
        , lineHeight: lineHeight }
    , serviceBody: {
          padding: 5
        , backgroundColor: 'rgb(244, 244, 244)'
        , border: border_10
        , marginTop: -1
    }
    , logicalOperator: {
          textAlign: 'right'
        , width: 75
        , lineHeight: lineHeight
        , fontWeight: 'bold'
        , userSelect: 'none'
        , paddingRight: 5
    }
    , footerStyle: { 
          paddingLeft: 5
        , paddingRight: 5
        , paddingBottom: 3
        , textAlign: 'right'
    }
    , inputTextStyle: { // applied directly to input elements
          height: 28
        , border: border_20
    }
    , textareaStyle: {
        width: '100%'
      , height: '38px' // default to 3 rows
      , resize: 'vertical'
      , border: border_20
      , marginBottom: 2
      //, display: 'inline-block'
    }

};

var qbInlineDivs = [
      qb.inputTextStyle
    , qb.label
    , qb.logicalOperator
    , qb.serviceLabel
    , qb.toggle
];
// set common props for qb inline divs
qbInlineDivs.forEach(function (d) { Object.assign(d, inline); });

// shared by history and mypdb
var queries = {
    tbl: {
        fontSize: 12
    },

    // history
    th: {
        padding: 4,
        fontWeight: 'bold'
    },
    thNowrap: {
        padding: 4,
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    },
    thDeleteAll: {
        padding: '6px 4px 2px'
    },
    // END history
    
    // mypdb 
    thLine: {
        padding: '0 4px',
        fontWeight: 'bold',
        lineHeight: lineHeight
    },
    thLineNowrap: {
        padding: '0 4px',
        fontWeight: 'bold',
        lineHeight: lineHeight,
        whiteSpace: 'nowrap'
    },
    thLineDeleteAll: {
        paddingBottom: 2
    },
    // END mypdb
    
    trEven: {
        backgroundColor: color_02,
        borderTop: border_10
    }, 
    trOdd: {
        backgroundColor: white,
        borderTop: border_10
    },
    trSelected: {
        color: '#fff', 
        backgroundColor: 'rgba(51, 122, 183, 0.75)', //#337ab7', 
        borderTop: border_10
    },
    td: {
        padding: 4
    },
    tdNowrap: {
        padding: 4,
        whiteSpace: 'nowrap'
    },
    tdCenter: {
        padding: 4,
        textAlign: 'center'
    },
    tdRequest: {
        padding: 4,
        width: '100%',
        cursor: 'pointer',
        //wordWrap: 'break-word', 
        //wordBreak: 'break-all'
    },
    tdRight: {
        padding: 4,
        textAlign: 'right'
    },
    tdDateTime: {
        padding: 4,
        whiteSpace: 'nowrap'
    }
};

/* misc shared components */
var iconCalendar = React__default.createElement( 'span', { className: 'glyphicon-calendar' });
var iconCheck = React__default.createElement( 'span', { className: 'glyphicon glyphicon-ok' });
var iconChevronRight = React__default.createElement( 'span', { className: 'glyphicon glyphicon-chevron-right' });
var iconDownload = React__default.createElement( 'span', { className: 'glyphicon glyphicon-download-alt' });
var iconMinus = React__default.createElement( 'span', { className: 'glyphicon glyphicon-minus' });
var iconNewWindow = React__default.createElement( 'span', { className: 'glyphicon glyphicon-new-window' });
var iconPlus = React__default.createElement( 'span', { className: 'glyphicon glyphicon-plus' });
var iconRemove = React__default.createElement( 'span', { className: 'glyphicon glyphicon-remove' });
var iconSearch = React__default.createElement( 'span', { className: 'glyphicon glyphicon-search' });
var iconStop = React__default.createElement( 'span', { className: 'glyphicon glyphicon-stop' });
var iconUp = React__default.createElement( 'span', { className: 'glyphicon glyphicon-triangle-top' });
var iconDown = React__default.createElement( 'span', { className: 'glyphicon glyphicon-triangle-bottom' });
var iconLeft = React__default.createElement( 'span', { className: 'glyphicon glyphicon-triangle-left' });
var iconRight = React__default.createElement( 'span', { className: 'glyphicon glyphicon-triangle-right' });
var iconCloud = React__default.createElement( 'span', { className: 'fa fa-cloud-upload' });
var iconEdit = React__default.createElement( 'span', { className: 'fa fa-edit' });
var iconSave = React__default.createElement( 'span', { className: 'fa fa-save' });
var iconTimes = React__default.createElement( 'span', { className: 'fa fa-times' });

/*
    render a horizontal and/or vertical spacer div
        format: <s.Space w={10} h={20} />
*/
var Space = (function (Component$$1) {
    function Space () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Space.__proto__ = Component$$1;
    Space.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Space.prototype.constructor = Space;

    Space.prototype.render = function render$$1 () {
        var ref = this.props;
        var w = ref.w;
        var h = ref.h;
        var width, height, display;
        if (w) {
            width = w;
            display = 'inline-block';
        }    
        if (h) { height = h; }
        return React__default.createElement( 'div', { style: { width: width, height: height, display: display } })
    };

    return Space;
}(React.Component));

/*
    render a list menu pipe delimiter
        format: <s.Space w={10} h={20} />
*/
var Pipe = (function (Component$$1) {
    function Pipe () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Pipe.__proto__ = Component$$1;
    Pipe.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Pipe.prototype.constructor = Pipe;

    Pipe.prototype.render = function render$$1 () {
        return React__default.createElement( 'div', { style: { width: 10, display: 'inline-block', textAlign: 'center', color: color_20 } }, "|")
    };

    return Pipe;
}(React.Component));

/*
    render a drop-down
    note: - the options array may contain either numbers, strings, or { key, value } pair objects
          - if it contains numbers or strings, then the same value is used for both 'key' and 'value'
*/
var Select = (function (Component$$1) {
    function Select () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Select.__proto__ = Component$$1;
    Select.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Select.prototype.constructor = Select;

    Select.prototype.render = function render$$1 () {
        var ref = this.props;
        var border = ref.border;
        var height = ref.height;
        var header = ref.header;
        var id = ref.id;
        var onChange = ref.onChange;
        var options = ref.options;
        var value = ref.value;

        border = (border) ? border : 'none';
        height = (height) ? height : 28;

        var selectStyle$$1 = { border: border, height: height, borderRadius: 0, backgroundColor: '#fff', width: 'auto' };

        return (
            React__default.createElement( 'select', { onChange: onChange, value: value, id: id, style: selectStyle$$1 },
                header && React__default.createElement( 'option', { value: '' }, header),
                options.map(function (option) {
                    var optionType = typeof option;
                    var key, value;
                    if (optionType === 'string' || optionType === 'number') { // metadata enum
                        key = option;
                        value = (option.length > OPTION_LIMIT) ? option.substring(0, OPTION_LIMIT) + '...' : option;
                    } else { // obj
                        key = option.key;
                        value = option.value;
                    }
                    return React__default.createElement( 'option', { key: key, value: key }, value)
                })
            )
        )
    };

    return Select;
}(React.Component));

// not used
// - custom calendar icon 
//calendarIcon = <table className='calendar-icon'><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

/*
// css definitions
const
    boolBtn = {
        display: 'inline-block',
        border: st.border_20,
        cursor: 'pointer',
        height: 28,
        width: 30
    }
    , bool = {
        backgroundColor: st.color_05,
        color: '#888',
        fontSize: 10,
        //padding: '0 2px',
        lineHeight: '13px',
        textAlign: 'center'
    }
    , boolSelected = Object.assign({}, bool, {backgroundColor: st.white_50, color: '#333'})    
*/

/*
    Render the asc/desc chevrons in react-table headers, which when clicked will sort the column.
        this.props:
            handler
            sort_field - the field to sort by
            sort - the existing sort
*/
/*
export class Sorter  extends Component {
    render() {
        const { handler, sort_field, sort } = this.props
        let asc = 'sorter-asc'
        let desc = 'sorter-desc'
        if (sort_field === sort.field) { // compare this field to the current sort field
            if (sort.asc) asc += ' selected'
            else desc += ' selected'
        }
        return (
            <div className='sorter-container'>
                <div className={asc} onClick={() => handler(sort_field, 'asc')} />
                <div className={desc} onClick={() => handler(sort_field, 'desc')} />
            </div>
        )
    }
}
*/

/*
    Render the asc/desc chevrons in react-table headers // TODO API refactoring - direction is deprecated
*/
/*
// not in use
export class SortIcon  extends Component {
    render() {
        const { direction } = this.props
        let asc = 'sorter-asc'
        let desc = 'sorter-desc'
        if (direction === 'asc') asc += ' selected'
        if (direction === 'desc') desc += ' selected'
        return (
            <div className='sorter-container'>
                <div className={asc} />
                <div className={desc} />
            </div>
        )
    }
}

export class AndOr extends Component {
    render() {
        return (
            <div style={boolBtn}>
                <div style={boolSelected}>AND</div>
                <div style={bool}>OR</div>
            </div>
        )
    }
}
*/

/* for development and testing - this component only displays in local env */

// TODO API refactoring
var EditRequest = (function (Component$$1) {
    function EditRequest(props) {
        Component$$1.call(this, props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        //console.log(file, this.props.request, 'constructor')

        var str = getStr(this.props.request);
        this.state = { str: str };
    }

    if ( Component$$1 ) EditRequest.__proto__ = Component$$1;
    EditRequest.prototype = Object.create( Component$$1 && Component$$1.prototype );
    EditRequest.prototype.constructor = EditRequest;

    EditRequest.prototype.componentDidMount = function componentDidMount () {
        //console.log(file, this.props.request, 'componentDidMount')
        var str = getStr(this.props.request);
        this.setState({ str: str });
    };

    EditRequest.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
        //console.log(file, this.props.request, 'componentDidUpdate')
        //equality check is required in order to avoid an infinite loop - see https://reactjs.org/docs/react-component.html#componentdidupdate
        if (getStr(this.props.request) !== getStr(prevProps.request)) {
            var str = getStr(this.props.request);
            this.setState({ str: str });
        }
    };

    EditRequest.prototype.handleOnChange = function handleOnChange (e) {
        var str = e.target.value;
        this.setState({ str: str });
    };

    EditRequest.prototype.handleSearch = function handleSearch () {
        this.props.editSearch(this.state.str);
    };

    EditRequest.prototype.render = function render$$1 () {
        var str = this.state.str;
        var numTextareaRows = (str) ? str.split('\n').length + 2 : 2;

        if (str) {
            return (
                React__default.createElement( 'div', null,
                    React__default.createElement( 'div', { id: 'edit-query' },
                        React__default.createElement( 'div', null, "Edit Request" ),
                        React__default.createElement( 'textarea', { rows: numTextareaRows, id: 'edit-query-text', value: str, onChange: this.handleOnChange }),

                        React__default.createElement( 'a', { className: BTN_SM, onClick: this.handleSearch }, "Search")
                    ),
                    React__default.createElement( Space, { h: 5 })
                )
            )
        }
        return null
    };

    return EditRequest;
}(React.Component));

function getStr(request) {
    return (request) ? JSON.stringify(request, null, 2) : null
}

var EditRequest$1 = connect(mapStateToProps, mapDispatchAllToProps)(EditRequest);

/* view state - for development and testing - this will only display on local instance */

var State = (function (Component$$1) {
    function State () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) State.__proto__ = Component$$1;
    State.prototype = Object.create( Component$$1 && Component$$1.prototype );
    State.prototype.constructor = State;

    State.prototype.render = function render$$1 () {
        var format = this.props.format;
        //console.log(file, 'render', format)

        var excludes = ['treeData']; // exclude these props from the state representation because they are too large
        
        return (
            React__default.createElement( 'div', null,
                format === 'html'
                    ? React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: objToHtml(this.props, 0, excludes) } })
                    : React__default.createElement( 'pre', { id: 'state' }, toJson$1(this.props, excludes))
            )
        )
    };

    return State;
}(React.Component));

var State$1 = connect(mapStateToProps, mapDispatchNoneToProps)(State);

function toJson$1(props, excludes) {
    var o = {};
    for (var prop in props) {
        if (!(typeof props[prop] === 'function' || excludes.includes(prop))) {
            o[prop] = props[prop];
        }
    }
    return JSON.stringify(o, null, 2)
}

/* for development and testing - this component only displays on local instance or on dev by setting 'dev' parameter */

var DevTools = (function (Component$$1) {
    function DevTools(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [ 
            'setFormat', 
            'setView'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        this.state = { format: 'html' };
    }

    if ( Component$$1 ) DevTools.__proto__ = Component$$1;
    DevTools.prototype = Object.create( Component$$1 && Component$$1.prototype );
    DevTools.prototype.constructor = DevTools;

    DevTools.prototype.setFormat = function setFormat (e) {
        this.setState({ format: e.target.value });
    };

    DevTools.prototype.setView = function setView (id) {
        var dev = (this.props.views.dev === id) ? null : id;    
        this.props.dispatchAction(SET_VIEW, { dev: dev });
    };

    DevTools.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var booleans = ref.booleans;
        var containerWidth = ref.containerWidth;
        var cw = ref.cw;
        var queryBuilder = ref.queryBuilder;
        var request = ref.request;
        var dataResults = ref.dataResults;
        var urls = ref.urls;
        var views = ref.views;
        var format = this.state.format;
        var infoStyle = { padding: 2, display: 'inline-block', border: '1px solid #ddd' };
        var showUrls = (ENV.referer === 'https://127.0.0.1:8443');
        var showViews = showUrls;
        var showBooleans = showUrls;
        var dev = views.dev;

        return (
            React__default.createElement( 'div', { id: 'dev-tools' },
                React__default.createElement( 'div', { className: 'text-right' }, "Dev Tools: ", React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'a', { href: '/search/tests' }, "tests"),
                    React__default.createElement( Space, { w: 5 }), "Schema: ", React__default.createElement( 'a', { href: 'http://search-dev.rcsb.org/rcsbsearch/v1/metadata/schema', target: '_blank', rel: 'noopener noreferrer' }, "dev"),
                    React__default.createElement( Pipe, null ),
                    React__default.createElement( 'a', { href: 'http://search-staging.rcsb.org/rcsbsearch/v1/metadata/schema', target: '_blank', rel: 'noopener noreferrer' }, "staging"), React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( Pipe, null ),
                    React__default.createElement( 'a', { href: 'http://search.rcsb.org/rcsbsearch/v1/metadata/schema', target: '_blank', rel: 'noopener noreferrer' }, "prod"),
                    React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'a', { className: BTN_XS, onClick: function () { return this$1.setView('editRequest'); } }, "editRequest"),
                    React__default.createElement( Space, { w: 5 }), "Objects: ", React__default.createElement( 'div', { className: 'btn-group' },
                        React__default.createElement( 'a', { className: BTN_XS, onClick: function () { return this$1.setView('qb'); } }, "qb"),
                        React__default.createElement( 'a', { className: BTN_XS, onClick: function () { return this$1.setView('request'); } }, "request"),
                        React__default.createElement( 'a', { className: BTN_XS, onClick: function () { return this$1.setView('dataResults'); } }, "dataResults"),
                        React__default.createElement( 'a', { className: BTN_XS, onClick: function () { return this$1.setView('state'); } }, "state")
                    ),
                    React__default.createElement( Space, { w: 5 }), "Data: ", React__default.createElement( 'div', { className: 'btn-group' },
                        React__default.createElement( 'a', { className: BTN_XS, href: '/search/dev/schemaMetadata/' + format, target: '_blank', rel: 'noopener noreferrer' }, "schemaMetadata"),
                        React__default.createElement( 'a', { className: BTN_XS, href: '/search/dev/selectorItems/' + format, target: '_blank', rel: 'noopener noreferrer' }, "selectorItems"),
                        React__default.createElement( 'a', { className: BTN_XS, href: '/search/dev/attributeNames/' + format, target: '_blank', rel: 'noopener noreferrer' }, "attributeNames")
                    ),
                    React__default.createElement( Space, { w: 5 }), "Format: ", React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'input', { type: 'radio', name: 'format', value: 'text', onClick: this.setFormat, checked: this.state.format === 'text' }), " text ", React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'input', { type: 'radio', name: 'format', value: 'html', onClick: this.setFormat, checked: this.state.format === 'html' }), " html ", React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'div', { style: infoStyle }, cw),
                    React__default.createElement( Space, { w: 2 }),
                    React__default.createElement( 'div', { style: infoStyle }, containerWidth)
                ),
                React__default.createElement( Space, { h: 5 }),

                dev === 'editRequest' && React__default.createElement( EditRequest$1, null ),
                dev === 'qb' && queryBuilder && React__default.createElement( 'pre', null, toJson(queryBuilder) ),
                dev === 'request' && request && React__default.createElement( 'pre', null, toJson(request) ),
                dev === 'dataResults' && format === 'html' && React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: objToHtml(dataResults, 0, []) } }),
                dev === 'dataResults' && format === 'text' && React__default.createElement( 'pre', null, toJson(dataResults) ),
                dev === 'state' && React__default.createElement( State$1, { format: format }),
                React__default.createElement( Space, { h: 5 }),
                React__default.createElement( 'table', null,
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', null,
                            showUrls && 
                                React__default.createElement( 'table', { className: 'generic-table' },
                                    React__default.createElement( 'tr', null, React__default.createElement( 'th', { colSpan: '6' }, "urls") ),
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'th', null, "i" ),
                                        React__default.createElement( 'th', null, "value" ),
                                        React__default.createElement( 'th', null, "type" ),
                                        React__default.createElement( 'th', null, "view" ),
                                        React__default.createElement( 'th', null, "id" ),
                                        React__default.createElement( 'th', null, "src" )
                                    ),
                                    urls.arr.map(function (u, i) {
                                            return (
                                                React__default.createElement( 'tr', { key: 'id' + i },
                                                    React__default.createElement( 'td', null, u.index ),
                                                    React__default.createElement( 'td', { className: 'break' }, u.value),
                                                    React__default.createElement( 'td', null, u.type ),
                                                    React__default.createElement( 'td', null, u.view ),
                                                    React__default.createElement( 'td', null, u.id ),
                                                    React__default.createElement( 'td', null, u.src )
                                                )
                                            )    
                                        }),
                                    React__default.createElement( 'tr', null, React__default.createElement( 'td', { colSpan: '2' }, "index"), React__default.createElement( 'td', null, urls.index ) ),
                                    React__default.createElement( 'tr', null, React__default.createElement( 'td', { colSpan: '2' }, "history_index"), React__default.createElement( 'td', null, urls.history_index ) )
                                )
                        ),
                        React__default.createElement( 'td', null, " " ),
                        React__default.createElement( 'td', null,
                            showViews && 
                                React__default.createElement( 'table', { className: 'generic-table' },
                                    React__default.createElement( 'tr', null, React__default.createElement( 'th', { colSpan: '2' }, "views") ),
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'th', null, "view" ),
                                        React__default.createElement( 'th', null, "id" )
                                    ),
                                    Object.keys(views).map(function (v) {
                                            return (
                                                React__default.createElement( 'tr', { key: v },
                                                    React__default.createElement( 'td', null, v ),
                                                    React__default.createElement( 'td', null, views[v] )
                                                )
                                            )    
                                        })
                                )
                        ),
                        React__default.createElement( 'td', null, " " ),
                        React__default.createElement( 'td', null,
                            showBooleans && 
                                React__default.createElement( 'table', { className: 'generic-table' },
                                    React__default.createElement( 'tr', null, React__default.createElement( 'th', { colSpan: '2' }, "booleans") ),
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'th', null, "key" ),
                                        React__default.createElement( 'th', null, "value" )
                                    ),
                                    Object.keys(booleans).map(function (b) {
                                            return (
                                                React__default.createElement( 'tr', { key: b },
                                                    React__default.createElement( 'td', null, b ),
                                                    React__default.createElement( 'td', null, booleans[b]?'true':'false' )
                                                )
                                            )    
                                        })
                                )
                        )
                    )
                ),                 
                React__default.createElement( Space, { h: 5 })
            )
        )
    };

    return DevTools;
}(React.Component));

var DevTools$1 = connect(mapStateToProps, mapDispatchAllToProps)(DevTools);

//const file = 'components/HelpMenu'

var tbl = { width: '100%' };
var tr = { borderBottom: border_04 };
var tdName = { textAlign: 'right', padding: 10 };
var tdNameSelected = Object.assign({}, tdName, { color: color_60 });
var chevron = { fontSize: 10, color: color_60, padding: '12px 0 0 10px' };
var chevronCurrent = Object.assign({}, chevron, { color: color_06 });

var HelpMenu = (function (Component$$1) {
    function HelpMenu () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) HelpMenu.__proto__ = Component$$1;
    HelpMenu.prototype = Object.create( Component$$1 && Component$$1.prototype );
    HelpMenu.prototype.constructor = HelpMenu;

    HelpMenu.prototype.render = function render$$1 () {
        var ref = this.props;
        var currentId = ref.currentId;
        var getHtml$$1 = ref.getHtml;

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( 'table', { style: tbl },
                    HELP_PAGES.map(function (page) {
                            var id = page.id;
                            var name = page.name;
                            var type = page.type;
                            var chevronStyle = (currentId === id) ? chevronCurrent : chevron;
                            return (
                                React__default.createElement( 'tr', { style: tr, key: id, className: 'search-help-menu' },
                                    currentId === id
                                        ? React__default.createElement( 'td', { style: tdNameSelected }, name)
                                        : React__default.createElement( 'td', { style: tdName }, React__default.createElement( 'a', { className: 'no-underline', onClick: function () { return getHtml$$1(id, type); } }, name)),
                                    
                                    React__default.createElement( 'td', { style: chevronStyle }, iconChevronRight)
                                )
                            )   
                        })
                )
            )
        )
    };

    return HelpMenu;
}(React.Component));

// TODO move definitions to search.css where possible
var searchAttributesStyle = { marginTop: 15, fontSize: '12px' };
var headerStyle = { paddingLeft: 5, borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc', fontWeight: 'bold', backgroundColor: color_10, lineHeight: '28px' };
var itemLastStyle = { padding: '2px 2px 2px 20px', backgroundColor: color_03 };
var itemStyle = Object.assign({}, itemLastStyle, { borderBottom: '1px solid #ddd' });
var nameStyle = Object.assign({}, inline, { width: '75%', lineHeight: '23px' });
var detailsBtnStyle = Object.assign({}, inline, { textAlign: 'right',  width: '25%'} );
var detailsStyle = { paddingLeft: 40 };
var detailsOpenStyle = { paddingLeft: 40, borderBottom: '1px solid #ddd' };
var showAllStyle = { textAlign:'right', marginBottom: 5 };
var arrowSpan = { marginTop: 6, marginLeft: 6 };   

var SearchAttributes = (function (Component$$1) {
    function SearchAttributes(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'setDetails'
            , 'setAll'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        this.state = { items: clone(selectorItems), all: false };
    }

    if ( Component$$1 ) SearchAttributes.__proto__ = Component$$1;
    SearchAttributes.prototype = Object.create( Component$$1 && Component$$1.prototype );
    SearchAttributes.prototype.constructor = SearchAttributes;

    SearchAttributes.prototype.setDetails = function setDetails (i) {
        var items = clone(this.state.items);
        items[i].open = !items[i].open;
        this.setState({ items: items });
    };

    SearchAttributes.prototype.setAll = function setAll () {
        var all = !this.state.all;
        this.setState({ all: all });
    };

    SearchAttributes.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.state;
        var items = ref.items;
        var all = ref.all;

        var searchAttributes = items.map(function (item, i) {
            var details;

            var itemType = item.type;

            if (itemType === 'header') {
                return React__default.createElement( 'div', { style: headerStyle }, item.name)
            } else {
                var open = item.open;
                var units = item.units; 
                if (open || all) {
                    var fo = metadata[item.attribute]; // field object from metadata
                    if (fo) {
                        var attribute = fo.attribute;
                        var description = fo.description;
                        var type = fo.type;
                        var min = fo.min;
                        var max = fo.max;
                        var enumeration = fo.enumeration;
                        var examples = fo.examples;
                        var is_iterable = fo.is_iterable;
                        var minVal = (min === 0) ? '' + min : min;
    
                        var detailsBody = React__default.createElement( 'tbody', null,
                                                React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Attribute" ), React__default.createElement( 'td', null, attribute ) ),
                                                React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Description" ), React__default.createElement( 'td', null, description ) ),
                                                React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Data Type" ), React__default.createElement( 'td', null, type ) ),
                                                is_iterable && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Iterable" ), React__default.createElement( 'td', null, "yes" ) )  
                                            );
                        
                        if (itemType === 'item') {
                            details =   React__default.createElement( 'table', { className: 'help-attribute-details' },
                                            detailsBody,
                                            minVal && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Minimum Value" ), React__default.createElement( 'td', null, minVal ) ),
                                            max && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Maximum Value" ), React__default.createElement( 'td', null, max ) ),
                                            units && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Units" ), React__default.createElement( 'td', null, UNITS[units] ) ),    
                                            enumeration && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Enumeration" ), React__default.createElement( 'td', null, enumeration.join(', ') ) ),
                                            !enumeration && examples && React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Examples" ), React__default.createElement( 'td', null,
                                                examples.map(function (example, i) {
                                                    return React__default.createElement( 'div', { key: 'e' + i, className: 'help-attribute-details-example' }, example)
                                                })
                                                ) )
                                        );
                        } else if (itemType === 'item-nested') {
                            var value = item.nestedAttributeValue;
                            var context = fo.nestedAttribute.contexts[value];
                            var name = context.name;
                            var detail = context.detail;
                            var examples$1 = context.examples;
                            value = checkForDelta(value); // TODO fix in schema
                            details =   React__default.createElement( 'table', { className: 'help-attribute-details' },
                                            detailsBody,
                                            React__default.createElement( 'tr', null, React__default.createElement( 'td', null, "Nested Attribute" ), React__default.createElement( 'td', null, fo.nestedAttribute.attribute ) ),
                                            React__default.createElement( 'tr', null, React__default.createElement( 'td', { className: 'nested' }, "Value"), React__default.createElement( 'td', null, value ) ),
                                            name && name !== value && React__default.createElement( 'tr', null, React__default.createElement( 'td', { className: 'nested' }, "Name"), React__default.createElement( 'td', null, name ) ),
                                            detail && detail !== value && React__default.createElement( 'tr', null, React__default.createElement( 'td', { className: 'nested' }, "Description"), React__default.createElement( 'td', null, detail ) ),
                                            units && React__default.createElement( 'tr', null, React__default.createElement( 'td', { className: 'nested' }, "Units"), React__default.createElement( 'td', null, UNITS[units] ) ),
                                            examples$1 && React__default.createElement( 'tr', null, React__default.createElement( 'td', { className: 'nested' }, "Examples"), React__default.createElement( 'td', null,
                                                examples$1.map(function (example, i) {
                                                    return React__default.createElement( 'div', { key: 'e' + i, className: 'help-attribute-details-example' }, example)
                                                })
                                                ) )
                                        );
                        }
                    }
                }    
                
                var isNextItemHeader = (i < items.length - 1 && items[i + 1].type === 'header');
                var thisItemStyle = (isNextItemHeader && !(open || all)) ? itemLastStyle : itemStyle;
                var thisDetailsStyle = ((open || all) && !isNextItemHeader) ? detailsOpenStyle : detailsStyle;
    
                var detailsBtn;
                if (!all) {
                    // single up/down arrow
                    var arrowClass = 'glyphicon glyphicon-triangle-' + ((open || all) ? 'top' : 'bottom');
                    var arrow = React__default.createElement( 'span', { style: arrowSpan, className: arrowClass });
                    detailsBtn = React__default.createElement( 'div', { style: detailsBtnStyle }, React__default.createElement( 'div', { style: btnSm, className: 'qb-btn', onClick: function () { return this$1.setDetails(i); } }, "Details ", arrow));
                }
    
                var asterisk = (item.type === 'item-nested') ? '*' : null;
    
                return  React__default.createElement( 'div', null,
                            React__default.createElement( 'div', { style: thisItemStyle },
                                React__default.createElement( 'div', { style: nameStyle }, item.name, " ", asterisk),
                                detailsBtn
                            ),
                            React__default.createElement( 'div', { style: thisDetailsStyle }, details)
                        )    
            }     


        });

        return (
            React__default.createElement( 'div', { style: searchAttributesStyle },
                React__default.createElement( 'div', { style: showAllStyle }, React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: this.setAll }, "Show all details")),
                searchAttributes
            )
        )
    };

    return SearchAttributes;
}(React.Component));

var SearchAttributes$1 = connect(mapStateToProps, mapDispatchAllToProps)(SearchAttributes);

function checkForDelta(value) {
    if (value.indexOf('&Delta;') !== -1) { return value.replace('&Delta;', 'Δ') }
    return value
}

// NOT USED
    // , dblArrowOuter = { position: 'relative', display: 'inline-block', height: 28, width: 15, backgroundColor: st.white } //
    // , dblArrowUpper = { 
    //       position: 'absolute'
    //     , top: 7
    //     , left: 3 }
    // , dblArrowLower = { 
    //       position: 'absolute'
    //     , top: 12
    //     , left: 3 }
        // double up/down arrow
        // const dblArrowClass = 'glyphicon glyphicon-triangle-' + (all ? 'top' : 'bottom')
        // const dblArrow =    <div style={dblArrowOuter}>
        //                          <span style={dblArrowUpper} className={dblArrowClass} />
        //                          <span style={dblArrowLower} className={dblArrowClass} />
        //                      </div>
        // {dblArrow}

var file$28 = 'components/Help';
var PATH = '/search/help/';
var view = 'help';

var colStyle = { borderLeft: border_08 };
var contentStyle = { marginTop: 15 };

var Help = (function (Component$$1) {
    function Help(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'getHtml'
            , 'getHtmlCallback'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) Help.__proto__ = Component$$1;
    Help.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Help.prototype.constructor = Help;

    Help.prototype.componentDidMount = function componentDidMount () {
        var ref = this.props;
        var views = ref.views;
        var id = (views.help) ? views.help : HELP_PAGES[0].id;
        this.getHtml(id);
    };

    Help.prototype.getHtml = function getHtml$$1 (id) {
        console.log(file$28 + ': getHtml: id=' + id);
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var help = ref.help;
        var pushState = ref.pushState;
        
        pushState({ path: PATH + id, src: file$28 + ': getHtml', view: view, id: id });
        dispatchAction(SET_VIEW, { help: id });

        if (!help[id]) {
            var url = HELP_URL + '/' + id;
            getHtml$1(url, this.getHtmlCallback);
        }
    };

    Help.prototype.getHtmlCallback = function getHtmlCallback (html, err) {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var views = ref.views;
        var id = views.help;
        console.log(file$28 + ': getHtmlCallback: id=' + id);
        dispatchAction(SET_HELP, { id: id, html: html });
    };

    Help.prototype.render = function render$$1 () {
        var ref = this.props;
        var help = ref.help;
        var views = ref.views;
        var id = views.help;
        console.log(file$28 + ': render: id=' + id);
        
        return (
            React__default.createElement( 'div', { className: 'row', id: 'search-help-content' },
                React__default.createElement( 'div', { className: 'col-md-3 col-xs-12' },
                    React__default.createElement( HelpMenu, { currentId: id, getHtml: this.getHtml })
                ),
                React__default.createElement( 'div', { className: 'col-md-9 col-xs-12', style: colStyle },
                    React__default.createElement( 'div', { className: 'help-page', style: contentStyle },
                        React__default.createElement( 'h3', null, MAP[id] ),
                        React__default.createElement( 'br', null ),
                        id && help[id] &&
                            React__default.createElement( 'div', null,
                                React__default.createElement( 'div', { style: contentStyle, dangerouslySetInnerHTML: { __html: help[id] } }),
                                id === 'attribute-search' && React__default.createElement( SearchAttributes$1, null )
                            )
                        
                    )    
                )
            )
        )
    };

    return Help;
}(React.Component));

var Help$1 = connect(mapStateToProps, mapDispatchAllToProps)(Help);

// styles
var LEFT = -3000;
var indent = 20;
var solidBorder = '5px solid ' + color_header_dark;
var transBorder = '5px solid rgba(0, 0, 0, 0)';
var tooltip = { // icon
          fontSize: 14
        , fontWeight: 'normal'
        , color: color_header_dark
        , position: 'relative'
        , display: 'inline-block'
        //, backgroundColor: testColor
        , lineHeight: '14px'
        , whiteSpace: 'normal'
    };


var Tooltip = (function (Component$$1) {
    function Tooltip(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'mouseOut'
            , 'mouseOver'
            , 'init'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
        
        var marginTop = props.marginTop;
        var marginLeft = props.marginLeft;
        var marginRight = props.marginRight;
        var pos = props.pos; // all params are optional - if 'pos' is not passed, default will be used

        this.el;
        this.left;
        this.wrapper = { 
              position: 'absolute' 
            , width: 240 
            , left: LEFT
            , zIndex: 1000000
            //, backgroundColor: testColor
        };
        this.contentDiv = {
              backgroundColor: color_header_dark
            , color: '#fff' 
            , borderRadius: 4 
            , padding: '4px 8px' 
            , fontSize: 12
            , zIndex: 1000000
        }; 
        this.arrowDiv = {
              textAlign: 'center'
            , height: 10
            , zIndex: 1000000
            //, backgroundColor: testColor
        };
        this.arrow = {
              borderTop: solidBorder
            , borderRight: transBorder
            , borderBottom: transBorder
            , borderLeft: transBorder
            , display: 'inline-block'
            , verticalAlign: 'top'
        };
        this.initialized = false;

        if (pos === 'above-right') { // tooltip is above and to the right of the icon - TODO rename 'above-right'
            this.arrowDiv.textAlign = 'left';
            this.arrowDiv.paddingLeft = indent;
        } else if (pos === 'right-below') { // tooltip is to the right and below the icon
            // mofify defaults
            Object.assign(this.wrapper, { width: 250 });
            Object.assign(this.contentDiv, { width: 240, display: 'inline-block' });
            Object.assign(this.arrowDiv, { width: 10, display: 'inline-block', verticalAlign: 'top', paddingTop: indent });
            Object.assign(this.arrow, { borderTop: transBorder, borderRight: solidBorder });
        }
        
        this.iconStyle = { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight };
    }

    if ( Component$$1 ) Tooltip.__proto__ = Component$$1;
    Tooltip.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Tooltip.prototype.constructor = Tooltip;

    Tooltip.prototype.componentDidMount = function componentDidMount () {
        if (!this.initialized) { setTimeout(this.init, 500); }
    };

    Tooltip.prototype.mouseOut = function mouseOut () {
        if (this.el) { this.el.style.left = LEFT + 'px'; }
    };

    Tooltip.prototype.mouseOver = function mouseOver () {
        if (this.el) { this.el.style.left = this.left; }
    };

    Tooltip.prototype.init = function init$$1 () {
        var ref = this.props;
        var name = ref.name;
        var pos = ref.pos;

        this.el = document.getElementById(name + 'Tooltip');
        var icon = document.getElementById(name + 'Icon');

        if (this.el && icon) {
            if (pos === 'above-right') {
                this.left = '-' + (indent - 1) + 'px';
                this.el.style.top =  '-' + this.el.offsetHeight + 'px';
            } else if (pos === 'right-below') {
                this.left = icon.offsetWidth + 'px';
                this.el.style.top =  '-' + (indent - icon.offsetHeight / 2 + 1) + 'px';
            } else {
                this.left = (icon.offsetWidth - this.el.offsetWidth) / 2 + 'px';
                this.el.style.top =  '-' + this.el.offsetHeight + 'px';
            }
            this.initialized = true;
        }
    };

    Tooltip.prototype.render = function render$$1 () {
        //u.logJson(file, this.iconStyle, 'this.iconStyle')
        var ref = this.props;
        var name = ref.name;
        var pos = ref.pos;

        var i = name.indexOf('_');
        var key = (i === -1) ? name : name.substring(0, i);
        var __html = TOOLTIPS[key];
        return (
            React__default.createElement( 'div', { style: tooltip },
                React__default.createElement( 'span', { style: this.iconStyle, id: name + 'Icon', onMouseOver: this.mouseOver, onMouseOut: this.mouseOut, className: 'fa fa-question-circle' }),
                pos === 'right-below'
                    ?   React__default.createElement( 'div', { style: this.wrapper, id: name + 'Tooltip' },
                            React__default.createElement( 'div', { style: this.arrowDiv }, React__default.createElement( 'div', { style: this.arrow })),
                            React__default.createElement( 'div', { style: this.contentDiv, dangerouslySetInnerHTML: { __html: __html } })
                        )
                    :   React__default.createElement( 'div', { style: this.wrapper, id: name + 'Tooltip' },
                            React__default.createElement( 'div', { style: this.contentDiv, dangerouslySetInnerHTML: { __html: __html } }),
                            React__default.createElement( 'div', { style: this.arrowDiv }, React__default.createElement( 'div', { style: this.arrow }))
                        )         
            )
        )        
    };

    return Tooltip;
}(React.Component));

/*
    This script saves a search item to MyPDB. The item contains the original request along with additional 
    metadata. The save() function is called from the Query and History components.
*/
var url = MYPDB_URL + 'save';

function save(item) {
    var clone$$1 = clone(item); // clone item
    delete clone$$1.request.request_options.pager; // remove unused payload
    var options = Object.assign({}, OPTIONS_MYPDB, { body: JSON.stringify(clone$$1) }); // assign cloned item to options.body
    
    getData$1(url, options, callback);
}

// 'save()' callback function
function callback(data, err) {
    //if (data) u.logJson(file, data, 'saveCallback: data')

    if (data) { alert('Query saved to MyPDB'); }
    else if (err) { alert('An unknown error occurred while saving query to MyPDB: \n\n' + err); }
    else { alert('An unknown error occurred while saving query to MyPDB'); }
}

var file$30 = 'components/History';

var header = {
        width: '100%'
    };
var title = {
          whiteSpace: 'nowrap'
        , paddingRight: 10
    };
var btnQrs = Object.assign({}, btnSm);
var btnQrsDark = Object.assign({}, btnQrs, { border: border_60 });

var History = (function (Component$$1) {
    function History(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
            'deleteAllHistory'
            , 'saveToMypdb'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list
    }

    if ( Component$$1 ) History.__proto__ = Component$$1;
    History.prototype = Object.create( Component$$1 && Component$$1.prototype );
    History.prototype.constructor = History;

    History.prototype.deleteAllHistory = function deleteAllHistory () {
        if (confirm('Click "OK" to delete all queries in Search History. This action cannot be undone.')) {
            this.props.dispatchAction(HISTORY_REMOVE_ALL);
        }
    };

    History.prototype.saveToMypdb = function saveToMypdb (item) {
        save(item);
    };

    History.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var booleans = ref.booleans;
        var history = ref.history;
        var dispatchAction = ref.dispatchAction;
        var requestSearch = ref.requestSearch;
        var map = history.map;
        var ids = history.ids;
        var hasMypdb = booleans.hasMypdb;
        var qrs = queries;

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( 'table', { style: header },
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: title }, React__default.createElement( 'h4', null, "Search History" )),
                        React__default.createElement( 'td', null, React__default.createElement( Tooltip, { name: 'history' }) ),
                        React__default.createElement( 'td', { style: {width: '100%'} }),
                        ids.length > 0 && !hasMypdb &&
                            React__default.createElement( 'td', null, React__default.createElement( 'div', { style: btn, onClick: function () { return dispatchAction(SET_VIEW, { tab: TAB_MYPDB }); } }, "MyPDB Login") )
                    )
                ),
                React__default.createElement( Space, { h: 20 }),

                ids.length > 0
                    ?
                        React__default.createElement( 'div', null,
                            React__default.createElement( 'table', { style: qrs.tbl },
                                React__default.createElement( 'tr', null,
                                    React__default.createElement( 'th', null ),     
                                    React__default.createElement( 'th', { style: qrs.th }, "Query"),
                                    React__default.createElement( 'th', { style: qrs.thNowrap }, "Result Type"),
                                    React__default.createElement( 'th', { style: qrs.th }, "Count"),
                                    React__default.createElement( 'th', { style: qrs.th }, "Last run"),
                                    hasMypdb && React__default.createElement( 'th', { style: qrs.th }, "Save to MyPDB"),
                                    React__default.createElement( 'th', { style: qrs.thDeleteAll }, React__default.createElement( 'div', { style: btn, className: 'stBtn', onClick: this.deleteAllHistory }, "Delete All"))
                                ),

                                ids.map(function (id, i) {
                                    var item = map[id];
                                    var count = item.count;
                                    var last_run = item.last_run;
                                    var html = item.html;
                                    var request = item.request;
                                    var took = item.took;
                                    var returnType = RETURN_TYPE_MAP[request.return_type].name;
                                    //let trStyle, btnStyle, cloudBtnStyle
                                    var trStyle, btnStyle;
                                    if (history.id === id) {
                                        trStyle = qrs.trSelected;
                                        btnStyle = btnQrsDark;
                                        // btnStyle = btnSmBorderDark
                                        // cloudBtnStyle = btnCloudBorderDark
                                    } else {
                                        trStyle = (i % 2 === 0) ? qrs.trEven : qrs.trOdd;
                                        btnStyle = btnQrs;
                                        // btnStyle = st.btnSm
                                        // cloudBtnStyle = btnCloud
                                    }
                                    var lastRun = getDateStr(last_run);

                                    return (
                                        React__default.createElement( 'tr', { style: trStyle, key: id },
                                            React__default.createElement( 'td', { style: qrs.td, onClick: function () { return requestSearch(request, file$30); } }, React__default.createElement( 'div', { style: btnSearchActive }, iconSearch)),
                                            React__default.createElement( 'td', { style: qrs.tdRequest, onClick: function () { return requestSearch(request, file$30); }, dangerouslySetInnerHTML: { __html: html } }),
                                            React__default.createElement( 'td', { style: qrs.tdNowrap, onClick: function () { return requestSearch(request, file$30); } }, returnType),
                                            React__default.createElement( 'td', { style: qrs.tdRight }, count),
                                            React__default.createElement( 'td', { style: qrs.tdDateTime }, lastRun),
                                            hasMypdb && React__default.createElement( 'td', { style: qrs.tdCenter }, React__default.createElement( 'div', { style: btnStyle, className: 'stBtn', onClick: function () { return this$1.saveToMypdb(item); } }, iconCloud)),
                                            React__default.createElement( 'td', { style: qrs.tdCenter }, React__default.createElement( 'div', { style: btnStyle, className: 'stBtn', onClick: function () { return dispatchAction(HISTORY_REMOVE, { id: id }); } }, iconTimes))
                                        )
                                    )
                                })
                            ) 
                        )
                    :   
                        React__default.createElement( 'p', null, React__default.createElement( 'i', null, MSGS.noSearchHistory ) )
            )
        )
    };

    return History;
}(React.Component));

var History$1 = connect(mapStateToProps, mapDispatchAllToProps)(History);

var js_cookie = createCommonjsModule(function (module, exports) {
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	var registeredInModuleLoader;
	if (typeof undefined === 'function' && undefined.amd) {
		undefined(factory);
		registeredInModuleLoader = true;
	}
	{
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var arguments$1 = arguments;

		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments$1[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
});

var file$34 = 'components/mypdb/Account';

// css
var tbl$1 = { marginBottom: 30 };
var tr$1 = { verticalAlign: 'middle' };
var lbl = { fontWeight: 'bold', padding: '5px 10px', borderBottom: border_10 };
var val = { padding: '5px 10px', borderBottom: border_10 };
var btn$1 = { padding: '1px 10px' };
var emailInput = { border: 'none', width: 250, padding: '0 5px', backgroundColor: color_06, lineHeight: '28px' };

var Account = (function (Component$$1) {
    function Account(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'editEmail'
            , 'saveEmail'
            , 'saveEmailCallback'
            , 'setEmail'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        var ref = this.props.data;
        var email = ref.email;
        var notification = ref.notification;
        logJson(file$34, { email: email, notification: notification }, 'props in constructor');

        if (!notification) { notification = 'monthly'; }
        this.state = { 
              editEmail: false
            , email: email
            , notification: notification };
    }

    if ( Component$$1 ) Account.__proto__ = Component$$1;
    Account.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Account.prototype.constructor = Account;

    Account.prototype.editEmail = function editEmail () {
        this.setState({ editEmail: true });
    };

    Account.prototype.saveEmail = function saveEmail () {
        var options = clone(OPTIONS_MYPDB);
        var email = this.state.email;
        options.body = JSON.stringify({ email: email });
        getData$1(MYPDB_URL + 'update-email', options, this.saveEmailCallback);
    };

    Account.prototype.saveEmailCallback = function saveEmailCallback (data, err) {
        if (err) { console.log(err); } 
        else { console.log(data); }
        this.setState({ editEmail: false });
    };

    Account.prototype.setEmail = function setEmail (e) {
        var email = e.target.value;
        this.setState({ email: email });
    };

    Account.prototype.render = function render$$1 () {
        var ref = this.props;
        var data = ref.data;
        var deleteAccount = ref.deleteAccount;
        var deleteAll = ref.deleteAll;
        var downloadAccountData = ref.downloadAccountData;
        var id = data.id;
        var queries$$1 = data.queries;
        var provider = data.provider;
        var name = data.name;
        var created = data.created;
        var updated = data.updated;
        var numQueries = (queries$$1) ? queries$$1.length : 0;
        var word = (numQueries === 1) ? 'query' : 'queries';
        var ref$1 = this.state;
        var editEmail = ref$1.editEmail;
        var email = ref$1.email;
        var notification = ref$1.notification;
        logJson(file$34, this.state, 'state in render');
       
        return (
            React__default.createElement( 'div', null,
                React__default.createElement( 'table', { style: tbl$1 },
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: lbl }, "Name"),
                        React__default.createElement( 'td', { style: val }, name)
                    ),         
                    React__default.createElement( 'tr', { style: tr$1 },
                        React__default.createElement( 'td', { style: lbl }, "Notification Email"),
                        editEmail
                            ? React__default.createElement( 'td', { style: val }, React__default.createElement( 'input', { type: 'text', style: emailInput, value: email, onChange: this.setEmail }))
                            : React__default.createElement( 'td', { style: val }, email),
                        editEmail
                            ? React__default.createElement( 'td', { style: btn$1 }, React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: this.saveEmail }, iconSave, "Save"))
                            : React__default.createElement( 'td', { style: btn$1 }, React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: this.editEmail }, iconEdit, "Edit"))
                    ),         
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: lbl }, "Provider"),
                        React__default.createElement( 'td', { style: val }, MAP[provider].name)
                    ),
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: lbl }, "Provider ID"),
                        React__default.createElement( 'td', { style: val }, id)
                    ),
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: lbl }, "Account Created"),
                        React__default.createElement( 'td', { style: val }, getDateStr(created))
                    ),         
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', { style: lbl }, "Last Update"),
                        React__default.createElement( 'td', { style: val }, getDateStr(updated))
                    )        
                ),

                numQueries > 0
                    ? React__default.createElement( 'p', null, "You have ", numQueries, " saved ", word, "." )
                    : React__default.createElement( 'p', null, MSGS.noMyPdbQueries ),

                React__default.createElement( 'div', null,
                    React__default.createElement( 'div', { style: btn, onClick: downloadAccountData }, "Download Account Data"),
                    React__default.createElement( Space, { w: 2 }),
                    numQueries > 0 && React__default.createElement( 'div', { style: btn, onClick: deleteAll }, "Delete All Queries"),
                    numQueries > 0 && React__default.createElement( Space, { w: 2 }),
                    React__default.createElement( 'div', { style: btn, onClick: deleteAccount }, "Delete Account")
                )
            )
        )
    };

    return Account;
}(React.Component));

var Account$1 = connect(mapStateToProps, mapDispatchAllToProps)(Account);

//const file = 'components/mypdb/Documentation'

var Documentation = (function (Component$$1) {
    function Documentation(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'getHtml'
            , 'setHtml'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        this.state = {};
    }

    if ( Component$$1 ) Documentation.__proto__ = Component$$1;
    Documentation.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Documentation.prototype.constructor = Documentation;

    Documentation.prototype.componentDidMount = function componentDidMount () {
        this.getHtml('mypdb-documentation');
    };

    Documentation.prototype.getHtml = function getHtml$$1 (id) {
        getHtml$1(HELP_URL + '/' + id, this.setHtml); // TODO store in global state - see ../help/Help.js
    };

    Documentation.prototype.setHtml = function setHtml (html, err) {
        this.setState({ html: html });
    };

    Documentation.prototype.render = function render$$1 () {
        var __html = this.state.html;
        
        if (__html) { return React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: __html } }) } 
        else { return null }
    };

    return Documentation;
}(React.Component));

var Documentation$1 = connect(mapStateToProps, mapDispatchAllToProps)(Documentation);

//const file = 'components/mypdb/Header'

// css
var header$1 = {
        width: '100%',
        marginBottom: 10
    };
var headerRight = {
        textAlign: 'right',
    };
var headerLoggedIn = {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 12,
        paddingTop: 10
    };
var pipeStyle = {
        display: 'inline-block',
        width: 30,
        color: '#ccc',
        textAlign: 'center'
    };

var pipe = React__default.createElement( 'div', { style: pipeStyle }, "|");

var Header = (function (Component$$1) {
    function Header () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Header.__proto__ = Component$$1;
    Header.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Header.prototype.constructor = Header;

    Header.prototype.render = function render$$1 () {
        var ref = this.props;
        var booleans = ref.booleans;
        var data = ref.data;
        var logout = ref.logout;
        var setMypdbView = ref.setMypdbView;
        var views = ref.views;
        var hasMypdb = booleans.hasMypdb;
        var view = views.mypdb;
        var title = PAGE_TITLES[view];

        var provider, name;
        
        if (hasMypdb && data) {
            provider = MAP[data.provider].name;
            name = data.name;
        }    

        return (
            React__default.createElement( 'table', { style: header$1 },
                React__default.createElement( 'tr', null,
                    React__default.createElement( 'td', null, React__default.createElement( 'h4', null, title ) ),
                    React__default.createElement( 'td', { style: headerRight },
                        React__default.createElement( 'a', { onClick: function () { return setMypdbView('documentation'); } }, "Documentation"),
                        pipe,
                        hasMypdb && data &&
                            React__default.createElement( 'span', null,     
                                React__default.createElement( 'a', { onClick: function () { return setMypdbView('queries'); } }, "Saved Queries"),
                                pipe,
                                React__default.createElement( 'a', { onClick: function () { return setMypdbView('account'); } }, "Account Settings"),
                                pipe,
                                React__default.createElement( 'a', { onClick: logout }, "Sign out")
                            ),
                        !hasMypdb && 
                            React__default.createElement( 'span', null,     
                                React__default.createElement( 'a', { onClick: function () { return setMypdbView('login'); } }, "Sign In")    
                            )    
                    )
                ),
                hasMypdb && data &&
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', null ),
                        React__default.createElement( 'td', { style: headerLoggedIn }, "Signed in via ", provider, " as ", name)
                    )
            )
        )
    };

    return Header;
}(React.Component));

var Header$1 = connect(mapStateToProps, mapDispatchAllToProps)(Header);

//const file = 'components/mypdb/Login'

// css
var msg$2 = {
        textAlign: 'center',
        lineHeight: '36px'
    };
var login = {
        padding: 10,
        textAlign: 'center',
    };
var btn$2 = {
        border: '1px solid ' + color_10,
        padding: 10,
        borderRadius: 4,
        width: 225,
        display: 'inline-block',
        textAlign: 'left' // cancel inherited property
    };
var icon = {
        width: 36,
        height: 36,
        lineHeight: '36px',
        display: 'inline-block',
        textAlign: 'center',
        marginRight: 10
    };

var Login = (function (Component$$1) {
    function Login(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'getHtml'
            , 'setHtml'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    
        this.state = {};
    }

    if ( Component$$1 ) Login.__proto__ = Component$$1;
    Login.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Login.prototype.constructor = Login;
    
    Login.prototype.componentDidMount = function componentDidMount () {
        this.getHtml();
    };
    
    Login.prototype.getHtml = function getHtml$$1 () {
        getHtml$1(HELP_URL + '/mypdb-notice', this.setHtml); // TODO store in global state - see ../help/Help.js
    };
    
    Login.prototype.setHtml = function setHtml (html, err) {
        this.setState({ html: html });
    };

    Login.prototype.render = function render$$1 () {
        var __html = this.state.html;

        return (
            React__default.createElement( 'div', null,
                __html && React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: __html } }),  

                React__default.createElement( 'div', { style: msg$2 }, "Sign in to MyPDB to save searches, run previously saved searches, or change your account settings."),

                AUTHS.map(function (auth) {
                    return (
                        React__default.createElement( 'div', { style: login, key: auth.id },
                            React__default.createElement( 'div', { style: btn$2, href: '/auth/' + auth.id },
                                React__default.createElement( 'div', { style: icon }, React__default.createElement( 'a', { href: '/auth/' + auth.id }, React__default.createElement( 'img', { src: CDN_RCSB_URL + 'logos/' + auth.id + '.png' }))),
                                React__default.createElement( 'a', { href: '/auth/' + auth.id }, "Sign in with ", auth.name)
                            )
                        )        
                    )
                })
            )
        )
    };

    return Login;
}(React.Component));

var Login$1 = connect(mapStateToProps, mapDispatchAllToProps)(Login);

//const file = 'components/mypdb/Queries'

var Queries = (function (Component$$1) {
    function Queries(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'saveNotify'
            , 'saveNotifyCallback'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) Queries.__proto__ = Component$$1;
    Queries.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Queries.prototype.constructor = Queries;

    // save notify flag
    Queries.prototype.saveNotify = function saveNotify (e, queryId) {
        var notify = e.target.checked;
        var options = clone(OPTIONS_MYPDB);
        options.body = JSON.stringify({ notify: notify, queryId: queryId });
        //u.logJson(file, options)
        getData$1(MYPDB_URL + 'update-notify', options, this.saveNotifyCallback);
    };

    // save notify flag callback function
    Queries.prototype.saveNotifyCallback = function saveNotifyCallback (notifyData, err) {
        if (err) {
            console.log(err); 
        } else {
            //console.log(notifyData)
            var queryId = notifyData.queryId;
            var notify = notifyData.notify;
            var ref = this.props;
            var data = ref.data;
            for (var i = 0, n = data.queries.length; i < n; i++) {
                var q = data.queries[i];
                if (q.id === queryId) {
                    q.notify = notify;
                    break
                }    
            }
            this.setState({ data: data });
        }
    };

    Queries.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var data = ref.data;
        var deleteAll = ref.deleteAll;
        var deleteQuery = ref.deleteQuery;
        var requestSearch = ref.requestSearch;

        if (data) {
            var qrs = queries;
            return (
                React__default.createElement( 'div', null,
                    data.queries && data.queries.length > 0
                        ?   React__default.createElement( 'table', { style: qrs.tbl },
                                React__default.createElement( 'tr', null,
                                    React__default.createElement( 'th', null ),     
                                    React__default.createElement( 'th', { style: qrs.thLine }, "Query"),
                                    React__default.createElement( 'th', { style: qrs.thLineNowrap }, "Result Type"),
                                    React__default.createElement( 'th', { style: qrs.thLine }, "Count"),
                                    React__default.createElement( 'th', { style: qrs.thLine }, "Saved"),
                                    React__default.createElement( 'th', { style: qrs.thLine }, "Notify"),
                                    React__default.createElement( 'th', { style: qrs.thLineDeleteAll }, React__default.createElement( 'div', { style: btn, onClick: deleteAll }, "Delete All"))
                                ),
                                data.queries.map(function (item, i) {
                                    var id = item.id;
                                    var count = item.count;
                                    var html = item.html;
                                    var notify = item.notify;
                                    var request = item.request;
                                    var saved = item.saved;
                                    var trStyle = (i % 2 === 0) ? qrs.trEven : qrs.trOdd;
                                    if (RETURN_TYPE_MAP[request.return_type]) {
                                        return (
                                            React__default.createElement( 'tr', { style: trStyle, key: id },
                                                React__default.createElement( 'td', { style: qrs.td, onClick: function () { return requestSearch(request, 'mypdb'); } }, React__default.createElement( 'div', { style: btnSearchActive }, iconSearch)),
                                                React__default.createElement( 'td', { style: qrs.tdRequest, onClick: function () { return requestSearch(request, 'mypdb'); }, dangerouslySetInnerHTML: { __html: html } }),
                                                React__default.createElement( 'td', { style: qrs.tdNowrap, onClick: function () { return requestSearch(request, 'mypdb'); } }, RETURN_TYPE_MAP[request.return_type].name),
                                                React__default.createElement( 'td', { style: qrs.tdRight }, count),
                                                React__default.createElement( 'td', { style: qrs.tdDateTime }, getDateStr(saved)),
                                                React__default.createElement( 'td', { style: qrs.tdCenter }, React__default.createElement( 'input', { 
                                                        type: 'checkbox', checked: notify, onClick: function (e) { return this$1.saveNotify(e, id); } })),
                                                React__default.createElement( 'td', { style: qrs.tdCenter }, React__default.createElement( 'div', { style: btnSm, onClick: function () { return deleteQuery(item.id); } }, iconTimes))
                                            )
                                        )
                                    }
                                })
                            ) 
                        :   React__default.createElement( 'div', { style: msg$1 }, MSGS.noMyPdbQueries)
                )
            )
        }
        return null
    };

    return Queries;
}(React.Component));

var Queries$1 = connect(mapStateToProps, mapDispatchAllToProps)(Queries);

/*
    this script handles downloading/displaying of data or ids from the tabular report page
*/
var file$35 = 'common/data-download';

function getData$2(props, params) {
    var request = props.request;
    var returnType = props.returnType;
    var searchResults = props.searchResults;
    var tabularReport = props.tabularReport;
    var views = props.views;
    var batch = params.batch;
    var format = params.format;
    var from = params.from;
    var to = params.to;

    var total_count = searchResults.total_count;
    var attributes = tabularReport.attributes;
    var report = views.report;

    console.log(file$35, 'getData: ', batch, format, report, attributes);

    var reportRequest = getReportRequest(request, batch, from, to, total_count, DATA_DOWNLOAD_COUNT);

    var data = {
          attributes: attributes
        , batch: batch
        , format: format
        , report: report
        , reportRequest: reportRequest
        , returnType: returnType
        , total_count: total_count
    };

    submit(data, '/search/data-download');
}

function getAccountData() {
    submit(null, '/mypdb/account-data');
}

function getIds(props, params) {
    var request = props.request;
    var searchResults = props.searchResults;
    var batch = params.batch;
    var mode = params.mode;
    var from = params.from;
    var to = params.to;

    var total_count = searchResults.total_count;

    console.log(file$35, 'getIds: ', batch, mode, from, to);
    
    var reportRequest = getReportRequest(request, batch, from, to, total_count, IDS_COUNT);
 
    var data = {
          batch: batch
        , mode: mode
        , reportRequest: reportRequest
        , total_count: total_count
    };            
    
    submit(data, '/search/data-download/ids');
}

// return a formatted json request
function getJsonRequest(request) {
    submit(request, '/search/json-request');
}

// private functions -----------------------------------------------------------

function getReportRequest(request, batch, from, to, total_count, count) {
    request = clone(request);
    request.request_options.pager.start = (batch) ? from : 0;
    request.request_options.pager.rows = (batch) ? to - from + 1 : Math.min(total_count, count);
    return request
}

// use generic form to POST data to server 
function submit(data, action) {
    var form = document.getElementById('data-form');
    form.action = action;
    if (data) { form.elements.data.value = JSON.stringify(data); }
    form.submit();
}

/*
    The top-level MyPdb component.
    
    Note: all labels referring to login/logout operations use the terms 'Sign in' / 'Sign out' for UI display
*/

var file$33 = 'components/mypdb/MyPdb';

var MyPdb = (function (Component$$1) {
    function MyPdb(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'deleteAccount'
            , 'deleteAll'
            , 'deleteQuery'
            , 'downloadAccountData'
            , 'loadData'
            , 'logout'
            , 'setData'
            , 'setLoading'
            , 'setMypdbView'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
        this.state = {};
    }

    if ( Component$$1 ) MyPdb.__proto__ = Component$$1;
    MyPdb.prototype = Object.create( Component$$1 && Component$$1.prototype );
    MyPdb.prototype.constructor = MyPdb;

    MyPdb.prototype.componentDidMount = function componentDidMount () {
        console.log(file$33, 'componentDidMount: view============================' + this.props.views.mypdb);
        var hasMypdb = this.props.booleans.hasMypdb;

        if (hasMypdb) { this.loadData(); }
    };

    MyPdb.prototype.deleteAccount = function deleteAccount () {
        //console.log(file + ': deleteAccount')
        if (confirm('Click "OK" to delete your account. Any saved queries will also be deleted. This action cannot be undone. \n\nYou will be able to create a new account from the "Sign In" screen at any time.')) {
            this.setLoading(true);
            getData$1(MYPDB_URL + 'delete-account', OPTIONS_MYPDB, this.logout);
        }
    };

    MyPdb.prototype.deleteAll = function deleteAll () {
        if (confirm('Click "OK" to delete all saved queries. This action cannot be undone.')) {
            this.setLoading(true);
            getData$1(MYPDB_URL + 'delete-all', OPTIONS_MYPDB, this.setData);
        }
    };

    MyPdb.prototype.deleteQuery = function deleteQuery (id) {
        //console.log(file + ': deleteQuery: id=' + id)
        this.setLoading(true);
        var options = clone(OPTIONS_MYPDB);
        options.body = JSON.stringify({ id: id });
        getData$1(MYPDB_URL + 'delete', options, this.setData);
    };

    MyPdb.prototype.downloadAccountData = function downloadAccountData () {
        getAccountData();
    };

    MyPdb.prototype.loadData = function loadData () {
        //console.log(file + ': loadData()')
        this.setLoading(true);
        getData$1(MYPDB_URL + 'data', OPTIONS_MYPDB, this.setData);
    };

    MyPdb.prototype.logout = function logout () {
        js_cookie.remove(MYPDB_COOKIE_NAME);
        this.props.dispatchAction(SET_BOOLEAN, { hasMypdb: false });
        this.props.dispatchAction(SET_VIEW, { mypdb: 'login' });
    };

    MyPdb.prototype.setData = function setData (data, err) {
        console.log(file$33 + ': setData()' + ': typeof data=' + typeof data + ': err=' + err);
        //let view = (this.state.view) ? this.state.view : getView()
        //const view = (this.state.view === 'account') ? 'account' : 'queries' // id user came from account view, stay there

        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var views = ref.views;
        if (this.props.views.mypdb === 'login') { dispatchAction(SET_VIEW, { mypdb: 'queries' }); }
        
        this.setState({ data: data, err: err });
        this.setLoading(false);
    };

    MyPdb.prototype.setLoading = function setLoading (loading) {
        this.props.dispatchAction(SET_BOOLEAN, { dataLoading: loading });
    };

    MyPdb.prototype.setMypdbView = function setMypdbView (view) {
        console.log(file$33, 'setMypdbView: view=' + view);
        this.props.dispatchAction(SET_VIEW, { mypdb: view });
    };

    MyPdb.prototype.render = function render$$1 () {
        var ref = this.props;
        var views = ref.views; //booleans, 
        //const hasMypdb = booleans.hasMypdb
        var view = views.mypdb;

        var ref$1 = this.state;
        var data = ref$1.data;
        var err = ref$1.err;

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( Header$1, { data: data, logout: this.logout, setMypdbView: this.setMypdbView }),
                err && React__default.createElement( 'div', null, "err" ),
                view === 'documentation' && 
                    React__default.createElement( Documentation$1, { 
                                data: data, logout: this.logout, setMypdbView: this.setMypdbView }),
                view === 'login' && 
                    React__default.createElement( Login$1, {      setMypdbView: this.setMypdbView }),
                view === 'queries' && 
                    React__default.createElement( Queries$1, {    data: data, deleteAll: this.deleteAll, deleteQuery: this.deleteQuery, logout: this.logout, setMypdbView: this.setMypdbView }),
                view === 'account' && 
                    React__default.createElement( Account$1, {    data: data, deleteAll: this.deleteAll, deleteAccount: this.deleteAccount, downloadAccountData: this.downloadAccountData, logout: this.logout, setMypdbView: this.setMypdbView })
            )
        )
    };

    return MyPdb;
}(React.Component));

var MyPdb$1 = connect(mapStateToProps, mapDispatchAllToProps)(MyPdb);

var ServiceBtns = (function (Component$$1) {
    function ServiceBtns () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) ServiceBtns.__proto__ = Component$$1;
    ServiceBtns.prototype = Object.create( Component$$1 && Component$$1.prototype );
    ServiceBtns.prototype.constructor = ServiceBtns;

    ServiceBtns.prototype.render = function render$$1 () {
        var ref = this.props;
        var clear = ref.clear;
        var count = ref.count;
        var handleCount = ref.handleCount;
        return (
            React__default.createElement( 'div', { style: inline },
                (typeof count === 'undefined' || count === -1) 
                    ? React__default.createElement( 'div', { style: btnRt, className: 'qb-btn', onClick: handleCount }, "Count")
                    : React__default.createElement( 'div', { style: btnRt, className: 'qb-btn' }, count),
                React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: clear }, "Clear")
            )
        )
    };

    return ServiceBtns;
}(React.Component));

var tabClosed = Object.assign({}, qb.serviceTab, { borderBottom: border_15 });

var ServiceTab = (function (Component$$1) {
    function ServiceTab () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) ServiceTab.__proto__ = Component$$1;
    ServiceTab.prototype = Object.create( Component$$1 && Component$$1.prototype );
    ServiceTab.prototype.constructor = ServiceTab;

    ServiceTab.prototype.render = function render$$1 () {
        var ref = this.props;
        var open = ref.open;
        var service = ref.service;
        var serviceToggle = ref.serviceToggle;
        
        var icon = (open) ? iconUp : iconDown;
        var serviceTabStyle = (open) ? qb.serviceTab : tabClosed;

        return (
            React__default.createElement( 'div', { style: serviceTabStyle },
                React__default.createElement( 'div', { style: qb.toggle, onClick: serviceToggle }, icon),
                React__default.createElement( 'div', { style: qb.serviceLabel }, QB_SERVICE_MAP[service]),
                React__default.createElement( Tooltip, { name: service + 'Search', pos: 'above-right' })
            )
        )
    };

    return ServiceTab;
}(React.Component));

/*
    Chemical Search service component

    type: 'formula'
        value           string
        match_subset    boolean

    type: 'descriptor'
        value           string
        descriptor_type string enum: 'SMILES' 'InChI'
        match_type      string enum: 'graph-relaxed' 'graph-relaxed-stereo' 'graph-strict' 'fingerprint-similarity'    

*/

// import DynamicTooltip from '../DynamicTooltip' // TODO
//import InfoIcon from '../InfoIcon'
var file$39 = 'components/query-builder/Chemical';
var service = 'chemical';

// css inline styles
var selectStyle$1 = Object.assign({}, inline, { marginRight: 10 });
var lStyle$1 = Object.assign({}, lStyle, { width: '75%' });
var rStyle$1 = Object.assign({}, rStyle, { width: '25%' });
var checkboxStyle = {
          display: 'inline-block'
        , marginRight: 8
        , marginTop: 4
    };

var Chemical = (function (Component$$1) {
    function Chemical(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clear'
            , 'handleCount'
            , 'handleSetProp'
            , 'serviceToggle'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        this.id = service;
    }

    if ( Component$$1 ) Chemical.__proto__ = Component$$1;
    Chemical.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Chemical.prototype.constructor = Chemical;

    Chemical.prototype.clear = function clear () {
        this.props.dispatchAction(QB_CHEMICAL_SET_PROPS, getDefault(service));
    };

    // get count
    Chemical.prototype.handleCount = function handleCount () {
        this.props.serviceCountSearch(service);
    };

    // Set any property. 'checked' arg will only be present for 'match_subset'
    Chemical.prototype.handleSetProp = function handleSetProp (e) {
        var ref = e.target;
        var id = ref.id;
        var value = ref.value;
        var checked = ref.checked;
        console.log(file$39, 'handleSetProp', id, value, checked);
        var props = { count: -1 };
        value = value.trim();
        props[id] = (id === 'match_subset') ? !checked : value;
        this.props.dispatchAction(QB_CHEMICAL_SET_PROPS, props);
    };

    Chemical.prototype.serviceToggle = function serviceToggle () {
        this.props.dispatchAction(QB_SERVICE_SET_OPEN, { service: service });
    };

    Chemical.prototype.render = function render$$1 () {
        var ref = this.props.queryBuilder.services.chemical;
        var count = ref.count;
        var showAnd = ref.showAnd;
        var open = ref.open;
        var value = ref.value;
        var type = ref.type;
        var match_subset = ref.match_subset;
        var descriptor_type = ref.descriptor_type;
        var match_type = ref.match_type;
        var and = (showAnd) ? 'AND' : null;
        
        //console.log(file, 'render: match_subset=', match_subset, typeof match_subset)

        var serviceOperator = React__default.createElement( 'div', { style: qb.serviceOperator }, and);

        var placeholder;
        if (type === 'formula') {
            placeholder = PLACE_HOLDERS.chemicalFormula;
        } else if (type === 'descriptor') {
            if (descriptor_type === 'SMILES') { placeholder = PLACE_HOLDERS.chemicalSMILES; }
            else { placeholder = PLACE_HOLDERS.chemicalInChI; }
        }    

        var valueInput =   React__default.createElement( 'textarea', {
                                    id: 'value', style: qb.textareaStyle, value: value, onChange: this.handleSetProp, placeholder: placeholder, autoComplete: 'off' });
                                    
        var typeSelect =  React__default.createElement( 'div', { style: selectStyle$1 },
                                React__default.createElement( 'div', { style: qb.label }, MAP.query_type)
                                /* <InfoIcon text={'test'} marginTop={2} parentId={this.id} /> TODO */ ,
                                React__default.createElement( Tooltip, { name: service + 'Type', pos: 'above-right', marginRight: 5 }),
                                React__default.createElement( Select, {
                                    id: 'type', options: CHEMICAL_QUERY_TYPE_OPTIONS, value: type, onChange: this.handleSetProp, border: border_20 })
                            );        

        var matchSubsetCheckbox =
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: checkboxStyle },
                    React__default.createElement( 'input', { type: 'checkbox', id: 'match_subset', onClick: this.handleSetProp, checked: match_subset })
                ),
                React__default.createElement( 'div', { style: qb.label }, MAP.match_subset),
                React__default.createElement( Tooltip, { name: service + 'MatchSubset', pos: 'above-right', marginRight: 5 })
            );


        var descriptorTypeSelect =    React__default.createElement( 'div', { style: selectStyle$1 },
                                            React__default.createElement( 'div', { style: qb.label }, MAP.descriptor_type),
                                            React__default.createElement( Tooltip, { name: service + 'DescriptorType', pos: 'above-right', marginRight: 5 }),
                                            React__default.createElement( Select, {
                                                id: 'descriptor_type', options: CHEMICAL_DESCRIPTOR_TYPE_OPTIONS, value: descriptor_type, onChange: this.handleSetProp, border: border_20 })
                                        ); 

        var matchTypeSelect = React__default.createElement( 'div', { style: selectStyle$1 },
                                    React__default.createElement( 'div', { style: qb.label }, MAP.match_type),
                                    React__default.createElement( Tooltip, { name: service + 'MatchType', pos: 'above-right', marginRight: 5 }),
                                    React__default.createElement( Select, {
                                        id: 'match_type', options: CHEMICAL_MATCH_TYPE_OPTIONS, value: match_type, onChange: this.handleSetProp, border: border_20 })
                                ); 

        return (
            React__default.createElement( 'div', { style: qb.service }
                /* <DynamicTooltip parentId={this.id} /> TODO */,
                React__default.createElement( ServiceTab, { open: open, service: service, serviceToggle: this.serviceToggle }),
                open &&
                    React__default.createElement( 'table', { style: qb.serviceTable },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, serviceOperator ),
                            React__default.createElement( 'td', { style: qb.serviceTableBody },
                                React__default.createElement( 'div', { style: qb.serviceBody },
                                    valueInput,
                                    React__default.createElement( 'div', { style: lStyle$1 },
                                        typeSelect,
                                        type === 'formula' && matchSubsetCheckbox,
                                        type === 'descriptor' && 
                                            React__default.createElement( 'span', null,
                                                descriptorTypeSelect,
                                                matchTypeSelect
                                            )
                                    ),
                                    React__default.createElement( 'div', { style: rStyle$1 },
                                        React__default.createElement( ServiceBtns, { clear: this.clear, count: count, handleCount: this.handleCount })
                                    )
                                )
                            )
                        )     
                    )    
            )   
        )
    };

    return Chemical;
}(React.Component));

var Chemical$1 = connect(mapStateToProps, mapDispatchAllToProps)(Chemical);

/* 
    query builder footer component

    see https://www.w3schools.com/howto/howto_custom_select.asp for custom select
*/

// css inline styles
var selectStyle$2 = Object.assign({}, inline, { marginRight: 10 });

var Footer = (function (Component$$1) {
    function Footer(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleClick'
            , 'setReturnType' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) Footer.__proto__ = Component$$1;
    Footer.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Footer.prototype.constructor = Footer;

    // handler for click actions originating in this component
    Footer.prototype.handleClick = function handleClick (op) {
        var ref = this.props;
        var countSearch = ref.countSearch;
        var dispatchAction = ref.dispatchAction;
        var queryBuilderSearch = ref.queryBuilderSearch;
        if (op === 'clear') { dispatchAction(QB_INIT); } // open default empty queryBuilder
        else if (op === 'count') { countSearch(); } // get query count
        else if (op === 'search') { queryBuilderSearch(); } // run the query
    };

    Footer.prototype.setReturnType = function setReturnType (e) {
        var returnType = e.target.value;
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        dispatchAction(QB_RESET_COUNTS);
        dispatchAction(SET_RETURN_TYPE, { returnType: returnType });
    };

    Footer.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var control = ref.control;
        var cw = ref.cw;
        var queryBuilder = ref.queryBuilder;
        var returnType = ref.returnType;
        var count = queryBuilder.count;

        var searchBtnStyle = (control === CONTROL_QUERY_BUILDER) ? btnSearchActive : btnSearch;
        var resultType = (count === 1) ? RETURN_TYPE_MAP[returnType].name : RETURN_TYPE_MAP[returnType].value;   


        return (
            React__default.createElement( 'div', { style: qb.footerStyle },
                React__default.createElement( 'div', { style: qb.label }, "Display Results as"),
                React__default.createElement( Tooltip, { name: 'displayResultsAs', pos: 'above-right', marginTop: 7, marginLeft: 5, marginRight: 10 }),
                React__default.createElement( 'div', { style: selectStyle$2 },
                    React__default.createElement( Select, {
                            options: RETURN_TYPES, onChange: this.setReturnType, value: returnType, border: border_20, height: 28 })
                ),
                (typeof count === 'undefined' || count === -1) 
                    ? React__default.createElement( 'div', { style: btnRt, className: 'qb-btn', onClick: function () { return this$1.handleClick('count'); } }, "Count")
                    : React__default.createElement( 'div', { style: btnRt, className: 'qb-btn' }, count),
                React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: function () { return this$1.handleClick('clear'); } }, "Clear"),
                React__default.createElement( Space, { w: 4 }),
                React__default.createElement( 'div', { style: searchBtnStyle, onClick: function () { return this$1.handleClick('search'); } }, React__default.createElement( 'span', { className: 'glyphicon glyphicon-search' }))
            )
        )
    };

    return Footer;
}(React.Component));

var Footer$1 = connect(mapStateToProps, mapDispatchAllToProps)(Footer);

/*
   a generic menu component

   all css for this component is defined in the search.css file in the 'input-menu' section
*/
var Menu = (function (Component$$1) {
   function Menu () {
      Component$$1.apply(this, arguments);
   }

   if ( Component$$1 ) Menu.__proto__ = Component$$1;
   Menu.prototype = Object.create( Component$$1 && Component$$1.prototype );
   Menu.prototype.constructor = Menu;

   Menu.prototype.render = function render$$1 () {
        var ref = this.props;
        var menuIndex = ref.menuIndex;
        var menuItems = ref.menuItems;
        var menuStyle = ref.menuStyle;
        var handleMenuSelect = ref.handleMenuSelect;

        return (
            React__default.createElement( 'div', { className: 'input-menu', style: menuStyle },
                menuItems && menuItems.map(function (item, i) {
                    var selected = (i === menuIndex) ? 'selected' : null;
                    return  React__default.createElement( 'div', {
                                className: selected, id: 'menu' + i, key: 'i' + i, onClick: function () { return handleMenuSelect(item); }, dangerouslySetInnerHTML: { __html: item } })
                })
            )
        )
    };

   return Menu;
}(React.Component));

/* 
    This script handles the addition and removal of controllers and menuContainers, 
    and also handles global 'keydown' and 'click' events

    - Controllers 
        - all controllers using this script must include an 'unsetControl' function that will unset control
          in response to a document click outside of the controller component itself

    - Menus
        - all menu components using this script must include:
            - in the constructor:
                // guid unique to this instance
                this.guid = u.getGuid() 
                
                // the name of the component, matching the class name of the component converted to lower-case with hyphens (if required)
                this.name = 'tree-search-bar' 

                // default state for the component, which must include { menuIndex, menuItems, menuOpen }
                this.state = u.getDefault('menu-state') - OR - a custom state definition 

            - an "id={'menu-container-' + this.guid}" defined in the 'render()' function for the outer-most div of the container
                - the menu-container should include both the input element and the menu as child elements
        
            - a 'handleMenuSelect' function, called when the user selects an item from the menu
        
        - any open menu will be closed in response to a document click outside of the menu component itself
*/

var LIMIT_NUM = 10; // to prevent runaway 'while' loops, the max number of iterations allowed for 'findParentById()' when traversing the DOM in search of an id 

var controller;
var menuContainer;

/*
    called by document.addEventListener('click')

    This function detects any click anywhere in the document, and if there is an active menu container, 
    the child menu is closed, unless the event originated in the active menu container.
*/    
function handleClick(e) {
    //console.log(file, 'handleClick: e.target.id=' + e.target.id)

    if (menuContainer) {
        var id = 'menu-container-' + menuContainer.guid;
        var obj = getParentByIdObj(id);
        findParentById(e.target, obj);
        //u.logJson(file, obj, 'obj')
        if (!obj.found) {
            if (menuContainer.name === 'selector-search') {
                menuContainer.closeMenu();
            } else {
                menuContainer.setState({ menuOpen: false });
            }
        }    
    }

    // for JIRA form, etc, unset controller
    if (controller) {
        var id$1 = controller.component_id;
        //console.log(file, 'handleClick: id=' + id)
        var obj$1 = getParentByIdObj(id$1);
        findParentById(e.target, obj$1);
        //u.logJson(file, obj, 'obj')
        
        if (!obj$1.found) {
            if (id$1 === 'query-builder-component' || id$1 === 'search-bar-component') {
                controller.setState({ menuOpen: false });
            }
            controller.unsetControl(); // unset control in global state
            controller = null;
        }        
    }
}

// handle key down
function handleKeyDown(e) {
    //console.log(file, 'handleKeyDown: e.target.id=' + e.target.id)
    var code = e.keyCode;
    //console.log(file, 'handleKeyDown: code=' + code)
    var enterProcessed = false;

    if (menuContainer) {
        var ref = menuContainer.state;
        var menuIndex = ref.menuIndex;
        var menuItems = ref.menuItems;
        var menuOpen = ref.menuOpen;
        
        if (menuOpen) {
            //if (menuContainer.name === 'selector-search') e.preventDefault() // TODO why is this needed only for 'selector-search'?
            
            if (    (code === 38 && menuIndex > -1) ||                      // up arrow key
                    (code === 40 && menuIndex < menuItems.length - 1)) {    // down arrow key
                var index = (code === 38) ? menuIndex - 1 : menuIndex + 1;
                
                //console.log(file, 'handleKeyDown: index=' + index)    
                if (index !== -1) {
                    if (menuContainer.name === 'search-bar' || menuContainer.name === 'selector-search') { // skip menu headers
                        if (menuItems[index].type === 'header') {
                            if (code === 38) { index--; }
                            else { index++; }
                        }
                        if (menuContainer.name === 'selector-search') {
                            var headerIndex = (index !== -1 && menuItems[index] && isItem(menuItems[index])) 
                                ? menuItems[index].header_index 
                                : -1;  // set header_index to this item's header_index, or -1
                                
                            //console.log(file + ': handleKeyDown: ' + index + ': headerIndex=' + headerIndex)
                            menuContainer.setState({ headerIndex: headerIndex });
                        }
                    }
                    // see search.css - search-bar-menu height = 330; search-bar-menu div height = 22 ???
                    var target = getEl('menu' + index);
                    if (target) { target.parentNode.scrollTop = Math.max(target.offsetTop - 308, 0); }
                }

                menuContainer.setState({ menuIndex: index });
            } else if (code === 13) { // ENTER key - populate input, or go directly to item page if menu contains a single item ID
                // console.log(file, 'handleKeyDown: menuIndex=', menuIndex)
                if (menuIndex > -1 && menuItems[menuIndex].type !== 'header') {
                    enterProcessed = true;
                    menuContainer.handleMenuSelect(menuItems[menuIndex]);
                } else if (menuContainer.name === 'search-bar' && menuIndex === -1 && menuOpen && menuItems.length === 2) {
                    var item = menuItems[1];
                    var attribute = menuContainer.state.attributes[item.attrIndex].attribute;

                    if (isAttributeSpecialCase(attribute)) { // special case - go directly to item page - TODO see additional logic in SearchBar.js
                        enterProcessed = true;
                        var value = removeHtml(item.__html);
                        menuContainer.handleSearch(attribute, value);
                    }
                }
            } else {
                //console.log('HERE')
            }     
        } 
    }
    
    if (!enterProcessed && controller && code === 13) {
        if (menuContainer && menuContainer.state.menuOpen) { menuContainer.setState({ menuOpen: false }); } // close menu - is this needed?

        // if (controller.name) console.log(file, 'setController: ' + controller.name)
        // if (controller.component_id) console.log(file, 'setController: ' + controller.component_id)

        controller.search(); // trigger search() function in the active controller - SearchBar | QueryBuilder | Refinements
    }
}

function setController(o) {
    // if (o.name) console.log(file, 'setController: name=' + o.name)
    // if (o.component_id) console.log(file, 'setController: component_id=' + o.component_id)
    controller = o;
}

/*
    update the menu state for all components containing a menu

    @params state menu state
    @params container menu container
*/    
function updateMenu(state, container) {
    //u.logJson(file, state, 'updateMenu: state')
        
    if (typeof state.menuOpen !== 'undefined') { // state.menuOpen must be set for all calls to this function
        if (menuContainer && menuContainer.guid !== container.guid) { menuContainer.setState({ menuOpen: false }); } // close current menu if it exists

        container.setState(state); // update the container

        // set menuContainer to this container if container menuOpen is true
        menuContainer = (state.menuOpen) ? container : null; // if state.menuOpen is set to false, set menuContainer to null
    }    
}    

// private functions -----------------------------------------------------------

/*
    Recursive function to traverse parent nodes looking for obj.id. The purpose of this function is to see if a parent
    node with a given id exists.

    @params obj {
                    id,     // the id to look for
                    found,  // set to true if id is found in a parent element - if found, the function returns
                    count,  // the number of iterations of the function
                }
*/
function findParentById(el, obj) {
    if (el) {
        if (el.id && el.id === obj.id) {
            obj.found = true;
            //console.log(file, 'findParentById: FOUND: el.id=' + el.id + ', count=' + obj.count)
            return
        } else {
            obj.count++;
            if (obj.count < LIMIT_NUM) { findParentById(el.parentNode, obj); }
            else { return }
        }
    }
    return
}

// return an obj used as the input param to findParentById()
function getParentByIdObj(id) {
    return { id: id, found: false, count: 0 }
}

// return true if 'item' is of type 'item' or 'item-nested'
function isItem(item) {
    return item.type === 'item' || item.type === 'item-nested'
}

/* Sequence Search component. */

var file$41 = 'components/query-builder/Sequence';
var service$1 = 'sequence';

// css inline styles
var inputTextStyle = Object.assign({}, qb.inputTextStyle, { width: 60 });
var lStyle$2 = Object.assign({}, lStyle, { width: '75%' });
var rStyle$2 = Object.assign({}, rStyle, { width: '25%' });
var menuStyle={ overflowX: 'hidden', maxWidth: 500 };

var Sequence = (function (Component$$1) {
    function Sequence(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clear'
            , 'handleChange'  
            , 'handleCount'
            , 'handleMenuSelect'
            , 'handleEntryIdClick'
            , 'retrieveSequences'
            , 'retrieveSequencesCallback'
            , 'serviceToggle'
        ]; 
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
        this.state = getDefault('menu-state');
        this.guid = getGuid();
        this.name = 'sequence';
    }

    if ( Component$$1 ) Sequence.__proto__ = Component$$1;
    Sequence.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Sequence.prototype.constructor = Sequence;

    Sequence.prototype.clear = function clear () {
        this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, getDefault(service$1));
        updateMenu({ menuOpen: false }, this);
    };

    Sequence.prototype.handleChange = function handleChange (e) {
        var ref = e.target;
        var id = ref.id;
        var value = ref.value;
        value = value.trim();
        //u.logJson(file, { id, value })

        if (id === 'sequence') {
            value = value.toUpperCase().replace(/\n| /g, '');
            this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, value: value });
        } else if (id === 'sequence_entry_id') {
            var entry_id = value.toUpperCase();
            this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, entry_id: entry_id });
            if (entry_id.length === 4) { this.retrieveSequences(entry_id); } 
        } else if (id === 'target') {
            var target = value;
            this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, target: target });
        } else if (id === 'evalue_cutoff') {
            value = value.toLowerCase();
            if (isScientific(value)) {
                this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, evalue_cutoff: value });
            }     
        } else if (id === 'identity_cutoff') {
            if (isInteger(value)) {
                this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, identity_cutoff: value });
            }        
        }
    };

    Sequence.prototype.handleCount = function handleCount () {
        this.props.serviceCountSearch(service$1);
    };

    // handle user selecting item from sequence menu
    Sequence.prototype.handleMenuSelect = function handleMenuSelect (value) {
        console.log(value);
        value = value.substring(value.indexOf(':') + 2);
        if (sequenceLength(value)) {
            var target = getTarget(value);
            if (target) { this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, target: target, value: value }); }
        }
        updateMenu({ menuOpen: false }, this);
    };


    Sequence.prototype.handleEntryIdClick = function handleEntryIdClick (e) {
        var ref = e.target;
        var value = ref.value;
        var entry_id = value.trim();
        this.props.dispatchAction(QB_SEQUENCE_SET_PROPS, { count: -1, entry_id: entry_id }); // ?
        if (entry_id.length === 4) {
            if (this.state.menuItems) { updateMenu({ menuOpen: true }, this); }
            else { this.retrieveSequences(entry_id); }
        }    
    };

    Sequence.prototype.retrieveSequences = function retrieveSequences (entry_id) {
        //const entry_id = u.getEl('sequence-entry-id').value
        console.log(file$41, 'retrieveSequences: entry_id=' + entry_id);
        if (entry_id.length === 4) { getData$1('/search/sequence/' + entry_id, OPTIONS_GET, this.retrieveSequencesCallback); }
        else { alert('Please enter a valid PDB ID'); }
    };

    Sequence.prototype.retrieveSequencesCallback = function retrieveSequencesCallback (items) {
        //console.log(file, 'retrieveSequencesCallback: items.length=' + items.length)
        if (items && items.length > 0) {
            updateMenu({ menuItems: items, menuIndex: 0, menuOpen: true }, this);
        } else {
            var id = getEl('sequence-entry-id').value;
            console.log('No Chain IDs or sequences were returned for PDB ID ' + id);
            this.setState({ msg: 'No Chain IDs or Sequences were returned for PDB ID ' + id });
        }
    };

    Sequence.prototype.serviceToggle = function serviceToggle () {
        this.props.dispatchAction(QB_SERVICE_SET_OPEN, { service: service$1 });
    };

    Sequence.prototype.render = function render$$1 () {
        var sequence$$1 = this.props.queryBuilder.services.sequence;
        var count = sequence$$1.count;
        var entry_id = sequence$$1.entry_id;
        var evalue_cutoff = sequence$$1.evalue_cutoff;
        var showAnd = sequence$$1.showAnd;
        var identity_cutoff = sequence$$1.identity_cutoff;
        var open = sequence$$1.open;
        var target = sequence$$1.target;
        var value = sequence$$1.value;
        var ref = this.state;
        var menuItems = ref.menuItems;
        var menuIndex = ref.menuIndex;
        var menuOpen = ref.menuOpen;

        var and = (showAnd) ? 'AND' : null;

        if (!entry_id) { entry_id = ''; } // if undefined or null, QB_INIT will not clear previous value
        if (!value) { value = ''; } // if undefined or null, QB_INIT will not clear previous value

        var serviceOperator = React__default.createElement( 'div', { style: qb.serviceOperator }, and);

        var sequenceInput =   React__default.createElement( 'textarea', {
                                    id: 'sequence', style: qb.textareaStyle, value: value, onChange: this.handleChange, placeholder: PLACE_HOLDERS.sequenceSearch, autoComplete: 'off' });

        var entryIdInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.entry_id),
                React__default.createElement( 'div', { id: 'menu-container-' + this.guid, style: inline, className: 'input-menu-container' },
                    React__default.createElement( 'input', { 
                        style: inputTextStyle, type: 'text', id: 'sequence_entry_id', value: entry_id, onChange: this.handleChange, onClick: this.handleEntryIdClick, placeholder: PLACE_HOLDERS.searchEntryId, autoComplete: 'off' }),
                    menuOpen && React__default.createElement( Menu, { menuItems: menuItems, menuIndex: menuIndex, handleMenuSelect: this.handleMenuSelect, menuStyle: menuStyle })    
                ),         
                React__default.createElement( Space, { w: 10 })  
            );

        var targetInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, "Target"),
                React__default.createElement( Select, {
                    id: 'target', options: SEQUENCE_TARGET_OPTIONS, onChange: this.handleChange, value: target, border: border_20, height: 28 }),
                React__default.createElement( Tooltip, { name: 'sequenceTarget', marginTop: 6, marginLeft: 5, marginRight: 10 })
            );        
        
        var evalueInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.evalue_cutoff),
                React__default.createElement( 'input', { 
                    style: inputTextStyle, type: 'text', id: 'evalue_cutoff', value: evalue_cutoff, onChange: this.handleChange, autoComplete: 'off' }),
                React__default.createElement( Tooltip, { name: 'sequenceEvalue', marginTop: 6, marginLeft: 5, marginRight: 10 })       
            );
        
        var identityInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.identity_cutoff),
                React__default.createElement( 'input', { 
                    style: inputTextStyle, type: 'text', id: 'identity_cutoff', value: identity_cutoff, onChange: this.handleChange, autoComplete: 'off' }),
                React__default.createElement( 'div', { style: qb.label }, React__default.createElement( 'i', null, "% (Integer only)" )),
                React__default.createElement( Tooltip, { name: 'sequenceIdentity', marginTop: 6 })        
            );    

        return (
            React__default.createElement( 'div', { style: qb.service },
                React__default.createElement( ServiceTab, { open: open, service: service$1, serviceToggle: this.serviceToggle }),
                open &&
                    React__default.createElement( 'table', { style: qb.serviceTable },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, serviceOperator ),
                            React__default.createElement( 'td', { style: qb.serviceTableBody },
                                React__default.createElement( 'div', { style: qb.serviceBody },
                                    React__default.createElement( 'div', null,
                                        sequenceInput
                                    ),
                                    React__default.createElement( 'div', { style: lStyle$2 },
                                        entryIdInput,
                                        targetInput,
                                        evalueInput,
                                        identityInput
                                    ),
                                    React__default.createElement( 'div', { style: rStyle$2 },
                                        React__default.createElement( ServiceBtns, { clear: this.clear, count: count, handleCount: this.handleCount })
                                    )
                                )
                            )
                        )     
                    )
            )    
        )
    };

    return Sequence;
}(React.Component));

var Sequence$1 = connect(mapStateToProps, mapDispatchAllToProps)(Sequence);

/* 
    Sequence Search component.

    Trivial Example:
    { "value": "GxxxGxxxG", "pattern_type": "trivial", "target": "pdb_protein_sequence" }

    Prosite Example: 
    { "value": "[DNSTAGC]-[GSTAPIMVQH]-x(2)-G-[DE]-S-G-[GS]-[SAPHV]-[LIVMFYWH]-[LIVMFYSTANQH].", "pattern_type": "prosite", "target": "pdb_protein_sequence" }

    Regex Example: 
    { "value": "[AC].V.{4}[^ED]", "pattern_type": "regex", "target": "pdb_protein_sequence" }

    DNA Example: 
    { "value": "ACGTACGT", "pattern_type": "trivial", "target": "pdb_dna_sequence" }

    RNA Example: 
    { "value": "ACGUA", "pattern_type": "trivial", "target": "pdb_rna_sequence" }

*/

var file$43 = 'components/query-builder/SequenceMotif';
var service$2 = 'seqmotif';

// css inline styles
var inputTextStyle$1 = Object.assign({}, qb.inputTextStyle, { width: '100%', marginBottom: 4 });
var lStyle$3 = Object.assign({}, lStyle, { width: '75%' });
var rStyle$3 = Object.assign({}, rStyle, { width: '25%' });

var SequenceMotif = (function (Component$$1) {
    function SequenceMotif(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clear'
            , 'handleChange'  
            , 'handleCount'
            , 'serviceToggle'
        ]; 
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) SequenceMotif.__proto__ = Component$$1;
    SequenceMotif.prototype = Object.create( Component$$1 && Component$$1.prototype );
    SequenceMotif.prototype.constructor = SequenceMotif;

    SequenceMotif.prototype.clear = function clear () {
        this.props.dispatchAction(QB_SEQUENCE_MOTIF_SET_PROPS, getDefault(service$2));
    };

    SequenceMotif.prototype.handleChange = function handleChange (e) {
        var ref = e.target;
        var id = ref.id;
        var value = ref.value;
        value = value.trim();
        logJson(file$43, { id: id, value: value });

        if (id === 'sequence-motif') {
            this.props.dispatchAction(QB_SEQUENCE_MOTIF_SET_PROPS, { count: -1, value: value });
        } else if (id === 'pattern_type') {
            // update placeholder value to match pattern_type
            var i = 0;
            var options = SEQUENCE_MOTIF_PATTERN_TYPE_OPTIONS;
            for (; i < options.length; i++) {
                if (options[i].key === value) { break; }
            }
            var update = PLACE_HOLDERS.sequenceMotifSearch[i];
            if (update) {
                this.props.dispatchAction(QB_SEQUENCE_MOTIF_SET_PROPS, { count: -1, placeholder: update });
            }

            this.props.dispatchAction(QB_SEQUENCE_MOTIF_SET_PROPS, { count: -1, pattern_type: value });
        } else if (id === 'target') {
            this.props.dispatchAction(QB_SEQUENCE_MOTIF_SET_PROPS, { count: -1, target: value });
        }
    };

    SequenceMotif.prototype.handleCount = function handleCount () {
        this.props.serviceCountSearch(service$2);
    };

    SequenceMotif.prototype.serviceToggle = function serviceToggle () {
        this.props.dispatchAction(QB_SERVICE_SET_OPEN, { service: service$2 });
    };

    SequenceMotif.prototype.render = function render$$1 () {
        var ref = this.props.queryBuilder.services.seqmotif;
        var count = ref.count;
        var pattern_type = ref.pattern_type;
        var open = ref.open;
        var showAnd = ref.showAnd;
        var target = ref.target;
        var value = ref.value;
        var placeholder = ref.placeholder;
        var and = (showAnd) ? 'AND' : null;

        if (!value) { value = ''; } // if undefined or null, QB_INIT will not clear previous value

        var sequenceMotifInput =  React__default.createElement( 'input', { 
                                        style: inputTextStyle$1, type: 'text', id: 'sequence-motif', value: value, onChange: this.handleChange, onClick: this.handleSequenceMotifClick, placeholder: placeholder, autoComplete: 'off' });    

        var serviceOperator = React__default.createElement( 'div', { style: qb.serviceOperator }, and);

        var targetInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.target),
                    React__default.createElement( Select, {
                        id: 'target', options: SEQUENCE_TARGET_OPTIONS, onChange: this.handleChange, value: target, border: border_20, height: 28 }),
                React__default.createElement( Tooltip, { name: 'sequenceMotifTarget', marginTop: 6, marginLeft: 5, marginRight: 10 })
            );        
        
        var patternTypeInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.pattern_type),
                    React__default.createElement( Select, {
                        id: 'pattern_type', options: SEQUENCE_MOTIF_PATTERN_TYPE_OPTIONS, onChange: this.handleChange, value: pattern_type, border: border_20, height: 28 }),
                React__default.createElement( Tooltip, { name: 'sequenceMotifMode', marginTop: 6, marginLeft: 5 })
            );        
        
        return (
            React__default.createElement( 'div', { style: qb.service },
                React__default.createElement( ServiceTab, { open: open, service: service$2, serviceToggle: this.serviceToggle }),
                open &&
                    React__default.createElement( 'table', { style: qb.serviceTable },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, serviceOperator ),
                            React__default.createElement( 'td', { style: qb.serviceTableBody },
                                React__default.createElement( 'div', { style: qb.serviceBody },
                                    React__default.createElement( 'div', null,
                                        sequenceMotifInput
                                    ),
                                    React__default.createElement( 'div', { style: lStyle$3 },
                                        targetInput,
                                        patternTypeInput
                                    ),
                                    React__default.createElement( 'div', { style: rStyle$3 },
                                        React__default.createElement( ServiceBtns, { clear: this.clear, count: count, handleCount: this.handleCount })
                                    )
                                )
                            )
                        )     
                    )
            )    
        )
    };

    return SequenceMotif;
}(React.Component));

var SequenceMotif$1 = connect(mapStateToProps, mapDispatchAllToProps)(SequenceMotif);

/*
    Structure Similarity service component
*/

var file$44 = 'components/query-builder/Structure';
var service$3 = 'structure';
var display = 'inline-block';
var lStyle$4 = Object.assign({}, lStyle, { width: '75%' });
var rStyle$4 = Object.assign({}, rStyle, { width: '25%' });
var entryIdStyle = Object.assign({}, qb.inputTextStyle, { width: 60, marginRight: 10, paddingLeft: 4 });
var radioStyle = {
          display: display
        , marginRight: 8
    };
var propertyStyle = {
          display: display
        , marginRight: 2
    };
var valueStyle = {
          display: display
        , marginRight: 10
    };

var Structure = (function (Component$$1) {
    function Structure(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clear'
            , 'handleCount'
            , 'handleEntryIdChange'
            , 'handleSetProperty'
            , 'handleSetValue'
            , 'retrieveData'
            , 'retrieveDataCallback'
            , 'serviceToggle'
            , 'handleSetOperator'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
        this.state = {};
    }

    if ( Component$$1 ) Structure.__proto__ = Component$$1;
    Structure.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Structure.prototype.constructor = Structure;

    Structure.prototype.componentDidMount = function componentDidMount () {
        var entry_id = this.props.queryBuilder.services.structure.entry_id;
        if (entry_id) { this.retrieveData(entry_id); }
    };

    // clear inputs
    Structure.prototype.clear = function clear () {
        this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, getDefault(service$3));
        this.setState({ assembly_ids: null, asym_ids: null });
    };

    // get count
    Structure.prototype.handleCount = function handleCount () {
        this.props.serviceCountSearch(service$3);
    };

    Structure.prototype.handleEntryIdChange = function handleEntryIdChange (e) {
        var ref = e.target;
        var value = ref.value;
        var entry_id = value.trim().toUpperCase();
        if (entry_id.length > 4) { entry_id = entry_id.substring(0, 4); }
        this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, { entry_id: entry_id, count: -1 });

        if (entry_id.length === 4) {
            this.retrieveData(entry_id);
        } else {
            this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, Object.assign(getDefault(service$3), { entry_id: entry_id }));
            this.setState({ assembly_ids: null, asym_ids: null });
        }
    };    

    Structure.prototype.handleSetOperator = function handleSetOperator (e) {
        var operator = e.target.value;
        this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, { operator: operator, count: -1 });
    }; 

    //asym_id, auth_asym_id 
    Structure.prototype.handleSetProperty = function handleSetProperty (e) {
        var property = e.target.value;
        //console.log(file, 'handleSetProperty', property)
        var ref = this.state;
        var assembly_ids = ref.assembly_ids;
        var asym_ids = ref.asym_ids;
        var value = (property === 'assembly_id') ? assembly_ids[0] : asym_ids[0].asym_id;
        this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, { property: property, value: value, count: -1 });
    };

    Structure.prototype.handleSetValue = function handleSetValue (e) {
        var value = e.target.value;
        //console.log(file, 'handleSetValue', value)
        this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, { value: value, count: -1 });
    };

    // retrieve data by entry_id
    Structure.prototype.retrieveData = function retrieveData (entry_id) {
        //console.log(file, 'retrieveData: entry_id=' + entry_id)
        var url = '/search/structure/' + entry_id;
        getData$1(url, OPTIONS_GET, this.retrieveDataCallback);
    };

    // retrieveData callback
    Structure.prototype.retrieveDataCallback = function retrieveDataCallback (data) {
        //u.logJson(file, data, 'data')
        var assembly_ids = data.assembly_ids;
        var asym_ids = data.asym_ids;
        var msg$$1 = data.msg;
        this.setState({ assembly_ids: assembly_ids, asym_ids: asym_ids, msg: msg$$1 });

        var ref = this.props.queryBuilder.services.structure;
        var property = ref.property;
        var value = ref.value; // may be defaults, or set from request

        if (assembly_ids || asym_ids) {
            if (property === '' && value === '') { // defaults
                if (assembly_ids) {
                    property = 'assembly_id';
                    value = assembly_ids[0];
                } else if (asym_ids) {
                    property = 'asym_id';
                    value = asym_ids[0].asym_id;
                }  
                this.props.dispatchAction(QB_STRUCTURE_SET_PROPS, { property: property, value: value, count: -1 }); 
            }
        }
        //console.log(file + ': retrieveDataCallback: property=' + property + ', value=' + value)
    };

    Structure.prototype.serviceToggle = function serviceToggle () {
        this.props.dispatchAction(QB_SERVICE_SET_OPEN, { service: service$3 });
    };

    Structure.prototype.render = function render$$1 () {
        var ref = this.props.queryBuilder.services.structure;
        var count = ref.count;
        var entry_id = ref.entry_id;
        var showAnd = ref.showAnd;
        var open = ref.open;
        var operator = ref.operator;
        var property = ref.property;
        var value = ref.value;
        //u.logJson(file, this.props.queryBuilder.services.structure, 'structure')

        var and = (showAnd) ? 'AND' : null;
        var serviceOperator = React__default.createElement( 'div', { style: qb.serviceOperator }, and);

        // if these properties are undefined or null, QB_INIT will not clear the previous value
        if (!entry_id) { entry_id = ''; }
        if (!value) { value = ''; }
        if (!property) { property = ''; }

        var ref$1 = this.state;
        var assembly_ids = ref$1.assembly_ids;
        var asym_ids = ref$1.asym_ids;
        var msg$$1 = ref$1.msg;

        var   propertyOptions       // assembly_id|asym_id
            , assemblyIdOptions
            , asymIdOptions
            , options;               // assemblyIdOptions|asymIdOptions

        if (assembly_ids || asym_ids) {
            if (assembly_ids && asym_ids) { propertyOptions = STRUCTURE_PROPERTY_OPTIONS; } // show all
            else if (assembly_ids) { propertyOptions = [STRUCTURE_PROPERTY_OPTIONS[0]]; } // show assembly only
            else if (asym_ids) { propertyOptions = [STRUCTURE_PROPERTY_OPTIONS[1]]; } // show asym only
    
            if (assembly_ids) {
                assemblyIdOptions = [];
                assembly_ids.forEach(function (id) { return assemblyIdOptions.push(id); });
            }
            if (asym_ids) {
                asymIdOptions = [];
                asym_ids.forEach(function (id) { return asymIdOptions.push({ key: id.asym_id, value: id.auth_asym_id }); });
            }

            if (property === 'assembly_id' && assemblyIdOptions) { options = assemblyIdOptions; }
            if (property === 'asym_id' && asymIdOptions) { options = asymIdOptions; }

            if (!options) { msg$$1 = 'No ' + (property === 'assembly_id' ? 'Assembly' : 'Chain') + ' data found for PDB ID ' + entry_id; } // indicates some error state
        }  

        var textInput = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'div', { style: qb.label }, MAP.entry_id),
                React__default.createElement( 'input', { 
                    style: entryIdStyle, type: 'text', value: entry_id, onChange: this.handleEntryIdChange, placeholder: PLACE_HOLDERS.searchEntryId, autoComplete: 'off' })
            );

        var inputs, msgDiv;
        
        if (options) {
            inputs =    React__default.createElement( 'div', { style: inline },
                            React__default.createElement( 'div', { style: propertyStyle },
                                React__default.createElement( Select, {
                                    options: propertyOptions, value: property, onChange: this.handleSetProperty, border: border_20 })
                            ),
                            React__default.createElement( 'div', { style: valueStyle },
                                React__default.createElement( Select, {
                                    options: options, value: value, onChange: this.handleSetValue, border: border_20 })
                            ),
                            React__default.createElement( 'div', { style: radioStyle },
                                React__default.createElement( 'input', { type: 'radio', name: 'operator', value: 'strict_shape_match', onClick: this.handleSetOperator, checked: operator === 'strict_shape_match' })
                            ),
                            React__default.createElement( 'div', { style: qb.label }, MAP.strict_shape_match),
                            React__default.createElement( 'div', { style: radioStyle },
                                React__default.createElement( 'input', { type: 'radio', name: 'operator', value: 'relaxed_shape_match', onClick: this.handleSetOperator, checked: operator === 'relaxed_shape_match' })
                            ),
                            React__default.createElement( 'div', { style: qb.label }, MAP.relaxed_shape_match)
                        );
        }

        if (msg$$1) { msgDiv = React__default.createElement( 'div', { style: qb.label }, msg$$1); }

        return (
            React__default.createElement( 'div', { style: qb.service },
                React__default.createElement( ServiceTab, { open: open, service: service$3, serviceToggle: this.serviceToggle }),
                open &&
                    React__default.createElement( 'table', { style: qb.serviceTable },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, serviceOperator ),
                            React__default.createElement( 'td', { style: qb.serviceTableBody },
                                React__default.createElement( 'div', { style: qb.serviceBody },
                                    React__default.createElement( 'div', { style: lStyle$4 },
                                        textInput,
                                        inputs,
                                        msgDiv
                                    ),
                                    React__default.createElement( 'div', { style: rStyle$4 },
                                        React__default.createElement( ServiceBtns, { clear: this.clear, count: count, handleCount: this.handleCount })
                                    )
                                )
                            )
                        )     
                    )    
            )   
        )
    };

    return Structure;
}(React.Component));

var Structure$1 = connect(mapStateToProps, mapDispatchAllToProps)(Structure);

var file$48 = 'components/query-builder/DateInput';

var textInput$1 = {
        border: 'none'
        , width: 250
        , height: '26px'
        , paddingLeft: 4
    };

var DateInput = (function (Component$$1) {
    function DateInput(props) {
        Component$$1.call(this, props);
        this.id = getGuid();
    }

    if ( Component$$1 ) DateInput.__proto__ = Component$$1;
    DateInput.prototype = Object.create( Component$$1 && Component$$1.prototype );
    DateInput.prototype.constructor = DateInput;

    DateInput.prototype.componentDidMount = function componentDidMount () {
        console.log(file$48, 'componentDidMount');
        setDatePicker(this.id, 'input');
    };

    DateInput.prototype.componentWillUnmount = function componentWillUnmount () {
        console.log(file$48, 'componentWillUnmount', this.id);
        removeDatePicker(this.id);
    };

    DateInput.prototype.render = function render$$1 () {
        var ref = this.props;
        var rule = ref.rule;
        var fo = ref.fo;
        var ref$1 = rule.inputs[0];
        var guid = ref$1.guid;
        var value = ref$1.value;
        var placeholder = fo.placeholder;

        return (
            React__default.createElement( 'tr', null,
                React__default.createElement( 'td', { className: 'calendar-input' },
                    React__default.createElement( 'div', { id: this.id },
                        React__default.createElement( 'div', { className: 'input-group date' },
                            React__default.createElement( 'input', {
                                type: 'text', style: textInput$1, value: value, id: guid, name: rule.id, placeholder: placeholder, autoComplete: 'off', readOnly: true }),
                            React__default.createElement( 'span', { className: 'input-group-addon' }, iconUp)
                        )
                    )
                )
            )
        )
    };

    return DateInput;
}(React.Component));

var DateInput$1 = connect(mapStateToProps, mapDispatchNoneToProps)(DateInput);

var file$49 = 'components/query-builder/DateRange';

var dateInput = {
          border: 'none'
        , width: 75
        , height: '26px'
        , paddingLeft: 4
    };

var DateRange = (function (Component$$1) {
    function DateRange(props) {
        Component$$1.call(this, props);
        this.id = getGuid();
    }

    if ( Component$$1 ) DateRange.__proto__ = Component$$1;
    DateRange.prototype = Object.create( Component$$1 && Component$$1.prototype );
    DateRange.prototype.constructor = DateRange;

    DateRange.prototype.componentDidMount = function componentDidMount () {
        console.log(file$49, 'componentDidMount');
        setDatePicker(this.id, 'range');
    };

    DateRange.prototype.componentWillUnmount = function componentWillUnmount () {
        console.log(file$49, 'componentWillUnmount', this.id);
        removeDatePicker(this.id);
    };

    DateRange.prototype.render = function render$$1 () {
        var ref = this.props;
        var rule = ref.rule;
        var fo = ref.fo;
        var to = rule.to;
        var from = rule.from;
        var min = fo.min;
        var max = fo.max;

        return (
            React__default.createElement( 'tr', null,
                React__default.createElement( 'td', null,
                    React__default.createElement( 'div', { id: this.id },
                        React__default.createElement( 'div', { className: 'input-daterange input-group', id: 'datepicker' },
                            React__default.createElement( 'input', {
                                type: 'text', style: dateInput, name: 'start', id: 'start' + rule.id, value: from, placeholder: min, autoComplete: 'off', readOnly: true }),
                            React__default.createElement( 'span', { className: 'input-group-addon input-group-addon-to', id: rule.id }, "to"),
                            React__default.createElement( 'input', {
                                type: 'text', style: dateInput, name: 'end', id: 'end' + rule.id, value: to, placeholder: max, autoComplete: 'off', readOnly: true })
                        )
                    )
                )
            )
        )
    };

    return DateRange;
}(React.Component));

var DateRange$1 = connect(mapStateToProps, mapDispatchNoneToProps)(DateRange);

/*
    This component retrieves data from server to provide a list of suggestions based on user input.
    
    It follows the same pattern as all components containing menus. 
    See events.js for details of required common properties and functions.
*/
var file$50 = 'components/query-builder/Suggester';

var textInput$2 = {
          border: 'none'
        , minWidth: 240
        , height: '26px'
        , paddingLeft: 4
    };
var menuStyle$1={ width: '100%' };
var MIN_VAL_LEN = 1; // assumes >= operator

var Suggester = (function (Component$$1) {
    function Suggester(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleInputChange'
            , 'handleInputChangeCallback'
            , 'handleInputClick'
            , 'handleMenuSelect'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list

        this.fo  = props.fo; // field obj
        this.nested_attribute_value = props.nested_attribute_value;    
        this.guid = getGuid();
        this.name = 'suggester';
        this.state = getDefault('menu-state');
        this.baseUrl = '/search/suggester/' + this.fo.attribute;
    }

    if ( Component$$1 ) Suggester.__proto__ = Component$$1;
    Suggester.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Suggester.prototype.constructor = Suggester;

    Suggester.prototype.handleInputChange = function handleInputChange (e) {
        var ref = e.target;
        var value = ref.value;
        this.setValue(value);

        if (value.length >= MIN_VAL_LEN) {
            value = encodeURIComponent(value);
            var url = this.baseUrl + '/' + value;
            if (this.nested_attribute_value) { url += '/' + this.nested_attribute_value; }

            getData$1(url, OPTIONS_GET, this.handleInputChangeCallback);
        } else {
            updateMenu(getDefault('menu-state'), this);
        }
    };

    Suggester.prototype.handleInputChangeCallback = function handleInputChangeCallback (menuItems) {
        console.log(file$50, 'handleInputChangeCallback: menuItems.length=' + menuItems.length);

        if (menuItems && menuItems.length > 0) { updateMenu({ menuItems: menuItems, menuIndex: 0, menuOpen: true }, this); }
        else { updateMenu(getDefault('menu-state'), this); }
    };

    Suggester.prototype.handleInputClick = function handleInputClick (e) {
        var ref = e.target;
        var value = ref.value;
        value = value.trim();
        if (value.length >= MIN_VAL_LEN) {
            if (this.state.menuItems) { updateMenu({ menuOpen: true }, this); }
            // else // TODO get suggestions?
        }  
    };

    Suggester.prototype.handleMenuSelect = function handleMenuSelect (value) {
        console.log(value);
        this.setValue(value);
        updateMenu({ menuOpen: false }, this);
    };

    Suggester.prototype.setValue = function setValue (value) {
        value = removeHtml(value);
        var ref = this.props;
        var guid = ref.guid;
        var handleSetMenuValue = ref.handleSetMenuValue; // note: guid here is the Input guid passed in props, NOT this.guid
        handleSetMenuValue(guid, value);
    };

    Suggester.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var fo = ref.fo;
        var placeholder = ref.placeholder;
        var value = ref.value;
        var ref$1 = this.state;
        var menuIndex = ref$1.menuIndex;
        var menuItems = ref$1.menuItems;
        var menuOpen = ref$1.menuOpen;
        
        return (
            React__default.createElement( 'div', { id: 'menu-container-' + this.guid, className: 'input-menu-container' },
                React__default.createElement( 'input', {  type: 'text', style: textInput$2, className: 'input-menu-text', onClick: function (e) { return this$1.handleInputClick(e); }, onChange: this.handleInputChange, placeholder: placeholder, autoComplete: 'off', spellCheck: 'false', value: value }),
                menuOpen && React__default.createElement( Menu, { 
                    menuItems: menuItems, menuIndex: menuIndex, handleMenuSelect: this.handleMenuSelect, menuStyle: menuStyle$1 })         
            )
        )
    };

    return Suggester;
}(React.Component));

var file$47 = 'components/query-builder/Input';

var textInput = {
          border: 'none'
        , minWidth: 240
        , height: '26px'
        , paddingLeft: 4
    };
var numberInputStyle = Object.assign({}, textInput, { width: 75, minWidth: 75});
var ruleLabel = {
          border: 'none'
        , lineHeight: '28px'
        , userSelect: 'none'
        , padding: '0 4px'
    };

var Input = (function (Component$$1) {
    function Input(props) {
        var this$1 = this;

        Component$$1.call(this, props);

        var funcs = [
            'handleAddValue',
            'handleDeleteInput',
            'handleSetMenuValue',
            'handleSetValue'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list
    }

    if ( Component$$1 ) Input.__proto__ = Component$$1;
    Input.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Input.prototype.constructor = Input;

    Input.prototype.handleAddValue = function handleAddValue () {
        var ref = this.props;
        var rule = ref.rule;
        var addInput = ref.addInput;
        addInput(rule);
    };

    Input.prototype.handleDeleteInput = function handleDeleteInput (guid) {
        var ref = this.props;
        var rule = ref.rule;
        var deleteInput = ref.deleteInput;
        deleteInput(rule, guid);
    };

    Input.prototype.handleSetMenuValue = function handleSetMenuValue (guid, value) {
        var ref = this.props;
        var rule = ref.rule;
        var setValue = ref.setValue;
        setValue(rule.id, guid, value);
    };

    Input.prototype.handleSetValue = function handleSetValue (e) {
        var ref = this.props;
        var rule = ref.rule;
        var setValue = ref.setValue;
        var ref$1 = e.target;
        var id = ref$1.id;
        var value = ref$1.value;
        setValue(rule.id, id, value);
    };

    Input.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var rule = ref.rule;
        var fo = ref.fo;
        var operator = rule.operator;
        var units = rule.units;
        var attribute = fo.attribute;
        
        var isDate$$1 = isDate(fo);
        var isRange$$1 = isRange(operator);
        var unitsTd = (units) ? React__default.createElement( 'td', { style: ruleLabel }, UNITS[units]) : null;

        if (isDate$$1) {
            return (isRange$$1)
                ? React__default.createElement( DateRange$1, { rule: rule, fo: fo })
                : React__default.createElement( DateInput$1, { rule: rule, fo: fo })
        } else if (isRange$$1) {
            var from = rule.from;
            var to = rule.to;
            var min, max;
            if (attribute !== 'rcsb_binding_affinity.value') { // max/min are inaccurate because there are multiple 'types' from binding_affinity
                max = fo.max;
                min = fo.min;
            }

            return (
                React__default.createElement( 'tr', null,
                    React__default.createElement( 'td', null,
                        React__default.createElement( 'input', {
                            style: numberInputStyle, type: 'text', value: from, id: 'from', onChange: this.handleSetValue, placeholder: min, autoComplete: 'off' })
                    ),
                    React__default.createElement( 'td', { style: ruleLabel }, React__default.createElement( 'i', null, "to" )),
                    React__default.createElement( 'td', null,
                        React__default.createElement( 'input', {
                            style: numberInputStyle, type: 'text', value: to, id: 'to', onChange: this.handleSetValue, placeholder: max, autoComplete: 'off' })
                    ),
                    unitsTd
                )    
            )
        } else {
            var ref$1 = this.props;
            var i = ref$1.i;
            var input = ref$1.input;
            var inputsLen = ref$1.inputsLen;

            var nested_attribute_value = rule.nested_attribute_value;
            var placeholder = rule.placeholder;
            var context = fo.context;
            var enumeration = fo.enumeration;
            var is_iterable = fo.is_iterable;
            var type = fo.type;
            var guid = input.guid;
            var value = input.value;

            var showAdd = ((type === 'string' || enumeration) && !is_iterable && attribute !== 'pdbx_database_status.pdb_format_compatible');

            var inputRemove, inputAdd, inputOr;

            // remove input 'x' icon
            if (inputsLen > 1) { inputRemove = React__default.createElement( 'td', { className: 'input-remove', onClick: function () { return this$1.handleDeleteInput(guid); } }, iconRemove); }

            // add input
            if (showAdd && i === inputsLen - 1) { inputAdd = React__default.createElement( 'td', { className: 'input-add', onClick: this.handleAddValue }, "Add"); }
            
            // or input
            if (showAdd && i !== inputsLen - 1) { inputOr = React__default.createElement( 'td', { className: 'input-or' }, "OR"); }

            
            var inputType;
            if (enumeration && operator === 'exact_match') { inputType = 'select'; } // select dropdown
            else if (context && context.includes('exact-match')) { inputType = 'suggester'; } // autosuggest menu
            else { inputType = 'text'; }

            console.log(file$47, 'operator=' + operator, 'context=' + toJson(context), 'inputType=' + inputType);

            return (
                React__default.createElement( 'tr', null,
                    inputType === 'select' && 
                        React__default.createElement( 'td', null,
                            React__default.createElement( Select, {
                                header: '-- Select value --', options: enumeration, value: value, id: guid, onChange: this.handleSetValue, height: 26 })
                        ),

                    inputType === 'suggester' && 
                        React__default.createElement( 'td', null,
                            React__default.createElement( Suggester, {
                                fo: fo, guid: guid, handleSetMenuValue: this.handleSetMenuValue, value: value, nested_attribute_value: nested_attribute_value, placeholder: placeholder }) 
                        ),

                    inputType === 'text' &&
                        React__default.createElement( 'td', null,
                            React__default.createElement( 'input', {
                                style: textInput, type: 'text', value: value, id: guid, onChange: this.handleSetValue, placeholder: placeholder, autoComplete: 'off' })
                        ),

                    unitsTd,
                    inputRemove,
                    inputAdd,
                    inputOr

                    /* remove input (x icon)
                    { inputsLen > 1 && <td className='input-remove' onClick={() => this.handleDeleteInput(guid)}>{s.iconRemove}</td> }

                    {/ add input
                    { showAdd && i === inputsLen - 1 && <td className='input-add' onClick={this.handleAddValue}>Add</td> }
                    { showAdd && i !== inputsLen - 1 && <td className='input-or' >OR</td> }
                    */
                )
            )
        }
    };

    return Input;
}(React.Component));

var Input$1 = connect(mapStateToProps, mapDispatchAllToProps)(Input);

/* 
    A Rule selector component.

    It implements a common menu interface as defined in /events.js. 

    This component allows for user input that filters the menu item list
*/

var placeholder = '-- Enter and/or select a field name --';
var menuWidth = 350;
var arrowWidth = 15;

// css styles
var menuContainer$1 = { position: 'relative' };
var inputTbl = { border: border_10, borderCollapse: 'collapse' };
var inputText = {
          border: 'none'
        , width: menuWidth
        , height: '26px'
        , padding: '0 0 0 4px'
    };
var inputTd = { 
          border: border_10
    };
var xTd = {
          width: arrowWidth
        , border: border_10
        , textAlign: 'center'
        , backgroundColor: white
        , lineHeight: '26px'
        , color: color_60
    };
var snglArrowTd = { 
          width: arrowWidth
        , border: border_10
        , textAlign: 'center'
        , backgroundColor: white_50
    };
var snglArrowSpan = { marginTop: 8 };
var dblArrowTd = { 
          width: arrowWidth 
        , border: border_10
        , backgroundColor: white_50
    };
var dblArrowOuter = { position: 'relative' };
var dblArrowUpper = { 
          position: 'absolute'
        , top: 7
        , left: 3 };
var dblArrowLower = { 
          position: 'absolute'
        , top: 12
        , left: 3 };
var selectorMenu = {
          position: 'absolute'
        , top: 28
        , maxHeight: (getNumSearchGroups() + 1) * 22 + 1 // each menuItem is 22px high
        , zIndex: 1000
        , backgroundColor: '#fff'
        , border: border_20
        , borderTop: 'none'
        , overflowY: 'auto'
        , width: menuWidth + (arrowWidth + 1) * 3 // (arrow td width + border width)
        , boxShadow: '0 10px 10px rgba(0, 0, 0, 0.2)'
    };
var itemDiv = {
          padding: padding
        , userSelect: 'none'
        , cursor: 'pointer'
        , borderBottom: '1px solid #ddd'
    };
var headerDiv = Object.assign({}, itemDiv, { 
          borderBottom: '1px solid #ccc'
        , fontStyle: 'italic'
    });
var headerTbl = { width: '100%' };
var headerIcon = {  textAlign: 'right' };
var checkStyle = Object.assign({}, inline, { 
          fontSize: 10
        , color: 'rgba(51, 122, 183, 0.8)'
        , width: 16
        , textAlign: 'center'
        , padding: 0 });

var SelectorSearch = (function (Component$$1) {
    function SelectorSearch(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clearInput'
            , 'closeMenu'
            , 'getDefaultState'
            , 'handleArrowClick'  
            , 'handleInputChange'
            , 'handleInputClick'
            , 'handleMenuHeaderClick'
            , 'handleMenuSelect'
        ]; // function list
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list

        this.guid = getGuid();
        this.name = 'selector-search';
        this.state = this.getDefaultState();
    }

    if ( Component$$1 ) SelectorSearch.__proto__ = Component$$1;
    SelectorSearch.prototype = Object.create( Component$$1 && Component$$1.prototype );
    SelectorSearch.prototype.constructor = SelectorSearch;

    SelectorSearch.prototype.componentDidMount = function componentDidMount () {
        var this$1 = this;

        var ref = this.props;
        var attribute = ref.attribute;
        var ref$1 = this.state;
        var menuItems = ref$1.menuItems;
        if (attribute) {
            for (var i = 0, n = menuItems.length; i < n; i++) {
                var item = menuItems[i];
                if (isItem$1(item) && item.attribute === attribute) {
                    this$1.setState({ headerIndex: item.header_index });
                    break
                }    
            }
            this.setState({ value: metadata[attribute].display_name });
        }
    };

    // clear input field and rule attribute
    SelectorSearch.prototype.clearInput = function clearInput () {
        this.props.setAttribute(null); // clear Rule attr
        updateMenu(this.getDefaultState(), this);
    };

    // this function is also called from events.js if user clicks anywhere on the screen outside of the menu
    SelectorSearch.prototype.closeMenu = function closeMenu () {
        var ref = this.state;
        var menuOpen = ref.menuOpen;
        var value = ref.value;
        var valueSrc = ref.valueSrc;
            
        // check if user value matches a menu item, otherwise reset attribute to null
        if (menuOpen) {
            if (valueSrc === 'user') {
                var item = getSelectorItem(value); // returns matching item or null
                this.props.setAttribute(item); // set Rule attr,  or clear Rule attr if item is null
                if(item) {
                    value = item.name;
                    valueSrc = 'menu';
                }
            }
            var state = Object.assign(this.getDefaultState(), { menuOpen: false, value: value, valueSrc: valueSrc });
            updateMenu(state, this);
        }
    };

    // return a default state
    //      - menuType - filter|collapse|expand 
    //      - valueSrc - menu|user - value is either from menu or from user input
    SelectorSearch.prototype.getDefaultState = function getDefaultState () {
        return { headerIndex: -1, menuIndex: -1, menuItems: selectorItems, menuOpen: false, menuType: 'collapse', value: '', valueSrc: 'menu'  }
    };    

    // input field single/double up/down arrow is clicked
    SelectorSearch.prototype.handleArrowClick = function handleArrowClick (type) {
        var ref = this.state;
        var menuOpen = ref.menuOpen;
        var menuType = ref.menuType;
        var value = ref.value;
        var valueSrc = ref.valueSrc;
        var state = Object.assign(this.getDefaultState(), { value: value, valueSrc: valueSrc });
        if (!(menuOpen && menuType === type)) { Object.assign(state, { menuOpen: true, menuType: type }); }
        updateMenu(state, this);        
    };

    // input field user-input value is changed
    SelectorSearch.prototype.handleInputChange = function handleInputChange (o) {
        var value = (typeof o === 'string') ? o : o.target.value;
        console.log('value=' + value);

        var state = Object.assign(this.getDefaultState(), { value: value });  //
        
        if (value.length === 0) {
            Object.assign(state, { menuOpen: true });
        } else if (value.length > 1) {
            var filterItems = [];
            var headerIndexes = [];
            var valueLc = value.toLowerCase();
            selectorItems.forEach(function (item) {
                //u.logJson(file, item)
                if (isItem$1(item)) {
                    var nameLc = item.nameLc;
                    var header_index = item.header_index;
                    if(nameLc.indexOf(valueLc) !== -1) {
                        filterItems.push(item);
                        headerIndexes.push(header_index);
                    }
                } else {
                    filterItems.push(item);
                }  
            });
            filterItems = filterItems.filter(function (item) { return (isItem$1(item)) || headerIndexes.includes(item.index); }); // remove headers without items
            if (filterItems.length > 0) { Object.assign(state, { menuItems: filterItems, menuOpen: true, menuType: 'filter', valueSrc: 'user' }); }
        }
        updateMenu(state, this);
    };

    // input field is clicked
    SelectorSearch.prototype.handleInputClick = function handleInputClick () {
        //u.logJson(file, this.state, 'this.state')
        var ref = this.state;
        var menuOpen = ref.menuOpen;
        var value = ref.value;
        
        if (menuOpen) {
            this.closeMenu();
        } else {
            var item = getSelectorItem(value); // returns matching item or null
            if (item) {
                var state = Object.assign(this.getDefaultState(), { headerIndex: item.header_index, menuOpen: true, value: value });
                updateMenu(state, this);
            } else {
                this.handleInputChange(value);
            }
        }
    };

    // menu item is selected
    SelectorSearch.prototype.handleMenuSelect = function handleMenuSelect (item) {
        updateMenu({ menuOpen: false, value: item.name, valueSrc: 'menu' }, this);
        this.props.setAttribute(item); // set attribute for rule
    };

    // menu header item is clicked - open or close the search group
    SelectorSearch.prototype.handleMenuHeaderClick = function handleMenuHeaderClick (index) { 
        var headerIndex = (index === this.state.headerIndex) ? -1 : index;
        updateMenu({ headerIndex: headerIndex, menuOpen: true }, this); // note: ev.updateMenu() requires menuOpen to be explicitly set
    };

    SelectorSearch.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var attribute = ref.attribute;
        var nested_attribute_value = ref.nested_attribute_value;

        var ref$1 = this.state;
        var headerIndex = ref$1.headerIndex;
        var menuIndex = ref$1.menuIndex;
        var menuItems = ref$1.menuItems;
        var menuOpen = ref$1.menuOpen;
        var menuType = ref$1.menuType;
        var value = ref$1.value;
        var valueSrc = ref$1.valueSrc;

        // single up/down arrow
        var snglArrowClass = 'glyphicon glyphicon-triangle-' + ((menuOpen && menuType === 'collapse') ? 'top' : 'bottom');
        var snglArrow = React__default.createElement( 'span', { style: snglArrowSpan, className: snglArrowClass });
        
         // double up/down arrow
        var dblArrowClass = 'glyphicon glyphicon-triangle-' + ((menuOpen && menuType === 'expand') ? 'top' : 'bottom');
        var dblArrow =    React__default.createElement( 'div', { style: dblArrowOuter },
                                React__default.createElement( 'span', { style: dblArrowUpper, className: dblArrowClass }),
                                React__default.createElement( 'span', { style: dblArrowLower, className: dblArrowClass })
                            );
            
        var xVal = (value === '') ? '' : 'x';

        return (
            React__default.createElement( 'div', { id: 'menu-container-' + this.guid, style: menuContainer$1 },
                React__default.createElement( 'table', { style: inputTbl },
                    React__default.createElement( 'tr', null,     
                        React__default.createElement( 'td', { style: inputTd },
                            React__default.createElement( 'input', {
                                style: inputText, type: 'text', value: value, placeholder: placeholder, autoComplete: 'off', spellCheck: 'false', onChange: this.handleInputChange, onClick: this.handleInputClick })
                        ),
                        React__default.createElement( 'td', { style: xTd, onClick: this.clearInput }, xVal),
                        React__default.createElement( 'td', { style: snglArrowTd, onClick: function () { return this$1.handleArrowClick('collapse'); } }, snglArrow),
                        React__default.createElement( 'td', { style: dblArrowTd, onClick: function () { return this$1.handleArrowClick('expand'); } }, dblArrow)
                    )    
                ),    
                menuOpen &&
                    React__default.createElement( 'div', { style: selectorMenu },  
                        menuItems.map(function (item, i) {
                            if (item.type === 'header') {
                                var name = item.name;
                                var index = item.index;
                                var icon = (menuType === 'collapse') ? (headerIndex === index) ? iconUp : iconDown : null;
                                
                                return (
                                    React__default.createElement( 'div', {    style: headerDiv, className: 'selector-header', key: 'h' + index, onClick: function () { return this$1.handleMenuHeaderClick(item.index); } },
                                        React__default.createElement( 'table', { style: headerTbl },
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, name ),
                                                React__default.createElement( 'td', { style: headerIcon }, icon)
                                            )
                                        )        
                                    )
                                )
                            } else if ( menuType === 'expand' || 
                                        menuType === 'filter' || 
                                        item.header_index === headerIndex || 
                                        (menuType !== 'filter' && item.header_index === -1)) {
                                
                                var check = (item.type === 'item-nested')
                                        ? (item.attribute === attribute && item.nested_attribute_value === nested_attribute_value) ? iconCheck : null
                                        : (item.attribute === attribute) ? iconCheck : null;

                                var cName = (i === menuIndex) ? 'selector-item-selected' : 'selector-item';
                            
                                return (
                                    React__default.createElement( 'div', {    id: 'menu' + i, key: 'i' + i, style: itemDiv, className: cName, onClick: function () { return this$1.handleMenuSelect(item); } },
                                        React__default.createElement( 'div', { style: checkStyle }, check), item.name
                                    )
                                )   
                            }
                        })
                    )    
            )
        )
    };

    return SelectorSearch;
}(React.Component));

// return the selectorItem that matches (ignoring case) 'value', otherwise return null
function getSelectorItem(value) {
    var valueLc = value.toLowerCase();
    for (var i = 0, n = selectorItems.length; i < n; i++) {
        var item = selectorItems[i];    
        if (isItem$1(item) && item.nameLc === valueLc) { return item }
    }
    return null
}

// return true if 'item' is of type 'item' or 'item-nested'
function isItem$1(item) {
    return item.type === 'item' || item.type === 'item-nested'
}

var file$46 = 'components/query-builder/Rule';

var notLabel = Object.assign({}, inline, {
          textAlign: 'center'
        , height: 28
        , lineHeight: '28px'
        , fontWeight: 'bold'
        , userSelect: 'none'
        , padding: '0 4px'
    });
var ruleSm = { // rule-small
          paddingBottom: 2
        , borderBottom: border_10
        , marginBottom: 4
    };
var operatorsStyle = Object.assign({}, inline, { marginRight: 2 });
var grpSm = { marginBottom: 2, marginRight: 2 };
var grp =  Object.assign({}, inline, grpSm);
    
var Rule = (function (Component$$1) {
    function Rule(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleCount'
            , 'handleRemoveRule'
            , 'handleSetAttribute'
            , 'handleSetNot'
            , 'handleSetOperator'
            , 'handleSetType'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list
        this.guid = getGuid();
    }

    if ( Component$$1 ) Rule.__proto__ = Component$$1;
    Rule.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Rule.prototype.constructor = Rule;

    Rule.prototype.handleCount = function handleCount () {
        var ref = this.props;
        var rule = ref.rule;
        var countSearch = ref.countSearch;
        countSearch(rule);
    };

    Rule.prototype.handleRemoveRule = function handleRemoveRule () {
        var ref = this.props;
        var rule = ref.rule;
        var group = ref.group;
        var deleteRule = ref.deleteRule;
        deleteRule(group.id, rule.id);
    };

    Rule.prototype.handleSetAttribute = function handleSetAttribute (item) {
        var ref = this.props;
        var rule = ref.rule;
        var setAttribute = ref.setAttribute;
        setAttribute(rule.id, item);
    };

    Rule.prototype.handleSetNot = function handleSetNot () {
        var ref = this.props;
        var rule = ref.rule;
        var setNot = ref.setNot;
        setNot(rule.id);
    };

    Rule.prototype.handleSetOperator = function handleSetOperator (e) {
        console.log(file$46, 'handleSetOperator', e.target.value);
        var ref = this.props;
        var rule = ref.rule;
        var setOperator = ref.setOperator;
        setOperator(rule.id, e.target.value);
    };

    Rule.prototype.handleSetType = function handleSetType (e) {
        console.log(file$46, 'handleSetType', e.target.value);
    };

    Rule.prototype.render = function render$$1 () {
        var ref = this.props;
        var cw = ref.cw;
        var rule = ref.rule;
        var group = ref.group;
        var index = ref.index;
        var attribute = rule.attribute;
        var nested_attribute = rule.nested_attribute;
        var nested_attribute_value = rule.nested_attribute_value;
        var count = rule.count;
        var not = rule.not;
        var operator = rule.operator;
        var inputs = rule.inputs;
        var logical_operator = group.logical_operator;
        var sm = (cw === SM || cw === XS); // small container width

        var grpStyle = sm ? grpSm : grp;
        var grpBtnStyle = clone(grpStyle);
        delete grpBtnStyle.marginRight;

        // define rule elements
        //      - logical operator and selector will always be present
        //      - remaining elements will only be present if attribute is defined and corresponding fo object is found

        // logical operator
        var logicalOperator = React__default.createElement( 'div', { style: qb.logicalOperator }, index > 0 && React__default.createElement( 'strong', null, logical_operator.toUpperCase() ));

        // selector
        var ruleSelector =    React__default.createElement( 'div', { style: grpStyle },
                                    React__default.createElement( SelectorSearch, {
                                        setAttribute: this.handleSetAttribute, attribute: attribute, nested_attribute: nested_attribute, nested_attribute_value: nested_attribute_value })
                                );

        var   ruleNot
            , ruleOperators
            , ruleInputs
            , inputGrp // combines ruleNot, ruleOperators, ruleNotBtn, ruleInputs 
            , ruleNotBtn
            , ruleCount
            , ruleStyle = inline 
            , nestedContext;

        if (attribute) { // attribute is defined
            var fo = getFieldObj(attribute);
            if (fo) { // fo object is found
                var operators = fo.operators;

                // not
                if (not) { ruleNot = React__default.createElement( 'div', { style: notLabel }, "NOT"); }

                var operatorOptions;
                if (operators && operators.length > 0) {
                    operatorOptions = [];
                    operators.forEach(function (op) { return operatorOptions.push({ key: op, value: OPERATOR_MAP[op] }); });
                }

                // rule operators
                if (operatorOptions && attribute !== 'full_text') {
                    ruleOperators =  
                        React__default.createElement( 'div', { style: operatorsStyle },
                            React__default.createElement( Select, {
                                options: operatorOptions, value: operator, onChange: this.handleSetOperator, border: border_20 })
                        );         
                }

                if (operator !== 'exists') {
                    // inputs
                    var inputsLen = inputs.length;
                    if (inputsLen > 0) {
                        ruleInputs =    
                            React__default.createElement( 'div', { style: inline },
                                React__default.createElement( 'table', { className: 'qb-rule-inputs' },
                                    inputs.map( function (input, i) {
                                        return React__default.createElement( Input$1, {
                                                    key: input.guid, rule: rule, fo: fo, input: input, i: i, inputsLen: inputsLen })
                                    })
                                )
                            ); 
                    }
                }

                // input grp
                inputGrp = (ruleNot || ruleOperators || ruleInputs) ? React__default.createElement( 'div', { style: grpStyle }, ruleNot, ruleOperators, ruleInputs) : null;

                // not btn
                var notIcon = (not) ? iconMinus : iconPlus;
                if (attribute !== 'full_text') {
                    ruleNotBtn = React__default.createElement( 'div', { style: btnRt, className: 'qb-btn', onClick: this.handleSetNot }, notIcon, " NOT"); 
                }

                // count btn
                ruleCount = (typeof count === 'undefined' || count === -1) 
                        ? React__default.createElement( 'div', { style: btnRt, className: 'qb-btn', onClick: this.handleCount }, "Count")
                        : React__default.createElement( 'div', { style: btnRt }, count);      

            } else {
                console.error(file$46, ': fo NOT FOUND for ' + attribute);
            }
        }

        // remove btn
        var ruleRemove = React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: this.handleRemoveRule }, iconRemove);
        
        // btn grp
        var btnGrp = React__default.createElement( 'div', { style: grpBtnStyle }, ruleNotBtn, ruleCount, ruleRemove);

        return (
            React__default.createElement( 'div', { id: 'rule-' + this.guid, style: sm ? ruleSm : null },
                React__default.createElement( 'div', { style: inline }, logicalOperator),
                React__default.createElement( 'div', { style: ruleStyle },
                    ruleSelector,
                    inputGrp,
                    btnGrp,
                    nestedContext
                ) 
            )
        )
    };

    return Rule;
}(React.Component));

var Rule$1 = connect(mapStateToProps, mapDispatchAllToProps)(Rule);

/*
    Query Builder Group node, which may contain nested Group nodes.

    Note: 'connect' does NOT work for recursively nested components:
        
        export default connect(c.mapStateToProps, c.mapDispatchAllToProps)(Group)

    Only the root Group component receives state and dispatch - props must be explicitly passed to subcomponents
*/

// css inline styles
var rootStyle =  {
        display: 'inline-block'
        // , backgroundColor: st.color_04
    };
var groupStyle = Object.assign({}, rootStyle, { 
          border: border_10
        , padding: '4px 4px 2px 4px'
        , backgroundColor: color_04
        , marginBottom: 4 });

var Group = (function (Component$$1) {
    function Group(props) {
        Component$$1.call(this, props);
        this.handleClick = this.handleClick.bind(this);
    }

    if ( Component$$1 ) Group.__proto__ = Component$$1;
    Group.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Group.prototype.constructor = Group;

    Group.prototype.handleClick = function handleClick (op) {
        var ref = this.props;
        var handleTextClick = ref.handleTextClick;
        var group = ref.group;
        var parentGroup = ref.parentGroup;
        // note: parentGroupId is only needed for deleteGroup - if this group is the root group, there will be no delete button
        var parentGroupId = (parentGroup) ? parentGroup.id : null;
        handleTextClick(group.id, parentGroupId, op);
    };

    Group.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var group = ref.group;
        var parentGroup = ref.parentGroup;
        var handleTextClick = ref.handleTextClick;
        var index = ref.index;
        var is_root = group.is_root;
        var items = group.items; 

        var grpStyle = (is_root) ? rootStyle : groupStyle;
        //u.logJson(file, grpStyle, 'grpStyle: is_root=' + is_root + c.SEPARATOR)

        var addGroupBtnStyle = (is_root) ? btn : btnRt;
        var addGroupText = (is_root) ? 'Add Group' : 'Add Subgroup';

        return (
            React__default.createElement( 'div', { id: 'group-is-root-' + is_root },
                !is_root &&
                    React__default.createElement( 'div', { style: qb.logicalOperator },
                        index > 0 && React__default.createElement( 'span', null, parentGroup.logical_operator.toUpperCase() )
                    ),
                React__default.createElement( 'div', { style: grpStyle },
                    items.map(function (item, index) {
                        if (item.type === 'group') {
                            return (
                                React__default.createElement( Group, {  key: item.id, group: item, parentGroup: group, handleTextClick: handleTextClick, index: index }))
                        } else {
                            return (
                                React__default.createElement( Rule$1, {   key: item.id, rule: item, group: group, index: index, guid: item.id }))
                        }
                    }),

                    React__default.createElement( 'div', { style: qb.logicalOperator, onClick: function () { return this$1.handleClick('and-or'); } },
                        items.length > 1 && React__default.createElement( 'div', { style: btn, className: 'qb-btn' }, "AND / OR")
                    ),     

                    !is_root && React__default.createElement( 'div', { style: btnRt, className: 'qb-btn', onClick: function () { return this$1.handleClick('addRule'); } }, "Add Field"),
                    React__default.createElement( 'div', { style: addGroupBtnStyle, className: 'qb-btn', onClick: function () { return this$1.handleClick('addGroup'); } }, addGroupText),
                    !is_root && React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: function () { return this$1.handleClick('deleteGroup'); } }, "Remove Group") 
                )
            )
        )
    };

    return Group;
}(React.Component));

/* Text service */

var file$45 = 'components/query-builder/Text';
var service$4 = 'text';

var Text = (function (Component$$1) {
    function Text(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleCount'  
            , 'handleTextClick'
            , 'serviceToggle'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) Text.__proto__ = Component$$1;
    Text.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Text.prototype.constructor = Text;

    Text.prototype.serviceToggle = function serviceToggle () {
        this.props.dispatchAction(QB_SERVICE_SET_OPEN, { service: service$4 });
    };

    // get count
    Text.prototype.handleCount = function handleCount () {
        console.log(file$45, 'handleCount');
        this.props.serviceCountSearch(service$4);
    };

    // the handler is passed as a prop to child Group components, and responds to user actions originating in those components
    Text.prototype.handleTextClick = function handleTextClick (id, parentId, op) {
        console.log(file$45, 'handleTextClick', op);
        var ref = this.props;
        var setBooleanOperator = ref.setBooleanOperator;
        var addRule = ref.addRule;
        var addGroup = ref.addGroup;
        var deleteGroup = ref.deleteGroup;

        if (op === 'and-or') {
            setBooleanOperator(id);
        } else if (op === 'addRule') {
            addRule(id);
        } else if (op === 'addGroup') {
            addGroup(id);
        } else if (op === 'deleteGroup') {
            deleteGroup(parentId, id);
        }
    };

    Text.prototype.render = function render$$1 () {
        var ref = this.props;
        var queryBuilder = ref.queryBuilder;
        var returnType = ref.returnType;
        var ref$1 = queryBuilder.services.text;
        var root = ref$1.root;
        var open = ref$1.open;

        return (
            React__default.createElement( 'div', { style: qb.service },
                React__default.createElement( ServiceTab, { open: open, service: service$4, serviceToggle: this.serviceToggle }),
                open && root &&
                    React__default.createElement( 'table', { style: qb.serviceTable },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, React__default.createElement( 'div', { style: qb.serviceOperator }) ),
                            React__default.createElement( 'td', { style: qb.serviceTableBody },
                                React__default.createElement( 'div', { style: qb.serviceBody },
                                    React__default.createElement( 'div', null,
                                        React__default.createElement( Group, {
                                            group: root, handleTextClick: this.handleTextClick, returnType: returnType })
                                    )
                                )
                            )
                        )     
                    )                        
            )        
        )
    };

    return Text;
}(React.Component));

var Text$1 = connect(mapStateToProps, mapDispatchAllToProps)(Text);

/*
    The top-level query builder component, and the container for all query builder subcomponents.
*/

var file$38 = 'components/query-builder/QueryBuilder';
var control$1 = CONTROL_QUERY_BUILDER;
var name = 'query-builder';
var component_id = name + '-component';

// css inline styles
var toggleStyle = Object.assign({}, qb.toggle, { paddingTop: 4 });

var QueryBuilder = (function (Component$$1) {
    function QueryBuilder(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'search'
            , 'setControl'
            , 'toggle'
            , 'unsetControl'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list
        
        this.name = name;
        this.component_id = component_id;
    }

    if ( Component$$1 ) QueryBuilder.__proto__ = Component$$1;
    QueryBuilder.prototype = Object.create( Component$$1 && Component$$1.prototype );
    QueryBuilder.prototype.constructor = QueryBuilder;

    QueryBuilder.prototype.search = function search () {
        this.props.queryBuilderSearch(); // run the query
    };

    QueryBuilder.prototype.setControl = function setControl () {
        //console.log(file, 'setControl')
        this.props.setControl(control$1, file$38); // set global state control property
        setController(this);  // set events controller
    };

    // toggle open/close
    QueryBuilder.prototype.toggle = function toggle () {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var queryBuilder = ref.queryBuilder;
        var open = (queryBuilder && queryBuilder.open);
        console.log(file$38, 'open=' + open);
        
        if (open) {
            dispatchAction(QB_SET_PROPS, { open: false });
        } else {
            if (queryBuilder) { dispatchAction(QB_SET_PROPS, { open: true }); } // open queryBuilder
            else { dispatchAction(QB_INIT); } // init queryBuilder
        }
    };

    QueryBuilder.prototype.unsetControl = function unsetControl () {
        console.log(file$38, 'unsetControl');
        this.props.setControl(null, file$38); // set global state control property
    };
    
    QueryBuilder.prototype.render = function render$$1 () {
        var ref = this.props;
        var queryBuilder = ref.queryBuilder; 
        var open = (queryBuilder && queryBuilder.open);
        var icon = (open) ? iconUp : iconDown; 

        return (
            React__default.createElement( 'div', { id: this.component_id, style: qb.style, onClick: this.setControl },
                React__default.createElement( 'div', { style: qb.headerStyle },
                    React__default.createElement( 'div', { style: toggleStyle, onClick: this.toggle }, icon),
                    React__default.createElement( 'div', { style: inline, className: 'lead' }, "Advanced Search Query Builder"),
                    React__default.createElement( Tooltip, { name: 'queryBuilder', marginTop: 6, marginLeft: 5 })
                ),
                open &&
                    React__default.createElement( 'div', null,
                        React__default.createElement( Text$1, null ),
                        React__default.createElement( Sequence$1, null ),
                        React__default.createElement( SequenceMotif$1, null ),
                        React__default.createElement( Structure$1, null ),
                        React__default.createElement( Chemical$1, null ),
                        React__default.createElement( Footer$1, null )
                    )
            )
        )
    };

    return QueryBuilder;
}(React.Component));

var QueryBuilder$1 = connect(mapStateToProps, mapDispatchAllToProps)(QueryBuilder);

var Refinement = (function (Component$$1) {
    function Refinement(props) {
        Component$$1.call(this, props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleClickMore = this.handleClickMore.bind(this);
    }

    if ( Component$$1 ) Refinement.__proto__ = Component$$1;
    Refinement.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Refinement.prototype.constructor = Refinement;

    Refinement.prototype.handleClear = function handleClear () {
        var ref = this.props;
        var refinement = ref.refinement;
        var clearRefinement = ref.clearRefinement;
        clearRefinement(refinement);
    };

    Refinement.prototype.handleClick = function handleClick (e) {
        var ref = this.props;
        var refinement = ref.refinement;
        var clickRefinement = ref.clickRefinement;
        var ref$1 = e.target;
        var value = ref$1.value;
        var checked = ref$1.checked;
        clickRefinement(refinement, value, checked);
    };

    Refinement.prototype.handleClickMore = function handleClickMore () {
        var ref = this.props;
        var refinement = ref.refinement;
        var clickMore = ref.clickMore;
        clickMore(refinement);
    };

    Refinement.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props.refinement;
        var attribute = ref.attribute;
        var groups = ref.groups;
        var maxGroups = ref.maxGroups;

        var display_name = getDisplayName(attribute);
        var numGroups = groups.length;

        var buttonEnabled = false;
        for (var i = 0; i < groups.length; i++) {
            if (groups[i].checked) {
                buttonEnabled = true;
                break
            }
            if (buttonEnabled) { break }
        }

        var groupArr = [];
        var n = Math.min(maxGroups, numGroups);
        for (var i$1 = 0; i$1 < n; i$1++) {
            var group = groups[i$1];
            var population = group.population;
            var checked = group.checked;
            var label = group.label;
            var displayLabel = getDisplayLabel(label, attribute);
            groupArr.push (
                React__default.createElement( 'tr', { key: label },
                    React__default.createElement( 'td', null, React__default.createElement( 'input', { className: 'checkBoxRefinement', type: 'checkbox', value: label, onClick: this$1.handleClick, checked: checked }) ),
                    React__default.createElement( 'td', null, React__default.createElement( 'span', { dangerouslySetInnerHTML: { __html: displayLabel + ' (' + population + ')' } }) )
                )
            );
        }

        return (
            React__default.createElement( 'div', { className: 'refinement' },
                React__default.createElement( 'div', { className: 'refinement-title' },
                    React__default.createElement( 'table', null,
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', null, React__default.createElement( 'h5', { dangerouslySetInnerHTML: { __html: display_name } }) ),
                            React__default.createElement( 'td', null, React__default.createElement( 'button', { className: BTN_XS, onClick: this.handleClear, disabled: !buttonEnabled }, "Clear") )
                        )
                    )
                ),
                React__default.createElement( Space, { h: 10 }),
                React__default.createElement( 'table', { className: 'refinement' }, groupArr.map(function (group) { return group })),

                numGroups > maxGroups && React__default.createElement( 'div', { className: 'more', onClick: this.handleClickMore }, "More...")
            )
        )
    };

    return Refinement;
}(React.Component));

/*
"groups" : [ {
      "label" : "*-1.0",
      "population" : 693
    }, {
      "label" : "1.0-1.2",
      "population" : 2616
    },
    , {
      "label" : "4.6-*",
      "population" : 1819
    }*/

function getDisplayLabel(label, attribute) {
    if (attribute === 'rcsb_accession_info.initial_release_date') {
        return label + ' - ' + (parseInt(label) + 4)
    } else if (attribute === 'rcsb_entry_info.resolution_combined') {
        if (label.indexOf('*-') === 0) { return '< ' + label.replace('*-', '') }
        else if (label.indexOf('-*') !== -1) { return '> ' + label.replace('-*', '') }
        else { return label.replace('-', ' - ') }
    } else {
        return label
    }    
}

var file$52 = 'components/Refinements';
var control$2 = CONTROL_REFINEMENTS;
var name$1 = 'refinements';
var component_id$1 = name$1 + '-component';

var Refinements = (function (Component$$1) {
    function Refinements(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clearRefinement'
            , 'clickMore'
            , 'clickRefinement'  
            , 'search'
            , 'setControl'
            , 'unsetControl' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list
        this.name = name$1;
        this.component_id = component_id$1;
    }

    if ( Component$$1 ) Refinements.__proto__ = Component$$1;
    Refinements.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Refinements.prototype.constructor = Refinements;

    Refinements.prototype.componentDidMount = function componentDidMount () {
        console.log(file$52, 'componentDidMount');
    };

    // called when refinement checkbox clicked
    Refinements.prototype.clickRefinement = function clickRefinement (refinement, value, checked) {
        var ref = this.props;
        var booleans = ref.booleans;
        var setRefinement = ref.setRefinement;
        if (!booleans.dataLoading) { setRefinement(refinement, value, checked); }
    };

    //  called when clear refinement button is clicked
    Refinements.prototype.clearRefinement = function clearRefinement (refinement) {
        this.props.clearRefinement(refinement);
    };

    Refinements.prototype.clickMore = function clickMore (refinement) {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        dispatchAction(SET_MAX_GROUPS, { refinement: refinement });
    };

    Refinements.prototype.search = function search () {
        console.log(file$52, 'search()');
        this.props.refinementsSearch();
    };

    Refinements.prototype.setControl = function setControl () {
        console.log(file$52, 'setControl');
        this.props.setControl(control$2, file$52); // set global state control property
        setController(this);  // set events controller
    };

    Refinements.prototype.unsetControl = function unsetControl () {
        console.log(file$52, 'unsetControl');
        this.props.setControl(null, file$52); // set global state control property
    };

    Refinements.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var control = ref.control;
        var searchResults = ref.searchResults;
        var clearRefinements = ref.clearRefinements;
        var drilldown = searchResults.drilldown;

        var clearAllEnabled = false;
        if (drilldown) {
            //u.logJson(file, drilldown, 'drilldown')
            for (var i = 0; i < drilldown.length; i++) {
                for (var j = 0; j < drilldown[i].groups.length; j++) {
                    if (drilldown[i].groups[j].checked) {
                        clearAllEnabled = true;
                        break
                    }
                    if (clearAllEnabled) { break }
                }
            }
        }

        var searchIconClass = 'glyphicon glyphicon-search search-btn';
        if (control === CONTROL_REFINEMENTS) { searchIconClass += ' search-control'; }

        var clearBtn = React__default.createElement( 'td', null, React__default.createElement( 'a', { className: BTN_SM, onClick: function () { return clearRefinements(); }, disabled: !clearAllEnabled }, "Clear All") );
        var searchBtn = React__default.createElement( 'td', null, React__default.createElement( 'a', { className: BTN_SM_PRIMARY + ' btn-search', onClick: this.search }, React__default.createElement( 'span', { className: searchIconClass })) );

        return (
            React__default.createElement( 'div', { id: this.component_id, onClick: this.setControl },
                React__default.createElement( 'div', { id: 'refinements-header' },
                    React__default.createElement( 'table', null,
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', { className: 'lead' }, "Refinements"),
                            React__default.createElement( 'td', null, React__default.createElement( Tooltip, { name: 'refinements', pos: 'right-below' }) ),
                            clearBtn,
                            searchBtn
                        )
                    )
                ),
                drilldown &&
                    React__default.createElement( 'div', { id: 'refinements-body' },
                        drilldown.map(function (item) { return React__default.createElement( Refinement, {
                            key: item.attribute, refinement: item, clickRefinement: this$1.clickRefinement, clearRefinement: this$1.clearRefinement, clickMore: this$1.clickMore }); }
                        )
                    ),
                React__default.createElement( 'div', { id: 'refinements-footer' },
                    React__default.createElement( 'table', null,
                        React__default.createElement( 'tr', null,
                            clearBtn,
                            searchBtn
                        )
                    )
                )
            )
        )
    };

    return Refinements;
}(React.Component));

var Refinements$1 = connect(mapStateToProps, mapDispatchAllToProps)(Refinements);

/* 
    components for paging, tabular reports, sorting, and download functions
*/

var file$55 = 'components/Functions';
var functions = {
          border: border_08
        , backgroundColor: color_08
        , padding: 4
        , fontSize: 12
    };
var itemLeft = Object.assign({}, inline, { marginRight: 5 });
var itemRightLine = Object.assign({}, inline, { marginLeft: 5, lineHeight: '28px' });
var reportLabelStyle = Object.assign({}, inline, { marginLeft: 15, marginRight: 5, lineHeight: '28px' });

var Functions = (function (Component$$1) {
    function Functions(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleDataDownload'
            , 'handleDownloadSelectedFiles'
            , 'handleIds'
            , 'handleSelectAll'
            , 'handleSort'
            , 'handleTabularReport'
            , 'handleAlignmentView'
            , 'setReportProps'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); });
    }

    if ( Component$$1 ) Functions.__proto__ = Component$$1;
    Functions.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Functions.prototype.constructor = Functions;

    Functions.prototype.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate (nextProps, nextState, nextContext) {
        var currentSearchView = this.props.views.search;
        var nextSearchView = nextProps.views.search;
        if(currentSearchView === SUMMARY && nextSearchView !== SUMMARY) {
            this.props.dispatchAction(ALIGNMENT_VIEW, { alignmentView:"query" });
        }
    };

    // download request data as csv file
    Functions.prototype.setReportProps = function setReportProps (o) {
        this.props.dispatchAction(SET_REPORT_PROPS, o);
    };

    // download request data as csv or json file
    Functions.prototype.handleDataDownload = function handleDataDownload (e) {
        var format = e.target.id.replace('data-download-', '');
        var total_count = this.props.searchResults.total_count;
        var batch = false;

        console.log(file$55, 'handleDataDownload: format=' + format);

        if (total_count <= DATA_DOWNLOAD_COUNT) {
            this.setReportProps(getDefault('tabular-report'));
            getData$2(this.props, { batch: batch, format: format });  // pass params as object
        } else {
            if (confirm(MSGS.downloadData)) { this.setReportProps( { batch: true, format: format, clicked: [] }); }
            else { this.setReportProps(getDefault('tabular-report')); }
        }
    };

    Functions.prototype.handleDownloadSelectedFiles = function handleDownloadSelectedFiles () {
        console.log(file$55, 'handleDownloadSelectedFiles');
        var ref = this.props;
        var pager = ref.pager;
        var searchResults = ref.searchResults;
        var ids = [];
        var result_set = searchResults.result_set;
        var page_set = result_set.slice(pager.start, pager.end_num);

        page_set.forEach(function (item) {
            if (item.checked) { ids.push(item.identifier.substring(0, 4)); } // strip entity identifier
        });
        var idStr = (ids.length > 0) ? ids.join(',') : null;

        if (idStr) { window.open(DOWNLOADS_URL + idStr, '_blank'); }
        else { console.log(file$55, 'handleDownloadSelectedFiles: idStr is null'); }
    };

    // display or download ids as text
    Functions.prototype.handleIds = function handleIds (e) {
        var mode = e.target.id.replace('ids-', '');
        var total_count = this.props.searchResults.total_count;
        var batch = false;

        console.log(file$55, 'handleIds: mode=' + mode);

        if (total_count <= IDS_COUNT) {
            this.setReportProps(getDefault('tabular-report'));
            getIds(this.props, { batch: batch, mode: mode });
        } else {
            if (confirm(MSGS.idsData)) { this.setReportProps( { batch: true, mode: mode, clicked: [] }); }
            else { this.setReportProps(getDefault('tabular-report')); }
        }    
    };

    Functions.prototype.handleSelectAll = function handleSelectAll (e) {
        this.props.setSelectAll(e.target.checked);
    };

    Functions.prototype.handleSort = function handleSort (e) {
        var sort = getSort(e.target.value);
        this.props.sortData(sort);
    };

    Functions.prototype.handleTabularReport = function handleTabularReport (e) {
        var report = e.target.value;
        console.log(file$55, 'handleTabularReport: report=' + report);

        if (report !== '') {
            var reportName = MAP[report];
            if (report !== 'create_custom_report') { setGtag$1('Tabular Reports', reportName); }
            this.setReportProps(getDefault('tabular-report'));
            this.props.setViews(REPORT, report);
        }
    };

    Functions.prototype.handleAlignmentView = function handleAlignmentView (e){
        var alignmentView = e.target.value;
        this.props.dispatchAction(ALIGNMENT_VIEW, { alignmentView: alignmentView });
    };

    Functions.prototype.render = function render$$1 () {
        var ref = this.props;
        var cw = ref.cw;
        var searchResults = ref.searchResults;
        var setViews = ref.setViews;
        var selectAll = ref.selectAll;
        var sort = ref.sort;
        var tabularReport = ref.tabularReport;
        var views = ref.views;
        var request = ref.request;
        var result_set = searchResults.result_set;
        var sortStr = sortToStr(sort);
        var report = views.report;
        var searchView = views.search;
        
        var   attributes, backToSearchResults, csvDownload, downloadFiles, downloadSelectedFiles, idsDisplay
            , idsDownload, jsonDownload, searchViews, selectAllCheckbox, selectAllLabel
            , selectSort
            , alignmentType;

        if (tabularReport && tabularReport.attributes && tabularReport.attributes.length > 0) { attributes = tabularReport.attributes; }

        var leftBottomGrpStyle  = Object.assign({}, inline, { marginTop: '4px', marginLeft: '1px' });

        var ret = {};
        getServiceNode(request.query, ret, 'sequence');
        if(searchResults.result_type === "polymer_entity" && ret.node && searchView === SUMMARY) {
            alignmentType = React__default.createElement( 'div', { style: leftBottomGrpStyle },
                React__default.createElement( 'div', { style: itemLeft }, "Alignment Reference ", React__default.createElement( 'select', { onChange: this.handleAlignmentView, style: selectStyle },
                        React__default.createElement( 'option', { value: 'query' }, "Query"),
                        React__default.createElement( 'option', { value: 'subject' }, "Subject"),
                        React__default.createElement( 'option', { value: 'pairwise' }, "Pairwise")
                    ),
                    React__default.createElement( 'p', { style: {marginLeft:5, display:"inline-block"} },
                        React__default.createElement( 'a', { href: "/pages/help/pfvAlignment", target: "_blank" }, "Help ", React__default.createElement( 'span', { className: "glyphicon glyphicon-new-window" })
                        )
                    )
                )
            );
        }
        
        if (attributes) { console.log(file$55, 'attributes.length=' + attributes.length); }

        if (result_set) {
            // define elements

            if (searchView === REPORT) {
                backToSearchResults = React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: function () { return setViews(SUMMARY, SEARCH_SUMMARY); } }, "Back to Search Results");
            } else {
                searchViews = SEARCH_VIEWS.map(function (v, i) {
                    var style = (i < SEARCH_VIEWS.length - 2) ? btnRt : btn;
                    var cName = (v === searchView) ? 'srch-btn-selected' : 'srch-btn';
                    if (v !== REPORT) { return React__default.createElement( 'div', { style: style, className: cName, onClick: function () { return setViews(v, SEARCH_SUMMARY); } }, SEARCH_VIEW_NAMES[v]) }
                });
            }
            var btnGrp = React__default.createElement( 'div', { style: itemLeft }, searchViews, backToSearchResults); // one or the other will be null

            var reportLabel = (searchView === REPORT) ? React__default.createElement( 'div', { style: reportLabelStyle }, "Tabular Report") : null;

            var createCustomReportText = (attributes) ? 'Create/Modify Custom Report' : 'Create Custom Report';
            var reports = React__default.createElement( 'div', { style: itemLeft },
                                React__default.createElement( 'select', { onChange: this.handleTabularReport, value: report, style: selectStyle },
                                    searchView !== REPORT && React__default.createElement( 'option', { value: '' }, "-- Tabular Report --"),
                                    React__default.createElement( 'option', { value: 'pdb_ids' }, "PDB IDs"),
                                    tabularReport && tabularReport.attributes &&
                                        React__default.createElement( 'option', { value: 'custom_report' }, "Custom Report"),     
                                    React__default.createElement( 'option', { value: 'create_custom_report' }, createCustomReportText),
                                    tabularReportGroups.map(function (g) {
                                        return (
                                            React__default.createElement( 'optgroup', { key: g.name, label: g.name },
                                                g.reports.map(function (r) { return React__default.createElement( 'option', { key: r.id, value: r.id }, r.name); })                                                
                                            )
                                        )   
                                    })
                                )
                            );
            
            if (report !== 'create_custom_report') {
                selectSort =    React__default.createElement( 'div', { style: itemLeft },
                                    React__default.createElement( Select, {
                                        options: SORT_OPTIONS, value: sortStr, onChange: this.handleSort, border: border_20 })
                                );                  
            }                      

            if (searchView === REPORT) {
                if (report === 'pdb_ids') {
                    idsDownload = React__default.createElement( 'div', { style: btnRt, className: 'srch-btn', onClick: this.handleIds, id: 'ids-download' }, "Download IDs ", iconDownload);
                    idsDisplay = React__default.createElement( 'div', { style: btnRt, className: 'srch-btn', onClick: this.handleIds, id: 'ids-display' }, "Display IDs ", iconNewWindow);
                } else {
                    if (report !== 'create_custom_report') {    
                        csvDownload = React__default.createElement( 'div', { style: btnRt, className: 'srch-btn', onClick: this.handleDataDownload, id: 'data-download-csv' }, "CSV ", iconDownload);
                        jsonDownload = React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: this.handleDataDownload, id: 'data-download-json' }, "JSON ", iconDownload);
                    }      
                }
            } else {
                downloadSelectedFiles = React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: this.handleDownloadSelectedFiles }, "Download Selected Files");
                selectAllLabel = React__default.createElement( 'div', { style: itemRightLine }, "Select All");
                selectAllCheckbox = React__default.createElement( 'div', { style: itemRightLine }, React__default.createElement( 'input', { type: 'checkbox', onClick: this.handleSelectAll, checked: selectAll }));
            }

            var leftGrpStyle = (cw === LG) 
                ? Object.assign({}, inline, { width: '72%' })
                : null; 
            var rightGrpStyle = (cw === LG) 
                ? Object.assign({}, inline, { textAlign: 'right', width: '28%' })
                : { textAlign: 'right', paddingTop: 2 };


            return (
                React__default.createElement( 'div', { style: functions },
                    React__default.createElement( 'div', { style: leftGrpStyle },
                        btnGrp,
                        reportLabel,
                        reports,
                        selectSort,
                        csvDownload,
                        jsonDownload,
                        idsDownload,
                        idsDisplay
                    ),
                    React__default.createElement( 'div', { style: rightGrpStyle },   
                        downloadFiles,
                        downloadSelectedFiles,
                        selectAllLabel,
                        selectAllCheckbox
                    ),
                    alignmentType
                )
            )
        }
        return null
    };

    return Functions;
}(React.Component));

var Functions$1 = connect(mapStateToProps, mapDispatchAllToProps)(Functions);

/* paging component */

// css inline styles
var pagerStyle = { 
        padding: 4, 
        border: border_08, 
        backgroundColor: color_02, 
        fontSize: 12 };
var countStyle = Object.assign({}, inline, { lineHeight: '27.5px' });
var pageNumStyle = Object.assign({}, countStyle, { padding: '0 30px' });
var prevNextStyle = inline;

var Pager = (function (Component$$1) {
    function Pager(props) {
        Component$$1.call(this, props);
        this.handlePerPage = this.handlePerPage.bind(this);
    }

    if ( Component$$1 ) Pager.__proto__ = Component$$1;
    Pager.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Pager.prototype.constructor = Pager;

    Pager.prototype.handlePerPage = function handlePerPage (e) {
        var rows = parseInt(e.target.value);
        this.props.perPageData(rows);
    };

    Pager.prototype.render = function render$$1 () {
        var ref = this.props;
        var cw = ref.cw;
        var booleans = ref.booleans;
        var pageResults = ref.pageResults;
        var pager = ref.pager;
        var request = ref.request;

        if (!booleans.dataLoading && pager) {
            var end_num = pager.end_num;
            var page = pager.page;
            var rows = pager.rows;
            var start_num = pager.start_num;
            var total_count = pager.total_count;
            var total_pages = pager.total_pages;

            var type = RETURN_TYPE_MAP[request.return_type];
            var typeLabel = (total_count === 1) ? type.name : type.value;

            var prevDisabled = page === 1;
            var nextDisabled = page === total_pages;
            var paging = total_count > rows;

            var leftStyle = (cw === LG) 
                ? Object.assign({}, inline, { width: '66%' })
                : null; 
            var rightStyle = (cw === LG) 
                ? Object.assign({}, inline, { textAlign: 'right', width: '34%', lineHeight: '27.5px' })
                : { textAlign: 'right', paddingTop: 2 }; 

            return (
                React__default.createElement( 'div', { style: pagerStyle },
                    React__default.createElement( 'div', { style: leftStyle },
                        React__default.createElement( 'div', { style: countStyle }, "Displaying ", start_num, " to ", end_num, " of ", React__default.createElement( 'span', null, total_count, " ", React__default.createElement( 'strong', null, typeLabel ) )
                        ),
                        React__default.createElement( 'div', { style: pageNumStyle }, "Page ", page, " of ", total_pages),
                        paging &&
                            React__default.createElement( 'div', { style: prevNextStyle },
                                prevDisabled
                                    ? React__default.createElement( 'div', { style: btnRtDisabled, className: 'srch-btn' }, "← Previous")
                                    : React__default.createElement( 'div', { style: btnRt, className: 'srch-btn', onClick: function () { return pageResults('prev'); } }, "← Previous"),
                                nextDisabled
                                    ? React__default.createElement( 'div', { style: btnDisabled, className: 'srch-btn' }, "Next →")
                                    : React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: function () { return pageResults('next'); } }, "Next →")    
                            )
                    ),
                    React__default.createElement( 'div', { style: rightStyle }, "Display ", React__default.createElement( Select, {
                            options: PER_PAGE_OPTIONS, value: rows, onChange: this.handlePerPage, border: border_20 }), " per page")
                )        
            )
        }
        return null
    };

    return Pager;
}(React.Component));

var Pager$1 = connect(mapStateToProps, mapDispatchAllToProps)(Pager);

/*
    this component renders an individual search result, in the current view context (summary, gallery, compact) 
*/

var ResultsItem = (function (Component$$1) {
    function ResultsItem(props) {
        Component$$1.call(this, props);
    }

    if ( Component$$1 ) ResultsItem.__proto__ = Component$$1;
    ResultsItem.prototype = Object.create( Component$$1 && Component$$1.prototype );
    ResultsItem.prototype.constructor = ResultsItem;

    ResultsItem.prototype.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate (nextProps, nextState, nextContext) {
        var pfvId = "pfvAlignment_" + this.props.item.data.identifier;
        var nextPfvId = "pfvAlignment_" + this.props.item.data.identifier;
        if(pfvId !== nextPfvId)
            { RcsbFvWebApp.unmount(pfvId); }
    };

    ResultsItem.prototype.componentWillUnmount = function componentWillUnmount () {
        var pfvId = "pfvAlignment_" + this.props.item.data.identifier;
        RcsbFvWebApp.unmount(pfvId);
    };

    ResultsItem.prototype.componentDidUpdate = function componentDidUpdate (p) {
        var ref = this.props;
        var alignmentView = ref.alignmentView;
        var searchView = ref.searchView;
        if(p.alignmentView !== alignmentView && searchView === SUMMARY)
            { this.updateAlignmentView(); }

    };

    ResultsItem.prototype.componentDidMount = function componentDidMount () {
        var ref = this.props;
        var searchView = ref.searchView;
        if(searchView === SUMMARY)
            { this.updateAlignmentView(); }
    };

    ResultsItem.prototype.render = function render$$1 () {
        var ref = this.props;
        var attributeValueSearch = ref.attributeValueSearch;
        var checked = ref.checked;
        var cw = ref.cw;
        var handleItemChecked = ref.handleItemChecked;
        var item = ref.item;
        var searchView = ref.searchView;
        var data = item.data;
        var sequence_match = item.sequence_match;
        var seqmotif_match = item.seqmotif_match;
        var structure_match = item.structure_match;

        if (data) {
            var audit_author = data.audit_author;
            var assembly = data.assembly;
            var entity = data.entity;
            var entryId = data.entryId;
            var exptl = data.exptl;
            var identifier = data.identifier;
            var imgSrc = data.imgSrc;
            var initial_release_date = data.initial_release_date;
            var macromoleculeCount = data.macromoleculeCount;
            var name = data.name;
            var publication = data.publication;
            var return_type = data.return_type;
            var sspHref = data.sspHref;
            var title = data.title;
            
            // define elements common to all views and return_types
            var imgLink = React__default.createElement( 'a', { href: sspHref }, React__default.createElement( 'img', { className: "img-responsive gallery-item-img", src: imgSrc }));
    
            var checkbox = React__default.createElement( 'input', { type: 'checkbox', value: identifier, onClick: handleItemChecked, checked: checked });
    
            if (searchView === GALLERY) { // gallery
                var tdStyle = (cw === XS) ? {width:'33.33%'} : {width:'25%'};
                return (
                    React__default.createElement( 'td', { className: 'gallery-item', style: tdStyle },
                        React__default.createElement( 'div', null, React__default.createElement( 'div', null, checkbox, " ", identifier ), imgLink )
                    )
                )
            } else if (searchView === COMPACT) { // compact
                return (
                    React__default.createElement( 'tr', null,
                        React__default.createElement( 'td', null, React__default.createElement( 'a', { href: sspHref }, name) ),
                        React__default.createElement( 'td', null, title ),
                        React__default.createElement( 'td', { style: {whiteSpace:'nowrap'} }, initial_release_date && React__default.createElement( 'div', null, initial_release_date )),
                        React__default.createElement( 'td', null, checkbox )
                    )
                )
            } else { // summary
                return (

                    React__default.createElement( 'div', { className: 'results-item', key: identifier },
                        React__default.createElement( 'div', { className: 'row' }
                        /* summary view header for all return_types */

                        /* img */,
                        React__default.createElement( 'div', { className: 'col-md-3 col-xs-12' },
                            imgLink,
                            return_type !== 'non_polymer_entity' && 
                                React__default.createElement( 'div', { className: 'view-button-3d' },
                                    React__default.createElement( 'a', { className: 'btn btn-default btn-xs', type: 'button', href: '/3d-view/' + entryId },
                                        React__default.createElement( 'i', { className: "fa fa-cube" }, " "), "3D View")
                                )    
                        ),
    
                        React__default.createElement( 'div', { className: 'col-md-9 col-xs-12 results-item-info' }
                            /* pdbid, download/view file, checkbox */,
                            React__default.createElement( 'table', { className: 'results-item-header' },
                                React__default.createElement( 'tr', null,
                                    React__default.createElement( 'td', null,
                                        React__default.createElement( 'h3', null, React__default.createElement( 'a', { href: sspHref }, name) )
                                    ),
                                    React__default.createElement( 'td', { className: 'text-right' },
                                        React__default.createElement( 'div', { className: 'btn-group btn-group-xs' },
                                            React__default.createElement( 'a', {  className: 'btn btn-default', type: 'button', href: ("" + (FILE_DOWNLOAD_URL) + entryId + ".cif.gz"), rel: 'noopener noreferrer', target: '_blank' }, "Download File"),
                                            React__default.createElement( 'a', {  className: 'btn btn-default', type: 'button', href: ("" + (FILE_VIEW_URL) + entryId + ".cif"), rel: 'noopener noreferrer', target: '_blank' }, "View File")
                                        ),
                                        React__default.createElement( Space, { w: 10 }),
                                        checkbox
                                    )
                                )
                            ),
                            React__default.createElement( Space, { h: 10 })
    
                            /* title, audit_author, publication */,
                            React__default.createElement( 'h4', null, React__default.createElement( 'a', { href: sspHref }, title) ),
                            React__default.createElement( Space, { h: 5 }),
    
                            audit_author &&
                                React__default.createElement( 'p', null,
                                    audit_author.map(function (aa, i) {
                                        var comma = i < audit_author.length - 1 ? ', ' : '';
                                        return (
                                            React__default.createElement( 'span', { key: aa.name },
                                                React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('audit_author.name', aa.name); } }, aa.name), comma
                                            ))
                                    })
                                ),
    
                            publication && React__default.createElement( 'p', { dangerouslySetInnerHTML: { __html: publication } }),
    
                            React__default.createElement( 'table', { className: 'results-item-data' }
                                /* release date, method, resolution */,
                                initial_release_date && 
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'td', null, "Released" ),
                                        React__default.createElement( 'td', null, initial_release_date )
                                    ),
                                exptl &&
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'td', null, "Method" ),
                                        React__default.createElement( 'td', null, exptl.map(function (e) { return React__default.createElement( 'div', { key: e.method }, e.method + (e.resolution ? ' ' + e.resolution + ' Å' : '')); }) )    
                                    )

                                /* everything below this line is specific to the return_type */     

                                /* entry return_type */,     
                                return_type === 'entry' && 
                                    React__default.createElement( 'tbody', null,
                                        data.organisms &&
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Organisms" ),
                                                React__default.createElement( 'td', null,
                                                    data.organisms.map(function (organism) {
                                                        return (
                                                            React__default.createElement( 'div', { key: organism },
                                                                React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_entity_source_organism.ncbi_scientific_name', organism); } }, organism)
                                                            )
                                                        )
                                                    })
                                                )
                                            ),
                                        macromoleculeCount > 0 &&
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Macromolecule" ),
                                                macromoleculeCount > 5 &&
                                                    React__default.createElement( 'td', null,
                                                        data.polymer_entity_count_protein > 0 && React__default.createElement( 'div', null, "Unique protein chains: ", data .polymer_entity_count_protein ),
                                                        data.polymer_entity_count_nucleic_acid > 0 && React__default.createElement( 'div', null, "Unique nucleic acid chains: ", data.polymer_entity_count_nucleic_acid ),
                                                        data.polymer_entity_count_nucleic_acid_hybrid > 0 && React__default.createElement( 'div', null, "Unique nucleic acid hybrid chains: ", data.polymer_entity_count_nucleic_acid_hybrid )
                                                    ),
                                                macromoleculeCount <= 5 &&
                                                    React__default.createElement( 'td', null,
                                                        data.proteinChains && data.proteinChains.map(function (chain, i) {
                                                            return (
                                                                React__default.createElement( 'div', { key: 'm' + i },
                                                                    React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_polymer_entity.pdbx_description', chain); } }, chain, " "), " (protein)")) }),
                                                        data.nucleicAcidChains && data.nucleicAcidChains.map(function (chain, i) {
                                                            return (
                                                                React__default.createElement( 'div', { key: 'm' + i },
                                                                    React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_polymer_entity.pdbx_description', chain); } }, chain), " (nucleic acid)")) }),
                                                        data.hybridChains && data.hybridChains.map(function (chain, i) {
                                                            return (
                                                                React__default.createElement( 'div', { key: 'm' + i },
                                                                    React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_polymer_entity.pdbx_description', chain); } }, chain), " (hybrid)")) })
                                                    )       
                                            ),     
                                        data.ligands &&
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Unique Ligands" ),
                                                React__default.createElement( 'td', null,
                                                    data.ligands.map(function (ligand, index) {
                                                        var comma = index < data.ligands.length - 1 ? ', ' : '';
                                                        return (React__default.createElement( 'span', { key: ligand }, React__default.createElement( 'a', { href: '/ligand/' + ligand }, ligand), comma))
                                                    })
                                                )
                                            ),

                                        data.branched_monosaccharides && 
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Unique branched monosaccharides" ),
                                                React__default.createElement( 'td', null,
                                                    data.branched_monosaccharides.map(function (item, i) {
                                                        var comma = i < data.branched_monosaccharides.length - 1 ? ', ' : '';
                                                        return (React__default.createElement( 'span', { key: item }, item, comma))
                                                    })
                                                )
                                            )

                                    )        

                                /* polymer_entity return_type */,     
                                return_type === 'polymer_entity' && 
                                    React__default.createElement( 'tbody', null,
                                        entity.organisms &&
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Organism" ),
                                                React__default.createElement( 'td', null,
                                                    entity.organisms.map(function (organism) {
                                                        return (
                                                            React__default.createElement( 'div', { key: organism },
                                                                React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_entity_source_organism.ncbi_scientific_name', organism); } }, organism)
                                                            )
                                                        )
                                                    })
                                                )
                                            ),
                                        entity.pdbx_description &&    
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Macromolecule" ),
                                                React__default.createElement( 'td', null,
                                                    React__default.createElement( 'a', { onClick: function () { return attributeValueSearch('rcsb_polymer_entity.pdbx_description', entity.pdbx_description); } },
                                                        entity.pdbx_description
                                                    )
                                                )
                                            )
                                    )   

                                /* non_polymer_entity return_type */,  
                                return_type === 'non_polymer_entity' && 
                                    React__default.createElement( 'tbody', null,
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, "Chemical ID" ),
                                            React__default.createElement( 'td', null, React__default.createElement( 'a', { href: '/ligand/' + entity.chem_comp_id }, entity.chem_comp_id) )
                                        ),
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, "Formula" ),
                                            React__default.createElement( 'td', null, entity.chem_comp_formula )
                                        )
                                    )

                                /* assembly return_type */,  
                                return_type === 'assembly' && assembly.symmetry &&
                                    React__default.createElement( 'tbody', null,
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, assembly.symmetry.kind, ": " ),
                                            React__default.createElement( 'td', null, assembly.symmetry.type, " - ", assembly.symmetry.symbol )
                                        ),
                                        assembly.oligomeric_count &&
                                            React__default.createElement( 'tr', null,
                                                React__default.createElement( 'td', null, "Oligomeric Count" ),
                                                React__default.createElement( 'td', null, assembly.oligomeric_count )
                                            )    
                                    )

                                /* match scores */,     
                                React__default.createElement( 'tbody', null,
                                    sequence_match && 
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, "Sequence Match" ),
                                            React__default.createElement( 'td', null, sequence_match.map(function (sm) {
                                                    return (
                                                        React__default.createElement( 'div', { key: sm.region },
                                                            React__default.createElement( 'div', null, "Sequence Identity: ", Math.ceil(100*sm.sequence_identity)+"%", ", E-Value: ", sm.evalue, ", Region: ", sm.region
                                                            )
                                                        ))
                                                })
                                            )
                                        ),
                                    seqmotif_match && 
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, "Sequence Motif Match" ),
                                            React__default.createElement( 'td', null, "Regions: ", seqmotif_match )
                                        ),     
                                    structure_match && 
                                        React__default.createElement( 'tr', null,
                                            React__default.createElement( 'td', null, "Structure Match Score ", React__default.createElement( Tooltip, { name: 'structureMatchScore_' + identifier, marginLeft: 5 }) ),
                                            React__default.createElement( 'td', null, structure_match )
                                        )
                                )
                            )
                        )
                        ),
                        React__default.createElement( 'div', { id: "pfvAlignment_"+identifier, style: {marginTop:30,marginBottom:5} })
                    )
                )
            }
        } else {
            return (
                React__default.createElement( 'div', { className: 'row results-item', key: item.identifier },
                    React__default.createElement( 'div', { className: 'err-msg' }, React__default.createElement( 'strong', null, "MISSING DATA FOR ", item.identifier ))
                )
            )
        }
    };

    ResultsItem.prototype.updateAlignmentView = function updateAlignmentView () {
        var ref = this.props;
        var alignmentView = ref.alignmentView;
        var item = ref.item;
        var querySequence = ref.querySequence;
        var data = item.data;
        var sequence_match = item.sequence_match;
        if(sequence_match != null) {
            var identifier = data.identifier;
            var entity = data.entity;
            var pfvId = "pfvAlignment_" + identifier;
            var pfvAlignments = [];
            sequence_match.map(function (sm) {
                pfvAlignments.push({
                    elementId: pfvId,
                    targetId: identifier,
                    queryAlignment: sm.query_aligned_seq,
                    targetAlignment: sm.subject_aligned_seq,
                    querySequence: querySequence,
                    targetSequence: entity.sequence,
                    queryBegin: sm.query_beg,
                    queryEnd: sm.query_end,
                    targetBegin: sm.subject_beg,
                    targetEnd: sm.subject_end,
                    sequenceId: sm.sequence_identity
                });
            });
            RcsbFvWebApp.setBoardConfig({rowTitleWidth: 80, trackWidth: 820});
            pfvAlignments.forEach(function (pfv) {
                switch (alignmentView) {
                    case "subject":
                        setTimeout(function () {
                            RcsbFvWebApp.buildPairwiseAlignment(pfv.elementId, {
                                querySequence: pfv.targetSequence,
                                targetSequence: pfv.querySequence,
                                queryAlignment: pfv.targetAlignment,
                                targetAlignment: pfv.queryAlignment,
                                queryBegin: pfv.targetBegin,
                                queryEnd: pfv.targetEnd,
                                targetBegin: pfv.queryBegin,
                                targetEnd: pfv.queryEnd,
                                targetId: "QUERY",
                                queryId: pfv.targetId,
                                sequenceId: pfv.sequenceId,
                                isQueryExternal: false,
                                isTargetExternal: true
                            });
                        }, 100);
                        break
                    case "pairwise":
                        setTimeout(function () {
                            RcsbFvWebApp.buildPairwiseAlignment(pfv.elementId, {
                                querySequence: pfv.querySequence,
                                targetSequence: pfv.targetSequence,
                                queryAlignment: pfv.queryAlignment,
                                targetAlignment: pfv.targetAlignment,
                                queryBegin: pfv.queryBegin,
                                queryEnd: pfv.queryEnd,
                                targetBegin: pfv.targetBegin,
                                targetEnd: pfv.targetEnd,
                                targetId: pfv.targetId,
                                queryId: "QUERY",
                                sequenceId: pfv.sequenceId,
                                isQueryExternal: true,
                                isTargetExternal: false,
                                pairwiseView: true
                            });
                        }, 100);
                        break
                    default:
                        setTimeout(function () {
                            RcsbFvWebApp.buildPairwiseAlignment(pfv.elementId, {
                                querySequence: pfv.querySequence,
                                targetSequence: pfv.targetSequence,
                                queryAlignment: pfv.queryAlignment,
                                targetAlignment: pfv.targetAlignment,
                                queryBegin: pfv.queryBegin,
                                queryEnd: pfv.queryEnd,
                                targetBegin: pfv.targetBegin,
                                targetEnd: pfv.targetEnd,
                                targetId: pfv.targetId,
                                queryId: "QUERY",
                                sequenceId: pfv.sequenceId,
                                isQueryExternal: true,
                                isTargetExternal: false
                            });
                        }, 100);
                        break

                }
            });
        }
    };

    return ResultsItem;
}(React.Component));
/*
TODO 

figure out a better way to handel multiple identical tooltips

see FRONT-507

Definitely let’s cut at the second decimal (0.34). Also let’s label it with “Structure match score” instead of “Biozernike score”. 
We are really going to need a tooltip to briefly explain it, something like: “Probability that the structure is similar to the query”, 
ideally there should also be a link to the full explanation in help page.


The return_type is quite confusing though. What do you guys (Robert Lowe  Jose Duarte) think about a conditional reminder/help box 
if match_context info is theoretically available but not shown due to the chosen return_type? Something along the lines: “Detailed 
service search results are available by displaying results as link to query with matching return_type.” Could be helpful until a more 
elaborate solution is in place.

decimal places?
Sequence Identity: {sm.sequence_identity}, 
E-Value: {sm.evalue}, 
*/

// styles
var LEFT$1 = '-2000px';
var solidBorder$1 = '5px solid #444';
var transBorder$1 = '5px solid rgba(0, 0, 0, 0)';
var tooltip$1 = { 
          position: 'absolute' 
        , width: 240 
        , left: LEFT$1
        , zIndex: 1000000
    };
var content = {
          backgroundColor: '#444'
        , color: '#fff' 
        , borderRadius: 4 
        , padding: '4px 8px' 
        , fontSize: 12
        , zIndex: 1000000
    };
var arrowOuter = {
          textAlign: 'center'
        , height: 10
        , zIndex: 1000000
    };
var arrow = {
          borderTop: solidBorder$1
        , borderRight: transBorder$1
        , borderBottom: transBorder$1
        , borderLeft: transBorder$1
        , display: 'inline-block'
        , verticalAlign: 'top'
    };

var DynamicTooltip = (function (Component$$1) {
    function DynamicTooltip(props) {
        Component$$1.call(this, props);
        this.id = props.parentId + '-tooltip';
        this.contentId = props.parentId + '-tooltip-content';
    }

    if ( Component$$1 ) DynamicTooltip.__proto__ = Component$$1;
    DynamicTooltip.prototype = Object.create( Component$$1 && Component$$1.prototype );
    DynamicTooltip.prototype.constructor = DynamicTooltip;

    DynamicTooltip.prototype.render = function render$$1 () {
        return (
            React__default.createElement( 'div', { style: tooltip$1, id: this.id },
                React__default.createElement( 'div', { style: content, id: this.contentId }),
                React__default.createElement( 'div', { style: arrowOuter }, React__default.createElement( 'div', { style: arrow }))
            )
        )        
    };

    return DynamicTooltip;
}(React.Component));

// styles
var fontSize = 14;
var f2 = fontSize / 2;
var iconStyle = { fontSize: fontSize, fontWeight: 'normal', color: color_60 };
var infoIconStyle = Object.assign({}, inline, { lineHeight: fontSize + 'px' });
var LEFT$2 = '-2000px'; // hide tooltip offscreen when not displayed

var InfoIcon = (function (Component$$1) {
    function InfoIcon(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'mouseOut'
            , 'mouseOver'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
        
        var marginTop = props.marginTop;
        var marginLeft = props.marginLeft;
        var marginRight = props.marginRight;
        var parentId = props.parentId;
        var text = props.text; // margin* props are optional
        this.text = text;
        this.parentId = parentId;

        this.infoIconStyle = Object.assign({}, infoIconStyle, { marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight });
    }

    if ( Component$$1 ) InfoIcon.__proto__ = Component$$1;
    InfoIcon.prototype = Object.create( Component$$1 && Component$$1.prototype );
    InfoIcon.prototype.constructor = InfoIcon;

    InfoIcon.prototype.componentDidMount = function componentDidMount () {
        // get references to DynamicTooltip elements
        this.tooltip = getEl(this.parentId + '-tooltip');
        this.content = getEl(this.parentId + '-tooltip-content');
    };

    InfoIcon.prototype.mouseOut = function mouseOut () {
        this.tooltip.style.left = LEFT$2;
    };

    InfoIcon.prototype.mouseOver = function mouseOver (e) {
        var ref = this;
        var tooltip = ref.tooltip;
        var content = ref.content; // DynamicTooltip elements   
        content.innerHTML = this.text;
        var w = content.offsetWidth;
        var h = content.offsetHeight;
        console.log(e.target.offsetLeft + ' ' + e.target.offsetTop);
        tooltip.style.left = (e.target.offsetLeft - w / 2 + f2)  + 'px';
        tooltip.style.top = (e.target.offsetTop - (h + 10)) + 'px';
    };

    InfoIcon.prototype.render = function render$$1 () {
        return (
            React__default.createElement( 'div', { style: this.infoIconStyle },
                React__default.createElement( 'span', { style: iconStyle, onMouseOver: this.mouseOver, onMouseOut: this.mouseOut, className: 'fa fa-info-circle' })
            )
        )        
    };

    return InfoIcon;
}(React.Component));

var PREDEFINED_URL = '/search/attributes/';
var ATTRIBUTES_URL = '/search/custom-report-attributes'; // url to retrieve all attributes

// inline css styles    
var padding$1 = '0 4px';
var attrStyle = { padding: padding$1, borderBottom: border_06 };
var attrLtStyle = Object.assign({}, inline, { width: '90%' });
var attrRtStyle = Object.assign({}, inline, { width: '10%', textAlign: 'right' });
var checkboxStyle$1 = { marginRight: 10 };
var coreStyle = Object.assign({}, inline, { paddingRight: 25, width: '25%' });
var customReportStyle = { fontSize: '12px', position: 'relative' };
var functionsStyle = {
          border: border_08
        , backgroundColor: color_08
        , padding: 4
        , marginBottom: 10
    };
var headerStyle$1 = { padding: '5px 10px', backgroundColor: color_header_dark, color: white, fontSize: '14px' };
var noteStyle = { padding: '5px 10px', backgroundColor: color_02, border: border_04, marginBottom: 10 };
var propStyle = { padding: padding, backgroundColor: color_08, borderBottom: border_10 };
var runReportIconStyle = Object.assign({}, inline, { marginLeft: 4, lineHeight: '14px', marginTop: 5 });
var titleStyle = { marginBottom: 10 };
var triangleStyle = { fontSize: 14, color: '#4f4' };
var uploadStyle = { marginRight: 10 };

var noteText = '';
noteText += '<p>Generate Custom Tabular Reports for Different Data Types.</p>';
noteText += '<p>First note the different types of data that can be selected: Structure, Polymer Entity, Assembly, or Non-polymer. Select data items that are to be included, and Run Report. Save tables in CSV or JSON format. Data APIs (link to https://www.rcsb.org/pages/webservices) are available to support large data sets.</p>';
noteText += '<p>Note: The database contains complex one-to-many relationships, and combining items from multiple data types may lead to false correlations.</p>';

var TabularReportCustom = (function (Component$$1) {
    function TabularReportCustom(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'getCore'  
            , 'getDataCallback'
            , 'getMenu'  
            , 'handleItemChecked'
            , 'handlePredefined'
            , 'handlePredefinedCallback'
            , 'handleSaveToMypdb'
            //, 'handleViewSaved'
            , 'runReport'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs

        this.title = React__default.createElement( 'div', { style: titleStyle }, React__default.createElement( 'h4', null, "Create Custom Tabular Report" ));
        this.note = React__default.createElement( 'div', { style: noteStyle, dangerouslySetInnerHTML: { __html: noteText } });
        this.id = 'tabular-report-custom';

        var runReportBtn = 
            React__default.createElement( 'div', { style: btn, className: 'qb-btn', onClick: this.runReport }, "Run Report ", React__default.createElement( 'div', { style: runReportIconStyle }, React__default.createElement( 'span', { style: triangleStyle, className: 'glyphicon glyphicon-triangle-right' }))
            );

        var predefinedReports = 
            React__default.createElement( 'div', { style: inline },
                React__default.createElement( 'select', { onChange: this.handlePredefined, style: selectStyle },
                    React__default.createElement( 'option', { value: '' }, "-- Modify a Predefined Report --"),
                    tabularReportGroups.map(function (g) {
                        return (
                            React__default.createElement( 'optgroup', { key: g.name, label: g.name },
                                g.reports.map(function (r) { return React__default.createElement( 'option', { key: r.id, value: r.id }, r.name); })
                            )
                        )   
                    })
                )
            );

        var saveToMypdbBtn = null;
            // TODO
            // <div style={st.btnRt} className='qb-btn' onClick={this.handleSaveToMypdb}>
            //     <span style={uploadStyle} className='fa fa-cloud-upload' />
            //     Save Custom Report to MyPDB
            // </div>

        var savedReportsBtn = null; 
        // TODO <div style={st.btn} className='qb-btn' onClick={this.handleViewSaved}>View Saved Custom Reports</div>            

        this.functions = 
            React__default.createElement( 'div', { style: functionsStyle },
                React__default.createElement( 'div', { style: lStyle },
                    predefinedReports
                ),
                React__default.createElement( 'div', { style: rStyle },
                    saveToMypdbBtn,
                    savedReportsBtn,
                    runReportBtn
                )
            );   
    }

    if ( Component$$1 ) TabularReportCustom.__proto__ = Component$$1;
    TabularReportCustom.prototype = Object.create( Component$$1 && Component$$1.prototype );
    TabularReportCustom.prototype.constructor = TabularReportCustom;

    TabularReportCustom.prototype.componentDidMount = function componentDidMount () {
        if (!this.props.customReport) { getData$1(ATTRIBUTES_URL, OPTIONS_GET, this.getDataCallback); }
    };

    // render the menu for each core
    TabularReportCustom.prototype.getCore = function getCore (customReport, core) {
        var map = customReport.map;
        var menu = customReport.menu;
        var data = menu[core];
        //u.logJson(file, menuData, 'getCore: core: menuData')
        
        return (
            React__default.createElement( 'div', { style: coreStyle },
                React__default.createElement( 'div', { style: headerStyle$1 }, CORE_MAP[core].name, " Data"),
                this.getMenu(map, data)
            )
        )
    };

    TabularReportCustom.prototype.getDataCallback = function getDataCallback (data, err) {
        this.props.dispatchAction(SET_CUSTOM_REPORT_ATTRIBUTES, { data: data } );
    };

    TabularReportCustom.prototype.getMenu = function getMenu (map, data) {
        var this$1 = this;

        return (
            React__default.createElement( 'div', null,
                data.map(function (group) {
                    return (
                        React__default.createElement( 'div', { key: group.name },
                            React__default.createElement( 'div', { style: propStyle }, group.name),
                            group.items.map(function (attr) {
                                if (map[attr]) {
                                    var ref = map[attr];
                                    var name = ref.name;
                                    var desc = ref.desc;
                                    var checked = ref.checked;
                                    return (
                                        React__default.createElement( 'div', { style: attrStyle },
                                            React__default.createElement( 'div', { style: attrLtStyle },
                                                React__default.createElement( 'input', { style: checkboxStyle$1, type: 'checkbox', value: attr, onClick: this$1.handleItemChecked, checked: checked }),
                                                name
                                            ),
                                            React__default.createElement( 'div', { style: attrRtStyle },
                                                desc && React__default.createElement( InfoIcon, { text: desc, marginTop: 2, parentId: this$1.id })
                                            )    
                                        )
                                    )                                    
                                } else {
                                    console.log(attr + ' ' + group.name + ' NOT FOUND');
                                }
                            })
                        )
                    )

                })
            )
        )
    };

    // handle item checkboxes
    TabularReportCustom.prototype.handleItemChecked = function handleItemChecked (e) {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var ref$1 = e.target;
        var value = ref$1.value;
        var checked = ref$1.checked;
        //console.log(file, value, checked)
        dispatchAction(SET_CUSTOM_REPORT_ATTRIBUTE, { attribute: value, checked: checked } );
    };

    TabularReportCustom.prototype.handlePredefined = function handlePredefined (e) {
        var report = e.target.value;
        //console.log(file, 'handlePredefined: report=' + report)

        if (report !== '') {
            var map = this.props.customReport.map;
            var keys = Object.keys(map);
            var hasChecked = false;
            for (var i = 0; i < keys.length; i++) {
                if (map[keys[i]].checked) { hasChecked = true; }
                break
            }
    
            if (hasChecked) {
                var msg$$1 = 'This will overwrite your existing attribute selection(s) with the attributes from the ' + MAP[report] + ' report';
                msg$$1 += MSGS.okToProceed;

                if (confirm(msg$$1)) {
                    getData$1(PREDEFINED_URL + report, OPTIONS_GET, this.handlePredefinedCallback);
                }
            } else {
                getData$1(PREDEFINED_URL + report, OPTIONS_GET, this.handlePredefinedCallback);
            }
        }
    };

    TabularReportCustom.prototype.handlePredefinedCallback = function handlePredefinedCallback (data) {
        //u.logJson(data)

        if (data && Array.isArray(data)) { this.props.dispatchAction(SET_PREDEFINED_ATTRIBUTES, { attributes: data } ); }
        else { alert('Error retrieving data.'); }
    };

    TabularReportCustom.prototype.handleSaveToMypdb = function handleSaveToMypdb () { // TODO
        alert('NOT YET IMPLEMENTED');    
        // console.log('handleSaveToMypdb')
        // const name = prompt('Please enter a name for this report', 'Report 1')
        // console.log('name=' + name)
    };

    // handleViewSaved() { // TODO
    //     console.log('handleSaveToMypdb')
    // }

    TabularReportCustom.prototype.runReport = function runReport () {
        var ref = this.props;
        var customReport = ref.customReport;
        var dispatchAction = ref.dispatchAction;
        var setViews = ref.setViews;
        var map = customReport.map;
        var attributes = [];
        for(var p in map) { if (map[p].checked) { attributes.push(p); } } // TODO order by core?
        //u.logJson(file, attributes, 'attributes')
        dispatchAction(SET_REPORT_PROPS, { attributes: attributes, batch: null, format: null, mode: null });
        setViews(REPORT, 'custom_report'); 
    };

    TabularReportCustom.prototype.render = function render$$1 () {
        var ref = this.props;
        var customReport = ref.customReport;

        if (customReport) {
            var entry               = this.getCore(customReport, 'entry');
            var polymer_entities    = this.getCore(customReport, 'polymer_entities');
            var assemblies          = this.getCore(customReport, 'assemblies');
            var nonpolymer_entities = this.getCore(customReport, 'nonpolymer_entities');        

            return (
                React__default.createElement( 'div', { style: customReportStyle },
                    React__default.createElement( DynamicTooltip, { parentId: this.id }),
                    this.title,
                    this.note,
                    this.functions,
                    entry,
                    polymer_entities,
                    assemblies,
                    nonpolymer_entities
                )
            )
        }
        return null
    };

    return TabularReportCustom;
}(React.Component));

var TabularReportCustom$1 = connect(mapStateToProps, mapDispatchAllToProps)(TabularReportCustom);

var file$62 = 'components/TabularReportResults';
var reportQuery = '/search/report-query?';

// inline css styles    
var idsStyle = { border: border_08, padding: 5 };
var headerStyle$2 = { marginBottom: 10 };
var resultsStyle = { fontSize: 12 };
var batchStyle = { border: border_10, padding: 5, marginBottom: 10 };
var batchLinkStyle = { display: 'inline-block', color: color_link, cursor: 'pointer' };
var batchLinkVisitedStyle = { display: 'inline-block', color: color_link_visited, cursor: 'pointer' };

var TabularReportResults = (function (Component$$1) {
    function TabularReportResults(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'download'
            , 'getBatchLinks'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); });
    }

    if ( Component$$1 ) TabularReportResults.__proto__ = Component$$1;
    TabularReportResults.prototype = Object.create( Component$$1 && Component$$1.prototype );
    TabularReportResults.prototype.constructor = TabularReportResults;

    TabularReportResults.prototype.download = function download (from, to, report) {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var tabularReport = ref.tabularReport;
        var batch = tabularReport.batch;
        var format = tabularReport.format;
        var mode = tabularReport.mode;
        var clicked = tabularReport.clicked;
        console.log(file$62, report, batch, format, mode);

        if (report === 'pdb_ids') { getIds(this.props, { batch: batch, mode: mode, from: from, to: to }); } // pass params as object
        else { getData$2(this.props, { batch: batch, format: format, from: from, to: to }); } // pass params as object

        this.props.dispatchAction(SET_REPORT_PROPS, { clicked: clicked.concat( [from] ) });
    };

    TabularReportResults.prototype.getBatchLinks = function getBatchLinks (total_count, report, clicked) {
        var this$1 = this;

        console.log('getBatchLinks', total_count, report);
        logJson(file$62, clicked, 'clicked');
        var count = (report === 'pdb_ids') ? IDS_COUNT : DATA_DOWNLOAD_COUNT;
        var num = parseInt(total_count / count);
        if (total_count % count !== 0) { num++; }
        var links = [];
        var loop = function ( i ) {
            var from = i * count + 1;
            var to = (i + 1) * count;
            if (i === num - 1) { to = Math.min(to, total_count); }
            var style = (clicked.includes(from)) ? batchLinkVisitedStyle : batchLinkStyle;
            links.push(React__default.createElement( 'div', { style: style, onClick: function () { return this$1.download(from, to, report); } }, "Rows ", from, " -  ", to));
            links.push(React__default.createElement( 'br', null ));
        };

        for (var i = 0; i < num; i++) loop( i );
        return links
    };

    TabularReportResults.prototype.render = function render$$1 () {
        var ref = this.props;
        var booleans = ref.booleans;
        var pager = ref.pager;
        var returnType = ref.returnType;
        var searchResults = ref.searchResults;
        var tabularReport = ref.tabularReport;
        var views = ref.views;

        if (!booleans.dataLoading) {
            var table = tabularReport.table;
            var batch = tabularReport.batch;
            var format = tabularReport.format;
            var mode = tabularReport.mode;
            var clicked = tabularReport.clicked;
            var report = views.report;
            console.log(file$62 + ': report=' + report);

            var identifierStr = getIdentifierStr(searchResults, pager);

            var reportName = (report === 'pdb_ids') ? 'PDB IDs' : MAP[report];

            var title = React__default.createElement( 'h4', null, reportName, " Report" );

            var header;
            
            if (report === 'pdb_ids') {
                header = React__default.createElement( 'div', { style: headerStyle$2 }, title);
            } else {
                var href = reportQuery + 'identifiers=' + identifierStr + '&returnType=' + returnType;
                href += (report === 'custom_report')
                    ? '&attributes=' + tabularReport.attributes.join(',')
                    : '&report=' + report;

                header =    
                    React__default.createElement( 'div', { style: headerStyle$2 },
                        React__default.createElement( 'div', { style: lStyle }, title),
                        React__default.createElement( 'div', { style: rStyle },
                            React__default.createElement( 'a', { rel: 'noopener noreferrer', href: href, target: '_blank' }, "View GraphQL Query")
                        )
                    );    
            }

            var batchLinks;
            if (batch) {
                var what = (report === 'pdb_ids') ? IDS_COUNT + ' IDs' : DATA_DOWNLOAD_COUNT + ' records';
                var batchTitle = (report === 'pdb_ids') 
                    ? 'Batch ' + ((mode === 'download') ? 'Download' : 'Display')
                    :  format.toUpperCase() + ' Batch Download';
                var batchAction = (report === 'pdb_ids' && mode === 'display') ? 'display' : 'download';    
                var total_count = searchResults.total_count;

                batchLinks = 
                    React__default.createElement( 'div', { style: batchStyle },
                        React__default.createElement( 'p', null, React__default.createElement( 'b', null, batchTitle, ":" ), " ", batchAction, " the complete data set in batches of up to ", what, ". Each file may take up to one minute to ", batchAction, ". ", React__default.createElement( 'span', { dangerouslySetInnerHTML: {__html:MSGS.downloadMsg} }) ),
                        this.getBatchLinks(total_count, report, clicked)
                    );
            }
            
            return (
                React__default.createElement( 'div', { style: resultsStyle },
                    header,
                    batchLinks,
                    searchResults && report === 'pdb_ids' &&  React__default.createElement( 'div', { style: idsStyle }, identifierStr),
                    searchResults && table && report !== 'pdb_ids' &&  React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: table } })
                )
            )    
        }
        return null
    };

    return TabularReportResults;
}(React.Component));

function getIdentifierStr(searchResults, pager) {
    var identifiers = getIdentifiers(searchResults, pager.rows, pager.start);
    return identifiers.join(',')
}

var TabularReportResults$1 = connect(mapStateToProps, mapDispatchAllToProps)(TabularReportResults);

var Results = (function (Component$$1) {
    function Results(props) {
        Component$$1.call(this, props);
        this.handleItemChecked = this.handleItemChecked.bind(this);
    }

    if ( Component$$1 ) Results.__proto__ = Component$$1;
    Results.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Results.prototype.constructor = Results;

    Results.prototype.handleItemChecked = function handleItemChecked (e) {
        var ref = e.target;
        var value = ref.value;
        var checked = ref.checked;
        this.props.setItemChecked(value, checked);
    };

    Results.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var booleans = ref.booleans;
        var cw = ref.cw;
        var attributeValueSearch = ref.attributeValueSearch;
        var dataResults = ref.dataResults;
        var request = ref.request;
        var searchResults = ref.searchResults;
        var views = ref.views;
        var alignmentView = ref.alignmentView;

        // get querySequence from request obj
        var querySequence;
        var ret = {};
        getServiceNode(request.query, ret, 'sequence');
        if (ret.node) { querySequence = ret.node.parameters.value; }
        //console.log('querySequence=' + querySequence)
        var searchView = views.search;
        
        if (!booleans.dataLoading && dataResults) {
            if (searchView === REPORT) {
                return (views.report === 'create_custom_report') ? React__default.createElement( TabularReportCustom$1, null ) : React__default.createElement( TabularReportResults$1, null )
            } else {
                var items = dataResults.map( function (item) {
                    var checked = searchResults.map[item.identifier].checked;
                    return React__default.createElement( ResultsItem, {
                                item: item, alignmentView: alignmentView, key: item.identifier, checked: checked, searchView: searchView, cw: cw, handleItemChecked: this$1.handleItemChecked, attributeValueSearch: attributeValueSearch, querySequence: querySequence })
                });

                if (searchView === GALLERY) {
                    var rows = [];
                    var perRow = (cw === XS) ? 3 : 4;
                    for(var i = 0, n = items.length; i < n; i += perRow) {
                        var row = (perRow === 3)
                            ? React__default.createElement( 'tr', null, items[i], items[i + 1], items[i + 2] )
                            : React__default.createElement( 'tr', null, items[i], items[i + 1], items[i + 2], items[i + 3] );
                        rows.push(row);
                    }
                    return React__default.createElement( 'table', { id: 'gallery-items' }, rows)
                } else if (searchView === COMPACT) {
                    var header = 
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'th', null, "ID" ),
                            React__default.createElement( 'th', null, "Title" ),
                            React__default.createElement( 'th', null, "Released" ),
                            React__default.createElement( 'th', null )
                        );
                    return (
                        React__default.createElement( 'table', { id: 'compact-view' },
                            header,
                            items
                        )
                    )    
                } else {
                    return React__default.createElement( 'div', null, items )
                }    
            }
        }
        return null
    };

    return Results;
}(React.Component));

var Results$1 = connect(mapStateToProps, mapDispatchAllToProps)(Results);

/*
    This component is a container for Pager, Functions, and Results.
*/

var Result = (function (Component$$1) {
    function Result () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Result.__proto__ = Component$$1;
    Result.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Result.prototype.constructor = Result;

    Result.prototype.render = function render$$1 () {
        //console.log(file + ' render')
        var ref = this.props.views;
        var report = ref.report;
        var search = ref.search;
        var topPager = true, bottomPager = true;

        if (search === REPORT) {
            if (report === 'create_custom_report') { topPager = false; }
            if (report === 'create_custom_report' || report === 'pdb_ids') { bottomPager = false; }
        }

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( Functions$1, null ),
                React__default.createElement( Space, { h: 10 }),
                React__default.createElement( 'div', null,
                    topPager && React__default.createElement( Pager$1, null ),
                    React__default.createElement( Space, { h: 10 }),
                    React__default.createElement( Results$1, null ),
                    React__default.createElement( Space, { h: 10 }),
                    bottomPager && React__default.createElement( Pager$1, null )
                )
            )
        )
    };

    return Result;
}(React.Component));

var Result$1 = connect(mapStateToProps, mapDispatchNoneToProps)(Result);

// css for error msg - TODO
/*
const error = {
        div: {
            backgroundColor: st.color_02,
            border: st.border_10,
            borderRadius: st.borderRadius,
            marginBottom: 10,
            fontSize: 12,
            padding: 4
        },
        tbl: {
            width: '100%',
            borderBottom: st.border_10
        },
        label: {
            padding: st.padding,
            fontWeight: 'bold',
            color: '#f44'
        },
        clear: {
            padding: st.padding,
            textAlign: 'right'
        }
    }
*/

var table = { width: '100%' };
var tr$2 = { verticalAlign: 'top' };
var refinements = { width: 290, paddingRight: 10 };
var result$1 = { width: '100%' };
var errStyle = Object.assign({}, msg$1, { color: 'rgba(207, 0, 0, 1)' });
var continueBtn = { textAlign: 'right' };

var CombinedSearch = (function (Component$$1) {
    function CombinedSearch () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) CombinedSearch.__proto__ = Component$$1;
    CombinedSearch.prototype = Object.create( Component$$1 && Component$$1.prototype );
    CombinedSearch.prototype.constructor = CombinedSearch;

    CombinedSearch.prototype.continue = function continue$1 () { location.href = '/search'; };

    CombinedSearch.prototype.render = function render$$1 () {
        var ref = this.props;
        var cw = ref.cw;
        var msg$$1 = ref.msg;
        var dataResults = ref.dataResults;
        var searchResults = ref.searchResults;
        //const msgStyle = (msg && msg.type === c.MSG_ERROR) ? errStyle : st.msg

        return (
            React__default.createElement( 'div', null,
                msg$$1 && 
                    React__default.createElement( 'div', null,
                        msg$$1.type === MSG_ERROR
                            ? React__default.createElement( 'div', { style: errStyle },
                                React__default.createElement( 'table', { style: table },
                                    React__default.createElement( 'tr', null,
                                        React__default.createElement( 'td', null, React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: msg$$1.value } }) ),
                                        React__default.createElement( 'td', { style: continueBtn },
                                            React__default.createElement( 'div', { style: btn, className: 'search-btn', onClick: this.continue }, "Continue")
                                        )
                                    )
                                )        
                              )  
                            : React__default.createElement( 'div', { style: msg$1, dangerouslySetInnerHTML: { __html: msg$$1.value } })
                    ),     
                        

                React__default.createElement( 'div', null,
                    React__default.createElement( QueryBuilder$1, null ),
                    React__default.createElement( Space, { h: 10 })
                ),

                dataResults && searchResults && 
                    React__default.createElement( 'div', null,
                        (cw === LG || cw === MD) && 
                            React__default.createElement( 'table', { style: table },
                                React__default.createElement( 'tr', { style: tr$2 },
                                    React__default.createElement( 'td', { style: refinements }, React__default.createElement( Refinements$1, null )),
                                    React__default.createElement( 'td', { style: result$1 }, React__default.createElement( Result$1, null ))
                                )    
                            ),
                        (cw === SM || cw === XS) && 
                            React__default.createElement( 'div', null,
                                React__default.createElement( Result$1, null ),
                                React__default.createElement( Space, { h: 10 }),
                                React__default.createElement( Refinements$1, null )
                            )                            
                    )
            )
        )
    };

    return CombinedSearch;
}(React.Component));

var CombinedSearch$1 = connect(mapStateToProps, mapDispatchAllToProps)(CombinedSearch);

var DataLoading = (function (Component$$1) {
    function DataLoading () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) DataLoading.__proto__ = Component$$1;
    DataLoading.prototype = Object.create( Component$$1 && Component$$1.prototype );
    DataLoading.prototype.constructor = DataLoading;

    DataLoading.prototype.render = function render$$1 () {
        var ref = this.props.booleans;
        var dataLoading = ref.dataLoading;
        var countLoading = ref.countLoading;
        if (dataLoading || countLoading) {
            var msg = dataLoading ? MSGS.dataLoading : MSGS.countLoading;
            return (
                React__default.createElement( 'div', { id: 'data-loading' },
                    React__default.createElement( 'div', { className: "progress" },
                        React__default.createElement( 'div', { className: "progress-bar progress-bar-striped active" }, msg)
                    )
                )
            )
        }
        return null
    };

    return DataLoading;
}(React.Component));

var DataLoading$1 = connect(mapStateToProps, mapDispatchNoneToProps)(DataLoading);

/* this component displays the current query in human-readable form */

var file$63 = 'components/Query';

// css inline styles
var queryBaseStyle = Object.assign({}, inline, { 
          padding: 4 
        , border: border_08 
        , backgroundColor: color_02 
        , fontSize: 13 });
var queryBtn = Object.assign({}, btn, { marginRight: 2 }); 

var Query = (function (Component$$1) {
    function Query(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleJson'
            , 'openInQb'
            , 'saveToMypdb' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); });
    }

    if ( Component$$1 ) Query.__proto__ = Component$$1;
    Query.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Query.prototype.constructor = Query;

    Query.prototype.handleJson = function handleJson () {
        var request = clone(this.props.request); 
        cleanNode(request.query);
        delete request.request_info; 
        getJsonRequest(request);
    };

    Query.prototype.openInQb = function openInQb () {
        var request = getQbRequest(this.props.request); // convert request to qb request
        if (request) { this.props.dispatchAction(QB_INIT, { request: request }); } // open request in queryBuilder
        else { console.log(file$63 + ': REQUEST IS NULL'); }
    };
        
    Query.prototype.saveToMypdb = function saveToMypdb () {
        var ref = this.props;
        var history = ref.history;
        var request = ref.request;
        var item = history.map[request.request_info.query_id];
        if (item) { save(item); }
        else { console.error('item NOT FOUND for request.request_info.query_id=' + request.request_info.query_id); }
    };

    Query.prototype.render = function render$$1 () {
        var ref = this.props;
        var booleans = ref.booleans;
        var containerWidth = ref.containerWidth;
        var cw = ref.cw;
        var dispatchAction = ref.dispatchAction;
        var history = ref.history;
        var prevNextSearch = ref.prevNextSearch;
        var request = ref.request;
        var requestHtml = ref.requestHtml;
        var query_id = (request.request_info) ? request.request_info.query_id : null;
        var hasMypdb = booleans.hasMypdb;
        //const openInQB = getOpenInQB(request, queryBuilder)

        if (query_id && requestHtml) {

            // prev/next
            var ids = history.ids;
            var len = ids.length;
            var   prevNext = null
                , prevNextWidth = 0;
            if (len > 1) {
                var
                      prevOp = 'prev'
                    , prevStyle = btnRt
                    , prevClass = 'srch-btn'
                    , nextOp = 'next'
                    , nextStyle = btn
                    , nextClass = 'srch-btn';

                if (query_id === ids[len - 1]) {
                    prevOp = null;
                    prevStyle = btnRtDisabled;
                    prevClass = null;
                }    
                if (query_id === ids[0]) {
                    nextOp = null;
                    nextStyle = btnDisabled;
                    nextClass = null;
                }

                prevNext = 
                    React__default.createElement( 'div', { style: inline },
                        React__default.createElement( 'div', { style: prevStyle, className: prevClass, onClick: function () { return prevNextSearch(prevOp); } }, iconLeft),
                        React__default.createElement( 'div', { style: nextStyle, className: nextClass, onClick: function () { return prevNextSearch(nextOp); } }, iconRight)
                    );
                prevNextWidth = 55;    
            }

            // right btn(s)
            var rtBtnsStyle = (cw === SM || cw === XS) ? { textAlign: 'right', marginTop: 5 } : inline; 
            var rtBtns =
                React__default.createElement( 'div', { style: rtBtnsStyle },
                    React__default.createElement( 'div', { style: queryBtn, className: 'srch-btn', onClick: this.openInQb }, "Open In Query Builder"),     
                    request && React__default.createElement( 'div', { style: queryBtn, className: 'srch-btn', onClick: this.handleJson }, "JSON ", iconNewWindow),  
                    hasMypdb
                        ?   React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: this.saveToMypdb },
                                React__default.createElement( 'div', { style: inline }, iconCloud), " Save to MyPDB")
                        :   React__default.createElement( 'div', { style: btn, className: 'srch-btn', onClick: function () { return dispatchAction(SET_VIEW, { tab: TAB_MYPDB }); } }, "MyPDB Login")
                );  
            var rtBtnsWidth = hasMypdb ? 261 : 232;
            if (request) { rtBtnsWidth += 68; }

            // query
            var width = (cw === SM || cw === XS) ? containerWidth - (prevNextWidth + 5) : containerWidth - (prevNextWidth + rtBtnsWidth + 10); // see margin definition on next line
            var marginLeft = (len > 1) ? 5 : 0;
            var marginRight = (cw === SM || cw === XS) ? 0 : 5;
            var queryStyle = Object.assign({}, queryBaseStyle, { width: width, marginLeft: marginLeft, marginRight: marginRight });
            var query = React__default.createElement( 'div', { style: queryStyle, dangerouslySetInnerHTML: { __html: '<strong>QUERY:</strong> ' + requestHtml } });

            return (
                React__default.createElement( 'div', null,
                    prevNext,
                    query,     
                    rtBtns,  
                    React__default.createElement( Space, { h: 10 })     
                )    
            )
        }
        return null
    };

    return Query;
}(React.Component));

var Query$1 = connect(mapStateToProps, mapDispatchAllToProps)(Query);

/* this component is a container for all search subcomponents  */

var Search = (function (Component$$1) {
    function Search () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Search.__proto__ = Component$$1;
    Search.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Search.prototype.constructor = Search;

    Search.prototype.render = function render$$1 () {
        //console.log(file + ' render')
        var ref = this.props;
        var requestHtml = ref.requestHtml;

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( DataLoading$1, null ),
                requestHtml && React__default.createElement( Query$1, null ),
                React__default.createElement( CombinedSearch$1, null )
            )
        )
    };

    return Search;
}(React.Component));

var Search$1 = connect(mapStateToProps, mapDispatchNoneToProps)(Search);

/*
    This script renders the tabs array at the top of the search pages. Clicking on a tab sets the state 'tab' property.
*/

var Tabs = (function (Component$$1) {
    function Tabs () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Tabs.__proto__ = Component$$1;
    Tabs.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Tabs.prototype.constructor = Tabs;

    Tabs.prototype.handleClick = function handleClick (tab) { // TODO place directly in onClick
        this.props.dispatchAction(SET_VIEW, { tab: tab });
        return false
    };

    Tabs.prototype.render = function render$$1 () {
        var this$1 = this;

        return (
            React__default.createElement( 'div', null,
                React__default.createElement( 'ul', { className: 'nav nav-tabs' },
                    TABS.map(function (tab) {
                        var className;
                        var liStyle = { cursor: 'pointer' };
                        if (tab === this$1.props.views.tab) {
                            className = 'active';
                            liStyle = null;
                        }
                        return React__default.createElement( 'li', { key: tab, style: liStyle, className: className, onClick: function () { return this$1.handleClick(tab); } }, React__default.createElement( 'a', null, TAB_NAMES[tab] ))
                    })
                )
            )
        )
    };

    return Tabs;
}(React.Component));

var Tabs$1 = connect(mapStateToProps, mapDispatchAllToProps)(Tabs);

/* this component renders a node in the tree */

/*
    In order to minimize data file size, node property names are shortened to one or two chars. 
    All properties other than 'name' ('n') and 'id' are derived, meaning that they are not on the original data file.
    {
        "n": "Viruses", // name
        "d": 1,         // depth  
        "i": 1,         // index
        "p": "root",    // parent index
        "o": false,     // open    
        "c": 13237,     // count    
        "id": "10239",  // id
        "hasCh": true,  // has children - only present if the node has children but "ch" is not defined
        "ch": []        // children
      },
*/

var Node = (function (Component$$1) {
    function Node () {
        Component$$1.apply(this, arguments);
    }

    if ( Component$$1 ) Node.__proto__ = Component$$1;
    Node.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Node.prototype.constructor = Node;

    Node.prototype.componentDidMount = function componentDidMount () {
        var node = this.props.node;
        if (node.s) { scrollToNode(node.i); }
    };

    // TODO this may not be the best place for this logic, but the element must exist before this logic will work
    Node.prototype.componentDidUpdate = function componentDidUpdate (prevProps) {
        // TODO refactor
        //const node = this.props.node
        //if (node.s && node.s !== prevProps.node.s) scrollToNode(node.i)
    };

    Node.prototype.render = function render$$1 () {
        var ref = this.props;
        var node = ref.node;
        var parent = ref.parent;
        var tree_id = ref.tree_id;
        var clickNode = ref.clickNode;
        var clickLink = ref.clickLink;
        var id = node.id;
        var n = node.n;
        var ch = node.ch;
        var hasCh = node.hasCh;
        var d = node.d;
        var i = node.i;
        var pi = node.pi;
        var o = node.o;
        var c = node.c;
        var s = node.s;
        //u.logJson(file, { id, n, ch, hasCh, d, i, pi, o, c, s })

        var ref$1 = tree_config[tree_id];
        var is_go = ref$1.is_go;
        var show_id = ref$1.show_id;
        var sort_by = ref$1.sort_by;
        var return_type = ref$1.return_type;

        var label = '';
        if (sort_by === 'id') {
            if (show_id) { label += '<strong>' + id + '</strong> - '; }
            label += n;
        } else {
            if (n) {
                label += n;
                if (show_id) {
                    if (is_go) { label += ' <strong>(GO ID:' + id + ')</strong>'; }
                    else { label += ' <strong>(' + id + ')</strong>'; }
                }    
            } else {
                label += '<strong>(' + id + ')</strong>';
            }
        }

        var cName = (s) ? 'tree-node-selected' : 'tree-node';

        var word;
        if (return_type === 'entry') { word = c === 1 ? 'Structure' : 'Structures'; }
        else if (return_type === 'assembly') { word = c === 1 ? 'Assembly' : 'Assemblies'; }
        else { word = c === 1 ? 'Polymer Entity' : 'Polymer Entities'; }

        var display = (parent && parent.o) ? 'block' : 'none';
        var style = { display: display };

        var space = (d - 1) * 20;
        if (!hasCh) { space += 15; }

        // TODO try text-indent, which did not work previously

        var nodeClick = (hasCh) ? function () { return clickNode(node); } : null;

        return (
            React__default.createElement( 'div', null,
                (n || id) &&
                    React__default.createElement( 'div', { id: 'tree-item-' + i, className: cName, style: style },
                        React__default.createElement( 'span', { onClick: nodeClick },
                            space > 0 && React__default.createElement( Space, { w: space }),
                            hasCh && o && iconDown,
                            hasCh && !o && iconRight
                        ),     
                        React__default.createElement( 'span', { dangerouslySetInnerHTML: { __html: label }, onClick: nodeClick }),
                        c && React__default.createElement( 'span', null, React__default.createElement( 'i', null, " - [ ", React__default.createElement( 'a', { className: 'tree-browser-link', onClick: function () { return clickLink(node); } }, c, " ", word), " ]" ) )
                    ),

                o && ch &&
                    ch.map(function (child) {
                        return React__default.createElement( Node, { key: child.i, node: child, parent: node, tree_id: tree_id, clickNode: clickNode, clickLink: clickLink })
                    })
            )
        )
    };

    return Node;
}(React.Component));

function scrollToNode(i) {
    window.scrollTo(0, getYOffset(document.getElementById('tree-item-' + i)));
}

function getYOffset(el) {
    var y = 0;
    do {
        y += el.offsetTop || 0;
        el = el.offsetParent;
    } while(el)
    
    return y - 100
}

var file$66 = 'components/TreeSearchBar';
var URL$1 = '/search/tree-menu';
var MIN_VAL_LEN$1 = 2;
var inputText$1 = { // css for input text element
          width: '100%'
        , height: 28
        , border: border_20
    };

var TreeSearchBar = (function (Component$$1) {
    function TreeSearchBar(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
                  'handleInputChange'
                , 'handleInputChangeCallback'
                , 'handleInputClick'
                , 'handleMenuSelect' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to func

        this.guid = getGuid();
        this.name = 'tree-search-bar';
        this.state = getDefault('menu-state');
    }

    if ( Component$$1 ) TreeSearchBar.__proto__ = Component$$1;
    TreeSearchBar.prototype = Object.create( Component$$1 && Component$$1.prototype );
    TreeSearchBar.prototype.constructor = TreeSearchBar;

    // text input value is changed
    TreeSearchBar.prototype.handleInputChange = function handleInputChange (e) {
        var ref = this.props;
        var tree_id = ref.tree_id;
        var ref$1 = e.target;
        var value = ref$1.value;
        console.log('value=' + value);

        if (value.length > MIN_VAL_LEN$1) {
            var url = [URL$1, tree_id, value].join('/');
            getData$1(url, OPTIONS_GET, this.handleInputChangeCallback);
        } else {
            updateMenu(getDefault('menu-state'), this);
        }
    };

    // 
    TreeSearchBar.prototype.handleInputChangeCallback = function handleInputChangeCallback (menuItems) {
        //console.log(file, 'handleInputChangeCallback: menuItems.length=' + menuItems.length)
        if (menuItems && menuItems.length > 0) { updateMenu({ menuItems: menuItems, menuIndex: -1, menuOpen: true }, this); }
        else { updateMenu(getDefault('menu-state'), this); }
    };

    // text input is clicked  
    TreeSearchBar.prototype.handleInputClick = function handleInputClick (e) {
        var ref = e.target;
        var value = ref.value;
        console.log(file$66, 'value=' + value);
        if (value.length > MIN_VAL_LEN$1) {
            if (this.state.menuItems) { updateMenu({ menuOpen: true }, this); }
        }  
    };

    // menu item selected either by clicking or hitting 'enter' key
    TreeSearchBar.prototype.handleMenuSelect = function handleMenuSelect (item) {
        var id = item[1];
        this.props.selectNode(id);
        updateMenu({ menuOpen: false }, this);
    };

    TreeSearchBar.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.state;
        var menuIndex = ref.menuIndex;
        var menuItems = ref.menuItems;
        var menuOpen = ref.menuOpen;
        //console.log('menuItems.length=' + menuItems.length)
        //u.logJson(file, menuItems)
        
        return (
            React__default.createElement( 'div', { id: 'menu-container-' + this.guid, className: 'input-menu-container' },
                React__default.createElement( 'input', {  type: 'text', style: inputText$1, onClick: function (e) { return this$1.handleInputClick(e); }, onChange: this.handleInputChange, placeholder: PLACE_HOLDERS.treeSearchBar, autoComplete: 'off', spellCheck: 'false' }),
                menuOpen &&
                    React__default.createElement( 'div', { className: 'input-menu' },
                        menuItems.map(function (item, i) {
                            var __html = item[0];
                            var selected = (i === menuIndex) ? 'selected' : null;
                            return React__default.createElement( 'div', { id: 'menu' + i, key: 'i' + i, className: selected, onClick: function () { return this$1.handleMenuSelect(item); }, dangerouslySetInnerHTML: { __html: __html } })
                        })
                    )
            )
        )
    };

    return TreeSearchBar;
}(React.Component));

var TreeSearchBar$1 = connect(mapStateToProps, mapDispatchNoneToProps)(TreeSearchBar);

var file$64 = 'components/tree-browser/TreeApp';
var URL = '/search/tree';
var PATH$1 = '/search/browse/';
var view$1 = 'tree';
var operator = 'exact_match';

/*
    In order to minimize data file size, node property names are in most cases shortened to one or two chars. 
    All properties are derived unless marked as 'from the original data file'.
        {
            "n": "Viruses", // name - from the original data file
            "d": 1,         // depth  
            "i": 1,         // index
            "p": "root",    // parent index
            "o": false,     // open    
            "c": 13237,     // count    
            "id": "10239",  // id - from the original data file
            "hasCh": true,  // has children - only present if the node has children but "ch" is not defined
            "ch": []        // children
        },
*/
var TreeApp = (function (Component$$1) {
    function TreeApp(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'clickLink'
            , 'clickNode'
            , 'clickTree'
            , 'getNode'
            , 'getNodeCallback'
            , 'saveTree'
            , 'selectNode'
            , 'selectNodeCallback'
            , 'setTree'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to func

        this.state = {};
    }

    if ( Component$$1 ) TreeApp.__proto__ = Component$$1;
    TreeApp.prototype = Object.create( Component$$1 && Component$$1.prototype );
    TreeApp.prototype.constructor = TreeApp;

    TreeApp.prototype.componentDidMount = function componentDidMount () {
        console.log(file$64, 'componentDidMount');
        var tree_id = this.props.views.tree;
        this.setTree(tree_id); // test err:  + '_'
    };

    TreeApp.prototype.componentWillUnmount = function componentWillUnmount () {
        this.saveTree();
    };

    TreeApp.prototype.clickLink = function clickLink (node) {
        //u.logJson(file, node, 'clickLink: node')
        // const { attributeValueSearch, views } = this.props   
        // const tree_id = views.tree 
        // const { attribute, is_go, name_attribute, search_by, return_type } = tree_config[tree_id]
        //u.logJson(file, tree_config)
        // if (search_by === 'name') { // TODO search_by
        //     attributeValueSearch(name_attribute, node.n, return_type)
        // } else {
        //     const id = (is_go) ? toGoid(node.id) : node.id
        //     attributeValueSearch(attribute, id, return_type)
        // }
        /*
        "atc": {
            "name": "ATC",
            "return_type": "entry",
            "query": "get_es_query_count_atc",
            "attribute": "rcsb_chem_comp_annotation.annotation_lineage.id",
            "type_attribute": "rcsb_chem_comp_annotation.type",
            "type_value": "ATC",
            "sort_by": "multi_sort_by_id_lexical_and_numeric",
            "nested": true,
            "is_go": false,
            "show_id": true,
            "external": true
        }


        {
            "type": "group",
            "logical_operator": "and",
            "nodes": [
                {
                    "type": "terminal",
                    "service": "text",
                    "parameters": {
                        "attribute": "rcsb_chem_comp_annotation.annotation_lineage.id",
                        "negation": false,
                        "operator": "exact_match",
                        "value": "A02"
                    },
                    "node_id": 0
                },
                {
                    "type": "terminal",
                    "service": "text",
                    "parameters": {
                        "attribute": "rcsb_chem_comp_annotation.type",
                        "operator": "exact_match",
                        "value": "ATC"
                    },
                    "node_id": 1
                }
            ],
            "label": "nested-attribute"
        }
        */
        var ref = this.props;
        var requestSearch = ref.requestSearch;
        var views = ref.views;   
        var ref$1 = tree_config[views.tree];
        var attribute = ref$1.attribute;
        var is_go = ref$1.is_go;
        var return_type = ref$1.return_type;
        var type_attribute = ref$1.type_attribute;
        var type_value = ref$1.type_value; // TODO nested, ? true for ec, membrane, mesh, genome even though there is no type attr 
        var value = (is_go) ? toGoid(node.id) : node.id;
        var attributeNode = getTextTerminalNode({ attribute: attribute, operator: operator, value: value });
        
        var query = (type_attribute) 
            ? getTextGroupNestedNode(
                      attributeNode
                    , getTextTerminalNode({ attribute: type_attribute, operator: operator, value: type_value }))
            : attributeNode;
        var request = getRequest(query, return_type);
        setRequestInfo(request);

        logJson(file$64, request, 'request');

        requestSearch(request, file$64 );     
    };

    TreeApp.prototype.clickNode = function clickNode (node) {
        if (node.ch) {
            node.o = !node.o;
            var ref = this.state;
            var tree = ref.tree;
            this.setState({ tree: tree }); // re-render
        } else {
            var tree_id = this.props.views.tree;
            this.getNode(tree_id, node);
        }
    };

    // called when user clicks tree btn
    TreeApp.prototype.clickTree = function clickTree (id) {
        if (this.props.views.tree !== id) { this.setTree(id); }
    };
    
    // called when user clicks a node in the tree
    TreeApp.prototype.getNode = function getNode (tree_id, obj) {
        var node_id;
        if (typeof obj === 'string') { node_id = obj; }  // obj can be node_id or node
        else { node_id = (tree_config[tree_id].is_go) ? obj.i : obj.id; }
        //console.log(file, 'loading data for tree_id=' + tree_id + ', node_id=' + node_id)
 
        var url = [URL, tree_id, node_id].join('/');
        //console.log(file, 'url=' + url)
        
        getData$1(url, OPTIONS_GET, this.getNodeCallback, { obj: obj });
    };

    TreeApp.prototype.getNodeCallback = function getNodeCallback (node, err, payload) {
        if (node.id === 'root' || node.d === 0) {
            this.setState({ tree: node });
        } else {
            // TODO fix immutable issue here
            var obj = payload.obj;
            //u.logJson(file, payload, 'payload')
            obj.ch = node.ch;
            obj.o = true;
            var ref = this.state;
            var tree = ref.tree;
            this.setState({ tree: tree }); // re-render
        }
    };

    // save the current tree, if it exists, to props
    TreeApp.prototype.saveTree = function saveTree () {
        var ref = this.props;
        var saveTreeData = ref.saveTreeData;
        var views = ref.views;
        var tree_id = views.tree;
        var ref$1 = this.state;
        var tree = ref$1.tree;
        if (tree) { saveTreeData(tree_id, tree); }
    };

    // called when user selects a node from the tree search menu
    TreeApp.prototype.selectNode = function selectNode (node_id) {
        //console.log(file, 'selectNode: node_id=' + node_id)
        var tree_id = this.props.views.tree;
        var url = [URL + '-select', tree_id, node_id].join('/');
        //console.log(file, 'url=' + url)

        getData$1(url, OPTIONS_GET, this.selectNodeCallback);
    };

    TreeApp.prototype.selectNodeCallback = function selectNodeCallback (node, err) {
        var tree = clone(this.state.tree);
        clearSelected(tree);
        for (var i = 0; i < tree.ch.length; i++) {
            if (tree.ch[i].i === node.i) { tree.ch[i] = node; } 
        }
        this.setState({ tree: tree });
    };

    TreeApp.prototype.setTree = function setTree (tree_id) {
        var ref = this.props;
        var dispatchAction = ref.dispatchAction;
        var pushState = ref.pushState;
        var trees = ref.trees;
        this.saveTree();

        if (trees[tree_id]) { this.setState({ tree: trees[tree_id] }); } // load tree from props
        else { this.getNode(tree_id, 'root'); } // load tree from url
    
        dispatchAction(SET_VIEW, { tree: tree_id });
        pushState({ path: PATH$1 + tree_id, src: file$64 + ': setTree', view: view$1, id: tree_id });
        setGtag$1('Browse Annotations', tree_config[tree_id].name);
    };

    TreeApp.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.state;
        var tree = ref.tree;
        var tree_id = this.props.views.tree;
        console.log(file$64, 'render: ' + tree_id);

        if (tree) {
            var config = tree_config[tree_id];
            //u.logJson(file, config)
            var show_id = config.show_id;
            var headerClass = (config.external) ? 'tree-browse-header-external' :  'tree-browse-header';
            var node = tree;

            return (
                React__default.createElement( 'div', { id: 'tree-browse' },
                    tree_ids.map(function (id) {
                        var cName = (id === tree_id) ? BTN_XS : BTN_XS + ' btn-tree-browse';
                        return React__default.createElement( 'span', { key: id }, React__default.createElement( 'a', { className: cName, onClick: function () { return this$1.setTree(id); } }, tree_config[id].name), React__default.createElement( Space, { w: 2 }))
                    }),
                    React__default.createElement( Space, { h: 10 }),

                    React__default.createElement( 'div', { className: headerClass }, config.name, " Browser"),
                    React__default.createElement( Space, { h: 10 }),

                    React__default.createElement( 'div', { dangerouslySetInnerHTML: { __html: BROWSE_ANNOTATION.headers[tree_id] } }),
                    React__default.createElement( Space, { h: 10 }),
                    
                    React__default.createElement( TreeSearchBar$1, { show_id: show_id, tree_id: tree_id, selectNode: this.selectNode }),
                    React__default.createElement( Space, { h: 10 }),

                    React__default.createElement( 'div', { id: 'tree' },
                        React__default.createElement( Node, { key: node.id, node: node, tree_id: tree_id, clickNode: this.clickNode, clickLink: this.clickLink })
                    ),
                    React__default.createElement( Space, { h: 10 })

                     /*< div className='go-footer' dangerouslySetInnerHTML={ { __html: c.BROWSE_ANNOTATION.footers[tree_id] } } / > */,
                    config.external && React__default.createElement( 'div', { className: 'data-external' }, iconStop, " Data from external resource.")
                )
            )
        }
        return null
    };

    return TreeApp;
}(React.Component));

var TreeApp$1 = connect(mapStateToProps, mapDispatchAllToProps)(TreeApp);

// recursive function to clear previously selected node
function clearSelected(node) {
    if (node.s) { node.s = false; }
    else if (node.ch) { node.ch.forEach(function (ch) { return clearSelected(ch); }); }
}

// convert integer id to GO id, 9987 -> 'GO:0009987'
function toGoid(id) {
    var goid = '' + id;
    while(goid.length < 7) { goid = '0' + goid; }
    return 'GO:' + goid 
}

var appStyle = { position: 'relative' };
var tabularStyle = '#maincontentcontainer { width: 98%; margin: auto; }';

var App = (function (Component$$1) {
    function App(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [ 'setCw' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) App.__proto__ = Component$$1;
    App.prototype = Object.create( Component$$1 && Component$$1.prototype );
    App.prototype.constructor = App;

    // called when the search app first loads
    App.prototype.componentDidMount = function componentDidMount () {
        var ref = this.props;
        var booleans = ref.booleans;
        var dispatchAction = ref.dispatchAction;
        var popState = ref.popState;
        var pushState = ref.pushState;
        var urlSearch = ref.urlSearch;
        if (!booleans.appLoaded) { dispatchAction(SET_BOOLEAN, { appLoaded: true }); }
        setDispatchAction(dispatchAction); // pass dispatchAction to setDispatchAction function in search.pug template // TODO is this still needed?

        window.onpopstate = popState;
        window.addEventListener('resize', this.setCw);
        this.setCw();

        // advanced, browse, help, mypdb    
        var href = window.location.href
            , pathname = window.location.pathname
            , referrer = document.referrer
            , search = window.location.search // querystring
            , src = 'App.componentDidMount';

        // console.log(file + ': href=' + href)         // full url
        // console.log(file + ': pathname=' + pathname) // everything after SERVER_NAME:port, including the leading '/', but not including the querystring
        // console.log(file + ': referrer=' + referrer) // referer
        // console.log(file + ': search=' + search)     // the querystring, including the leading '?'

        var path = pathname.substring(7); // remove leading '/search'
        //console.log(file + ': path=' + path)

        /* TODO not working as expected
        // facebook behaving badly - see https://stackoverflow.com/questions/7131909/facebook-callback-appends-to-return-url
        // for issue and solutions
        console.log('window.location.hash=' + window.location.hash)    
        if (window.location.hash === '#_=_') { 
            console.log('window.location.pathname=' + window.location.pathname) 
            window.location.hash = ''; // for older browsers, leaves a # behind
            history.pushState('', document.title, window.location.pathname)
            //e.preventDefault(); // no page reload
        }
        */

        if (referrer) { pushState({ referrer: referrer, src: src }); }

        if (    path.indexOf('/advanced') === 0 || 
                path.indexOf('/browse') === 0 ||
                path.indexOf('/help') === 0 || 
                path.indexOf('/mypdb') === 0) {
            if (path.indexOf('/advanced') === 0) { pushState({ pathname: pathname, src: src }); } // note: pathname includes leading '/search'
            
            processPath(path, null, dispatchAction, booleans); // dispatch actions based on path
        } else {
            urlSearch();
        }  
    };

    App.prototype.componentWillUnmount = function componentWillUnmount () {
        window.removeEventListener('resize', this.setCw);
    };

    // set container width to XS|SM|MD|LG
    App.prototype.setCw = function setCw () {
        var containerWidth = getWidth('maincontentcontainer');
        this.props.dispatchAction(SET_CONTAINER_WIDTH, { containerWidth: containerWidth });

        var cw = LG;
        if (containerWidth <= 970) { cw = MD; }
        if (containerWidth <= 750) { cw = SM; }
        if (containerWidth <= 500) { cw = XS; }
        this.props.dispatchAction(SET_CW, { cw: cw });
    };

    App.prototype.render = function render$$1 () {
        var ref = this.props;
        var booleans = ref.booleans;
        var views = ref.views;
        var search = views.search;
        var tab = views.tab;

        return (
            React__default.createElement( 'div', { style: appStyle, id: 'app' }
                /* generic form used to post data and display result ina new window */,
                React__default.createElement( 'form', { id: 'data-form', method: 'post', target: '_blank' },
                    React__default.createElement( 'input', { type: 'hidden', id: 'data', name: 'data' })
                ),

                tab === TAB_SEARCH && search === REPORT && React__default.createElement( 'style', null, tabularStyle ),
                (instance === 'local' || booleans.dev) && React__default.createElement( DevTools$1, null ),
                React__default.createElement( Tabs$1, null ),
                React__default.createElement( Space, { h: 10 }),
                tab === TAB_HELP && React__default.createElement( Help$1, null ),
                tab === TAB_HISTORY && React__default.createElement( History$1, null ),
                tab === TAB_MYPDB && React__default.createElement( MyPdb$1, null ),
                tab === TAB_SEARCH && React__default.createElement( Search$1, null ),
                tab === TAB_TREE_BROWSER && React__default.createElement( TreeApp$1, null )
            )
        )
    };

    return App;
}(React.Component));

var App$1 = connect(mapStateToProps, mapDispatchAllToProps)(App);

var ErrorBoundary = (function (superclass) {
  function ErrorBoundary(props) {
        superclass.call(this, props);
        this.state = { hasError: false };
        this.clearError = this.clearError.bind(this);
    }

  if ( superclass ) ErrorBoundary.__proto__ = superclass;
  ErrorBoundary.prototype = Object.create( superclass && superclass.prototype );
  ErrorBoundary.prototype.constructor = ErrorBoundary;
  
    ErrorBoundary.prototype.componentDidCatch = function componentDidCatch (error, info) {
        this.setState({ hasError: true, error: error, info: info });
    };
  
    ErrorBoundary.prototype.clearError = function clearError () {
        this.setState({ hasError: false });
        location.href = '/search';
    };

    ErrorBoundary.prototype.render = function render$$1 () {
        var ref = this.state;
        var hasError = ref.hasError;
        var error = ref.error;
        var info = ref.info;

        if (hasError) {
            return (
                React__default.createElement( 'div', null,
                    React__default.createElement( 'h4', null, "Error" ),
                    React__default.createElement( 'p', null, error.toString() ),
                    React__default.createElement( 'pre', null, info.componentStack.toString() ),
                    React__default.createElement( 'button', { onClick: this.clearError }, "Continue")
                )
            )        
        }
        return this.props.children
    };

  return ErrorBoundary;
}(React__default.Component));

var file$68 = 'components/mypdb/Menu';

var btnStyle = { marginTop: 10 };
var menuStyle$2 = { marginTop: 0 };
var logo = { marginRight: 5 };

var Menu$2 = (function (Component$$1) {
    function Menu(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'goTo'
            , 'logout'
        ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to each f in funcs
    }

    if ( Component$$1 ) Menu.__proto__ = Component$$1;
    Menu.prototype = Object.create( Component$$1 && Component$$1.prototype );
    Menu.prototype.constructor = Menu;

    Menu.prototype.goTo = function goTo (view) {
        console.log(file$68, 'view=' + view);
        var ref = this.props;
        var booleans = ref.booleans;
        var dispatchAction = ref.dispatchAction;
        if (booleans.appLoaded) {
            dispatchAction(SET_VIEW, { mypdb: view, tab: TAB_MYPDB });
        } else {
            window.location.href = '/search/mypdb/' + view;
        }
    };

    Menu.prototype.logout = function logout () {
        js_cookie.remove(MYPDB_COOKIE_NAME);
        this.props.dispatchAction(SET_BOOLEAN, { hasMypdb: false });
        this.props.dispatchAction(SET_VIEW, { mypdb: 'login', tab: TAB_MYPDB });
    };

    Menu.prototype.render = function render$$1 () {
        var this$1 = this;

        var hasMypdb = this.props.booleans.hasMypdb;

        return (
            React__default.createElement( 'div', { style: btnStyle, className: 'dropdown pull-right' },
                React__default.createElement( 'button', { className: 'btn btn-info btn-sm dropdown-toggle', type: 'button', 'data-toggle': 'dropdown' }, "MyPDB ", React__default.createElement( 'span', { className: 'caret' })
                ),     
                    
                hasMypdb
                    ?   React__default.createElement( 'ul', { className: 'dropdown-menu', style: menuStyle$2 },
                            React__default.createElement( 'li', null, React__default.createElement( 'a', { onClick: function (){ return this$1.goTo('queries'); } }, "Saved Queries") ),
                            React__default.createElement( 'li', null, React__default.createElement( 'a', { onClick: function (){ return this$1.goTo('account'); } }, "Account Settings") ),
                            React__default.createElement( 'li', null, React__default.createElement( 'a', { onClick: this.logout }, "Sign out") ),
                            React__default.createElement( 'hr', null ),
                            React__default.createElement( 'li', null, React__default.createElement( 'a', { onClick: function (){ return this$1.goTo('documentation'); } }, "Documentation") )
                        )
                    :    
                        React__default.createElement( 'ul', { className: 'dropdown-menu', style: menuStyle$2 },
                            AUTHS.map(function (auth) {
                                return (
                                    React__default.createElement( 'li', { key: auth.id },
                                        React__default.createElement( 'a', { href: '/auth/' + auth.id },
                                            React__default.createElement( 'img', { style: logo, src: CDN_RCSB_URL + 'logos/' + auth.id + '-sm.png' }), "Sign in with ", auth.name
                                        )
                                    )        
                                )
                            }),
                            React__default.createElement( 'hr', null ),
                            React__default.createElement( 'li', null, React__default.createElement( 'a', { onClick: function (){ return this$1.goTo('documentation'); } }, "Documentation") )
                        )
            )
        )
    };

    return Menu;
}(React.Component));

var Menu$3 = connect(mapStateToProps, mapDispatchAllToProps)(Menu$2);

/* 
    This component is the top-of-page search bar for executing basic full-text searches or 
    single-attribute text searches using the user-entered value or the autosuggested value.

    It appears at the top of all RCSB PDB pages.

    It implements a common menu interface as defined in /events.js.
*/

var file$69 = 'components/SearchBar';
var URL$2 = '/search/suggest';
var control$3 = CONTROL_SEARCH_BAR;
var name$2 = 'search-bar';
var component_id$2 = name$2 + '-component';
            
var SearchBar = (function (Component$$1) {
    function SearchBar(props) {
        var this$1 = this;

        Component$$1.call(this, props);
        var funcs = [
              'handleInputChange'
            , 'handleInputChangeCallback'
            , 'handleInputClick'
            , 'handleLink'
            , 'handleMenuSelect'
            , 'search'
            , 'setControl'
            , 'unsetControl' ];
        funcs.forEach(function (f) { return this$1[f] = this$1[f].bind(this$1); }); // bind 'this' to function list

        this.guid = getGuid();
        this.name = name$2;
        this.component_id = component_id$2;
        this.state = getDefault('menu-state');
    }

    if ( Component$$1 ) SearchBar.__proto__ = Component$$1;
    SearchBar.prototype = Object.create( Component$$1 && Component$$1.prototype );
    SearchBar.prototype.constructor = SearchBar;

    // handle user-entered input change
    SearchBar.prototype.handleInputChange = function handleInputChange (e) {
        // console.log(file, 'handleInputChange')
        var ref = e.target;
        var value = ref.value;
        if (value.length > 1) {
            value = encodeURIComponent(value);
            var url = [URL$2, value].join('/');
            getData$1(url, OPTIONS_GET, this.handleInputChangeCallback);
        } else {
            updateMenu(getDefault('menu-state'), this);
        }  
    };

    // callback for handleInputChange
    SearchBar.prototype.handleInputChangeCallback = function handleInputChangeCallback (data) {
        //u.logJson(file, data, 'data')
        if (data.attributes && data.items) {
            var attributes = data.attributes;
            var menuItems = data.items;
            // console.log(file, 'menuItems.length=' + menuItems.length)
    
            if (menuItems && menuItems.length > 0) {
                updateMenu({ attributes: attributes, menuItems: menuItems, menuIndex: -1, menuOpen: true }, this);
            }
        } else {
            // console.log(file, 'handleInputChangeCallback: no data')
            updateMenu(getDefault('menu-state'), this);
        }
    };

    // user clicks on text input field
    SearchBar.prototype.handleInputClick = function handleInputClick (e) {
        this.setControl();

        var ref = e.target;
        var value = ref.value;
        value = value.trim();
        if (value.length > 1) {
            if (this.state.menuItems) {
                updateMenu({ menuOpen: true }, this);
            } else {
                // TODO get suggestions?
            }    
        } 
    };

    // uer clicks on advanced search or browse annotations link
    SearchBar.prototype.handleLink = function handleLink (link) {
        var ref = this.props;
        var booleans = ref.booleans;
        var dispatchAction = ref.dispatchAction;
        //console.log(file, 'handleLink: booleans.appLoaded=' + booleans.appLoaded, link)

        if (booleans.appLoaded) {
            if (link === 'advanced') {
                dispatchAction(SET_VIEW, { tab: TAB_SEARCH });
                dispatchAction(QB_INIT);
            } else {
                dispatchAction(SET_VIEW, { tab: TAB_TREE_BROWSER });
            }
        } else {
            window.location.href = '/search/' + link;
        }
    };

    // called:
    //      1. when user clicks a menu item
    //      2. user hits enter key when menu is open
    SearchBar.prototype.handleMenuSelect = function handleMenuSelect (item) {
        //u.logJson(file, item, 'handleMenuSelect: item')
        var attribute = this.state.attributes[item.attrIndex].attribute;
        var value = removeHtml(item.__html);
        this.handleSearch(attribute, value);
    };

    SearchBar.prototype.handleSearch = function handleSearch (attribute, value) {
        value = validateValue(value);

        if (value) {
            if (value !== 'searchdev') { setGtag$1('Basic', value); } // TODO move to get-data.js  

            if (attribute === 'rcsb_entry_container_identifiers.entry_id') {
                window.location.href = '/structure/' + value;
            } else if (attribute === 'rcsb_repository_holdings_removed_entry_container_identifiers.entry_id') {
                window.location.href = '/structure/removed/redirect/' + value;
            } else if (attribute === 'rcsb_repository_holdings_unreleased_entry_container_identifiers.entry_id') {
                window.location.href = '/structure/unreleased/' + value;
            } else if ( attribute === 'rcsb_chem_comp_container_identifiers.comp_id' ||
                        attribute === 'rcsb_chem_comp_container_identifiers.prd_id') {
                window.location.href = '/ligand/' + value;
            } else {
                var ref = this.props;
                var booleans = ref.booleans;
                var dispatchAction = ref.dispatchAction;
                var attributeValueSearch = ref.attributeValueSearch;
                if (value === 'searchdev') {
                    dispatchAction(SET_BOOLEAN, { dev: !booleans.dev } ); // toggle dev
                } else {
                    if (booleans.appLoaded) { // search page is already loaded
                        this.setState({ menuOpen: false });
                        attributeValueSearch(attribute, value);
                    } else {
                        window.location.href = getSimpleQueryHref(attribute, value);
                    }
                }
            }
        }
    };

    // user clicks search icon - pass null attribute, except in special cases
    SearchBar.prototype.search = function search () {
        var ref = this.state;
        var attributes = ref.attributes;
        var menuItems = ref.menuItems;
        var menuIndex = ref.menuIndex;
        var menuOpen = ref.menuOpen;
        var attribute, value;
        var inputValue = value = getElVal('search-bar-input-text').trim();

        if (menuIndex === -1 && menuOpen && menuItems.length === 2) { // there is only a single header + 1 item
            var item = menuItems[1];
            attribute = attributes[item.attrIndex].attribute;
            if  (isAttributeSpecialCase(attribute)) { // special case - go directly to item page      
                value = removeHtml(item.__html);
                if (value !== inputValue) { value = null; } // check that menu value is equal to inputValue, if not set to null
            }
        }

        if (!value) {
            value = inputValue;
            if (!isQuoted(value)) {    
                var arr = value.split(' ');
                for (var i = 0, n = arr.length; i < n; i++) {
                    var val = arr[i];
                    if (val.trim().length > 1) {
                        if (!isQuoted(val)) { 
                            if (val.indexOf('-') !== -1) { arr[i] = '"' + val + '"'; } // add quotes to hyphenated values to prevent ES from tokenizing
                        }    
                    }
                }
                value = arr.join(' ');
            }
        }

        updateMenu({ menuOpen: false }, this);

        this.handleSearch(attribute, value);
    };

    SearchBar.prototype.setControl = function setControl () {
        console.log(file$69, 'setControl');
        this.props.setControl(control$3, file$69); // set global state control property
        setController(this);  // set events controller
    };

    SearchBar.prototype.unsetControl = function unsetControl () {
        console.log(file$69, 'unsetControl');
        this.props.setControl(null, file$69); // set global state control property
    };

    SearchBar.prototype.render = function render$$1 () {
        var this$1 = this;

        var ref = this.props;
        var control = ref.control;
        var queryBuilder = ref.queryBuilder;
        var views = ref.views;
        var queryBuilderOpen = (queryBuilder && queryBuilder.open) ? true : false;

        var ref$1 = this.state;
        var attributes = ref$1.attributes;
        var menuItems = ref$1.menuItems;
        var menuIndex = ref$1.menuIndex;
        var menuOpen = ref$1.menuOpen;
        
        //console.log(file, 'queryBuilderOpen=' + queryBuilderOpen)

        var searchIconClass = 'glyphicon glyphicon-search search-btn';
        if (control === CONTROL_SEARCH_BAR) { searchIconClass += ' search-control'; }
        //search-bar-input     search-bar-input-text search-bar-menu
        //input-menu-container input-menu-text       input-menu
        return (
            React__default.createElement( 'div', { id: this.component_id, className: 'search-bar' },
                React__default.createElement( 'div', { id: 'menu-container-' + this.guid },
                    React__default.createElement( 'table', { className: 'search-bar-table' },
                        React__default.createElement( 'tr', null,
                            React__default.createElement( 'td', { className: 'search-bar-input' },
                                React__default.createElement( 'input', {  type: 'text', id: 'search-bar-input-text', onClick: this.handleInputClick, onChange: this.handleInputChange, placeholder: PLACE_HOLDERS.textSearch, autoComplete: 'off', spellCheck: 'false' }),
                                menuOpen &&
                                    React__default.createElement( 'div', { id: 'search-bar-menu', className: 'search-bar-menu' },
                                    menuItems && menuItems.map(function (item, i) {
                                        var attrIndex = item.attrIndex;
                                        var __html = item.__html;
                                        var id = item.id;
                                        var type = item.type;
                                        if (type === 'header') { // attribute header
                                            return React__default.createElement( 'div', { className: 'attribute', key: 'a' + attrIndex }, "in ", attributes[attrIndex].display_name)
                                        } else { // menu item
                                            var className = (i === menuIndex) ? 'value-selected' : 'value';
                                            return React__default.createElement( 'div', { 
                                                        className: className, id: id, key: 'i' + i, onClick: function () { return this$1.handleMenuSelect(item); }, dangerouslySetInnerHTML: { __html: __html } })
                                        }
                                    })
                                    )        
                            ),
                            React__default.createElement( 'td', null,
                                React__default.createElement( 'div', { id: 'search-icon', onClick: this.search },
                                    React__default.createElement( 'span', { className: searchIconClass })
                                )
                            )
                        )
                    )
                ),  
                React__default.createElement( 'div', { id: 'search-bar-links' },
                    (queryBuilderOpen && views.tab === TAB_SEARCH)
                        ? React__default.createElement( 'span', { style: {color:color_20} }, "Advanced Search")
                        : React__default.createElement( 'a', { onClick: function () { return this$1.handleLink('advanced'); } }, "Advanced Search"),     
                    React__default.createElement( Space, { w: 5 }), "|", React__default.createElement( Space, { w: 5 }),
                    React__default.createElement( 'a', { onClick: function () { return this$1.handleLink('browse'); } }, "Browse Annotations")
                )
            )
        )
    };

    return SearchBar;
}(React.Component));

var SearchBar$1 = connect(mapStateToProps, mapDispatchAllToProps)(SearchBar);

function isQuoted(s) {
    s = s.trim();
    if (s.length < 2) { return false }
    if (s.substring(0, 1) === '"' && s.substring(s.length - 1, s.length) === '"') {
        //console.log(s + ' IS QUOTED')
        return true
    }
    return false
}

/*
    The main entry point for search.
    This module handles both the Search Bar and all Search Results pages.

    TODO - implement and test error handling:

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }

    see https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html

    cd ~/projects/rcsb-sierra/lib/js/search
        npm install
        npm run build
        npm run lint
        npm run watch
    
*/

var file = 'index';

ENV.referer = getReferer(); // TODO see comment in constants.js
console.log(file, 'c.ENV.referer=' + ENV.referer);
console.log(file, 'react-app-polyfill/ie9');

// initialize constants that have to be generated at run time
init();

// initialize store

// set booleans
var booleans = getDefault('booleans');
// mypdb
var cookieValue = js_cookie.get(MYPDB_COOKIE_NAME);
booleans.hasMypdb = (typeof cookieValue !== 'undefined');


// history - retrieve from storage
var history$1;
var storage = getStorage();
if (storage) {    
    var storedHistory = storage.getItem('history');
    if (storedHistory ) { history$1 = JSON.parse(storedHistory); }
}
if (!history$1) { history$1 = { map: {}, ids: [], id: null }; }

// returnType
var returnType = DEFAULT_RETURN_TYPE;

// configure store
var store = configureStore({ booleans: booleans, history: history$1, returnType: returnType });

// define containers
var mypdb_menu_container = document.getElementById('mypdb-menu-container');
var search_bar_container = document.getElementById('search-bar-container');
var search_container = document.getElementById('search-container');

document.addEventListener('keydown', handleKeyDown, false);
document.addEventListener('click', handleClick, false);

// all pages display mypdb menu and search bar at top
if (search_bar_container) {
    console.log('search_bar_container FOUND');
    reactDom.render (React__default.createElement( Provider, { store: store }, React__default.createElement( Menu$3, null )), mypdb_menu_container);    
    reactDom.render (React__default.createElement( Provider, { store: store }, React__default.createElement( SearchBar$1, null )), search_bar_container);
}    

// search page
if (search_container) { 
    document.title = getTitle('Search');
    if (instance === 'local')
        { reactDom.render (React__default.createElement( Provider, { store: store }, React__default.createElement( ErrorBoundary, null, React__default.createElement( App$1, null ) )), search_container); }
    else
        { reactDom.render (React__default.createElement( Provider, { store: store }, React__default.createElement( App$1, null )), search_container); }
}

}(React,ReactDOM));
//# sourceMappingURL=search.js.map
