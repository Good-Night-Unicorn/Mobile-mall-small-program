(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"02af":function(t,e,r){"use strict";r.r(e);var n=r("08fc"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"08fc":function(t,e,r){"use strict";var n=r("4ea4");r("ac1f"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var i=n(r("1da1")),o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],r=uni.getStorageSync("loginTable"),t.tableName=r,"yonghu"==t.tableName&&(t.yonghuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.yonghuxingbieOptions[0]),t.styleChange();case 5:case"end":return e.stop()}}),e)})))()},methods:{yonghuxingbieChange:function(t){this.yonghuxingbieIndex=t.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.ruleForm.yonghuming||"yonghu"!=t.tableName){e.next=3;break}return t.$utils.msg("用户名不能为空"),e.abrupt("return");case 3:if(t.ruleForm.mima||"yonghu"!=t.tableName){e.next=6;break}return t.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(t.ruleForm.xingming||"yonghu"!=t.tableName){e.next=9;break}return t.$utils.msg("姓名不能为空"),e.abrupt("return");case 9:if("yonghu"!=t.tableName||!t.ruleForm.lianxidianhua||t.$validate.isMobile(t.ruleForm.lianxidianhua)){e.next=12;break}return t.$utils.msg("联系电话应输入手机格式"),e.abrupt("return");case 12:if("yonghu"!=t.tableName||!t.ruleForm.money||t.$validate.isNumber(t.ruleForm.money)){e.next=15;break}return t.$utils.msg("余额应输入数字"),e.abrupt("return");case 15:return e.next=17,t.$api.register("".concat(t.tableName),t.ruleForm);case 17:t.$utils.msgBack("注册成功");case 19:case"end":return e.stop()}}),e)})))()}}};e.default=o},"0987":function(t,e,r){var n=r("f17e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=r("4f06").default;i("426743dd",n,!0,{sourceMap:!1,shadowMode:!1})},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var u=t[o](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function u(t){n(a,i,o,u,c,"next",t)}function c(t){n(a,i,o,u,c,"throw",t)}u(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,s=e.regeneratorRuntime;if(s)l&&(t.exports=s);else{s=e.regeneratorRuntime=l?t.exports:{},s.wrap=x;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",g={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==n&&i.call(y,a)&&(m=y);var b=_.prototype=k.prototype=Object.create(m);F.prototype=b.constructor=_,_.constructor=F,_[c]=F.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===F||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},s.awrap=function(t){return{__await:t}},L(C.prototype),C.prototype[u]=function(){return this},s.AsyncIterator=C,s.async=function(t,e,r,n){var i=new C(x(t,e,r,n));return s.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),b[c]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},s.values=j,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return u.type="throw",u.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function x(t,e,r,n){var i=e&&e.prototype instanceof k?e:k,o=Object.create(i.prototype),a=new $(n||[]);return o._invoke=E(t,r,a),o}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function F(){}function _(){}function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function C(t){function e(r,n,o,a){var u=w(t[r],t,n);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(l).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(u.arg)}var r;function n(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=n}function E(t,e,r){var n=f;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return R()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var u=N(a,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=w(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=w(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){while(++n<t.length)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a368:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[t._e(),"yonghu"==t.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"20rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"用户名"},model:{value:t.ruleForm.yonghuming,callback:function(e){t.$set(t.ruleForm,"yonghuming",e)},expression:"ruleForm.yonghuming"}})],1):t._e(),"yonghu"==t.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"20rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:t.ruleForm.mima,callback:function(e){t.$set(t.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):t._e(),"yonghu"==t.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"20rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"姓名"},model:{value:t.ruleForm.xingming,callback:function(e){t.$set(t.ruleForm,"xingming",e)},expression:"ruleForm.xingming"}})],1):t._e(),"yonghu"==t.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-picker",{attrs:{value:t.yonghuxingbieIndex,range:t.yonghuxingbieOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.yonghuxingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"20rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.ruleForm.xingbie?t.ruleForm.xingbie:"请选择性别"))])],1)],1):t._e(),"yonghu"==t.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"20rpx",color:"#333",textAlign:"left",borderWidth:"4rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系电话"},model:{value:t.ruleForm.lianxidianhua,callback:function(e){t.$set(t.ruleForm,"lianxidianhua",e)},expression:"ruleForm.lianxidianhua"}})],1):t._e(),r("v-uni-view",[r("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(51, 153, 153, 1)",borderRadius:"20rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"2rpx",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v("注册")])],1)],1)},o=[]},ceaf:function(t,e,r){"use strict";r.r(e);var n=r("a368"),i=r("02af");for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);r("ea7d");var a,u=r("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"9c1937ec",null,!1,n["a"],a);e["default"]=c.exports},ea7d:function(t,e,r){"use strict";var n=r("0987"),i=r.n(n);i.a},f17e:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-9c1937ec]{padding:%?100?%}.content[data-v-9c1937ec]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-9c1937ec]{text-align:center}.logo uni-image[data-v-9c1937ec]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-9c1937ec]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-9c1937ec]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-9c1937ec]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-9c1937ec]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-9c1937ec]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-9c1937ec]{color:#b49950}.picker-select-input[data-v-9c1937ec]{line-height:%?88?%}',""]),t.exports=e}}]);