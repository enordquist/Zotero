(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var na={a:!0},oa={};try{oa.__proto__=na;la=oa.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=ka;
function y(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.B=b.prototype}
function qa(){this.o=!1;this.i=null;this.l=void 0;this.f=1;this.j=this.m=0;this.A=this.h=null}
function ra(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
qa.prototype.s=function(a){this.l=a};
function sa(a,b){a.h={Y:b,Z:!0};a.f=a.m||a.j}
qa.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function z(a,b,c){a.f=c;return{value:b}}
qa.prototype.D=function(a){this.f=a};
function va(a,b,c){a.m=b;void 0!=c&&(a.j=c)}
function wa(a){a.m=0;var b=a.h.Y;a.h=null;return b}
function xa(a){this.f=new qa;this.h=a}
function ya(a,b){ra(a.f);var c=a.f.i;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.o=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ba(a)}a.f.i=null;d.call(a.f,f);return Ba(a)}
function Ba(a){for(;a.f.f;)try{var b=a.h(a.f);if(b)return a.f.o=!1,{value:b.value,done:!1}}catch(c){a.f.l=void 0,sa(a.f,c)}a.f.o=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.Z)throw b.Y;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ba(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i["throw"],b,a.f.s):(sa(a.f,b),b=Ba(a));return b};
this["return"]=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a,b){var c=new Ca(new xa(b));pa&&a.prototype&&pa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
t("Object.setPrototypeOf",function(a){return a||pa});
function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)A(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ea});
t("Promise",function(a){function b(g){this.f=0;this.i=void 0;this.h=[];this.o=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.ja),reject:g(this.l)}};
b.prototype.ja=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.la(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ia(g):this.m(g)}};
b.prototype.ia=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.ma(h,g):this.m(g)};
b.prototype.l=function(g){this.s(2,g)};
b.prototype.m=function(g){this.s(1,g)};
b.prototype.s=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.i=h;2===this.f&&this.ka();this.A()};
b.prototype.ka=function(){var g=this;e(function(){if(g.I()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.I=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.A=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.la=function(g){var h=this.j();g.M(h.resolve,h.reject)};
b.prototype.ma=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(v){try{l(q(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.M(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.M=function(g,h){function k(){switch(l.f){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).M(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(w){q[v]=w;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).M(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ia(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ia(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)A(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!A(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!A(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&A(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&A(k,g)&&A(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.h[l];if(m&&A(h.h,l))for(var n=0;n<m.length;n++){var q=m[n];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:n,u:q}}return{id:l,list:m,index:-1,u:void 0}}
function e(h){this.h={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.h[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.h[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.h={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var B=this||self;function C(a,b){for(var c=a.split("."),d=b||B,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ka(){}
function La(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(1E9*Math.random()>>>0),Oa=0;function Pa(a,b,c){return a.call.apply(a.bind,arguments)}
function Qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ra(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra=Pa:Ra=Qa;return Ra.apply(null,arguments)}
function E(a,b){var c=a.split("."),d=B;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function F(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Na=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Sa(a){return a}
;function Ta(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Ua(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Ua,Error);Ua.prototype.name="CustomError";var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function $a(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function ab(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function bb(a){return Array.prototype.concat.apply([],arguments)}
function cb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function db(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function jb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=jb(a[c]);return b}
var kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var mb;var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ob=/&/g,pb=/</g,qb=/>/g,wb=/"/g,xb=/'/g,yb=/\x00/g,zb=/[\x00&<>"']/;
function Ab(a,b){return a<b?-1:a>b?1:0}
;var Bb;a:{var Cb=B.navigator;if(Cb){var Db=Cb.userAgent;if(Db){Bb=Db;break a}}Bb=""}function H(a){return-1!=Bb.indexOf(a)}
;function Eb(){}
;function Fb(a){Fb[" "](a);return a}
Fb[" "]=Ka;var Gb=H("Opera"),Hb=H("Trident")||H("MSIE"),Ib=H("Edge"),Jb=H("Gecko")&&!(-1!=Bb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Kb=-1!=Bb.toLowerCase().indexOf("webkit")&&!H("Edge");function Lb(){var a=B.document;return a?a.documentMode:void 0}
var Mb;a:{var Nb="",Ob=function(){var a=Bb;if(Jb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ib)return/Edge\/([\d\.]+)/.exec(a);if(Hb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Kb)return/WebKit\/(\S+)/.exec(a);if(Gb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ob&&(Nb=Ob?Ob[1]:"");if(Hb){var Pb=Lb();if(null!=Pb&&Pb>parseFloat(Nb)){Mb=String(Pb);break a}}Mb=Nb}var Qb=Mb,Rb={},Sb;if(B.document&&Hb){var Tb=Lb();Sb=Tb?Tb:parseInt(Qb,10)||void 0}else Sb=void 0;var Ub=Sb;var Vb=H("Firefox")||H("FxiOS"),Wb=H("iPhone")&&!H("iPod")&&!H("iPad")||H("iPod"),Xb=H("iPad");var Yb={},Zb=null;var I=window;function $b(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function ac(a,b){b||(b={});b[cc(a)]=!0;var c=a.stack||"",d=a.Oa;d&&!b[cc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=ac(d,b));return c}
function cc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var bc={};function dc(a){this.f=a||{cookie:""}}
r=dc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Wa;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.aa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{aa:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.f.cookie};
r.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var nc=new dc("undefined"==typeof document?null:document);function oc(a,b){this.width=a;this.height=b}
r=oc.prototype;r.clone=function(){return new oc(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function pc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var h=e.className,k;if(k="function"==typeof h.split)k=0<=Ya(h.split(/\s+/),a);k&&(g[d++]=e)}g.length=d;return g}return f}
function qc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var sc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function tc(a){return a?decodeURI(a):a}
function uc(a){return tc(a.match(sc)[3]||null)}
function vc(a){var b=a.match(sc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function wc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)wc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function xc(a){var b=[],c;for(c in a)wc(c,a[c],b);return b.join("&")}
var yc=/#|$/;function zc(a){var b=Ac;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Bc(){var a=[];zc(function(b){a.push(b)});
return a}
var Ac={Aa:"allow-forms",Ba:"allow-modals",Ca:"allow-orientation-lock",Da:"allow-pointer-lock",Ea:"allow-popups",Fa:"allow-popups-to-escape-sandbox",Ga:"allow-presentation",Ha:"allow-same-origin",Ia:"allow-scripts",Ja:"allow-top-navigation",Ka:"allow-top-navigation-by-user-activation"},Cc=eb(function(){return Bc()});
function Dc(){var a=qc(),b={};G(Cc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ec(){this.i=this.i;this.j=this.j}
Ec.prototype.i=!1;Ec.prototype.dispose=function(){this.i||(this.i=!0,this.J())};
Ec.prototype.J=function(){if(this.j)for(;this.j.length;)this.j.shift()()};var Fc={};function Gc(){}
function Hc(a,b){if(b!==Fc)throw Error("Bad secret");this.f=a}
y(Hc,Gc);Hc.prototype.toString=function(){return this.f};new Hc("about:blank",Fc);new Hc("about:invalid#zTSz",Fc);var Ic=(new Date).getTime();function Jc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Kc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],x=e[3],ma=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var L=x^v&(w^x);var za=1518500249}else L=v^w^x,za=1859775393;else 60>p?(L=v&w|x&(v|w),za=2400959708):(L=v^w^x,za=3395469782);L=((n<<5|n>>>27)&4294967295)+L+ma+za+q[p]&4294967295;ma=x;x=w;w=(v<<30|v>>>2)&4294967295;v=n;n=L}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+ma&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var v=24;0<=v;v-=8)n[q++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,na:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Lc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Mc(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Mc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Mc(a){var b=Kc();b.update(a);return b.na().toLowerCase()}
;function Nc(a){var b=Jc(String(B.location.href)),c;(c=B.__SAPISID||B.__APISID||B.__OVERRIDE_SID)?c=!0:(c=new dc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?B.__SAPISID:B.__APISID,c||(c=new dc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(B.location.href);return d&&c&&b?[b,Lc(Jc(d),
c,a||null)].join(" "):null}return null}
;function Oc(){this.h=[];this.f=-1}
Oc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.h[a]!=b&&(this.h[a]=b,this.f=-1)};
Oc.prototype.get=function(a){return!!this.h[a]};
function Pc(a){-1==a.f&&(a.f=Za(a.h,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Qc(a,b){this.i=a;this.j=b;this.h=0;this.f=null}
Qc.prototype.get=function(){if(0<this.h){this.h--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Rc(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.f,a.f=b)}
;function Sc(a){B.setTimeout(function(){throw a;},0)}
var Tc;function Uc(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=qc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ra(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.X;c.X=null;e()}};
return function(e){d.next={X:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Vc(){this.h=this.f=null}
var Xc=new Qc(function(){return new Wc},function(a){a.reset()});
Vc.prototype.add=function(a,b){var c=Xc.get();c.set(a,b);this.h?this.h.next=c:this.f=c;this.h=c};
Vc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.h=null),a.next=null);return a};
function Wc(){this.next=this.scope=this.f=null}
Wc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Wc.prototype.reset=function(){this.next=this.scope=this.f=null};function Yc(a,b){Zc||$c();ad||(Zc(),ad=!0);bd.add(a,b)}
var Zc;function $c(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Zc=function(){a.then(cd)}}else Zc=function(){var b=cd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&!H("Edge")&&B.Window.prototype.setImmediate==B.setImmediate?(Tc||(Tc=Uc()),Tc(b)):B.setImmediate(b)}}
var ad=!1,bd=new Vc;function cd(){for(var a;a=bd.remove();){try{a.f.call(a.scope)}catch(b){Sc(b)}Rc(Xc,a)}ad=!1}
;function dd(){this.h=-1}
;function ed(){this.h=64;this.f=[];this.m=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.h;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
F(ed,dd);ed.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function fd(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
ed.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.h,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)fd(this,a,d),d+=this.h;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.h){fd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.h){fd(this,e);f=0;break}}this.i=f;this.l+=b}};
ed.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.h-(this.i-56));for(var c=this.h-1;56<=c;c--)this.m[c]=b&255,b/=256;fd(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var gd="StopIteration"in B?B.StopIteration:{message:"StopIteration",stack:""};function hd(){}
hd.prototype.next=function(){throw gd;};
hd.prototype.C=function(){return this};
function id(a){if(a instanceof hd)return a;if("function"==typeof a.C)return a.C(!1);if(La(a)){var b=0,c=new hd;c.next=function(){for(;;){if(b>=a.length)throw gd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function jd(a,b){if(La(a))try{G(a,b,void 0)}catch(c){if(c!==gd)throw c;}else{a=id(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==gd)throw c;}}}
function kd(a){if(La(a))return cb(a);a=id(a);var b=[];jd(a,function(c){b.push(c)});
return b}
;function ld(a,b){this.i={};this.f=[];this.j=this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ld)for(c=md(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function md(a){nd(a);return a.f.concat()}
r=ld.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||od;nd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function od(a,b){return a===b}
r.isEmpty=function(){return 0==this.h};
r.clear=function(){this.i={};this.j=this.h=this.f.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.h--,this.j++,this.f.length>2*this.h&&nd(this),!0):!1};
function nd(a){if(a.h!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.h!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.h++,this.f.push(a),this.j++);this.i[a]=b};
r.forEach=function(a,b){for(var c=md(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new ld(this)};
r.C=function(a){nd(this);var b=0,c=this.j,d=this,e=new hd;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw gd;var f=d.f[b++];return a?f:d.i[f]};
return e};var pd=!Hb||9<=Number(Ub),Kd;
if(Kd=Hb){var Ld;if(Object.prototype.hasOwnProperty.call(Rb,"9"))Ld=Rb["9"];else{for(var Md=0,Nd=nb(String(Qb)).split("."),Od=nb("9").split("."),Pd=Math.max(Nd.length,Od.length),Qd=0;0==Md&&Qd<Pd;Qd++){var Rd=Nd[Qd]||"",Sd=Od[Qd]||"";do{var Td=/(\d*)(\D*)(.*)/.exec(Rd)||["","","",""],Ud=/(\d*)(\D*)(.*)/.exec(Sd)||["","","",""];if(0==Td[0].length&&0==Ud[0].length)break;Md=Ab(0==Td[1].length?0:parseInt(Td[1],10),0==Ud[1].length?0:parseInt(Ud[1],10))||Ab(0==Td[2].length,0==Ud[2].length)||Ab(Td[2],Ud[2]);
Rd=Td[3];Sd=Ud[3]}while(0==Md)}Ld=Rb["9"]=0<=Md}Kd=!Ld}var Vd=Kd,Wd=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{B.addEventListener("test",Ka,b),B.removeEventListener("test",Ka,b)}catch(c){}return a}();function Xd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=this.h=!1}
Xd.prototype.stopPropagation=function(){this.h=!0};
Xd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yd(a,b){Xd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
F(Yd,Xd);var Zd={2:"touch",3:"pen",4:"mouse"};
Yd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Jb){a:{try{Fb(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&this.preventDefault()};
Yd.prototype.stopPropagation=function(){Yd.B.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Yd.prototype.preventDefault=function(){Yd.B.preventDefault.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Vd)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var $d="closure_listenable_"+(1E6*Math.random()|0),ae=0;function be(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.N=e;this.key=++ae;this.H=this.L=!1}
function ce(a){a.H=!0;a.listener=null;a.f=null;a.src=null;a.N=null}
;function de(a){this.src=a;this.listeners={};this.f=0}
de.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=ee(a,b,d,e);-1<g?(b=a[g],c||(b.L=!1)):(b=new be(b,this.src,f,!!d,e),b.L=c,a.push(b));return b};
de.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ee(e,b,c,d);return-1<b?(ce(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function fe(a,b){var c=b.type;c in a.listeners&&ab(a.listeners[c],b)&&(ce(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.H&&f.listener==b&&f.capture==!!c&&f.N==d)return e}return-1}
;var ge="closure_lm_"+(1E6*Math.random()|0),he={},ie=0;function je(a,b,c,d,e){if(d&&d.once)ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)je(a,b[f],c,d,e);else c=le(c),a&&a[$d]?a.f.add(String(b),c,!1,D(d)?!!d.capture:!!d,e):me(a,b,c,!1,d,e)}
function me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=D(e)?!!e.capture:!!e,h=ne(a);h||(a[ge]=h=new de(a));c=h.add(b,c,d,g,f);if(!c.f){d=oe();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Wd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ie++}}
function oe(){var a=qe,b=pd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ke(a,b[f],c,d,e);else c=le(c),a&&a[$d]?a.f.add(String(b),c,!0,D(d)?!!d.capture:!!d,e):me(a,b,c,!0,d,e)}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else(d=D(d)?!!d.capture:!!d,c=le(c),a&&a[$d])?a.f.remove(String(b),c,d,e):a&&(a=ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ee(b,c,d,e)),(c=-1<a?b[a]:null)&&se(c))}
function se(a){if("number"!==typeof a&&a&&!a.H){var b=a.src;if(b&&b[$d])fe(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ie--;(c=ne(b))?(fe(c,a),0==c.f&&(c.src=null,b[ge]=null)):ce(a)}}}
function pe(a){return a in he?he[a]:he[a]="on"+a}
function te(a,b,c,d){var e=!0;if(a=ne(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.H&&(f=ue(f,d),e=e&&!1!==f)}return e}
function ue(a,b){var c=a.listener,d=a.N||a.src;a.L&&se(a);return c.call(d,b)}
function qe(a,b){if(a.H)return!0;if(!pd){var c=b||C("window.event"),d=new Yd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.h&&0<=g;g--){d.f=c[g];var h=te(c[g],f,!0,d);e=e&&h}for(g=0;!d.h&&g<c.length;g++)d.f=c[g],h=te(c[g],f,!1,d),e=e&&h}return e}return ue(a,new Yd(b,this))}
function ne(a){a=a[ge];return a instanceof de?a:null}
var ve="__closure_events_fn_"+(1E9*Math.random()>>>0);function le(a){if("function"===typeof a)return a;a[ve]||(a[ve]=function(b){return a.handleEvent(b)});
return a[ve]}
;function J(){Ec.call(this);this.f=new de(this);this.o=this;this.l=null}
F(J,Ec);J.prototype[$d]=!0;J.prototype.addEventListener=function(a,b,c,d){je(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){re(this,a,b,c,d)};
J.prototype.dispatchEvent=function(a){var b=this.l;if(b){var c=[];for(var d=1;b;b=b.l)c.push(b),++d}b=this.o;d=a.type||a;if("string"===typeof a)a=new Xd(a,b);else if(a instanceof Xd)a.target=a.target||b;else{var e=a;a=new Xd(d,b);lb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.h&&0<=f;f--){var g=a.f=c[f];e=we(g,d,!0,a)&&e}a.h||(g=a.f=b,e=we(g,d,!0,a)&&e,a.h||(e=we(g,d,!1,a)&&e));if(c)for(f=0;!a.h&&f<c.length;f++)g=a.f=c[f],e=we(g,d,!1,a)&&e;return e};
J.prototype.J=function(){J.B.J.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ce(d[e]);delete a.listeners[c];a.f--}}this.l=null};
function we(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.H&&g.capture==c){var h=g.listener,k=g.N||g.src;g.L&&fe(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;var xe=B.JSON.stringify;function ye(a){this.f=0;this.o=void 0;this.j=this.h=this.i=null;this.l=this.m=!1;if(a!=Ka)try{var b=this;a.call(void 0,function(c){ze(b,2,c)},function(c){ze(b,3,c)})}catch(c){ze(this,3,c)}}
function Ae(){this.next=this.context=this.onRejected=this.h=this.f=null;this.i=!1}
Ae.prototype.reset=function(){this.context=this.onRejected=this.h=this.f=null;this.i=!1};
var Be=new Qc(function(){return new Ae},function(a){a.reset()});
function Ce(a,b,c){var d=Be.get();d.h=a;d.onRejected=b;d.context=c;return d}
ye.prototype.then=function(a,b,c){return De(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ye.prototype.$goog_Thenable=!0;ye.prototype.cancel=function(a){if(0==this.f){var b=new Ee(a);Yc(function(){Fe(this,b)},this)}};
function Fe(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Fe(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ge(c),He(c,e,3,b)))}a.i=null}else ze(a,3,b)}
function Ie(a,b){a.h||2!=a.f&&3!=a.f||Je(a);a.j?a.j.next=b:a.h=b;a.j=b}
function De(a,b,c,d){var e=Ce(null,null,null);e.f=new ye(function(f,g){e.h=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ee?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;Ie(a,e);return e.f}
ye.prototype.A=function(a){this.f=0;ze(this,2,a)};
ye.prototype.I=function(a){this.f=0;ze(this,3,a)};
function ze(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.I;if(d instanceof ye){Ie(d,Ce(e||Ka,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(D(d))try{var k=d.then;if("function"===typeof k){Ke(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.f=b,a.i=null,Je(a),3!=b||c instanceof Ee||Le(a,c))}}
function Ke(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Je(a){a.m||(a.m=!0,Yc(a.s,a))}
function Ge(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
ye.prototype.s=function(){for(var a;a=Ge(this);)He(this,a,this.f,this.o);this.m=!1};
function He(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Me(b,c,d);else try{b.i?b.h.call(b.context):Me(b,c,d)}catch(e){Ne.call(null,e)}Rc(Be,b)}
function Me(a,b,c){2==b?a.h.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Le(a,b){a.l=!0;Yc(function(){a.l&&Ne.call(null,b)})}
var Ne=Sc;function Ee(a){Ua.call(this,a)}
F(Ee,Ua);Ee.prototype.name="cancel";function K(a){Ec.call(this);this.o=1;this.l=[];this.m=0;this.f=[];this.h={};this.s=!!a}
F(K,Ec);r=K.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.o=e+3;d.push(e);return e};
function Oe(a,b,c){var d=Pe;if(a=d.h[a]){var e=d.f;(a=$a(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.R(a)}}
r.R=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.m?(this.l.push(a),this.f[a+1]=Ka):(c&&ab(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
r.K=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Qe(this.f[g+1],this.f[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.R(c)}}return 0!=e}return!1};
function Qe(a,b,c){Yc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.R,this),delete this.h[a])}else this.f.length=0,this.h={}};
r.J=function(){K.B.J.call(this);this.clear();this.l.length=0};function Re(a){this.f=a}
Re.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,xe(b))};
Re.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Re.prototype.remove=function(a){this.f.remove(a)};function Se(a){this.f=a}
F(Se,Re);function Te(a){this.data=a}
function Ue(a){return void 0===a||a instanceof Te?a:new Te(a)}
Se.prototype.set=function(a,b){Se.B.set.call(this,a,Ue(b))};
Se.prototype.h=function(a){a=Se.B.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Se.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ve(a){this.f=a}
F(Ve,Se);Ve.prototype.set=function(a,b,c){if(b=Ue(b)){if(c){if(c<Date.now()){Ve.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Ve.B.set.call(this,a,b)};
Ve.prototype.h=function(a){var b=Ve.B.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Ve.prototype.remove.call(this,a);else return b}};function We(){}
;function Xe(){}
F(Xe,We);Xe.prototype.clear=function(){var a=kd(this.C(!0)),b=this;G(a,function(c){b.remove(c)})};function Ye(a){this.f=a}
F(Ye,Xe);r=Ye.prototype;r.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeItem(a)};
r.C=function(a){var b=0,c=this.f,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.f.clear()};
r.key=function(a){return this.f.key(a)};function Ze(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
F(Ze,Ye);function $e(a,b){this.h=a;this.f=null;if(Hb&&!(9<=Number(Ub))){af||(af=new ld);this.f=af.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),af.set(a,this.f));try{this.f.load(this.h)}catch(c){this.f=null}}}
F($e,Xe);var bf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},af=null;function cf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bf[b]})}
r=$e.prototype;r.isAvailable=function(){return!!this.f};
r.set=function(a,b){this.f.setAttribute(cf(a),b);df(this)};
r.get=function(a){a=this.f.getAttribute(cf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeAttribute(cf(a));df(this)};
r.C=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new hd;d.next=function(){if(b>=c.length)throw gd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);df(this)};
function df(a){try{a.f.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ef(a,b){this.h=a;this.f=b+"::"}
F(ef,Xe);ef.prototype.set=function(a,b){this.h.set(this.f+a,b)};
ef.prototype.get=function(a){return this.h.get(this.f+a)};
ef.prototype.remove=function(a){this.h.remove(this.f+a)};
ef.prototype.C=function(a){var b=this.h.C(!0),c=this,d=new hd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.h.get(e)};
return d};var ff=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};E("yt.config_",ff);function gf(a){var b=arguments;1<b.length?ff[b[0]]=b[1]:1===b.length&&Object.assign(ff,b[0])}
function M(a,b){return a in ff?ff[a]:b}
;var hf=[];function jf(a){hf.forEach(function(b){return b(a)})}
function kf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){lf(b),jf(b)}}:a}
function lf(a){var b=C("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),gf("ERRORS",b))}
function mf(a){var b=C("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),gf("ERRORS",b))}
;var nf=0;E("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++nf});var of={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in of||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
pf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=B.ytEventsEventsListeners||{};E("ytEventsEventsListeners",hb);var qf=B.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",qf);
function rf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=D(e[4])&&D(d)&&ib(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function sf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
var tf=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function uf(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rf(a,b,c,d);if(!e){e=++qf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pf(h);if(!rc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pf(h);
h.currentTarget=a;return c.call(a,h)};
g=kf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d]}}}
;function vf(a,b){"function"===typeof a&&(a=kf(a));return window.setTimeout(a,b)}
function wf(a){"function"===typeof a&&(a=kf(a));return window.setInterval(a,250)}
;var xf={q:!0,search_query:!0};function yf(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function zf(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?db(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){xf.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],lf(k))}}return c}
function Af(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=zf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=xc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Bf={};function Cf(a){return Bf[a]||(Bf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Df={},Ef=[],Pe=new K,Ff={};function Gf(){for(var a=u(Ef),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Hf(a,b){b||(b=document);var c=cb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):pc(d,b);d=cb(d);return bb(c,d)}
function O(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Cf(b)]:a.getAttribute("data-"+b):null;return c}
function If(a,b){Pe.K.apply(Pe,arguments)}
;function Jf(a){this.h=a||{};this.i=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function P(a,b){for(var c=[a.h,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Kf(a,b,c){Lf||(Lf={},uf(window,"message",Ra(a.j,a)));Lf[c]=b}
Jf.prototype.j=function(a){if(a.origin==P(this,"host")||a.origin==P(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.i=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Lf[b.id])a.s=!0,a.s&&(G(a.o,a.W,a),a.o.length=0),a.ga(b)}};
var Lf=null;function S(a){a=Mf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Nf(a,b){var c=Mf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Mf(a){var b=M("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:M("EXPERIMENT_FLAGS",{})[a]}
;function Of(){}
function Pf(a){var b=5E3;isNaN(b)&&(b=void 0);var c=C("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():vf(a,b||0)}
;function Qf(){}
y(Qf,Of);Qf.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Qf.f=void 0;Qf.h=function(){Qf.f||(Qf.f=new Qf)};
Qf.h();var Rf=B.ytPubsubPubsubInstance||new K,Sf=B.ytPubsubPubsubSubscribedKeys||{},Tf=B.ytPubsubPubsubTopicToKeys||{},yg=B.ytPubsubPubsubIsSynchronous||{};K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.R;K.prototype.publish=K.prototype.K;K.prototype.clear=K.prototype.clear;E("ytPubsubPubsubInstance",Rf);E("ytPubsubPubsubTopicToKeys",Tf);E("ytPubsubPubsubIsSynchronous",yg);E("ytPubsubPubsubSubscribedKeys",Sf);var zg=window,T=zg.ytcsi&&zg.ytcsi.now?zg.ytcsi.now:zg.performance&&zg.performance.timing&&zg.performance.now&&zg.performance.timing.navigationStart?function(){return zg.performance.timing.navigationStart+zg.performance.now()}:function(){return(new Date).getTime()};var Ag=Nf("initial_gel_batch_timeout",1E3),Bg=Math.pow(2,16)-1,Cg=null,Dg=0,Eg=void 0,Fg=0,Gg=0,Hg=0,Ig=!0,Jg=B.ytLoggingTransportGELQueue_||new Map;E("ytLoggingTransportGELQueue_",Jg);var Kg=B.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Kg);function Lg(a){a=void 0===a?!1:a;return new ye(function(b){window.clearTimeout(Fg);window.clearTimeout(Gg);Gg=0;Eg&&Eg.isReady()?(Mg(b,a),Jg.clear()):(Ng(),b())})}
function Ng(){S("web_gel_timeout_cap")&&!Gg&&(Gg=vf(Lg,6E4));window.clearTimeout(Fg);var a=M("LOGGING_BATCH_TIMEOUT",Nf("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Ig&&(a=Ag);Fg=vf(Lg,a)}
function Mg(a,b){var c=Eg;b=void 0===b?!1:b;for(var d=Math.round(T()),e=Jg.size,f=u(Jg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=jb({context:Og(c.f||Pg())});h.events=k;(k=Kg[g])&&Qg(h,g,k);delete Kg[g];Rg(h,d);Sg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Dg=Math.round(T()-d)},
onError:function(){e--;e||a()},
za:b});Ig=!1}}
function Rg(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=M("EVENT_ID",void 0);if(c){var d=M("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Bg/2));d++;d>Bg&&(d=1);gf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Cg&&Dg&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Cg,roundtripMs:String(Dg)});Cg=c;Dg=0}}
function Qg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Tg=B.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Tg);function Ug(a){var b=Vg;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Wg(b),Xg(b));b.ca_type="image";a&&(b.bid=a);return b}
function Wg(a){var b={};b.dt=Ic;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.h.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function Xg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new oc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new oc(-12245933,-12245933)}k=m;m={};l=new Oc;B.SVGElement&&
B.document.createElementNS&&l.set(0);c=Dc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);B.crypto&&B.crypto.subtle&&l.set(3);B.TextDecoder&&B.TextEncoder&&l.set(4);l=Pc(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.h;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!I.WebGLRenderingContext,m}
var Vg=new function(){var a=window.document;this.f=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return yf(Ug(a))});var Yg="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function Zg(){if(!Yg)return null;var a=Yg();return"open"in a?a:null}
;var $g={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ah="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
bh=!1;
function ch(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(sc)[1]||null,e=uc(a);d&&e?(d=c,c=a.match(sc),d=d.match(sc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?uc(c)==e&&(Number(c.match(sc)[4]||null)||null)==(Number(a.match(sc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in $g)e=M($g[f]),!e||!c&&uc(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!uc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!uc(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!uc(a))b["X-YouTube-Ad-Signals"]=yf(Ug(void 0));return b}
function dh(a){var b=window.location.search,c=uc(a),d=tc(a.match(sc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=zf(b),f={};G(ah,function(g){e[g]&&(f[g]=e[g])});
return Af(a,f||{},!1)}
function eh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=fh(a,b);var d=gh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||B;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.U&&b.U.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.da&&0<b.timeout&&(f=vf(function(){e||(e=!0,window.clearTimeout(f),b.da.call(b.context||B))},b.timeout))}else hh(a,b)}
function hh(a,b){var c=b.format||"JSON";a=fh(a,b);var d=gh(a,b),e=!1,f=ih(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=jh(a,c,k,b.Pa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||B;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.U&&b.U.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.O&&0<b.timeout){var g=b.O;var h=vf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},b.timeout)}}
function fh(a,b){b.Ta&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=M("XSRF_FIELD_NAME",void 0),d=b.ya;d&&(d[c]&&delete d[c],a=Af(a,d||{},!0));return a}
function gh(a,b){var c=M("XSRF_FIELD_NAME",void 0),d=M("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.v,g=M("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Sa||uc(a)&&!b.withCredentials&&uc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.v&&b.v[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=zf(e),lb(e,f),e=b.fa&&"JSON"==b.fa?JSON.stringify(e):xc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!bh&&c&&"POST"!=b.method&&
(bh=!0,lf(Error("AJAX request with postData should use POST")));return e}
function jh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,mf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?kh(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=lh(g)})}d&&mh(e);
return e}
function mh(a){if(D(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===mb){var e=null;var f=B.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Sa,createScript:Sa,createScriptURL:Sa})}catch(g){B.console&&B.console.error(g.message)}mb=e}else mb=e}(e=mb)&&e.createHTML(d);a[c]=new Eb}else mh(a[b])}}
function kh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function lh(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ih(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&kf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Zg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=dh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ch(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function nh(){for(var a={},b=u(Object.entries(zf(M("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function oh(){return"INNERTUBE_API_KEY"in ff&&"INNERTUBE_API_VERSION"in ff}
function Pg(){return{innertubeApiKey:M("INNERTUBE_API_KEY",void 0),innertubeApiVersion:M("INNERTUBE_API_VERSION",void 0),oa:M("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),pa:M("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:M("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ra:M("INNERTUBE_CONTEXT_HL",void 0),qa:M("INNERTUBE_CONTEXT_GL",void 0),sa:M("INNERTUBE_HOST_OVERRIDE",void 0)||"",ua:!!M("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ta:!!M("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:M("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Og(a){var b={client:{hl:a.ra,gl:a.qa,clientName:a.pa,clientVersion:a.innertubeContextClientVersion,configInfo:a.oa}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=M("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=M("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=M("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&S("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);M("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:M("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,nh());return b}
function ph(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||M("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ma||M("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().La:b=Nc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=M("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=M("DELEGATED_SESSION_ID")));return d}
;function qh(a){a=Object.assign({},a);delete a.Authorization;var b=Nc();if(b){var c=new ed;c.update(M("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!Zb){Zb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Yb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Zb[k]&&(Zb[k]=h)}}}c=Yb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function rh(){var a=new Ze;(a=a.isAvailable()?new ef(a,"yt.innertube"):null)||(a=new $e("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Ve(a):null;this.h=document.domain||window.location.hostname}
rh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(xe(b))}catch(f){return}else e=escape(b);b=this.h;nc.set(""+a,e,{aa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
rh.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=nc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
rh.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.h;nc.remove(""+a,"/",void 0===b?"youtube.com":b)};var sh;function th(){sh||(sh=new rh);return sh}
function uh(a,b,c,d){if(d)return null;d=th().get("nextId",!0)||1;var e=th().get("requests",!0)||{};e[d]={method:a,request:b,authState:qh(c),requestTime:Math.round(T())};th().set("nextId",d+1,86400,!0);th().set("requests",e,86400,!0);return d}
function vh(a){var b=th().get("requests",!0)||{};delete b[a];th().set("requests",b,86400,!0)}
function wh(a){var b=th().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=qh(ph(!1));ib(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Sg(a,d.method,e,{}));delete b[c]}}th().set("requests",b,86400,!0)}}
;var xh=[],yh=!1;function zh(a,b){yh||(xh.push({type:"EVENT",eventType:a,payload:b}),10<xh.length&&xh.shift())}
;function Ah(a){if(!a)throw Error();throw a;}
function Bh(a){return a}
function U(a){var b=this;this.h=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.h(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
U.all=function(a){return new U(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={G:0};f.G<a.length;f={G:f.G},++f.G)Ch(U.resolve(a[f.G]).then(function(g){return function(h){d[g.G]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
U.resolve=function(a){return new U(function(b,c){a instanceof U?a.then(b,c):b(a)})};
U.reject=function(a){return new U(function(b,c){c(a)})};
U.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Bh,e=null!==b&&void 0!==b?b:Ah;return new U(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){Dh(c,c,d,f,g)}),c.onRejected.push(function(){Eh(c,c,e,f,g)})):"FULFILLED"===c.state.status?Dh(c,c,d,f,g):"REJECTED"===c.state.status&&Eh(c,c,e,f,g)})};
function Ch(a,b){a.then(void 0,b)}
function Dh(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?Fh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Eh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?Fh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Fh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?Fh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Gh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Hh(a){return new Promise(function(b,c){Gh(a,b,c)})}
function V(a){return new U(function(b,c){Gh(a,b,c)})}
;function Ih(a,b){return new U(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function Jh(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ia(u(c)))}
y(Jh,Error);var Kh={},Lh=(Kh.AUTH_INVALID="No user identifier specified.",Kh.EXPLICIT_ABORT="Transaction was explicitly aborted.",Kh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Kh.MISSING_OBJECT_STORE="Object store not created.",Kh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Kh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Kh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Kh);
function Mh(a,b,c){b=void 0===b?{}:b;c=void 0===c?Lh[a]:c;Jh.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,Mh.prototype);yh||(xh.push({type:"ERROR",payload:this}),10<xh.length&&xh.shift())}
y(Mh,Jh);function Nh(a,b,c){Mh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,Nh.prototype)}
y(Nh,Mh);function Oh(a){Mh.call(this,"MISSING_OBJECT_STORE",{Ua:a},Lh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,Oh.prototype)}
y(Oh,Mh);function Ph(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=Math.round(T());this.h=!1}
r=Ph.prototype;r.add=function(a,b,c){return Qh(this,[a],"readwrite",function(d){return Rh(d,a).add(b,c)})};
r.clear=function(a){return Qh(this,[a],"readwrite",function(b){return Rh(b,a).clear()})};
r.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return Qh(this,[a],"readonly",function(c){return Rh(c,a).count(b)})};
r["delete"]=function(a,b){return Qh(this,[a],"readwrite",function(c){return Rh(c,a)["delete"](b)})};
r.get=function(a,b){return Qh(this,[a],"readwrite",function(c){return Rh(c,a).get(b)})};
function Qh(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new Sh(e);d=Th(e,d);Uh(a,d,b.join(),c);return d}
function Uh(a,b,c,d){Ta(a,function f(){var g,h,k=this,l,m,n;return Da(f,function(q){if(1==q.f)return g=Math.round(T()),va(q,2),z(q,b,4);if(2!=q.f)h=Math.round(T()),Vh(k,!0,c,h-g),q.f=0,q.m=0;else{l=wa(q);m=Math.round(T());var p=l,v=k.f.name,w=k.transactionCount,x;"QuotaExceededError"===p.name?x=new Mh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:v,mode:d}):"UnknownError"===p.name&&(x=new Mh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:v,mode:d}));x&&zh("QUOTA_EXCEEDED",{dbName:v,objectStoreNames:c,
transactionCount:w,transactionMode:d});n=m-g;l instanceof Nh&&(zh("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:n,transactionCount:k.transactionCount,dbDuration:m-k.i}),k.h=!0);Vh(k,!1,c,n);q.f=0}})})}
function Vh(a,b,c,d){zh("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.h,duration:d,isSuccessful:b})}
function Wh(a){this.f=a}
r=Wh.prototype;r.add=function(a,b){return V(this.f.add(a,b))};
r.clear=function(){return V(this.f.clear()).then(function(){})};
r.count=function(a){return V(this.f.count(a))};
function Xh(a,b){return Yh(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?Xh(this,a):V(this.f["delete"](a))};
r.get=function(a){return V(this.f.get(a))};
r.index=function(a){return new Zh(this.f.index(a))};
r.getName=function(){return this.f.name};
function Yh(a,b,c){a=a.f.openCursor(b.query,b.direction);return $h(a).then(function(d){return Ih(d,c)})}
function Sh(a){var b=this;this.f=a;this.h=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=Nh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function Th(a,b){var c=new Promise(function(d,e){Ch(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Sh.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new Mh("EXPLICIT_ABORT");};
Sh.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function Rh(a,b){var c=a.f.objectStore(b),d=a.h.get(c);d||(d=new Wh(c),a.h.set(c,d));return d}
function Zh(a){this.f=a}
Zh.prototype.count=function(a){return V(this.f.count(a))};
Zh.prototype["delete"]=function(a){return ai(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
Zh.prototype.get=function(a){return V(this.f.get(a))};
Zh.prototype.getKey=function(a){return V(this.f.getKey(a))};
function ai(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return $h(a).then(function(d){return Ih(d,c)})}
function bi(a,b){this.request=a;this.cursor=b}
function $h(a){return V(a).then(function(b){return null===b?null:new bi(a,b)})}
r=bi.prototype;r.advance=function(a){this.cursor.advance(a);return $h(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return $h(this.request)};
r["delete"]=function(){return V(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return V(this.cursor.update(a))};function ci(a,b,c){return Ta(this,function e(){var f,g,h,k,l,m,n,q,p,v;return Da(e,function(w){if(1==w.f)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.xa,m=g.upgrade,n=g.closed,p=function(){q||(q=new Ph(f.result,{closed:n}));return q},f.addEventListener("upgradeneeded",function(x){if(null===x.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");x.dataLoss&&"none"!==x.dataLoss&&zh("IDB_DATA_CORRUPTED",{reason:x.dataLossMessage||"unknown reason",dbName:a});var ma=p(),L=new Sh(f.transaction);m&&m(ma,x.oldVersion,x.newVersion,L)}),h&&f.addEventListener("blocked",function(){h()}),z(w,Hh(f),2);
v=w.l;k&&v.addEventListener("versionchange",function(){k(p())});
v.addEventListener("close",function(){zh("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:v.version});l&&l()});
return w["return"](p())})})}
function di(a,b,c){c=void 0===c?{}:c;return ci(a,b,c)}
function ei(a,b){b=void 0===b?{}:b;return Ta(this,function d(){var e,f,g;return Da(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return z(h,Hh(e),0)})})}
;var fi=Wb||Xb;function gi(a){this.name="YtIdbMeta";this.options=a;this.h=!1}
function hi(a,b,c){c=void 0===c?{}:c;return di(a,b,c)}
gi.prototype["delete"]=function(a){a=void 0===a?{}:a;return ei(this.name,a)};
gi.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,xa:c,upgrade:this.options.upgrade},e=function(){return Ta(a,function g(){var h=this,k,l,m;return Da(g,function(n){switch(n.f){case 1:return va(n,2),z(n,hi(h.name,h.options.version,d),4);case 4:k=n.l;if(!Vb){n.D(5);break}a:{var q=u(Object.keys(h.options.wa));for(var p=q.next();!p.done;p=q.next())if(p=p.value,!k.f.objectStoreNames.contains(p)){q=p;break a}q=void 0}l=q;if(void 0===l){n.D(5);break}if(!Vb||h.h){n.D(7);break}h.h=!0;return z(n,h["delete"](),8);case 8:return n["return"](e());case 7:throw new Oh(l);
case 5:return n["return"](k);case 2:m=wa(n);if(m instanceof DOMException?"VersionError"===m.name:"DOMError"in self&&m instanceof DOMError?"VersionError"===m.name:m instanceof Object&&"message"in m&&"An attempt was made to open a database using a lower version than the existing version."===m.message)return n["return"](hi(h.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0})));c();throw m;}})})};
this.f=b=e()}return this.f};var ii=new gi({wa:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function ji(a){return Ta(this,function c(){var d;return Da(c,function(e){if(1==e.f)return z(e,ii.open(),2);d=e.l;return e["return"](Qh(d,["databases"],"readwrite",function(f){var g=Rh(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return V(g.f.put(a,void 0)).then(function(){})})}))})})}
function ki(){return Ta(this,function b(){var c;return Da(b,function(d){if(1==d.f)return z(d,ii.open(),2);c=d.l;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;new J;var li;
function mi(){return Ta(this,function b(){var c,d,e;return Da(b,function(f){switch(f.f){case 1:var g;if(g=fi)g=/WebKit\/([0-9]+)/.exec(Bb),g=!!(g&&600<=parseInt(g[1],10));g&&(g=/WebKit\/([0-9]+)/.exec(Bb),g=!(g&&602<=parseInt(g[1],10)));if(g&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||Ib)return f["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return f["return"](!1)}catch(h){return f["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return f["return"](!1);if(!S("ytidb_new_supported_check_with_delete")){f.D(2);
break}va(f,3);return z(f,ki(),5);case 5:return f["return"](!0);case 3:return wa(f),f["return"](!1);case 2:if(!S("ytidb_new_supported_check_with_add_and_delete")){f.D(6);break}va(f,7);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return z(f,ji(d),9);case 9:return z(f,ki(),10);case 10:return f["return"](!0);case 7:return wa(f),f["return"](!1);case 6:return va(f,11,12),z(f,di("yt-idb-test-do-not-use"),14);case 14:if(e=f.l,!e)return f["return"](!1);
case 12:f.A=[f.h];f.m=0;f.j=0;if(e)try{e.close()}catch(h){}g=f.A.splice(0)[0];(g=f.h=f.h||g)?g.Z?f.f=f.m||f.j:void 0!=g.D&&f.j<g.D?(f.f=g.D,f.h=null):f.f=f.j:f.f=13;break;case 11:return wa(f),f["return"](!1);case 13:return f["return"](!0)}})})}
function ni(){if(void 0!==li)return li;var a=T();yh=!0;return li=mi().then(function(b){yh=!1;zh("IS_SUPPORTED_COMPLETED",{duration:Math.round(T()-a),isSupported:b});return b})}
;function oi(){J.call(this);this.m=!1;this.h=pi();qi(this);ri(this)}
y(oi,J);function pi(){var a=window.navigator.onLine;return void 0===a?!0:a}
function ri(a){window.addEventListener("online",function(){a.h=!0;a.A&&a.A();si(a)})}
function qi(a){window.addEventListener("offline",function(){a.h=!1;a.s&&a.s();si(a)})}
function si(a){a.m&&(mf(new Jh("NetworkStatusManager state did not match poll",T()-0)),a.m=!1)}
;function ti(a,b){b=void 0===b?{}:b;ni().then(function(){oi.f||(oi.f=new oi);oi.f.h!==pi()&&mf(new Jh("NetworkStatusManager isOnline does not match window status"));hh(a,b)})}
function ui(a,b){b=void 0===b?{}:b;ni().then(function(){hh(a,b)})}
;function vi(a){var b=this;this.f=null;a?this.f=a:oh()&&(this.f=Pg());Pf(function(){wh(b)})}
vi.prototype.isReady=function(){!this.f&&oh()&&(this.f=Pg());return!!this.f};
function Sg(a,b,c,d){!M("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&mf(new Jh("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Jh("innertube xhrclient not ready",b,c,d);lf(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",v:c,fa:"JSON",O:function(){d.O()},
da:d.O,onSuccess:function(n,q){if(d.onSuccess)d.onSuccess(q)},
ca:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,q){if(d.onError)d.onError(q)},
Va:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.sa)&&(g=e);var h=a.f.ua||!1,k=ph(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ta&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Af(""+g+e,l||{},!0);ni().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var q=uh(b,
c,k,h);if(q){var p=f.onSuccess,v=f.ca;f.onSuccess=function(w,x){vh(q);p(w,x)};
c.ca=function(w,x){vh(q);v(w,x)}}}try{S("use_fetch_for_op_xhr")?eh(m,f):S("networkless_gel")&&d.retry?(f.method="POST",!d.za&&S("nwl_send_fast_on_unload")?ui(m,f):ti(m,f)):(f.method="POST",f.v||(f.v={}),hh(m,f))}catch(w){if("InvalidAccessError"==w.name)q&&(vh(q),q=0),mf(Error("An extension is blocking network request."));
else throw w;}q&&Pf(function(){wh(a)})})}
;var wi=[{ba:function(a){return"Cannot read property '"+a.key+"'"},
V:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ba:function(a){return"Cannot call '"+a.key+"'"},
V:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function xi(){this.f=[];this.h=[]}
var yi;var zi=new K;function Ai(a,b,c,d){c+="."+a;a=Bi(b);d[c]=a;return c.length+a.length}
function Bi(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Ci=new Set,Di=0,Ei=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Y(a,b,c){this.m=this.f=this.h=null;this.l=Ma(this);this.i=0;this.s=!1;this.o=[];this.j=null;this.A=c;this.I={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?vc(a.src):"https://www.youtube.com"),this.h=new Jf(b),c||(b=Fi(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Ma(this.f)),Df[this.f.id]=this,window.postMessage){this.j=new K;Gi(this);b=P(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in Ff)Hi(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
r.va=function(){return this.f};
r.ga=function(a){this.P(a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Ii(this,a);return this};
function Hi(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.A==c[0]&&Ii(a,d)}}
r.destroy=function(){this.f.id&&(Df[this.f.id]=null);var a=this.j;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Lf&&(Lf[this.l]=null);this.h=null;a=this.f;for(var c in hb)hb[c][0]==a&&sf(c);this.m=this.f=null};
r.S=function(){return{}};
function Ji(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.W(b):a.o.push(b)}
r.P=function(a,b){if(!this.j.i){var c={target:this,data:b};this.j.K(a,c);If(this.A+"."+a,c)}};
function Fi(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+P(a.h,"title"));(d=P(a.h,"width"))&&c.setAttribute("width",d);(d=P(a.h,"height"))&&c.setAttribute("height",d);var h=
a.S();h.enablejsapi=window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.l;window.location.href&&G(["debugjs","debugcss"],function(k){var l=window.location.href;var m=l.search(yc);b:{var n=0;for(var q=k.length;0<=(n=l.indexOf(k,n))&&n<m;){var p=l.charCodeAt(n-1);if(38==p||63==p)if(p=l.charCodeAt(n+q),!p||61==p||38==p||35==p)break b;n+=q+1}n=-1}if(0>n)l=null;else{q=l.indexOf("&",n);if(0>q||q>m)q=m;n+=k.length+1;l=decodeURIComponent(l.substr(n,
q-n).replace(/\+/g," "))}null!==l&&(h[k]=l)});
c.src=P(a.h,"host")+a.T()+"?"+xc(h);return c}
r.ea=function(){this.f&&this.f.contentWindow?this.W({event:"listening"}):window.clearInterval(this.i)};
function Gi(a){Kf(a.h,a,a.l);a.i=wf(Ra(a.ea,a));uf(a.f,"load",Ra(function(){window.clearInterval(this.i);this.i=wf(Ra(this.ea,this))},a))}
function Ii(a,b){a.I[b]||(a.I[b]=!0,Ji(a,"addEventListener",[b]))}
r.W=function(a){a.id=this.l;a.channel="widget";var b=xe(a),c=this.h,d=vc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.i?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Va){if(Va.name&&"SyntaxError"==Va.name){if(!(Va.message&&0<Va.message.indexOf("target origin ''"))){var g=void 0,h=void 0,k=Va;h=void 0===h?{}:h;h.name=M("INNERTUBE_CONTEXT_CLIENT_NAME",1);h.version=M("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=h||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(k){if(S("console_log_js_exceptions")){var n=k,q=[];q.push("Name: "+n.name);q.push("Message: "+n.message);n.hasOwnProperty("params")&&q.push("Error Params: "+JSON.stringify(n.params));q.push("File name: "+n.fileName);q.push("Stacktrace: "+n.stack);window.console.log(q.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=Di)&&0!==k.sampleWeight){var p=k,v=l,w=$b(p),x=w.message||"Unknown Error",ma=w.name||"UnknownError",L=w.stack||
p.f||"Not available";if(S("kevlar_js_fixes")&&L.startsWith(ma+": "+x)){var za=L.split("\n");za.shift();L=za.join("\n")}var Pi=w.lineNumber||"Not available",Qi=w.fileName||"Not available",Ri=L,ec=void 0,fa=p,Q=v;if(fa.hasOwnProperty("args")&&fa.args&&fa.args.length)for(var ta=0,fc=0;fc<fa.args.length;fc++){var R=fa.args[fc],Fa="params."+fc;ta+=Fa.length;if(R)if(Array.isArray(R)){for(var Si=Q,qd=ta,rb=0;rb<R.length&&!(R[rb]&&(qd+=Ai(rb,R[rb],Fa,Si),500<qd));rb++);ta=qd}else if("object"===typeof R){var gc=
void 0,Ti=Q,rd=ta;for(gc in R)if(R[gc]&&(rd+=Ai(gc,R[gc],Fa,Ti),500<rd))break;ta=rd}else Q[Fa]=Bi(R),ta+=Q[Fa].length;else Q[Fa]=Bi(R),ta+=Q[Fa].length;if(500<=ta)break}else if(fa.hasOwnProperty("params")&&fa.params){var hc=fa.params;if("object"===typeof fa.params){var Uf=0;for(ec in hc)if(hc[ec]){var Vf="params."+ec,Wf=Bi(hc[ec]);Q[Vf]=Wf;Uf+=Vf.length+Wf.length;if(500<Uf)break}}else Q.params=Bi(hc)}navigator.vendor&&!Q.hasOwnProperty("vendor")&&(Q.vendor=navigator.vendor);var sd={message:x,name:ma,
lineNumber:Pi,fileName:Qi,stack:Ri,params:Q},Xf=Number(p.columnNumber);isNaN(Xf)||(sd.lineNumber=sd.lineNumber+":"+Xf);for(var W,Ga=sd,Yf=u(wi),td=Yf.next();!td.done;td=Yf.next()){var ud=td.value;if(ud.V[Ga.name])for(var Zf=u(ud.V[Ga.name]),vd=Zf.next();!vd.done;vd=Zf.next()){var $f=vd.value,ic=Ga.message.match($f.regexp);if(ic){Ga.params["error.original"]=ic[0];for(var wd=$f.groups,ag={},Wa=0;Wa<wd.length;Wa++)ag[wd[Wa]]=ic[Wa+1],Ga.params["error."+wd[Wa]]=ic[Wa+1];Ga.message=ud.ba(ag);break}}}W=
Ga;window.yterr&&"function"===typeof window.yterr&&window.yterr(W);if(!(Ci.has(W.message)||0<=W.stack.indexOf("/YouTubeCenter.js")||0<=W.stack.indexOf("/mytube.js"))){"ERROR"===m?zi.K("handleError",W):"WARNING"===m&&zi.K("handleWarning",W);if(S("kevlar_gel_error_routing")){var jc=void 0,bg=m,N=W;a:{for(var cg=u(Ei),xd=cg.next();!xd.done;xd=cg.next()){var dg=Bb;if(dg&&0<=dg.toLowerCase().indexOf(xd.value.toLowerCase())){var eg=!0;break a}}eg=!1}if(!eg){var sb={stackTrace:N.stack};N.fileName&&(sb.filename=
N.fileName);var ha=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==ha.length&&(1!==ha.length||isNaN(Number(ha[0]))?2!==ha.length||isNaN(Number(ha[0]))||isNaN(Number(ha[1]))||(sb.lineNumber=Number(ha[0]),sb.columnNumber=Number(ha[1])):sb.lineNumber=Number(ha[0]));yi||(yi=new xi);var kc=yi;var Ui=N.message,Vi=N.name;a:{for(var fg=u(kc.h),yd=fg.next();!yd.done;yd=fg.next()){var gg=yd.value;if(N.message&&N.message.match(gg.f)){var zd=gg.weight;break a}}for(var hg=u(kc.f),Ad=hg.next();!Ad.done;Ad=
hg.next()){var ig=Ad.value;if(ig.f(N)){zd=ig.weight;break a}}zd=1}var Bd={level:"ERROR_LEVEL_UNKNOWN",message:Ui,errorClassName:Vi,sampleWeight:zd};"ERROR"===bg?Bd.level="ERROR_LEVEL_ERROR":"WARNING"===bg&&(Bd.level="ERROR_LEVEL_WARNNING");var Wi={isObfuscated:!0,browserStackInfo:sb},Xa={pageUrl:window.location.href};M("FEXP_EXPERIMENTS")&&(Xa.experimentIds=M("FEXP_EXPERIMENTS"));Xa.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+kc.h.length+"&cb="+kc.f.length},{key:"client.params.serviceWorker",
value:"false"}];var Cd=N.params;if(Cd)for(var jg=u(Object.keys(Cd)),Dd=jg.next();!Dd.done;Dd=jg.next()){var kg=Dd.value;Xa.kvPairs.push({key:"client."+kg,value:String(Cd[kg])})}var lg=M("SERVER_NAME",void 0),mg=M("SERVER_VERSION",void 0);lg&&mg&&(Xa.kvPairs.push({key:"server.name",value:lg}),Xa.kvPairs.push({key:"server.version",value:mg}));var Xi={errorMetadata:Xa,stackTrace:Wi,logMessage:Bd};jc=void 0===jc?{}:jc;var ng=vi;M("ytLoggingEventsDefaultDisabled",!1)&&vi==vi&&(ng=null);var Yi=ng,X=jc;
X=void 0===X?{}:X;var tb={};tb.eventTimeMs=Math.round(X.timestamp||T());tb.clientError=Xi;var og=C("_lact",window);var pg=null==og?-1:Math.max(Date.now()-og,0);tb.context={lastActivityMs:String(X.timestamp||!isFinite(pg)?-1:pg)};if(S("log_sequence_info_on_gel_web")&&X.ha){var Zi=tb.context,ub=X.ha;Tg[ub]=ub in Tg?Tg[ub]+1:0;Zi.sequence={index:Tg[ub],groupKey:ub};X.Ra&&delete Tg[X.ha]}var $i=tb,lc=X.Qa,qg=Yi,Ed="";if(lc){var mc=lc,Fd={};mc.videoId?Fd.videoId=mc.videoId:mc.playlistId&&(Fd.playlistId=
mc.playlistId);Kg[lc.token]=Fd;Ed=lc.token}var Gd=Jg.get(Ed)||[];Jg.set(Ed,Gd);Gd.push($i);qg&&(Eg=new qg);var aj=Nf("web_logging_max_batch")||100,rg=T();Gd.length>=aj?Lg(!0):10<=rg-Hg&&(Ng(),Hg=rg);Lg()}}if(!S("suppress_error_204_logging")){var Hd,Ha=W,vb=Ha.params||{},ua={ya:{a:"logerror",t:"jserror",type:Ha.name,msg:Ha.message.substr(0,250),line:Ha.lineNumber,level:m,"client.name":vb.name},v:{url:M("PAGE_NAME",window.location.href),file:Ha.fileName},method:"POST"};vb.version&&(ua["client.version"]=
vb.version);if(ua.v){Ha.stack&&(ua.v.stack=Ha.stack);for(var sg=u(Object.keys(vb)),Id=sg.next();!Id.done;Id=sg.next()){var tg=Id.value;ua.v["client."+tg]=vb[tg]}if(Hd=M("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var ug=u(Object.keys(Hd)),Jd=ug.next();!Jd.done;Jd=ug.next()){var vg=Jd.value;ua.v[vg]=Hd[vg]}var wg=M("SERVER_NAME",void 0),xg=M("SERVER_VERSION",void 0);wg&&xg&&(ua.v["server.name"]=wg,ua.v["server.version"]=xg)}hh(M("ECATCHER_REPORT_HOST","")+"/error_204",ua)}Ci.add(W.message);
Di++}}}}}else throw Va;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Ki(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Li(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.F={};this.playerInfo={}}
y(Z,Y);r=Z.prototype;r.T=function(){return"/embed/"+P(this.h,"videoId")};
r.S=function(){var a=P(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=P(this.h,"embedConfig")){if(D(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ga=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(D(a))for(var c in a)this.F[c]=a[c];break;case "infoDelivery":Mi(this,a);break;case "initialDelivery":window.clearInterval(this.i);this.playerInfo={};this.F={};Ni(this,a.apiInterface);Mi(this,a);break;default:this.P(b,a)}};
function Mi(a,b){if(D(b))for(var c in b)a.playerInfo[c]=b[c]}
function Ni(a,b){G(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Ki(c)?this[c]=function(){this.playerInfo={};
this.F={};Ji(this,c,arguments);return this}:Li(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ji(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(P(this.h,"width"),10),b=parseInt(P(this.h,"height"),10),c=P(this.h,"host")+this.T();zb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ob,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(pb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(qb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(wb,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(xb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(yb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
r.getOptions=function(a){return this.F.namespaces?a?this.F[a].options||[]:this.F.namespaces||[]:[]};
r.getOption=function(a,b){if(this.F.namespaces&&a&&b)return this.F[a][b]};
function Oi(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");b&&(b={videoId:b,width:O(a,"width"),height:O(a,"height")},new Z(a,b))}}
;function bj(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
y(bj,Y);bj.prototype.T=function(){return"/embed/"+P(this.h,"videoId")};
bj.prototype.S=function(){return{player:0,thumb_width:P(this.h,"thumbWidth"),thumb_height:P(this.h,"thumbHeight"),thumb_align:P(this.h,"thumbAlign")}};
bj.prototype.P=function(a,b){Y.prototype.P.call(this,a,b?b.info:void 0)};
function cj(a){if("iframe"!=a.tagName.toLowerCase()){var b=O(a,"videoid");if(b){b={videoId:b,events:{},width:O(a,"width"),height:O(a,"height"),thumbWidth:O(a,"thumb-width"),thumbHeight:O(a,"thumb-height"),thumbAlign:O(a,"thumb-align")};var c=O(a,"onclick");c&&(b.events.onClick=c);new bj(a,b)}}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Df[a]});
E("YT.scan",Gf);E("YT.subscribe",function(a,b,c){Pe.subscribe(a,b,c);Ff[a]=!0;for(var d in Df)Hi(Df[d],a)});
E("YT.unsubscribe",function(a,b,c){Oe(a,b,c)});
E("YT.Player",Z);E("YT.Thumbnail",bj);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.va;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Ef.push(function(a){a=Hf("player",a);G(a,Oi)});
Ef.push(function(){var a=Hf("thumbnail");G(a,cj)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Gf();var dj=B.onYTReady;dj&&dj();var ej=B.onYouTubeIframeAPIReady;ej&&ej();var fj=B.onYouTubePlayerAPIReady;fj&&fj();}).call(this);
