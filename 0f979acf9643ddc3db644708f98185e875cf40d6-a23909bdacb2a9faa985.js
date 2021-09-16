(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9449],{36106:function(e,t,n){var r,o;r=function(e,t,n){var r=function(e,t,n,r,o,a){function i(e){var t,n,r,o,a,i,u=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],r=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(o="",a=0,i=n.length;a<i;++a)0!==a&&a%3==0&&(o=l.options.separator+o),o=n[i-a-1]+o;n=o}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]})),r=r.replace(/[0-9]/g,(function(e){return l.options.numerals[+e]}))),(u?"-":"")+l.options.prefix+n+r+l.options.suffix}function u(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t}function s(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:u,formattingFn:i,prefix:"",suffix:"",numerals:[]},a&&"object"==typeof a)for(var c in l.options)a.hasOwnProperty(c)&&null!==a[c]&&(l.options[c]=a[c]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var f=0,p=["webkit","moz","ms","o"],d=0;d<p.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[p[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[p[d]+"CancelAnimationFrame"]||window[p[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),r=Math.max(0,16-(n-f)),o=window.setTimeout((function(){e(n+r)}),r);return f=n+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!(!l.initialized&&(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),s(l.startVal)&&s(l.endVal)?(l.decimals=Math.max(0,r||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(o)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(l.error="[CountUp] target is null or undefined",1)))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!s(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return r},void 0===(o="function"==typeof r?r.call(t,n,t,e):r)||(e.exports=o)},82158:function(e,t,n){"use strict";var r=n(45697),o=n(67294),a=n(42473),i=n(36106);function u(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=u(r),l=u(o),c=u(a),f=u(i);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?g(e):t}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){u=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e,t){var n=t.decimal,r=t.decimals,o=t.duration,a=t.easingFn,i=t.end,u=t.formattingFn,s=t.prefix,l=t.separator,c=t.start,p=t.suffix,d=t.useEasing;return new f.default(e,c,i,r,o,{decimal:n,easingFn:a,formattingFn:u,separator:l,prefix:s,suffix:p,useEasing:d,useGrouping:!!l})},C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,r,o=V(a);function a(){var e;m(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return b(g(e=o.call.apply(o,[this].concat(n))),"checkProps",(function(t){var n=e.props,r=n.start,o=n.suffix,a=n.prefix,i=n.redraw,u=n.duration,s=n.separator,l=n.decimals,c=n.decimal,f=n.className;return u!==t.duration||r!==t.start||o!==t.suffix||a!==t.prefix||s!==t.separator||l!==t.decimals||c!==t.decimal||f!==t.className||i})),b(g(e),"createInstance",(function(){return"function"==typeof e.props.children&&c.default(e.containerRef.current&&(e.containerRef.current instanceof HTMLElement||e.containerRef.current instanceof SVGTextElement||e.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),k(e.containerRef.current,e.props)})),b(g(e),"pauseResume",(function(){var t=g(e),n=t.reset,r=t.restart,o=t.update,a=e.props.onPauseResume;e.instance.pauseResume(),a({reset:n,start:r,update:o})})),b(g(e),"reset",(function(){var t=g(e),n=t.pauseResume,r=t.restart,o=t.update,a=e.props.onReset;e.instance.reset(),a({pauseResume:n,start:r,update:o})})),b(g(e),"restart",(function(){e.reset(),e.start()})),b(g(e),"start",(function(){var t=g(e),n=t.pauseResume,r=t.reset,o=t.restart,a=t.update,i=e.props,u=i.delay,s=i.onEnd,l=i.onStart,c=function(){return e.instance.start((function(){return s({pauseResume:n,reset:r,start:o,update:a})}))};u>0?e.timeoutId=setTimeout(c,1e3*u):c(),l({pauseResume:n,reset:r,update:a})})),b(g(e),"update",(function(t){var n=g(e),r=n.pauseResume,o=n.reset,a=n.restart,i=e.props.onUpdate;e.instance.update(t),i({pauseResume:r,reset:o,start:a})})),b(g(e),"containerRef",l.default.createRef()),e}return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props.end;return this.checkProps(e)||t!==e.end}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,r=t.preserveValue;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(r||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,o=this.containerRef,a=this.pauseResume,i=this.reset,u=this.restart,s=this.update;return"function"==typeof t?t({countUpRef:o,pauseResume:a,reset:i,start:u,update:s}):l.default.createElement("span",{className:n,ref:o,style:r})}}])&&h(t.prototype,n),r&&h(t,r),a}(o.Component);b(C,"propTypes",{decimal:s.default.string,decimals:s.default.number,delay:s.default.number,easingFn:s.default.func,end:s.default.number.isRequired,formattingFn:s.default.func,onEnd:s.default.func,onStart:s.default.func,prefix:s.default.string,redraw:s.default.bool,separator:s.default.string,start:s.default.number,startOnMount:s.default.bool,suffix:s.default.string,style:s.default.object,useEasing:s.default.bool,preserveValue:s.default.bool}),b(C,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var R={innerHTML:null};t.ZP=C},58692:function(e,t,n){var r;r=function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var r=e.direction,o=e.value;switch(r){case"top":return n.top+o<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+o<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-o>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-o>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var r=n(1),o=n.n(r),a=n(2),i=n.n(a),u=n(0),s=n.n(u),l=n(3),c=n.n(l);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?m(e):t}(this,d(t).call(this,e)),b(m(n),"getContainer",(function(){return n.props.containment||window})),b(m(n),"addEventListener",(function(e,t,r,o){var a;n.debounceCheck||(n.debounceCheck={});var i=function(){a=null,n.check()},u={target:e,fn:o>-1?function(){a||(a=setTimeout(i,o||0))}:function(){clearTimeout(a),a=setTimeout(i,r||0)},getLastTimeout:function(){return a}};e.addEventListener(t,u.fn),n.debounceCheck[t]=u})),b(m(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(m(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(m(n),"check",(function(){var e,t,r=n.node;if(!r)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(r.getBoundingClientRect())),n.props.containment){var o=n.props.containment.getBoundingClientRect();t={top:o.top,left:o.left,bottom:o.bottom,right:o.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var a=n.props.offset||{};"object"===f(a)&&(t.top+=a.top||0,t.left+=a.left||0,t.bottom-=a.bottom||0,t.right-=a.right||0);var i={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},u=e.height>0&&e.width>0,s=u&&i.top&&i.left&&i.bottom&&i.right;if(u&&n.props.partialVisibility){var l=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(l=i[n.props.partialVisibility]),s=n.props.minTopValue?l&&e.top<=t.bottom-n.props.minTopValue:l}"string"==typeof a.direction&&"number"==typeof a.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",a.direction,a.value),s=c()(a,e,t));var p=n.state;return n.state.isVisible!==s&&(p={isVisible:s,visibilityRect:i},n.setState(p),n.props.onChange&&n.props.onChange(s)),p})),n.state={isVisible:null,visibilityRect:{}},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.node=i.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=i.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):o.a.Children.only(this.props.children)}}])&&p(n.prototype,r),a&&p(n,a),t}(o.a.Component);b(y,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:o.a.createElement("span",null)}),b(y,"propTypes",{onChange:s.a.func,active:s.a.bool,partialVisibility:s.a.oneOfType([s.a.bool,s.a.oneOf(["top","right","bottom","left"])]),delayedCall:s.a.bool,offset:s.a.oneOfType([s.a.shape({top:s.a.number,left:s.a.number,bottom:s.a.number,right:s.a.number}),s.a.shape({direction:s.a.oneOf(["top","right","bottom","left"]),value:s.a.number})]),scrollCheck:s.a.bool,scrollDelay:s.a.number,scrollThrottle:s.a.number,resizeCheck:s.a.bool,resizeDelay:s.a.number,resizeThrottle:s.a.number,intervalCheck:s.a.bool,intervalDelay:s.a.number,containment:"undefined"!=typeof window?s.a.instanceOf(window.Element):s.a.any,children:s.a.oneOfType([s.a.element,s.a.func]),minTopValue:s.a.number})},function(e,t,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=r(n(67294),n(72834))},61753:function(e,t,n){"use strict";var r=n(63366),o=n(67294),a=n(82158),i=n(58692),u=n.n(i),s=["className"];t.Z=function(e){var t=e.className,n=(0,r.Z)(e,s),i=(0,o.useState)(!1),l=i[0],c=i[1];return o.createElement(a.ZP,Object.assign({},n,{start:l?null:0}),(function(e){var n=e.countUpRef;return o.createElement(u(),{active:!l,onChange:function(e){e&&c(!0)},delayedCall:!0},o.createElement("span",{className:t,ref:n}))}))}},42473:function(e){"use strict";var t=function(){};e.exports=t}}]);
//# sourceMappingURL=0f979acf9643ddc3db644708f98185e875cf40d6-a23909bdacb2a9faa985.js.map