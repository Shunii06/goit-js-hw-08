var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),(0,r.register)("9OeKo",function(t,n){var r="Expected a function",o=0/0,i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==v.call(t))return o;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):a.test(e)?o:+e}t.exports=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),function(e,t,n){var o,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw TypeError(r);function O(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function x(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function h(){var e,n,r,o=g();if(x(o))return j(o);f=setTimeout(h,(e=o-l,n=o-c,r=t-e,d?p(r,a-n):r))}function j(e){return(f=void 0,v&&o)?O(e):(o=i=void 0,u)}function w(){var e,n=g(),r=x(n);if(o=arguments,i=this,l=n,r){if(void 0===f)return c=e=l,f=setTimeout(h,t),s?O(e):u;if(d)return f=setTimeout(h,t),O(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?u:j(g())},w}(e,t,{leading:o,maxWait:t,trailing:i})}});var o=r("9OeKo");document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),n=e.querySelector('textarea[name="message"]'),r=(o&&o.__esModule?o.default:o)(()=>{let e={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500),i=()=>{let e=localStorage.getItem("feedback-form-state");if(e){let r=JSON.parse(e);t.value=r.email||"",n.value=r.message||""}};e.addEventListener("input",()=>{r()}),window.addEventListener("load",()=>{i()}),e.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state"),t.value="",n.value="",console.log("Form Data:",{email:"",message:""})})});
//# sourceMappingURL=03-feedback.7c7851a0.js.map
