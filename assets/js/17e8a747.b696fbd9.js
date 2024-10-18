"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["28721"],{40190:function(e,t,r){r.r(t),r.d(t,{metadata:()=>n,isMacOS:()=>v,contentTitle:()=>c,default:()=>b,assets:()=>d,toc:()=>y,frontMatter:()=>u});var n=JSON.parse('{"type":"mdx","permalink":"/tests/pages/tabs-tests","source":"@site/_dogfooding/_pages tests/tabs-tests.mdx","title":"Tabs tests","description":"Tabs with dynamic default value","frontMatter":{},"lastUpdatedBy":"moonrailgun","lastUpdatedAt":1729270082000,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/tabs-tests.mdx","unlisted":false}'),a=r("24246"),l=r("80980"),o=r("14522"),s=r("15398"),i=r("58636");let u={},c="Tabs tests",d={},v="undefined"!=typeof window&&navigator.platform.startsWith("Mac"),y=[{value:"Tabs with dynamic default value",id:"tabs-with-dynamic-default-value",level:2},{value:"Tabs sync with different heights",id:"tabs-sync-with-different-heights",level:2},{value:"Tabs with className and lazy loading",id:"tabs-with-classname-and-lazy-loading",level:2}];function f(e){let t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"tabs-tests",children:"Tabs tests"})}),"\n","\n",(0,a.jsx)(t.h2,{id:"tabs-with-dynamic-default-value",children:"Tabs with dynamic default value"}),"\n",(0,a.jsxs)(t.p,{children:["This can cause ",(0,a.jsx)(t.a,{href:"https://github.com/facebook/react-native-website/issues/2771",children:"bugs"})," when default value is different between SSR and client:"]}),"\n","\n",(0,a.jsx)(o.Z,{children:(0,a.jsxs)(s.Z,{defaultValue:v?"ios":"android",children:[(0,a.jsx)(i.Z,{value:"android",label:"Android",children:"Android content"}),(0,a.jsx)(i.Z,{value:"ios",label:"iOS",children:"iOS content"})]})}),"\n",(0,a.jsx)(t.h2,{id:"tabs-sync-with-different-heights",children:"Tabs sync with different heights"}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(i.Z,{value:"win",label:"Windows",children:(0,a.jsx)(t.p,{children:"Use Ctrl + C to copy."})}),(0,a.jsx)(i.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(t.p,{children:"very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text"})})]}),"\n",(0,a.jsxs)(s.Z,{groupId:"operating-systems",children:[(0,a.jsx)(i.Z,{value:"win",label:"Windows",children:(0,a.jsx)(t.p,{children:"Use Ctrl + V to paste."})}),(0,a.jsx)(i.Z,{value:"mac",label:"macOS",children:(0,a.jsx)(t.p,{children:"Use Command + V to paste."})})]}),"\n",(0,a.jsx)(t.p,{children:"When clicking tabs above, they should stay under cursor and we should adjust the scroll position."}),"\n",(0,a.jsx)(t.h2,{id:"tabs-with-classname-and-lazy-loading",children:"Tabs with className and lazy loading"}),"\n",(0,a.jsxs)(s.Z,{lazy:!0,children:[(0,a.jsx)(i.Z,{value:"apple",label:"Apple",className:"alert alert--primary",default:!0,children:(0,a.jsx)(t.p,{children:"This is an apple \uD83C\uDF4E"})}),(0,a.jsx)(i.Z,{value:"orange",label:"Orange",className:"alert alert--secondary",children:(0,a.jsx)(t.p,{children:"This is an orange \uD83C\uDF4A"})}),(0,a.jsx)(i.Z,{value:"banana",label:"Banana",className:"alert alert--success",children:(0,a.jsx)(t.p,{children:"This is a banana \uD83C\uDF4C"})})]})]})}function b(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},58636:function(e,t,r){r.d(t,{Z:()=>o});var n=r("24246");r("27378");var a=r("90496");let l="tabItem_pnkT";function o(e){var t=e.children,r=e.hidden,o=e.className;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r,children:t})}},15398:function(e,t,r){r.d(t,{Z:()=>S});var n=r("24246"),a=r("27378"),l=r("90496"),o=r("54947"),s=r("3620"),i=r("844"),u=r("97486"),c=r("32263"),d=r("16971");function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l=[],o=!0,s=!1;try{for(a=a.call(e);!(o=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{!o&&null!=a.return&&a.return()}finally{if(s)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){var t,r;return null!==(r=null===(t=a.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var t,r;if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&(void 0===t?"undefined":(r=t)&&"undefined"!=typeof Symbol&&r.constructor===Symbol?"symbol":typeof r)=="object"&&"value"in t)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function b(e){var t=e.value;return e.tabValues.some(function(e){return e.value===t})}var g=r("71607");let p="tabList_Qoir",h="tabItem_AQgk";function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,l;n=e,a=t,l=r[t],a in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function j(e){var t=e.className,r=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,u=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=i[u.indexOf(t)].value;r!==a&&(c(t),s(r))},v=function(e){var t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,n=u.indexOf(e.currentTarget)+1;t=null!==(r=u[n])&&void 0!==r?r:u[0];break;case"ArrowLeft":var a,l=u.indexOf(e.currentTarget)-1;t=null!==(a=u[l])&&void 0!==a?a:u[u.length-1]}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t),children:i.map(function(e){var t=e.value,r=e.label,o=e.attributes;return(0,n.jsx)("li",m(x({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:v,onClick:d},o),{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=r?r:t}),t)})})}function w(e){var t=e.lazy,r=e.children,o=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=s.find(function(e){return e.props.value===o});return i?(0,a.cloneElement)(i,{className:(0,l.Z)("margin-top--md",i.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map(function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})})})}function O(e){var t=function(e){var t,r,n,l,o,v,g,p,h,x,m,j,w,O,S=e.defaultValue,P=e.queryString,k=e.groupId;var T=(r=(t=e).values,n=t.children,(0,a.useMemo)(function(){var e=null!=r?r:f(n).map(function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}});return!function(e){var t=(0,c.lx)(e,function(e,t){return e.value===t.value});if(t.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(t.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[r,n])),N=y((0,a.useState)(function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!b({value:r,tabValues:n}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(n.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}var a=null!==(t=n.find(function(e){return e.default}))&&void 0!==t?t:n[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:S,tabValues:T})}),2),Z=N[0],V=N[1];var I=y((o=(l={queryString:void 0!==P&&P,groupId:k}).queryString,v=l.groupId,g=(0,s.k6)(),p=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:void 0!==o&&o,groupId:v}),[(0,u._X)(p),(0,a.useCallback)(function(e){if(!!p){var t,r,n=new URLSearchParams(g.location.search);n.set(p,e),g.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,l;n=e,a=t,l=r[t],a in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l})}return e}({},g.location),r=(r={search:n.toString()},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t))}},[p,g])]),2),E=I[0],_=I[1];var D=y((x=(h=({groupId:k}).groupId)?"docusaurus.tab.".concat(h):null,j=(m=y((0,d.Nk)(x),2))[0],w=m[1],[j,(0,a.useCallback)(function(e){if(!!x)w.set(e)},[x,w])]),2),A=D[0],C=D[1];var q=b({value:O=null!=E?E:A,tabValues:T})?O:null;return(0,i.Z)(function(){q&&V(q)},[q]),{selectedValue:Z,selectValue:(0,a.useCallback)(function(e){if(!b({value:e,tabValues:T}))throw Error("Can't select invalid tab value=".concat(e));V(e),_(e),C(e)},[_,C,T]),tabValues:T}}(e);return(0,n.jsxs)("div",{className:(0,l.Z)("tabs-container",p),children:[(0,n.jsx)(j,x({},t,e)),(0,n.jsx)(w,x({},t,e))]})}function S(e){var t=(0,g.Z)();return(0,n.jsx)(O,m(x({},e),{children:f(e.children)}),String(t))}},14522:function(e,t,r){r.d(t,{Z:()=>y});var n=r("24246");r("27378");var a=r("90496");let l="browserWindow_my1Q",o="browserWindowHeader_jXSR",s="buttons_uHc7",i="browserWindowAddressBar_Pd8y",u="dot_giz1",c="browserWindowMenuIcon_Vhuh",d="bar_rrRL",v="browserWindowBody_Idgs";function y(e){var t,r,y=e.children,f=e.minHeight,b=e.url,g=e.style,p=e.bodyStyle;return(0,n.jsxs)("div",{className:l,style:(t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n,a,l;n=e,a=t,l=r[t],a in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l})}return e}({},g),r=(r={minHeight:f},r),Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t),children:[(0,n.jsxs)("div",{className:o,children:[(0,n.jsxs)("div",{className:s,children:[(0,n.jsx)("span",{className:u,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:u,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:u,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,a.Z)(i,"text--truncate"),children:void 0===b?"http://localhost:3000":b}),(0,n.jsx)("div",{className:c,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:d}),(0,n.jsx)("span",{className:d}),(0,n.jsx)("span",{className:d})]})})]}),(0,n.jsx)("div",{className:v,style:p,children:y})]})}},80980:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return o}});var n=r(27378);let a={},l=n.createContext(a);function o(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);