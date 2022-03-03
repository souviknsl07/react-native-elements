"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9027,8251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,b=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61804:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>m,default:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(93201),c=["components"],s={},l=void 0,d={unversionedId:"main/usage/Tab/Tab",id:"version-4.0.0-beta.0/main/usage/Tab/Tab",title:"Tab",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",sourceDirName:"main/usage/Tab",slug:"/main/usage/Tab/",permalink:"/docs/main/usage/Tab/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/Tab.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m=[],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.default,{mdxType:"Snack"}))}p.isMDXComponent=!0},93201:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>l,toc:()=>d,default:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],c={},s=void 0,l={unversionedId:"main/usage/Tab/snack/index",id:"version-4.0.0-beta.0/main/usage/Tab/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",sourceDirName:"main/usage/Tab/snack",slug:"/main/usage/Tab/snack/",permalink:"/docs/main/usage/Tab/snack/",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Tab/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},d=[],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Tab","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Tab%2C%20Text%2C%20TabView%20%7D%20from%20'react-native-elements'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bindex%2C%20setIndex%5D%20%3D%20React.useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CTab%0A%20%20%20%20%20%20%20%20value%3D%7Bindex%7D%0A%20%20%20%20%20%20%20%20onChange%3D%7B(e)%20%3D%3E%20setIndex(e)%7D%0A%20%20%20%20%20%20%20%20indicatorStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20height%3A%203%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20variant%3D%22primary%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Recent%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'timer'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22favorite%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'heart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CTab.Item%0A%20%20%20%20%20%20%20%20%20%20title%3D%22cart%22%0A%20%20%20%20%20%20%20%20%20%20titleStyle%3D%7B%7B%20fontSize%3A%2012%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'cart'%2C%20type%3A%20'ionicon'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FTab%3E%0A%0A%20%20%20%20%20%20%3CTabView%20value%3D%7Bindex%7D%20onChange%3D%7BsetIndex%7D%20animationType%3D%22spring%22%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'red'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ERecent%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'blue'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3EFavorite%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%20%20%3CTabView.Item%20style%3D%7B%7B%20backgroundColor%3A%20'green'%2C%20width%3A%20'100%25'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20h1%3ECart%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTabView.Item%3E%0A%20%20%20%20%20%20%3C%2FTabView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);