var _typeof4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof4(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof4(e)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof3(e)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof2(e)};!function(e){var o=!1;if("function"==typeof define&&define.amd&&(define(e),o=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),o=!0),!o){var t=window.Cookies,n=window.Cookies=e();n.noConflict=function(){return window.Cookies=t,n}}}(function(){function a(){for(var e=0,o={};e<arguments.length;e++){var t=arguments[e];for(var n in t)o[n]=t[n]}return o}return function e(s){function m(e,o,t){var n;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(t=a({path:"/"},m.defaults,t)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*t.expires),t.expires=r}t.expires=t.expires?t.expires.toUTCString():"";try{n=JSON.stringify(o),/^[\{\[]/.test(n)&&(o=n)}catch(e){}o=s.write?s.write(o,e):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var f in t)t[f]&&(i+="; "+f,!0!==t[f]&&(i+="="+t[f]));return document.cookie=e+"="+o+i}e||(n={});for(var c=document.cookie?document.cookie.split("; "):[],y=/(%[0-9A-Z]{2})+/g,p=0;p<c.length;p++){var u=c[p].split("="),l=u.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var d=u[0].replace(y,decodeURIComponent);if(l=s.read?s.read(l,d):s(l,d)||l.replace(y,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(e){}if(e===d){n=l;break}e||(n[d]=l)}catch(e){}}return n}}return(m.set=m).get=function(e){return m.call(m,e)},m.getJSON=function(){return m.apply({json:!0},[].slice.call(arguments))},m.defaults={},m.remove=function(e,o){m(e,"",a(o,{expires:-1}))},m.withConverter=e,m}(function(){})});