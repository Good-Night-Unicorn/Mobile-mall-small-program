(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goodsCommentback-detail"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2023:function(t,e,n){"use strict";var r=n("fb6b"),i=n.n(r);i.a},"2e99":function(t,e,n){"use strict";n.r(e);var r=n("6c13"),i=n("89d6");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("2023");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"42f7d965",null,!1,r["a"],a);e["default"]=c.exports},"6c13":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={mescrollUni:n("fe7b").default,uniPopup:n("551d").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"detail-content"},[n("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"10rpx",borderWidth:"2rpx",borderStyle:"solid",height:"68rpx"}},[n("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("关联表id：")]),n("v-uni-view",{staticClass:"text",style:{color:"#333",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.refid))])],1),n("v-uni-view",{staticClass:"detail-list-item",style:{boxShadow:"0 0 10rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"10rpx",borderWidth:"2rpx",borderStyle:"solid",height:"68rpx"}},[n("v-uni-view",{staticClass:"lable",style:{width:"auto",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[t._v("用户名：")]),n("v-uni-view",{staticClass:"text",style:{color:"#333",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(t.detail.nickname))])],1)],1),n("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"2rpx",borderStyle:"solid",height:"100%"}},[n("v-uni-view",{staticClass:"header",style:{color:"rgba(51, 153, 153, 1)",fontSize:"28rpx"}},[t._v("评论内容")]),n("v-uni-view",{staticClass:"content",style:{color:"#333",fontSize:"28rpx"}},[t._v(t._s(t.detail.content))])],1),n("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",margin:"0 0 10rpx 0",borderColor:"rgba(51, 153, 153, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"2rpx",borderStyle:"solid",height:"100%"}},[n("v-uni-view",{staticClass:"header",style:{color:"rgba(51, 153, 153, 1)",fontSize:"28rpx"}},[t._v("回复内容")]),n("v-uni-view",{staticClass:"content",style:{color:"#333",fontSize:"28rpx"}},[t._v(t._s(t.detail.reply))])],1),n("v-uni-view",{staticClass:"time-content",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"rgba(102, 204, 204, 1)",backgroundColor:"#fff",borderRadius:"10rpx",borderWidth:"2rpx",borderStyle:"solid"}},[n("v-uni-view",{staticClass:"comoment-header",style:{borderColor:"rgba(255, 4, 4, 1)",backgroundColor:"#fff",borderRadius:"0px",borderStyle:"solid",borderWidth:"0 0 2rpx 0"}},[n("v-uni-view",{style:{color:"rgba(255, 0, 0, 1)",fontSize:"28rpx"}},[t._v("评论")]),n("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{borderColor:"red",backgroundColor:"#fff",color:"rgba(255, 0, 0, 1)",borderRadius:"0",borderWidth:"0",width:"auto",fontSize:"28rpx",borderStyle:"solid",isBtn:!0,height:"60rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),n("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(e,r){return n("v-uni-view",{key:r,staticClass:"cu-item comment-item",style:{borderColor:"rgba(255, 0, 0, 0.2)",backgroundColor:"#fff",borderRadius:"0",borderStyle:"dashed",borderWidth:"0 0 2rpx 0"}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey",style:{color:"rgba(102, 204, 204, 1)",textAlign:"left",fontSize:"28rpx"}},[t._v(t._s(e.nickname))]),n("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{color:"#666",textAlign:"left",fontSize:"24rpx"}},[t._v(t._s(e.content))]),n("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{color:"rgba(0, 29, 251, 1)",textAlign:"right",fontSize:"24rpx"}},[t._v(t._s(e.addtime))]),e.reply?n("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{color:"#666",textAlign:"left",fontSize:"24rpx"}},[t._v("回复:"+t._s(e.reply))]):t._e()],1)],1)})),1)],1),n("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop"},[n("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),n("v-uni-view",{staticStyle:{"text-align":"right"}})],1)],1),n("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[n("v-uni-form",{staticClass:"popup-form"},[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sfshChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(e){t.$set(t.detail,"shhf",e)},expression:"detail.shhf"}})],1),n("v-uni-view",{staticClass:"btn-content"},[n("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},o=[]},7884:function(t,e,n){"use strict";var r=n("4ea4");n("99af"),n("4e82"),n("acd8"),n("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),o={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.id=t.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.init(),n=uni.getStorageSync("nowTable"),t.next=4,e.$api.session(n);case 4:r=t.sent,e.user=r.data,e.btnColor=e.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.clearInterval(this.inter)},methods:{onPayTap:function(){uni.setStorageSync("paytable","discussshangpinxinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(t){uni.setStorageSync("crossTable","discussshangpinxinxi"),uni.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.info("discussshangpinxinxi",t.id);case 2:n=e.sent,t.detail=n.data;case 4:case"end":return e.stop()}}),e)})))()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api.list("discussdiscussshangpinxinxi",{page:t.num,limit:t.size,refid:e.id});case 2:r=n.sent,1==t.num&&(e.commentList=[]),e.commentList=e.commentList.concat(r.data.list),0==r.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;uni.downloadFile({url:t,success:function(n){200===n.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussdiscussshangpinxinxi/add-or-update?refid=".concat(this.id))},zan:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,uni.showModal({title:"提示",content:"是否点赞",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=4,n.$api.update("discussshangpinxinxi",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e)})))()},cai:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t,uni.showModal({title:"提示",content:"是否点踩",success:function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=4,n.$api.update("discussshangpinxinxi",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.detail.sfsh){e.next=3;break}return t.$utils.msg("请选择审核状态"),e.abrupt("return");case 3:if(t.detail.shhf){e.next=6;break}return t.$utils.msg("请填写审核回复"),e.abrupt("return");case 6:return"通过"==t.detail.sfsh&&(t.detail.sfsh="是"),"不通过"==t.detail.sfsh&&(t.detail.sfsh="否"),e.next=10,t.$api.update("discussshangpinxinxi",t.detail);case 10:t.$utils.msg("审核成功"),t.$refs.popup.close();case 12:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=o},"89d6":function(t,e,n){"use strict";n.r(e);var r=n("7884"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=y;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={},g={};g[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(F([])));b&&b!==r&&i.call(b,a)&&(g=b);var x=k.prototype=C.prototype=Object.create(g);S.prototype=x.constructor=k,k.constructor=S,k[c]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},l.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[s]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,n,r){var i=new L(y(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=F,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;R(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function y(t,e,n,r){var i=e&&e.prototype instanceof C?e:C,o=Object.create(i.prototype),a=new $(r||[]);return o._invoke=z(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function C(){}function S(){}function k(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(n,r,o,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,a)}))}a(s.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function z(t,e,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return O()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var s=I(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function I(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,v;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function F(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9c92":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-42f7d965]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-42f7d965]{width:100%;height:%?450?%}.swiper uni-image[data-v-42f7d965]{width:100%}.detail-content[data-v-42f7d965]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-42f7d965]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-42f7d965]{font-size:%?33?%;color:red}.time-content[data-v-42f7d965]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-42f7d965]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-42f7d965]{position:fixed;bottom:0;left:0;width:100%}.comoment-header[data-v-42f7d965]{display:flex;justify-content:space-between;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-42f7d965]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-42f7d965]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-42f7d965]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-42f7d965]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-42f7d965]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-42f7d965]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-42f7d965]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-42f7d965]{padding:0 %?24?%;box-sizing:border-box;display:flex;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-42f7d965]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-42f7d965]{flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-42f7d965]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-42f7d965]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}.priceFavor[data-v-42f7d965]{height:%?96?%!important}.priceFavor .text[data-v-42f7d965]{font-size:%?64?%!important;color:red!important}.priceFavor .icon[data-v-42f7d965]{font-size:%?56?%!important;text-align:right!important;color:red!important}',""]),t.exports=e},fb6b:function(t,e,n){var r=n("9c92");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("4bb61b59",r,!0,{sourceMap:!1,shadowMode:!1})}}]);