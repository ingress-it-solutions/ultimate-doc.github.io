(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3685:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1878)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),i=r(387),c=r(7190);var f={};function s(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=u.default.useMemo((function(){var t=o(l.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var g=(t=u.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],x=w[1],_=u.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);u.default.useEffect((function(){var e=x&&r&&l.isLocalURL(d),t="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(t?"%"+t:"")];e&&!o&&s(n,d,p,{locale:t})}),[p,d,x,b,r,n]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==u&&n.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:u}))}(e,n,d,p,y,h,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof b?b:n&&n.locale,A=n&&n.isLocaleDomain&&l.getDomainLocale(p,M,n&&n.locales,n&&n.domainLocales);j.href=A||l.addBasePath(l.addLocale(p,M,n&&n.defaultLocale))}return u.default.cloneElement(t,j)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,l=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(i){l=!0,o=i}finally{try{u||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,c=a.useRef(),f=o(a.useState(!1),2),s=f[0],d=f[1],p=o(a.useState(t?t.current:null),2),v=p[0],y=p[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||s||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{root:v,rootMargin:r}))}),[n,v,r,s]);return a.useEffect((function(){if(!l&&!s){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[s]),a.useEffect((function(){t&&y(t.current)}),[t]),[h,s]};var a=r(7294),u=r(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},1878:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(1664),a=r(1163),u=r(7294);function l(){var e="/intro",t=(0,a.useRouter)();return(0,u.useEffect)((function(){t.push(e)}),[t]),(0,n.jsxs)("div",{className:"mx-auto max-w-md",children:[(0,n.jsx)("div",{className:"text-center mt-32 text-3xl font-bold",children:"Welcome To Palzin APM Documentation!"}),(0,n.jsx)("div",{className:"text-center",children:(0,n.jsxs)("p",{children:["For now, redirecting you to the"," ",(0,n.jsx)(o.default,{href:e,children:(0,n.jsx)("a",{className:"underline",children:"documentation"})})]})})]})}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);