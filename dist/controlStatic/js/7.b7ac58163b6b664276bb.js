webpackJsonp([7],{GKf8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("KQCB"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);var r=i("RrwU"),c=function(t){i("Y7gp")},l=i("VU/8")(a.a,r.a,!1,c,"data-v-1a2d3d53",null);e.default=l.exports},KQCB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){return t&&t.__esModule?t:{default:t}}(i("Dd8w")),a=i("NYxO"),n=i("Z+cC"),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(i("5reh"));e.default={name:"",computed:(0,s.default)({},(0,a.mapGetters)(["activePlace","assistantMenu"])),data:function(){return{}},components:{Map:n.Map},mounted:function(){this.activePlace.id||this.$store.dispatch("Get_activePlace",this.$route.query.id)},methods:{bgImg:function(t){try{return i("ypl4")("./"+t+".jpeg")}catch(t){return i("J/TN")}},minClickBtn:function(){this.$store.commit(r.APP_ASSISTANT_MENU,!0)}}}},RrwU:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-page border-wrap"},[e("div",{staticClass:"title",style:{"background-image":"url("+this.bgImg(this.activePlace.value)+")"}},[e("h2",{staticClass:"title-text-one"},[this._v(this._s(this.activePlace.label))]),this._v(" "),e("div",{staticClass:"weather-box"},[this._v("天气模块待开发")])]),this._v(" "),e("div",{staticClass:"con-wrap-text"},[this.activePlace.id?e("div",{staticClass:"con-list-box"},[e("h3",[this._v("简介")]),this._v(" "),e("p",{staticClass:"intro-one"},[this._v(this._s(this.activePlace.intro))]),this._v(" "),e("Map",{attrs:{placeData:this.activePlace}})],1):this._e()]),this._v(" "),e("transition",{attrs:{name:"fade"}},[this.assistantMenu?this._e():e("el-button",{staticClass:"minority-btn",attrs:{type:"warning",circle:""},on:{click:this.minClickBtn}},[this._v("少数"),e("br"),this._v("民族")])],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"bottom-end"},[e("i",[this._v("-- 到底了 --")])])}]};e.a=s},Y7gp:function(t,e){}});