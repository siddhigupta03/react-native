(window.webpackJsonp=window.webpackJsonp||[]).push([[918],{1008:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},f=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(a),b=r,d=f["".concat(i,".").concat(b)]||f[b]||u[b]||o;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},995:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(8),o=(a(0),a(1008)),i={title:"React Native for Android: How we built the first cross-platform React Native app",author:"Daniel Witte",authorTitle:"Software Engineer at Facebook",authorURL:"https://www.facebook.com/drwitte",authorFBID:210064,hero:"/blog/assets/blue-hero.png",tags:["announcement"]},c={permalink:"/blog/2015/09/14/react-native-for-android",source:"@site/blog/2015-09-14-react-native-for-android.md",description:"Earlier this year, we introduced React Native for iOS. React Native brings what developers are used to from React on the web \u2014 declarative self-contained UI components and fast development cycles \u2014 to the mobile platform, while retaining the speed, fidelity, and feel of native applications. Today, we're happy to release React Native for Android.",date:"2015-09-14T00:00:00.000Z",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],title:"React Native for Android: How we built the first cross-platform React Native app",readingTime:.895,truncated:!1,prevItem:{title:"Making React Native apps accessible",permalink:"/blog/2015/11/23/making-react-native-apps-accessible"},nextItem:{title:"React Native: Bringing modern web techniques to mobile",permalink:"/blog/2015/03/26/react-native-bringing-modern-web-techniques-to-mobile"}},p=[],l={toc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Earlier this year, we introduced ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/"},"React Native for iOS"),". React Native brings what developers are used to from React on the web \u2014 declarative self-contained UI components and fast development cycles \u2014 to the mobile platform, while retaining the speed, fidelity, and feel of native applications. Today, we're happy to release React Native for Android."),Object(o.b)("p",null,"At Facebook we've been using React Native in production for over a year now. Almost exactly a year ago, our team set out to develop the ",Object(o.b)("a",{parentName:"p",href:"https://www.facebook.com/business/news/ads-manager-app"},"Ads Manager app"),". Our goal was to create a new app to let the millions of people who advertise on Facebook manage their accounts and create new ads on the go. It ended up being not only Facebook's first fully React Native app but also the first cross-platform one. In this post, we'd like to share with you how we built this app, how React Native enabled us to move faster, and the lessons we learned."),Object(o.b)("footer",null,Object(o.b)("a",{href:"https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/",className:"btn"},"Read more")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",Object(o.b)("a",{parentName:"p",href:"https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/"},"Facebook Code"),".")))}s.isMDXComponent=!0}}]);