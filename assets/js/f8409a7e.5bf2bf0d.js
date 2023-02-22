"use strict";(self.webpackChunkqurandb_docs=self.webpackChunkqurandb_docs||[]).push([[206],{3905:(a,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>k});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var s=n.createContext({}),u=function(a){var e=n.useContext(s),t=e;return a&&(t="function"==typeof a?a(e):l(l({},e),a)),t},p=function(a){var e=u(a.components);return n.createElement(s.Provider,{value:e},a.children)},c="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,s=a.parentName,p=o(a,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?n.createElement(k,l(l({ref:e},p),{},{components:t})):n.createElement(k,l({ref:e},p))}));function k(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=a,o[c]="string"==typeof a?a:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9568:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,slug:"/"},l="Introduction \ud83d\udc4b",o={unversionedId:"intro",id:"intro",title:"Introduction \ud83d\udc4b",description:"QuranDB adalah sebuah aplikasi yang dibuat untuk memudahkan pengguna dalam",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/",permalink:"/qurandb-docs/",draft:!1,editUrl:"https://github.com/RayRama/qurandb-docs/tree/master/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Release Notes \ud83d\udcdd",permalink:"/qurandb-docs/updates/changelog"}},s={},u=[{value:"Features \ud83d\udccb",id:"features-",level:2},{value:"Additional Features \ud83d\udccb",id:"additional-features-",level:3}],p={toc:u},c="wrapper";function d(a){let{components:e,...t}=a;return(0,r.kt)(c,(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-"},"Introduction \ud83d\udc4b"),(0,r.kt)("p",{className:"text-justify"},"QuranDB adalah sebuah aplikasi yang dibuat untuk memudahkan pengguna dalam mencari ",(0,r.kt)("span",{className:"font-bold"},"repetisi")," ayat Al-Qur'an berdasarkan kata kunci. Selain itu, aplikasi ini juga dapat digunakan untuk mencari"," ",(0,r.kt)("span",{className:"font-bold"},"terjemahan"),","," ",(0,r.kt)("span",{className:"font-bold"},"transliterasi"),", serta"," ",(0,r.kt)("span",{className:"font-bold"},"relasi")," antar ayat Al-Qur'an. Dibuat menggunakan teknologi Javascript yang memungkinkan aplikasi ini dapat diakses secara ",(0,r.kt)("span",{className:"font-italic"},"online")," maupun"," ",(0,r.kt)("span",{className:"font-italic"},"offline")," dan tersedia di berbagai perangkat."),(0,r.kt)("h2",{id:"features-"},"Features \ud83d\udccb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pencarian \ud83d\udd0d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ayat Al-Qur'an berdasarkan kata kunci (Arab atau Indonesia)"),(0,r.kt)("li",{parentName:"ul"},"Akar kata Bahasa Arab - On Progress \ud83d\udea7"))),(0,r.kt)("li",{parentName:"ul"},"Relasi \ud83d\udd01",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ayat Al-Qur'an dengan terjemahan Bahasa Indonesia"),(0,r.kt)("li",{parentName:"ul"},"Ayat Al-Qur'an dengan transliterasi Bahasa Indonesia"))),(0,r.kt)("li",{parentName:"ul"},"Menampilkan repetisi ayat Al-Qur'an berdasarkan kata kunci \u267e\ufe0f"),(0,r.kt)("li",{parentName:"ul"},"Terjemah per kata (kata perkata) Bahasa Indonesia \ud83c\udf10 - On Progress \ud83d\udea7")),(0,r.kt)("h3",{id:"additional-features-"},"Additional Features \ud83d\udccb"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Terintegrasi dengan AI (Artificial Intelligence) \ud83e\udd16 - On Progress \ud83d\udea7"),(0,r.kt)("li",{parentName:"ul"},"Tampilan yang responsif dan mudah digunakan \ud83d\udcf1"),(0,r.kt)("li",{parentName:"ul"},"Mode malam \ud83c\udf13"),(0,r.kt)("li",{parentName:"ul"},"Print hasil pencarian \ud83d\udda8\ufe0f"),(0,r.kt)("li",{parentName:"ul"},"Export hasil pencarian ke PDF \ud83d\udcc4"),(0,r.kt)("li",{parentName:"ul"},"Export hasil pencarian ke Excel \ud83d\udcd7"),(0,r.kt)("li",{parentName:"ul"},"Menampilkan ringkasan kata kunci yang dicari \ud83d\udcd6")))}d.isMDXComponent=!0}}]);