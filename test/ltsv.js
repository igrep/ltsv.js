/*!
 * @license ltsv.js Copyright(c) 2013-2014 sasa+1
 * https://github.com/sasaplus1/ltsv.js
 * Released under the MIT license.
 */
!function(r){var e,t,t,n=function(){function r(r){var t,n,i=e.getType(r),o=[];if("object"!==i&&"array"!==i)throw new TypeError("data must be an Object or Array: "+i);if(e.isArray(r))for(t=0,n=r.length;n>t;++t)o[t]=a(r[t]);else o.push(a(r));return o.join("\n")}function n(r){var t,n,a=e.getType(r),o=[];if("object"!==a&&"array"!==a)throw new TypeError("data must be an Object or Array: "+a);if(e.isArray(r))for(t=0,n=r.length;n>t;++t)o[t]=i(r[t]);else o.push(i(r));return o.join("\n")}function a(r){var t,n,a,i,o=e.getType(r);if("object"!==o)throw new TypeError("object must be an Object: "+o);for(t=e.getObjectKeys(r),n=[],a=0,i=t.length;i>a;++a)n[a]=t[a]+":"+r[t[a]];return n.join("	")}function i(r){var n,a,i,o,c,u,f=e.getType(r);if("object"!==f)throw new TypeError("object must be an Object: "+f);for(n=e.getObjectKeys(r),a=[],i=0,o=n.length;o>i;++i){if(c=n[i],u=r[c],!t.isValidLabel(c))throw new SyntaxError('unexpected character of label: "'+c+'"');if(!t.isValidValue(u))throw new SyntaxError('unexpected character of value: "'+u+'"');a[i]=c+":"+u}return a.join("	")}return{format:r,formatStrict:n}}(),a=function(){function r(r){return i(r,e)}function e(r){return o(r,c)}function n(r){return i(r,a)}function a(r){return o(r,u)}function i(r,e){var t,n,a=String(r).replace(/(?:\r?\n)+$/,"").split(/\r?\n/),i=[];for(t=0,n=a.length;n>t;++t)i[t]=e(a[t]);return i}function o(r,e){var t,n,a,i=String(r).replace(/(?:\r?\n)+$/,"").split("	"),o={};for(t=0,n=i.length;n>t;++t)a=e(i[t]),o[a.label]=a.value;return o}function c(r){var e=String(r),t=e.indexOf(":");if(-1===t)throw new SyntaxError('field separator not found: "'+e+'"');return{label:e.slice(0,t),value:e.slice(t+1)}}function u(r){var e=c(r);if(!t.isValidLabel(e.label))throw new SyntaxError('unexpected character of label: "'+e.label+'"');if(!t.isValidValue(e.value))throw new SyntaxError('unexpected character of value: "'+e.value+'"');return e}return{parse:r,parseLine:e,parseStrict:n,parseLineStrict:a}}(),e=function(){function r(r){var t,n=e(r),a=[];switch(n){case"array":case"function":case"object":break;default:throw new TypeError("object must be an Object: "+r)}for(t in r)r.hasOwnProperty(t)&&a.push(t);return a}function e(r){return null===r?"null":n.isArray(r)?"array":typeof r}function t(r){return"[object Array]"===Object.prototype.toString.call(r)}var n={isArray:Array.isArray||t};return{getObjectKeys:r,getType:e,isArray:t}}(),t=function(){function r(r){return t.test(r)}function e(r){return n.test(r)}var t=/^[0-9A-Za-z_.-]+$/,n=/^[\x01-\x08\x0B\x0C\x0E-\xFF]*$/;return{isValidLabel:r,isValidValue:e}}(),ltsv={format:n.format,formatStrict:n.formatStrict,parse:a.parse,parseLine:a.parseLine,parseStrict:a.parseStrict,parseLineStrict:a.parseLineStrict,getObjectKeys:e.getObjectKeys,getType:e.getType,isArray:e.isArray,isValidLabel:t.isValidLabel,isValidValue:t.isValidValue};"function"==typeof define&&define.amd?define(function(){return ltsv}):r.ltsv=ltsv}(this);