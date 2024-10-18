"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["20223"],{12137:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>o,default:()=>j,assets:()=>a,toc:()=>u,frontMatter:()=>d});var n=JSON.parse('{"id":"cli","title":"CLI","description":"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website.","source":"@site/docs/cli.mdx","sourceDirName":".","slug":"/cli","permalink":"/docs/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/cli.mdx","tags":[],"version":"current","lastUpdatedBy":"moonrailgun","lastUpdatedAt":1729270082000,"frontMatter":{"description":"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},"sidebar":"api","next":{"title":"Client API","permalink":"/docs/docusaurus-core"}}'),t=s("24246"),i=s("80980"),l=s("15398"),c=s("58636");let d={description:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."},o="CLI",a={},u=[{value:"Docusaurus CLI commands",id:"docusaurus-cli-commands",level:2},{value:"<code>docusaurus start [siteDir]</code>",id:"docusaurus-start-sitedir",level:3},{value:"Options",id:"options",level:4},{value:"Enabling HTTPS",id:"enabling-https",level:4},{value:"<code>docusaurus build [siteDir]</code>",id:"docusaurus-build-sitedir",level:3},{value:"Options",id:"options-1",level:4},{value:"<code>docusaurus swizzle [themeName] [componentName] [siteDir]</code>",id:"docusaurus-swizzle",level:3},{value:"Options",id:"options-swizzle",level:4},{value:"<code>docusaurus deploy [siteDir]</code>",id:"docusaurus-deploy-sitedir",level:3},{value:"Options",id:"options-3",level:4},{value:"<code>docusaurus serve [siteDir]</code>",id:"docusaurus-serve-sitedir",level:3},{value:"<code>docusaurus clear [siteDir]</code>",id:"docusaurus-clear-sitedir",level:3},{value:"<code>docusaurus write-translations [siteDir]</code>",id:"docusaurus-write-translations-sitedir",level:3},{value:"<code>docusaurus write-heading-ids [siteDir] [files]</code>",id:"docusaurus-write-heading-ids-sitedir",level:3}];function h(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"cli",children:"CLI"})}),"\n",(0,t.jsx)(r.p,{children:"Docusaurus provides a set of scripts to help you generate, serve, and deploy your website."}),"\n",(0,t.jsx)(r.p,{children:"Once your website is bootstrapped, the website source will contain the Docusaurus scripts that you can invoke with your package manager:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  // ...\n  "scripts": {\n    "docusaurus": "docusaurus",\n    "start": "docusaurus start",\n    "build": "docusaurus build",\n    "swizzle": "docusaurus swizzle",\n    "deploy": "docusaurus deploy",\n    "clear": "docusaurus clear",\n    "serve": "docusaurus serve",\n    "write-translations": "docusaurus write-translations",\n    "write-heading-ids": "docusaurus write-heading-ids"\n  }\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"docusaurus-cli-commands",children:"Docusaurus CLI commands"}),"\n",(0,t.jsx)(r.p,{children:"Below is a list of Docusaurus CLI commands and their usages:"}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-start-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus start [siteDir]"})}),"\n",(0,t.jsxs)(r.p,{children:["Builds and serves a preview of your site locally with ",(0,t.jsx)(r.a,{href:"https://webpack.js.org/configuration/dev-server",children:"Webpack Dev Server"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--port"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"3000"})}),(0,t.jsx)(r.td,{children:"Specifies the port of the dev server."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--host"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"localhost"})}),(0,t.jsxs)(r.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,t.jsx)(r.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--locale"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Specify site locale to be used."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--hot-only"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsxs)(r.td,{children:["Enables Hot Module Replacement without page refresh as a fallback in case of build failures. More information ",(0,t.jsx)(r.a,{href:"https://webpack.js.org/configuration/dev-server/#devserverhotonly",children:"here"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--no-open"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Do not open the page automatically in the browser."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Path to Docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--poll [optionalIntervalMs]"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsxs)(r.td,{children:["Use polling of files rather than watching for live reload as a fallback in environments where watching doesn't work. More information ",(0,t.jsx)(r.a,{href:"https://webpack.js.org/configuration/watch/#watchoptionspoll",children:"here"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--no-minify"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"Please note that some functionality (for example, anchor links) will not work in development. The functionality will work as expected in production."})}),"\n",(0,t.jsxs)(r.admonition,{title:"Development over network",type:"info",children:[(0,t.jsxs)(r.p,{children:["When forwarding port 3000 from a remote server or VM (e.g. GitHub Codespaces), you can run the dev server on ",(0,t.jsx)(r.code,{children:"0.0.0.0"})," to make it listen on the local IP."]}),(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(c.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm run start -- --host 0.0.0.0\n"})})}),(0,t.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn run start --host 0.0.0.0\n"})})}),(0,t.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm run start --host 0.0.0.0\n"})})})]})]}),"\n",(0,t.jsx)(r.h4,{id:"enabling-https",children:"Enabling HTTPS"}),"\n",(0,t.jsxs)(r.p,{children:["There are multiple ways to obtain a certificate. We will use ",(0,t.jsx)(r.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," as an example."]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Run ",(0,t.jsx)(r.code,{children:"mkcert localhost"})," to generate ",(0,t.jsx)(r.code,{children:"localhost.pem"})," + ",(0,t.jsx)(r.code,{children:"localhost-key.pem"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Run ",(0,t.jsx)(r.code,{children:"mkcert -install"})," to install the cert in your trust store, and restart your browser"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Start the app with Docusaurus HTTPS env variables:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start\n"})}),"\n",(0,t.jsxs)(r.ol,{start:"4",children:["\n",(0,t.jsxs)(r.li,{children:["Open ",(0,t.jsx)(r.code,{children:"https://localhost:3000/"})]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-build-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus build [siteDir]"})}),"\n",(0,t.jsx)(r.p,{children:"Compiles your site for production."}),"\n",(0,t.jsx)(r.h4,{id:"options-1",children:"Options"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--dev"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Builds the website in dev mode, including full React error messages."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--bundle-analyzer"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsxs)(r.td,{children:["Analyze your bundle with the ",(0,t.jsx)(r.a,{href:"https://github.com/webpack-contrib/webpack-bundle-analyzer",children:"webpack bundle analyzer"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--out-dir"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"build"})}),(0,t.jsx)(r.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Path to Docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--locale"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Build the site in the specified locale. If not specified, all known locales are built."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--no-minify"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Build website without minimizing JS/CSS bundles."})]})]})]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.p,{children:["For advanced minification of CSS bundle, we use the ",(0,t.jsx)(r.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-advanced",children:"advanced cssnano preset"})," (along with additional several PostCSS plugins) and ",(0,t.jsx)(r.a,{href:"https://github.com/jakubpawlowicz/clean-css#level-2-optimizations",children:"level 2 optimization of clean-css"}),". If as a result of this advanced CSS minification you find broken CSS, build your website with the environment variable ",(0,t.jsx)(r.code,{children:"USE_SIMPLE_CSS_MINIFIER=true"})," to minify CSS with the ",(0,t.jsx)(r.a,{href:"https://github.com/cssnano/cssnano/tree/master/packages/cssnano-preset-default",children:"default cssnano preset"}),". ",(0,t.jsxs)(r.strong,{children:["Please ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/new?labels=bug%2C+needs+triage&template=bug.md",children:"fill out an issue"})," if you experience CSS minification bugs."]})]}),(0,t.jsxs)(r.p,{children:["You can skip the HTML minification with the environment variable ",(0,t.jsx)(r.code,{children:"SKIP_HTML_MINIFICATION=true"}),"."]})]}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-swizzle",children:(0,t.jsx)(r.code,{children:"docusaurus swizzle [themeName] [componentName] [siteDir]"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/swizzling",children:"Swizzle"})," a theme component to customize it."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(c.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nnpm run swizzle @docusaurus/theme-classic Footer -- --eject\n"})})}),(0,t.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\nyarn swizzle @docusaurus/theme-classic Footer --eject\n"})})}),(0,t.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm run swizzle [themeName] [componentName] [siteDir]\n\n# Example (leaving out the siteDir to indicate this directory)\npnpm run swizzle @docusaurus/theme-classic Footer --eject\n"})})})]}),"\n",(0,t.jsxs)(r.p,{children:["The swizzle CLI is interactive and will guide you through the whole ",(0,t.jsx)(r.a,{href:"/docs/swizzling",children:"swizzle process"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"options-swizzle",children:"Options"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"themeName"})}),(0,t.jsx)(r.td,{children:"The name of the theme to swizzle from."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"componentName"})}),(0,t.jsx)(r.td,{children:"The name of the theme component to swizzle."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--list"})}),(0,t.jsx)(r.td,{children:"Display components available for swizzling"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--eject"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/swizzling#ejecting",children:"Eject"})," the theme component"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--wrap"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/swizzling#wrapping",children:"Wrap"})," the theme component"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--danger"})}),(0,t.jsx)(r.td,{children:"Allow immediate swizzling of unsafe components"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--typescript"})}),(0,t.jsx)(r.td,{children:"Swizzle the TypeScript variant component"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsxs)(r.td,{children:["Path to docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"Unsafe components have a higher risk of breaking changes due to internal refactorings."})}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-deploy-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus deploy [siteDir]"})}),"\n",(0,t.jsxs)(r.p,{children:["Deploys your site with ",(0,t.jsx)(r.a,{href:"https://pages.github.com/",children:"GitHub Pages"}),". Check out the docs on ",(0,t.jsx)(r.a,{href:"/docs/deployment#deploying-to-github-pages",children:"deployment"})," for more details."]}),"\n",(0,t.jsx)(r.h4,{id:"options-3",children:"Options"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--locale"})}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{children:"Deploy the site in the specified locale. If not specified, all known locales are deployed."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--out-dir"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"build"})}),(0,t.jsx)(r.td,{children:"The full path for the new output directory, relative to the current workspace."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--skip-build"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Deploy website without building it. This may be useful when using a custom deploy script."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--target-dir"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"."})}),(0,t.jsx)(r.td,{children:"Path to the target directory to deploy to."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Path to Docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-serve-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus serve [siteDir]"})}),"\n",(0,t.jsx)(r.p,{children:"Serve your built website locally."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--port"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"3000"})}),(0,t.jsx)(r.td,{children:"Use specified port"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--dir"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"build"})}),(0,t.jsx)(r.td,{children:"The full path for the output directory, relative to the current workspace"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--build"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Build website before serving"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Path to Docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--host"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"localhost"})}),(0,t.jsxs)(r.td,{children:["Specify a host to use. For example, if you want your server to be accessible externally, you can use ",(0,t.jsx)(r.code,{children:"--host 0.0.0.0"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--no-open"})}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"false"})," locally, ",(0,t.jsx)(r.code,{children:"true"})," in CI"]}),(0,t.jsx)(r.td,{children:"Do not open a browser window to the server location."})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-clear-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus clear [siteDir]"})}),"\n",(0,t.jsx)(r.p,{children:"Clear a Docusaurus site's generated assets, caches, build artifacts."}),"\n",(0,t.jsx)(r.p,{children:"We recommend running this command before reporting bugs, after upgrading versions, or anytime you have issues with your Docusaurus site."}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-write-translations-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus write-translations [siteDir]"})}),"\n",(0,t.jsx)(r.p,{children:"Write the JSON translation files that you will have to translate."}),"\n",(0,t.jsxs)(r.p,{children:["By default, the files are written in ",(0,t.jsx)(r.code,{children:"website/i18n/<defaultLocale>/..."}),"."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--locale"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"<defaultLocale>"})}),(0,t.jsx)(r.td,{children:"Define which locale folder you want to write translations the JSON files in"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--override"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Override existing translation messages"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--config"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"undefined"})}),(0,t.jsxs)(r.td,{children:["Path to Docusaurus config file, default to ",(0,t.jsx)(r.code,{children:"[siteDir]/docusaurus.config.js"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--messagePrefix"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"''"})}),(0,t.jsx)(r.td,{children:"Allows adding a prefix to each translation message, to help you highlight untranslated strings"})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"docusaurus-write-heading-ids-sitedir",children:(0,t.jsx)(r.code,{children:"docusaurus write-heading-ids [siteDir] [files]"})}),"\n",(0,t.jsxs)(r.p,{children:["Add ",(0,t.jsx)(r.a,{href:"/docs/markdown-features/toc#heading-ids",children:"explicit heading IDs"})," to the Markdown documents of your site."]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Default"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"files"})}),(0,t.jsx)(r.td,{children:"All MD files used by plugins"}),(0,t.jsx)(r.td,{children:"The files that you want heading IDs to be written to."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--maintain-case"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Keep the headings' casing, otherwise make all lowercase."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"--overwrite"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"false"})}),(0,t.jsx)(r.td,{children:"Overwrite existing heading IDs."})]})]})]})]})}function j(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},58636:function(e,r,s){s.d(r,{Z:()=>l});var n=s("24246");s("27378");var t=s("90496");let i="tabItem_pnkT";function l(e){var r=e.children,s=e.hidden,l=e.className;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i,l),hidden:s,children:r})}},15398:function(e,r,s){s.d(r,{Z:()=>S});var n=s("24246"),t=s("27378"),i=s("90496"),l=s("54947"),c=s("3620"),d=s("844"),o=s("97486"),a=s("32263"),u=s("16971");function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,n=Array(r);s<r;s++)n[s]=e[s];return n}function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var s,n,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(s=t.next()).done)&&(i.push(s.value),!r||i.length!==r);l=!0);}catch(e){c=!0,n=e}finally{try{!l&&null!=t.return&&t.return()}finally{if(c)throw n}}return i}}(e,r)||function(e,r){if(e){if("string"==typeof e)return h(e,r);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return h(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var r,s;return null!==(s=null===(r=t.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var r,s;if(!e||(0,t.isValidElement)(e)&&(r=e.props)&&(void 0===r?"undefined":(s=r)&&"undefined"!=typeof Symbol&&s.constructor===Symbol?"symbol":typeof s)=="object"&&"value"in r)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==s?s:[]}function p(e){var r=e.value;return e.tabValues.some(function(e){return e.value===r})}var f=s("71607");let m="tabList_Qoir",b="tabItem_AQgk";function v(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(r){var n,t,i;n=e,t=r,i=s[r],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i})}return e}function g(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s.push.apply(s,n)}return s})(Object(r)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}),e}function y(e){var r=e.className,s=e.block,t=e.selectedValue,c=e.selectValue,d=e.tabValues,o=[],a=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,s=d[o.indexOf(r)].value;s!==t&&(a(r),c(s))},h=function(e){var r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var s,n=o.indexOf(e.currentTarget)+1;r=null!==(s=o[n])&&void 0!==s?s:o[0];break;case"ArrowLeft":var t,i=o.indexOf(e.currentTarget)-1;r=null!==(t=o[i])&&void 0!==t?t:o[o.length-1]}null==r||r.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},r),children:d.map(function(e){var r=e.value,s=e.label,l=e.attributes;return(0,n.jsx)("li",g(v({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return o.push(e)},onKeyDown:h,onClick:u},l),{className:(0,i.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=s?s:r}),r)})})}function w(e){var r=e.lazy,s=e.children,l=e.selectedValue,c=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){var d=c.find(function(e){return e.props.value===l});return d?(0,t.cloneElement)(d,{className:(0,i.Z)("margin-top--md",d.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:c.map(function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==l})})})}function D(e){var r=function(e){var r,s,n,i,l,h,f,m,b,v,g,y,w,D,S=e.defaultValue,k=e.queryString,O=e.groupId;var z=(s=(r=e).values,n=r.children,(0,t.useMemo)(function(){var e=null!=s?s:x(n).map(function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}});return!function(e){var r=(0,a.lx)(e,function(e,r){return e.value===r.value});if(r.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(r.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[s,n])),I=j((0,t.useState)(function(){return function(e){var r,s=e.defaultValue,n=e.tabValues;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(s,'" but none of its children has the corresponding value. Available values are: ').concat(n.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return s}var t=null!==(r=n.find(function(e){return e.default}))&&void 0!==r?r:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:S,tabValues:z})}),2),N=I[0],P=I[1];var T=j((l=(i={queryString:void 0!==k&&k,groupId:O}).queryString,h=i.groupId,f=(0,c.k6)(),m=function(e){var r=e.queryString,s=void 0!==r&&r,n=e.groupId;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:void 0!==l&&l,groupId:h}),[(0,o._X)(m),(0,t.useCallback)(function(e){if(!!m){var r,s,n=new URLSearchParams(f.location.search);n.set(m,e),f.replace((r=function(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(r){var n,t,i;n=e,t=r,i=s[r],t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i})}return e}({},f.location),s=(s={search:n.toString()},s),Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):(function(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s.push.apply(s,n)}return s})(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))}),r))}},[m,f])]),2),C=T[0],E=T[1];var A=j((v=(b=({groupId:O}).groupId)?"docusaurus.tab.".concat(b):null,y=(g=j((0,u.Nk)(v),2))[0],w=g[1],[y,(0,t.useCallback)(function(e){if(!!v)w.set(e)},[v,w])]),2),V=A[0],L=A[1];var Z=p({value:D=null!=C?C:V,tabValues:z})?D:null;return(0,d.Z)(function(){Z&&P(Z)},[Z]),{selectedValue:N,selectValue:(0,t.useCallback)(function(e){if(!p({value:e,tabValues:z}))throw Error("Can't select invalid tab value=".concat(e));P(e),E(e),L(e)},[E,L,z]),tabValues:z}}(e);return(0,n.jsxs)("div",{className:(0,i.Z)("tabs-container",m),children:[(0,n.jsx)(y,v({},r,e)),(0,n.jsx)(w,v({},r,e))]})}function S(e){var r=(0,f.Z)();return(0,n.jsx)(D,g(v({},e),{children:x(e.children)}),String(r))}},80980:function(e,r,s){s.d(r,{Z:function(){return c},a:function(){return l}});var n=s(27378);let t={},i=n.createContext(t);function l(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);