
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"206",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
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
      "vtp_name":"OnetrustActiveGroups"
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
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
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
      "vtp_javascript":["template","(function(){return ",["escape",["macro",10],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "convert_true_to":"true",
      "convert_false_to":"false",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
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
      "vtp_javascript":["template","(function(){return ",["escape",["macro",17],8,16],"||(",["escape",["macro",18],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",20],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",21],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",23],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
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
      "vtp_javascript":["template","(function(){return ",["escape",["macro",26],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],",b=",["escape",["macro",27],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",29],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",31],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"||window._pageMetaData.citation_volume||null})();"]
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
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",39],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",48],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",50],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",52],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",54],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",56],8,16],"||(",["escape",["macro",18],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",58],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",60],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",62],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",64],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",9],8,16],",a=",["escape",["macro",66],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",68],8,16],"||null})();"]
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
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",71],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",70],8,16],"||[],c=",["escape",["macro",72],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",72],8,16],",c=",["escape",["macro",74],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",63],8,16],",a=",["escape",["macro",22],8,16],",b=",["escape",["macro",51],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],".concat(",["escape",["macro",76],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",76],8,16],"})();"]
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
      "vtp_contentGroup":["list",["map","index","2","group",["macro",7]],["map","index","3","group",["macro",12]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",13]],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowAdFeatures","value",["macro",15]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",16]],["map","index","4","dimension",["macro",19]],["map","index","5","dimension",["macro",22]],["map","index","6","dimension",["macro",24]],["map","index","8","dimension",["macro",28]],["map","index","9","dimension",["macro",30]],["map","index","10","dimension",["macro",32]],["map","index","11","dimension",["macro",34]],["map","index","12","dimension",["macro",36]],["map","index","13","dimension",["macro",38]],["map","index","14","dimension",["macro",40]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension",["macro",44]],["map","index","18","dimension",["macro",46]],["map","index","19","dimension",["macro",49]],["map","index","20","dimension",["macro",51]],["map","index","21","dimension",["macro",53]],["map","index","22","dimension",["macro",55]],["map","index","23","dimension",["macro",57]],["map","index","25","dimension",["macro",59]],["map","index","26","dimension",["macro",61]],["map","index","27","dimension",["macro",63]],["map","index","28","dimension",["macro",65]],["map","index","30","dimension",["macro",67]],["map","index","60","dimension",["macro",12]],["map","index","61","dimension",["macro",69]],["map","index","63","dimension",["macro",73]],["map","index","72","dimension",["macro",75]],["map","index","74","dimension",["macro",77]],["map","index","65","dimension",["macro",78]],["map","index","1","dimension",["macro",79]],["map","index","2","dimension",["macro",80]],["map","index","75","dimension",["macro",81]],["map","index","78","dimension",["macro",82]],["map","index","80","dimension",["macro",83]],["map","index","79","dimension",["macro",84]],["map","index","81","dimension",["macro",85]],["map","index","82","dimension",["macro",86]],["map","index","84","dimension",["macro",78]],["map","index","86","dimension",["macro",87]],["map","index","90","dimension",["macro",88]],["map","index","91","dimension",["macro",88]],["map","index","92","dimension",["macro",89]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
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
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"enableOptimize",
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
      "function":"__c",
      "vtp_value":"OneTrust Cookie Consent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.visibleTime"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],"?parseInt(",["escape",["macro",101],8,16],",10)\/1E3:0;return a.toString()+\"s\"})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",105],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0008,\"):!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"country"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={journal:1,\"journal-info\":1,Collections:1,\"site-index\":1,advanced_search:1,search_results:1,\"subjects-homepage\":1,\"publisher-level-subject\":1,\"journal-level-subject\":1,\"journal-subjects\":1,\"journal-articles\":1,volumes:1,volume:1,issue:1,\"magazine-index-page\":1,\"magazine-index-latest-careers\":1,\"magazine-index-latest-news\":1,\"magazine-index-latest-research-analysis\":1,\"magazine-index-latest-opinion\":1,\"magazine-index-latest-books-culture\":1,collection:1,\"collection-info\":1,article:1,\nfigure:1,table:1,metrics:1,compound:1,scheme:1,contact:1};return a.hasOwnProperty(",["escape",["macro",5],8,16],")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",96],8,16],";return a\u0026\u0026(-1\u003Ca.indexOf(\"test-www\")||-1\u003Ca.indexOf(\"local-www\"))?\"\/\/recommended-qa.springernature.app\/latest\/generated\/entry-point.js\":\"\/\/recommended.springernature.com\/latest\/generated\/entry-point.js\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0!==",["escape",["macro",122],8,16],"(\"OptanonAlertBoxClosed\")})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],"||null})();"]
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
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",80],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",79],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",131],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",71],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",132],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",62],8,16],";var a=",["escape",["macro",5],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",132],8,16],",d=",["escape",["macro",134],8,16],",e=",["escape",["macro",135],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
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
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",83],8,16],",b=",["escape",["macro",85],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",70],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"nature\"===",["escape",["macro",120],8,16],"\u0026\u0026\"journal\"===",["escape",["macro",5],8,16],"})();"]
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
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",90],
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",91],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",92],
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",98],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
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
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
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
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":315
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",100],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"OneTrust Banner Visibility",
      "vtp_eventLabel":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":382
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-methods",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":391
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-references",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":400
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"10-seconds-reading-figures",
      "vtp_eventLabel":["template",["macro",104],"-",["macro",23]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":402
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Banner Accept Cookies",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":409
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Preferences Allow All",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":410
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Banner Open Preferences",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":411
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",90],
      "vtp_eventAction":"Preferences Save Settings",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":412
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",107],
      "tag_id":428
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",74,0]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":433
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",24],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",107],
      "tag_id":453
    },{
      "function":"__crto",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",110],
      "vtp_siteType":["macro",107],
      "tag_id":461
    },{
      "function":"__baut",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_tagId":"12000044",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":462
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":463
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":464
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":465
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":466
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":467
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":468
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":469
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"10482319_376",
      "tag_id":470
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_377",
      "tag_id":471
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"20000",
      "vtp_uniqueTriggerId":"10482319_378",
      "tag_id":472
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"30000",
      "vtp_uniqueTriggerId":"10482319_379",
      "tag_id":473
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_393",
      "tag_id":474
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section .c-article-section__figure",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_399",
      "tag_id":475
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_401",
      "tag_id":476
    },{
      "function":"__cl",
      "tag_id":477
    },{
      "function":"__cl",
      "tag_id":478
    },{
      "function":"__cl",
      "tag_id":479
    },{
      "function":"__cl",
      "tag_id":480
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_494_405","10482319_494_361"],
      "vtp_uniqueTriggerId":"10482319_494",
      "tag_id":481
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_405",
      "tag_id":482
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_361",
      "tag_id":484
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_495_361","10482319_495_406"],
      "vtp_uniqueTriggerId":"10482319_495",
      "tag_id":485
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_361",
      "tag_id":486
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_406",
      "tag_id":488
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_496_361","10482319_496_407"],
      "vtp_uniqueTriggerId":"10482319_496",
      "tag_id":489
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_361",
      "tag_id":490
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_407",
      "tag_id":492
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_497_361","10482319_497_408"],
      "vtp_uniqueTriggerId":"10482319_497",
      "tag_id":493
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_361",
      "tag_id":494
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_408",
      "tag_id":496
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(a){for(var b=[],e=0;a[e];++e)a[e].name\u0026\u0026b.push(a[e]);return b},translateMeta=function(a){var b={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return b[a]||a},getMeta=function(a){var b=filterMeta(document.getElementsByTagName(\"meta\")||[]),e=document.getElementsByTagName(\"body\")||[],g=function(){for(var f=b.length,c={},d;f--;)if(d=translateMeta(b[f].name))c[d]?(\"string\"===typeof c[d]\u0026\u0026(c[d]=[c[d]]),c[d].push(b[f].content)):\nc[d]=b[f].content||\"\";c.keywords\u0026\u0026(c.keywords=c.keywords.replace(\/,\/g,\";\"));a(c)};e.length?g():b.length\u0026\u0026g()};getMeta(function(a){window._pageMetaData=a});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var m=function(e,g,f,k){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,l=b.length;c\u003Cl;c++){for(var d=b[c];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(f);if(a)a=a.split(\":\");else if(100!=e)\"v\"==g\u0026\u0026(e=Math.random()\u003E=\ne\/100?0:100),a=[g,e,0],this.set(f,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(f,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=k+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},h=document.createElement(\"div\");h.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(h);try{var n=new m(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));n.start()}catch(e){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(g){if(g){var h={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},k=function(a){for(var b={},d=\/([^\u0026=]+)=?([^\u0026]*)\/g,e=a.substring(1);a=d.exec(e);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(g.search),l=function(a,b){var d=a.protocol+\"\/\/\"+a.hostname+a.pathname,e=[];for(c in b)b.hasOwnProperty(c)\u0026\u0026e.push(c+\"\\x3d\"+encodeURIComponent(b[c]));var c=\"?\"+e.join(\"\\x26\");d+=c;a.setAttribute(\"href\",\nd)},f;for(f in h)h.hasOwnProperty(f)\u0026\u0026(k[f]=h[f]);l(g,k)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(f){return function(){var g=Array.prototype.slice.call(arguments,0);b.q.push({functionName:f,arguments:g})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",23],8,16],"),title:clean(",["escape",["macro",60],8,16],"),type:clean(",["escape",["macro",5],8,16],",lower),keywords:clean(",["escape",["macro",54],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",10],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",114],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",5],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",20],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",68],8,16],"),accessType:clean(",["escape",["macro",88],8,16],",lower),authorizationStatus:bool(",["escape",["macro",35],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})};console.log(\"permutive model\",model);\n",["escape",["macro",115],8,16],"?(console.log(\"permutive optin\"),permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"})):(console.log(\"permutive optout\"),permutive.consent({opt_in:!1}));gaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);permutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"))},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:null});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar event=document.createEvent(\"Event\");event.initEvent(\"OneTrustGroupsUpdated\",!0,!0);document.dispatchEvent(event);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":360
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1229240860577415\");\nfbq(\"track\",\"PageView\");var segs=",["escape",["macro",80],8,16],";fbq(\"trackCustom\",\"SciRep_inMarket\",{t4fs93hlz:segs});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o3xnx\");twq(\"track\",\"PageView\");twq(\"init\",\"o43y9\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=",["escape",["macro",119],8,16],";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":440
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _hmt=_hmt||[];(function(){var a=document.createElement(\"script\");a.src=\"https:\/\/hm.baidu.com\/hm.js?485f8e597c8915da9aca0c37dca3f39f\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":441
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":444
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var k=[],d=\"\",g=[],l=b.split(\";\");for(b=0;b\u003Cl.length;++b){void 0!==n\u0026\u0026(d=n);var h=l[b].split(\"\\x3d\");var n=h[0];n!==d\u0026\u0026(0\u003Cd.length\u0026\u00260\u003Ck.length\u0026\u0026g.push([d,k]),k=[]);if(2===h.length\u0026\u0026\"\"!==h[0]\u0026\u0026\"\"!==h[1]){var q=h[1].split(\",\");for(h=0;h\u003Cq.length;++h)k.push(q[h])}}0\u003Cn.length\u0026\u00260\u003Ck.length\u0026\u0026g.push([n,k]);return g}\nfunction getScript(b,k){var d=document.createElement(\"script\"),g=document.getElementsByTagName(\"script\")[0];d.async=1;d.onload=d.onreadystatechange=function(l,h){if(h||!d.readyState||\/loaded|complete\/.test(d.readyState))d.onload=d.onreadystatechange=null,d=void 0,h||k\u0026\u0026k()};d.src=b;g.parentNode.insertBefore(d,g)}\nfunction splitSizes(b){var k=[];if(null!==b){var d=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Cd.length;++b){var g=d[b].split(\"x\");var l=parseInt(g[0],10);var h=parseInt(g[1],10);2===g.length\u0026\u0026!isNaN(l)\u0026\u0026!isNaN(h)\u0026\u00260\u003C=l\u0026\u00260\u003C=h\u0026\u0026k.push([l,h])}}return k}function hasClass(b,k){var d,g=b.className.split(\/\\s+\/);b=0;for(d=g.length;b\u003Cd;++b)if(g[b]===k)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,k=[],d=document.getElementsByTagName(\"div\");for(b=0;d[b];++b)hasClass(d[b],\"div-gpt-ad\")\u0026\u0026k.push(d[b]);return k}function debounce(b,k){var d=null,g=null;return function(){var l=this,h=+new Date,n=arguments;d\u0026\u0026h\u003Cd+k?(clearTimeout(g),g=setTimeout(function(){d=h;b.apply(l,n)},k)):(d=h,b.apply(l,n))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,k){var d=[],g,l=null;if(-1===b.location.search.indexOf(\"hide_ads\\x3dtrue\")\u0026\u0026serveAdsFor(b.location.pathname)){var h=function(a){var e=Math.max(k.clientHeight,b.innerHeight||0);return n(a,function(c){if(c.isOutOfPage||c.forceLoadOnInit)return!0;var f=document.getElementById(c.divId),m=f.getBoundingClientRect();m=m.top-300;m=e\u003Em;var p=null!==f.offsetParent;c=c.sizeArray\u0026\u0026c.sizeArray.length\u0026\u0026c.sizeArray[0].length\u0026\u00262===c.sizeArray[0][0];f=f.getAttribute(\"data-ad-type\")?-1===f.getAttribute(\"data-ad-type\").indexOf(\"top\"):\n!1;var t=770\u003Eb.innerWidth;return m\u0026\u0026p\u0026\u0026!1===t||c||m\u0026\u0026p\u0026\u0026t\u0026\u0026f})},n=function(a,e){for(var c=a.length,f=[];c--;)e(a[c],c)\u0026\u0026(f.push(a[c].slot),a.splice(c,1));f.length\u0026\u0026googletag.pubads().refresh(f);return a},q={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},y=function(){var a=b.dataLayer?",["escape",["macro",120],8,16],":null;if(a)return a;if(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=\nb.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var e=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:e},z=function(a){var e=\"\/270604982\";0!==a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a);0===a.indexOf(\"\/285\/\")\u0026\u0026(a=a.replace(\/^\\\/285\\\/[^\\\/]+\/,e+\"\/nature\/\"+y()));a=a.replace(\"\/nature\/laban\",\"\/laban\");a=a.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");\na=a.replace(\"\/collections\/collections\",\"\/collections\");a=a.replace(\"\/search\/search_results\",\"\/nature\/search\");a=a.replace(\/\\\/article$\/,\"\/articles\");a=a.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(a=a.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026(a+=\"\/homepage\"));window.dataLayer\u0026\u0026q[",["escape",["macro",10],8,16],"]\u0026\u0026(a=a.replace(\/\\\/articles$\/,\n\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var c=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(b.location.search)||[\"\",\"\"])[1];if(q[c.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){c=!0;break a}}c=!1}c\u0026\u0026(a=a.replace(\/\\\/article-list$\/,\"\/naturecareers\"));(c=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===c.getAttribute(\"content\")\u0026\u0026(a=e+\"\/nature\/brandedcontent\");return a},A=function(a){for(var e={},c=0;a[c];++c){var f=a[c].size;var m=\"2x2\"===a[c].size?window.dataLayer\u0026\u0026\n\"core media\"===",["escape",["macro",56],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;e[f]={count:m,name:a[c].name}}return e}([{size:\"728x90\",name:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),r=function(a,e,c,f){for(var m=!1,p=0;a[p];++p)a[p][0]===e\u0026\u0026null!==c\u0026\u0026(a[p][1]=f?a[p][1].concat(c):[c],m=!0);m||null===c||a.push([e,[c]]);return a},\nu=function(a,e,c){for(var f=0;a[f];++f)a[f][0]===e\u0026\u0026(a[f][0]=c);return a},B=function(a,e){var c=a;var f=-1!==b.location.search.indexOf(\"test\\x3dads\")?\";adtype\\x3dtest\":\"\";c=c.getAttribute(\"data-gpt-targeting\");f\u0026\u0026-1===c.indexOf(f)\u0026\u0026(c+=f);(f=",["escape",["macro",68],8,16],")\u0026\u0026(c+=\";bpid\\x3d\"+f.replace(\/;\/g,\",\"));0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026(f=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(c+=\";sponsored\\x3d\"+f.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\n\"\"));c=u(splitKeys(c),\"artid\",\"articleid\");c=u(c,\"kw\",\"search\");a=a.getAttribute(\"data-gpt-sizes\");a=(a=A[a])?a.name+ ++a.count:null;a=r(c,\"pos\",a);e=r(a,\"tile\",e+1);a=b.location.pathname.split(\"\/\");a=3===a.length\u0026\u0026\"subjects\"===a[1]?a[2]:null;e=r(e,\"subject\",a);e=r(e,\"article\",window.dataLayer\u0026\u0026q[",["escape",["macro",10],8,16],"]?\"naturecareers\":null);a=window.dataLayer?",["escape",["macro",78],8,16],":null;e=r(e,\"collectionID\",a);return e=r(e,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",56],8,16],"?\"fronthalf\":null,\n!0)},v=function(a){for(var e=[],c=0;a[c];++c){var f=a[c];e.push({divId:f.getAttribute(\"id\"),adUnitPath:z(f.getAttribute(\"data-gpt-unitpath\")),sizeArray:splitSizes(f.getAttribute(\"data-gpt-sizes\")),targeting:B(f,c),isOutOfPage:hasClass(f,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return e},w=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(",["escape",["macro",121],8,16],"?0:1);googletag.pubads().disableInitialLoad();googletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",\nfunction(e){var c=e.slot\u0026\u0026e.slot.getSlotElementId?e.slot.getSlotElementId():null,f;a[c]=!e.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(f=document.querySelector(\".c-paid-content\"))\u0026\u0026f.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===c\u0026\u0026!1===e.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.add(\"pb40\"),f.parentNode.parentNode.classList.remove(\"pb20\"),f.parentNode.parentNode.classList.remove(\"hide\"));c\u0026\u0026e.isEmpty\u0026\u0026(f=document.getElementById(c),f.parentNode.parentNode.classList.remove(\"pb20\"),\nf.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;d[a];++a)try{d[a].slot=d[a].isOutOfPage?googletag.defineOutOfPageSlot(d[a].adUnitPath,d[a].divId).addService(googletag.pubads()):googletag.defineSlot(d[a].adUnitPath,d[a].sizeArray,d[a].divId).addService(googletag.pubads());for(var e=0,c=d[a].targeting.length;e\u003Cc;++e)if(2===d[a].targeting[e].length\u0026\u0026\"\"!==d[a].targeting[e][0]\u0026\u0026\"\"!==d[a].targeting[e][1]){if(\"pos\"===d[a].targeting[e][0]\u0026\u00260===d[a].targeting[e][1][0].indexOf(\"BB\")){g=\nd[a].slot;var f=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();g.defineSizeMapping(f);g.setCollapseEmptyDiv(!0,!1)}d[a].slot.setTargeting(d[a].targeting[e][0],d[a].targeting[e][1])}}catch(m){console.log(\"failed to create slot for\",d[a])}});googletag.cmd.push(function(){for(var a=0;d[a];++a)googletag.display(d[a].divId)})},x=function(){l\u0026\u0026removeScrollEvent(l);googletag.cmd.push(function(){d=h(d)});l=debounce(function(){googletag.cmd.push(function(){d=\nh(d);d.length||(removeScrollEvent(l),l=null)})},250);addScrollEvent(l)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];d=v(getAdContainers());w();x();var a=969\u003Cb.innerWidth,e=769\u003Cb.innerWidth\u0026\u0026!a,c=770\u003Eb.innerWidth,f=debounce(function(){var m=b.innerWidth;970\u003C=m\u0026\u0026!a?(a=!0,c=e=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):770\u003Em\u0026\u0026!c?(e=a=!1,c=!0,googletag.cmd.push(function(){googletag.pubads().refresh([g])})):\n970\u003Em\u0026\u0026769\u003Cm\u0026\u0026!e\u0026\u0026(a=!1,e=!0,c=!1,googletag.cmd.push(function(){googletag.pubads().refresh([g])}))},250);addResizeEvent(f);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();d=v(getAdContainers());w();x()},!1)})}}-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement):document.addEventListener(\"load\",function(){initAds(window,document.documentElement)}));\ndocument.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement)},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":451
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",75,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b)},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":454
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",73,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":456
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "teardown_tags":["list",["tag",73,2]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":460
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null};window.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:getClientId()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",76,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",79],8,16],",kruxSegment:",["escape",["macro",80],8,16],",journalTitle:",["escape",["macro",22],8,16],",pageType:",["escape",["macro",7],8,16],",template:",["escape",["macro",62],8,16],",contentType:",["escape",["macro",124],8,16],",doi:",["escape",["macro",23],8,16],",abTestValue:",["escape",["macro",73],8,16],",authorization:",["escape",["macro",125],8,16],",bpid:",["escape",["macro",69],8,16],",primaryArticleType:",["escape",["macro",53],8,16],",referrer:",["escape",["macro",126],8,16],",openAcces:",["escape",["macro",127],8,16],",GAclientId:",["escape",["macro",128],8,16],",usabillaSurvey:",["escape",["macro",129],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",72,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",71],8,16],";var isObject=",["escape",["macro",130],8,16],";var map=",["escape",["macro",72],8,16],";var closestByAttribute=",["escape",["macro",132],8,16],";var closest=",["escape",["macro",131],8,16],";var enforceDataType=",["escape",["macro",133],8,16],";var normaliseAnd=",["escape",["macro",8],8,16],";var normaliseWhitespace=",["escape",["macro",9],8,16],";var formatDate=",["escape",["macro",25],8,16],";var createEventPayload=",["escape",["macro",134],8,16],";var sendEvent=",["escape",["macro",135],8,16],";var eventHandler=",["escape",["macro",136],8,16],";var setupTracking=\nfunction(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);if(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=\ndocument.querySelectorAll('[data-track\\x3d\"in-view\"]');if(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var c=function(d,b){b=b||{};var e=document.createEvent(\"CustomEvent\");e.initCustomEvent(d,b.bubbles||!1,b.cancelable||!1,b.detail||a);return e};c.prototype=window.Event.prototype;window.CustomEvent=c})();var parse=function(a,c){try{return 200===a?JSON.parse(c):null}catch(d){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0002,"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",96],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep\/"
    },{
      "function":"_eq",
      "arg0":["macro",97],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_376($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_377($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_378($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_379($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"experimental|material|(meth\\w+\\b)|procedure",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_393($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"references|related links",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_401($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_399($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_494($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_495($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_496($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_497($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0009,"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"update-access-details"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",109],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#onetrust-accept-btn-handler"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#accept-recommended-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#onetrust-pc-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",111],
      "arg1":"#save-preference-btn-handler"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"press.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",113],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0008,"
    },{
      "function":"_eq",
      "arg0":["macro",116],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"CN"
    },{
      "function":"_eq",
      "arg0":["macro",118],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^((?!.*(press)).*\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\"^\/(nature_education|scitable|principles|search|subjects)(\/|$)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0003,"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",85],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",123],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",62],
      "arg1":"bav"
    }],
  "rules":[
    [["if",0,1,2,3],["add",2]],
    [["if",6],["add",3]],
    [["if",7,8],["add",4]],
    [["if",9,10,11],["add",1]],
    [["if",11,12],["add",1]],
    [["if",11,13],["add",1]],
    [["if",14,15,16],["add",5]],
    [["if",15,17,18],["add",5]],
    [["if",2,19,20],["add",6]],
    [["if",2,21,22],["add",7]],
    [["if",2,23,24],["add",8]],
    [["if",25,26],["add",9]],
    [["if",25,27],["add",9]],
    [["if",25,28],["add",9]],
    [["if",25,29],["add",9]],
    [["if",25,30,31],["add",10]],
    [["if",25,32,33],["add",11]],
    [["if",25,34],["add",12]],
    [["if",35,36],["add",13]],
    [["if",35,37],["add",14]],
    [["if",35,38],["add",15]],
    [["if",35,39],["add",16]],
    [["if",40,41],["add",17]],
    [["if",43],["add",18]],
    [["if",41,44],["add",18]],
    [["if",41,45],["add",19]],
    [["if",41,46],["add",20]],
    [["if",41],["add",21,42,44,47,50,60,61,63,66,69]],
    [["if",11],["add",22,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,43,46,49,0,53]],
    [["if",11,48],["unless",47],["add",23]],
    [["if",49],["add",24,25]],
    [["if",50,51],["add",41]],
    [["if",51,52],["add",45]],
    [["if",51,53],["add",48]],
    [["if",51,54],["add",51]],
    [["if",55,56],["add",52]],
    [["if",56,57,58,59],["add",54]],
    [["if",11],["unless",60,61],["add",55]],
    [["if",56,62],["add",56]],
    [["if",56,63],["add",56]],
    [["if",56,64],["add",56]],
    [["if",68],["unless",65,66,67],["add",57]],
    [["if",11,48,70,71],["unless",47,72],["add",58]],
    [["if",5],["unless",4],["add",59],["block",2,4,5,6,7,8,9,10,11,12,13,14,15,16,18,66]],
    [["if",5],["unless",69],["add",62],["block",57,61,68,70,71]],
    [["if",41,73],["add",64]],
    [["if",41,74],["unless",75],["add",65]],
    [["if",41,77],["add",67,68]],
    [["if",41,78],["add",67,68]],
    [["if",41,79],["add",68]],
    [["if",41,80],["add",68]],
    [["if",41,81],["add",68]],
    [["if",41,82],["add",68]],
    [["if",41,83],["add",68]],
    [["if",41,84],["add",68]],
    [["if",41,85],["add",68]],
    [["if",41,86],["add",68]],
    [["if",41,87],["add",68]],
    [["if",41,88],["add",68]],
    [["if",41,89],["add",68]],
    [["if",41,90],["unless",60,91],["add",70]],
    [["if",41],["unless",60,61,93],["add",71]],
    [["if",5],["unless",42],["block",17,19,20,21,63,64,67]],
    [["if",5],["unless",76],["block",65]],
    [["if",5,92],["block",70,71]]]
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
var aa,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Bg:!0},ja={};try{ja.__proto__=ia;ha=ja.Bg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ri=b.prototype},ma=this||self,qa=function(a){if(a&&a!=ma)return oa(a.document);null===pa&&(pa=oa(ma.document));return pa},ra=/^[\w+/_-]+[=]{0,2}$/,pa=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ra.test(c))return c}return""},ua=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},xa=function(a,b){function c(){}c.prototype=b.prototype;a.ri=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ki=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},ya=function(a){return a};var za=function(a,b){this.a=a;this.i=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.B={};this.m=!1;this.F={}};Ba.prototype.get=function(a){return this.B["dust."+a]};Ba.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Ba.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ca=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Ba;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else Aa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():Aa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.Bc=function(){for(var a=Ca(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Da=function(a,b){if(Aa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return Aa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].sc+g>b[f].max)throw Error("Quota exceeded");b[f].sc+=g}}var b={},c=void 0,d=void 0,e={Rh:function(f){c=f},df:function(){c&&a(c,1)},Th:function(f){d=f},La:function(f){d&&a(d,f)},mi:function(f,g){b[f]=b[f]||{sc:0};b[f].max=g},rh:function(f){return b[f]&&b[f].sc||0},reset:function(){b={}},Zg:a};e.onFnConsume=e.Rh;e.consumeFn=e.df;e.onStorageConsume=e.Th;e.consumeStorage=e.La;e.setMax=e.mi;e.getConsumed=e.rh;e.reset=e.reset;e.consume=e.Zg;return e};var Fa=function(a,b){this.F=a;this.R=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Ba;this.a=this.B=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.i.m)if(a.F.La(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Fa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.La(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Fa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Fa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ha=function(a){var b=new Fa(a.F,a);a.B&&(b.B=a.B);b.R=a.R;b.a=a.a;return b};var Ia=function(){},Ja=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&La(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!Ka(a)||
!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ra=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ta=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Wa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Xa=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ya=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Za=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var $a=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ab=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},cb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},db=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},eb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},gb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Na(b,d))return}return d},
hb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ib=function(a){var b=[];Sa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var jb=function(a,b){Ba.call(this);this.a=a;this.R=b};la(jb,Ba);jb.prototype.toString=function(){return this.a};jb.prototype.Bc=function(){return new k(Ca(this))};jb.prototype.i=function(a,b){a.F.df();return this.R.apply(mb(this,a),Array.prototype.slice.call(arguments,1))};var mb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return La(d)?nb(e,d):d};c.prototype.F=function(d){return ob(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
jb.prototype.Pa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ob=function(a,b){for(var c,d=0;d<b.length&&!(c=nb(a,b[d]),c instanceof za);d++);return c},nb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof jb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var pb=function(){Ba.call(this)};la(pb,Ba);pb.prototype.Bc=function(){return new k(Ca(this))};var qb={control:function(a,b){return new za(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().La(a.length+f.length);return new jb(a,function(){return function(g){var h=Ha(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof za)return l[n];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=ob(h,f);if(t instanceof za)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.La(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.La(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new pb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.La(g);c.set(e,f)}return c},undefined:function(){}};var rb=function(){this.m=Ea();this.a=new Fa(this.m)},sb=function(a,b,c){var d=new jb(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.yc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=nb(this.a,arguments[c]);return b};rb.prototype.B=function(a,b){var c=Ha(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=nb(c,arguments[e]);return d};var tb=function(a){if(a instanceof tb)return a;this.qa=a};tb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ub=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,vb=function(a){if(null==a)return String(a);var b=ub.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},wb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},xb=function(a){if(!a||"object"!=vb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!wb(a,"constructor")&&!wb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||wb(a,b)},E=function(a,b){var c=b||("array"==vb(a)?[]:{}),d;for(d in a)if(wb(a,d)){var e=a[d];"array"==vb(e)?("array"!=vb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):xb(e)?(xb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Ab=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=Ca(h),p=0;p<n.length;p++)l[n[p]]=g(h.get(n[p]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var p=h.Bc(),q=0;q<p.length();q++)n[p.get(q)]=g(h.get(p.get(q)));return n}if(h instanceof pb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof jb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=zb(u[v],b,!!c);var x=b?b.F:Ea(),y=new Fa(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},zb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(La(h)||Ta(h)){var n=new k([]);d.push(h);e.push(n);for(var p in h)h.hasOwnProperty(p)&&n.set(p,g(h[p]));return n}if(xb(h)){var q=new pb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new jb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Ab(this.a(v[x]),b,!!c);return g((0,this.m.R)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Bb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Cb=function(a){if(void 0===a||La(a)||xb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Db={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Bb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Da(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Bb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Da(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Eb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Fb=new za("break"),Gb=new za("continue"),Hb=function(a,b){return this.a(a)+this.a(b)},Ib=function(a,b){return this.a(a)&&this.a(b)},Jb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Eb,b))return zb(a[b].apply(a,Bb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof jb){var e=Bb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Db.supportedMethods,b)){var f=Bb(c);
f.unshift(this.m);return Db[b].apply(a,f)}}if(a instanceof jb||a instanceof pb){if(a.has(b)){var g=a.get(b);if(g instanceof jb){var h=Bb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof jb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Bb(c))}if(a instanceof tb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Kb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Lb=function(a){var b=Ha(this.m),c=ob(b,Array.prototype.slice.apply(arguments));if(c instanceof za)return c},Mb=function(){return Fb},Nb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof za)return d}},Ob=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ga(b,d,e,
!0)}}},Pb=function(){return Gb},Qb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Rb=function(a,b){return this.a(a)/this.a(b)},Sb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof tb,d=b instanceof tb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Tb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ub(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ob(f,d);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}}}function Vb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(f){return f},c);if(b instanceof pb||b instanceof k||b instanceof jb){var d=b.Bc(),e=d.length();return Ub(a,function(){return e},function(f){return d.get(f)},c)}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},$b=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){d.set(a,e);return d},b,c)},ac=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},bc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function Zb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return Ub(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var cc=function(a,b,c,d){function e(p,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,p.get(r))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ha(g);for(e(g,h);nb(h,b);){var l=ob(h,d);if(l instanceof za){if("break"===l.a)break;if("return"===l.a)return l}var n=Ha(g);e(h,n);nb(n,c);h=n}},dc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},ec=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof pb||a instanceof k||a instanceof jb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof tb)return;return c},gc=function(a,b){return this.a(a)>this.a(b)},
hc=function(a,b){return this.a(a)>=this.a(b)},ic=function(a,b){a=this.a(a);b=this.a(b);a instanceof tb&&(a=a.qa);b instanceof tb&&(b=b.qa);return a===b},jc=function(a,b){return!ic.call(this,a,b)},kc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof za)return e},mc=function(a,b){return this.a(a)<this.a(b)},nc=function(a,b){return this.a(a)<=this.a(b)},oc=function(a,b){return this.a(a)%this.a(b)},pc=function(a,b){return this.a(a)*this.a(b)},qc=function(a){return-this.a(a)},
rc=function(a){return!this.a(a)},sc=function(a,b){return!Sb.call(this,a,b)},tc=function(){return null},uc=function(a,b){return this.a(a)||this.a(b)},vc=function(a,b){var c=this.a(a);this.a(b);return c},wc=function(a){return this.a(a)},xc=function(a){return Array.prototype.slice.apply(arguments)},yc=function(a){return new za("return",this.a(a))},zc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof jb||
a instanceof k||a instanceof pb)&&a.set(b,c);return c},Ac=function(a,b){return this.a(a)-this.a(b)},Bc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof za){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof za&&("return"===f.a||"continue"===
f.a)))return f},Dc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Ec=function(a){a=this.a(a);return a instanceof jb?"function":typeof a},Fc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Gc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof za){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Hc=function(a){return~Number(this.a(a))},Ic=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Jc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Lc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Mc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Nc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Oc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Qc=function(){this.a=new rb;Pc(this)};Qc.prototype.yc=function(a){return Rc(this.a.i(a))};
var Tc=function(a,b){return Rc(Sc.a.B(a,b))},Pc=function(a){var b=function(d,e){var f=a.a,g=String(e);qb.hasOwnProperty(d)&&sb(f,g||d,qb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){sb(a.a,String(d),e)};c(0,Hb);c(1,Ib);c(2,Jb);c(3,Kb);c(53,Lb);c(4,Mb);c(5,Nb);c(52,Ob);c(6,Pb);c(9,Nb);c(50,Qb);c(10,Rb);c(12,Sb);c(13,Tb);c(47,Wb);c(54,Xb);c(55,Yb);c(63,cc);c(64,$b);c(65,ac);c(66,bc);c(15,dc);c(16,ec);c(17,ec);c(18,gc);c(19,hc);c(20,ic);c(21,jc);c(22,kc);
c(23,mc);c(24,nc);c(25,oc);c(26,pc);c(27,qc);c(28,rc);c(29,sc);c(45,tc);c(30,uc);c(32,vc);c(33,vc);c(34,wc);c(35,wc);c(46,xc);c(36,yc);c(43,zc);c(37,Ac);c(38,Bc);c(39,Dc);c(40,Ec);c(41,Fc);c(42,Gc);c(58,Hc);c(57,Ic);c(60,Jc);c(61,Lc);c(56,Mc);c(62,Nc);c(59,Oc)},Vc=function(){var a=Sc,b=Uc();sb(a.a,"require",b)},Wc=function(a,b){a.a.a.R=b};
function Rc(a){if(a instanceof za||a instanceof jb||a instanceof k||a instanceof pb||a instanceof tb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Xc=[],Yc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Zc=function(a){return Yc[a]},$c=/[\x00\x22\x26\x27\x3c\x3e]/g;var dd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ed={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},fd=function(a){return ed[a]};
Xc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(dd,fd)+"'"}};var pd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,qd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},rd=function(a){return qd[a]};Xc[16]=function(a){return a};var td;
var ud=[],vd=[],wd=[],xd=[],yd=[],zd={},Ad,Bd,Cd,Dd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ed=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=zd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.af&&b.af(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):td(c,e,b)},Gd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Fd(a[e],b,c));return d},Hd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=zd[b];return c?c.priorityOverride||0:0},Fd=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ud[f];if(!g||b.yd(g))return;c[f]=!0;try{var h=Gd(g,b,c);h.vtp_gtmEventId=b.id;d=Ed(h,b);Cd&&(d=Cd.ah(d,h))}catch(y){b.rf&&b.rf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fd(a[l],b,c)]=Fd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Fd(a[p],b,c);Bd&&(n=n||q===Bd.ic);d.push(q)}return Bd&&n?Bd.eh(d):d.join("");case "escape":d=Fd(a[1],b,c);if(Bd&&La(a[1])&&"macro"===a[1][0]&&Bd.Dh(a))return Bd.Yh(d);d=String(d);for(var t=2;t<a.length;t++)Xc[a[t]]&&(d=Xc[a[t]](d));return d;case "tag":var r=a[1];if(!xd[r])throw Error("Unable to resolve tag reference "+r+".");return d=
{hf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Id(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Id=function(a,b,c){try{return Ad(Gd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jd=function(){var a=function(b){return{toString:function(){return b}}};return{Gf:a("consent"),Xd:a("convert_case_to"),Yd:a("convert_false_to"),Zd:a("convert_null_to"),$d:a("convert_true_to"),ae:a("convert_undefined_to"),Ci:a("debug_mode_metadata"),Ka:a("function"),rg:a("instance_name"),sg:a("live_only"),ug:a("malware_disabled"),vg:a("metadata"),Fi:a("original_vendor_template_id"),yg:a("once_per_event"),Re:a("once_per_load"),Ve:a("setup_tags"),We:a("tag_id"),Xe:a("teardown_tags")}}();var Kd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Kd,Error);function Ld(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ld(a[c],b[c])}};var Md=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Md,Error);var Nd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Pd=function(){return function(a,b){a instanceof Md||(a=new Md(a,Od));b&&a.a.push(b);throw a;}};function Od(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Qd=null,Td=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];Qd=Rd(a);for(var e=0;e<vd.length;e++){var f=vd[e],g=Sd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],p=0;p<xd.length;p++)c[p]&&!d[p]&&(n[p]=!0);return n},Sd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Qd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Qd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Rd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Id(wd[c],a));return b[c]}};var Ud={ah:function(a,b){b[Jd.Xd]&&"string"===typeof a&&(a=1==b[Jd.Xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jd.Zd)&&null===a&&(a=b[Jd.Zd]);b.hasOwnProperty(Jd.ae)&&void 0===a&&(a=b[Jd.ae]);b.hasOwnProperty(Jd.$d)&&!0===a&&(a=b[Jd.$d]);b.hasOwnProperty(Jd.Yd)&&!1===a&&(a=b[Jd.Yd]);return a}};var Vd=function(){this.a={}};function Wd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Kd(c,d,g);}}function Xd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Wd(e,b,d,g);Wd(f,b,d,g)}}}};var ae=function(a){var b=Yd.C,c=this;this.i=new Vd;this.a={};var d={},e=Xd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Sa(a,function(f,g){var h={};Sa(g,function(l,n){var p=Zd(l,n);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,n){var p=h[l];if(!p)throw $d(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ce=function(a){return be.a[a]||
function(){}};function Zd(a,b){var c=Dd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=$d;try{return Ed(c)}catch(d){return{assert:function(e){throw new Kd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function $d(a,b,c){return new Kd(a,b,c)};var de=!1;var ee={};ee.xi=Wa('');ee.kh=Wa('');var fe=de,ge=ee.kh,he=ee.xi;
var we=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},xe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;we(b,"/*")&&(b=b.slice(0,-2));we(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ye=/^[a-z0-9-]+$/i,ze=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Be=function(a,b){var c;if(!(c=!Ae(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ye.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!ze.exec(n))throw Error("Invalid Wildcard");var p=n.slice(8),q=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=xe(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Ae=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Ce,De=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var n in b)b.hasOwnProperty(n)&&(l.Og&&(l["fix_"+n]=!0),l.kf=l.kf||l["fix_"+n]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,Y:r.Y,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,x,y,w,z){var A=y||w||z||f.test(x)&&x||null,C=document.createElement("div");C.innerHTML=A;u[x]=C.textContent||C.innerText||A});return{tagName:r[1],Y:u,Nc:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in p)if(p[r].test(h)){var u=q[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.kf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.qf=function(){return this[this.length-1]};v.Ad=function(C){var D=this.qf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.$g=
function(C){for(var D=0,F;F=this[D];D++)if(F.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Nc=r.test(C.tagName)||C.Nc);return C},y=t,w=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Ad("TABLE")?(h="<TBODY>"+h,A()):l.Pi&&u.test(D)&&v.$g(D)?v.Ad(D)?w():(h="</"+C.tagName+">"+h,A()):C.Nc||v.push(C)},endTag:function(C){v.qf()?l.mh&&!v.Ad(C.tagName)?w():v.pop():l.mh&&(y(),A())}},A=function(){var C=h,D=x(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return x(y())}}();return{append:function(r){h+=r},ci:t,Ti:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},Ui:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Wi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Vi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Ce=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,r){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(r,q[u],u)}function d(q,t,r){for(var u in q)q.hasOwnProperty(u)&&t.call(r,u,q[u])}function e(q,t){d(t,
function(r,u){q[r]=u});return q}function f(q,t){q=q||{};d(t,function(r,u){b(q[r])||(q[r]=u)});return q}function g(q){try{return n.call(q)}catch(r){var t=[];c(q,function(u){t.push(u)});return t}}var h={Fg:a,Gg:a,Hg:a,Ig:a,Pg:a,Qg:function(q){return q},done:a,error:function(q){throw q;},fi:!1},l=this;if(!l.postscribe){var n=Array.prototype.slice,p=function(){function q(r,u,v){var x="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(x,v):
r.removeAttribute(x)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,Ub:v.defaultView||v.parentWindow,cb:v,Ec:Ce("",{Og:!0}),nd:[r],Kd:"",Ld:v.createElement(r.nodeName),Rb:[],Sa:[]});q(this.Ld,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Sa,arguments);for(var r;!this.vc&&this.Sa.length;)r=this.Sa.shift(),"function"===typeof r?this.Vg(r):this.Ud(r)};t.prototype.Vg=function(r){var u={type:"function",value:r.name||r.toString()};this.Fd(u);r.call(this.Ub,this.cb);this.sf(u)};
t.prototype.Ud=function(r){this.Ec.append(r);for(var u,v=[],x,y;(u=this.Ec.ci())&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Ai(v);x&&this.wh(u);y&&this.xh(u)};t.prototype.Ai=function(r){var u=this.Sg(r);u.Ze&&(u.wd=this.Kd+u.Ze,this.Kd+=u.ai,this.Ld.innerHTML=u.wd,this.yi())};t.prototype.Sg=function(r){var u=this.nd.length,v=[],x=[],y=[];c(r,function(w){v.push(w.text);if(w.Y){if(!/^noscript$/i.test(w.tagName)){var z=
u++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==w.Y.id&&"ps-style"!==w.Y.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+z+(w.Nc?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Xi:r,raw:v.join(""),Ze:x.join(""),ai:y.join("")}};t.prototype.yi=function(){for(var r,u=[this.Ld];b(r=u.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.nd[q(r,"id")]=r,q(r,"id",null));var x=r.parentNode&&q(r.parentNode,"proxyof");
x&&this.nd[x].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.wh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.src=r.Y.src||r.Y.Hi;r.src&&this.Rb.length?this.vc=r:this.Fd(r);var v=this;this.zi(r,function(){v.sf(r)})};t.prototype.xh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.type=r.Y.type||r.Y.TYPE||"text/css";this.Bi(r);u&&this.write()};t.prototype.Bi=function(r){var u=this.Ug(r);this.Ah(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.cb.createTextNode(r.content)))};t.prototype.Ug=function(r){var u=this.cb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.Y,function(v,x){u.setAttribute(v,x)});return u};t.prototype.Ah=function(r){this.Ud('<span id="ps-style"/>');var u=this.cb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.Fd=function(r){r.Uh=this.Sa;this.Sa=[];this.Rb.unshift(r)};t.prototype.sf=function(r){r!==this.Rb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Rb.shift(),this.write.apply(this,r.Uh),!this.Rb.length&&this.vc&&(this.Fd(this.vc),this.vc=null))};t.prototype.zi=function(r,u){var v=this.Tg(r),x=this.oi(v),y=this.options.Fg;r.src&&(v.src=r.src,this.ji(v,x?y:function(){u();y()}));try{this.zh(v),r.src&&!x||u()}catch(w){this.options.error(w),u()}};t.prototype.Tg=function(r){var u=this.cb.createElement(r.tagName);d(r.Y,function(v,x){u.setAttribute(v,x)});r.content&&(u.text=r.content);return u};t.prototype.zh=function(r){this.Ud('<span id="ps-script"/>');
var u=this.cb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.ji=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var x=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();x(y);u()}})};t.prototype.oi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.fi&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var x=u.shift(),y;x&&(y=x[x.length-1],y.Gg(),x.stream=t.apply(null,x),y.Hg())}function t(x,y,w){function z(F){F=w.Qg(F);v.write(F);w.Ig(F)}v=new p(x,w);v.id=r++;v.name=w.name||v.id;var A=x.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.Ub.onerror||a;v.Ub.onerror=function(F,M,Q){w.error({msg:F+
" - "+M+":"+Q});D.apply(v.Ub,arguments)};v.write(y,function(){e(A,C);v.Ub.onerror=D;w.done();v=null;q()});return v}var r=0,u=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=f(w,h);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Ri?x[0]:x;var z=[x,y,w];x.Xh={cancel:function(){z.stream?z.stream.abort():z[1]=a}};w.Pg(z);u.push(z);v||q();return x.Xh},{streams:{},Si:u,Ji:p})}();De=l.postscribe}})();var Ee=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Fe={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ee.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof jb?p="Fn":l instanceof k?p="List":l instanceof pb?p="DustMap":
l instanceof tb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Fe[h]||h)+".");}}};function Ge(a){return""+a}
function He(a,b){var c=[];return c};var Ie=function(a,b){var c=new jb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Je=function(a,b){var c=new pb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Ie(a+"_"+d,e)):(Ka(e)||m(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ke=function(a,b){G(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertApiSubject",c)};var Le=function(a,b){G(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertThatSubject",c)};function Me(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(Ab(arguments[d],c));return zb(a.apply(null,b))}}var Oe=function(){for(var a=Math,b=Ne,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Me(a[e].bind(a)))}return c};var Pe=function(a){var b;return b};var Qe=function(a){var b;return b};var Re=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Se=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Te=function(a){G(this.i.a,["message:?string"],arguments);};var Ue=function(a,b){G(this.i.a,["min:!number","max:!number"],arguments);return Pa(a,b)};var Ve=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Ng.apply(null,Array.prototype.slice.call(arguments,1))};var We=function(){Ve(this,"read_container_data");var a=new pb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'206');a.set("environmentName",'');a.set("debugMode",fe);a.set("previewMode",he);a.set("environmentMode",ge);a.m=!0;return a};var Xe=function(){return(new Date).getTime()};var Ye=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof jb)return"function";if(a instanceof tb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Ze=function(a){function b(c){return function(d){try{return c(d)}catch(e){(fe||he)&&a.call(this,e.message)}}}return{parse:b(function(c){return zb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Ab(c))})}};var $e=function(a){return Va(Ab(a,this.m))};var af=function(a){return Number(Ab(a,this.m))};var bf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var cf=function(a,b,c){var d=null,e=!1;return e?d:null};var Ne="floor ceil round max min abs pow sqrt".split(" ");var df=function(){var a={};return{sh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ni:function(b,c){a[b]=c},reset:function(){a={}}}},ef=function(a,b){G(this.i.a,["apiName:!string","mock:?*"],arguments);};var ff=function(){this.a={};this.i={}};ff.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
ff.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ja(b)?Ie(a,b):Je(a,b)};
var gf=function(a,b,c){if(a.i.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.a.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.i[b]=Ja(c)?Ie(b,c):Je(b,c)};function hf(){var a={};return a};var H={Ab:"_ee",ld:"_syn",Ii:"_uei",Gi:"_pci",Tc:"event_callback",bc:"event_timeout",fa:"gtag.config"};H.Ga="gtag.get";H.wa="purchase";H.nb="refund";H.Wa="begin_checkout";H.lb="add_to_cart";H.mb="remove_from_cart";H.Pf="view_cart";H.fe="add_to_wishlist";H.Fa="view_item";H.ee="view_promotion";H.de="select_promotion";H.ce="select_item";H.Yb="view_item_list";H.be="add_payment_info";H.Of="add_shipping_info";
H.za="value_key",H.ya="value_callback";H.ia="allow_ad_personalization_signals";H.bd="restricted_data_processing";H.ob="allow_google_signals";H.ja="cookie_expires";H.ac="cookie_update";H.xb="session_duration";H.na="user_properties";H.Ja="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.M="analytics_storage";H.Hf="region";H.If="wait_for_update";H.Ie=[H.wa,H.nb,H.Wa,H.lb,H.mb,H.Pf,H.fe,H.Fa,H.ee,H.de,H.Yb,H.ce,H.be,H.Of];H.He=[H.ia,H.ob,H.ac];H.Je=[H.ja,H.bc,H.xb];var jf={},kf=function(a,b){jf[a]=jf[a]||[];jf[a][b]=!0},lf=function(a){for(var b=[],c=jf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){kf("GTM",a)};function mf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,mf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}xa(mf,Error);mf.prototype.name="CustomError";var nf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");mf.call(this,d+c[e])};xa(nf,mf);nf.prototype.name="AssertionError";var of=function(a,b){throw new nf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var pf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},qf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var rf,sf=function(){if(void 0===rf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ya,createScript:ya,createScriptURL:ya})}catch(c){ma.console&&ma.console.error(c.message)}rf=a}else rf=a}return rf};var uf=function(a,b){this.a=b===tf?a:""};uf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var tf={};var vf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var wf;a:{var xf=ma.navigator;if(xf){var yf=xf.userAgent;if(yf){wf=yf;break a}}wf=""}var zf=function(a){return-1!=wf.indexOf(a)};var Bf=function(a,b,c){this.a=c===Af?a:""};Bf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Cf=function(a){if(a instanceof Bf&&a.constructor===Bf)return a.a;of("expected object of type SafeHtml, got '"+a+"' of type "+ua(a));return"type_error:SafeHtml"},Af={},Ef=new Bf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Af);var Ff={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Gf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Cf(Ef);return!c.parentElement}),Hf=function(a,b){if(a.tagName&&Ff[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Gf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Cf(b)};var If=function(a){var b=sf(),c=b?b.createHTML(a):a;return new Bf(c,null,Af)};var B=window,L=document,Jf=navigator,Kf=L.currentScript&&L.currentScript.src,Lf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Mf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Nf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=sf(),g=f?f.createScriptURL(a):a;e=new uf(g,tf);var h;a:{try{var l=d&&d.ownerDocument,n=l&&(l.defaultView||l.parentWindow);
n=n||ma;if(n.Element&&n.Location){h=n;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var q=typeof d;if("object"==q&&null!=d||"function"==q)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;of("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof uf&&e.constructor===uf?t=e.a:(of("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ua(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=qa(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);Mf(d,b);c&&(d.onerror=c);var u=qa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Of=function(){if(Kf){var a=Kf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Pf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Mf(c,b);void 0!==a&&(c.src=a);return c},Qf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Rf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Sf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},Tf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Uf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Vf=function(a){var b=L.createElement("div");Hf(b,If("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Xf=function(a){Jf.sendBeacon&&Jf.sendBeacon(a)||Qf(a)},Yf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Zf={},$f=function(a){return void 0==Zf[a]?!1:Zf[a]};var ag=[];function bg(){var a=Lf("google_tag_data",{});a.ics||(a.ics={entries:{},set:cg,update:dg,addListener:eg,notifyListeners:fg,active:!1});return a.ics}
function cg(a,b,c,d,e,f){var g=bg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,p=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,gg(a),fg(),kf("TAGGING",2))},f)}}}
function dg(a,b){var c=bg();c.active=!0;if(void 0!=b){var d=hg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=hg(a);f.quiet?(f.quiet=!1,gg(a)):g!==d&&gg(a)}}function eg(a,b){ag.push({cf:a,nh:b})}function gg(a){for(var b=0;b<ag.length;++b){var c=ag[b];La(c.cf)&&-1!==c.cf.indexOf(a)&&(c.vf=!0)}}function fg(a){for(var b=0;b<ag.length;++b){var c=ag[b];if(c.vf){c.vf=!1;try{c.nh({bf:a})}catch(d){}}}}
var hg=function(a){var b=bg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ig=function(a){return!(bg().entries[a]||{}).quiet},jg=function(){return $f("gtag_cs_api")?bg().active:!1},kg=function(a,b){bg().addListener(a,b)},lg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!ig(b[e]))return!0;return!1}if(c()){var d=!1;kg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},mg=function(a,b){if(!1===hg(b)){var c=!1;kg([b],function(d){!c&&hg(b)&&(a(d),c=!0)})}};var ng=[H.s,H.M],og=function(a){var b=a[H.Hf];b&&I(40);var c=a[H.If];c&&I(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<ng.length;f++){var g=ng[f],h=a[ng[f]],l=d[e];bg().set(g,h,l,"","",c)}},pg=function(a,b){for(var c=0;c<ng.length;c++){var d=ng[c],e=a[ng[c]];bg().update(d,e)}bg().notifyListeners(b)},qg=function(a){var b=hg(a);return void 0!=b?b:!0},rg=function(){for(var a=[],b=0;b<ng.length;b++){var c=hg(ng[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},sg=function(a,b){lg(a,b)};var ug=function(a){return tg?L.querySelectorAll(a):null},vg=function(a,b){if(!tg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},wg=!1;if(L.querySelectorAll)try{var xg=L.querySelectorAll(":root");xg&&1==xg.length&&xg[0]==L.documentElement&&(wg=!0)}catch(a){}var tg=wg;var Yd={},O=null,Lg=Math.random();Yd.C="GTM-NWDMT9Q";Yd.nc="b41";Yd.Ei="";var Mg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ng={__paused:!0,__tg:!0},Og;for(Og in Mg)Mg.hasOwnProperty(Og)&&(Ng[Og]=!0);var Pg="www.googletagmanager.com/gtm.js";
var Qg=Pg,Rg=Wa(""),Sg=null,Tg=null,Ug="//www.googletagmanager.com/a?id="+Yd.C+"&cv=206",Vg={},Wg={},Xg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Yg={},Zg=new Qa,$g={},ah={},dh={name:"dataLayer",set:function(a,b){E(hb(a,b),$g);bh()},get:function(a){return ch(a,2)},reset:function(){Zg=new Qa;$g={};bh()}},ch=function(a,b){return 2!=b?Zg.get(a):eh(a)},eh=function(a,b){var c=a.split(".");b=b||[];for(var d=$g,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},fh=function(a,b){ah.hasOwnProperty(a)||(Zg.set(a,b),E(hb(a,b),$g),bh())},bh=function(a){Sa(ah,function(b,c){Zg.set(b,c);E(hb(b,
void 0),$g);E(hb(b,c),$g);a&&delete ah[b]})},gh=function(a,b,c){Yg[a]=Yg[a]||{};var d=1!==c?eh(b):Zg.get(b);"array"===vb(d)||"object"===vb(d)?Yg[a][b]=E(d):Yg[a][b]=d},hh=function(a,b){if(Yg[a])return Yg[a][b]},ih=function(a,b){Yg[a]&&delete Yg[a][b]};var lh={},mh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===lh[a]&&(lh[a]=Math.floor(Math.random()*b));return lh[a]};var nh=/:[0-9]+$/,oh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},rh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ph(a.protocol)||ph(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(nh,"").toLowerCase());return qh(a,b,c,d,e)},qh=function(a,b,c,d,e){var f,g=ph(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=sh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(nh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||kf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=oh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ph=function(a){return a?a.replace(":",
"").toLowerCase():""},sh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},th=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||kf("TAGGING",1),c="/"+c);var d=b.hostname.replace(nh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},uh=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=th(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function vh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var xh=function(a,b,c,d){return wh(d)?vh(a,String(b||document.cookie),c):[]},Ah=function(a,b,c,d,e){if(wh(e)){var f=yh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=zh(f,function(g){return g.wc},b);if(1===f.length)return f[0].id;f=zh(f,function(g){return g.Ob},c);return f[0]?f[0].id:void 0}}};function Bh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=xh(b,f,!1,d).indexOf(c)}
var Fh=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!wh(c.Na))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ch(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Oh);g=e(g,"samesite",
c.hi);c.ki&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var p=Dh(),q=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}t=!0;if(!Eh(u,c.path)&&Bh(v,a,b,c.Na))return 0}if(q&&!t)throw q;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Eh(n,c.path)?1:Bh(g,a,b,c.Na)?0:1},Gh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Fh(a,b,c)};
function zh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function yh(a,b,c){for(var d=[],e=xh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),wc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var Ch=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Hh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ih=/(^|\.)doubleclick\.net$/i,Eh=function(a,b){return Ih.test(document.location.hostname)||"/"===b&&Hh.test(a)},Dh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ih.test(e)||Hh.test(e)||a.push("none");
return a},wh=function(a){if(!$f("gtag_cs_api")||!a||!jg())return!0;if(!ig(a))return!1;var b=hg(a);return null==b?!0:!!b};var Jh=function(){for(var a=Jf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Za()/1E3)].join(".")},Mh=function(a,b,c,d,e){var f=Kh(b);return Ah(a,f,Lh(c),d,e)},Nh=function(a,b,c,d){var e=""+Kh(c),f=Lh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Kh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Lh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Oh(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Za())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ph=["1"],Qh={},Uh=function(a){var b=Rh(a.prefix);Qh[b]||Sh(b,a.path,a.domain)||(Th(b,Jh(),a),Sh(b,a.path,a.domain))};function Th(a,b,c){var d=Nh(b,"1",c.domain,c.path),e=Oh(c);e.Na="ad_storage";Gh(a,d,e)}function Sh(a,b,c){var d=Mh(a,b,c,Ph,"ad_storage");d&&(Qh[a]=d);return d}function Rh(a){return(a||"_gcl")+"_au"};function Vh(){for(var a=Wh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wh,Yh;function Zh(a){Wh=Wh||Xh();Yh=Yh||Vh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(Wh[l],Wh[n],Wh[p],Wh[q])}return b.join("")}
function $h(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=Yh[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}Wh=Wh||Xh();Yh=Yh||Vh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var bi;var fi=function(){var a=ci,b=di,c=ei(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Rf(L,"mousedown",d);Rf(L,"keyup",d);Rf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},gi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ei().decorators.push(f)},hi=function(a,b,c){for(var d=ei().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,p=!!g.sameHost;if(l&&(p||n!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&cb(e,g.callback())}}return e},ei=function(){var a=Lf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ii=/(.*?)\*(.*?)\*(.*)/,ji=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ki=/^(?:www\.|m\.|amp\.)+/,li=/([^?#]+)(\?[^#]*)?(#.*)?/;function mi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var oi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zh(String(d))))}var e=b.join("*");return["1",ni(e),e].join("*")},ni=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=bi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}bi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^bi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},qi=function(){return function(a){var b=th(B.location.href),c=b.search.replace("?",""),d=oh(c,"_gl",!1,!0)||"";a.query=pi(d)||{};var e=rh(b,"fragment").match(mi("_gl"));a.fragment=pi(e&&e[3]||"")||{}}},ri=function(a){var b=qi(),c=ei();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(cb(d,e.query),a&&cb(d,e.fragment));return d},
pi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ii.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],p=0;p<b;++p)if(n===ni(h,p)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=$h(t[r+1]);return q}}}}catch(u){}};
function si(a,b,c,d){function e(p){var q=p,t=mi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=li.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function ti(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=hi(b,1,c),e=hi(b,2,c),f=hi(b,3,c);if(db(d)){var g=oi(d);c?ui("_gl",g,a):vi("_gl",g,a,!1)}if(!c&&db(e)){var h=oi(e);vi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){vi(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ui(n,p,q);break a}}"string"==typeof q&&si(n,p,q,void 0)}}
function vi(a,b,c,d){if(c.href){var e=si(a,b,c.href,void 0===d?!1:d);vf.test(e)&&(c.href=e)}}
function ui(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=si(a,b,c.action);vf.test(n)&&(c.action=n)}}}
var ci=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ti(e,e.hostname)}}catch(g){}},di=function(a){try{if(a.action){var b=rh(th(a.action),"host");ti(a,b)}}catch(c){}},wi=function(a,b,c,d){fi();gi(a,b,"fragment"===c?2:1,!!d,!1)},xi=function(a,b){fi();gi(a,[qh(B.location,"host",!0)],b,!0,!0)},yi=function(){var a=L.location.hostname,b=ji.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(ki,""),l=e.replace(ki,""),n;if(!(n=h===l)){var p="."+l;n=h.substring(h.length-p.length,h.length)===p}return n},zi=function(a,b){return!1===a?!1:a||b||yi()};var Ai=/^\w+$/,Bi=/^[\w-]+$/,Ci=/^~?[\w-]+$/,Di={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Ei=function(){if(!$f("gtag_cs_api")||!jg())return!0;var a=hg("ad_storage");return null==a?!0:!!a},Fi=function(a,b){ig("ad_storage")?Ei()?a():mg(a,"ad_storage"):b?kf("TAGGING",3):lg(function(){Fi(a,!0)},["ad_storage"])},Ii=function(a){var b=[];if(!L.cookie)return b;var c=xh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Gi(c[d]);e&&-1===Na(b,e)&&b.push(e)}return Hi(b)};
function Ji(a){return a&&"string"==typeof a&&a.match(Ai)?a:"_gcl"}
var Li=function(){var a=th(B.location.href),b=rh(a,"query",!1,void 0,"gclid"),c=rh(a,"query",!1,void 0,"gclsrc"),d=rh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||oh(e,"gclid",!1,void 0);c=c||oh(e,"gclsrc",!1,void 0)}return Ki(b,c,d)},Ki=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Bi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":$f("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ni=function(a){var b=Li();Fi(function(){Mi(b,a)})};
function Mi(a,b,c){function d(l,n){var p=Oi(l,e);p&&Gh(p,n,f)}b=b||{};var e=Ji(b.prefix);c=c||Za();var f=Oh(b,c,!0);f.Na="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Zi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Qi=function(a,b){var c=ri(!0);Fi(function(){for(var d=Ji(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Di[f]){var g=Oi(f,d),h=c[g];if(h){var l=Math.min(Pi(h),Za()),n;b:{for(var p=l,q=xh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Pi(q[t])>p){n=!0;break b}n=!1}if(!n){var r=Oh(b,l,!0);r.Na="ad_storage";Gh(g,h,r)}}}}Mi(Ki(c.gclid,c.gclsrc),b)})},Oi=function(a,b){var c=Di[a];if(void 0!==c)return b+c},Pi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Gi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ri=function(a,b,c,d,e){if(La(b)){var f=Ji(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Oi(a[l],f);if(n){var p=xh(n,L.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};Fi(function(){wi(g,b,c,d)})}},Hi=function(a){return a.filter(function(b){return Ci.test(b)})},Si=function(a,b){for(var c=Ji(b.prefix),d={},e=0;e<a.length;e++)Di[a[e]]&&(d[a[e]]=Di[a[e]]);Fi(function(){Sa(d,function(f,g){var h=xh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=Pi(l),
p={};p[f]=[Gi(l)];Mi(p,b,n)}})})};function Ti(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ui=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(jg()){var c=Li();if(Ti(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);xi(function(){return d},3);xi(function(){var e={};return e._up="1",e},1)}}},Vi=function(){var a;if(Ei()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Rd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Rd]||(g[b[h].Rd]=[]),g[b[h].Rd].push({timestamp:l[1],ph:l[2]}))}a=g}else a={};return a};var Wi=/^\d+\.fls\.doubleclick\.net$/;function Xi(a,b){ig(H.s)?qg(H.s)?a():mg(a,H.s):b?I(42):sg(function(){Xi(a,!0)},[H.s])}function Yi(a){var b=th(B.location.href),c=rh(b,"host",!1);if(c&&c.match(Wi)){var d=rh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Zi(a,b,c){if("aw"==a||"dc"==a){var d=Yi("gcl"+a);if(d)return d.split(".")}var e=Ji(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!qg(H.s)&&c,g;g=Li()[a]||[];if(0<g.length)return f?["0"]:g}var h=Oi(a,e);return h?Ii(h):[]}
var $i=function(a){var b=Yi("gac");if(b)return!qg(H.s)&&a?"0":decodeURIComponent(b);var c=Vi(),d=[];Sa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].ph);g=Hi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},aj=function(a,b){var c=Li().dc||[];Xi(function(){Uh(b);var d=Qh[Rh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Xf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=Rh(b.prefix),p=Qh[n];p&&Th(n,p,b)}})};var bj=/[A-Z]+/,cj=/\s/,dj=function(a){if(m(a)&&(a=Ya(a),!cj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(bj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},fj=function(a){for(var b={},c=0;c<a.length;++c){var d=dj(a[c]);d&&(b[d.id]=d)}ej(b);var e=[];Sa(b,function(f,g){e.push(g)});return e};
function ej(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var gj=function(){var a=!1;return a};var ij=function(a,b,c,d){return(2===hj()||d||"http:"!=B.location.protocol?a:b)+c},hj=function(){var a=Of(),b;if(1===a)a:{var c=Qg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var wj=function(a){return qg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=uh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},xj=function(){var a;if(!(a=Rg)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Jf&&Jf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return mh(1,100)<d?mh(2,2):-1},yj=function(a){var b;return b};var zj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ej=function(a){var b;ch("gtm.allowlist")&&I(52);b=ch("gtm.allowlist");b||(b=ch("gtm.whitelist"));b&&I(9);
var c=b&&eb(Xa(b),Aj),d;ch("gtm.blocklist")&&I(51);d=ch("gtm.blocklist");d||(d=ch("gtm.blacklist"));d||(d=ch("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Dj()&&(d=Xa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na(Xa(d),"google")&&I(2);var e=
d&&eb(Xa(d),Bj),f={};return function(g){var h=g&&g[Jd.Ka];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Wg[h]||[],n=a(h,l);if(b){var p;if(p=n)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){I(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var t=!1;if(d){var r=0<=Na(e,h);if(r)t=r;else{var u=Ra(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Ra(e,Cj));return f[h]=v}},
Dj=function(){return zj.test(B.location&&B.location.hostname)};var Fj={active:!0,isAllowed:function(){return!0}},Gj=function(a){var b=O.zones;return b?b.checkState(Yd.C,a):Fj},Hj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Ij=function(){},Jj=function(){};var Kj=!1,Lj=0,Mj=[];function Nj(a){if(!Kj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Kj=!0;for(var e=0;e<Mj.length;e++)N(Mj[e])}Mj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Oj(){if(!Kj&&140>Lj){Lj++;try{L.documentElement.doScroll("left"),Nj()}catch(a){B.setTimeout(Oj,50)}}}var Pj=function(a){Kj?a():Mj.push(a)};var Qj={},Rj={},Sj=function(a,b,c,d){if(!Rj[a]||Ng[b]||"__zone"===b)return-1;var e={};xb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Rj[a].tags.push(e)-1},Tj=function(a,b,c,d){if(Rj[a]){var e=Rj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Uj(a){for(var b=Qj[a]||[],c=0;c<b.length;c++)b[c]();Qj[a]={push:function(d){d(Yd.C,Rj[a])}}}
var Xj=function(a,b,c){Rj[a]={tags:[]};Ja(b)&&Vj(a,b);c&&B.setTimeout(function(){return Uj(a)},Number(c));return Wj(a)},Vj=function(a,b){Qj[a]=Qj[a]||[];Qj[a].push(ab(function(){return N(function(){b(Yd.C,Rj[a])})}))};function Wj(a){var b=0,c=0,d=!1;return{add:function(){c++;return ab(function(){b++;d&&b>=c&&Uj(a)})},Mg:function(){d=!0;b>=c&&Uj(a)}}};var Yj=function(){function a(d){return!Ka(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ka(dh.get("gtm.start"))?dh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Tg-b)}}};var ck={},dk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},ek=!1;
var fk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Yj();return B[b]},gk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=dk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},hk=function(a){};
var jk=function(a){},ik=function(){return B.GoogleAnalyticsObject||"ga"},kk=function(a,b){return function(){var c=dk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var pk=function(){return"&tc="+xd.filter(function(a){return a}).length},sk=function(){2022<=qk().length&&rk()},uk=function(){tk||(tk=B.setTimeout(rk,500))},rk=function(){tk&&(B.clearTimeout(tk),tk=void 0);void 0===vk||wk[vk]&&!xk&&!yk||(zk[vk]||Ak.Fh()||0>=Bk--?(I(1),zk[vk]=!0):(Ak.di(),Qf(qk()),wk[vk]=!0,Ck=Dk=Ek=yk=xk=""))},qk=function(){var a=vk;if(void 0===a)return"";var b=lf("GTM"),c=lf("TAGGING");return[Fk,wk[a]?"":"&es=1",Gk[a],b?"&u="+b:"",c?"&ut="+c:"",pk(),xk,yk,Ek?Ek:"",Dk,Ck,"&z=0"].join("")},
Hk=function(){return[Ug,"&v=3&t=t","&pid="+Pa(),"&rv="+Yd.nc].join("")},Ik="0.005000">Math.random(),Fk=Hk(),Jk=function(){Fk=Hk()},wk={},xk="",yk="",Ck="",Dk="",Ek="",vk=void 0,Gk={},zk={},tk=void 0,Ak=function(a,b){var c=0,d=0;return{Fh:function(){if(c<a)return!1;Za()-d>=b&&(c=0);return c>=a},di:function(){Za()-d>=b&&(c=0);c++;d=Za()}}}(2,1E3),Bk=1E3,Kk=function(a,b,c){if(Ik&&!zk[a]&&b){a!==vk&&(rk(),vk=a);var d,e=String(b[Jd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;xk=xk?xk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(zd[g]?"1":"2")+d;Ck=Ck?Ck+"."+h:"&ti="+h;uk();sk()}},Lk=function(a,b,c){if(Ik&&!zk[a]){a!==vk&&(rk(),vk=a);var d=c+b;yk=yk?yk+"."+d:"&epr="+d;uk();sk()}},Mk=function(a,b,c){};
var Nk=function(){return!1},Ok=function(){var a={};return function(b,c,d){}};function Pk(a,b,c,d){var e=xd[a],f=Qk(a,b,c,d);if(!f)return null;var g=Fd(e[Jd.Ve],c,[]);if(g&&g.length){var h=g[0];f=Pk(h.index,{J:f,I:1===h.hf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qk(a,b,c,d){function e(){if(f[Jd.ug])h();else{var x=Gd(f,c,[]);var z=Sj(c.id,String(f[Jd.Ka]),Number(f[Jd.We]),x[Jd.vg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"5");Tj(c.id,z,"success",
F);g()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"6");Tj(c.id,z,"failure",F);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Kk(c.id,f,"1");var C=function(){var F=Za()-D;Kk(c.id,f,"7");Tj(c.id,z,"exception",F);A||(A=!0,h())};var D=Za();try{Ed(x,c)}catch(F){C(F)}}}var f=xd[a],g=b.J,h=b.I,l=b.terminate;if(c.yd(f))return null;var n=Fd(f[Jd.Xe],c,[]);if(n&&n.length){var p=n[0],q=Pk(p.index,{J:g,I:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.hf?l:q}if(f[Jd.Re]||f[Jd.yg]){var t=f[Jd.Re]?yd:c.si,r=g,u=h;if(!t[a]){e=ab(e);
var v=Rk(a,t,e);g=v.J;h=v.I}return function(){t[a](r,u)}}return e}function Rk(a,b,c){var d=[],e=[];b[a]=Sk(d,e,c);return{J:function(){b[a]=Tk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Uk;for(var f=0;f<e.length;f++)e[f]()}}}function Sk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tk(a){a()}function Uk(a,b){b()};var Xk=function(a,b,c){for(var d=[],e=0;e<xd.length;e++)if(a[e]){var f=xd[e];var g=c.add();try{var h=Pk(e,{J:g,I:g,terminate:g},b,e);h?d.push({Df:e,wf:Hd(f),yc:h}):(Vk(e,b),g())}catch(n){g()}}c.Mg();d.sort(Wk);for(var l=0;l<d.length;l++)d[l].yc();return 0<d.length};function Wk(a,b){var c,d=b.wf,e=a.wf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Df,h=b.Df;f=g>h?1:g<h?-1:0}return f}
function Vk(a,b){if(!Ik)return;var c=function(d){var e=b.yd(xd[d])?"3":"4",f=Fd(xd[d][Jd.Ve],b,[]);f&&f.length&&c(f[0].index);Kk(b.id,xd[d],e);var g=Fd(xd[d][Jd.Xe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yk=!1,cl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Yk)return!1;Yk=!0}var d=Gj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Gj(Number.MAX_SAFE_INTEGER);}if(f)return!1}Ik&&!zk[b]&&vk!==b&&(rk(),vk=b,Ck=xk="",Gk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,uk());
var g={id:b,name:c,yd:Ej(d.isAllowed),si:[],rf:function(){I(6)},af:Zk(b)},h=Xj(b,a.eventCallback,a.eventTimeout);$k(b);var l=Td(g);e&&(l=al(l));var n=Xk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||jk(Yd.C);switch(c){case "gtm.init":I(19),n&&I(20)}return bl(l,
n)};function Zk(a){return function(b){Ik&&(Cb(b)||Mk(a,"input",b))}}function $k(a){gh(a,"event",1);gh(a,"ecommerce",1);gh(a,"gtm");gh(a,"eventModel");}
function al(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Mg[String(xd[c][Jd.Ka])]&&(b[c]=!0);return b}function bl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&xd[c]&&!Ng[String(xd[c][Jd.Ka])])return!0;return!1}function dl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return th(""+c+b).href}}function el(a,b){return fl()?dl(a,b):void 0}function fl(){var a=!1;return a};var gl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},hl=function(a){var b=new gl;b.eventModel=a;return b},il=function(a,b){a.targetConfig=b;return a},jl=function(a,b){a.containerConfig=b;return a},kl=function(a,b){a.a=b;return a},ll=function(a,b){a.globalConfig=b;return a},ml=function(a,b){a.J=b;return a},nl=function(a,b){a.I=b;return a};
gl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ol=function(a){function b(e){Sa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Sa(c,function(e){d.push(e)});return d};var pl;if(3===Yd.nc.length)pl="g";else{var ql="G";pl=ql}
var rl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pl,OPT:"o"},sl=function(a){var b=Yd.C.split("-"),c=b[0].toUpperCase(),d=rl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Yd.nc.length){var g="w";f="2"+g}else f="";return f+d+Yd.nc+e};var tl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ul=function(){return zf("iPhone")&&!zf("iPod")&&!zf("iPad")};zf("Opera");zf("Trident")||zf("MSIE");zf("Edge");!zf("Gecko")||-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")||zf("Trident")||zf("MSIE")||zf("Edge");-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")&&zf("Mobile");zf("Macintosh");zf("Windows");zf("Linux")||zf("CrOS");var vl=ma.navigator||null;vl&&(vl.appVersion||"").indexOf("X11");zf("Android");ul();zf("iPad");zf("iPod");ul()||zf("iPad")||zf("iPod");wf.toLowerCase().indexOf("kaios");var wl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var xl=function(){};var yl=function(a){if($f("tteai")){if(void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent)return 2}else if(void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0),void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0),void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==
a.listenerId&&"number"!==typeof a.listenerId)return 2;return a.cmpStatus&&"error"!==a.cmpStatus?0:3},zl=function(a,b){this.i=a;this.a=null;this.B={};this.R=0;this.F=void 0===b?500:b;this.m=null};la(zl,xl);var Bl=function(a){return"function"===typeof a.i.__tcfapi||null!=Al(a)};
zl.prototype.addEventListener=function(a){var b={},c=qf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=yl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Cl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};zl.prototype.removeEventListener=function(a){a&&a.listenerId&&Cl(this,"removeEventListener",null,a.listenerId)};
var El=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var n=Dl(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:n&&Dl(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?Dl(a.purpose.legitimateInterests,
b)&&Dl(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Dl=function(a,b){return!(!a||!a[b])},Cl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Al(a)){Fl(a);var f=++a.R;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Al=function(a){if(a.a)return a.a;a.a=wl(a.i,"__tcfapiLocator");return a.a},Fl=function(a){a.m||(a.m=function(b){try{var c,d;"string"===
typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},tl(a.i,a.m))};var Gl={1:0,3:0,4:0,7:3,9:3,10:3};function Hl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Il=Hl("",550),Jl=Hl("",500);function Kl(){var a=O.tcf||{};return O.tcf=a}
var Ll=function(a,b){this.m=a;this.a=b;this.i=Za();},Ml=function(a){},Nl=function(a){},Tl=function(){var a=Kl(),b=new zl(B,3E3),c=new Ll(b,a);if((Ol()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||Bl(b))){a.active=!0;a.Pb={};Pl();var d=setTimeout(function(){Ql(a);Rl(a);d=null},Jl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Ql(a),Rl(a),Ml(c);else{var f;if(!1===e.gdprApplies)f=Sl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Gl)if(Gl.hasOwnProperty(h))if("1"===h){var l=e,n=!0;n=void 0===n?!1:n;var p;var q=l;!1===q.gdprApplies?p=!0:(void 0===q.internalErrorState&&(q.internalErrorState=yl(q)),p="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!n||"string"!==typeof l.tcString||!l.tcString.length?!0:El(l,"1",0):!1}else g[h]=El(e,h,Gl[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,Rl(a),Ml(c))}}),Nl(c)}catch(e){d&&(clearTimeout(d),d=null),Ql(a),Rl(a)}}};function Ql(a){a.type="e";a.tcString="tcunavailable";a.Pb=Sl()}function Pl(){var a={};og((a.ad_storage="denied",a.wait_for_update=Il,a))}
var Ol=function(){var a=!1;a=!0;return a};function Sl(){var a={},b;for(b in Gl)Gl.hasOwnProperty(b)&&(a[b]=!0);return a}function Rl(a){var b={};pg((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var Ul=function(){var a=Kl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Vl=function(){var a=Kl();return a.active?a.tcString||"":""},Wl=function(a){if(!Gl.hasOwnProperty(String(a)))return!0;var b=Kl();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};function Xl(a,b,c){function d(p){var q;O.reported_gclid||(O.reported_gclid={});q=O.reported_gclid;var t=f+(p?"gcu":"gcs");if(!q[t]){q[t]=!0;var r=[],u=function(z,A){A&&r.push(z+"="+encodeURIComponent(A))},v="https://www.google.com";if(jg()){var x=qg(H.s);u("gcs",rg());p&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+Jh());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&qg(H.s)){var y=Ii("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",Yl(b,h));!x&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",Vl());"1"===ri(!1)._up&&u("gtm_up","1");u("gclid",Yl(b,f));u("gclsrc",g);u("gtm",sl(!c));var w=v+"/pagead/landing?"+r.join("&");Xf(w)}}var e=Li(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=jg();if(l||n)n?sg(function(){d();qg(H.s)||mg(function(p){return d(!0,p.bf)},H.s)},[H.s]):d()}
function Yl(a,b){var c=a&&!qg(H.s);return b&&c?"0":b}var Zl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var $l=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},am=function(a){var b=$l(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var bm=[],cm=!(!B.IntersectionObserver||!B.IntersectionObserverEntry),dm=function(a,b,c){for(var d=new B.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<bm.length;f++)if(!bm[f])return bm[f]=d,f;return bm.push(d)-1},em=function(a,b,c){function d(h,l){var n={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:n,isIntersecting:0<l,rootBounds:n,target:h,time:Za()};N(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=am(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},fm=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(cm){var e=!1;N(function(){e||
em(a,b,c)()});return dm(function(f){e=!0;for(var g={hb:0};g.hb<f.length;g={hb:g.hb},g.hb++)N(function(h){return function(){return a(f[h.hb])}}(g))},b,c)}return B.setInterval(em(a,b,c),1E3)},gm=function(a){cm?0<=a&&a<bm.length&&bm[a]&&(bm[a].disconnect(),bm[a]=void 0):B.clearInterval(a)};var hm=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),im=["SCRIPT","IMG","SVG","PATH","BR"],jm=["BR"];function km(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=km(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function lm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=im.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=jm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],q=0;q<n.length;q++){var t=n[q],r=t.textContent;t.value&&(r=t.value);if(r){var u=r.match(hm);if(u){var v=
u[0],x;if(B.location){var y=qh(B.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Yi:v})}}}for(var w=[],z=10<p.length?"3":l.status,A=0;A<p.length&&10>A;A++){var C=p[A].element;w.push({querySelector:km(C),tagName:C.tagName,isVisible:!Zl(C),type:1})}return{elements:w,status:z}}var Vm=function(){var a=!0;Wl(7)&&Wl(9)&&Wl(10)||(a=!1);var b=!0;b=!1;b&&!Um()&&(a=!1);return a},Um=function(){var a=!0;Wl(3)&&Wl(4)||(a=!1);return a};function rn(){var a=O;return a.gcq=a.gcq||new sn}
var tn=function(a,b,c){rn().register(a,b,c)},un=function(a,b,c,d){rn().push("event",[b,a],c,d)},vn=function(a,b){rn().push("config",[a],b)},wn=function(a){rn().push("set",[a])},xn=function(a,b,c){rn().push("get",[a,b],c)},yn=function(a){return rn().getRemoteConfig(a)},zn={},An=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.a={};this.m=null;this.i=!1},Bn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},sn=function(){this.m={};this.i={};this.a=[]},
Cn=function(a,b){var c=dj(b);return a.m[c.containerId]=a.m[c.containerId]||new An},Dn=function(a,b,c){if(b){var d=dj(b);if(d&&1===Cn(a,b).status){Cn(a,b).status=2;var e={};Ik&&(e.timeoutId=B.setTimeout(function(){I(38);uk()},3E3));a.push("require",[e],d.containerId);zn[d.containerId]=Za();if(gj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=el(c,g)||h;Nf(l)}}}},En=function(a,b,c,d){if(d.ca){var e=Cn(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.a),p=E(a.i),q=ch("gtm.uniqueEventId"),t=dj(d.ca).prefix,r=nl(ml(ll(kl(jl(il(hl(g),h),l),n),p),function(){Lk(q,t,"2");}),
function(){Lk(q,t,"3");});try{Lk(q,t,"1");f(d.ca,b,d.m,r)}catch(u){Lk(q,t,"4");}}}};
sn.prototype.register=function(a,b,c){var d=Cn(this,a);if(3!==d.status){d.m=b;d.status=3;if(c){d.a=c}var e=dj(a),f=zn[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=ch("gtm.uniqueEventId"),n=h,p=Za()-g;if(Ik&&!zk[l]){l!==vk&&(rk(),vk=l);var q=n+"."+Math.floor(g-f)+"."+Math.floor(p);
Dk=Dk?Dk+","+q:"&cl="+q}delete zn[e.containerId]}this.flush()}};sn.prototype.push=function(a,b,c,d){var e=Math.floor(Za()/1E3);Dn(this,c,b[0][H.Ja]||this.i[H.Ja]);this.a.push(new Bn(a,e,c,b,d));d||this.flush()};
sn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Cn(this,c.ca).status&&!a)return;Ik&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Sa(c.a[0],function(p,q){E(hb(p,q),b.i)});break;case "config":var d=c.a[0],e=!!d[H.hc];delete d[H.hc];var f=Cn(this,c.ca),g=dj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.i&&e||En(this,H.fa,d,c);f.i=!0;delete d[H.Ab];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":En(this,c.a[1],c.a[0],c);break;case "get":var l={},n=(l[H.za]=c.a[0],l[H.ya]=c.a[1],l);En(this,H.Ga,n,c);}this.a.shift()}};sn.prototype.getRemoteConfig=function(a){return Cn(this,a).a};var Fn=function(a,b,c){};var Gn=function(a,b,c,d){};var Hn=function(a){};var In=function(a,b,c){};var Jn=function(a,b){
return!0};var Kn=function(a,b){var c;return c};var Ln=function(a){};var Mn=!1,Nn=[];function On(){if(!Mn){Mn=!0;for(var a=0;a<Nn.length;a++)N(Nn[a])}}var Pn=function(a){Mn?N(a):Nn.push(a)};var Qn=function(a){G(this.i.a,["listener:!Fn"],arguments);Ve(this,"process_dom_events","window","load");Pn(Ab(a))};var Rn=function(a,b){var c;var e=!1;var f=zb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var Sn=function(a){var b;var f=!1;var g=zb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var Tn=function(a,b){var c=null,d=!1;
return zb(c,this.m,d)};var Un=function(a){var b;G(this.i.a,["path:!string"],arguments);Ve(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=gb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!Ja(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return zb(b,this.m,h)};var Vn=function(a){var b;return b};var Wn=function(a,b){b=void 0===b?!0:b;var c;return c};var Xn=function(a){var b=null;return b};var Yn=function(a,b){var c;return c};var Zn=function(a,b){var c;return c};var $n=function(a){var b="";return b};function ao(a,b){};var bo=function(a){var b="";return b};var co=function(){Ve(this,"get_user_agent");return B.navigator.userAgent};var eo=function(a,b){};var fo={},go=function(a,b,c,d){G(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ve(this,"inject_script",a);var e=this.m,f=function(){b instanceof jb&&b.Pa(e)},g=function(){c instanceof jb&&c.Pa(e)};if(!d){Nf(a,f,g);return}var h=d;fo[h]?(fo[h].onSuccess.push(f),fo[h].onFailure.push(g)):(fo[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=fo[h].onSuccess,n=0;n<l.length;n++)N(l[n]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=fo[h].onFailure,n=0;n<l.length;n++)N(l[n]);fo[h]=null},Nf(a,f,g));};var ho=function(){return!1},io={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var jo=function(){};var ko=function(a,b){var c=!1;return c};var lo=function(){var a="";return a};var mo=function(){var a="";return a};var no=function(a,b,c){};var oo=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var po=function(a,b,c){return!1};function qo(a,b,c){};var ro=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var so=function(a,b,c){var d=this;};var to={},uo={};to.getItem=function(a){var b=null;return b};
to.setItem=function(a,b){};
to.removeItem=function(a){};to.clear=function(){};var vo=function(a){var b;return b};var Uc=function(){var a=new ff;gj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",eo),a.add("injectScript",go));var b=no;a.add("Math",Oe());a.add("TestHelper",hf());a.add("addEventCallback",Hn);a.add("aliasInWindow",Jn);a.add("assertApi",Ke);a.add("assertThat",Le);a.add("callInWindow",
Kn);a.add("callLater",Ln);a.add("copyFromDataLayer",Rn);a.add("copyFromWindow",Sn);a.add("createArgumentsQueue",Tn);a.add("createQueue",Un);a.add("decodeUri",Pe);a.add("decodeUriComponent",Qe);a.add("encodeUri",Re);a.add("encodeUriComponent",Se);a.add("fail",Te);a.add("fromBase64",Vn,!("atob"in B));a.add("generateRandom",Ue);a.add("getContainerVersion",We);a.add("getCookieValues",Wn);a.add("getQueryParameters",Yn);a.add("getReferrerQueryParameters",Zn);a.add("getReferrerUrl",$n);a.add("getTimestamp",
Xe);a.add("getTimestampMillis",Xe);a.add("getType",Ye);a.add("getUrl",bo);a.add("localStorage",io,!ho());a.add("logToConsole",jo);a.add("makeInteger",$e);a.add("makeNumber",af);a.add("makeString",bf);a.add("makeTableMap",cf);a.add("mock",ef);a.add("queryPermission",ko);a.add("readCharacterSet",lo);a.add("readTitle",mo);a.add("sendPixel",b);a.add("setCookie",oo);a.add("setInWindow",po);a.add("sha256",so);a.add("templateStorage",to);a.add("toBase64",vo,!("btoa"in B));a.add("JSON",Ze(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;
if(f){var g=f.Ib();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Sc,be;
function wo(){var a=data.runtime||[],b=data.runtime_lines;Sc=new Qc;xo();td=function(e,f,g){yo(f);var h=new pb;Sa(f,function(r,u){var v=zb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});Sc.a.a.B=Pd();var l={Ng:ce(e),eventId:void 0!==g?g.id:void 0,Ib:function(){return e},log:function(){}};if(Nk()){var n=Ok(),p=void 0,q=void 0;l.da={i:{},a:function(r,u,v){1===u&&(p=r);7===u&&(q=v);n(r,u,v)},m:df()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);n(p,4,{level:r,source:q,message:v})}}}var t=
Tc(l,[e,h]);Sc.a.a.B=void 0;t instanceof za&&"return"===t.a&&(t=t.i);return Ab(t)};Vc();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ld(d,b[c]);Sc.yc(d)}}function yo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){N(b)});Ja(c)&&(a.gtmOnFailure=function(){N(c)})}
function xo(){var a=Sc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Wc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function zo(a){void 0!==a&&Sa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Wg[e]=Wg[e]||[];Wg[e].push(b)}})};var Ao="HA GF G UA AW DC".split(" "),Bo=!1,Co={},Do=!1;function Eo(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Tc]&&(c.eventCallback=b[H.Tc]),b[H.bc]&&(c.eventTimeout=b[H.bc]));return c}function Fo(){return Bo}
var Io={config:function(a){},event:function(a){var b=a[1];if(!(2>
a.length)&&m(b)){var c;if(2<a.length){if(!xb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Eo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Do=!0,Fo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=be.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&xb(a[1])?b=E(a[1]):3==a.length&&m(a[1])&&(b={},xb(a[2])||La(a[2])?
b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Fo()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Xg(),d=a[1];"default"===d?(b(),og(a[2])):"update"===d&&(b(),pg(a[2],c))}}};
Io.get=function(a){};var Jo={policy:!0};
var Ko=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mo=function(a){var b=Lo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var cp=function(a){if(bp(a))return a;this.a=a};cp.prototype.vh=function(){return this.a};var bp=function(a){return!a||"object"!==vb(a)||xb(a)?!1:"getUntrustedUpdateValue"in a};cp.prototype.getUntrustedUpdateValue=cp.prototype.vh;var dp=[],ep=!1,fp=function(a){return B["dataLayer"].push(a)},gp=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function hp(a){var b=a._clear;Sa(a,function(d,e){"_clear"!==d&&(b&&fh(d,void 0),fh(d,e))});Sg||(Sg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Xg(),a["gtm.uniqueEventId"]=c,fh("gtm.uniqueEventId",c));return cl(a)}
function ip(){for(var a=!1;!ep&&0<dp.length;){ep=!0;delete $g.eventModel;bh();var b=dp.shift();if(null!=b){var c=bp(b);if(c){var d=b;b=bp(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ch(g,1);if(La(h)||xb(h))h=E(h);ah[g]=h}}try{if(Ja(b))try{b.call(dh)}catch(v){}else if(La(b)){var l=
b;if(m(l[0])){var n=l[0].split("."),p=n.pop(),q=l.slice(1),t=ch(n.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,q)}catch(v){}}}else{if(Ta(b)){a:{var r=b;if(r.length&&m(r[0])){var u=Io[r[0]];if(u&&(!c||!Jo[r[0]])){b=u(r);break a}}b=void 0}if(!b){ep=!1;continue}}a=hp(b)||a}}finally{c&&bh(!0)}}ep=!1}return!a}
function jp(){var a=ip();try{Ko(B["dataLayer"],Yd.C)}catch(b){}return a}
var lp=function(){var a=Lf("dataLayer",[]),b=Lf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Pj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new cp(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);dp.push.apply(dp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ip()&&h};var d=a.slice(0);dp.push.apply(dp,d);kp()&&N(jp)},kp=function(){var a=!0;return a};var mp={};mp.ic=new String("undefined");
var np=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===mp.ic?b:a[d]);return c.join("")}};np.prototype.toString=function(){return this.a("undefined")};np.prototype.valueOf=np.prototype.toString;mp.Ag=np;mp.jd={};mp.eh=function(a){return new np(a)};var op={};mp.ei=function(a,b){var c=Xg();op[c]=[a,b];return c};mp.ef=function(a){var b=a?0:1;return function(c){var d=op[c];if(d&&"function"===typeof d[b])d[b]();op[c]=void 0}};mp.Dh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};mp.Yh=function(a){if(a===mp.ic)return a;var b=Xg();mp.jd[b]=a;return'google_tag_manager["'+Yd.C+'"].macro('+b+")"};mp.Ph=function(a,b,c){a instanceof mp.Ag&&(a=a.a(mp.ei(b,c)),b=Ia);return{wd:a,J:b}};var pp=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Tf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},qp=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},rp=function(a,b,c){qp(a)[b]=c},sp=function(a,b,c,d){var e=qp(a),f=$a(e,b,d);e[b]=c(f)},tp=function(a,b,c){var d=qp(a);return $a(d,b,c)};var up=["input","select","textarea"],vp=["button","hidden","image","reset","submit"],wp=function(a){var b=a.tagName.toLowerCase();return!Oa(up,function(c){return c===b})||"input"===b&&Oa(vp,function(c){return c===a.type.toLowerCase()})?!1:!0},xp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Wf(a,["form"],100)},yp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(wp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var zp=!!B.MutationObserver,Ap=void 0,Bp=function(a){if(!Ap){var b=function(){var c=L.body;if(c)if(zp)(new MutationObserver(function(){for(var e=0;e<Ap.length;e++)N(Ap[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Rf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ap.length;e++)N(Ap[e])}))})}};Ap=[];L.body?b():N(b)}Ap.push(a)};var Np=B.clearTimeout,Op=B.setTimeout,S=function(a,b,c){if(gj()){b&&N(b)}else return Nf(a,b,c)},Pp=function(){return new Date},Qp=function(){return B.location.href},Rp=function(a){return rh(th(a),"fragment")},Sp=function(a){return sh(th(a))},Tp=function(a,b){return ch(a,b||2)},Up=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fp(a)):d=fp(a);return d},Vp=function(a,b){B[a]=b},T=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Wp=function(a,b,c){return xh(a,b,void 0===c?!0:!!c)},Xp=function(a,b,c){return 0===Gh(a,b,c)},Yp=function(a,b){if(gj()){b&&N(b)}else Pf(a,b)},Zp=function(a){return!!tp(a,"init",!1)},$p=function(a){rp(a,"init",!0)},aq=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Qg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(ij("https://","http://",c))},bq=function(a,
b){var c=a[b];return c},cq=function(a,b,c){Ik&&(Cb(a)||Mk(c,b,a))};
var dq=mp.Ph;function Aq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Bq=new Qa;function Cq(a,b){function c(g){var h=th(g),l=rh(h,"protocol"),n=rh(h,"host",!0),p=rh(h,"port"),q=rh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Dq(a){return Eq(a)?1:0}
function Eq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Dq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Aq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=Bq.get(q);t||(t=new RegExp(c,p),Bq.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Cq(b,c)}return!1};var Fq={},Gq=encodeURI,W=encodeURIComponent,Hq=Qf;var Iq=function(a,b){if(!a)return!1;var c=rh(th(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Jq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Fq.Eh=function(){var a=!1;return a};var tr=null,ur=[],vr=0,wr=null;function xr(){var a=Za()-vr;0<=a?(wr&&(B.clearTimeout(wr),wr=null),yr()):wr||(wr=B.setTimeout(function(){yr();wr=null},0-a))}function yr(){vr=Za();var a=ur;ur=[];var b,c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];b=c?c.call(a):{next:da(a)};for(var d=b.next();!d.done;d=b.next()){var e=d.value;e()}tr&&(tr.takeRecords(),ur.length||(tr&&(tr.disconnect(),tr=null),wr&&(B.clearTimeout(wr),wr=null)))};function as(){return B.gaGlobal=B.gaGlobal||{}}var bs=function(){var a=as();a.hid=a.hid||Pa();return a.hid},cs=function(a,b){var c=as();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Ks=function(a,b){var c;var d=ls(a);d?(js(d,a)||(I(25),a.abort()),c=d):c=void 0;var e=c,f;a:{var g=a.L[H.Xa];g?(g=""+g,gs(g,a)||(I(31),a.abort()),cs(g,qg(H.M)),f=g):(I(32),a.abort(),f="")}return{clientId:f,Af:e}};var Ls=window,Ms=document,Ns=function(a){var b=Ls._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ls["ga-disable-"+a])return!0;try{var c=Ls.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=vh("AMP_TOKEN",String(Ms.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ms.getElementById("__gaOptOutExtension")?!0:!1};function Qs(a){delete a.eventModel[H.Ab];Ts(a.eventModel)}var Ts=function(a){Sa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Sa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Ws=function(a,b,c){un(b,c,a)},Xs=function(a,b,c){un(b,c,a,!0)},Zs=function(a,b){};
function Ys(a,b){}var Z={b:{}};
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(w){for(var z=[],A=w.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];p.test(A[C])||z.push(D)}return z}function c(){var w=0,z=0;return function(){var A=$l(),C=A.height;w=Math.max(v.scrollLeft+A.width,w);z=Math.max(v.scrollTop+C,z);return{hh:w,ih:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(w,z,A,C){var D=l(z),F={},M;for(M in D){F.Ua=M;if(D.hasOwnProperty(F.Ua)){var Q=Number(F.Ua);w<Q||(Up({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[F.Ua].join(",")}),sp("sdl",z,function(ba){return function(ca){delete ca[ba.Ua];return ca}}(F),{}))}F={Ua:F.Ua}}}function f(){var w=y(),z=w.hh,A=w.ih,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,
"horiz.pix",q.kc,t.Ke);e(C,"horiz.pct",q.jc,t.Ke);e(A,"vert.pix",q.kc,t.Ye);e(D,"vert.pct",q.jc,t.Ye);rp("sdl","pending",!1)}function g(){var w=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(w=50,z=!0);var A=0,C=!1,D=function(){C?A=Op(D,w):(A=0,f(),Zp("sdl")&&!a()&&(Sf(r,"scroll",F),Sf(r,"resize",F),rp("sdl","init",!1)));C=!1},F=function(){z&&y();A?C=!0:(A=Op(D,w),rp("sdl","pending",!0))};return F}function h(w,z,A){if(z){var C=b(String(w));sp("sdl",A,function(D){for(var F=0;F<
C.length;F++){var M=String(C[F]);D.hasOwnProperty(M)||(D[M]=[]);D[M].push(z)}return D},{})}}function l(w){return tp("sdl",w,{})}function n(w){N(w.vtp_gtmOnSuccess);var z=w.vtp_uniqueTriggerId,A=w.vtp_horizontalThresholdsPixels,C=w.vtp_horizontalThresholdsPercent,D=w.vtp_verticalThresholdUnits,F=w.vtp_verticalThresholdsPixels,M=w.vtp_verticalThresholdsPercent;switch(w.vtp_horizontalThresholdUnits){case q.kc:h(A,z,"horiz.pix");break;case q.jc:h(C,z,"horiz.pct")}switch(D){case q.kc:h(F,z,"vert.pix");
break;case q.jc:h(M,z,"vert.pct")}Zp("sdl")?tp("sdl","pending")||(x||(d(),x=!0),N(function(){return f()})):(d(),x=!0,v&&($p("sdl"),rp("sdl","pending",!0),N(function(){f();if(a()){var Q=g();Rf(r,"scroll",Q);Rf(r,"resize",Q)}else rp("sdl","init",!1)})))}var p=/^\s*$/,q={jc:"PERCENT",kc:"PIXELS"},t={Ye:"vertical",Ke:"horizontal"},r,u,v,x=!1,y;(function(w){Z.__sdl=w;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(w){w.vtp_triggerStartOption?n(w):Pn(function(){n(w)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);cq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){cq(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(hh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=Tp("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?rh(th(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Sp(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=pp(c,"gtm.click");Up(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Zp("cl")){var c=T("document");Rf(c,"click",a,!0);$p("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];cq(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Wp(a.vtp_name,Tp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(p,q,t){if(!m(t))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Na(e,t))return}else if("write"===q){if(-1<Na(f,t))return}else if("readwrite"===q){if(-1<Na(f,t)&&-1<Na(e,t))return}else if("execute"===q){if(-1<Na(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();
Z.b.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Up({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],n=l.indexOf(g);-1!==n&&(l.splice(n,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Z.__tg=g;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,n=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[n];p?b(n,p):e.push(n)}else{c[h]=l;for(var q=0,t;t=l[q];q++)d[t]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Tp("gtm.url",1);c=c||Qp();var d=b[a("vtp_component")];if(!d||"URL"==d)return Sp(String(c));var e=th(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?La(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var p=0;p<n.length;p++){var q=rh(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=rh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Tp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;cq(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.Bd&&b.Cd>=b.Bd)b.xd&&T("self").clearInterval(b.xd);else{b.Cd++;var c=Pp().getTime();Up({event:b.O,"gtm.timerId":b.xd,"gtm.timerEventNumber":b.Cd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Bd,"gtm.timerStartTime":b.Cf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Cf,"gtm.triggers":b.wi})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{O:b.vtp_eventName,Cd:0,interval:Number(b.vtp_interval),Bd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),wi:String(b.vtp_uniqueTriggerId||"0"),Cf:Pp().getTime()};c.xd=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(q){return qg(q)}function b(q,t){if(jg()&&!e[q]){var r=function(){var u=dk(),v="gtm"+Xg(),x=n(t),y={name:v};l(x,y,!0);u("create",q,y);u(function(){u.remove(v)})};mg(r,H.M);mg(r,H.s);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var x=g[v]?Wa(q[v]):q[v];"anonymizeIp"!=v||x||
(x=void 0);t[v]=x;u++}return u},n=function(q){var t={};q.vtp_gaSettings&&E(Jq(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Jq(q.vtp_fieldsToSet,"fieldName","value"),t);qg(H.M)||(t.storage="none");qg(H.s)||(t.allowAdFeatures=!1,t.storeGac=!1);Vm()||(t.allowAdFeatures=!1);Um()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},p=function(q){function t(ta,P){void 0!==P&&F("set",ta,P)}var r={},u={},v={},x={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;E(Jq(y.vtp_contentGroup,"index","group"),u);E(Jq(y.vtp_dimension,"index","dimension"),v);E(Jq(y.vtp_metric,"index","metric"),x);var w=E(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=
void 0;w.vtp_metric=void 0;q=E(q,w)}E(Jq(q.vtp_contentGroup,"index","group"),u);E(Jq(q.vtp_dimension,"index","dimension"),v);E(Jq(q.vtp_metric,"index","metric"),x);var z=n(q),A=fk(q.vtp_functionName);if(Ja(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Xg(),C=D+".");var F=function(ta){var P=[].slice.call(arguments,0);P[0]=C+P[0];A.apply(window,P)},M=function(ta,P){return void 0===P?P:ta(P)},Q=function(ta,P){if(P)for(var fb in P)P.hasOwnProperty(fb)&&
F("set",ta+fb,P[fb])},ba=function(){},ca={name:D};l(z,ca,!0);var va=q.vtp_trackingId||r.trackingId;A("create",va,ca);F("set","&gtm",sl(!0));
jg()&&(F("set","&gcs",rg()),b(va,q));z._x_19&&(null==Kf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(kk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ta,P){void 0!==q[P]&&F("set",ta,q[P])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",x);var J={};l(z,J,!1)&&F("set",J);var K;
q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ta=z&&z.hitCallback;Ja(ta)&&ta();q.vtp_gtmOnSuccess()});if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());var V={hitType:"event",eventCategory:String(q.vtp_eventCategory||r.category),eventAction:String(q.vtp_eventAction||r.action),eventLabel:M(String,q.vtp_eventLabel||r.label),eventValue:M(Va,q.vtp_eventValue||
r.value)};l(K,V,!1);F("send",V);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var fc=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:fc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Cc="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:Cc})}K?F("send","pageview",K):F("send","pageview");Wa(z.urlPassthrough)&&hk(C)}if(!c){var jd=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(jd="internal/"+jd);c=!0;var kd=el(z._x_19,"/analytics.js"),Df=ij("https:","http:","//www.google-analytics.com/"+jd,z&&!!z.forceSSL);S("analytics.js"===jd&&kd?kd:Df,function(){var ta=dk();ta&&ta.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(q){sg(function(){p(q)},[H.M,H.s])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Script URL must be a string.");try{if(Be(th(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();


Z.b.opt=["google"],function(){var a;(function(b){Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.priorityOverride=0})(function(b){var c={};if(b.vtp_gaSettings){var d=b.vtp_gaSettings;E(Jq(d.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;d.vtp_fieldsToSet=void 0;var e=E(d);b=E(b,e)||{}}E(Jq(b.vtp_fieldsToSet,"fieldName","value"),c);var f=fk(b.vtp_functionName);if(Ja(f)){f.r=!0;var g="",h="";b.vtp_setTrackerName&&
"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(h=b.vtp_trackerName,g=h+"."):(h="gtm"+Xg(),g=h+".");var l={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,
javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},p=function(x,y,w){var z=0,A;for(A in x)if(x.hasOwnProperty(A)&&(w&&l[A]||!w&&void 0===l[A])){var C=n[A]?Wa(x[A]):x[A];"anonymizeIp"!==A||C||(C=void 0);y[A]=C;z++}return z},q={name:h};p(c,q,!0);var t={"&gtm":sl(!0)};p(c,t,!1);var r=encodeURI(ij("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));f("create",b.vtp_trackingId,q);f(g+
"set",t);f(g+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});f(b.vtp_gtmOnSuccess);f(g+"require","render");a||(a=!0,S(r,function(){return dk().loaded||b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var u=T("dataLayer"),v=u&&u.hide;v&&(v.end||!0===v["GTM-NWDMT9Q"])&&(v[b.vtp_optimizeContainerId]=!0)}else N(b.vtp_gtmOnFailure)})}();


Z.b.aev=["google"],function(){function a(r,u){var v=hh(r,"gtm");if(v)return v[u]}function b(r,u,v,x){x||(x="element");var y=r+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var z=a(r,x);if(z&&(w=v(z),p[y]=w,q.push(y),35<q.length)){var A=q.shift();delete p[A]}}return w}function c(r,u,v){var x=a(r,t[u]);return void 0!==x?x:v}function d(r,u){if(!r)return!1;var v=e(Qp());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(r))return!1}else{var z=w;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;x.push(e(z))}}}return!Iq(r,x)}function e(r){n.test(r)||(r="http://"+r);return rh(th(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+r,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return Tf(r,"value");case "button":return Uf(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)wp(r.elements[v])&&
u++;return u}}function l(r,u,v){var x=a(r,"interactedFormField");return x&&Tf(x,u)||v}var n=/^https?:\/\//i,p={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,x=r.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Uf)||v;case "URL":var w;a:{var z=String(a(u,"elementUrl")||v||""),A=th(z),C=String(r.vtp_component||"URL");switch(C){case "URL":w=z;break a;case "IS_OUTBOUND":w=d(z,r.vtp_affiliatedDomains);break a;default:w=rh(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return w;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
x,v);else{var F=r.vtp_attribute,M=a(u,"element");D=M&&Tf(M,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,ba=b(u,"MD",Ip);return Q&&ba?Lp(ba,Q)||v:ba||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);cq(ca,"aev",r.vtp_gtmEventId);return ca}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Jd.Ka]=null;c[Jd.rg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=pf(T("UET"),{ti:b.vtp_tagId,q:d});B[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();






Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(n.src=p,Mf(n,l));d.insertBefore(n,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Pj(function(){var g=O.postscribe,h={done:e},l=L.createElement("div");l.style.display="none";l.style.visibility="hidden";L.body.appendChild(l);try{g(l,d,h)}catch(n){N(f)}})};var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=dq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.wd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Vf(g),h,e)()}else Op(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=
!0;Z.__html.priorityOverride=0}();






Z.b.lcl=[],function(){function a(){var c=T("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Ch||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Wf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=tp("lcl",h?"nv.mwt":"mwt",0),n;n=h?tp("lcl","nv.ids",[]):tp("lcl","ids",[]);if(n.length){var p=pp(g,"gtm.linkClick",n);if(b(f,g,c)&&!h&&l&&g.href){var q=String(bq(g,"rel")||""),t=!!Oa(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var r=T((bq(g,"target")||"_self").substring(1)),u=!0;if(Up(p,gp(function(){var v;if(v=u&&r){var x;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(w){if(!c.createEvent){x=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Ch=!0;f.target.dispatchEvent(y);x=!0}else x=!1;v=!x}v&&(r.location.href=bq(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Up(p,function(){},l||2E3);return!0}}};Rf(c,"click",e,!1);Rf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=bq(d,"href"),g=f.indexOf("#"),h=bq(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Sp(f),n=Sp(e.location);return l!==n}return!0}(function(c){Z.__lcl=c;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(n){return Math.max(f,n)};sp("lcl","mwt",h,0);e||sp("lcl","nv.mwt",h,0)}var l=function(n){n.push(g);return n};sp("lcl","ids",l,[]);e||sp("lcl","nv.ids",l,[]);Zp("lcl")||(a(),$p("lcl"));N(c.vtp_gtmOnSuccess)})}();
Z.b.evl=["google"],function(){function a(){var f=Number(Tp("gtm.start"))||0;return Pp().getTime()-f}function b(f,g,h,l){function n(){if(!Zl(f.target)){g.has(d.mc)||g.set(d.mc,""+a());g.has(d.fd)||g.set(d.fd,""+a());var q=0;g.has(d.oc)&&(q=Number(g.get(d.oc)));q+=100;g.set(d.oc,""+q);if(q>=h){var t=pp(f.target,"gtm.elementVisibility",[g.a]),r=am(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.fd));t["gtm.visibleLastTime"]=Number(g.get(d.mc));
Up(t);l()}}}if(!g.has(d.Cb)&&(0==h&&n(),!g.has(d.$a))){var p=T("self").setInterval(n,100);g.set(d.Cb,p)}}function c(f){f.has(d.Cb)&&(T("self").clearInterval(Number(f.get(d.Cb))),f.i(d.Cb))}var d={Cb:"polling-id-",fd:"first-on-screen-",mc:"recent-on-screen-",oc:"total-visible-time-",$a:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,w=null;if("CSS"===l){try{w=ug(n)}catch(F){I(46)}y=!!w&&v.length!=w.length}else if("ID"===l){var z=L.getElementById(n);z&&(w=[z],y=1!=v.length||v[0]!==z)}w||(w=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var C=
new e(v[A],r);c(C)}v=[];for(var D=0;D<w.length;D++)v.push(w[D]);0<=x&&gm(x);0<v.length&&(x=fm(h,v,[t]))}}function h(y){var w=new e(y.target,r);y.intersectionRatio>=t?w.has(d.$a)||b(y,w,q,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var A=new e(v[z],r);A.set(d.$a,"1");c(A)}gm(x);if(p&&Ap)for(var C=0;C<Ap.length;C++)Ap[C]===g&&Ap.splice(C,1)}:function(){w.set(d.$a,"1");c(w)}):(c(w),"MANY_PER_ELEMENT"===u&&w.has(d.$a)&&(w.i(d.$a),w.i(d.oc)),w.i(d.mc))}var l=f.vtp_selectorType,n;"ID"===l?n=String(f.vtp_elementId):
"CSS"===l&&(n=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],x=-1;g();p&&Bp(g);N(f.vtp_gtmOnSuccess)})}();


var $s={};$s.macro=function(a){if(mp.jd.hasOwnProperty(a))return mp.jd[a]},$s.onHtmlSuccess=mp.ef(!0),$s.onHtmlFailure=mp.ef(!1);$s.dataLayer=dh;$s.callback=function(a){Vg.hasOwnProperty(a)&&Ja(Vg[a])&&Vg[a]();delete Vg[a]};$s.bootstrap=0;$s._spx=!1;function at(){O[Yd.C]=$s;cb(Wg,Z.b);Bd=Bd||mp;Cd=Ud}
function bt(){Zf.gtm_3pds=!0;Zf.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};Tl();if(O[Yd.C]){var a=O.zones;a&&a.unregisterChild(Yd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ud.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)xd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)wd.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],q={},t=0;t<p.length;t++)q[p[t][0]]=Array.prototype.slice.call(p[t],1);vd.push(q)}zd=Z;Ad=Dq;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;wo();be=new ae(r);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Wg[w]=x}zo(v);at();lp();
Kj=!1;Lj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Nj();else{Rf(L,"DOMContentLoaded",Nj);Rf(L,"readystatechange",Nj);if(L.createEventObject&&L.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(M){}z&&Oj()}Rf(B,"load",Nj)}Mn=!1;"complete"===L.readyState?On():Rf(B,"load",On);
a:{if(!Ik)break a;B.setInterval(Jk,864E5);}var F=O;F.postscribe||(F.postscribe=B.postscribe||De);Tg=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var n=B["google.tagmanager.debugui2.queue"];n||(n=[],B["google.tagmanager.debugui2.queue"]=n,Nf("https://www.googletagmanager.com/debug/bootstrap"));return n},g="x"===rh(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=th(L.referrer);g="tagassistant.google.com"===qh(h,"host")}if(!g){var l=xh("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Kf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Kf,resume:function(){a()}}});return}a()})(bt);

})()
