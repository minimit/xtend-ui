(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2iEb":function(r,t,e){"use strict";e.r(t),t.default=function(){return"text-black links-default bg-gray-200"}},"33yf":function(r,t,e){(function(r){function e(r,t){for(var e=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}t.resolve=function(){for(var t="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:r.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,i="/"===s.charAt(0))}return(i?"/":"")+(t=e(n(t.split("/"),(function(r){return!!r})),!i).join("/"))||"."},t.normalize=function(r){var o=t.isAbsolute(r),s="/"===i(r,-1);return(r=e(n(r.split("/"),(function(r){return!!r})),!o).join("/"))||o||(r="."),r&&s&&(r+="/"),(o?"/":"")+r},t.isAbsolute=function(r){return"/"===r.charAt(0)},t.join=function(){var r=Array.prototype.slice.call(arguments,0);return t.normalize(n(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))},t.relative=function(r,e){function n(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=t.resolve(r).substr(1),e=t.resolve(e).substr(1);for(var i=n(r.split("/")),o=n(e.split("/")),s=Math.min(i.length,o.length),a=s,c=0;c<s;c++)if(i[c]!==o[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,i=!0,o=r.length-1;o>=1;--o)if(47===(t=r.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},t.basename=function(r,t){var e=function(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,i=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!i){e=t+1;break}}else-1===n&&(i=!1,n=t+1);return-1===n?"":r.slice(e,n)}(r);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,i=!0,o=0,s=r.length-1;s>=0;--s){var a=r.charCodeAt(s);if(47!==a)-1===n&&(i=!1,n=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){e=s+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===e+1?"":r.slice(t,n)};var i="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)}}).call(this,e("8oxB"))},IRUh:function(r,t,e){"use strict";e.d(t,"a",(function(){return u}));var n=e("dI71"),i=e("q1tI"),o=e.n(i),s=e("iyGq"),a=e("KQm4"),c=(e("yLb1"),function(r){function t(){return r.apply(this,arguments)||this}return Object(n.a)(t,r),t.prototype.render=function(){var r=this.props,t=r.demo,n=r.children;if("undefined"!=typeof window){var i;e("RoSU");var s=e("Zz1u").Xt,c="gatsby_iframe-inside";t.container&&(c+=" gatsby_iframe-container"),(i=document.documentElement.classList).add.apply(i,Object(a.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+t.name);s.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,t.htmlSource,t.jsxSource,t.cssSource,t.jsSource)}))}return o.a.createElement(o.a.Fragment,null,n)},t}(o.a.Component)),u=function(r){function t(){return r.apply(this,arguments)||this}return Object(n.a)(t,r),t.prototype.render=function(){var r=this.props.demo,t={title:"Demo",description:"Demo"};return r.path=("/demos/"+r.dirs.join("/")+"/"+r.name).replace("/iframe","").replace("src/gatsby/code/",""),r.cssSource=r.path+".css",r.jsSource=r.path+".js",o.a.createElement(c,{demo:r},o.a.createElement(s.a,{title:t.title,description:t.description}),o.a.createElement("div",{id:"body-outer"},o.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:r.htmlSource}})))},t}(o.a.Component)},NZ0y:function(r,t,e){"use strict";e.r(t),function(r){e.d(t,"demo",(function(){return m}));var n=e("dI71"),i=e("q1tI"),o=e.n(i),s=e("33yf"),a=e.n(s),c=e("IRUh"),u=e("sf5o").default,l=e("2iEb").default,b=e("Yg7f").default,f=r.replace(/\\/g,"/"),d=a.a.dirname(f).split("/"),m={container:!0,name:a.a.basename(f,".js"),dirs:d};m.htmlSource='\n<br><br><br><br><br><br><br>\n\n<div class="demo--sticky-block">\n  <div class="card card-sm '+b()+'">\n    <button type="button" class="btn btn-md rounded-md '+u()+' demo--sticky-block--btn">\n      Click to block/unblock\n    </button>\n  </div>\n</div>\n\n<div class="card card-sm '+l()+'">\n  <div class="h4">Lorem ipsum</div>\n  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n</div>\n\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n<br><br><br><br><br><br><br>\n';var p=function(r){function t(){return r.apply(this,arguments)||this}return Object(n.a)(t,r),t.prototype.render=function(){return o.a.createElement(c.a,{demo:m})},t}(o.a.Component);t.default=p}.call(this,"src/gatsby/code/iframe/components/core/sticky/block.js")},Yg7f:function(r,t,e){"use strict";e.r(t),t.default=function(){return"text-white links-inverse bg-accent-500"}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-sticky-block-js-a4e95662005203f2426c.js.map