
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"164",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector(\".optanon-alert-box-wrapper\");if(a)return\"block\"===window.getComputedStyle(a).getPropertyValue(\"display\")}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",12],8,16],"||(",["escape",["macro",13],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",16],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",18],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",21],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",20],8,16],",b=",["escape",["macro",22],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",24],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",26],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",28],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",32],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",34],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",36],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",38],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",40],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",42],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",43],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",51],8,16],"||(",["escape",["macro",13],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",53],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",55],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",57],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",59],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",6],8,16],",a=",["escape",["macro",61],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",63],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",66],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",65],8,16],"||[],c=",["escape",["macro",67],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",67],8,16],",c=",["escape",["macro",69],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",58],8,16],",a=",["escape",["macro",17],8,16],",b=",["escape",["macro",46],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",17],8,16],".concat(",["escape",["macro",71],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",71],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"user.profile.profileInfo.resolvedBy"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"VSNUO",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",4]],["map","index","3","group",["macro",9]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",10]],["map","fieldName","anonymizeIp","value","true"]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",11]],["map","index","4","dimension",["macro",14]],["map","index","5","dimension",["macro",17]],["map","index","6","dimension",["macro",19]],["map","index","8","dimension",["macro",23]],["map","index","9","dimension",["macro",25]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",29]],["map","index","12","dimension",["macro",31]],["map","index","13","dimension",["macro",33]],["map","index","14","dimension",["macro",35]],["map","index","16","dimension",["macro",37]],["map","index","17","dimension",["macro",39]],["map","index","18","dimension",["macro",41]],["map","index","19","dimension",["macro",44]],["map","index","20","dimension",["macro",46]],["map","index","21","dimension",["macro",48]],["map","index","22","dimension",["macro",50]],["map","index","23","dimension",["macro",52]],["map","index","25","dimension",["macro",54]],["map","index","26","dimension",["macro",56]],["map","index","27","dimension",["macro",58]],["map","index","28","dimension",["macro",60]],["map","index","30","dimension",["macro",62]],["map","index","60","dimension",["macro",9]],["map","index","61","dimension",["macro",64]],["map","index","63","dimension",["macro",68]],["map","index","72","dimension",["macro",70]],["map","index","74","dimension",["macro",72]],["map","index","65","dimension",["macro",73]],["map","index","1","dimension",["macro",74]],["map","index","2","dimension",["macro",75]],["map","index","75","dimension",["macro",76]],["map","index","78","dimension",["macro",77]],["map","index","80","dimension",["macro",78]],["map","index","79","dimension",["macro",79]],["map","index","81","dimension",["macro",80]],["map","index","82","dimension",["macro",81]],["map","index","84","dimension",["macro",73]],["map","index","86","dimension",["macro",82]],["map","index","90","dimension",["macro",83]],["map","index","91","dimension",["macro",83]],["map","index","92","dimension",["macro",84]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.TARGETING)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.PERFORMANCE)?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],",b=",["escape",["macro",3],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",99],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",78],8,16],",b=",["escape",["macro",80],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=Bootstrapper.npg.utils.Consent;return a.allow(a.FUNCTIONAL)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",107],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",65],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],"(\"ab_test_magazine_institution_survey\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_institution_survey"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],"(\"ab_test_magazine_paywall\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ab_test_magazine_paywall"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],",c=",["escape",["macro",8],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",30],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",75],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",74],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){var a=",["escape",["macro",115],8,16],"?\"ab_test_magazine_institution_survey\":\"ab_test_magazine_paywall\";window.Cookies.set(a,\"submitted\",{expires:31536E3,domain:\".nature.com\"})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){function e(c){var a=c.target;a=null!==a.getAttribute(\"href\")||null!==a.getAttribute(\"xlink:href\")||a.parentElement.classList.contains(\"paywall-box__button\");c.preventDefault();a\u0026\u0026(",["escape",["macro",127],8,16],"(),b.removeEventListener(\"click\",d,!1))}var b=document.querySelector(\"#usabilla-paywall-widget-container\");var d=e.bind(this);b\u0026\u0026b.addEventListener(\"click\",d,!1)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",130],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",66],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",131],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",57],8,16],";var a=",["escape",["macro",2],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",131],8,16],",d=",["escape",["macro",133],8,16],",e=",["escape",["macro",134],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"nature\"===",["escape",["macro",110],8,16],"\u0026\u0026\"journal\"===",["escape",["macro",2],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",114],8,16],"(\"ab_use_nature_150_split_header\")})();"]
    },{
      "function":"__c",
      "vtp_value":"5dde6c3893906e530d7270d7"
    },{
      "function":"__c",
      "vtp_value":"5dde7c19658b762edd212ee4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",141],8,16],".indexOf(\",3,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",141],8,16],"\u0026\u00260\u003C",["escape",["macro",141],8,16],".length?-1!==",["escape",["macro",141],8,16],".indexOf(\",2,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",141],8,16],".indexOf(\",1,\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!==",["escape",["macro",141],8,16],".indexOf(\",4,\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",146],8,16],";var a=0\u003Carg.length?arg.join(\";\"):null;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){arg=",["escape",["macro",148],8,16],";var a=0\u003Carg.length?arg.join(\"|\"):null;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector);return function(a,b){for(console.log(a);a!==document.documentElement\u0026\u0026!a.matches(b);)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b){a=a.map(function(a){return a[b]});return 0\u003Ca.length?a=a.join(\";\"):null}arr=",["escape",["macro",151],8,16],";arg=\"sectionName\";return b(arr,arg)})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationIDString"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.entitled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.method"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-category"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-label"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,function(){window.event.target=window.event.srcElement;c.apply(a,[window.event])})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=",["escape",["macro",163],8,16],";a=parseInt(a.getAttribute(\"data-track-product\"),10);return productAtIndex(b,a)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"promotion"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var c=",["escape",["macro",132],8,16],";a=parseInt(a.getAttribute(\"data-track-promotion\"),10);var b=",["escape",["macro",165],8,16],";if(!isNaN(a)\u0026\u0026c(b,\"array\")\u0026\u0026b.length\u003Ea)return b=b[a],{id:c(b.promotionInfo.promotionID,\"string\"),name:c(b.promotionInfo.promotionName,\"string\"),position:\"slot\"+a}}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.template"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){function l(){var b=!0,a={\"page.category.pageType\":[",["escape",["macro",2],8,16],",\"string\"],\"content.attributes.template\":[",["escape",["macro",167],8,16],",\"string\"]},c;for(c in a){var d=a[c][0];var e=a[c][1];d=\"array\"===e\u0026\u0026!0===Array.isArray(d)?d:typeof d===e?d:null;d||(g(\"required\",c),b=!1);\"string\"==a[c][1]\u0026\u00261\u003Ea[c][0].length\u0026\u0026(g(\"empty\",c),b=!1)}return b}function g(a,b){var c;\"required\"==a\u0026\u0026(c=\"Required Field Misspecified\");\"empty\"==a\u0026\u0026(c=\"Missing Value\");a=\"dataLayerError: \"+c+\" (\"+\nb+\")\";console.error(a)}var e=b.getAttribute(\"data-track\"),h=",["escape",["macro",131],8,16],"(b,\"data-track-component\"),a={};if(!1===l())return null;if(\"click\"===e){var k=b.getAttribute(\"data-track-label\")||(b.href\u0026\u0026window.location.hostname!==b.hostname?b.href:null),m=b.getAttribute(\"data-track-category\")||",["escape",["macro",167],8,16],"+\":\"+",["escape",["macro",2],8,16],",f=b.getAttribute(\"data-track-action\");b.getAttribute(\"checked\");h\u0026\u0026!f\u0026\u0026(f=h.getAttribute(\"data-track-component\")+\":\"+e);if(k)return a.event=\"data-track\",a.eventAction=\nf,a.eventCategory=m,a.eventLabel=k,a;console.error(\"dataLayerError: More Arguments Needed (data-track-label)\");return null}if(\"download\"===e)return a.event=\"data-track\",a.eventAction=\"download\",a.category=",["escape",["macro",167],8,16],"+\":\"+",["escape",["macro",2],8,16],",a.eventLabel=b.getAttribute(\"href\"),a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,c){var b=",["escape",["macro",132],8,16],";if(!isNaN(c)\u0026\u0026b(a,\"array\")\u0026\u0026a.length\u003Ec)return a=a[c],{id:b(a.productInfo.sku,\"string\"),name:b(a.productInfo.productName,\"string\"),brand:b(a.productInfo.brand,\"string\"),variant:b(a.category.productType,\"string\"),price:b(a.price.basePrice,\"number\").toString(),position:\"slot\"+c}}})();"]
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.token"
    },{
      "function":"__c",
      "vtp_value":"true"
    },{
      "function":"__v",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.clientID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.substr(window.location.href.indexOf(\"mkt-key\\x3d\")+8)||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"?",["escape",["macro",49],8,16],".split(\";\"):[\"(not set)\"]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",19],8,16],";a=\/10\\.1038\\\/nphys1404\/.test(a);return!0===a?\"usabilla survey VSNU DOI\":\"do not include\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Consent=function(){var c=function(){for(var b=document.cookie.split(\/;\\s*\/),a=0;b[a];++a)if(-1!==b[a].indexOf(\"OptanonConsent\\x3d\"))return b[a].split(\"\\x3d\").slice(1).join(\"\\x3d\");return\"\"};c=unescape(c());var d=(\/groups=([^\u0026]+)\/.exec(c)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(b){if(b===this.STRICTLY_NECESSARY)return!0;for(var a=0;d[a];++a)if(d[a]===b+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c){b.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||b.location.hostname.match(\"natureindex.com\")||c.addEventListener(\"accessdetailsloaded\",function(a){if(a=a.detail)b._pageMetaData=b._pageMetaData||{},b._pageMetaData.site_id=a.site_id\u0026\u0026a.site_id.join?a.site_id.join(\";\"):\"\",b._pageMetaData.user_id=a.registrant_id||\"\",b._pageMetaData.business_partner_id=a.business_partner_id\u0026\u0026a.business_partner_id.join?a.business_partner_id.join(\";\"):\"\";a=c.createElement(\"script\");\na.className=\"kxct\";a.setAttribute(\"data-id\",\"Jn7TaPwq\");a.setAttribute(\"data-timing\",\"async\");a.setAttribute(\"data-version\",\"3.0\");a.appendChild(c.createTextNode('window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag?confid\\x3dJn7TaPwq\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());'));\nc.head.appendChild(a);a=Bootstrapper.npg.utils.Consent;a=a.allow(a.TARGETING);Krux(\"consent:set\",{dc:a,al:a,tg:a,cd:!1,sh:!1,re:!1},function(a,b){a\u0026\u0026console.error(a)})},!1)})(window,document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "priority":999,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar script=document.createElement(\"script\");script.className=\"kxct\";script.dataset.id=\"KT36N7KK\";script.dataset.timing=\"async\";script.dataset.version=\"3.0\";script.type=\"text\/javascript\";script.innerHTML='window.Krux||((Krux\\x3dfunction(){Krux.q.push(arguments)}).q\\x3d[]);(function(){var k\\x3ddocument.createElement(\"script\");k.type\\x3d\"text\/javascript\";k.async\\x3dtrue;var m,src\\x3d(m\\x3dlocation.href.match(\/\\\\bkxsrc\\x3d([^\\x26]+)\/))\\x26\\x26decodeURIComponent(m[1]);k.src \\x3d \/^https?:\\\\\/\\\\\/([a-z0-9_\\\\-\\\\.]+\\\\.)?krxd\\\\.net(:\\\\d{1,5})?\\\\\/\/i.test(src) ? src : src \\x3d\\x3d\\x3d \"disable\" ? \"\" :(location.protocol\\x3d\\x3d\\x3d\"https:\"?\"https:\":\"http:\")+\"\/\/cdn.krxd.net\/controltag\/KT36N7KK.js\";var s\\x3ddocument.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(k,s);}());';\ndocument.head.appendChild(script);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",85],
      "tag_id":58
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Banner Display",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"cegg",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":7
    },{
      "function":"__paused",
      "vtp_originalTagType":"asp",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":27
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":32
    },{
      "function":"__ua",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",94],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",95],
      "vtp_eventCategory":["macro",96],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":["macro",97],
      "vtp_eventLabel":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",101],
      "tag_id":48
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",19],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",101],
      "tag_id":49
    },{
      "function":"__crto",
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",104],
      "vtp_siteType":["macro",101],
      "tag_id":50
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":52
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":53
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":54
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":55
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":57
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",108],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__baut",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":66
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"magazine test paywall",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"paywall box",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Nature Magazine Institution Survey",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"in view",
      "vtp_eventLabel":"institution survey",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":77
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":305
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",85],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":346
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":347
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_150",
      "tag_id":348
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_151",
      "tag_id":349
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_152",
      "tag_id":350
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_153",
      "tag_id":351
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":352
    },{
      "function":"__evl",
      "vtp_elementId":"gtm-usabilla-survey-widget",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_289",
      "tag_id":353
    },{
      "function":"__evl",
      "vtp_elementId":"usabilla-paywall-widget-container",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"10482319_290",
      "tag_id":354
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":355
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":356
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":357
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var h=[],e=\"\",k=[],c=b.split(\";\");for(b=0;b\u003Cc.length;++b){void 0!==l\u0026\u0026(e=l);var g=c[b].split(\"\\x3d\");var l=g[0];l!==e\u0026\u0026(0\u003Ce.length\u0026\u00260\u003Ch.length\u0026\u0026k.push([e,h]),h=[]);if(2===g.length\u0026\u0026\"\"!==g[0]\u0026\u0026\"\"!==g[1]){var n=g[1].split(\",\");for(g=0;g\u003Cn.length;++g)h.push(n[g])}}0\u003Cl.length\u0026\u00260\u003Ch.length\u0026\u0026k.push([l,h]);return k}\nfunction getScript(b,h){var e=document.createElement(\"script\"),k=document.getElementsByTagName(\"script\")[0];e.async=1;e.onload=e.onreadystatechange=function(b,g){if(g||!e.readyState||\/loaded|complete\/.test(e.readyState))e.onload=e.onreadystatechange=null,e=void 0,g||h\u0026\u0026h()};e.src=b;k.parentNode.insertBefore(e,k)}\nfunction splitSizes(b){var h=[];if(null!==b){var e=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Ce.length;++b){var k=e[b].split(\"x\");var c=parseInt(k[0],10);var g=parseInt(k[1],10);2===k.length\u0026\u0026!isNaN(c)\u0026\u0026!isNaN(g)\u0026\u00260\u003C=c\u0026\u00260\u003C=g\u0026\u0026h.push([c,g])}}return h}function hasClass(b,h){var e,k=b.className.split(\/\\s+\/);b=0;for(e=k.length;b\u003Ce;++b)if(k[b]===h)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,h=[],e=document.getElementsByTagName(\"div\");for(b=0;e[b];++b)hasClass(e[b],\"div-gpt-ad\")\u0026\u0026h.push(e[b]);return h}function debounce(b,h){var e=null,k=null;return function(){var c=this,g=+new Date,l=arguments;e\u0026\u0026g\u003Ce+h?(clearTimeout(k),k=setTimeout(function(){e=g;b.apply(c,l)},h)):(e=g,b.apply(c,l))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,h,e){var k=Bootstrapper.npg.utils,c=[],g,l=null;if(-1===b.location.search.indexOf(\"hide_ads\\x3dtrue\")\u0026\u0026serveAdsFor(b.location.pathname)){var n=function(a){var f=Math.max(h.clientHeight,b.innerHeight||0);return v(a,function(a){if(a.isOutOfPage||a.forceLoadOnInit)return!0;var d=document.getElementById(a.divId),c=d.getBoundingClientRect();c=c.top-300;c=f\u003Ec;var e=null!==d.offsetParent;a=a.sizeArray\u0026\u0026a.sizeArray.length\u0026\u0026a.sizeArray[0].length\u0026\u00262===a.sizeArray[0][0];d=d.getAttribute(\"data-ad-type\")?\n-1===d.getAttribute(\"data-ad-type\").indexOf(\"top\"):!1;var g=770\u003Eb.innerWidth;return c\u0026\u0026e\u0026\u0026!1===g||a||c\u0026\u0026e\u0026\u0026g\u0026\u0026d})},v=function(a,b){for(var d=a.length,f=[];d--;)b(a[d],d)\u0026\u0026(f.push(a[d].slot),a.splice(d,1));f.length\u0026\u0026googletag.pubads().refresh(f);return a},p={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},w=function(){var a=b.dataLayer?",["escape",["macro",110],8,16],":null;if(a)return a;\nif(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=b.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var f=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:f},x=function(a){var f=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,f+\"\/nature\/\"+w()));a=a.replace(\"\/nature\/laban\",\n\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");a=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026\n(a+=\"\/homepage\"));window.dataLayer\u0026\u0026p[",["escape",["macro",7],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var d=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(b.location.search)||[\"\",\"\"])[1];if(p[d.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){d=!0;break a}}d=!1}d\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(d=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===d.getAttribute(\"content\")\u0026\u0026(a=f+\"\/nature\/brandedcontent\");return a},\ny=function(a){for(var f={},d=0;a[d];++d){var c=a[d].size;var e=\"2x2\"===a[d].size?window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;f[c]={count:e,name:a[d].name}}return f}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),m=function(a,b,d,c){for(var f=!1,e=0;a[e];++e)a[e][0]===\nb\u0026\u0026null!==d\u0026\u0026(a[e][1]=c?a[e][1].concat(d):[d],f=!0);f||null===d||a.push([b,[d]]);return a},q=function(a,b,d){for(var f=0;a[f];++f)a[f][0]===b\u0026\u0026(a[f][0]=d);return a},z=function(a,f){var d=a;var c=e.dfppKeyValues\u0026\u0026k.Consent.allow(k.Consent.TARGETING)?\";\"+e.dfppKeyValues:\"\";var g=-1!==b.location.search.indexOf(\"test\\x3dads\")?\";adtype\\x3dtest\":\"\";d=d.getAttribute(\"data-gpt-targeting\");g\u0026\u0026-1===d.indexOf(g)\u0026\u0026(d+=g);(g=",["escape",["macro",63],8,16],")\u0026\u0026(d+=\";bpid\\x3d\"+g.replace(\/;\/g,\",\"));0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026\n(g=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(d+=\";sponsored\\x3d\"+g.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\"\"));c=d+c;c=q(splitKeys(c),\"artid\",\"articleid\");c=q(c,\"kw\",\"search\");a=a.getAttribute(\"data-gpt-sizes\");a=(a=y[a])?a.name+ ++a.count:null;a=m(c,\"pos\",a);f=m(a,\"tile\",f+1);a=b.location.pathname.split(\"\/\");a=3===a.length\u0026\u0026\"subjects\"===a[1]?a[2]:null;f=m(f,\"subject\",a);f=m(f,\"article\",window.dataLayer\u0026\u0026p[",["escape",["macro",7],8,16],"]?\"naturecareers\":\nnull);a=window.dataLayer?",["escape",["macro",73],8,16],":null;f=m(f,\"collectionID\",a);return f=m(f,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",51],8,16],"?\"fronthalf\":null,!0)},r=function(a){for(var b=[],d=0;a[d];++d){var c=a[d];b.push({divId:c.getAttribute(\"id\"),adUnitPath:x(c.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(c.getAttribute(\"data-gpt-sizes\")),targeting:z(c,d),isOutOfPage:hasClass(c,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return b},t=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(k.Consent.allow(k.Consent.TARGETING)?\n0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",function(b){var c=b.slot\u0026\u0026b.slot.getSlotElementId?b.slot.getSlotElementId():null,f;a[c]=!b.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(f=document.querySelector(\".c-paid-content\"))\u0026\u0026f.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===c\u0026\u0026!1===b.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.add(\"pb40\"),f.parentNode.parentNode.classList.remove(\"pb20\"),\nf.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026b.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.remove(\"pb20\"),f.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;c[a];++a)try{c[a].slot=c[a].isOutOfPage?googletag.defineOutOfPageSlot(c[a].adUnitPath,c[a].divId).addService(googletag.pubads()):googletag.defineSlot(c[a].adUnitPath,c[a].sizeArray,c[a].divId).addService(googletag.pubads());for(var b=0,d=c[a].targeting.length;b\u003Cd;++b)if(2===\nc[a].targeting[b].length\u0026\u0026\"\"!==c[a].targeting[b][0]\u0026\u0026\"\"!==c[a].targeting[b][1]){if(\"pos\"===c[a].targeting[b][0]\u0026\u00260===c[a].targeting[b][1][0].indexOf(\"BB\")){g=c[a].slot;var e=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();g.defineSizeMapping(e);g.setCollapseEmptyDiv(!0,!1)}c[a].slot.setTargeting(c[a].targeting[b][0],c[a].targeting[b][1])}}catch(A){console.log(\"failed to create slot for\",c[a])}});googletag.cmd.push(function(){for(var a=0;c[a];++a)googletag.display(c[a].divId)})},\nu=function(){l\u0026\u0026removeScrollEvent(l);googletag.cmd.push(function(){c=n(c)});l=debounce(function(){googletag.cmd.push(function(){c=n(c);c.length||(removeScrollEvent(l),l=null)})},250);addScrollEvent(l)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];c=r(getAdContainers());t();u();var a=969\u003Cb.innerWidth,f=769\u003Cb.innerWidth\u0026\u0026!a,d=770\u003Eb.innerWidth,e=debounce(function(){var c=b.innerWidth;970\u003C=c\u0026\u0026!a?(a=!0,d=f=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):\n770\u003Ec\u0026\u0026!d?(f=a=!1,d=!0,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):970\u003Ec\u0026\u0026769\u003Cc\u0026\u0026!f\u0026\u0026(a=!1,f=!0,d=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])}))},250);addResizeEvent(e);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();c=r(getAdContainers());t();u()},!1)})}}\n-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement,window.Krux||{},{}):document.addEventListener(\"load\",function(){initAds(window,document.documentElement,window.Krux||{})}));document.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement,window.Krux||{})},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":16
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.location.pathname.match(\/^\\\/(nature_education|scitable|principles)(\\\/|$)\/)||(window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]),function(){function c(a){a=\"kxmacmillan_\"+a;try{var b=window.localStorage}catch(e){b=null}return b?b[a]||\"\":navigator.cookieEnabled?(b=document.cookie.match(a+\"\\x3d([^;]*)\"))\u0026\u0026unescape(b[1])||\"\":\"\"}Krux.user=c(\"user\");Krux.segments=c(\"segs\")?c(\"segs\").split(\",\"):[];var a=[];Krux.user\u0026\u0026a.push(\"kuid\\x3d\"+Krux.user);for(var d=0;d\u003CKrux.segments.length;d++)a.push(\"ksg\\x3d\"+\nKrux.segments[d]);Krux.dfppKeyValues=a.length?a.join(\";\")+\";\":\"\"}());\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":19
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(b){for(var c=[],a=0;b[a];++a)b[a].name\u0026\u0026c.push(b[a]);return c},translateMeta=function(b){var c={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return c[b]||b},getMeta=function(b){var c=filterMeta(document.getElementsByTagName(\"meta\")||[]),a=document.getElementsByTagName(\"body\")||[],f=function(){for(var a=c.length,d={},e;a--;)if(e=translateMeta(c[a].name))d[e]?(\"string\"===typeof d[e]\u0026\u0026(d[e]=[d[e]]),d[e].push(c[a].content)):\nd[e]=c[a].content||\"\";d.keywords\u0026\u0026(d.keywords=d.keywords.replace(\/,\/g,\";\"));b(d)};a.length?f():c.length\u0026\u0026f()};getMeta(function(b){window._pageMetaData=b});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=function(d,f,g,h){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,d=b.length;c\u003Cd;c++){for(var e=b[c];\" \"==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(a))return e.substring(a.length,e.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(g);if(a)a=a.split(\":\");else if(100!=d)\"v\"==f\u0026\u0026(d=Math.random()\u003E=\nd\/100?0:100),a=[f,d,0],this.set(g,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(g,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=h+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},f=document.createElement(\"div\");f.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(f);try{var k=new h(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));k.start()}catch(d){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",113],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1unr\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",75],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(d){if(d){var g={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},h=function(a){for(var b={},e=\/([^\u0026=]+)=?([^\u0026]*)\/g,c=a.substring(1);a=e.exec(c);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(d.search),k=function(a,b){var e=a.protocol+\"\/\/\"+a.hostname+a.pathname;var c=b;var d=[],f;for(f in c)c.hasOwnProperty(f)\u0026\u0026d.push(f+\"\\x3d\"+encodeURIComponent(c[f]));c=\"?\"+d.join(\"\\x26\");e+=c;a.setAttribute(\"href\",\ne)},b;for(b in g)g.hasOwnProperty(b)\u0026\u0026(h[b]=g[b]);k(d,h)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",73,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":59
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",73,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(c){function g(b,d){d\u0026\u0026(d+=(\/\\?\/.test(d)?\"\\x26\":\"?\")+\"lv\\x3d1\");c[b]||function(){var k=window,h=document,l=b,g=h.location.protocol,n=\"load\",m=0;(function(){function b(){a.P(n);a.w=1;c[l](\"_load\")}c[l]=function(){function p(){p.id=e;return c[l].apply(p,arguments)}var e=++m;var b=this\u0026\u0026this!=k?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);p.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],l=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b\u0026\u0026d.push(b);c\u0026\u0026l.push(c);h\u0026\u0026f.push(h);\nreturn p};return p};var a=c[l]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(\/^\\\/\\\/\/,(\"https:\"==g?g:\"http:\")+\"\/\/\"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w\u0026\u0026b();k.addEventListener?k.addEventListener(n,b,!1):k.attachEvent(\"on\"+n,b);var t=function(){function b(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",e,' onload\\x3d\"var d\\x3d',q,\";d.getElementsByTagName('head')[0].\",d,\"(d.\",g,\"('script')).\",k,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",e,\"\\x3e\"].join(\"\")}var e=\"body\",c=h[e];if(!c)return setTimeout(t,\n100);a.P(1);var d=\"appendChild\",g=\"createElement\",k=\"src\",m=h[g](\"div\"),n=m[d](h[g](\"div\")),f=h[g](\"iframe\"),q=\"document\";m.style.display=\"none\";c.insertBefore(m,c.firstChild).id=r+\"-\"+l;f.frameBorder=\"0\";f.id=r+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(f[k]=\"javascript:false\");f.allowTransparency=\"true\";n[d](f);try{f.contentWindow[q].open()}catch(w){a.domain=h.domain;var u=\"javascript:var d\\x3d\"+q+\".open();d.domain\\x3d'\"+h.domain+\"';\";f[k]=u+\"void(0);\"}try{var v=f.contentWindow[q];v.write(b());\nv.close()}catch(w){f[k]=u+'d.write(\"'+b().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(t,0)})()}();c[b].lv=\"1\";return c[b]}var r=\"lightningjs\",m=window[r]=g(r);m.require=g;m.modules=c}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",78,0]],
      "teardown_tags":["list",["tag",74,2]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Ewindow.usabilla||function(){var a=window,d=a.document,b={},g=d.createElement(\"div\"),h=!1;a=a.usabilla=function(){(b.a=b.a||[]).push(arguments)};a._=b;b.ids={};g.style.display=\"none\";(function(){if(!d.body)return setTimeout(arguments.callee,100);d.body.insertBefore(g,d.body.firstChild).id=\"usabilla\";h=!0})();a.load=function(a,f,k){if(!b.ids[f]){var e=b.ids={};e.url=\"\/\/\"+a+\"\/\"+f+\".js?s1\";e.config=k;setTimeout(function(){if(!h)return setTimeout(arguments.callee,100);var c=d.createElement(\"iframe\");c.id=\n\"usabilla-\"+f;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c.src=\"javascript:false\");g.appendChild(c);try{c.contentWindow.document.open()}catch(l){e.domain=d.domain;var a=\"javascript:var d\\x3ddocument.open();d.domain\\x3d'\"+e.domain+\"';\";c.src=a+\"void(0);\"}try{var b=c.contentWindow.document;b.write([\"\\x3c!DOCTYPE html\\x3e\\x3chtml\\x3e\\x3chead\\x3e\\x3c\/head\\x3e\\x3cbody onload\\x3d\\\"var d \\x3d document;d.getElementsByTagName('head')[0].appendChild(d.createElement('script')).src\\x3d'\",e.url,\"'\\\"\\x3e\\x3c\/body\\x3e\\x3c\/html\\x3e\"].join(\"\"));\nb.close()}catch(l){c.src=a+'d.write(\"'+loaderHtml().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}c.contentWindow.config=k;c.contentWindow.SCRIPT_ID=f},0)}}}();window.usabilla.load(\"w.usabilla.com\",\"6fa646ed3ab3\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":71
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mainArticleBodyContainer=document.querySelector(\"#main-article-body\");mainArticleBodyContainer\u0026\u0026mainArticleBodyContainer.classList.remove(\"js-hide\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(a){return function(){var c=Array.prototype.slice.call(arguments,0);b.q.push({functionName:a,arguments:c})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",18],8,16],"),title:clean(",["escape",["macro",55],8,16],"),type:clean(",["escape",["macro",2],8,16],",lower),keywords:clean(",["escape",["macro",49],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",7],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",119],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",2],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",15],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",63],8,16],"),accessType:clean(",["escape",["macro",83],8,16],",lower),authorizationStatus:bool(",["escape",["macro",30],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})},consent=Bootstrapper.npg.utils.Consent;consent.allow(consent.TARGETING)?permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"}):permutive.consent({opt_in:!1});\ngaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);permutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"))},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":328
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.querySelector(\".optanon-alert-box-wrapper .banner-policy-link\");if(a){var b=a.cloneNode();b.textContent=a.textContent;a.parentNode.replaceChild(b,a)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":333
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null},clientId=getClientId();if(clientId){var dlUpdate={event:\"ga-client-id-pushed-to-datalayer\",gaClientId:clientId};window.dataLayer.push(dlUpdate)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",77,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",74],8,16],",kruxSegment:",["escape",["macro",75],8,16],",journalTitle:",["escape",["macro",17],8,16],",pageType:",["escape",["macro",4],8,16],",template:",["escape",["macro",57],8,16],",contentType:",["escape",["macro",121],8,16],",doi:",["escape",["macro",18],8,16],",abTestValue:",["escape",["macro",68],8,16],",authorization:",["escape",["macro",122],8,16],",bpid:",["escape",["macro",64],8,16],",primaryArticleType:",["escape",["macro",48],8,16],",referrer:",["escape",["macro",123],8,16],",openAcces:",["escape",["macro",124],8,16],",GAclientId:",["escape",["macro",125],8,16],",usabillaSurvey:",["escape",["macro",126],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar widgetUsabillaSelector=document.getElementsByClassName(\"gtm-usabilla-in-page\")[0];\nwidgetUsabillaSelector\u0026\u0026(widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxUser\",",["escape",["macro",74],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-kruxSegment\",",["escape",["macro",75],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-journalTitle\",",["escape",["macro",17],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-pageType\",",["escape",["macro",4],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-template\",",["escape",["macro",57],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-contentType\",",["escape",["macro",121],8,16],"),\nwidgetUsabillaSelector.setAttribute(\"ub-in-page-doi\",",["escape",["macro",18],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-abTestValue\",",["escape",["macro",68],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-authorization\",",["escape",["macro",122],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-bpid\",",["escape",["macro",64],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-primaryArticleType\",",["escape",["macro",48],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-referrer\",",["escape",["macro",123],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-openAcces\",\n",["escape",["macro",124],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-GAclientId\",",["escape",["macro",125],8,16],"),widgetUsabillaSelector.setAttribute(\"ub-in-page-usabillaSurvey\",",["escape",["macro",126],8,16],"));",["escape",["macro",115],8,16],"\u0026\u0026window.usabilla(\"setEventCallback\",function(b,a,c,d,e){\"In-Page:Success\"===a\u0026\u0026",["escape",["macro",127],8,16],"()});",["escape",["macro",117],8,16],"\u0026\u0026",["escape",["macro",128],8,16],"();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",72,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",66],8,16],";var isObject=",["escape",["macro",129],8,16],";var map=",["escape",["macro",67],8,16],";var closestByAttribute=",["escape",["macro",131],8,16],";var closest=",["escape",["macro",130],8,16],";var enforceDataType=",["escape",["macro",132],8,16],";var normaliseAnd=",["escape",["macro",5],8,16],";var normaliseWhitespace=",["escape",["macro",6],8,16],";var formatDate=",["escape",["macro",20],8,16],";var createEventPayload=",["escape",["macro",133],8,16],";var sendEvent=",["escape",["macro",134],8,16],";var eventHandler=",["escape",["macro",135],8,16],";var setupTracking=\nfunction(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);if(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=\ndocument.querySelectorAll('[data-track\\x3d\"in-view\"]');if(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var b=function(b,c){c=c||{};var d=document.createEvent(\"CustomEvent\");d.initCustomEvent(b,c.bubbles||!1,c.cancelable||!1,c.detail||a);return d};b.prototype=window.Event.prototype;window.CustomEvent=b})();var parse=function(a,b){try{return 200===a?JSON.parse(b):null}catch(e){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",136],8,16],"){var triggerName=",["escape",["macro",137],8,16],"?\"ab_use_nature_150_split_header\\x3dtrue\":\"ab_use_nature_150_split_header\\x3dfalse\";window.usabilla_live(\"trigger\",triggerName)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar usabillaId=",["escape",["macro",115],8,16],"?",["escape",["macro",138],8,16],":",["escape",["macro",139],8,16],",containerId=",["escape",["macro",115],8,16],"?\"gtm-usabilla-survey-widget\":\"gtm-usabilla-paywall-widget\",container=document.createElement(\"div\"),parentContainerSelector=\"#gtm-usabilla-container\",parentContainer=document.querySelector(parentContainerSelector);\nparentContainer\u0026\u0026(container.setAttribute(\"id\",containerId),container.setAttribute(\"class\",\"gtm-usabilla-in-page\"),",["escape",["macro",117],8,16],"\u0026\u0026parentContainer.classList.add(\"js-hide\"),container.setAttribute(\"ub-in-page\",usabillaId),parentContainer.insertBefore(container,parentContainer.firstChild));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((test-)?www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/ecommerce\/subscribe\\.action)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"nature"
    },{
      "function":"_re",
      "arg0":["macro",89],
      "arg1":"^()$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|immersive|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/news\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"test-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/articles\/n-",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/nature\/journal\/v554\/n7690\/index\\.html\/?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/naturejobs\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"nature-js-bundle-loaded"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"bav"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"learn-subscription\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_150($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-test=\\\"subscribe-prompt-log-in\\\" data-track=\\\"click\\\" data-track-action=\\\"login\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_151($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"athens\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",105],
      "arg1":"[datatracking=\"data-track=\\\"click\\\" data-track-action=\\\"shibboleth\\\" data-track-label=\\\"link\\\"\"]"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_153($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",107],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"\/srep\/"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",87],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_290($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_289($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",86],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",93],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",86],
      "arg1":"press.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",111],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",80],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",57],
      "arg1":"magazine mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",115],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",87],
      "arg1":"\/articles\/"
    },{
      "function":"_eq",
      "arg0":["macro",116],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",118],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",86],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_eq",
      "arg0":["macro",120],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"0"
    }],
  "rules":[
    [["if",0,1],["add",4,71]],
    [["if",2,3,4,5,6],["add",5]],
    [["if",7],["add",6,13,14,15,0,56,70,40,42,43,44,45,47,48,50,51,52]],
    [["if",6],["unless",8,9],["add",7]],
    [["if",6,12,13],["add",8]],
    [["if",6,13,14],["add",8]],
    [["if",6,13,15],["add",8]],
    [["if",6,15,16],["add",8]],
    [["if",6,17,18],["add",8]],
    [["if",6,18,19],["add",9]],
    [["if",7,20],["add",10,53]],
    [["if",7,21],["add",10,53]],
    [["if",6,15],["add",11,58]],
    [["if",22],["add",12]],
    [["if",6,18,23],["add",16]],
    [["if",6,18,24],["add",16]],
    [["if",6],["unless",25,26,27],["add",17]],
    [["if",28],["add",18]],
    [["if",6,29],["add",18]],
    [["if",31,32,33,34],["add",19]],
    [["if",1],["add",20,61,62,46,49]],
    [["if",35],["add",21]],
    [["if",6,36],["add",22]],
    [["if",6,37],["add",23]],
    [["if",6,38],["add",24]],
    [["if",39,40],["add",25]],
    [["if",33,41,42],["add",26]],
    [["if",33,43,44],["add",27]],
    [["if",33,45,46],["add",28]],
    [["if",33,47,48],["add",29]],
    [["if",11,49],["add",30]],
    [["if",7,50,51],["add",3]],
    [["if",7,52],["add",3]],
    [["if",53,54,55],["add",31]],
    [["if",54,56,57],["add",31]],
    [["if",6,27],["add",32]],
    [["if",6],["add",33]],
    [["if",58,59],["add",34]],
    [["if",58,60],["add",35]],
    [["if",7],["unless",25,26],["add",36,1,54,60]],
    [["if",33,62,63],["add",37]],
    [["if",33,64,65],["add",38]],
    [["if",33,66,67],["add",39]],
    [["if",7,69],["unless",68],["add",41]],
    [["if",7,70],["add",53]],
    [["if",7,71],["add",53]],
    [["if",7,72],["add",53]],
    [["if",7,73],["add",53]],
    [["if",7,74],["add",53]],
    [["if",7,75],["add",53]],
    [["if",7,76],["add",53]],
    [["if",7,12],["add",53]],
    [["if",7,77],["add",53]],
    [["if",7,14],["add",53]],
    [["if",7,15],["add",53]],
    [["if",6,72],["add",2]],
    [["if",6,78],["add",55]],
    [["if",6,18,79,80],["add",57]],
    [["if",6,74],["add",58]],
    [["if",6,81],["unless",82],["add",59]],
    [["if",6,23],["add",63]],
    [["if",6,24],["add",63]],
    [["if",6,84],["add",63]],
    [["if",6,85],["unless",25,86],["add",64]],
    [["if",1],["unless",25,26,27],["add",65]],
    [["if",6,87,88,89,90],["add",66]],
    [["if",6,87,89,91,92],["add",66]],
    [["if",6,10,87,89,91,92],["add",67]],
    [["if",95],["unless",61,93,94],["add",68]],
    [["if",7,69,96,97],["unless",68],["add",69]],
    [["if",10,11],["block",7,11,17,22,23,24,32,33,54,2,58,61,62,64,65,66]],
    [["if",11,30],["block",18,25,31]],
    [["if",7,61],["block",36,1]],
    [["if",11,83],["block",59]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var da,ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Sf:!0},ja={};try{ja.__proto__=ia;ha=ja.Sf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.H={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.H.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};da=h.prototype;da.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
da.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};da.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};da.length=function(){return this.a.length};da.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.H.hasOwnProperty(d)||delete c.o[d]}};da=h.prototype;da.pop=function(){return this.a.pop()};da.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};da.shift=function(){return this.a.shift()};da.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};da.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
da.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Ub+g>b[f].max)throw Error("Quota exceeded");b[f].Ub+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},ve:function(){c&&a(c,1)},kh:function(f){d=f},Ca:function(f){d&&a(d,f)},Gh:function(f,g){b[f]=b[f]||{Ub:0};b[f].max=g},Jg:function(f){return b[f]&&b[f].Ub||0},reset:function(){b={}},qg:a};e.onFnConsume=e.ih;e.consumeFn=e.ve;e.onStorageConsume=e.kh;e.consumeStorage=e.Ca;e.setMax=e.Gh;e.getConsumed=e.Jg;e.reset=e.reset;e.consume=e.qg;return e};var wa=function(a,b){this.H=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.H.Ca(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.H["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.H.Ca(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new wa(a.H,a);a.o&&(b.o=a.o);b.P=a.P;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ha=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ia=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Pa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Qa=function(a){return Math.round(Number(a))||0},Ra=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Sa=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ua=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Xa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ab=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},bb=function(a){for(var b=C,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},cb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},eb=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var fb=function(a,b){ra.call(this);this.a=a;this.P=b};la(fb,ra);fb.prototype.toString=function(){return this.a};fb.prototype.bc=function(){return new h(ta(this))};fb.prototype.i=function(a,b){a.H.ve();return this.P.apply(gb(this,a),Array.prototype.slice.call(arguments,1))};var gb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?hb(e,d):d};c.prototype.H=function(d){return ib(this.m,d)};c.prototype.o=function(){return b.H};return new c(a,b)};
fb.prototype.Fa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ib=function(a,b){for(var c,d=0;d<b.length&&!(c=hb(a,b[d]),c instanceof pa);d++);return c},hb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof fb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var jb=function(){ra.call(this)};la(jb,ra);jb.prototype.bc=function(){return new h(ta(this))};var kb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,lb={Fn:"function",Map:"Object",List:"Array"},E=function(a,b,c){for(var d=0;d<b.length;d++){var e=kb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof fb?n="Fn":l instanceof h?n="List":l instanceof jb&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(lb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var mb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,nb=function(a){if(null==a)return String(a);var b=mb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ob=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},pb=function(a){if(!a||"object"!=nb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ob(a,"constructor")&&!ob(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||ob(a,b)},F=function(a,b){var c=b||("array"==nb(a)?[]:{}),d;for(d in a)if(ob(a,d)){var e=a[d];"array"==nb(e)?("array"!=nb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):pb(e)?(pb(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var rb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof jb){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof fb){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=qb(q[u],b);var w=b?b.H:va(),v=new wa(w);b&&
(v.a=b.a);return f(g.i.apply(g,[v].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=Ha(c,g);if(-1<k)return d[k];if(Ga(g)||Pa(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(pb(g)){var n=
new jb;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new fb("",function(q){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=rb(this.a(u[w]),b);return f((0,this.m.P)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var sb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ca(a.length+f.length);return new fb(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.add(e.get(r),l[r]):k.add(e.get(r),void 0);k.add("arguments",new h(l));var t=ib(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ca(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ca(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new jb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ca(g);c.set(e,f)}return c},undefined:function(){}};function tb(a,b){var c=hb(a,b);if(c instanceof pa||c instanceof fb||c instanceof h||c instanceof jb||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var ub=function(){this.m=va();this.a=new wa(this.m)},vb=function(a,b,c){var d=new fb(b,c);d.m=!0;a.a.set(b,d)};ub.prototype.$b=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ub.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=tb(this.a,arguments[c]);return b};
ub.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=tb(c,arguments[e]);return d};var wb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var xb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=wb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=wb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var yb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),zb=new pa("break"),Bb=new pa("continue"),Cb=function(a,b){return this.a(a)+this.a(b)},Db=function(a,b){return this.a(a)&&this.a(b)},Eb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ha(yb,b))return qb(a[b].apply(a,wb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof fb){var e=wb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ha(xb.supportedMethods,b)){var f=wb(c);f.unshift(this.m);
return xb[b].apply(a,f)}}if(a instanceof fb||a instanceof jb){if(a.has(b)){var g=a.get(b);if(g instanceof fb){var k=wb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof fb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,wb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Fb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Gb=function(a){var b=za(this.m),c=ib(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Hb=function(){return zb},Ib=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Jb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Kb=function(){return Bb},Lb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Mb=function(a,b){return this.a(a)/this.a(b)},Nb=function(a,b){return this.a(a)==this.a(b)},Ob=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Pb(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=ib(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof jb||b instanceof h||b instanceof fb)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=ib(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){d.set(a,e);return d},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Sb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Pb(function(e){var f=za(d);f.add(a,e);return f},b,c)},Ub=function(a){return this.m.get(this.a(a))},Vb=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof jb||a instanceof h||a instanceof fb?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Wb=function(a,b){return this.a(a)>this.a(b)},Xb=function(a,b){return this.a(a)>=this.a(b)},Yb=function(a,b){return this.a(a)===this.a(b)},Zb=function(a,b){return this.a(a)!==this.a(b)},$b=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.H(d);if(e instanceof pa)return e},ac=function(a,b){return this.a(a)<this.a(b)},bc=function(a,b){return this.a(a)<=
this.a(b)},cc=function(a,b){return this.a(a)%this.a(b)},dc=function(a,b){return this.a(a)*this.a(b)},ec=function(a){return-this.a(a)},fc=function(a){return!this.a(a)},gc=function(a,b){return this.a(a)!=this.a(b)},hc=function(){return null},ic=function(a,b){return this.a(a)||this.a(b)},jc=function(a,b){var c=this.a(a);this.a(b);return c},kc=function(a){return this.a(a)},lc=function(a){return Array.prototype.slice.apply(arguments)},mc=function(a){return new pa("return",this.a(a))},nc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof fb||a instanceof h||a instanceof jb)&&a.set(b,c);return c},oc=function(a,b){return this.a(a)-this.a(b)},pc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},qc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},rc=function(a){a=this.a(a);return a instanceof fb?"function":typeof a},sc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},tc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.H(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.H(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},uc=function(a){return~Number(this.a(a))},vc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},yc=function(a,b){return Number(this.a(a))&Number(this.a(b))},zc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Cc=function(){this.a=new ub;Bc(this)};Cc.prototype.$b=function(a){return this.a.i(a)};
var Ec=function(a,b){return Dc.a.o(a,b)},Bc=function(a){var b=function(d,e){var f=a.a,g=String(e);sb.hasOwnProperty(d)&&vb(f,g||d,sb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){vb(a.a,String(d),e)};c(0,Cb);c(1,Db);c(2,Eb);c(3,Fb);c(53,Gb);c(4,Hb);c(5,Ib);c(52,Jb);c(6,Kb);c(9,Ib);c(50,Lb);c(10,Mb);c(12,Nb);c(13,Ob);c(47,Qb);c(54,Rb);c(55,Sb);c(15,Ub);c(16,Vb);c(17,Vb);c(18,Wb);c(19,Xb);c(20,Yb);c(21,Zb);c(22,$b);c(23,ac);c(24,bc);c(25,cc);c(26,dc);c(27,
ec);c(28,fc);c(29,gc);c(45,hc);c(30,ic);c(32,jc);c(33,jc);c(34,kc);c(35,kc);c(46,lc);c(36,mc);c(43,nc);c(37,oc);c(38,pc);c(39,qc);c(40,rc);c(41,sc);c(42,tc);c(58,uc);c(57,vc);c(60,wc);c(61,xc);c(56,yc);c(62,zc);c(59,Ac)},Gc=function(){var a=Dc,b=Fc();vb(a.a,"require",b)},Hc=function(a,b){a.a.a.P=b};
var Ic=[],Jc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kc=function(a){return Jc[a]},Lc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Pc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rc=function(a){return Qc[a]};
Ic[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pc,Rc)+"'"}};var $c=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,ad={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},bd=function(a){return ad[a]};Ic[16]=function(a){return a};var dd;
var ed=[],fd=[],gd=[],hd=[],id=[],jd={},kd,ld,md,nd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},od=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=jd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):dd(c,e,b)},qd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=pd(a[e],b,c));
return d},rd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=jd[b];return c?c.priorityOverride||0:0},pd=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(pd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ed[f];if(!g||b.fd(g))return;c[f]=!0;try{var k=qd(g,b,c);k.vtp_gtmEventId=b.id;d=od(k,b);md&&(d=md.sg(d,k))}catch(y){b.Ne&&b.Ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[pd(a[l],b,c)]=pd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=pd(a[n],b,c);ld&&(m=m||r===ld.Nb);d.push(r)}return ld&&m?ld.wg(d):d.join("");case "escape":d=pd(a[1],b,c);if(ld&&Ga(a[1])&&"macro"===a[1][0]&&ld.Vg(a))return ld.ph(d);d=String(d);for(var t=2;t<a.length;t++)Ic[a[t]]&&(d=Ic[a[t]](d));return d;case "tag":var q=a[1];if(!hd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=sd(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},sd=function(a,b,c){try{return kd(qd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var td=function(){var a=function(b){return{toString:function(){return b}}};return{Jd:a("convert_case_to"),Kd:a("convert_false_to"),Ld:a("convert_null_to"),Md:a("convert_true_to"),Nd:a("convert_undefined_to"),Zh:a("debug_mode_metadata"),ya:a("function"),sf:a("instance_name"),wf:a("live_only"),yf:a("malware_disabled"),zf:a("metadata"),$h:a("original_vendor_template_id"),Df:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var ud=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(ud,Error);function vd(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)vd(a[c],b[c])}};var wd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(wd,Error);var xd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var zd=function(){return function(a,b){a instanceof wd||(a=new wd(a,yd));b&&a.a.push(b);throw a;}};function yd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ad=null,Dd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Ad=Bd(a);for(var e=0;e<fd.length;e++){var f=fd[e],g=Cd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<hd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Cd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Ad(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Ad(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Bd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=sd(gd[c],a));return b[c]}};var Ed=function(){this.a={}};function Fd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new ud(c,d,g);}}function Gd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Fd(e,b,d,g);Fd(f,b,d,g)}}}};var Kd=function(a){var b=Hd.B,c=this;this.i=new Ed;this.a={};var d={},e=Gd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var k={};Na(g,function(l,m){var n=Id(l,m);k[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Jd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Nd=function(a){return Ld.a[a]||
function(){}};function Id(a,b){var c=nd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Jd;try{return od(c)}catch(d){return{assert:function(e){throw new ud(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Jd(a,b,c){return new ud(a,b,c)};var Od=!1;var Pd={};Pd.Ph=Ra('');Pd.Cg=Ra('');var Qd=Od,Rd=Pd.Cg,Sd=Pd.Ph;
var fe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},ge=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;fe(b,"/*")&&(b=b.slice(0,-2));fe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},he=/^[a-z0-9-]+$/i,ie=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
je=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!he.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!ie.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var w=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===w?!1:q.length===u.length?!0:q.length!==u.length+w?!1:"."===q[w-1]}if(t){var v=n.slice(n.indexOf("/"));k=ge(l.pathname+l.search,v)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ke,le=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.fg&&(l["fix_"+m]=!0),l.Ce=l.Ce||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,U:q.U,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(w,v,y,x,A){var B=y||x||A||f.test(v)&&v||null,z=document.createElement("div");z.innerHTML=B;u[v]=z.textContent||z.innerText||B});return{tagName:q[1],U:u,Gb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.Ce&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Le=function(){return this[this.length-1]};w.hd=function(z){var D=this.Le();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};w.rg=
function(z){for(var D=0,H;H=this[D];D++)if(H.tagName===z)return!0;return!1};var v=function(z){z&&"startTag"===z.type&&(z.Gb=q.test(z.tagName)||z.Gb);return z},y=t,x=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&w.hd("TABLE")?(k="<TBODY>"+k,B()):l.ii&&u.test(D)&&w.rg(D)?w.hd(D)?x():(k="</"+z.tagName+">"+k,B()):z.Gb||w.push(z)},endTag:function(z){w.Le()?l.Eg&&!w.hd(z.tagName)?x():w.pop():l.Eg&&(y(),B())}},B=function(){var z=k,D=v(y());k=z;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return v(y())}}();return{append:function(q){k+=q},vh:t,ni:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},oi:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.si="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.ri=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.U){var t=m.U[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Gb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;ke=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,w=r&&r.length||0;for(u=0;u<w;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Wf:a,Xf:a,Yf:a,Zf:a,gg:a,hg:function(r){return r},done:a,error:function(r){throw r;},yh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,w){var v="data-ps-"+u;if(2===arguments.length){var y=q.getAttribute(v);return b(y)?String(y):y}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,u){var w=q.ownerDocument;e(this,{root:q,options:u,Hb:w.defaultView||w.parentWindow,Sa:w,qc:ke("",{fg:!0}),Uc:[q],sd:"",td:w.createElement(q.nodeName),Db:[],Ia:[]});r(this.td,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ia,arguments);for(var q;!this.Wb&&this.Ia.length;)q=this.Ia.shift(),"function"===typeof q?this.mg(q):this.Cd(q)};t.prototype.mg=function(q){var u={type:"function",value:q.name||q.toString()};this.od(u);q.call(this.Hb,this.Sa);this.Re(u)};
t.prototype.Cd=function(q){this.qc.append(q);for(var u,w=[],v,y;(u=this.qc.vh())&&!(v=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)w.push(u);this.Uh(w);v&&this.Og(u);y&&this.Pg(u)};t.prototype.Uh=function(q){var u=this.jg(q);u.qe&&(u.dd=this.sd+u.qe,this.sd+=u.th,this.td.innerHTML=u.dd,this.Rh())};t.prototype.jg=function(q){var u=this.Uc.length,w=[],v=[],y=[];c(q,function(x){w.push(x.text);if(x.U){if(!/^noscript$/i.test(x.tagName)){var A=
u++;v.push(x.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==x.U.id&&"ps-style"!==x.U.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+A+(x.Gb?" />":">"))}}else v.push(x.text),y.push("endTag"===x.type?x.text:"")});return{ui:q,raw:w.join(""),qe:v.join(""),th:y.join("")}};t.prototype.Rh=function(){for(var q,u=[this.td];b(q=u.shift());){var w=1===q.nodeType;if(!w||!r(q,"proxyof")){w&&(this.Uc[r(q,"id")]=q,r(q,"id",null));var v=q.parentNode&&r(q.parentNode,"proxyof");
v&&this.Uc[v].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Og=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.src=q.U.src||q.U.ai;q.src&&this.Db.length?this.Wb=q:this.od(q);var w=this;this.Th(q,function(){w.Re(q)})};t.prototype.Pg=function(q){var u=this.qc.clear();u&&this.Ia.unshift(u);q.type=q.U.type||q.U.TYPE||"text/css";this.Vh(q);u&&this.write()};t.prototype.Vh=function(q){var u=this.lg(q);this.Sg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Sa.createTextNode(q.content)))};t.prototype.lg=function(q){var u=this.Sa.createElement(q.tagName);u.setAttribute("type",q.type);d(q.U,function(w,v){u.setAttribute(w,v)});return u};t.prototype.Sg=function(q){this.Cd('<span id="ps-style"/>');var u=this.Sa.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.od=function(q){q.lh=this.Ia;this.Ia=[];this.Db.unshift(q)};t.prototype.Re=function(q){q!==this.Db[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Db.shift(),this.write.apply(this,q.lh),!this.Db.length&&this.Wb&&(this.od(this.Wb),this.Wb=null))};t.prototype.Th=function(q,u){var w=this.kg(q),v=this.Ih(w),y=this.options.Wf;q.src&&(w.src=q.src,this.Dh(w,v?y:function(){u();y()}));try{this.Rg(w),q.src&&!v||u()}catch(x){this.options.error(x),u()}};t.prototype.kg=function(q){var u=this.Sa.createElement(q.tagName);d(q.U,function(w,v){u.setAttribute(w,v)});q.content&&(u.text=q.content);return u};t.prototype.Rg=function(q){this.Cd('<span id="ps-script"/>');
var u=this.Sa.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Dh=function(q,u){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),u())},onerror:function(){var y={message:"remote script failed "+q.src};w();v(y);u()}})};t.prototype.Ih=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.yh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var v=u.shift(),y;v&&(y=v[v.length-1],y.Xf(),v.stream=t.apply(null,v),y.Yf())}function t(v,y,x){function A(H){H=x.hg(H);w.write(H);x.Zf(H)}w=new n(v,x);w.id=q++;w.name=x.name||w.id;var B=v.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=w.Hb.onerror||a;w.Hb.onerror=function(H,M,O){x.error({li:H+
" - "+M+":"+O});D.apply(w.Hb,arguments)};w.write(y,function(){e(B,z);w.Hb.onerror=D;x.done();w=null;r()});return w}var q=0,u=[],w=null;return e(function(v,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.ki?v[0]:v;var A=[v,y,x];v.oh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};x.gg(A);u.push(A);w||r();return v.oh},{streams:{},mi:u,ci:n})}();le=l.postscribe}})();function me(a){return""+a}
function ne(a,b){var c=[];return c};var oe=function(a,b){var c=new fb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},pe=function(a,b){var c=new jb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,oe(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var qe=function(a,b){E(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertApiSubject",c)};var re=function(a,b){E(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new jb;return d=pe("AssertThatSubject",c)};function se(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(rb(arguments[d],c));return qb(a.apply(null,b))}}var ue=function(){for(var a=Math,b=te,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=se(a[e].bind(a)))}return c};var ve=function(a){var b;return b};var we=function(a){var b;return b};var xe=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ye=function(a){E(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ze=function(a){E(this.i.a,["message:?string"],arguments);};var Ae=function(a,b){E(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Be=function(){return(new Date).getTime()};var Ce=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.eg.apply(null,Array.prototype.slice.call(arguments,1))};var De=function(){Ce(this,"read_container_data");var a=new jb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'164');a.set("environmentName",'');a.set("debugMode",Qd);a.set("previewMode",Sd);a.set("environmentMode",Rd);a.m=!0;return a};var Ee=function(a){return null===a?"null":a instanceof h?"array":a instanceof fb?"function":typeof a};var Fe=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Qd||Sd)&&a.call(this,e.message)}}}return{parse:b(function(c){return qb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(rb(c))})}};var Ge=function(a){return Qa(rb(a,this.m))};var He=function(a){return Number(rb(a,this.m))};var Ie=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Je=function(a,b,c){var d=null,e=!1;return e?d:null};var te="floor ceil round max min abs pow sqrt".split(" ");var Ke=function(){var a={};return{Kg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Hh:function(b,c){a[b]=c},reset:function(){a={}}}},Le=function(a,b){E(this.i.a,["apiName:!string","mock:?*"],arguments);};var Me=function(){this.a={}};Me.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Me.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?oe(a,b):pe(a,b)};function Ne(){var a={};return a};var G={fb:"_ee",Sc:"_syn",bi:"_uei",Hc:"event_callback",Mb:"event_timeout",K:"gtag.config",ja:"allow_ad_personalization_signals",Ic:"restricted_data_processing",cb:"allow_google_signals",ka:"cookie_expires",Lb:"cookie_update",eb:"session_duration",ma:"user_properties",xa:"transport_url",O:"ads_data_redaction"};G.Ke=[G.ja,G.cb,G.Lb];G.Oe=[G.ka,G.Mb,G.eb];var C=window,I=document,Oe=navigator,Pe=I.currentScript&&I.currentScript.src,Qe=function(a,b){var c=C[a];C[a]=void 0===c?b:c;return C[a]},Re=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Se=function(a,b,c){var d=I.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Re(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=I.getElementsByTagName("script")[0]||I.body||I.head;l.parentNode.insertBefore(d,l);return d},Te=function(){if(Pe){var a=Pe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ue=function(a,b){var c=I.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=I.body&&I.body.lastChild||
I.body||I.head;d.parentNode.insertBefore(c,d);Re(c,b);void 0!==a&&(c.src=a);return c},Ve=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},We=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Xe=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},K=function(a){C.setTimeout(a,0)},Ye=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ze=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$e=function(a){var b=I.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},af=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},bf=function(a){Oe.sendBeacon&&Oe.sendBeacon(a)||Ve(a)},cf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var df={},N=function(a,b){df[a]=df[a]||[];df[a][b]=!0},ef=function(a){for(var b=[],c=df[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ff={},gf=function(a){return void 0==ff[a]?!1:ff[a]};var hf=[];function jf(){var a=Qe("google_tag_data",{});a.ics||(a.ics={entries:{},set:kf,update:lf,addListener:mf,notifyListeners:nf,active:!1});return a.ics}
function kf(a,b,c,d,e,f){var g=jf();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&C.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,of(a),nf(),N("TAGGING",2))},f)}}}
function lf(a,b){var c=jf();c.active=!0;if(void 0!=b){var d=pf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=pf(a);f.quiet?(f.quiet=!1,of(a)):g!==d&&of(a)}}function mf(a,b){hf.push({ue:a,Fg:b})}function of(a){for(var b=0;b<hf.length;++b){var c=hf[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function nf(){for(var a=0;a<hf.length;++a){var b=hf[a];if(b.Ve){b.Ve=!1;try{b.Fg.call()}catch(c){}}}}
var pf=function(a){var b=jf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},qf=function(a){return!(jf().entries[a]||{}).quiet},rf=function(){return gf("gtag_cs_api")?jf().active:!1},sf=function(a,b){jf().addListener(a,b)},tf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!qf(b[e]))return!0;return!1}if(c()){var d=!1;sf(b,function(){d||c()||(d=!0,a())})}else a()},uf=function(a,b){if(!1===pf(b)){var c=!1;sf([b],function(){!c&&pf(b)&&(a(),c=!0)})}};var vf=[G.s,G.J],wf=function(a){var b=a[G.Ch];b&&N("GTM",40);var c=a[G.Lh];c&&N("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<vf.length;f++){var g=vf[f],k=a[vf[f]],l=d[e];jf().set(g,k,l,"US","US-MA",c)}},xf=function(a){for(var b=0;b<vf.length;b++){var c=vf[b],d=a[vf[b]];jf().update(c,d)}jf().notifyListeners()},yf=function(a){var b=pf(a);return void 0!=b?b:!0},zf=function(){for(var a=[],b=0;b<vf.length;b++){var c=pf(vf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Af=function(a){uf(a,G.s)},Bf=function(a,b){tf(a,b)};var Df=function(a){return Cf?I.querySelectorAll(a):null},Ef=function(a,b){if(!Cf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!I.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ff=!1;if(I.querySelectorAll)try{var Gf=I.querySelectorAll(":root");Gf&&1==Gf.length&&Gf[0]==I.documentElement&&(Ff=!0)}catch(a){}var Cf=Ff;var Hd={},R=null,Uf=Math.random();Hd.B="GTM-NWDMT9Q";Hd.Rb="6a0";Hd.Sd="";var Vf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Wf="www.googletagmanager.com/gtm.js";
var Xf=Wf,Yf=null,Zf=null,$f=null,ag="//www.googletagmanager.com/a?id="+Hd.B+"&cv=164",bg={},cg={},dg=function(){var a=R.sequence||0;R.sequence=a+1;return a};
var eg=function(){return"&tc="+hd.filter(function(a){return a}).length},hg=function(){fg||(fg=C.setTimeout(gg,500))},gg=function(){fg&&(C.clearTimeout(fg),fg=void 0);void 0===ig||jg[ig]&&!kg&&!lg||(mg[ig]||ng.Xg()||0>=og--?(N("GTM",1),mg[ig]=!0):(ng.wh(),Ve(pg()),jg[ig]=!0,qg=rg=lg=kg=""))},pg=function(){var a=ig;if(void 0===a)return"";var b=ef("GTM"),c=ef("TAGGING");return[sg,jg[a]?"":"&es=1",tg[a],b?"&u="+b:"",c?"&ut="+c:"",eg(),kg,lg,rg,qg,"&z=0"].join("")},ug=function(){return[ag,"&v=3&t=t","&pid="+
Ka(),"&rv="+Hd.Rb].join("")},vg="0.005000">Math.random(),sg=ug(),wg=function(){sg=ug()},jg={},kg="",lg="",qg="",rg="",ig=void 0,tg={},mg={},fg=void 0,ng=function(a,b){var c=0,d=0;return{Xg:function(){if(c<a)return!1;Ua()-d>=b&&(c=0);return c>=a},wh:function(){Ua()-d>=b&&(c=0);c++;d=Ua()}}}(2,1E3),og=1E3,xg=function(a,b){if(vg&&!mg[a]&&ig!==a){gg();ig=a;qg=kg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";tg[a]="&e="+c+"&eid="+a;hg()}},yg=function(a,b,c){if(vg&&!mg[a]&&
b){a!==ig&&(gg(),ig=a);var d,e=String(b[td.ya]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;kg=kg?kg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(jd[g]?"1":"2")+d;qg=qg?qg+"."+k:"&ti="+k;hg();2022<=pg().length&&gg()}},zg=function(a,b,c){if(vg&&!mg[a]){a!==ig&&(gg(),ig=a);var d=c+b;lg=lg?lg+
"."+d:"&epr="+d;hg();2022<=pg().length&&gg()}};var Ag={},Bg=new La,Cg={},Dg={},Gg={name:"dataLayer",set:function(a,b){F(cb(a,b),Cg);Eg()},get:function(a){return Fg(a,2)},reset:function(){Bg=new La;Cg={};Eg()}},Fg=function(a,b){if(2!=b){var c=Bg.get(a);if(vg){var d=Hg(a);c!==d&&N("GTM",5)}return c}return Hg(a)},Hg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Ig(b)},Ig=function(a){for(var b=Cg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Jg=function(a,b){Dg.hasOwnProperty(a)||(Bg.set(a,b),F(cb(a,b),Cg),Eg())},Eg=function(a){Na(Dg,function(b,c){Bg.set(b,c);F(cb(b,void 0),Cg);F(cb(b,c),Cg);a&&delete Dg[b]})},Kg=function(a,b,c){Ag[a]=Ag[a]||{};var d=1!==c?Hg(b):Bg.get(b);"array"===nb(d)||"object"===nb(d)?Ag[a][b]=F(d):Ag[a][b]=d},Lg=function(a,b){if(Ag[a])return Ag[a][b]},Mg=function(a,b){Ag[a]&&delete Ag[a][b]};var Pg=/:[0-9]+$/,Qg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Tg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Rg(a.protocol)||Rg(C.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
C.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||C.location.hostname).replace(Pg,"").toLowerCase());return Sg(a,b,c,d,e)},Sg=function(a,b,c,d,e){var f,g=Rg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ug(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Pg,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||N("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ha(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Rg=function(a){return a?a.replace(":",
"").toLowerCase():""},Ug=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Vg=function(a){var b=I.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||N("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Wg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Vg(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Zg=function(a,b,c,d){return Yg(d)?Xg(a,String(b||document.cookie),c):[]},bh=function(a,b,c,d,e){if(Yg(e)){var f=$g(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=ah(f,function(g){return g.Xb},b);if(1===f.length)return f[0].id;f=ah(f,function(g){return g.Bb},c);return f[0]?f[0].id:void 0}}};function ch(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Zg(b,f,!1,d).indexOf(c)}
var gh=function(a,b,c,d){function e(v,y,x){if(null==x)return delete k[y],v;k[y]=x;return v+"; "+y+"="+x}function f(v,y){if(null==y)return delete k[y],v;k[y]=!0;return v+"; "+y}if(!Yg(c.Ea))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=dh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fh);g=e(g,"samesite",
c.Ah);c.Eh&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=eh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,w=e(g,"domain",u);w=f(w,c.flags);try{d&&d(a,k)}catch(v){r=v;continue}t=!0;if(!fh(u,c.path)&&ch(w,a,b,c.Ea))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,k);return fh(m,c.path)?1:ch(g,a,b,c.Ea)?0:1},hh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return gh(a,b,c)};
function ah(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function $g(a,b,c){for(var d=[],e=Zg(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Xb:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var dh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},ih=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,jh=/(^|\.)doubleclick\.net$/i,fh=function(a,b){return jh.test(document.location.hostname)||"/"===b&&ih.test(a)},eh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;jh.test(e)||ih.test(e)||a.push("none");
return a},Yg=function(a){if(!gf("gtag_cs_api")||!a||!rf())return!0;if(!qf(a))return!1;var b=pf(a);return null==b?!0:!!b};var kh=function(){for(var a=Oe.userAgent+(I.cookie||"")+(I.referrer||""),b=a.length,c=C.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ua()/1E3)].join(".")},oh=function(a,b,c,d,e){var f=mh(b);return bh(a,f,nh(c),d,e)},ph=function(a,b,c,d){var e=""+mh(c),f=nh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},mh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},nh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function qh(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ua())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var rh=["1"],sh={},wh=function(a){var b=th(a.prefix);sh[b]||uh(b,a.path,a.domain)||(vh(b,kh(),a),uh(b,a.path,a.domain))};function vh(a,b,c){var d=ph(b,"1",c.domain,c.path),e=qh(c);e.Ea="ad_storage";hh(a,d,e)}function uh(a,b,c){var d=oh(a,b,c,rh,"ad_storage");d&&(sh[a]=d);return d}function th(a){return(a||"_gcl")+"_au"};var xh=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){We(I,"mousedown",d);We(I,"keyup",d);We(I,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==I.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Ya(e,g.callback())}}return e},Hh=function(){var a=Qe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Vg(C.location.href),c=b.search.replace("?",""),d=Qg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Tg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ya(d,e.query),a&&Ya(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}n=q;var v=n.charAt(n.length-1);n&&"&"!==v&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Za(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Za(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);xh.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=I.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);xh.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Tg(Vg(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Sg(C.location,"host",!0)],b,!0,!0)},ai=function(){var a=I.location.hostname,b=Mh.exec(I.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!gf("gtag_cs_api")||!rf())return!0;var a=pf("ad_storage");return null==a?!0:!!a},hi=function(a,b){qf("ad_storage")?gi()?a():uf(a,"ad_storage"):b?N("TAGGING",3):tf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!I.cookie)return b;var c=Zg(a,I.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===Ha(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Vg(C.location.href),b=Tg(a,"query",!1,void 0,"gclid"),c=Tg(a,"query",!1,void 0,"gclsrc"),d=Tg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qg(e,"gclid",!1,void 0);c=c||Qg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":gf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(hh(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ua();var f=qh(b,c,!0);f.Ea="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.vi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ua()),m;b:{for(var n=l,r=Zg(g,I.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=qh(b,l,!0);q.Ea="ad_storage";hh(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=Zg(m,I.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Na(d,function(f,g){var k=Zg(c+g,I.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(rf()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=I.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({zd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].zd]||(g[b[k].zd]=[]),g[b[k].zd].push({timestamp:l[1],Hg:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){qf(G.s)?yf(G.s)?a():Af(a):b?N("GTM",42):Bf(function(){zi(a,!0)},[G.s])}function Ai(a){var b=Vg(C.location.href),c=Tg(b,"host",!1);if(c&&c.match(yi)){var d=Tg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!yf(G.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!yf(G.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Na(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Hg);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){wh(b);var d=sh[th(b.prefix)],e=!1;if(d&&0<c.length){var f=R.joined_au=R.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;bf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=th(b.prefix),n=sh[m];n&&vh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Ta(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=C.location.protocol?a:b)+c},Ki=function(){var a=Te(),b;if(1===a)a:{var c=Xf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=I.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return yf(G.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Wg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Fg("gtm.whitelist");b&&N("GTM",9);var c=b&&ab(Sa(b),aj),d=Fg("gtm.blacklist");d||(d=Fg("tagTypeBlacklist"))&&N("GTM",3);d?
N("GTM",8):d=[];dj()&&(d=Sa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ha(Sa(d),"google")&&N("GTM",2);var e=d&&ab(Sa(d),bj),f={};return function(g){var k=g&&g[td.ya];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=cg[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>Ha(c,k))if(l&&0<l.length)for(var r=
0;r<l.length;r++){if(0>Ha(c,l[r])){N("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=Ha(e,k);if(q)t=q;else{var u=Ma(e,l||[]);u&&N("GTM",10);t=u}}var w=!m||t;w||!(0<=Ha(l,"sandboxedScripts"))||c&&-1!==Ha(c,"sandboxedScripts")||(w=Ma(e,cj));return f[k]=w}},dj=function(){return $i.test(C.location&&C.location.hostname)};var fj={sg:function(a,b){b[td.Jd]&&"string"===typeof a&&(a=1==b[td.Jd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(td.Ld)&&null===a&&(a=b[td.Ld]);b.hasOwnProperty(td.Nd)&&void 0===a&&(a=b[td.Nd]);b.hasOwnProperty(td.Md)&&!0===a&&(a=b[td.Md]);b.hasOwnProperty(td.Kd)&&!1===a&&(a=b[td.Kd]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=R.zones;!b&&a&&(b=R.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=I.createEventObject,c="complete"==I.readyState,d="interactive"==I.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)K(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)K(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{I.documentElement.doScroll("left"),mj()}catch(a){C.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Vf[b]||"__zone"===b)return-1;var e={};pb(d)&&(e=F(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Hd.B,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&C.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Xa(function(){return K(function(){b(Hd.B,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Xa(function(){b++;d&&b>=c&&tj(a)})},dg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!R._li&&C.performance&&C.performance.timing){var b=C.performance.timing.navigationStart,c=Ea(Gg.get("gtm.start"))?Gg.get("gtm.start"):0;R._li={cst:a(c-b),cbt:a(Zf-b)}}};var Bj={},Cj=function(){return C.GoogleAnalyticsObject&&C[C.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){C.GoogleAnalyticsObject||(C.GoogleAnalyticsObject=a||"ga");var b=C.GoogleAnalyticsObject;if(C[b])C.hasOwnProperty(b)||N("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);C[b]=c}xj();return C[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return C.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=hd[a],f=Qj(a,b,c,d);if(!f)return null;var g=pd(e[td.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{F:f,D:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[td.yf])k();else{var v=qd(f,c,[]),y=rj(c.id,String(f[td.ya]),Number(f[td.ce]),v[td.zf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"5");sj(c.id,y,"success",z);g()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ua()-B;yg(c.id,hd[a],"6");sj(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;yg(c.id,f,"1");var A=function(){var z=Ua()-B;yg(c.id,f,"7");sj(c.id,y,"exception",z);x||(x=!0,k())};var B=Ua();try{od(v,c)}catch(z){A(z)}}}var f=hd[a],g=b.F,k=b.D,l=b.terminate;if(c.fd(f))return null;var m=pd(f[td.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{F:g,D:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[td.Td]||f[td.Df]){var t=f[td.Td]?id:c.Jh,q=g,u=k;if(!t[a]){e=Xa(e);var w=Rj(a,t,e);g=w.F;k=w.D}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{F:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<hd.length;d++)if(a.Ab[d]){var e=hd[d];var f=b.add();try{var g=Pj(d,{F:f,D:f,terminate:f},a,d);g?c.push({cf:d,We:rd(e),$b:g}):(Vj(d,a),f())}catch(l){f()}}b.dg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].$b();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.cf,k=b.cf;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!vg)return;var c=function(d){var e=b.fd(hd[d])?"3":"4",f=pd(hd[d][td.ae],b,[]);f&&f.length&&c(f[0].index);yg(b.id,hd[d],e);var g=pd(hd[d][td.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}xg(a,b);var f=wj(a,d,e);Kg(a,"event",1);Kg(a,"ecommerce",1);Kg(a,"gtm");var g={id:a,name:b,fd:ej(c),Ab:[],Jh:[],Ne:function(){N("GTM",6)}};g.Ab=Dd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Hd.B);if(!k)return k;for(var l=0;l<g.Ab.length;l++)if(g.Ab[l]){var m=hd[l];if(m&&!Vf[String(m[td.ya])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.F=b;return a},lk=function(a,b){a.D=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var nk;if(3===Hd.Rb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Hd.B.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Hd.Rb.length){var g="w";f="2"+g}else f="";return f+d+Hd.Rb+e};function rk(){var a=!1;a=rf();return a}
function sk(a,b,c){function d(r){var t;R.reported_gclid||(R.reported_gclid={});t=R.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(rf()){var y=yf(G.s);w("gcs",zf());r&&w("gcu","1");w("rnd",n);if((!f||g&&"aw.ds"!==g)&&yf(G.s)){var x=ki("_gcl_aw");w("gclaw",x.join("."))}w("url",String(C.location).split(/[?#]/)[0]);w("dclid",tk(b,k));!y&&b&&(v="https://pagead2.googlesyndication.com")}
"1"===Uh(!1)._up&&w("gtm_up","1");w("gclid",tk(b,f));w("gclsrc",g);w("gtm",qk(!c));var A=v+"/pagead/landing?"+u.join("&");bf(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+kh();m?Bf(function(){d();yf(G.s)||Af(function(){return d(!0)})},[G.s]):d()}}
function tk(a,b){var c=a&&!yf(G.s);if(b&&c)return"0";return b}function xl(){var a=R;return a.gcq=a.gcq||new yl}
var zl=function(a,b,c){xl().register(a,b,c)},Al=function(a,b,c,d){xl().push("event",[b,a],c,d)},Bl=function(a,b){xl().push("config",[a],b)},Cl={},Dl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},El=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},yl=function(){this.m={};this.i={};this.a=[]},Fl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Dl},Gl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===
Fl(a,b).status){Fl(a,b).status=2;var e={};vg&&(e.timeoutId=C.setTimeout(function(){N("GTM",38);hg()},3E3));a.push("require",[e],d.containerId);Cl[d.containerId]=Ua();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=C.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Se(l)}}}},Hl=function(a,b,c,d){if(d.da){var e=Fl(a,d.da),f=e.m;if(f){var g=F(c),k=F(e.targetConfig[d.da]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Fg("gtm.uniqueEventId"),t=Gi(d.da).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){
zg(r,t,"2");}),function(){zg(r,t,"3");});try{zg(r,t,"1");f(d.da,b,d.m,q)}catch(u){zg(r,t,"4");}}}};
yl.prototype.register=function(a,b,c){if(3!==Fl(this,a).status){Fl(this,a).m=b;Fl(this,a).status=3;c&&(Fl(this,a).i=c);var d=Gi(a),e=Cl[d.containerId];if(void 0!==e){var f=R[d.containerId].bootstrap,g=d.prefix.toUpperCase();R[d.containerId]._spx&&(g=g.toLowerCase());var k=Fg("gtm.uniqueEventId"),l=g,m=Ua()-f;if(vg&&!mg[k]){k!==ig&&(gg(),ig=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);rg=rg?rg+","+n:"&cl="+n}delete Cl[d.containerId]}this.flush()}};
yl.prototype.push=function(a,b,c,d){var e=Math.floor(Ua()/1E3);Gl(this,c,b[0][G.xa]||this.i[G.xa]);this.a.push(new El(a,e,c,b,d));d||this.flush()};
yl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Fl(this,c.da).status&&!a)return;vg&&C.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(l,m){F(cb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[G.wc];delete d[G.wc];var f=Fl(this,c.da),g=Gi(c.da),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Hl(this,G.K,d,c);f.a=!0;delete d[G.fb];k?F(d,f.containerConfig):
F(d,f.targetConfig[c.da]);break;case "event":Hl(this,c.a[1],c.a[0],c)}this.a.shift()}};var Il=function(a){};var Jl=function(a,b){return!0};var Kl=function(a,b){var c;return c};var Ll=function(a){};var Ml=function(a,b){var c;var d=qb(c,this.m);void 0===d&&void 0!==c&&N("GTM",45);return d};var Nl=function(a){var b;var f=qb(b,this.m);void 0===f&&void 0!==b&&N("GTM",45);return f};var Ol=function(a,b){var c=null;return qb(c,this.m)};var Pl=function(a){var b;E(this.i.a,["path:!string"],arguments);Ce(this,"access_globals","readwrite",a);var c=a.split("."),d=bb(c),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Da(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};return qb(b,this.m)};var Ql=function(a){var b;return b};var Rl=function(a,b){b=void 0===b?!0:b;var c;return c};var Sl=function(a,b){var c;return c};var Tl=function(a,b){var c;return c};var Ul=function(a){var b="";return b};var Vl=function(a){var b="";return b};var Wl=function(a,b){};var Xl={},Yl=function(a,b,c,d){E(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ce(this,"inject_script",a);var e=this.m,f=function(){b instanceof fb&&b.Fa(e)},g=function(){c instanceof fb&&c.Fa(e)};if(!d){Se(a,f,g);return}var k=d;Xl[k]?(Xl[k].onSuccess.push(f),Xl[k].onFailure.push(g)):(Xl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Xl[k].onSuccess,m=0;m<l.length;m++)K(l[m]);l.push=function(n){K(n);
return 0}},g=function(){for(var l=Xl[k].onFailure,m=0;m<l.length;m++)K(l[m]);Xl[k]=null},Se(a,f,g));};var Zl=function(){return!1},$l={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var am=function(){};var bm=function(a,b){var c=!1;return c};var cm=function(){var a="";return a};var dm=function(){var a="";return a};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};var Fc=function(){var a=new Me;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Wl),a.add("injectScript",Yl));var b=em;a.add("Math",ue());a.add("TestHelper",Ne());a.add("addEventCallback",Il);a.add("aliasInWindow",Jl);a.add("assertApi",qe);a.add("assertThat",re);a.add("callInWindow",
Kl);a.add("callLater",Ll);a.add("copyFromDataLayer",Ml);a.add("copyFromWindow",Nl);a.add("createArgumentsQueue",Ol);a.add("createQueue",Pl);a.add("decodeUri",ve);a.add("decodeUriComponent",we);a.add("encodeUri",xe);a.add("encodeUriComponent",ye);a.add("fail",ze);a.add("fromBase64",Ql,!("atob"in C));a.add("generateRandom",Ae);a.add("getContainerVersion",De);a.add("getCookieValues",Rl);a.add("getQueryParameters",Sl);a.add("getReferrerQueryParameters",Tl);a.add("getReferrerUrl",Ul);a.add("getTimestamp",
Be);a.add("getType",Ee);a.add("getUrl",Vl);a.add("localStorage",$l,!Zl());a.add("logToConsole",am);a.add("makeInteger",Ge);a.add("makeNumber",He);a.add("makeString",Ie);a.add("makeTableMap",Je);a.add("mock",Le);a.add("queryPermission",bm);a.add("readCharacterSet",cm);a.add("readTitle",dm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in C));a.add("JSON",Fe(function(c){var d=this.m.a;
d&&d.log.call(this,"error",c)}));a.add("templateStorage",jm);return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Dc,Ld;
function mm(){var a=data.runtime||[],b=data.runtime_lines;Dc=new Cc;nm();dd=function(e,f,g){om(f);var k=new jb;Na(f,function(q,u){var w=qb(u);void 0===w&&void 0!==u&&N("GTM",44);k.set(q,w)});Dc.a.a.o=zd();var l={eg:Nd(e),eventId:void 0!==g?g.id:void 0,Zb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.fa={i:{},a:function(q,u,w){1===u&&(n=q);7===u&&(r=w);m(q,u,w)},m:Ke()};l.log=function(q,u){if(n){var w=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:w})}}}var t=Ec(l,
[e,k]);Dc.a.a.o=void 0;t instanceof pa&&"return"===t.a&&(t=t.i);return rb(t)};Gc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&vd(d,b[c]);Dc.$b(d)}}function om(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){K(b)});Da(c)&&(a.gtmOnFailure=function(){K(c)})}
function nm(){var a=Dc;R.SANDBOXED_JS_SEMAPHORE=R.SANDBOXED_JS_SEMAPHORE||0;Hc(a,function(b,c,d){R.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{R.SANDBOXED_JS_SEMAPHORE--}})}function pm(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");cg[e]=cg[e]||[];cg[e].push(b)}})};var qm=["HA","GF","GP","G"],rm="G".split(/,/);rm.push("DC");rm.push("UA");rm.push("AW");
var sm=null,tm={},um={},vm,wm=!1;function xm(a,b){var c={event:a};b&&(c.eventModel=F(b),b[G.Hc]&&(c.eventCallback=b[G.Hc]),b[G.Mb]&&(c.eventTimeout=b[G.Mb]));return c}
var Cm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!pb(a[2])&&void 0!=a[2])return;c=a[2]}var d=xm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return wm=!0,{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Ld.i;d.a[b]?d.a[b].push(c):
d.a[b]=[c]}},set:function(a){var b;2==a.length&&pb(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},pb(a[2])||Ga(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Dm={policy:!0};var Em=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Gm=function(a){var b=Fm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Hm=!1,Im=[];function Jm(){if(!Hm){Hm=!0;for(var a=0;a<Im.length;a++)K(Im[a])}}var Km=function(a){Hm?K(a):Im.push(a)};var an=function(a){if($m(a))return a;this.a=a};an.prototype.Ng=function(){return this.a};var $m=function(a){return!a||"object"!==nb(a)||pb(a)?!1:"getUntrustedUpdateValue"in a};an.prototype.getUntrustedUpdateValue=an.prototype.Ng;var bn=[],cn=!1,dn=function(a){return C["dataLayer"].push(a)},en=function(a){var b=R["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function fn(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&Jg(f,void 0),Jg(f,g))});Yf||(Yf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=dg(),a["gtm.uniqueEventId"]=d,Jg("gtm.uniqueEventId",d));$f=c;var e=gn(a);$f=null;switch(c){case "gtm.init":N("GTM",19),e&&N("GTM",20)}return e}
function gn(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=R.zones;d=e?e.checkState(Hd.B,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function hn(){for(var a=!1;!cn&&0<bn.length;){cn=!0;delete Cg.eventModel;Eg();var b=bn.shift();if(null!=b){var c=$m(b);if(c){var d=b;b=$m(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Fg(g,1);if(Ga(k)||pb(k))k=F(k);Dg[g]=k}}try{if(Da(b))try{b.call(Gg)}catch(u){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Fg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Pa(b)){a:{if(b.length&&p(b[0])){var q=Cm[b[0]];if(q&&(!c||!Dm[b[0]])){b=q(b);break a}}b=void 0}if(!b){cn=!1;continue}}a=fn(b)||a}}finally{c&&Eg(!0)}}cn=!1}return!a}function jn(){var a=hn();try{Em(C["dataLayer"],Hd.B)}catch(b){}return a}
var ln=function(){var a=Qe("dataLayer",[]),b=Qe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Km(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<R.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new an(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);bn.push.apply(bn,d);if(300<
this.length)for(N("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return hn()&&g};bn.push.apply(bn,a.slice(0));kn()&&K(jn)},kn=function(){var a=!0;return a};var mn={};mn.Nb=new String("undefined");
var nn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===mn.Nb?b:a[d]);return c.join("")}};nn.prototype.toString=function(){return this.a("undefined")};nn.prototype.valueOf=nn.prototype.toString;mn.Mf=nn;mn.Rc={};mn.wg=function(a){return new nn(a)};var on={};mn.xh=function(a,b){var c=dg();on[c]=[a,b];return c};mn.we=function(a){var b=a?0:1;return function(c){var d=on[c];if(d&&"function"===typeof d[b])d[b]();on[c]=void 0}};mn.Vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};mn.ph=function(a){if(a===mn.Nb)return a;var b=dg();mn.Rc[b]=a;return'google_tag_manager["'+Hd.B+'"].macro('+b+")"};mn.gh=function(a,b,c){a instanceof mn.Mf&&(a=a.a(mn.xh(b,c)),b=Ca);return{dd:a,F:b}};var pn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ye(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},qn=function(a){R.hasOwnProperty("autoEventsSettings")||(R.autoEventsSettings={});var b=R.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},rn=function(a,b,c){qn(a)[b]=c},sn=function(a,b,c,d){var e=qn(a),f=Wa(e,b,d);e[b]=c(f)},tn=function(a,b,c){var d=qn(a);return Wa(d,b,c)};var un=["input","select","textarea"],vn=["button","hidden","image","reset","submit"],wn=function(a){var b=a.tagName.toLowerCase();return!Ia(un,function(c){return c===b})||"input"===b&&Ia(vn,function(c){return c===a.type.toLowerCase()})?!1:!0},xn=function(a){return a.form?a.form.tagName?a.form:I.getElementById(a.form):af(a,["form"],100)},yn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(wn(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var zn=!!C.MutationObserver,An=void 0,Bn=function(a){if(!An){var b=function(){var c=I.body;if(c)if(zn)(new MutationObserver(function(){for(var e=0;e<An.length;e++)K(An[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;We(c,"DOMNodeInserted",function(){d||(d=!0,K(function(){d=!1;for(var e=0;e<An.length;e++)K(An[e])}))})}};An=[];I.body?b():K(b)}An.push(a)};
var Mn=function(){var a=I.body,b=I.documentElement||a&&a.parentElement,c,d;if(I.compatMode&&"BackCompat"!==I.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};N("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Nn=function(a){var b=Mn(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},On=function(a){if(I.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!C.getComputedStyle)return!0;var c=C.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var k=g.indexOf("opacity(");0<=k&&(g=g.substring(k+8,g.indexOf(")",k)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-
1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=C.getComputedStyle(d,null))}return!1};var Pn=[],Qn=!(!C.IntersectionObserver||!C.IntersectionObserverEntry),Rn=function(a,b,c){for(var d=new C.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Pn.length;f++)if(!Pn[f])return Pn[f]=d,f;return Pn.push(d)-1},Sn=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Ua()};K(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=Nn(b[k]);if(l>e[k])for(;f[k]<c.length-1&&l>=c[f[k]+1];)d(b[k],l),f[k]++;else if(l<e[k])for(;0<=f[k]&&l<=c[f[k]];)d(b[k],l),f[k]--;e[k]=l}}},Tn=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Qn){var e=!1;K(function(){e||Sn(a,b,c)()});return Rn(function(f){e=!0;for(var g={Za:0};g.Za<f.length;g={Za:g.Za},g.Za++)K(function(k){return function(){return a(f[k.Za])}}(g))},b,c)}return C.setInterval(Sn(a,b,c),1E3)},Un=function(a){Qn?0<=a&&a<Pn.length&&Pn[a]&&(Pn[a].disconnect(),Pn[a]=void 0):C.clearInterval(a)};var Wn=C.clearTimeout,Xn=C.setTimeout,S=function(a,b,c){if(Ji()){b&&K(b)}else return Se(a,b,c)},Yn=function(){return C.location.href},Zn=function(a){return Tg(Vg(a),"fragment")},$n=function(a){return Ug(Vg(a))},T=function(a,b){return Fg(a,b||2)},ao=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=dn(a)):d=dn(a);return d},bo=function(a,b){C[a]=b},U=function(a,b,c){b&&(void 0===C[a]||c&&!C[a])&&(C[a]=
b);return C[a]},co=function(a,b,c){return Zg(a,b,void 0===c?!0:!!c)},eo=function(a,b){if(Ji()){b&&K(b)}else Ue(a,b)},fo=function(a){return!!tn(a,"init",!1)},go=function(a){rn(a,"init",!0)},ho=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Xf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Li("https://","http://",c))},io=function(a,b){var c=a[b];return c};
var jo=mn.gh;function Go(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Ho=new La;function Io(a,b){function c(g){var k=Vg(g),l=Tg(k,"protocol"),m=Tg(k,"host",!0),n=Tg(k,"port"),r=Tg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Jo(a){return Ko(a)?1:0}
function Ko(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(Jo({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Go(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=Ha(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Ho.get(n);r||(r=new RegExp(c,m),Ho.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Io(b,c)}return!1};var Lo=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Mo={},No=encodeURI,V=encodeURIComponent,Oo=Ve;var Po=function(a,b){if(!a)return!1;var c=Tg(Vg(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Qo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Mo.Wg=function(){var a=!1;return a};function iq(){return C.gaGlobal=C.gaGlobal||{}}var jq=function(){var a=iq();a.hid=a.hid||Ka();return a.hid};var sq=window,tq=document,uq=function(a){var b=sq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===sq["ga-disable-"+a])return!0;try{var c=sq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xg("AMP_TOKEN",String(tq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return tq.getElementById("__gaOptOutExtension")?!0:!1};function xq(a,b){delete b.eventModel[G.fb];if(a!==G.K){var c=b.getWithConfig(G.mc);if(Ga(c)){N("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}zq(b.eventModel)}var zq=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[G.ma]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Cq=function(a,b,c){Al(b,c,a)},Dq=function(a,b,c){Al(b,c,a,!0)},Fq=function(a,b){};
function Eq(a,b){}var Z={b:{}};
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var A=[],B=x.split(","),z=0;z<B.length;z++){var D=Number(B[z]);if(isNaN(D))return[];n.test(B[z])||A.push(D)}return A}function c(){var x=0,A=0;return function(){var B=Mn(),z=B.height;x=Math.max(w.scrollLeft+B.width,x);A=Math.max(w.scrollTop+z,A);return{zg:x,Ag:A}}}function d(){q=U("self");
u=q.document;w=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,A,B,z){var D=l(A),H={},M;for(M in D){H.Ja=M;if(D.hasOwnProperty(H.Ja)){var O=Number(H.Ja);x<O||(ao({event:"gtm.scrollDepth","gtm.scrollThreshold":O,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":z,"gtm.triggers":D[H.Ja].join(",")}),sn("sdl",A,function(ca){return function(ba){delete ba[ca.Ja];return ba}}(H),{}))}H={Ja:H.Ja}}}function f(){var x=y(),A=x.zg,B=x.Ag,z=A/w.scrollWidth*100,D=B/w.scrollHeight*100;e(A,
"horiz.pix",r.Pb,t.Pd);e(z,"horiz.pct",r.Ob,t.Pd);e(B,"vert.pix",r.Pb,t.ie);e(D,"vert.pct",r.Ob,t.ie);rn("sdl","pending",!1)}function g(){var x=250,A=!1;u.scrollingElement&&u.documentElement&&q.addEventListener&&(x=50,A=!0);var B=0,z=!1,D=function(){z?B=Xn(D,x):(B=0,f(),fo("sdl")&&!a()&&(Xe(q,"scroll",H),Xe(q,"resize",H),rn("sdl","init",!1)));z=!1},H=function(){A&&y();B?z=!0:(B=Xn(D,x),rn("sdl","pending",!0))};return H}function k(x,A,B){if(A){var z=b(String(x));sn("sdl",B,function(D){for(var H=0;H<
z.length;H++){var M=String(z[H]);D.hasOwnProperty(M)||(D[M]=[]);D[M].push(A)}return D},{})}}function l(x){return tn("sdl",x,{})}function m(x){K(x.vtp_gtmOnSuccess);var A=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,z=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,H=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case r.Pb:k(B,A,"horiz.pix");break;case r.Ob:k(z,A,"horiz.pct")}switch(D){case r.Pb:k(H,A,"vert.pix");
break;case r.Ob:k(M,A,"vert.pct")}fo("sdl")?tn("sdl","pending")||(v||(d(),v=!0),K(function(){return f()})):(d(),v=!0,w&&(go("sdl"),rn("sdl","pending",!0),K(function(){f();if(a()){var O=g();We(q,"scroll",O);We(q,"resize",O)}else rn("sdl","init",!1)})))}var n=/^\s*$/,r={Ob:"PERCENT",Pb:"PIXELS"},t={ie:"vertical",Pd:"horizontal"},q,u,w,v=!1,y;(function(x){Z.__sdl=x;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):Km(function(){m(x)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();

Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Lg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||I.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Tg(Vg(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):$n(String(b)):String(b)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return co(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<Ha(e,t))return}else if("write"===r){if(-1<Ha(f,t))return}else if("readwrite"===r){if(-1<Ha(f,t)&&-1<Ha(e,t))return}else if("execute"===r){if(-1<Ha(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},L:a}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||Yn();var d=b[a("vtp_component")];if(!d||"URL"==d)return $n(String(c));var e=Vg(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Tg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Tg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.jd&&b.ld>=b.jd)b.ed&&U("self").clearInterval(b.ed);else{b.ld++;var c=(new Date).getTime();ao({event:b.T,"gtm.timerId":b.ed,"gtm.timerEventNumber":b.ld,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.jd,"gtm.timerStartTime":b.bf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.bf,"gtm.triggers":b.Nh})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){K(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{T:b.vtp_eventName,ld:0,interval:Number(b.vtp_interval),jd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Nh:String(b.vtp_uniqueTriggerId||"0"),bf:(new Date).getTime()};c.ed=U("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){Bf(function(){d(e)},[G.J,G.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;F(Qo(n.vtp_fieldsToSet,"fieldName","value"),g);F(Qo(n.vtp_contentGroup,"index","group"),k);F(Qo(n.vtp_dimension,"index","dimension"),l);F(Qo(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=F(n);e=F(e,r)}F(Qo(e.vtp_fieldsToSet,
"fieldName","value"),g);F(Qo(e.vtp_contentGroup,"index","group"),k);F(Qo(e.vtp_dimension,"index","dimension"),l);F(Qo(e.vtp_metric,"index","metric"),m);yf(G.J)||(g.storage="none"),yf(G.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+dg(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,
storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},y=function(P){var Q=[].slice.call(arguments,0);Q[0]=q+Q[0];t.apply(window,Q)},x=function(P,Q){return void 0===Q?Q:P(Q)},A=function(P,Q){if(Q)for(var Ja in Q)Q.hasOwnProperty(Ja)&&y("set",P+Ja,Q[Ja])},B=function(){},
z=function(P,Q,Ja){var $a=0;if(P)for(var Fa in P)if(P.hasOwnProperty(Fa)&&(Ja&&w[Fa]||!Ja&&void 0===w[Fa])){var Va=v[Fa]?Ra(P[Fa]):P[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);Q[Fa]=Va;$a++}return $a},D={name:u};z(g,D,!0);t("create",
e.vtp_trackingId||f.trackingId,D);y("set","&gtm",qk(!0));rf()&&y("set","&gcs",zf());e.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(P,Q){void 0!==e[Q]&&y("set",P,e[Q])})("nonInteraction","vtp_nonInteraction");A("contentGroup",
k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&y("set",H);var M;e.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&
(y("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:x(String,e.vtp_eventLabel||f.label),eventValue:x(Qa,e.vtp_eventValue||f.value)};z(M,O,!1);y("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==
e.vtp_trackType){}else{e.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:X})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:xa})}M?y("send","pageview",M):y("send","pageview");}if(!a){var Ba=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&
(Ba="internal/"+Ba);a=!0;var Oa=ck(g._x_19,"/analytics.js"),sa=Li("https:","http:","//www.google-analytics.com/"+Ba,g&&g.forceSSL);S("analytics.js"===Ba&&Oa?Oa:sa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else K(e.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(je(Vg(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();


Z.b.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;F(Qo(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var f=F(e);c=F(c,f)||{}}F(Qo(c.vtp_fieldsToSet,"fieldName","value"),d);var g=Ej(c.vtp_functionName);if(Da(g)){g.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+dg(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},r=function(y,x,A){var B=0,z;for(z in y)if(y.hasOwnProperty(z)&&
(A&&m[z]||!A&&void 0===m[z])){var D=n[z]?Ra(y[z]):y[z];"anonymizeIp"!==z||D||(D=void 0);x[z]=D;B++}return B},t={name:l};r(d,t,!0);var q={"&gtm":qk(!0)};r(d,q,!1);var u=encodeURI(Li("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));g("create",c.vtp_trackingId,t);g(k+"set",q);g(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});g(c.vtp_gtmOnSuccess);g(k+"require","render");a||(a=!0,S(u,function(){return Cj().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var w=U("dataLayer"),v=w&&w.hide;v&&(v.end||!0===v["GTM-NWDMT9Q"])&&(v[c.vtp_optimizeContainerId]=!0)}else K(c.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0}();



Z.b.aev=["google"],function(){function a(q,u){var w=Lg(q,"gtm");if(w)return w[u]}function b(q,u,w,v){v||(v="element");var y=q+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var A=a(q,v);if(A&&(x=w(A),n[y]=x,r.push(y),35<r.length)){var B=r.shift();delete n[B]}}return x}function c(q,u,w){var v=a(q,t[u]);return void 0!==v?v:w}function d(q,u){if(!q)return!1;var w=e(Yn());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;v.push(e(x))}}return!Po(q,v)}function e(q){m.test(q)||(q="http://"+q);return Tg(Vg(q),"HOST",!0)}function f(q,u,w){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?w:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?w:x;default:return w}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Ye(q,"value");case "button":return Ze(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,w=0;w<q.elements.length;w++)wn(q.elements[w])&&u++;return u}}function l(q,u,w){var v=a(q,"interactedFormField");return v&&Ye(v,u)||w}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
w;case "TEXT":return b(u,v,Ze)||w;case "URL":var x;a:{var A=String(a(u,"elementUrl")||w||""),B=Vg(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=Tg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,v,w);else{var H=q.vtp_attribute,M=a(u,"element");D=M&&Ye(M,H)||w||""}return D;case "MD":var O=q.vtp_mdValue,ca=b(u,"MD",In);return O&&ca?Ln(ca,
O)||w:ca||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=F(b),d=c;d[td.ya]=null;d[td.sf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.baut=["nonGoogleScripts"],function(){var a=!1,b=function(c){var d=c.vtp_uetqName||"uetq",e=U(d,[],!0);if("VARIABLE_REVENUE"==c.vtp_eventType)e.push({gv:c.vtp_goalValue}),c.vtp_gtmOnSuccess();else if("CUSTOM"==c.vtp_eventType){var f={},g=function(k,l){void 0!==c[k]&&(f[l]=c[k])};g("vtp_goalValue","gv");g("vtp_eventCategory","ec");g("vtp_eventAction","ea");g("vtp_eventLabel","el");g("vtp_eventValue","ev");e.push(f);c.vtp_gtmOnSuccess()}else if(a)c.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",
function(){var k=Lo(U("UET"),{ti:c.vtp_tagId,q:e});C[d]=k;k.push("pageLoad");c.vtp_gtmOnSuccess()},c.vtp_gtmOnFailure),a=!0}catch(k){K(c.vtp_gtmOnFailure)}};Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){K(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=I.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Re(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){K(g)}}}var b=function(d,e,f){oj(function(){var g,k=R;k.postscribe||(k.postscribe=le);g=k.postscribe;var l={done:e},m=I.createElement("div");m.style.display="none";m.style.visibility="hidden";I.body.appendChild(m);try{g(m,d,l)}catch(n){K(f)}})};var c=function(d){if(I.body){var e=
d.vtp_gtmOnFailure,f=jo(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.dd,k=f.F;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(I.body,$e(g),k,e)()}else Xn(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Ug||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=af(g,["a","area"],100);if(!g)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=tn("lcl",k?"nv.mwt":"mwt",0),m;m=k?tn("lcl","nv.ids",[]):tn("lcl","ids",[]);if(m.length){var n=pn(g,"gtm.linkClick",m);if(b(f,g,c)&&!k&&l&&g.href){var r=String(io(g,"rel")||""),t=!!Ia(r.split(" "),function(w){return"noreferrer"===w.toLowerCase()});
t&&N("GTM",36);var q=U((io(g,"target")||"_self").substring(1)),u=!0;if(ao(n,en(function(){var w;if(w=u&&q){var v;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){v=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Ug=!0;f.target.dispatchEvent(y);v=!0}else v=!1;w=!v}w&&(q.location.href=io(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else ao(n,function(){},l||2E3);return!0}}};We(c,"click",e,!1);We(c,"auxclick",e,!1)}
function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=io(d,"href"),g=f.indexOf("#"),k=io(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===g)return!1;if(0<g){var l=$n(f),m=$n(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||
0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};sn("lcl","mwt",k,0);e||sn("lcl","nv.mwt",k,0)}var l=function(m){m.push(g);return m};sn("lcl","ids",l,[]);e||sn("lcl","nv.ids",l,[]);fo("lcl")||(a(),go("lcl"));K(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(){var f=Number(T("gtm.start"))||0;return(new Date).getTime()-f}function b(f,g,k,l){function m(){if(!On(f.target)){g.has(d.Qb)||g.set(d.Qb,""+a());g.has(d.Kc)||g.set(d.Kc,""+a());var r=0;g.has(d.Sb)&&(r=Number(g.get(d.Sb)));r+=100;g.set(d.Sb,""+r);if(r>=k){var t=pn(f.target,"gtm.elementVisibility",[g.a]),q=Nn(f.target);t["gtm.visibleRatio"]=Math.round(1E3*q)/10;t["gtm.visibleTime"]=k;t["gtm.visibleFirstTime"]=Number(g.get(d.Kc));t["gtm.visibleLastTime"]=Number(g.get(d.Qb));
ao(t);l()}}}if(!g.has(d.hb)&&(0==k&&m(),!g.has(d.Ka))){var n=U("self").setInterval(m,100);g.set(d.hb,n)}}function c(f){f.has(d.hb)&&(U("self").clearInterval(Number(f.get(d.hb))),f.i(d.hb))}var d={hb:"polling-id-",Kc:"first-on-screen-",Qb:"recent-on-screen-",Sb:"total-visible-time-",Ka:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Df(m)}catch(H){N("GTM",46)}y=!!x&&w.length!=x.length}else if("ID"===l){var A=I.getElementById(m);A&&(x=[A],y=1!=w.length||w[0]!==A)}x||(x=[],y=0<w.length);if(y){for(var B=0;B<w.length;B++){var z=
new e(w[B],q);c(z)}w=[];for(var D=0;D<x.length;D++)w.push(x[D]);0<=v&&Un(v);0<w.length&&(v=Tn(k,w,[t]))}}function k(y){var x=new e(y.target,q);y.intersectionRatio>=t?x.has(d.Ka)||b(y,x,r,"ONCE"===u?function(){for(var A=0;A<w.length;A++){var B=new e(w[A],q);B.set(d.Ka,"1");c(B)}Un(v);if(n&&An)for(var z=0;z<An.length;z++)An[z]===g&&An.splice(z,1)}:function(){x.set(d.Ka,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Ka)&&(x.i(d.Ka),x.i(d.Sb)),x.i(d.Qb))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,r=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,q=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,w=[],v=-1;g();n&&Bn(g);K(f.vtp_gtmOnSuccess)})}();


var Gq={};Gq.macro=function(a){if(mn.Rc.hasOwnProperty(a))return mn.Rc[a]},Gq.onHtmlSuccess=mn.we(!0),Gq.onHtmlFailure=mn.we(!1);Gq.dataLayer=Gg;Gq.callback=function(a){bg.hasOwnProperty(a)&&Da(bg[a])&&bg[a]();delete bg[a]};function Hq(){R[Hd.B]=Gq;Ya(cg,Z.b);ld=ld||mn;md=fj}
function Iq(){ff.gtm_3pds=!0;R=C.google_tag_manager=C.google_tag_manager||{};if(R[Hd.B]){var a=R.zones;a&&a.unregisterChild(Hd.B);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)ed.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)hd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)gd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);fd.push(r)}jd=Z;kd=Jo;var q=data.permissions||{},u=data.sandboxed_scripts,w=data.security_groups;mm();Ld=new Kd(q);if(void 0!==
u)for(var v=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");cg[x]=v}pm(w);Hq();ln();jj=!1;kj=0;if("interactive"==I.readyState&&!I.createEventObject||"complete"==I.readyState)mj();else{We(I,"DOMContentLoaded",mj);We(I,"readystatechange",mj);if(I.createEventObject&&I.documentElement.doScroll){var A=!0;try{A=!C.frameElement}catch(H){}A&&nj()}We(C,"load",mj)}Hm=!1;"complete"===I.readyState?Jm():We(C,"load",Jm);a:{if(!vg)break a;C.setInterval(wg,864E5);}
Zf=(new Date).getTime();}}
(function(a){a()})(Iq);

})()
