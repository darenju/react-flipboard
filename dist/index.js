!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactFlipPage=e(require("react")):t.ReactFlipPage=e(t.react)}(window,function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(e,n){e.exports=t},function(t,e,n){t.exports=n(2)()},function(t,e,n){"use strict";var o=n(3);function r(){}t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(9)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(6)(!1);var o=n(7)(n(8));e.push([t.i,".rfp-swipeHint {\n  animation: 2s ease-in-out rfp-swipeHint-vertical 2;\n  background-color: rgba(255,255,255,0.5);\n  border-radius: 15px;\n  box-sizing: border-box;\n  height: 30px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 30px;\n}\n.rfp-swipeHint--vertical {\n  animation-name: rfp-swipeHint-vertical;\n  bottom: 20%;\n  left: 50%;\n  margin-left: -15px;\n}\n.rfp-swipeHint--horizontal {\n  animation-name: rfp-swipeHint-horizontal;\n  margin-top: -15px;\n  right: 20%;\n  top: 50%;\n}\n.rfp-swipeHint:before {\n  border-radius: 15px;\n  border: 3px double rgba(255,255,255,0.5);\n  box-sizing: border-box;\n  content: '';\n  height: 28px;\n  position: absolute;\n  width: 28px;\n}\n.rfp-swipeHint--vertical:before {\n  left: 50%;\n  margin-left: -14px;\n  top: 1px;\n}\n.rfp-swipeHint--horizontal:before {\n  left: 1px;\n  top: 1px;\n}\n.rfp-touchHint {\n  animation: 2s ease-in-out rfp-touchHint 2;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  z-index: 5;\n}\n.rfp-touchHint--vertical {\n  bottom: 5px;\n  left: 50%;\n  margin-left: -12px;\n}\n.rfp-touchHint--horizontal {\n  margin-top: -14px;\n  right: 5px;\n  top: 50%;\n}\n.rfp-touchHint:after, .rfp-swipeHint:after {\n  content: url("+o+");\n}\n.rfp-swipeHint:after {\n  position: absolute;\n  top: 11px;\n  left: 6px;\n}\n@keyframes rfp-swipeHint-vertical {\n  0% {\n    opacity: 0;\n    height: 30px;\n  }\n  20%, 40% {\n    opacity: 1;\n    height: 30px;\n  }\n  60%, 80% {\n    opacity: 1;\n    height: 60%;\n  }\n  100% {\n    opacity: 0;\n    height: 60%;\n  }\n}\n@keyframes rfp-swipeHint-horizontal {\n  0% {\n    opacity: 0;\n    width: 30px;\n  }\n  20%, 40% {\n    opacity: 1;\n    width: 30px;\n  }\n  60%, 80% {\n    opacity: 1;\n    width: 60%;\n  }\n  100% {\n    opacity: 0;\n    width: 60%;\n  }\n}\n@keyframes rfp-touchHint {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  40%,60% {\n    transform: scale(0.75);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e){t.exports="\"data:image/svg+xml,%3Csvg width='24px' height='29px' viewBox='0 0 24 29' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3Etouch%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='touch'%3E %3Cpath d='M12.1244203,7.32866727 C12.7498203,6.55580421 13.1244203,5.57164839 13.1244203,4.5 C13.1244203,2.0147185 11.1097018,0 8.6244203,0 C6.1391388,0 4.12442034,2.0147185 4.12442034,4.5 C4.12442034,5.57164839 4.49902039,6.55580421 5.1244203,7.32866727 L5.1244203,4.49129639 C5.1244203,2.56125662 6.6914237,1 8.6244203,1 C10.5534837,1 12.1244203,2.56310664 12.1244203,4.49129639 L12.1244203,7.32866727 L12.1244203,7.32866727 L12.1244203,7.32866727 Z' id='one-finger-tap-path' fill='%23000000'%3E%3C/path%3E %3Cpath d='M23.1244203,20.5 C23.1244203,25.1944206 19.3188409,29 14.6244203,29.0000003 C11.5115051,29.0000003 8.2262274,27.5474856 5.9652407,23.4282229 C2.70175208,17.4825159 -1.47172681,13.5832077 0.51553361,11.5959473 C1.9371827,10.1742982 4.16926196,11.5381668 6.1244203,13.3667868 L6.1244203,13.3667868 L6.1244203,4.50840855 C6.1244203,3.11541748 7.2437085,2 8.6244203,2 C10.0147583,2 11.1244203,3.12305276 11.1244203,4.50840855 L11.1244203,9.4983653 C11.5422506,9.1853054 12.0616174,9 12.6244203,9 C13.7069384,9 14.6193054,9.6774672 14.9702378,10.6281239 C15.4110134,10.2379894 15.9901312,10 16.6244203,10 C18.0147583,10 19.1244203,11.1182256 19.1244203,12.4976267 L19.1244203,12.5110883 C19.5422506,12.1985158 20.0616174,12.014191 20.6244203,12.014191 C22.0147583,12.014191 23.1244203,13.1335355 23.1244203,14.5143168 L23.1244203,20.5 L23.1244203,20.5 Z' id='one-finger-tap-path' fill='%23000000'%3E%3C/path%3E %3Cpath d='M14.6231595,27.9999999 C18.7659915,28 22.1244203,24.4147752 22.1244203,20.5 C22.1244203,20.5 22.1244203,22.8132437 22.1244203,20.5 L22.1244203,16.7491622 L22.1244203,14.5016756 C22.1244203,13.6723231 21.4586231,13 20.6244203,13 C19.7959932,13 19.1244203,13.6711894 19.1244203,14.5016756 L19.1244203,15 L18.1244203,15 L18.1244203,12.5064385 C18.1244203,11.6744555 17.4586231,11 16.6244203,11 C15.7959932,11 15.1244203,11.6715406 15.1244203,12.5064385 L15.1244203,14 L14.1244203,14 L14.1244203,11.5064385 C14.1244203,10.6744555 13.4586231,10 12.6244203,10 C11.7959932,10 11.1244203,10.6715406 11.1244203,11.5064385 L11.1244203,15 L10.1244203,15 L10.1244203,4.50524116 C10.1244203,3.67391942 9.4586231,3 8.6244203,3 C7.7959932,3 7.1244203,3.66712976 7.1244203,4.50524116 L7.1244203,15.7999878 C5.0660207,13.599567 2.35605012,11.1791206 1.24545305,12.2957153 C0.15828327,13.3887562 2.95978233,16.4007216 6.8717958,22.9830936 C8.6344162,25.9488875 10.8647052,27.9995418 14.6231595,27.9999999 L14.6231595,27.9999999 Z' id='one-finger-tap-path' fill='%23FFFFFF'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E\""},function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),a=null,s=0,c=[],p=n(10);function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function f(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function d(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return g(e,t.attrs),f(t,e),e}function g(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function v(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var c=s++;n=a||(a=d(e)),o=y.bind(null,n,c,!1),r=y.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(e,t.attrs),f(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=d(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){h(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return l(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&l(u(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(1),a=n.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,l(e).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,r.a.PureComponent),function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(e,[{key:"render",value:function(){return this.props.component}}]),e}();f.propTypes={component:a.a.node.isRequired};var h=f,d=(n(4),"0 -100px 100px -100px rgba(0,0,0,0.25) inset"),g="-100px 0 100px -100px rgba(0,0,0,0.25) inset",v="0 100px 100px -100px rgba(0,0,0,0.25) inset",m="100px 0 100px -100px rgba(0,0,0,0.25) inset";function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var C=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object.assign.apply(Object,[{}].concat(e))},P=function(t){t.preventDefault()},O=function(t){return{posX:t.pageX||t.clientX||t.touches&&t.touches[0].pageX,posY:t.pageY||t.clientY||t.touches&&t.touches[0].pageY}},E=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=function(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?x(t):e}(this,w(e).call(this,t))).state={page:t.startAt,startY:-1,diffY:0,timestamp:0,angle:0,rotate:0,direction:"",lastDirection:"",secondHalfStyle:{},firstHalfStyle:{},canAnimate:!0},n.startMoving=n.startMoving.bind(x(x(n))),n.moveGesture=n.moveGesture.bind(x(x(n))),n.stopMoving=n.stopMoving.bind(x(x(n))),n.reset=n.reset.bind(x(x(n))),n.mouseLeave=n.mouseLeave.bind(x(x(n))),n.incrementPage=n.incrementPage.bind(x(x(n))),n.decrementPage=n.decrementPage.bind(x(x(n))),n.hasNextPage=n.hasNextPage.bind(x(x(n))),n.hasPreviousPage=n.hasPreviousPage.bind(x(x(n))),n.turnRightOrDown=n.turnRightOrDown.bind(x(x(n))),n.turnLeftOrUp=n.turnLeftOrUp.bind(x(x(n))),n.transition="transform ".concat(n.props.animationDuration/1e3,"s ease-in-out"),n.onStartSwipingCalled=!1,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,o["Component"]),function(t,e,n){e&&b(t.prototype,e),n&&b(t,n)}(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.showHint,o=e.showSwipeHint;n&&(this.hintTimeout=setTimeout(function(){return t.showHint()},o?1800:1e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.hintTimeout),clearTimeout(this.hintHideTimeout)}},{key:"getHeight",value:function(){return this.props.responsive?"100%":"".concat(this.props.height,"px")}},{key:"getWidth",value:function(){return this.props.responsive?"100%":"".concat(this.props.width,"px")}},{key:"isLastPage",value:function(){return this.state.page+1===o.Children.count(this.props.children)}},{key:"isFirstPage",value:function(){return 0===this.state.page}},{key:"showHint",value:function(){var t=this,e=this.props,n=e.orientation,o=e.perspective,r=this.transition;this.setState({secondHalfStyle:{transition:r}},function(){t.setState({secondHalfStyle:{transition:r,transform:"perspective(".concat(o,"vertical"===n?") rotateX(30deg)":") rotateY(-30deg)")}});t.hintHideTimeout=setTimeout(function(){return t.setState({secondHalfStyle:{transition:r}})},1e3)})}},{key:"incrementPage",value:function(){var t=this,e=o.Children.count(this.props.children),n=this.state.page;this.setState({page:(n+1)%e},function(){return t.props.onPageChange(t.state.page,"next")})}},{key:"decrementPage",value:function(){var t,e=this,n=o.Children.count(this.props.children),r=this.state.page;t=this.isFirstPage()?n-1:r-1,this.setState({page:t},function(){return e.props.onPageChange(e.state.page,"prev")})}},{key:"hasNextPage",value:function(){var t=this.props.loopForever;return!this.isLastPage()||t}},{key:"hasPreviousPage",value:function(){var t=this.props.loopForever;return!this.isFirstPage()||t}},{key:"startMoving",value:function(t){var e=t.target,n=e.tagName,o=e.className;if("BUTTON"!==n&&"A"!==n&&(P(t),!this.props.swipeImmune.some(function(t){return-1!==o.indexOf(t)}))){var r=O(t),i=r.posX,a=r.posY;this.setState({startX:i,startY:a,canAnimate:!1})}}},{key:"moveGesture",value:function(t){t.preventDefault();var e=O(t),n=e.posX,o=e.posY,r=this.props,i=r.orientation,a=r.treshold,s=r.maxAngle,c=r.perspective,p=r.reverse,l=this.state,u=l.startX,f=l.startY,h=l.diffX,d=l.diffY,g=l.direction,v=l.lastDirection;if(-1!==f){var m=o-f,y=n-u,b=("up"===g||"down"===g?m:y)/250*180,w=!1;"up"===g||"left"===g?w=p?!this.hasPreviousPage():!this.hasNextPage():"down"!==g&&"right"!==g||(w=p?!this.hasNextPage():!this.hasPreviousPage());var S=Math.min(Math.abs(b),w?s:180),x=Math.abs(y)>a||Math.abs(m)>a,C="";!this.onStartSwipingCalled&&x&&(this.props.onStartSwiping(),this.onStartSwipingCalled=!0),""===g&&x&&(m<0&&"vertical"===i?C="up":m>0&&"vertical"===i?C="down":y<0&&"horizontal"===i?C="left":y>0&&"horizontal"===i&&(C="right"),this.setState({direction:C}));var P=v;d>m?P="up":d<m?P="down":h>y?P="right":h<y&&(P="left"),this.setState({angle:b,rotate:S,timestamp:Date.now(),diffY:m,diffX:y,lastDirection:P}),m<0&&"up"===this.state.direction?this.setState({angle:b,secondHalfStyle:{transform:"perspective(".concat(c,") rotateX(").concat(S,"deg)")}}):m>0&&"down"===this.state.direction?this.setState({angle:b,firstHalfStyle:{transform:"perspective(".concat(c,") rotateX(-").concat(S,"deg)"),zIndex:2}}):y<0&&"left"===this.state.direction?this.setState({angle:b,secondHalfStyle:{transform:"perspective(".concat(c,") rotateY(-").concat(S,"deg)")}}):y>0&&"right"===this.state.direction&&this.setState({angle:b,firstHalfStyle:{transform:"perspective(".concat(c,") rotateY(").concat(S,"deg)"),zIndex:2}})}}},{key:"turnRightOrDown",value:function(t){var e=this,n=this.props,o=n.perspective,r=n.orientation,i=n.animationDuration,a=this.transition,s="perspective(".concat(o,") ");s+="vertical"===r?"rotateX(180deg)":"rotateY(-180deg)",this.setState({firstHalfStyle:{transition:a,transform:"",zIndex:"auto"},secondHalfStyle:{transition:a,transform:s},canAnimate:!1},function(){setTimeout(function(){t(),e.setState({secondHalfStyle:{},canAnimate:!0})},i)})}},{key:"turnLeftOrUp",value:function(t){var e=this,n=this.props,o=n.perspective,r=n.orientation,i=n.animationDuration,a=this.transition,s="perspective(".concat(o,") ");s+="vertical"===r?"rotateX(-180deg)":"rotateY(180deg)",this.setState({firstHalfStyle:{transition:a,transform:s,zIndex:2},secondHalfStyle:{transition:a,transform:""},canAnimate:!1},function(){setTimeout(function(){t(),e.setState({firstHalfStyle:{},canAnimate:!0})},i)})}},{key:"gotoNextPage",value:function(){if(this.hasNextPage()&&this.state.canAnimate){var t=this.props,e=t.onStartPageChange,n=t.reverse;e(this.state.page,"next"),n?this.turnLeftOrUp(this.incrementPage):this.turnRightOrDown(this.incrementPage)}}},{key:"gotoPreviousPage",value:function(){if(this.hasPreviousPage()&&this.state.canAnimate){var t=this.props,e=t.onStartPageChange,n=t.reverse;e(this.state.page,"prev"),n?this.turnRightOrDown(this.decrementPage):this.turnLeftOrUp(this.decrementPage)}}},{key:"gotoPage",value:function(t){var e=this.props,n=e.children,o=e.onPageChange;if(!(t>=0&&t<n.length))throw new RangeError("`page` argument is out of bounds.");this.setState({page:t},function(){o(t,"set")})}},{key:"stopMoving",value:function(t){var e=this,n=this.props,o=n.reverse,r=n.onStopSwiping,i=this.state,a=i.timestamp,s=i.angle,c=i.direction,p=i.lastDirection,l=Date.now()-a,u=s<=-90||l<=20&&"up"===c&&"up"===p||l<=20&&"right"===c&&"right"===p,f=s>=90||l<=20&&"down"===c&&"down"===p||l<=20&&"left"===c&&"left"===p;this.reset(function(){r(),u&&(o?e.gotoPreviousPage():e.gotoNextPage()),f&&(o?e.gotoNextPage():e.gotoPreviousPage()),"function"==typeof t&&t()})}},{key:"beforeItem",value:function(){var t=o.Children.count(this.props.children),e=this.props,n=e.children,r=e.firstComponent,i=e.loopForever;return this.isFirstPage()?i?n[t-1]:r:n[this.state.page-1]}},{key:"afterItem",value:function(){var t=this.props,e=t.children,n=t.lastComponent,o=t.loopForever;return this.isLastPage()?o?e[0]:n:e[this.state.page+1]}},{key:"mouseLeave",value:function(){this.props.flipOnLeave?this.stopMoving():this.reset()}},{key:"reset",value:function(t){var e=this.transition;this.onStartSwipingCalled=!1,this.setState({startY:-1,startX:-1,angle:0,rotate:0,direction:"",lastDirection:"",secondHalfStyle:{transition:e},firstHalfStyle:{transition:e},canAnimate:!0},t)}},{key:"renderPage",value:function(t,e){var n=e===this.state.page,o=this.state,i=o.page,a=o.direction,s=o.rotate,c=this.props,p=c.orientation,l=c.uncutPages,u=c.maskOpacity,f=c.pageBackground,y=c.animationDuration,b=c.flipOnTouch,w=c.disableSwipe,S=c.reverse,x=function(t,e,n,o,r,i,a,s,c){return{container:{display:t===e?"block":"none",height:"100%",overflow:!1===r?"hidden":"",position:"relative",touchAction:"none",width:"100%"},part:{position:"absolute"},visiblePart:{transformStyle:"preserve-3d"},firstHalf:{bottom:"vertical"===i?"50%":0,left:0,right:"vertical"===i?0:"50%",top:0,transformOrigin:"vertical"===i?"bottom center":"right center"},secondHalf:{bottom:0,left:"vertical"===i?0:"50%",right:0,top:"vertical"===i?"50%":0,transformOrigin:"vertical"===i?"top center":"left center"},face:{backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",bottom:0,left:0,overflow:"hidden",position:"absolute",right:0,top:0},back:{transform:"vertical"===i?"rotateX(180deg)":"rotateY(180deg)"},before:{bottom:0,left:0,right:0,top:0},after:{bottom:0,left:"vertical"===i?0:"50%",right:0,top:"vertical"===i?"50%":0},cut:{background:s,bottom:0,left:0,overflow:"hidden",position:"absolute",right:0,top:0},firstCut:{right:"vertical"===i?0:"-100%"},pull:{left:"vertical"===i?0:"-100%",position:"absolute",height:"100%",right:0,top:"vertical"===i?"-100%":0},gradient:{bottom:0,left:0,pointerEvents:"none",position:"absolute",right:0,top:0,transition:"box-shadow ".concat(c/1e3,"s ease-in-out")},gradientSecondHalf:{boxShadow:"up"===n?v:"right"===n?m:""},gradientFirstHalf:{boxShadow:"down"===n?d:"left"===n?g:""},gradientSecondHalfBack:{boxShadow:"up"===n?d:"left"===n?g:""},gradientFirstHalfBack:{boxShadow:"down"===n?v:"right"===n?m:""},mask:{backgroundColor:"#000",bottom:0,left:0,opacity:""!==n?Math.max(a-Math.abs(o)/90*a,0):0,pointerEvents:"none",position:"absolute",right:0,top:0},maskReverse:{opacity:""!==n?Math.max(Math.abs(o)/90*a-a,0):0}}}(i,e,a,s,l,p,u,f,y),O=x.container,E=x.part,H=x.visiblePart,k=x.firstHalf,L=x.secondHalf,T=x.face,M=x.back,j=x.before,U=x.after,R=x.cut,A=x.firstCut,_=x.pull,N=x.gradient,D=x.gradientSecondHalfBack,I=x.gradientFirstHalfBack,F=x.gradientSecondHalf,B=x.gradientFirstHalf,Y=x.mask,X=x.maskReverse,z=r.a.createElement(h,{shouldUpdate:n,component:t}),Z=S?this.afterItem():this.beforeItem(),G=S?this.beforeItem():this.afterItem(),q=Z?r.a.createElement(h,{component:Z,shouldUpdate:n}):null,W=G?r.a.createElement(h,{component:G,shouldUpdate:n}):null,$=b&&!w||!b?this.startMoving:P;return r.a.createElement("div",{role:"presentation",key:e,onMouseDown:$,onTouchStart:$,onMouseMove:this.moveGesture,onTouchMove:this.moveGesture,onMouseUp:this.stopMoving,onTouchEnd:this.stopMoving,onMouseLeave:this.mouseLeave,style:O},r.a.createElement("div",{style:C(E,j,R)},q,r.a.createElement("div",{style:Y})),r.a.createElement("div",{style:C(E,R,U)},r.a.createElement("div",{style:_},W),r.a.createElement("div",{style:Y})),r.a.createElement("div",{style:C(E,H,k,this.state.firstHalfStyle)},r.a.createElement("div",{style:T},r.a.createElement("div",{style:C(R,A)},z),r.a.createElement("div",{style:C(Y,X)}),r.a.createElement("div",{style:C(N,B)})),r.a.createElement("div",{style:C(T,M)},r.a.createElement("div",{style:R},r.a.createElement("div",{style:_},q)),r.a.createElement("div",{style:C(N,I)}))),r.a.createElement("div",{style:C(E,H,L,this.state.secondHalfStyle)},r.a.createElement("div",{style:T},r.a.createElement("div",{style:R},r.a.createElement("div",{style:_},z)),r.a.createElement("div",{style:C(Y,X)}),r.a.createElement("div",{style:C(N,F)})),r.a.createElement("div",{style:C(T,M)},r.a.createElement("div",{style:C(E,U,R,A)},W),r.a.createElement("div",{style:C(N,D)}))))}},{key:"render",value:function(){var t=this,e=this.props,n=e.style,i=e.children,a=e.className,s=e.orientation,c=e.showSwipeHint,p=e.showTouchHint,l=e.flipOnTouch,u=e.flipOnTouchZone,f=e.disableSwipe,h=e.reverse,d=C(n,{height:this.getHeight(),position:"relative",width:this.getWidth()}),g={height:"vertical"===s?"".concat(u,"%"):"100%",position:"absolute",touchAction:"none",width:"vertical"===s?"100%":"".concat(u,"%"),zIndex:3},v={left:0,top:0},m={bottom:0,right:0},y=C(g,h?m:v),b=C(g,h?v:m),w=f?P:this.startMoving;return r.a.createElement("div",{style:d,className:a},o.Children.map(i,function(e,n){return t.renderPage(e,n)}),c&&r.a.createElement("div",{className:"rfp-swipeHint rfp-swipeHint--".concat(s)}),l&&r.a.createElement("div",null,r.a.createElement("div",{role:"presentation",onMouseDown:w,onTouchStart:w,onMouseUp:function(){t.stopMoving(function(){return t.gotoPreviousPage()})},style:y,className:"rfp-touchZone rfp-touchZone-previous"}),r.a.createElement("div",{role:"presentation",onMouseDown:w,onTouchStart:w,onMouseUp:function(){t.stopMoving(function(){return t.gotoNextPage()})},style:b,className:"rfp-touchZone rfp-touchZone-next"}),p&&r.a.createElement("div",{className:"rfp-touchHint rfp-touchHint--".concat(s)})))}}]),e}();E.defaultProps={children:[],orientation:"vertical",animationDuration:200,treshold:10,maxAngle:45,maskOpacity:.4,perspective:"130em",pageBackground:"#fff",firstComponent:null,lastComponent:null,showHint:!1,showSwipeHint:!1,showTouchHint:!1,uncutPages:!1,style:{},height:480,width:320,onPageChange:function(){},onStartPageChange:function(){},onStartSwiping:function(){},onStopSwiping:function(){},className:"",flipOnLeave:!1,loopForever:!1,flipOnTouch:!1,flipOnTouchZone:10,disableSwipe:!1,responsive:!1,startAt:0,reverse:!1,swipeImmune:[]},E.propTypes={children:a.a.oneOfType([a.a.arrayOf(a.a.node),a.a.node]),orientation:a.a.oneOf(["vertical","horizontal"]),animationDuration:a.a.number,treshold:a.a.number,maxAngle:a.a.number,maskOpacity:a.a.number,perspective:a.a.string,pageBackground:a.a.string,firstComponent:a.a.element,flipOnLeave:a.a.bool,lastComponent:a.a.element,showHint:a.a.bool,showSwipeHint:a.a.bool,showTouchHint:a.a.bool,uncutPages:a.a.bool,style:a.a.object,height:a.a.number,width:a.a.number,onPageChange:a.a.func,onStartPageChange:a.a.func,onStartSwiping:a.a.func,onStopSwiping:a.a.func,className:a.a.string,loopForever:a.a.bool,flipOnTouch:a.a.bool,flipOnTouchZone:a.a.number,disableSwipe:a.a.bool,responsive:a.a.bool,startAt:a.a.number,reverse:a.a.bool,swipeImmune:a.a.arrayOf(a.a.string)};e.default=E}])});