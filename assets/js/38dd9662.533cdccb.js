"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39391],{80282:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},61132:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(24246),s=(t(27378),t(40624));const a={tabItem:"tabItem_pnkT"};function o({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,t),hidden:n,children:e})}},97555:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(24246),s=t(27378),a=t(40624),o=t(75527),i=t(3620),l=t(44479),c=t(62821),u=t(52196),d=t(53589);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function g(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,c._X)(r),o=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[a,o]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=b(e),[o,i]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var x=t(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:s,tabValues:i}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),a=i[r].value;a!==t&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:i.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",O(v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},s),{className:(0,a.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(k,v({},n,e)),(0,r.jsx)(P,v({},n,e))]})}function S(e){const n=(0,x.Z)();return(0,r.jsx)(I,O(v({},e),{children:g(e.children)}),String(n))}},6698:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(24246),s=(t(27378),t(40624));const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c({children:e,minHeight:n,url:t="http://localhost:3000",style:o,bodyStyle:c}){return(0,r.jsxs)("div",{className:a.browserWindow,style:l(i({},o),{minHeight:n}),children:[(0,r.jsxs)("div",{className:a.browserWindowHeader,children:[(0,r.jsxs)("div",{className:a.buttons,children:[(0,r.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.Z)(a.browserWindowAddressBar,"text--truncate"),children:t}),(0,r.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar}),(0,r.jsx)("span",{className:a.bar})]})})]}),(0,r.jsx)("div",{className:a.browserWindowBody,style:c,children:e})]})}},76398:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/social-card-7e038d19ea67c686e90e1f599f7256d0.png"},32537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=t(24246),s=t(71670),a=t(6698),o=t(97555),i=t(61132);const l={title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:new Date("2023-01-27T00:00:00.000Z")},c=void 0,u={permalink:"/blog/releases/2.3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/releases/2.3/index.mdx",source:"@site/blog/releases/2.3/index.mdx",title:"Docusaurus 2.3",description:"We are happy to announce Docusaurus 2.3.",date:"2023-01-27T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:2.89,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",socials:{x:"https://x.com/sebastienlorber",linkedin:"https://www.linkedin.com/in/sebastienlorber/",github:"https://github.com/slorber",newsletter:"https://thisweekinreact.com"},imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 2.3",authors:["slorber"],tags:["release"],image:"./img/social-card.png",date:"2023-01-27T00:00:00.000Z"},unlisted:!1,lastUpdatedAt:1721919573e3,lastUpdatedBy:"Priyadi Iman Nurcahyo",prevItem:{title:"Docusaurus 2.4",permalink:"/blog/releases/2.4"},nextItem:{title:"Docusaurus 2.2",permalink:"/blog/releases/2.2"}},d={image:t(80282).Z,authorsImageUrls:[void 0]},h=[{value:"Highlights",id:"highlights",level:2},{value:"Google Tag Manager plugin",id:"google-tag-manager-plugin",level:3},{value:"Tabs Query String Support",id:"tabs-query-string-support",level:3},{value:"Nested admonitions",id:"nested-admonitions",level:3},{value:"Blog <code>createFeedItems</code>",id:"blog-createfeeditems",level:3},{value:"Translations",id:"translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["We are happy to announce ",(0,r.jsx)(n.strong,{children:"Docusaurus 2.3"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The upgrade should be easy: as explained in our ",(0,r.jsx)(n.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Docusaurus 2.2 social card",src:t(76398).Z+"",width:"1200",height:"600"})}),"\n",(0,r.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsx)(n.h3,{id:"google-tag-manager-plugin",children:"Google Tag Manager plugin"}),"\n",(0,r.jsx)(n.p,{children:"Google Tag Manager is a tag management system that allows great flexibility. It enables analytics and marketing teams to easily load other third-party trackers and fire analytics tags."}),"\n",(0,r.jsxs)(n.p,{children:["We now have a ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-tag-manager"})})," package that you can use alongside or as an alternative to the existing ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"})," (refer to ",(0,r.jsx)(n.a,{href:"https://support.google.com/tagmanager/answer/7582054",children:"this doc"})," to understand when to use which solution)."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Google is sunsetting Universal Analytics",type:"warning",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"Google will sunset its Universal Analytics"})," on ",(0,r.jsx)(n.strong,{children:"July 1, 2023"}),", and ask users to migrate to ",(0,r.jsx)(n.strong,{children:"Google Analytics 4"}),"."]}),(0,r.jsxs)(n.p,{children:["Therefore, we are also ",(0,r.jsxs)(n.strong,{children:["deprecating our existing ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-analytics",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-analytics"})})]})," package. Docusaurus users should create a new Google Analytics 4 property, and migrate to the ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-gtag/",children:"gtag.js plugin"}),", or the ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager/",children:"Google Tag Manager plugin"}),". Refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"dedicated Docusaurus issue"})," for details and questions."]})]}),"\n",(0,r.jsx)(n.h3,{id:"tabs-query-string-support",children:"Tabs Query String Support"}),"\n",(0,r.jsxs)(n.p,{children:["It is now possible to link a selected tab to a query string parameter. When a tab is selected, it will be stored in your browser URL as a ",(0,r.jsx)(n.code,{children:"?qs-param=tab-value"})," search parameter."]}),"\n",(0,r.jsx)(n.p,{children:"This feature allows deep-linking to a specific documentation tab that will pre-selected on page load."}),"\n",(0,r.jsxs)(n.p,{children:["When used alongside the ",(0,r.jsx)(n.code,{children:"groupId"})," prop, the query string tab value takes precedence over the ",(0,r.jsx)(n.code,{children:"localStorage"})," value."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure to check the ",(0,r.jsx)(n.a,{href:"/docs/markdown-features/tabs#query-string",children:"documentation"})," and the demo below to understand how it works:"]}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'<Tabs groupId="current-os" queryString>\n  <TabItem value="android" label="Android">\n    Android\n  </TabItem>\n  <TabItem value="ios" label="iOS">\n    iOS\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.Z,{groupId:"current-os",queryString:!0,children:[(0,r.jsx)(i.Z,{value:"android",label:"Android",children:(0,r.jsx)(n.p,{children:"Android"})}),(0,r.jsx)(i.Z,{value:"ios",label:"iOS",children:(0,r.jsx)(n.p,{children:"iOS"})})]})}),"\n",(0,r.jsx)(n.h3,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,r.jsx)(n.p,{children:"It is now possible to nest one admonition within another by adding extra colons for the outer/enclosing admonition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"::::tip[nested admonitions]\n\nYou can now nest one admonition within another!\n\n:::danger\n\nUse this sparingly when it makes sense.\n\n:::\n\n::::\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"nested admonitions",type:"tip",children:[(0,r.jsx)(n.p,{children:"You can now nest one admonition within another!"}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Use this sparingly when it makes sense."})})]}),"\n",(0,r.jsxs)(n.h3,{id:"blog-createfeeditems",children:["Blog ",(0,r.jsx)(n.code,{children:"createFeedItems"})]}),"\n",(0,r.jsxs)(n.p,{children:["A new blog plugin option ",(0,r.jsx)(n.a,{href:"/docs/api/plugins/@docusaurus/plugin-content-blog/#CreateFeedItemsFn",children:(0,r.jsx)(n.code,{children:"feedOptions.createFeedItems"})})," gives you more control over the RSS/Atom feed generation. It is now possible to transform/filter/limit feed items through a new callback."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.js"',children:"[\n  '@docusaurus/preset-classic',\n  {\n    blog: {\n      feedOptions: {\n        // highlight-start\n        createFeedItems: async (params) => {\n          const {blogPosts, defaultCreateFeedItems, ...rest} = params;\n          return defaultCreateFeedItems({\n            // keep only the 10 most recent blog posts in the feed\n            blogPosts: blogPosts.filter((item, index) => index < 10),\n            ...rest,\n          });\n        },\n        // highlight-end\n      },\n    },\n  },\n];\n"})}),"\n",(0,r.jsx)(n.h3,{id:"translations",children:"Translations"}),"\n",(0,r.jsx)(n.p,{children:"We added or completed the default theme translation support for multiple languages:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddf8\ud83c\uddee ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8541",children:"#8541"})," Slovenian"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddf9\ud83c\uddf7 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8289",children:"#8289"})," Turkish"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddee\ud83c\uddf7 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8406",children:"#8406"})," Farsi"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddf5\ud83c\uddf1 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8525",children:"#8525"})," Polish"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\udde8\ud83c\uddf3 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8423",children:"#8423"})," Chinese"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddf8\ud83c\uddea ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8312",children:"#8312"})," Swedish"]}),"\n",(0,r.jsxs)(n.li,{children:["\ud83c\uddfb\ud83c\uddf3 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8450",children:"#8450"})," Vietnamese"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Completing theme translations is an ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"ongoing effort"})," and an easy way to contribute to Docusaurus. We add new theme features regularly, for which we often ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3526",children:"need new translations"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,r.jsx)(n.p,{children:"Other notable changes include:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8463",children:"#8463"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8328",children:"#8328"}),": fix some annoying Docusaurus layout issues"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8539",children:"#8539"}),": Algolia plugin ",(0,r.jsx)(n.code,{children:"options.searchPagePath"})," should be correctly applied to search modal footer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8462",children:"#8462"}),": Algolia plugin now makes it easier to transform displayed search results with custom logic"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8397",children:"#8397"}),": the ",(0,r.jsx)(n.code,{children:"deploy"})," CLI now understands git url ",(0,r.jsx)(n.code,{children:"insteadOf"})," config"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"/changelog/2.3.0",children:"2.3.0 changelog entry"})})," for an exhaustive list of changes."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71670:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(27378);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);