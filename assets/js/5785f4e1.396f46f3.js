"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["28620"],{34360:function(e,s,a){a.r(s),a.d(s,{metadata:()=>n,contentTitle:()=>o,default:()=>x,assets:()=>h,toc:()=>d,frontMatter:()=>m});var n=JSON.parse('{"id":"guides/markdown-features/math-equations","title":"Math Equations","description":"Writing LaTeX Math Equations","source":"@site/docs/guides/markdown-features/markdown-features-math-equations.mdx","sourceDirName":"guides/markdown-features","slug":"/markdown-features/math-equations","permalink":"/docs/markdown-features/math-equations","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-math-equations.mdx","tags":[],"version":"current","lastUpdatedBy":"moonrailgun","lastUpdatedAt":1729270082000,"frontMatter":{"id":"math-equations","description":"Writing LaTeX Math Equations","slug":"/markdown-features/math-equations"},"sidebar":"docs","previous":{"title":"MDX Plugins","permalink":"/docs/markdown-features/plugins"},"next":{"title":"Diagrams","permalink":"/docs/markdown-features/diagrams"}}'),t=a("24246"),r=a("80980"),l=a("15398"),i=a("58636"),c=a("14522");let m={id:"math-equations",description:"Writing LaTeX Math Equations",slug:"/markdown-features/math-equations"},o="Math Equations",h={},d=[{value:"Usage",id:"usage",level:2},{value:"Inline",id:"inline",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Enabling math equations",id:"configuration",level:2},{value:"Self-hosting KaTeX assets",id:"self-hosting-katex-assets",level:2}];function p(e){let s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mspace:"mspace",msubsup:"msubsup",msup:"msup",mtext:"mtext",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,r.a)(),...e.components},{Details:a}=s;return!a&&function(e,s){throw Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"math-equations",children:"Math Equations"})}),"\n","\n",(0,t.jsxs)(s.p,{children:["Mathematical equations can be rendered using ",(0,t.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["Please read ",(0,t.jsx)(s.a,{href:"https://katex.org",children:"KaTeX"})," documentation for more details."]}),"\n",(0,t.jsx)(s.h3,{id:"inline",children:"Inline"}),"\n",(0,t.jsxs)(s.p,{children:["Write inline math equations by wrapping LaTeX equations between ",(0,t.jsx)(s.code,{children:"$"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-latex",children:"Let $f\\colon[a,b]\\to\\R$ be Riemann integrable. Let $F\\colon[a,b]\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n"})}),"\n",(0,t.jsx)(c.Z,{children:(0,t.jsxs)(s.p,{children:["Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mspace,{}),(0,t.jsx)(s.mspace,{width:"0.1111em"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,t.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,t.jsx)(s.mspace,{width:"0.3333em"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(s.mo,{children:"\u2192"}),(0,t.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"f\\colon[a,b] \\to \\R"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mspace nobreak"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,t.jsx)(s.span,{className:"mpunct"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mrel",children:":"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,t.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be Riemann integrable. Let ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mspace,{}),(0,t.jsx)(s.mspace,{width:"0.1111em"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0.17em"}),(0,t.jsx)(s.mtext,{children:"\u2009\u2063"}),(0,t.jsx)(s.mo,{lspace:"0em",rspace:"0em",children:":"}),(0,t.jsx)(s.mspace,{width:"0.3333em"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"["}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mo,{separator:"true",children:","}),(0,t.jsx)(s.mi,{children:"b"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"]"}),(0,t.jsx)(s.mo,{children:"\u2192"}),(0,t.jsx)(s.mi,{mathvariant:"double-struck",children:"R"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F\\colon[a,b]\\to\\R"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"mspace nobreak"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1111em"}}),(0,t.jsx)(s.span,{className:"mpunct"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"-0.1667em"}}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord",children:(0,t.jsx)(s.span,{className:"mrel",children:":"})}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.3333em"}}),(0,t.jsx)(s.span,{className:"mopen",children:"["}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,t.jsx)(s.span,{className:"mpunct",children:","}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,t.jsx)(s.span,{className:"mclose",children:"]"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"\u2192"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6889em"}}),(0,t.jsx)(s.span,{className:"mord mathbb",children:"R"})]})]})]})," be ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsxs)(s.msubsup,{children:[(0,t.jsx)(s.mo,{children:"\u222B"}),(0,t.jsx)(s.mi,{children:"a"}),(0,t.jsx)(s.mi,{children:"x"})]}),(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"t"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mtext,{children:"\u2009"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"t"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F(x)=\n\\int_{a}^{x} f(t)\\,dt"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,t.jsxs)(s.span,{className:"mop",children:[(0,t.jsx)(s.span,{className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"},children:"\u222B"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"0.8593em"},children:[(0,t.jsxs)(s.span,{style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"})})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.2579em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.3558em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})]})]}),". Then ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"F"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is continuous, and at all ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," such that ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"f"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"f"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"})]})})]})," is continuous at ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]}),", ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"F"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"})]})})]})," is differentiable at ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsx)(s.mrow,{children:(0,t.jsx)(s.mi,{children:"x"})}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})," with ",(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsxs)(s.msup,{children:[(0,t.jsx)(s.mi,{children:"F"}),(0,t.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsx)(s.mi,{children:"f"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"F'(x)=f(x)"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,t.jsxs)(s.span,{className:"mord",children:[(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsx)(s.span,{className:"vlist-t",children:(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,t.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})]})]}),"."]})}),"\n",(0,t.jsx)(s.h3,{id:"blocks",children:"Blocks"}),"\n",(0,t.jsxs)(s.p,{children:["For equation block or display mode, use line breaks and ",(0,t.jsx)(s.code,{children:"$$"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-latex",children:"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n"})}),"\n",(0,t.jsx)(c.Z,{children:(0,t.jsx)(s.span,{className:"katex-display",children:(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"I"}),(0,t.jsx)(s.mo,{children:"="}),(0,t.jsxs)(s.msubsup,{children:[(0,t.jsx)(s.mo,{children:"\u222B"}),(0,t.jsx)(s.mn,{children:"0"}),(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mn,{children:"2"}),(0,t.jsx)(s.mi,{children:"\u03C0"})]})]}),(0,t.jsx)(s.mi,{children:"sin"}),(0,t.jsx)(s.mo,{children:"\u2061"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"x"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"}),(0,t.jsx)(s.mtext,{children:"\u2009"}),(0,t.jsx)(s.mi,{children:"d"}),(0,t.jsx)(s.mi,{children:"x"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"I = \\int_0^{2\\pi} \\sin(x)\\,dx"})]})})}),(0,t.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(s.span,{className:"mrel",children:"="}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,t.jsxs)(s.span,{className:"mop",children:[(0,t.jsx)(s.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222B"}),(0,t.jsx)(s.span,{className:"msupsub",children:(0,t.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(s.span,{className:"vlist-r",children:[(0,t.jsxs)(s.span,{className:"vlist",style:{height:"1.564em"},children:[(0,t.jsxs)(s.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(s.span,{className:"mord mtight",children:"0"})})]}),(0,t.jsxs)(s.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,t.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(s.span,{className:"mord mtight",children:[(0,t.jsx)(s.span,{className:"mord mtight",children:"2"}),(0,t.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03C0"})]})})]})]}),(0,t.jsx)(s.span,{className:"vlist-s",children:"\u200B"})]}),(0,t.jsx)(s.span,{className:"vlist-r",children:(0,t.jsx)(s.span,{className:"vlist",style:{height:"0.9119em"},children:(0,t.jsx)(s.span,{})})})]})})]}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mop",children:"sin"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(s.span,{className:"mclose",children:")"}),(0,t.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})]})]})})}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Enabling math equations"}),"\n",(0,t.jsx)(s.p,{children:"Enable KaTeX:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Install the ",(0,t.jsx)(s.code,{children:"remark-math"})," and ",(0,t.jsx)(s.code,{children:"rehype-katex"})," plugins:"]}),"\n",(0,t.jsxs)(l.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save remark-math@6 rehype-katex@7\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add remark-math@6 rehype-katex@7\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add remark-math@6 rehype-katex@7\n"})})})]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["Make sure to use ",(0,t.jsx)(s.code,{children:"remark-math 6"})," and ",(0,t.jsx)(s.code,{children:"rehype-katex 7"})," for Docusaurus v3 (using MDX v3). We can't guarantee other versions will work."]})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["These 2 plugins are ",(0,t.jsx)(s.a,{href:"https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c",children:(0,t.jsx)(s.strong,{children:"only available as ES Modules"})}),". We recommended to use an ",(0,t.jsx)(s.a,{href:"https://flaviocopes.com/es-modules/",children:(0,t.jsx)(s.strong,{children:"ES Modules"})})," config file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="ES module docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\n// highlight-start\nexport default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(s.p,{children:["Using a\n",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/modules.html#modules-commonjs-modules",children:(0,t.jsx)(s.strong,{children:"CommonJS"})}),"\nconfig file?"]})}),(0,t.jsx)(s.p,{children:"If you decide to use a CommonJS config file, it is possible to load those ES module plugins thanks to dynamic imports and an async config creator function:"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="CommonJS module docusaurus.config.js"',children:"// highlight-start\nmodule.exports = async function createConfigAsync() {\n  // highlight-end\n  return {\n    presets: [\n      [\n        '@docusaurus/preset-classic',\n        {\n          docs: {\n            path: 'docs',\n            // highlight-start\n            remarkPlugins: [(await import('remark-math')).default],\n            rehypePlugins: [(await import('rehype-katex')).default],\n            // highlight-end\n          },\n        },\n      ],\n    ],\n  };\n};\n"})})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Include the KaTeX CSS in your config under ",(0,t.jsx)(s.code,{children:"stylesheets"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"export default {\n  //...\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n};\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a,{children:[(0,t.jsx)("summary",{children:"See a config file example"}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// highlight-start\nimport remarkMath from 'remark-math';\nimport rehypeKatex from 'rehype-katex';\n// highlight-end\n\nexport default {\n  title: 'Docusaurus',\n  tagline: 'Build optimized websites quickly, focus on your content',\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          path: 'docs',\n          // highlight-start\n          remarkPlugins: [remarkMath],\n          rehypePlugins: [rehypeKatex],\n          // highlight-end\n        },\n      },\n    ],\n  ],\n  // highlight-start\n  stylesheets: [\n    {\n      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',\n      type: 'text/css',\n      integrity:\n        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',\n      crossorigin: 'anonymous',\n    },\n  ],\n  // highlight-end\n};\n"})})]}),"\n",(0,t.jsx)(s.h2,{id:"self-hosting-katex-assets",children:"Self-hosting KaTeX assets"}),"\n",(0,t.jsxs)(s.p,{children:["Loading stylesheets, fonts, and JavaScript libraries from CDN sources is a good practice for popular libraries and assets, since it reduces the amount of assets you have to host. In case you prefer to self-host the ",(0,t.jsx)(s.code,{children:"katex.min.css"})," (along with required KaTeX fonts), you can download the latest version from ",(0,t.jsx)(s.a,{href:"https://github.com/KaTeX/KaTeX/releases",children:"KaTeX GitHub releases"}),", extract and copy ",(0,t.jsx)(s.code,{children:"katex.min.css"})," and ",(0,t.jsx)(s.code,{children:"fonts"})," directory (only ",(0,t.jsx)(s.code,{children:".woff2"})," font types should be enough) to your site's ",(0,t.jsx)(s.code,{children:"static"})," directory, and in ",(0,t.jsx)(s.code,{children:"docusaurus.config.js"}),", replace the stylesheet's ",(0,t.jsx)(s.code,{children:"href"})," from the CDN URL to your local path (say, ",(0,t.jsx)(s.code,{children:"/katex/katex.min.css"}),")."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  stylesheets: [\n    {\n      href: '/katex/katex.min.css',\n      type: 'text/css',\n    },\n  ],\n};\n"})})]})}function x(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},58636:function(e,s,a){a.d(s,{Z:()=>l});var n=a("24246");a("27378");var t=a("90496");let r="tabItem_pnkT";function l(e){var s=e.children,a=e.hidden,l=e.className;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r,l),hidden:a,children:s})}},15398:function(e,s,a){a.d(s,{Z:()=>k});var n=a("24246"),t=a("27378"),r=a("90496"),l=a("54947"),i=a("3620"),c=a("844"),m=a("97486"),o=a("32263"),h=a("16971");function d(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,n=Array(s);a<s;a++)n[a]=e[a];return n}function p(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var a,n,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(a=t.next()).done)&&(r.push(a.value),!s||r.length!==s);l=!0);}catch(e){i=!0,n=e}finally{try{!l&&null!=t.return&&t.return()}finally{if(i)throw n}}return r}}(e,s)||function(e,s){if(e){if("string"==typeof e)return d(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,s)}}(e,s)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var s,a;return null!==(a=null===(s=t.Children.toArray(e).filter(function(e){return"\n"!==e}).map(function(e){var s,a;if(!e||(0,t.isValidElement)(e)&&(s=e.props)&&(void 0===s?"undefined":(a=s)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)=="object"&&"value"in s)return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===s?void 0:s.filter(Boolean))&&void 0!==a?a:[]}function u(e){var s=e.value;return e.tabValues.some(function(e){return e.value===s})}var j=a("71607");let g="tabList_Qoir",f="tabItem_AQgk";function y(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n,t,r;n=e,t=s,r=a[s],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r})}return e}function b(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(s)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}),e}function N(e){var s=e.className,a=e.block,t=e.selectedValue,i=e.selectValue,c=e.tabValues,m=[],o=(0,l.o5)().blockElementScrollPositionUntilNextRender,h=function(e){var s=e.currentTarget,a=c[m.indexOf(s)].value;a!==t&&(o(s),i(a))},d=function(e){var s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":var a,n=m.indexOf(e.currentTarget)+1;s=null!==(a=m[n])&&void 0!==a?a:m[0];break;case"ArrowLeft":var t,r=m.indexOf(e.currentTarget)-1;s=null!==(t=m[r])&&void 0!==t?t:m[m.length-1]}null==s||s.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},s),children:c.map(function(e){var s=e.value,a=e.label,l=e.attributes;return(0,n.jsx)("li",b(y({role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:function(e){return m.push(e)},onKeyDown:d,onClick:h},l),{className:(0,r.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":t===s}),children:null!=a?a:s}),s)})})}function v(e){var s=e.lazy,a=e.children,l=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){var c=i.find(function(e){return e.props.value===l});return c?(0,t.cloneElement)(c,{className:(0,r.Z)("margin-top--md",c.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map(function(e,s){return(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==l})})})}function w(e){var s=function(e){var s,a,n,r,l,d,j,g,f,y,b,N,v,w,k=e.defaultValue,O=e.queryString,R=e.groupId;var M=(a=(s=e).values,n=s.children,(0,t.useMemo)(function(){var e=null!=a?a:x(n).map(function(e){var s=e.props;return{value:s.value,label:s.label,attributes:s.attributes,default:s.default}});return!function(e){var s=(0,o.lx)(e,function(e,s){return e.value===s.value});if(s.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(s.map(function(e){return e.value}).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[a,n])),P=p((0,t.useState)(function(){return function(e){var s,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(a,'" but none of its children has the corresponding value. Available values are: ').concat(n.map(function(e){return e.value}).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return a}var t=null!==(s=n.find(function(e){return e.default}))&&void 0!==s?s:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:k,tabValues:M})}),2),S=P[0],E=P[1];var q=p((l=(r={queryString:void 0!==O&&O,groupId:R}).queryString,d=r.groupId,j=(0,i.k6)(),g=function(e){var s=e.queryString,a=void 0!==s&&s,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:void 0!==l&&l,groupId:d}),[(0,m._X)(g),(0,t.useCallback)(function(e){if(!!g){var s,a,n=new URLSearchParams(j.location.search);n.set(g,e),j.replace((s=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n,t,r;n=e,t=s,r=a[s],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r})}return e}({},j.location),a=(a={search:n.toString()},a),Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(a)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(a,e))}),s))}},[g,j])]),2),T=q[0],I=q[1];var L=p((y=(f=({groupId:R}).groupId)?"docusaurus.tab.".concat(f):null,N=(b=p((0,h.Nk)(y),2))[0],v=b[1],[N,(0,t.useCallback)(function(e){if(!!y)v.set(e)},[y,v])]),2),D=L[0],A=L[1];var $=u({value:w=null!=T?T:D,tabValues:M})?w:null;return(0,c.Z)(function(){$&&E($)},[$]),{selectedValue:S,selectValue:(0,t.useCallback)(function(e){if(!u({value:e,tabValues:M}))throw Error("Can't select invalid tab value=".concat(e));E(e),I(e),A(e)},[I,A,M]),tabValues:M}}(e);return(0,n.jsxs)("div",{className:(0,r.Z)("tabs-container",g),children:[(0,n.jsx)(N,y({},s,e)),(0,n.jsx)(v,y({},s,e))]})}function k(e){var s=(0,j.Z)();return(0,n.jsx)(w,b(y({},e),{children:x(e.children)}),String(s))}},14522:function(e,s,a){a.d(s,{Z:()=>p});var n=a("24246");a("27378");var t=a("90496");let r="browserWindow_my1Q",l="browserWindowHeader_jXSR",i="buttons_uHc7",c="browserWindowAddressBar_Pd8y",m="dot_giz1",o="browserWindowMenuIcon_Vhuh",h="bar_rrRL",d="browserWindowBody_Idgs";function p(e){var s,a,p=e.children,x=e.minHeight,u=e.url,j=e.style,g=e.bodyStyle;return(0,n.jsxs)("div",{className:r,style:(s=function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(s){var n,t,r;n=e,t=s,r=a[s],t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r})}return e}({},j),a=(a={minHeight:x},a),Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(a)):(function(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a.push.apply(a,n)}return a})(Object(a)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(a,e))}),s),children:[(0,n.jsxs)("div",{className:l,children:[(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)("span",{className:m,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:m,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:m,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,t.Z)(c,"text--truncate"),children:void 0===u?"http://localhost:3000":u}),(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:h}),(0,n.jsx)("span",{className:h}),(0,n.jsx)("span",{className:h})]})})]}),(0,n.jsx)("div",{className:d,style:g,children:p})]})}},80980:function(e,s,a){a.d(s,{Z:function(){return i},a:function(){return l}});var n=a(27378);let t={},r=n.createContext(t);function l(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);