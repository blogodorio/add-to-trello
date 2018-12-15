(function(){
var opts={"version":1,"apiEndpoint":"https://api.trello.com","authEndpoint":"https://trello.com","intentEndpoint":"https://trello.com"};
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=function(e){return"function"==typeof e},a={},c={};!function(e,t,n){for(var i,u,l=t,s=n.key,f=n.token,d=n.apiEndpoint,p=n.authEndpoint,v=n.intentEndpoint,h=n.version,y="".concat(d,"/").concat(h,"/"),m=e.location,g=function(e){var t={response_type:"token",key:s};return"".concat(p,"/").concat(h,"/authorize?").concat(l.param(l.extend(t,e)))},b={version:function(){return h},key:function(){return s},setKey:function(e){s=e},token:function(){return f},setToken:function(e){f=e},rest:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var c=r(function(){var e=r(arguments.length<=0?void 0:arguments[0],4),t=e[0],n=e[1],a=e[2],c=e[3];return o(n)&&(c=a,a=n,n={}),[t=t.replace(new RegExp("^/*"),""),n,a,c]}(n),4),i=c[0],u=c[1],d=c[2],p=c[3],v={url:"".concat(y).concat(i),type:e,data:{},dataType:"json",success:d,error:p};return s&&(v.data.key=s),f&&(v.data.token=f),null!=u&&l.extend(v.data,u),l.ajax(v)},authorized:function(){return null!=f},deauthorize:function(){u("token",f=null)},authorize:function(t){var n=l.extend(!0,{type:"redirect",persist:!0,interactive:!0,scope:{read:!0,write:!1,account:!1},expiration:"30days"},t),r=/[&#]?token=([0-9a-f]{64})/,s=function(){n.persist&&null!=f&&u("token",f)};if(n.persist&&null==f&&(f=i("token")),null==f){var d=r.exec(m.hash);d&&(f=d[1])}if(this.authorized())return s(),m.hash=m.hash.replace(r,""),void(o(n.success)&&n.success());if(n.interactive){var v=Object.keys(n.scope||{}).reduce(function(e,t){return n.scope[t]&&e.push(t),e},[]).join(",");switch(n.type){case"popup":!function(){!function(e,t){null==c[e]?(a[e]||(a[e]=[]),a[e].push(t)):t(c[e])}("authorized",function(e){if(e)return s(),void(o(n.success)&&n.success());o(n.error)&&n.error()});var t=e.screenX+(e.innerWidth-550)/2,r=e.screenY+(e.innerHeight-725)/2,i=new RegExp("^[a-z]+://[^/]*").exec(m),u=i&&i[0],l=e.open(g({return_url:u,callback_method:"postMessage",scope:v,expiration:n.expiration,name:n.name}),"trello","width=".concat(550,",height=").concat(725,",left=").concat(t,",top=").concat(r));o(e.addEventListener)&&e.addEventListener("message",function t(n){n.origin===p&&n.source===l&&(null!=n.source&&n.source.close(),f=null!=n.data&&/[0-9a-f]{64}/.test(n.data)?n.data:null,o(e.removeEventListener)&&e.removeEventListener("message",t,!1),function(e,t){if(c[e]=t,a[e]){var n=a[e];delete a[e];var r=!0,o=!1,i=void 0;try{for(var u,l=n[Symbol.iterator]();!(r=(u=l.next()).done);r=!0)(0,u.value)(t)}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}}}("authorized",b.authorized()))},!1)}();break;default:e.location=g({redirect_uri:m.href,callback_method:"fragment",scope:v,expiration:n.expiration,name:n.name})}}else o(n.error)&&n.error()},addCard:function(t,n){var r={mode:"popup",source:s||e.location.host},a=function(n){o(e.addEventListener)&&e.addEventListener("message",function t(r){e.removeEventListener("message",t);try{var o=JSON.parse(r.data);if(o.success)return void n(null,o.card);n(new Error(o.error))}catch(e){}},!1);var a=e.screenX+(e.outerWidth-500)/2,c=e.screenY+(e.outerHeight-600)/2;return e.open("".concat(v,"/add-card?").concat(l.param(l.extend(r,t))),"trello","width=".concat(500,",height=").concat(600,",left=").concat(a,",top=").concat(c))};if(null==n)return e.Promise?new Promise(function(e,t){return a(function(n,r){n?t(n):e(r)})}):void a(function(){});a(n)}},x=["GET","PUT","POST","DELETE"],k=function(){var e=x[w];b[e.toLowerCase()]=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.rest.apply(this,[e].concat(n))}},w=0;w<x.length;w++)k();b.del=b.delete;for(var E=["actions","cards","checklists","boards","lists","members","organizations","lists"],_=function(){var e=E[j];b[e]={get:function(t,n,r,o){return b.get("".concat(e,"/").concat(t),n,r,o)}}},j=0;j<E.length;j++)_();e.Trello=b;var z=e.localStorage;null!=z?(i=function(e){return z["trello_"+e]},u=function(e,t){if(null!==t)try{z["trello_"+e]=t}catch(e){}else delete z["trello_"+e]}):(i=function(){},u=function(){})}(window,jQuery,opts)}]);})()
