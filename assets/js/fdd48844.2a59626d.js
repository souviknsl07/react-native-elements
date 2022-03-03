"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9088],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return r?n.createElement(u,l(l({ref:t},s),{},{components:r})):n.createElement(u,l({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5993:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={},p=void 0,c={unversionedId:"props/switch",id:"version-3.4.2/props/switch",title:"switch",description:"Props",source:"@site/versioned_docs/version-3.4.2/props/switch.md",sourceDirName:"props",slug:"/props/switch",permalink:"/docs/3.4.2/props/switch",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/switch.md",tags:[],version:"3.4.2",frontMatter:{}},s=[{value:"Props",id:"props",children:[],level:2},{value:"Reference",id:"reference",children:[{value:"<code>color</code>",id:"color",children:[],level:3},{value:"<code>theme</code>",id:"theme",children:[],level:3},{value:"<code>style</code>",id:"style",children:[],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This component inherits\n",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/switch.html"},"all native Switch props that come with a standard React Native Switch element"),",\nalong with the following:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#color"},(0,o.kt)("inlineCode",{parentName:"a"},"color"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#theme"},(0,o.kt)("inlineCode",{parentName:"a"},"theme"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#style"},(0,o.kt)("inlineCode",{parentName:"a"},"style")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("h3",{id:"color"},(0,o.kt)("inlineCode",{parentName:"h3"},"color")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," of the Switch defines a color to the switch thumb. (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Theme(Primary)")))),(0,o.kt)("h3",{id:"theme"},(0,o.kt)("inlineCode",{parentName:"h3"},"theme")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," of the Switch provide a theme to the switch. (optional)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Theme(Primary)")))),(0,o.kt)("h3",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h3"},"style")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"style")," is used to define user defined styles on the switch and allows styles provided by Native Switch."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"none")))))}d.isMDXComponent=!0}}]);