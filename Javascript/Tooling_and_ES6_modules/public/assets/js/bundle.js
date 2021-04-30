(()=>{"use strict";var n,r,e,t={122:(n,r,e)=>{e.d(r,{Z:()=>A});var t=e(15),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,400&display=swap);"]),i.push([n.id,":root {\n    --primary-color: rgb(13, 106, 134);\n    --primary-color-lighter: rgb(41, 161, 182);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border: 1px solid var(--primary-color);\n    border-radius: 10px;\n}\nform label {\n    color: #000;\n    font-weight: bold;\n    font-size: 0.9em;\n    margin-bottom: 30px;\n}\nform input, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 40px;\n    padding:0 10px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: bold;\n    height: 40px;\n    cursor: pointer;\n    margin-top: 40px;\n}\n\nform button:hover {\n    background-color: var(--primary-color-lighter);\n}\n\nul {\n    list-style-type:  none;\n}\n#container-table {\n    display: flex;\n    margin-bottom: 30px;\n}\n\n#side-table{\n    margin-left: 130px;\n    \n}\n\n.paragraph-result, .bad {\n    background: rgb(109, 255, 182);\n    padding: 10px 10px;\n}\n\n.bad {\n    background: rgb(255, 150, 150);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAGA;IACI,kCAAkC;IAClC,0CAA0C;AAC9C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,8BAA8B;AAClC",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,400&display=swap');\n\n\n:root {\n    --primary-color: rgb(13, 106, 134);\n    --primary-color-lighter: rgb(41, 161, 182);\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border: 1px solid var(--primary-color);\n    border-radius: 10px;\n}\nform label {\n    color: #000;\n    font-weight: bold;\n    font-size: 0.9em;\n    margin-bottom: 30px;\n}\nform input, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 40px;\n    padding:0 10px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: bold;\n    height: 40px;\n    cursor: pointer;\n    margin-top: 40px;\n}\n\nform button:hover {\n    background-color: var(--primary-color-lighter);\n}\n\nul {\n    list-style-type:  none;\n}\n#container-table {\n    display: flex;\n    margin-bottom: 30px;\n}\n\n#side-table{\n    margin-left: 130px;\n    \n}\n\n.paragraph-result, .bad {\n    background: rgb(109, 255, 182);\n    padding: 10px 10px;\n}\n\n.bad {\n    background: rgb(255, 150, 150);\n}"],sourceRoot:""}]);const A=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,a=void 0;try{for(var i,A=n[Symbol.iterator]();!(t=(i=A.next()).done)&&(e.push(i.value),!r||e.length!==r);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==A.return||A.return()}finally{if(o)throw a}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),s="/*# ".concat(c," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),a=[];function i(n){for(var r=-1,e=0;e<a.length;e++)if(a[e].identifier===n){r=e;break}return r}function A(n,r){for(var e={},t=[],o=0;o<n.length;o++){var A=n[o],c=r.base?A[0]+r.base:A[0],s=e[c]||0,l="".concat(c," ").concat(s);e[c]=s+1;var p=i(l),u={css:A[1],media:A[2],sourceMap:A[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:m(u,r),references:1}),t.push(l)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=e.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var s,l=(s=[],function(n,r){return s[n]=r,s.filter(Boolean).join("\n")});function p(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var a=document.createTextNode(o),i=n.childNodes;i[r]&&n.removeChild(i[r]),i.length?n.insertBefore(a,i[r]):n.appendChild(a)}}function u(n,r,e){var t=e.css,o=e.media,a=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,d=0;function m(n,r){var e,t,o;if(r.singleton){var a=d++;e=f||(f=c(r)),t=p.bind(null,e,a,!1),o=p.bind(null,e,a,!0)}else e=c(r),t=u.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=A(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=i(e[t]);a[o].references--}for(var c=A(n,r),s=0;s<e.length;s++){var l=i(e[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=c}}}}},o={};function a(n){var r=o[n];if(void 0!==r)return r.exports;var e=o[n]={id:n,exports:{}};return t[n](e,e.exports,a),e.exports}a.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return a.d(r,{a:r}),r},a.d=(n,r)=>{for(var e in r)a.o(r,e)&&!a.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},a.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),n=a(379),r=a.n(n),e=a(122),r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals})();
//# sourceMappingURL=bundle.js.map