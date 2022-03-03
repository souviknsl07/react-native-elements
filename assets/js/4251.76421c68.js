"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=m(r),p=n,g=d["".concat(o,".").concat(p)]||d[p]||u[p]||l;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78665:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(63366),n=r(67294),l=r(86010),i=r(96087),c=r(39960);const o="sidebar_a9qW",m="sidebarItemTitle_uKok",s="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",d="sidebarItemLink_miNk",p="sidebarItemLinkActive_RRTD";var g=r(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:s},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var v=["sidebar","toc","children"];const f=function(e){var t=e.sidebar,r=e.toc,c=e.children,o=(0,a.Z)(e,v),m=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),r&&n.createElement("div",{className:"col col--2"},r))))}},38561:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(67294),n=r(86010),l=r(3905),i=r(95999),c=r(39960),o=r(44996),m=r(29548),s=r(18780),u=r(27440),d=r(86753);const p="blogPostTitle_rzP5",g="blogPostData_Zg1s",h="blogPostDetailsFull_h6_j";var v=r(20062);const f="image_o0gy";const E=function(e){var t=e.author,r=t.name,n=t.title,l=t.url,i=t.imageURL;return a.createElement("div",{className:"avatar margin-bottom--sm"},i&&a.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:l},a.createElement("img",{className:f,src:i,alt:r})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(c.Z,{href:l,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),n&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},b="authorCol_FlmR",Z="imageOnlyAuthorRow_trpF",y="imageOnlyAuthorCol_S2np";function N(e){var t=e.authors,r=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return a.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?Z:"row")},t.map((function(e,t){var i;return a.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?y:b),key:t},a.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=r.authorsImageUrls[t])?i:e.imageURL})}))})))}const _=function(e){var t,r,f,E=(f=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,o.C)().withBaseUrl,Z=e.children,y=e.frontMatter,_=e.assets,P=e.metadata,T=e.truncated,O=e.isBlogPostPage,k=void 0!==O&&O,w=P.date,j=P.formattedDate,x=P.permalink,C=P.tags,D=P.readingTime,L=P.title,R=P.editUrl,I=P.authors,S=null!=(t=_.image)?t:y.image,U=!k&&T,A=C.length>0,B=k?"h1":"h2";return a.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},a.createElement("header",null,a.createElement(B,{className:p,itemProp:"headline"},k?L:a.createElement(c.Z,{itemProp:"url",to:x},L)),a.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},a.createElement("time",{dateTime:w,itemProp:"datePublished"},j),void 0!==D&&a.createElement(a.Fragment,null," \xb7 ",E(D))),a.createElement(N,{authors:I,assets:_})),S&&a.createElement("meta",{itemProp:"image",content:b(S,{absolute:!0})}),a.createElement("div",{id:k?s.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},a.createElement(l.Zo,{components:u.Z},Z)),(A||T)&&a.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(r={},r[h]=k,r))},A&&a.createElement("div",{className:(0,n.Z)("col",{"col--9":U})},a.createElement(v.Z,{tags:C})),k&&R&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(d.Z,{editUrl:R})),U&&a.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":A})},a.createElement(c.Z,{to:P.permalink,"aria-label":"Read more about "+L},a.createElement("b",null,a.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(67294),n=r(95999),l=r(87462),i=r(63366),c=r(86010);const o="iconEdit_dcUD";var m=["className"];const s=function(e){var t=e.className,r=(0,i.Z)(e,m);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(o,t),"aria-hidden":"true"},r),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var u=r(29548);function d(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(s,null),a.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(87462),n=r(63366),l=r(67294),i=r(86010),c=r(95999),o=r(29548);const m="anchorWithStickyNavbar_mojV",s="anchorWithHideOnScrollNavbar_R0VQ";var u=["as","id"],d=["as"];function p(e){var t,r=e.as,d=e.id,p=(0,n.Z)(e,u),g=(0,o.LU)().navbar.hideOnScroll;return d?l.createElement(r,(0,a.Z)({},p,{className:(0,i.Z)("anchor",(t={},t[s]=g,t[m]=!g,t)),id:d}),p.children,l.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(r,p)}function g(e){var t=e.as,r=(0,n.Z)(e,d);return"h1"===t?l.createElement("h1",(0,a.Z)({},r,{id:void 0}),r.children):l.createElement(p,(0,a.Z)({as:t},r))}},27440:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(87462),n=r(63366),l=r(67294),i=r(12859),c=r(39960),o=r(96967),m=r(39649),s=r(86010),u=r(29548);const d="details_BAp3";function p(e){var t=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},t,{className:(0,s.Z)("alert alert--info",d,t.className)}))}var g=["mdxType","originalType"];const h={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,r;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(r=e.props)&&r.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,n.Z)(a,g));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,t)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(o.Z,e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var t;return l.createElement(o.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),r=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),n=l.createElement(l.Fragment,null,t.filter((function(e){return e!==r})));return l.createElement(p,(0,a.Z)({},e,{summary:r}),n)},h1:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return l.createElement(m.Z,(0,a.Z)({as:"h6"},e))}}},71750:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(39960);const l=function(e){var t=e.permalink,r=e.title,l=e.subLabel;return a.createElement(n.Z,{className:"pagination-nav__link",to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},r))}},7774:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(67294),n=r(86010),l=r(39960);const i="tag_hD8n",c="tagRegular_D6E_",o="tagWithCount_i0QQ";const m=function(e){var t,r=e.permalink,m=e.name,s=e.count;return a.createElement(l.Z,{href:r,className:(0,n.Z)(i,(t={},t[c]=!s,t[o]=s,t))},m,s&&a.createElement("span",null,s))}},20062:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(67294),n=r(86010),l=r(95999),i=r(7774);const c="tags_XVD_",o="tag_JSN8";function m(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,n.Z)(c,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return a.createElement("li",{key:r,className:o},a.createElement(i.Z,{name:t,permalink:r}))}))))}}}]);