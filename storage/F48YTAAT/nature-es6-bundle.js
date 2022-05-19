!function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){function e(){this.listeners={}}e.prototype={on:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({fn:e,scope:n||null})},off:function(t,e){if(!this.listeners[t])return!1;e||(this.listeners[t]=[]);for(var n=this.listeners[t].length;n--;)this.listeners[t][n].fn===e&&this.listeners[t].splice(n,1);return this.listeners[t].length||(this.listeners[t]=null),!0},emit:function(t){for(var e=this.listeners[t]||[],n=[].slice.call(arguments,1),i=0;e[i];++i)e[i].fn.apply(e[i].scope,n)}},t.exports=e}),n=t(function(t){t.exports=function(){var r="js-get-share-url",e="js-share-url",t="js-copy-share-url",n="js-share-url-container",i="js-no-share-url-container",o="c-article-share-box",a=o+"__only-read-input--highlighted",s=null,c=null,l=!1,u=function(){return'<div class="'+o+'"><h3 class="c-article__sub-heading">Share this article</h3><p class="c-article-share-box__description">Anyone you share the following link with will be able to read this content:</p><button \t\t\tclass="js-get-share-url c-article-share-box__button" \t\t\tid="get-share-url" \t\t\tdata-track="click" \t\t\tdata-track-label="button" \t\t\tdata-track-action="get shareable link">Get shareable link</button><div class="'+i+' u-display-none" aria-hidden="true"><p class="js-c-article-share-box__no-sharelink-info c-article-share-box__no-sharelink-info">Sorry, a shareable link is not currently available for this article.</p></div><div class="'+n+' u-display-none" aria-hidden="true"><p \t\t\tclass="js-share-url c-article-share-box__only-read-input" \t\t\tid="share-url" \t\t\tdata-track="click" \t\t\tdata-track-label="button" \t\t\tdata-track-action="select share url"> \t\t</p><button \t\t\tclass="js-copy-share-url c-article-share-box__button--link-like" \t\t\tid="copy-share-url" \t\t\tdata-track="click" \t\t\tdata-track-label="button" \t\t\tdata-track-action="copy share url">Copy to clipboard</button></div><p class="js-c-article-share-box__additional-info c-article-share-box__additional-info">Provided by the Springer Nature SharedIt content-sharing initiative</p></div>'},d=function(t){c=document.querySelector("."+e),f(t).then(function(t){t.url?(c.innerHTML=t.url,h(n),p()):h(i)}).catch(function(){h(i)})},f=function(i){return new Promise(function(t,e){var n=new XMLHttpRequest;n.addEventListener("load",function(){n.readyState===n.DONE&&(200===n.status?t(JSON.parse(n.responseText)):e())}),n.open("GET",i),n.send()})},h=function(t){var e=document.querySelector("."+t),n="u-display-none",i="aria-hidden";s.classList.add(n),s.setAttribute(i,!0),e.classList.remove(n),e.classList.add("u-display-inline"),e.setAttribute(i,!1)},p=function(){document.querySelector("."+t).addEventListener("click",function(){v(c),m(),document.execCommand("copy"),setTimeout(m,500)})},v=function(t){var e=window.getSelection();t?e.selectAllChildren(t):e.removeAllRanges()},m=function(){l=l?(c.classList.remove(a),!1):(c.classList.add(a),!0)};return{init:function(t){var e,n=t&&t.doi?t.doi:"",i=(t&&t.url?t.url:"")+n;""!==i&&((e=document.querySelector('[data-component="share-box"]'))&&(e.innerHTML=u()),Boolean(e))&&function(t){(s=document.querySelector("."+r)).addEventListener("click",d.bind(this,t))}(i)}}}});var p={isFeatureFlagEnabled:function(e){var t=!1,n=null;return window.dataLayer&&e&&(n=window.dataLayer[0].page.attributes.featureFlags)&&(t=n.find(function(t){return t.name===e&&t.active})),t},extendObject:function(t,e){var n=t||{};return e&&Object.keys(e).forEach(function(t){n[t]=e[t]}),n},getJournalPCode:function(){if(window.dataLayer){var t=window.dataLayer[0];return t.content&&Object.prototype.hasOwnProperty.call(t.content,"journal")&&Object.prototype.hasOwnProperty.call(t.content.journal,"pcode")?t.content.journal.pcode:void 0}},getArticleDOI:function(){if(window.dataLayer){var t=window.dataLayer[0];return t.content&&Object.prototype.hasOwnProperty.call(t.content,"article")&&Object.prototype.hasOwnProperty.call(t.content.article,"doi")?t.content.article.doi:void 0}},hasAccess:function(){return"Yes"===(t="access",(e=document.querySelector("meta[name="+t+"]"))?e.getAttribute("content"):"");var t,e},debounce:function(i,r,o){var a;return function(){var t=this,e=arguments,n=o&&!a;clearTimeout(a),a=setTimeout(function(){a=null,o||i.apply(t,e)},r),n&&i.apply(t,e)}}};function i(){var t=p.getJournalPCode(),e=p.getArticleDOI("DOI");p.hasAccess()&&t&&"ebd"!==t&&"bdj"!==t&&e&&(Component.ShareBox=new n,Component.ShareBox.init({doi:e,url:"/platform/readcube-share?resource="}))}var r=t(function(t){var h,p,e=(h=window,p=document,function(){var c=null,o=[],t=null,l=0,u=null,d=!1;function i(){function n(t){return t.getBoundingClientRect().top-e}var i=h.innerHeight,e=p.documentElement.clientTop,r=null;o.forEach(function(t){if(n(t)<=l+i/2)if(r){var e=p.getElementById(r);n(e)<=l-e.offsetHeight&&(r=t.id)}else r=t.id}),r!==t&&(c.emit("nav.section",r,t),t=r)}function f(e){function t(t){return e.nodeName.toLowerCase()===t}var n,i,r,o,a;e&&(n=e.hasAttribute("tabindex"),i=t("a")&&e.href,r=t("button"),o=t("input"),a=t("textarea"),!e.getAttribute("disabled")&&(n||i||r||o||a)||e.setAttribute("tabindex","-1"),e.focus())}function r(t){var e=null;if(t.target&&t.target.closest&&(e=t.target.closest("a")),e&&e.hash&&(!u||!e.closest(u))&&e.pathname===h.location.pathname){var n,i,r=!(!(i=(n=e).hash)||function(t){return Boolean(t.closest(".c-reading-companion"))}(n))&&i.match(/#(Fig|f|sf)\d+/),o=!r&&function(t){var e=t.hash;if(!e)return!1;var n=p.querySelector('div[data-container-section="references"]');return n&&Boolean(n.querySelector(e))}(e),a=e.hash.slice(1),s=p.getElementById(a);if(d&&(r||o))return r?c.emit("nav.figure",a,e):o&&c.emit("nav.reference",a,e),void t.preventDefault();c.emit("nav.anchor",a,e),f(s),h.addEventListener("scroll",function t(){h.removeEventListener("scroll",t),h.scrollBy(0,-1*l)},!1)}}return{init:function(t,e,n){o=p.querySelectorAll(".js-section-title"),l=t.offset||0,u=t.exclude||"js-no-scroll",(c=n).on("rc.display",function(t){d=t}),e.on("scroll resize orientationchange",i),p.body.addEventListener("click",r,!1)}}});t.exports=e}),o=t(function(t){var a,n,s,c,l,u,e=(a=window,n={},s={},c={},l={},u={on:function(t,e,n){for(var i=t.split(/\s+/),r=0;i[r];++r)"complete"===a.document.readyState&&i[r].match(/^load(\.|$)/)?p("load",e,n):f(i[r],e,n)},off:function(t,e){for(var n=t.split(/\s+/),i=0,r=0;n[r];++r)i+=h(n[r],e)?1:0;return i},reset:function(){var t;for(t in c)i(c,t)&&a.removeEventListener(t,l[t],!1);for(t in n)i(n,t)&&n[t]&&a.cancelAnimationFrame(n[t]);s={},n={},c={},l={}},notify:function(t,e){!n[t]&&s[t]&&(n[t]=a.requestAnimationFrame(function(){!function(t,e){for(var n=s[t]||[],i=0;n[i];++i)n[i].fn.call(n[i].scope,e)}(t,e),n[t]=!1}))}},function(){return u});function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t){var e=t.split(".");return{ev:e[0],ns:e[1]||null}}function o(t,e){for(var n=[],i=0;t[i];++i)e(t[i])||n.push(t[i]);return n}function f(t,e,n){var i=d(t),r=i.ev,o=i.ns;c[r]||(l[r]=function(t){u.notify(r,t)},a.addEventListener(r,l[r],!1),c[r]=!0),s[r]||(s[r]=[]),s[r].push({fn:e,ns:o,scope:n||null})}function h(t,e){var n=d(t),i=n.ev,r=n.ns;return!!s[i]&&(s[i]=r&&e?o(s[i],function(t){return t.ns===r&&t.fn===e}):r?o(s[i],function(t){return t.ns===r}):e?o(s[i],function(t){return t.fn===e}):[],0<!s[i].length&&(s[i]=null),!0)}function p(t,e,n){a.requestAnimationFrame(function(){e.call(n||null,{type:t})})}t.exports=e});function a(t){var e=new o;(new r).init({offset:50,exclude:"js-no-scroll",access:p.hasAccess()},e,t)}var s=t(function(t){var I,M,e=(I=window,M=document,function(){var v="c-reading-companion",s="--active",t=v+"__section-item",m=t+s,y=v+"__sticky",e="rc-sec-",o="rc-",c="rc-",b="data-tab-target",a="data-component",u="aria-selected",d="aria-controls",f="tabindex",l="data-src",h="data-srcset",g=!1,p=!1,w=!1,L=0,_=Number.MAX_VALUE,x=0,E=null,S=null;function A(t,e){return Array.prototype.slice.call(t.querySelectorAll(e))}function k(t){var e,n;this.html=t.querySelector("a")?(e=t.innerHTML,(n=M.createElement("div")).innerHTML=e,A(n,"a").forEach(function(t){var e=M.createElement("span");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t)}),n.innerHTML):t.innerHTML,this.text=t.textContent.replace(/[^a-z0-9\s]/gi,""),this.id=t.id}function q(t){var e=t.querySelector(".c-article-supplementary__title a");e?(this.id=t.id,this.caption=e.innerHTML,this.link=e.href,this.images=[this.placeholderFor(e)]):(this.id=(t.querySelector(".c-article-section__figure-caption")||{id:null}).id,this.caption=(t.querySelector("figcaption > b")||{innerHTML:"Figure"}).innerHTML,this.link=(t.querySelector(".c-article__pill-button")||{href:null}).href,this.images=this.findImages(t))}function j(t){var e=t.querySelector(".c-article-references__text");this.id=e.id,this.num=(t.querySelector(".c-article-references__counter")||{textContent:""}).textContent,this.citation=e.innerHTML,this.links=this.findLinks(t)}function n(t){this.href=t.href,this.text=t.textContent}function C(t){return M.getElementById(e+t)}function B(t,e){var n=v+"--highlighted",i="animationend";e&&(O(t),e.setAttribute(f,"-1"),e.focus(),e.classList.add(n),e.addEventListener(i,function t(){e.classList.remove(n),e.removeEventListener(i,t)}),e.scrollIntoView({block:"start"}))}function O(t,e){var n,i,r,o=E.querySelector("."+v+"__"+t),a=E.querySelector("."+v+"__panel"+s);o&&a&&(n=o.querySelector("img["+l+"]"),i=E.querySelector("button["+d+"="+o.id+"]"),n&&A(o,"picture").forEach(function(t){var e=t.querySelector("source"),n=t.querySelector("img");e.srcset=e.getAttribute(h),e.removeAttribute(h),n.src=n.getAttribute(l),n.removeAttribute(l)}),a&&((r=E.querySelector("button["+d+"="+a.id+"]")).setAttribute(u,"false"),r.setAttribute(f,"-1"),r.classList.remove(v+"__tab"+s),a.classList.remove(v+"__panel"+s),a.removeAttribute(f)),i.setAttribute(u,"true"),i.removeAttribute(f),i.classList.add(v+"__tab"+s),o.classList.add(v+"__panel"+s),o.setAttribute(f,"0"),e&&e.focus&&i.focus(),g=Boolean(E.querySelector("."+v+"__panel"+s+"."+v+"__panel--full-width")),T(w&&g))}function T(t){var e=function(t){for(var e=t.split(/\s*;\s*/),n={},i=0;e[i];++i){var r=e[i].indexOf(":");n[e[i].slice(0,r)]=e[i].slice(r+1)}return n}(E.style.cssText||"");if(t){var n=E.parentNode.getBoundingClientRect().left+"px";e.left!==n&&(E.style.left=n),"10px"!==e.right&&(E.style.right="10px")}else e.left&&(E.style.left=""),e.right&&(E.style.right="")}function N(t,e){var n=S?L+S.offsetHeight:L,l=M.querySelector("div["+a+"=article-container]"),i=E.querySelector("."+v+"__sections-list"),u=E.querySelector(".js-ad"),d=E.querySelector("."+v+"__tabs"),f=E.querySelector(".c-article-buy-box"),h=null,p=A(E,"."+v+"__panel:not(."+v+"__panel--full-width)");if(i){h=E.querySelector("."+v+"__sections-list").parentNode,e.on("nav.section",function(t,e){var n,i,r,o,a,s,c,l,u=e&&C(e),d=t&&C(t);u&&u.classList.remove(m),d&&(d.classList.add(m),n=d,r=(i=h).clientHeight,o=i.scrollTop+i.offsetTop,a=o+r,s=r/4,c=n.offsetTop,l=c+n.clientHeight,c<o?i.scrollTop-=o-c+s:a<l&&(i.scrollTop+=l-a+s))}),e.on("nav.figure",function(t){var e;B("figures",(e=t,M.getElementById(o+e)))}),e.on("nav.reference",function(t,e){var n,i,r,o,a=(n=t,M.getElementById(c+n));e&&(r=e,(o=(i=a).querySelector("."+v+"__return"))&&o.parentNode.removeChild(o),(o=M.createElement("a")).href="#"+r.id,o.appendChild(M.createTextNode("Return to ref "+r.textContent+" in article")),o.className=v+"__return",o.addEventListener("click",function(){o.parentNode.removeChild(o)}),i.appendChild(o)),B("references",a)});var r=function(){var t=S?L+S.offsetHeight:L,e=w,n=E.parentNode.getBoundingClientRect().top<=t,i=E.offsetHeight,r=l.getBoundingClientRect().bottom-M.documentElement.clientTop-(i+t),o=I.innerHeight,a=u?u.offsetHeight+40:0,s=y+"--stuck",c=E.classList;_=E.parentNode.parentNode.offsetWidth,!(w=c.contains(s))&&n?(c.add(s),w=!0):w&&!n&&(c.remove(s),w=!1),e!==w&&T(w&&g),w&&(h.style.maxHeight=o-(a+t+(d?80:20))+"px"),E.style.top=r<=0?r+t+"px":t+"px",_!==x&&(d&&(d.style.width=_+"px"),f&&(f.style.width=_+"px"),0<p.length&&p.forEach(function(t){t.style.maxWidth=_+"px"}),x=_)};t.on("scroll resize orientationchange",r),I.pageYOffset>n&&r(),d&&(d.addEventListener("keydown",function(t){var e,n=M.activeElement.parentNode;37===t.keyCode?e=n.previousElementSibling||E.querySelector("."+v+"__tabs > li:last-child"):39===t.keyCode&&(e=n.nextElementSibling||E.querySelector("."+v+"__tabs > li:first-child")),e&&O(e.querySelector("["+b+"]").getAttribute(b),{focus:!0})},!1),A(d,"."+v+"__tab").forEach(function(t){t.addEventListener("click",function(t){O(t.target.getAttribute(b),{focus:!0})},!1)}))}}function i(t,e){t.insertAdjacentHTML("beforebegin",e)}function H(){var t=["sections","figures","references"].map(function(t){var e,n,i,r,o,a,s=M.querySelector("."+v+"__"+t),c=(n=A(M,".js-"+v+"-"+(e=t)+"-item"),(i={sections:function(t){var e=[];return t.forEach(function(t){e.push(new k(t))}),0<e.length?'<ul class="'+v+'__sections-list">'+e.map(function(t){return t.render()}).join("")+"</ul>":""},figures:function(t){var n=[];return t.forEach(function(t){var e=new q(t);e.id&&n.push(e)}),n.length?'<ul class="'+v+'__figures-list">'+n.map(function(t){return t.render()}).join("")+"</ul>":""},references:function(t){var e=[];return t.forEach(function(t){e.push(new j(t))}),e.length?'<ol class="'+v+"__references-list"+(e[0].num?" "+v+"__references-list--numeric":"")+'">'+e.map(function(t){return t.render()}).join("")+"</ol>":""}})[e]?i[e](n):""),l=(o=(r=t).charAt(0).toUpperCase()+t.substring(1),'<li role="presentation"><button '+b+'="'+r+'" role="tab" id="tab-'+r+'" '+d+'="tabpanel-'+r+'" '+u+'="false" '+f+'="-1" class="'+v+'__tab">'+o+"</button></li>");return c&&s?(s.setAttribute("aria-labelledby","tab-"+t),a='<div class="'+v+'__scroll-pane">'+c+"</div>",s.insertAdjacentHTML("afterbegin",a)):s&&s.parentNode.removeChild(s),!(!c||!s)&&l}).filter(function(t){return Boolean(t)}),e=E.querySelector("."+v+"__panel"),n=t.length;return 1<n?i(e,'<ul class="'+v+'__tabs" role="tablist">'+t.join("")+"</ul>"):1===n&&i(e,'<h3 class="'+v+'__heading u-font-family-sans">Sections</h3>'),n}return k.prototype.render=function(){return'<li id="'+e+this.id+'" class="'+t+'"><a href="#'+this.id+'" data-track="click" data-track-action="section anchor" data-track-label="link:'+this.text+'">'+this.html+"</a></li>"},q.prototype={findImages:function(t){var e=[],n=this;return A(t,"picture > img").forEach(function(t){e.push(n.placeholderFor(t))}),e},placeholderFor:function(t){var e=t.getAttribute("data-supp-info-image")||t.src,n=t.alt||"",i=-1===e.indexOf("?")?"?":"&";return["<picture>",'<source type="image/webp" '+h+'="'+e+i+'as=webp">',"<img "+l+'="'+e+'" alt="'+n+'">',"</picture>"].join("")},render:function(){return['<li class="'+v+'__figure-item">',"<figure>",'<figcaption><b class="'+v+'__figure-title u-font-family-serif" id="'+o+this.id+'">'+this.caption+"</b></figcaption>",this.images.join(""),this.link?'<p class="'+v+'__figure-links">':"",this.link?'<a href="#'+this.id+'" data-track="click" data-track-action="figure anchor" data-track-label="link">View in article</a>':"",this.link&&p?'<a href="'+this.link+'" class="'+v+'__figure-full-link" data-track="click" data-track-action="view figure" data-track-label="link">Full size image<svg width="16" height="16" class="u-icon"><use href="#global-icon-chevron-right"/></svg></a>':"",this.link?"</p>":"","</figure>","</li>"].join("")}},j.prototype.findLinks=function(t){var e=[];return A(t,".c-article-references__links a").forEach(function(t){e.push(new n(t))}),e},j.prototype.render=function(){return['<li class="'+v+'__reference-item">','<p class="'+v+'__reference-citation u-font-family-serif" id="'+c+this.id+'">'+this.citation+"</p>",0<this.links.length?'<ul class="'+v+'__reference-links">'+this.links.map(function(t){return t.render()}).join("")+"</ul>":"","</li>"].join("")},n.prototype.render=function(){return'<li><a href="'+this.href+'" data-track="click" data-track-action="outbound reference" data-track-label="link">'+this.text+"</a></li>"},{init:function(t,n,i){function e(t){!function(t){if(!r&&!t.matches&&(E=M.querySelector("["+a+"=reading-companion-sticky]"))){S=M.querySelector('[data-component="context-bar"]');var e=H();0!==e&&(N(n,i),1<e&&O("sections"),r=!0)}}(t),i.emit("rc.display",!t.matches&&r)}p=Boolean(t.access),L=t.offset||0;var r=!1,o=I.matchMedia(t.matchMediaQuery||"(max-width: 1023px)");o.addListener(e),e(o)}}});t.exports=e});function c(t){var e=new o;(new s).init({offset:50,exclude:"js-no-scroll",access:p.hasAccess()},e,t)}var l=t(function(t){t.exports=function(){return{init:function(t,e,n){(t||[]).forEach(function(t){this.bindEvents(t,e,n)},this)},bindEvents:function(i,t,e){function n(){var t,e,n;n=(e="c-table-scroll-wrapper__fade")+"--transparent",0<(t=i).scrollWidth-(t.scrollLeft+t.clientWidth)?(t.classList.add(e),t.classList.remove(n)):t.classList.add(n)}e.on("load resize",n),i.addEventListener("scroll",t(n,100),!1)}}}});function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"[data-component-scroll-wrapper]",e=document.querySelectorAll(t);if(0!==e.length){var n=p.debounce,i=new o;(new l).init(e,n,i)}}function d(){var t=document.querySelector('[data-component="article-subject-links"]'),e=document.querySelector('[data-component="article-info-list"]');0<(t?t.querySelectorAll("a"):[]).length&&e&&(e.innerHTML=t.innerHTML,t.parentNode.removeChild(t))}var f=t(function(t){t.exports=function(){function o(t,e){return t.getAttribute("data-disqus-"+e)}var a=!1;return{init:function(n,i){var r="load scroll resize orientationchange";i.on(r,function t(){var e;-50<=(e=n.getBoundingClientRect()).top&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+50&&!a&&(i.off(r,t),function(t){window.disqus_config=function(){this.page.remote_auth_s3=o(t,"s3"),this.page.api_key=o(t,"key"),this.sso={name:o(t,"sso-name"),button:o(t,"sso-button"),icon:o(t,"sso-icon"),url:o(t,"sso-url"),logout:o(t,"sso-logout")}},window.disqus_shortname=o(t,"shortname"),window.disqus_identifier=o(t,"identifier"),window.disqus_url=o(t,"url");var e=document.createElement("script");e.async=!0,e.src="//"+window.disqus_shortname+".disqus.com/embed.js",(document.querySelectorAll("head")[0]||document.querySelectorAll("body")[0]).appendChild(e),a=!0}(n))})}}}});function h(t,o,a,s){var c=new XMLHttpRequest;c.addEventListener("load",function(){if(c.status<300){var t=(e=c.responseText,n=o,i=document.createDocumentFragment(),(r=document.createElement("div")).innerHTML=e,i.appendChild(r),i.querySelector(n));t&&(a.insertAdjacentHTML("beforeend",t.innerHTML),s())}var e,n,i,r}),c.open("GET",t),c.send()}function v(){var e=f(),n=document.getElementById("inject-comments"),t=document.getElementById("article-comments-content");if(n&&t){var i=n.querySelector("[data-placeholder]").getAttribute("data-placeholder").split(/\s+/);h(i[0],i[1],t,function(){var t=document.querySelector('[data-object="disqus"]');t&&e.init(t,new o),n.parentNode.removeChild(n)})}}function m(){var n,t=document.querySelector(".c-article-fullwidth-content")?Array.prototype.slice.call(document.querySelectorAll('[mi24-video-player="true"]'),0):[];n=[],t.forEach(function(t){var e=t.getAttribute("video-id");-1!==n.indexOf(e)?t.outerHTML="":n.push(e)})}var y=t(function(t){t.exports=function(){return{create:function(d,L,t){function o(t,e){var n,i,r="c-author-popup",o="c-article-orcid",a=function(t){var e=t.querySelector("a.js-orcid"),n="";return e&&(n='<a class="'+o+'" href="'+e.getAttribute("href")+'" target="_blank" rel="noopener"><span class="'+o+'__text">View ORCID ID profile</span></a>'),n},s=e.hash.slice(1),c=e.closest("li"),l=e.cloneNode(!0);(i=(n=l)&&n.querySelector("svg"))&&n.removeChild(i);var u,d,f,h,p,v,m,y,b,g='<div role="region" id="popup-'+s+'" class="'+r+' u-font-family-serif" aria-labelledby="'+s+'"><section>';g+=(u=c,d=l.innerHTML,'<h3 id="author-'+s+'" class="c-author-popup__subheading" tabindex="0">'+d+"</h3>"+a(u)),s.match(/^group/)?g+=function(t){var e=document.getElementById(t);if(e){var n=e.cloneNode(!0),i=n.querySelector("h3"),r=n.querySelector("ul");return r&&r.classList.add("c-article-author-institutional-author__author-list--popup"),i&&i.parentNode.removeChild(i),n.innerHTML.replace(/[\r\n]/g,"")}return""}(s):(g+=(h=c,p=(f=l).getAttribute("data-corresp-id"),v=p?document.getElementById("corresp-"+p):null,m=[],y=[],b=[],Array.prototype.slice.call(h.querySelectorAll("sup > a"),0).forEach(function(t){var e;(e=t.nextElementSibling)&&"true"===e.getAttribute("data-present-affiliation")||m.push(t.hash)}),m.forEach(function(t){var e=document.querySelector(t);if(e){var n=e.querySelector(".c-article-author-affiliation__address"),i=e.getAttribute("id");if(null!==n&&b.push(n.textContent),null!==i&&-1<i.indexOf("n")){var r=e.querySelector(".js-present-address");r?y.push(r.textContent):y.push(e.textContent)}}}),b=y.concat(b),v&&b.push('<a href="'+v.getAttribute("href")+'" class="c-author-popup__link" rel="nofollow">Contact '+f.innerHTML+"</a>"),'<ul class="c-author-popup__author-list"><li>'+b.join("</li><li>")+"</li></ul>"),g+=function(t){var e=document.getElementById(t);if(e){var n=e.cloneNode(!0),i=n.querySelector(".js-search-name");return i&&i.parentNode.removeChild(i),n.innerHTML}return""}(s)),g+="</section></div>";var w=document.createElement("div");w.innerHTML=g,L.spawn(e,w.firstChild,{setFocusOn:"h3#author-"+s}).toggle(t)}var f,h,p="js-etal",v=p+"-collapsed",a="js-authors-expanded",m="u-js-hide",y="js-mq480-show-inline";(t=t||{}).etal&&function(t,e){function n(t){return t<a&&!(a===t+1&&o[t].classList.contains("c-article-author-institutional-author__author-name"))}function i(){var t=d.closest("div"),e=t?t.querySelector("h3[itemprop]"):null;return e?e.textContent:"this article"}function r(t,e,n){var i=document.createElement("li");i.className=t;var r=document.createElement("a");return r.className=p,r.setAttribute("href","javascript:;"),r.setAttribute("aria-label",e),r.setAttribute("title",e),r.innerHTML=n,i.appendChild(r),i}var o=d.querySelectorAll("li"),a=o.length;f=n(e);var s="";(h=n(t))&&!f&&(s=m+" "+y);var c="c-author-list",l=r(c+"__show-less "+m,"Show fewer authors for "+i(),"-Show fewer authors"),u=r(c+"__show-more "+s,"Show all "+a+" authors for "+i(),"[&hellip;]");(f||h)&&(d.classList.add(v),o[a-2].parentNode.insertBefore(u,o[a-2]),d.appendChild(l),Array.prototype.slice.call(o,2,a-1).forEach(function(t){f&&t.classList.add("js-author-etal"),h&&t.classList.add("js-smaller-author-etal")}))}(t.etalSmallscreen||t.etal,t.etal);d.classList.add("js-no-scroll"),Array.prototype.slice.call(d.querySelectorAll("sup > a"),0).forEach(function(t){t.setAttribute("tabIndex","-1")}),d.addEventListener("click",function(t){var e,n,i,r=t.target.closest("a");r&&r.classList.contains(p)?(n=d.querySelectorAll("li"),i=n.length,d.classList.contains(v)?(d.classList.add(a),d.classList.remove(v),f?(n[i-4].classList.add(m),n[i-1].classList.remove(m)):h&&(n[i-4].classList.remove(y),n[i-1].classList.add(y))):(d.classList.add(v),d.classList.remove(a),f?n[i-4].classList.remove(m):h&&(n[i-4].classList.add(y),n[i-1].classList.remove(y)),n[i-1].classList.add(m)),L&&L.close()):L&&r&&"sup"!==((e=r).parentNode?e.parentNode.nodeName.toLowerCase():"")&&(o(t,r),t.preventDefault())})}}}});function b(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.selector,n=void 0===e?"[data-component-authors-activator]":e,i=t.popupGroup,r=void 0===i?null:i,o=t.options,a=void 0===o?{etal:3,etalSmall:null}:o,s=document.querySelectorAll(n);if(0!==s.length){var c=new y;Array.prototype.slice.call(s,0).forEach(function(t){var e=parseInt(t.getAttribute("data-etal"))||a.etal,n=parseInt(t.getAttribute("data-etal-small"))||a.etalSmall,i={etal:e};n&&(i.etalSmallscreen=n),c.create(t,r,i)})}}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var w=t(function(t){var e=function(t,f){function n(t,e){return'<a href="javascript:;" class="'+t.join(" ")+'">'+e+"</a>"}function h(t){return t+"px"}function e(e){function t(t){return e.nodeName.toLowerCase()===t}var n,i,r,o,a;e&&(n=e.hasAttribute("tabindex"),i=t("a")&&e.href,r=t("button"),o=t("input"),a=t("textarea"),!e.getAttribute("disabled")&&(n||i||r||o||a)||e.setAttribute("tabindex","-1"),e.focus())}function r(t,e,n,i){this.id=e.id,this.trigger=t,this.content=e,this.group=n,this.focusSelector=i.setFocusOn||"a[href]:not(."+s+")",this.columnSelector=i.mainColSelector||".js-main-column",this.isOpen=!1,this.build()}var i="c-author-popup",p=i+"__arrow",o="u-hide-print",a="js-close",s="js-focus-catcher",v="-above",m="-below",c="click";r.prototype={build:function(){var t=n([s,"u-visually-hidden"],"Return to place in article"),e=n(["c-author-popup__close",a],"Close");this.content.insertAdjacentHTML("afterbegin",t),this.content.insertAdjacentHTML("beforeend",e+'<div class="c-author-popup__arrow c-author-popup__arrow--above"></div>'+t),this.content.classList.contains(o)||this.content.classList.add(o),f.body.appendChild(this.content)},bindEvents:function(){var e=this;e.closeListener=e.close.bind(e),e.escapeListener=e.closeOnEscape.bind(e),e.clickAwayListener=e.closeOnClickAway.bind(e),e.content.querySelector("."+a).addEventListener(c,e.closeListener),e.content.querySelectorAll("."+s).forEach(function(t){t.addEventListener("focus",e.closeListener)}),f.addEventListener("keyup",e.escapeListener),f.addEventListener(c,e.clickAwayListener),t.addEventListener("resize",e.closeListener)},unbindEvents:function(){var e=this;e.content.querySelector("."+a).removeEventListener(c,e.closeListener),e.content.querySelectorAll("."+s).forEach(function(t){t.removeEventListener("focus",e.closeListener)}),f.removeEventListener("keyup",e.escapeListener),f.removeEventListener(c,e.clickAwayListener),t.removeEventListener("resize",e.closeListener)},open:function(){this.group.close(),this.isOpen=!0,this.bindEvents(),this.content.style.display="block",this.content.style.visibility="hidden";var t=this.pos();this.content.style.top=h(t.top),this.content.style.left=h(t.left),this.content.style.right=h(t.right),this.content.style.visibility="visible",this.focus()},close:function(){this.unbindEvents(),this.isOpen=!1,this.content.style.display="none",this.returnFocus()},toggle:function(t){t&&t.stopPropagation(),this.isOpen?this.close():this.open()},closeOnEscape:function(t){27===t.keyCode&&this.close()},closeOnClickAway:function(t){t.target.closest("."+i)||this.close()},pos:function(){var t=f.documentElement,e=t.scrollTop,n=this.trigger.getClientRects()[0],i=n.top+e,r=n.left,o=this.content.querySelector("."+p),a=t.clientWidth,s=Math.min(f.querySelector(this.columnSelector).offsetWidth,a),c=i-this.content.offsetHeight-12,l=i+n.height+12,u=n.left+this.content.offsetWidth-a+20,d=v;return c<e?(d=m,o.classList.remove(p+"-"+v),o.classList.add(p+"-"+m)):(o.classList.remove(p+"-"+m),o.classList.add(p+"-"+v)),o.style.left=h(s<600?r+5:Math.max(Math.round(n.width/2-10)+(0<u?u:0),5)),{left:s<600?5:Math.max(5,r-10),right:5,top:d===v?c:l}},focus:function(){var t=this.content.querySelector(this.focusSelector);t&&e(t)},returnFocus:function(){e(this.trigger)}};function l(){this.cache={}}return l.prototype={spawn:function(t,e,n){var i=e.id;return this.cached(i)||(this.cache[i]=new r(t,e,this,n||{})),this.cache[i]},close:function(){for(var t in this.cache)this.cached(t)&&this.cache[t].isOpen&&this.cache[t].close()},cached:function(t){return Object.prototype.hasOwnProperty.call(this.cache,t)}},function(){return l}}(window,document);t.exports=e}),L=function(){function e(){if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=null,!this.popup){this.popup=this._createInstance();var t=this._closePopup.bind(this);window.EventEmitter.on("tray:toggled",t)}return this.popup}var t,n,i;return t=e,(n=[{key:"_closePopup",value:function(){this.popup&&this.popup.close()}},{key:"_createInstance",value:function(){return new(new w)}}])&&g(t.prototype,n),i&&g(t,i),e}();function _(){return new L}var x=t(function(t){t.exports=function(){var o="data-expandable-label",r="["+o+"]",a="[data-expandable-box]",s="c-article-box--expanded";function c(t){var e=t.querySelector(a),n=t.querySelector(r);e.parentNode.classList.add(s),e.style.height="auto",e.setAttribute("aria-hidden","false"),n.parentNode.setAttribute("aria-expanded","true"),n.textContent="Show less",t.isOpen=!0}function l(t,e){var n=t.querySelector(a),i=t.querySelector(r);n.parentNode.classList.remove(s),n.style.height="95px",n.setAttribute("aria-hidden","true"),i.parentNode.setAttribute("aria-expanded","false"),i.textContent="Show more",e&&n.scrollIntoView(),t.isOpen=!1}return{init:function(t){(t||[]).forEach(function(e){var t,n,i=(t=e.querySelector("figcaption:first-of-type"))&&t.textContent?t.textContent:"this box",r=['<div class="c-article-box__controls">','<div class="c-article-box__fade"></div>','<button aria-expanded="false" aria-controls="'+(n=e,n.querySelector(a).id)+'"><span class="c-article-box__button-text" '+o+'></span><span class="u-visually-hidden">from '+i+"</span></button>","</div>"].join("");e.insertAdjacentHTML("beforeend",r),l(e),e.querySelector("button").addEventListener("click",function(){var t;(t=e).isOpen?l(t,!0):c(t)},!1),e.addEventListener("focusin",function(){"button"!==document.activeElement.nodeName.toLowerCase()&&c(e)},!1)}),window.addEventListener("hashchange",function(){var t=location.hash?document.querySelector(location.hash):null,e=t&&t.closest(a);e&&c(e.parentNode)})}}}});function E(){x().init(Array.prototype.slice.call(document.querySelectorAll("div[data-expandable-box-container]"),0))}var S=t(function(t){t.exports=function(){var i="show all",r="show less",o="data-text-expanded",a="show-button",s="c-article-editorial-summary__content--less";return{init:function(){var t,e=document.querySelector(".c-article-editorial-summary__content");function n(t,e){t.setAttribute("data-track-action","editorial summary "+e)}(t=document.createElement("button")).textContent=i,t.setAttribute("id",a),t.setAttribute("data-track","click"),t.setAttribute("data-track-label","button"),n(t,r),t.classList.add("c-article-editorial-summary__button"),t.addEventListener("click",function(){var t;(t=document.querySelector("[id^="+a+"]")).getAttribute(o)?(t.textContent=i,t.removeAttribute(o,"true"),n(t,"editorial summary "+r),e.classList.add(s)):(t.textContent=r,t.setAttribute(o,"true"),n(t,i),e.classList.remove(s))}),e.parentNode.insertBefore(t,e.nextSibling)}}}});function A(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"[data-component-show-more]",e=document.querySelectorAll(t);0!==e.length&&(new S).init(e)}function k(){return{strategies:{ENTITLED:"entitled",UNENTITLED:"unentitled",UNKNOWN:"unknown"},persistenceServiceWrapperSource:window.ra21Host?window.ra21Host+"/seamless-access.js":null,idpVerifyURL:window.idpVerifyPrefix+"/verify/nature.min.js"}}var q=function(){return{init:function(t,e){t&&e&&function(t,e){var n=k().persistenceServiceWrapperSource,i=document.createElement("script");if(!n)throw new Error("persistance wrapper url is not set correctly");i.src=n,i.addEventListener("load",function(){seamlessAccess&&t()}),i.addEventListener("error",function(){e(this.error)}),document.body.appendChild(i)}(t,e)}}};function j(){return!!window.eligibleForRa21&&"true"===window.eligibleForRa21}function C(){return!window.dataLayer||!dataLayer[0].content.authorization.status}function B(t){return Object.prototype.hasOwnProperty.call(t,"name")&&Object.prototype.hasOwnProperty.call(t,"entityId")}window.isEligibleForRa21=j;var O=function(){return{init:function(t,e){var n,i,r,o,a,s=e||function(){};n=t||function(){},i=s,window.idp={institutionalLogin:function(t){n(t)},hasNatureUserProof:function(t){if(!t){var e=document.getElementById("login-button"),n=document.getElementById("my-account");e&&n&&(n.style.display="none",e.style.display="block")}},ajaxError:function(t){i(t)}},r=s,o=k().idpVerifyURL,(a=document.createElement("script")).src=o,a.addEventListener("load",function(){}),a.addEventListener("error",function(){r(this.src)}),document.body.appendChild(a)}}};function T(t){var o=null,r=".js-access-button",a=".js-buy-button",s=".js-change-institution-button",c=".js-text",l="u-display-none",u="c-nature-box__wrapper--placeholder",e=function(){if(!o)return;this.options.text&&i();this.options.active&&n(this.options,function(){var t=new CustomEvent("entitlement-box:created");document.dispatchEvent(t)})}.bind(this),n=function(e,t){if(e.accessButton&&(d(r),e.accessButtonEventHandler)){var n=o.querySelector(r),i=null;n&&(i=n.querySelector("a"))&&n.addEventListener("click",function(t){t.preventDefault(),e.accessButtonEventHandler.call(null,t,i)})}e.buyButton&&d(a);e.changeInstitutionButton&&d(s);e.text&&d(c);"true"===o.getAttribute("aria-hidden")?o.removeAttribute("aria-hidden"):o.setAttribute("aria-hidden","true");o.classList.toggle(l),t&&t()}.bind(this),i=function(){var t=o.querySelector(c);t&&(t.innerHTML=this.options.text)}.bind(this),d=function(t){var e=o.querySelector(t),n=null,i=null,r=null;e&&(n=e.querySelector("a"),r=e.parentNode.parentNode,"true"===(i=n||e).getAttribute("aria-hidden")?i.removeAttribute("aria-hidden"):i.setAttribute("aria-hidden","true"),e.classList.toggle(l),r&&r.classList.contains(u)&&r.classList.remove(u))}.bind(this);return this.options=p.extendObject({selector:"#entitlement-box-mobile",active:!0},t),this.handleVisibility=n,o=document.querySelector(this.options.selector),e(),this}function N(t,e){var n,i,r,o=null,a=e||{},s=k().strategies;switch(t){case s.ENTITLED:r=a,o=new T(p.extendObject({type:"entitled",downloadButton:!0},r));break;case s.UNENTITLED:i=a,o=new T(p.extendObject({type:"unentitled",changeInstitutionButton:!0,buyButton:!0},i));break;case s.UNKNOWN:n=a,o=new T(p.extendObject({type:"unknown",accessButton:!0,buyButton:!0},n));break;default:o=new T({type:"default"})}return o}function H(){this._entitlementBoxList=[]}function I(){var i="#entitlement-box-desktop",r="#entitlement-box-mobile",e=function(){seamlessAccess&&Object.prototype.hasOwnProperty.call(seamlessAccess,"lastUsedInstitution")&&seamlessAccess.lastUsedInstitution(t)}.bind(this),o=new H,a=null,s={isEligibleForRa21:j,isAccessDenied:C,isLastUsedInstitutionValid:B},c=window.matchMedia("(max-width: 1023px)");function t(n){var i=null;a=n&&s.isLastUsedInstitutionValid(n)?{strategy:"unknown",options:{text:"Access this article via <strong>"+n.name+"</strong>",buyButton:!1,changeInstitutionButton:!0,accessButtonEventHandler:function(t,e){e&&(i=e.getAttribute("href").match("[?&]redirect_uri=([^&#]*)")[1],seamlessAccess&&Object.prototype.hasOwnProperty.call(seamlessAccess,"loginWithLastSelected")&&seamlessAccess.loginWithLastSelected(n.entityId,i))}}}:{strategy:"unknown"},h(),u(a)}function l(t){var e=t.strategy,n=t.options||null;return o.create(e,n)}function u(t){if(null!==document.querySelector(i)||null!==document.querySelector(r)){var e=t.options||{},n=t.options||{};l({strategy:t.strategy,options:p.extendObject(e,{active:c.matches})}),l({strategy:t.strategy,options:p.extendObject(n,{active:!c.matches,selector:i})})}}function n(t){console.log("there has been an error when trying to load the entitlement script "+t),s.isAccessDenied()||o.create()}function d(t,e){var n;t.handleVisibility(t.options),(n=o.updateCurrentActive(e)).handleVisibility(n.options)}function f(){var t=o.getActiveEntitlementBox();t&&(c.matches&&t.options.selector!==r&&d(t,r),c.matches||t.options.selector===i||d(t,i))}function h(){c.addListener(f)}O().init(function(t){s.isEligibleForRa21()&&(0<t.length?(a={strategy:s.isAccessDenied()?"unentitled":"entitled",options:{text:s.isAccessDenied()?"Access to this article via <strong>"+t[0]+"</strong>  is not available.":"You have full access to this article via <strong>"+t[0]+"</strong>"}},h(),u(a)):q().init(e,n))},n)}function M(){I()}H.prototype.updateCurrentActive=function(t){var e=this.getActiveEntitlementBox();return e&&(e.options.active=!1),t&&(this.getEntitlementBoxBySelector(t).options.active=!0),this.getActiveEntitlementBox()},H.prototype.create=function(t,e){var n=new N(t,e);return this._entitlementBoxList.push(n),n},H.prototype.getActiveEntitlementBox=function(){return this._entitlementBoxList.find(function(t){return t.options.active})},H.prototype.getEntitlementBoxBySelector=function(e){return this._entitlementBoxList.find(function(t){return t.options.selector===e})},H.prototype.getAllEntitlementBox=function(){return this._entitlementBoxList};var F="backfillPersistedBpid";function P(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"https://"+("www.nature.com"===window.location.hostname?"idp.nature.com":"staging-idp.nature.com")+"/backfill/persistent-access-backfill.js";p.hasAccess()||window.localStorage.getItem(F)||("complete"!==document.readyState?window.addEventListener("load",function(){R(t)},!1):R(t))}function R(t){var e=document.createElement("script");e.defer="defer",e.src=t,e.addEventListener("load",function(){window.persistentAccessBackfill&&window.persistentAccessBackfill.bpidPersisted(function(t){t&&(window.ga&&window.ga("send","event",{eventCategory:"bpid backfill",eventAction:"fill",nonInteraction:!0}),window.location.reload()),function(){try{window.localStorage.setItem(F,"1")}catch(t){}}()})},!1),document.head.appendChild(e)}function D(t){try{return t()}catch(t){console.log(t)}}function U(t,e,n){return D(n?function(){return t.call(n,e)}:function(){return t(e)})}window.initEs6=function(){var t;t=new e,U(M),U(i),U(a,t),U(c,t),U(u),U(d),U(v),U(m),U(E),U(A),U(P),U(b,{popupGroup:U(_)})}}();