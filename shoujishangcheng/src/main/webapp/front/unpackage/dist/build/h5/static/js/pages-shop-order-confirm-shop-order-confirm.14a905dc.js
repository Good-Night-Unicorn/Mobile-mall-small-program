(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-order-confirm-shop-order-confirm"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,u,"next",t)}function u(t){n(a,o,i,s,u,"throw",t)}s(void 0)}))}}r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2329:function(t,e,r){"use strict";r.r(e);var n=r("7b9b"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},4021:function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",[1!=t.seat?r("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddressTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title"},[t._v("地址")]),r("v-uni-view",[r("v-uni-view",[t._v(t._s(t.address.addressName)+" "+t._s(t.address.addressPhone))]),r("v-uni-view",[t._v(t._s(t.address.addressDizhi))])],1)],1):t._e(),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-view",{staticClass:"title"},[t._v("购买清单")])],1),t._l(t.orderGoods,(function(e,n){return r("v-uni-view",{key:n,staticClass:"cu-form-group"},[r("v-uni-image",{staticClass:"avator",attrs:{src:e.goodsPhoto,mode:""}}),r("v-uni-view",{staticClass:"title"},[r("v-uni-view",[t._v(t._s(e.goodsName))]),1!=t.seat?r("v-uni-view",[t._v("x"+t._s(e.buyNumber)),1==t.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[t._v("￥"+t._s(e.goodsNewMoney))]):t._e(),2==t.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[t._v(t._s(e.goodsNewMoney)+"积分")]):t._e()],1):r("v-uni-view",[t._v(t._s(e.address)+"号"),1==t.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[t._v("￥"+t._s(e.goodsNewMoney))]):t._e(),2==t.type?r("v-uni-text",{staticStyle:{"margin-left":"30upx",color:"red"}},[t._v(t._s(e.goodsNewMoney)+"积分")]):t._e()],1)],1)],1)})),r("v-uni-view",{staticClass:"cu-form-group",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAddressTap.apply(void 0,arguments)}}},[1==t.type?r("v-uni-view",{staticClass:"title"},[t._v("总价")]):t._e(),2==t.type?r("v-uni-view",{staticClass:"title"},[t._v("总积分")]):t._e(),r("v-uni-view",[1==t.type?r("v-uni-text",[t._v("￥"+t._s(t.total))]):t._e(),2==t.type?r("v-uni-text",[t._v(t._s(t.total)+"积分")]):t._e()],1)],1)],2),r("v-uni-view",{staticClass:"padding",staticStyle:{"text-align":"center"}},[1==t.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap()}}},[t._v("确认支付")]):t._e(),2==t.type?r("v-uni-button",{staticClass:"bg-red lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap()}}},[t._v("确认兑换")]):t._e()],1)],1)},i=[]},"46dd":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.avator[data-v-326295ec]{width:%?150?%;height:%?150?%;margin:%?20?% 0}',""]),t.exports=e},"7b9b":function(t,e,r){"use strict";var n=r("4ea4");r("99af"),r("acd8"),r("ac1f"),r("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("1da1")),i={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.type=t.type,e.seat=t.seat,e.orderGoods=uni.getStorageSync("orderGoods"),1!=e.seat)for(n=0;n<e.orderGoods.length;n++)0==e.total?e.total=parseFloat(e.orderGoods[n].goodsNewMoney)*e.orderGoods[n].buyNumber:e.total=parseFloat(e.total)+parseFloat(e.orderGoods[n].goodsNewMoney)*e.orderGoods[n].buyNumber;else e.total=parseFloat(e.orderGoods[0].total),e.address=e.orderGoods[0].address;e.total=e.total.toFixed(2);case 5:case"end":return r.stop()}}),r)})))()},onShow:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,t.$api.session(r);case 3:if(n=e.sent,t.user=n.data,1==t.seat){e.next=16;break}if(o=uni.getStorageSync("address"),!o||t.user.id!=t.address.yonghuId){e.next=12;break}t.address=uni.getStorageSync("address"),e.next=16;break;case 12:return e.next=14,t.$api.defaultAddress(t.user.id);case 14:n=e.sent,t.address=n.data;case 16:case"end":return e.stop()}}),e)})))()},methods:{onSubmitTap:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,n=uni.getStorageSync("nowTable"),uni.showModal({title:"提示",content:"是否确认支付",success:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var o,i,a,s,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=42;break}if(o=r.type,i=!0,1!=o){t.next=10;break}if(!(r.user.newMoney-r.total<0)){t.next=8;break}return r.$utils.msg("余额不足，请先充值"),i=!1,t.abrupt("return");case 8:t.next=15;break;case 10:if(2!=o){t.next=15;break}if(!(r.user.jifen-r.total<0)){t.next=15;break}return r.$utils.msg("积分不足，兑换商品失败"),i=!1,t.abrupt("return");case 15:a=0;case 16:if(!(a<r.orderGoods.length)){t.next=28;break}return s={goodsOrderUuidNumber:r.$utils.genTradeNo(),yonghuId:r.user.id,goodsId:r.orderGoods[a].goodsId,buyNumber:r.orderGoods[a].buyNumber,discounttotal:r.orderGoods[a].goodsNewMoney*r.orderGoods[a].buyNumber,addressId:r.address.id,orderTypes:1},1==r.seat&&(s["address"]=r.address,u=r.address.split(",").length,s["buyNumber"]=u,s["discounttotal"]=r.orderGoods[a].goodsNewMoney*u),t.next=21,r.$api.save("orders",s);case 21:if(!r.orderGoods[a].id){t.next=25;break}return t.next=24,r.$api.del("cart",JSON.stringify([r.orderGoods[a].id]));case 24:uni.removeStorageSync("cart".concat(r.orderGoods[a].goodsId).concat(r.user.id));case 25:a++,t.next=16;break;case 28:if(!i){t.next=42;break}if(1!=o){t.next=37;break}return r.$utils.msgBack("支付成功"),r.user.newMoney=r.user.newMoney-r.total,(r.user.jifen||0==r.user.jifen)&&(r.user.jifen=parseFloat(r.user.jifen)+parseFloat(r.total)),t.next=35,r.$api.update(n,r.user);case 35:t.next=42;break;case 37:if(2!=o){t.next=42;break}return r.$utils.msgBack("兑换成功"),r.user.jifen=r.user.jifen-r.total,t.next=42,r.$api.update(n,r.user);case 42:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 3:case"end":return e.stop()}}),e)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};e.default=i},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,d=e.regeneratorRuntime;if(d)c&&(t.exports=d);else{d=e.regeneratorRuntime=c?t.exports:{},d.wrap=b;var l="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=L.prototype=_.prototype=Object.create(y);k.prototype=w.constructor=L,L.constructor=k,L[u]=k.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},d.awrap=function(t){return{__await:t}},G(N.prototype),N.prototype[s]=function(){return this},d.AsyncIterator=N,d.async=function(t,e,r,n){var o=new N(b(t,e,r,n));return d.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},G(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},d.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new M(n||[]);return i._invoke=S(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function k(){}function L(){}function G(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function N(t){function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(c).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function S(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return T()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?h:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bd70:function(t,e,r){"use strict";r.r(e);var n=r("4021"),o=r("2329");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("cb1b");var a,s=r("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"326295ec",null,!1,n["a"],a);e["default"]=u.exports},cb1b:function(t,e,r){"use strict";var n=r("ced3"),o=r.n(n);o.a},ced3:function(t,e,r){var n=r("46dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("656cd5d1",n,!0,{sourceMap:!1,shadowMode:!1})}}]);