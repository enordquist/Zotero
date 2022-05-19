function EventEmitter(){this.listeners={}}Array.from||(Array.from=function(){function u(t){return"function"==typeof t||"[object Function]"===e.call(t)}function h(t){var e,n=(e=Number(t),isNaN(e)?0:0!==e&&isFinite(e)?(0<e?1:-1)*Math.floor(Math.abs(e)):e);return Math.min(Math.max(n,0),i)}var e=Object.prototype.toString,i=Math.pow(2,53)-1;return function(t,e,n){var i=Object(t);if(null===t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,r=1<arguments.length?e:void 0;if(void 0!==r){if(!u(r))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(o=n)}for(var s,a=h(i.length),c=u(this)?Object(new this(a)):new Array(a),l=0;l<a;)s=i[l],c[l]=r?void 0===o?r(s,l):r.call(o,s,l):s,l+=1;return c.length=a,c}}()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null===this)throw new TypeError('"this" is null or not defined');var n=Object(this),i=n.length>>>0;if(0==i)return!1;var o,r,s=0|e,a=Math.max(0<=s?s:i-Math.abs(s),0);for(;a<i;){if((o=n[a])===(r=t)||"number"==typeof o&&"number"==typeof r&&isNaN(o)&&isNaN(r))return!0;a++}return!1}}),function(t){"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(t){for(var e=this,n=(e.document||e.ownerDocument).querySelectorAll(t),i=0;n[i]&&n[i]!==e;)++i;return Boolean(n[i])}),"function"!=typeof t.closest&&(t.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null})}(window.Element.prototype),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),n=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var i=arguments[1],o=0;o<n;){var r=e[o];if(t.call(i,r,o,e))return r;o++}},configurable:!0,writable:!0}),Object.defineProperty(Object,"values",{configurable:!0,enumerable:!1,value:function(e){return Object.keys(e).map(function(t){return e[t]})},writable:!0}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(t){t.hasOwnProperty("prepend")||Object.defineProperty(t,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var t=Array.prototype.slice.call(arguments),n=document.createDocumentFragment();t.forEach(function(t){var e=t instanceof Node;n.appendChild(e?t:document.createTextNode(String(t)))}),this.insertBefore(n,this.firstChild)}})}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}),EventEmitter.prototype={on:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({fn:e,scope:n||null})},off:function(t,e){if(!this.listeners[t])return!1;e||(this.listeners[t]=[]);for(var n=this.listeners[t].length;n--;)this.listeners[t][n].fn===e&&this.listeners[t].splice(n,1);return this.listeners[t].length||(this.listeners[t]=null),!0},emit:function(t){for(var e=this.listeners[t]||[],n=[].slice.call(arguments,1),i=0;e[i];++i)e[i].fn.apply(e[i].scope,n)}},"undefined"!=typeof module&&(module.exports=EventEmitter);var Scheduler=function(s){"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t){var e=t.split(".");return{ev:e[0],ns:e[1]||null}}function r(t,e){for(var n=[],i=0;t[i];++i)e(t[i])||n.push(t[i]);return n}function c(t,e,n){var i=a(t),o=i.ev,r=i.ns;d[o]||(f[o]=function(t){p.notify(o,t)},s.addEventListener(o,f[o],!1),d[o]=!0),h[o]||(h[o]=[]),h[o].push({fn:e,ns:r,scope:n||null})}function l(t,e){var n=a(t),i=n.ev,o=n.ns;return!!h[i]&&(h[i]=o&&e?r(h[i],function(t){return t.ns===o&&t.fn===e}):o?r(h[i],function(t){return t.ns===o}):e?r(h[i],function(t){return t.fn===e}):[],0<!h[i].length&&(h[i]=null),!0)}function u(t,e,n){s.requestAnimationFrame(function(){e.call(n||null,{type:t})})}var n={},h={},d={},f={},p={on:function(t,e,n){for(var i=t.split(/\s+/),o=0;i[o];++o)"complete"===s.document.readyState&&i[o].match(/^load(\.|$)/)?u("load",e,n):c(i[o],e,n)},off:function(t,e){for(var n=t.split(/\s+/),i=0,o=0;n[o];++o)i+=l(n[o],e)?1:0;return i},reset:function(){var t;for(t in d)e(d,t)&&s.removeEventListener(t,f[t],!1);for(t in n)e(n,t)&&n[t]&&s.cancelAnimationFrame(n[t]);h={},n={},d={},f={}},notify:function(t,e){!n[t]&&h[t]&&(n[t]=s.requestAnimationFrame(function(){!function(t,e){for(var n=h[t]||[],i=0;n[i];++i)n[i].fn.call(n[i].scope,e)}(t,e),n[t]=!1}))}};return function(){return p}}(window);function initHeaderAndMenus(e){"use strict";function t(){var t="header:reflow";(p=e.Header).init(v,d,e.Scheduler),p.on("reflow",function(){h(),d.emit(t)}),d.on(t,u)}function n(){p&&p.setSticky()}var i,o,r,s,a,c=document,l=window,u=function(){f.setPosition(),b.setPosition()},h=function(t){var e=!t&&f.hasOverflow(),n="hide-overflow",i=y.classList;p&&f.setMaxHeight(p.getRemainingSpace()),e&&i.contains(n)?i.add(n):!e&&i.contains(n)&&i.remove(n)},d=l.EventEmitter,f=e.Menu,p=null,y=c.documentElement,m=c.querySelector("div.js-header-container"),b=(i=m.querySelector('[data-component="tray-button"]'),o=d,r=c.querySelector(i.hash),s={appendTrayToEl:m},(a=Object.create(e.Tray,{buttonEl:{writable:!0,configurable:!0,value:i},trayEl:{writable:!0,configurable:!0,value:r},options:{writable:!0,configurable:!0,value:s}})).init(),a.emitter.on("open:start",function(){o.emit("tray:opened",a)}),a.emitter.on("toggle",function(){o.emit("tray:toggled",a)}),a.emitter.on("open:end",function(){o.emit("tray:opened:end",a)}),a),v={container:m,header:c.querySelector("div.js-header"),menu:c.querySelector("div.js-header-menu"),button:c.querySelector("a.js-header-menu-button"),banner:c.querySelector('div[role="banner"]'),title:c.querySelector("[data-article-title]"),pdf:c.querySelectorAll("[data-article-pdf]"),tools:c.querySelector("div[data-article-tools]")};f.init(v),l.isEligibleForRa21&&l.isEligibleForRa21()?c.addEventListener("entitlement-box:created",function(){t(),n()}):l.isEligibleForRa21?t():setTimeout(function(){t()},100),f.on("open:start",function(){h(),d.emit("tray:opened",f.tray)}),f.on("open:end",function(){h()}),f.on("close:start",function(){h(!0)}),f.on("close:end",function(){h(!0)}),f.on("collapse",function(){h()}),f.on("expand",function(){h()}),f.on("toggle",function(){d.emit("tray:toggled",f.tray)}),d.on("tray:opened",function(e){[b,f.tray].forEach(function(t){t!==e&&t.close()})}),d.on("tray:toggled",n),e.Scheduler.on("resize",function(){h()}),l.addEventListener("load",n,!1)}function initGlobalComponents(t){"use strict";var e={Scheduler:Scheduler};for(var n in t=t||{},e)e.hasOwnProperty(n)&&(t[n]=new e[n]);t.EventEmitter=EventEmitter,window.EventEmitter=new t.EventEmitter}"undefined"!=typeof module&&(module.exports=Scheduler),this.Component=this.Component||{},this.Component.Header=function(){"use strict";function s(){m.classList.remove(w),b.classList.add(w)}function a(){m.classList.add(w),b.classList.remove(w)}function c(){v.classList.add(w)}function l(){v.classList.remove(w)}function u(t,e,n,i){e&&(t>e.getBoundingClientRect().bottom+window.pageYOffset?n():i())}function h(){return f.getBoundingClientRect().bottom}var d,f,p,y,m,b,v,E,g="sticky-header",w="hide",S={init:function(t,e,n){var i,o,r,s;this.on=e.on.bind(e),this.emit=e.emit.bind(e),d=t.container,f=t.header,p=t.banner,y=t.title,E=t.pdf,y&&(i=["mb0","pt10","pr20","mq640-pr5","background-brand-primary","text14","unstyled","nowrap","overflow-ellipsis","hide-overflow",w],(o=document.createElement("h2")).className=i.join(" "),o.innerHTML=y.innerHTML,f.querySelector("div.inner-banner").appendChild(o),m=o,b=f.querySelector("a.header-logo")),0<E.length&&(r='<li class="pin-left position-relative"><a data-track="click" data-track-action="download pdf" data-track-category="header" data-track-label="link" href="'+E[0].getAttribute("href")+'" class="pl20 pr30 pt10 inline-block block-link header-tools-link position-relative z-index-1"><span>PDF</span></a></li>',(s=document.createElement("ul")).className="background-brand-secondary-pdf ma0 clean-list text14 pin-right icon icon-right hide icon-pdf-download",s.innerHTML=r,f.querySelector(".small-header-side").insertAdjacentElement("afterend",s),v=s),S.sticky=!1,S.currentHeight=f.offsetHeight,S.currentBottomOffset=h(),S.setSticky({forceReflow:!0}),S.setBannerStacking(),n.on("scroll resize orientationchange",S.setSticky,S)},setSticky:function(t){t=t||{};var e=window.pageYOffset,n=d.getBoundingClientRect().top,i=!1;!this.sticky&&n<0?(this.sticky=(d.style.paddingTop=f.offsetHeight+"px",f.classList.add(g),!0),i=!0):this.sticky&&0<=n&&(this.sticky=(d.style.paddingTop=0,f.classList.remove(g),!1),i=!0);var o=h();o!==S.currentBottomOffset&&(S.currentBottomOffset=o,i=!0),this.currentHeight=f.offsetHeight;var r=e+this.currentHeight;(this.sticky||i||t.forceReflow)&&(u(r,y,s,a),u(r,this.activePdfLink(),l,c)),i&&this.emit("reflow",this.currentHeight),this.setBannerStacking()},activePdfLink:function(){for(var t=0;E[t];++t)if(0<E[t].offsetWidth)return E[t];return null},setBannerStacking:function(){var t="z-index-100",e="z-index-50",n=p.classList;this.sticky?(n.add(t),n.remove(e)):(n.add(e),n.remove(t))},getRemainingSpace:function(){return window.innerHeight-h()}};return S}(),this.Component=this.Component||{},this.Component.Tray=function(){"use strict";var e="js-hide";return{defaultOptions:{activeClass:"menu-open",buttonActiveClass:"tray-button-active"},init:function(){var t='<button type="button" data-action="close-on-focus" class="u-visually-hidden js-hide" tabindex="-1">Close menu</button>';if(!this.trayEl||!this.buttonEl)throw new Error("Missing instance properties (trayEl or buttonEl)");for(var e in this.emitter=new Component.EventEmitter,this.options=this.options||{},this.defaultOptions)this.options[e]||(this.options[e]=this.defaultOptions[e]);this.showTrayUnderEl=this.options.showTrayUnderEl||this.buttonEl,this.bodyEl=document.body,this.buttonEl.setAttribute("aria-haspopup",!0),this.buttonEl.setAttribute("aria-controls",this.trayEl.id),this.trayEl.setAttribute("role","navigation"),this.trayEl.setAttribute("aria-labelledby",this.buttonEl.id),this.setTrayAriaState(!1),this.options.appendTrayToEl&&this.options.appendTrayToEl.appendChild(this.trayEl),this.trayEl.insertAdjacentHTML("beforebegin",t),this.trayEl.insertAdjacentHTML("afterend",t),this.bindEvents()},setTrayAriaState:function(t){this.trayEl.setAttribute("aria-hidden",!t)},bindEvents:function(){this.buttonEl.addEventListener("click",this.toggle.bind(this),!1),this.buttonEl.addEventListener("blur",this.moveToMenu.bind(this),!1),this.trayEl.previousSibling.addEventListener("focus",this.close.bind(this),!1),this.trayEl.nextSibling.addEventListener("focus",this.close.bind(this),!1)},withFocusCactchers:function(e){[this.trayEl.previousSibling,this.trayEl.nextSibling].forEach(function(t){e(t)})},open:function(){this.buttonEl.setAttribute("data-track-action","open tray"),this.emitter.emit("open:start"),this.withFocusCactchers(function(t){t.removeAttribute("tabindex"),t.classList.remove(e)}),this.escHandler=this.closeOnEscape.bind(this),this.bodyEl.addEventListener("keyup",this.escHandler,!1),this.trayEl.querySelectorAll("div."+e).forEach(function(t){t.classList.remove(e)}),this.position(),this.buttonEl.classList.add(this.options.buttonActiveClass),this.setTrayAriaState(!0),this.trayEl.classList.add(this.options.activeClass),this.emitter.emit("open:end")},close:function(){this.isOpen()&&(this.buttonEl.setAttribute("data-track-action","close tray"),this.emitter.emit("close:start"),this.bodyEl.removeEventListener("keyup",this.escHandler),this.withFocusCactchers(function(t){t.setAttribute("tabindex","-1"),t.classList.add(e)}),this.trayEl.removeAttribute("style"),this.trayEl.classList.remove(this.options.activeClass),this.buttonEl.classList.remove(this.options.buttonActiveClass),this.buttonEl.focus(),this.setTrayAriaState(!1),this.trayEl.querySelectorAll("div").forEach(function(t){t.classList.add(e)}),this.emitter.emit("close:end"))},toggle:function(t){t.preventDefault();var e=this.isOpen();e?this.close():this.open(),this.emitter.emit("toggle",!e)},isOpen:function(){return this.trayEl.classList.contains(this.options.activeClass)},closeOnEscape:function(t){27===t.keyCode&&this.close()},moveToMenu:function(){var t=this.trayEl.querySelectorAll("a[href],input,button");t.length&&this.isOpen()&&t[0].focus()},setPosition:function(){this.isOpen()&&this.position()},position:function(){var t=this.showTrayUnderEl.getBoundingClientRect().bottom;this.showTrayUnderEl.offsetParent&&(t-=this.showTrayUnderEl.offsetParent.getBoundingClientRect().top),this.trayEl.style.top=t+"px"}}}(),this.Component=this.Component||{},this.Component.Menu=function(){"use strict";var i,o,r,s,a,c;return{init:function(t){var e={showTrayUnderEl:t.header,appendTrayToEl:t.container},n=Object.create(Component.Tray,{buttonEl:{writable:!0,configurable:!0,value:t.button},trayEl:{writable:!0,configurable:!0,value:t.menu},options:{writable:!0,configurable:!0,value:e}});n.init(),this.tray=n,this.setPosition=n.setPosition.bind(n),this.on=n.emitter.on.bind(n.emitter),this.emit=n.emitter.emit.bind(n.emitter),i=t.button,o=t.menu,r=o.querySelector("div.menu-inner"),i.setAttribute("data-track","click"),i.setAttribute("data-track-action","open menu"),i.setAttribute("data-track-category","header"),i.setAttribute("data-track-label","link"),s=i.querySelector("span"),a=s.querySelector("span"),c=a.innerHTML,this.on("open:start",this.openStart.bind(this)),this.on("close:start",this.closeStart.bind(this)),this.on("open:end",this.openEnd.bind(this))},openStart:function(){s.classList.add("js-icon-toggle"),i.setAttribute("data-track-action","open menu"),a.textContent="Close"},closeStart:function(){s.classList.remove("js-icon-toggle"),i.setAttribute("data-track-action","close menu"),a.textContent=c},openEnd:function(){this.tray.moveToMenu()},setMaxHeight:function(t){o.style.maxHeight=t+"px"},hasOverflow:function(){return!!r&&r.getBoundingClientRect().bottom>=window.innerHeight}}}(),initGlobalComponents(Component),window.initEs5=function(){"use strict";NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),initHeaderAndMenus(Component)};