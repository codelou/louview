webpackJsonp([2],{"6fb7":function(t,e){},"7yKk":function(t,e,s){t.exports=s.p+"static/img/banner.26ba0a2.png"},ClMQ:function(t,e){},I5gi:function(t,e){},JSm9:function(t,e){},KkAk:function(t,e){},Lkog:function(t,e){},VUqO:function(t,e){},"ffz/":function(t,e){t.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"index",path:"/",type:"pages"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"Layout 布局",name:"layout",path:"/layout"},{desc:"Icon 图标",name:"icon",path:"/icon"},{desc:"Button 按钮",name:"button",path:"/button"},{desc:"Tag 标签",name:"tag",path:"/tag"}]},{desc:"视图组件",path:"/component",items:[{desc:"Showmore 显示更多",name:"show-more",path:"/showMore"},{desc:"Limit 限制输入域",name:"limit-textarea",path:"/limit"},{desc:"metaInfo 三要素",name:"meta-info",path:"/meta-info"},{desc:"alert 警告",name:"alert",path:"/alert"},{desc:"LoadingBar 加载进度条",name:"loading-bar",path:"/loadingBar"},{desc:"skeleton 骨架屏",name:"skeleton",path:"/skeleton"}]}]}},mUtA:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={data:()=>({})},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header",style:"index"===this.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e("div",{staticClass:"header-container"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:s("7yKk"),width:"100"}})]),this._v(" "),e("router-link",{attrs:{to:{name:"giud"}}},[this._v("组件")])],1)])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("ClMQ")},null,null).exports,r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-footer"},[n("div",{staticClass:"footer-container"},[n("w-row",{attrs:{type:"flex",justify:"space-between"}},[n("w-col",{staticClass:"text-left",attrs:{span:12}},[n("a",{attrs:{href:"https://codelou.github.io/"}},[n("img",{attrs:{src:s("qygr"),width:"80"}})]),t._v(" "),n("div",[n("p",[t._v("author: codelou")]),t._v(" "),n("p",[t._v("email: 1577985001@qq.com ")]),t._v(" "),n("p",[t._v("github: "),n("a",{attrs:{href:"https://github.com/codelou"}},[t._v("https://github.com/codelou")])])])]),t._v(" "),n("w-col",{staticClass:"text-right",attrs:{span:12}},[n("a",{attrs:{href:"https://github.com/codelou/louview"}},[n("svg",{attrs:{"aria-hidden":"true",height:"80",version:"1.1",viewBox:"0 0 16 16",width:"40"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])],1)],1)])},staticRenderFns:[]};var l=s("VU/8")(null,r,!1,function(t){s("6fb7")},"data-v-4161b9d2",null).exports,c=s("ffz/"),u=s.n(c),d={data:()=>({data:u.a})},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e){return s("div",{staticClass:"group-container"},[s("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e){return e.desc?s("div",{staticClass:"side-nav-items"},[e.name?s("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):s("p",{staticClass:"side-nav-group"},[t._v(t._s(e.desc))]),t._v(" "),t._l(e.items,function(e){return s("div",[s("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))])],1)})],2):t._e()})],2)}),0)},staticRenderFns:[]};var p=s("VU/8")(d,h,!1,function(t){s("VUqO")},null,null).exports,m={data:()=>({msg:"hello vue"})},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-skeleton"},[e("w-skeleton",{attrs:{height:"80px"}}),this._v(" "),e("div",[e("div",{staticClass:"skeleton-container"},[e("div",{staticClass:"skeleton"},[e("w-skeleton",{attrs:{height:"300px"}})],1),this._v(" "),e("w-skeleton",{attrs:{height:"45px"}})],1),this._v(" "),e("div",{staticClass:"skeleton-bottom"},[e("w-skeleton",{attrs:{height:"45px"}})],1)])],1)},staticRenderFns:[]};var v=s("VU/8")(m,f,!1,function(t){s("JSm9")},null,null).exports,g={name:"app",data:()=>({init:!1,isIndex:!0}),watch:{$route(){this.isIndex="index"===this.$route.name}},mounted(){setTimeout(()=>{this.init=!0},250)},components:{mainHeader:o,sideNav:p,mainFooter:l,mainSkeleton:v}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.init?e("div",[e("mainHeader"),this._v(" "),this.isIndex?e("router-view",{staticClass:"page"}):e("div",{staticClass:"container"},[e("sideNav",{staticClass:"nav"}),this._v(" "),e("router-view",{staticClass:"view"})],1),this._v(" "),this.isIndex?this._e():e("mainFooter")],1):e("mainSkeleton")],1)},staticRenderFns:[]};var w=s("VU/8")(g,_,!1,function(t){s("Lkog")},null,null).exports,b=s("/ocq");n.a.use(b.a);let x=[];Object.keys(u.a).forEach(t=>{x=x.concat(u.a[t])});let y=t=>{t.forEach(t=>{if(t.items)y(t.items),x=x.concat(t.items);else{if("pages"===t.type)return void(t.component=(e=>s.e(1).then((()=>e(s("LFUG")(`./${t.name}.vue`))).bind(null,s)).catch(s.oe)));t.component=(e=>s.e(0).then((()=>e(s("Gv6s")(`./${t.name}.md`))).bind(null,s)).catch(s.oe))}})};y(x);var $=new b.a({routes:x}),C={name:"WButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},plain:Boolean,disabled:Boolean,round:Boolean},data:()=>({msg:"button"})},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"w__button",class:["w__button--"+t.type,{"is-plain":t.plain,"is-disabled":t.disabled,"is-round":t.round},"w__button--size-"+t.size],attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[""!==t.icon?s("i",{class:t.icon}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},I=s("VU/8")(C,k,!1,null,null,null).exports;I.install=function(t){t.component(I.name,I)};var S=I,E={name:"WRow",componentName:"WRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style(){var t={};return this.gutter&&(t.marginLeft=`-${this.gutter/2}px`,t.marginRight=t.marginLeft),t}},render(t){return t(this.tag,{class:["w-row","start"!==this.justify?`is-justify-${this.justify}`:"","top"!==this.align?`is-align-${this.align}`:"",{"w-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)},install:function(t){t.component(E.name,E)}},V=E,L={name:"WCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object]},computed:{gutter(){let t=this.$parent;for(;t&&"WRow"!==t.$options.componentName;)t=t.$parent;return t?t.gutter:0}},render(t){let e=[],s={};return this.gutter&&(s.paddingLeft=this.gutter/2+"px",s.paddingRight=s.paddingLeft),["span","offset","pull","push"].forEach(t=>{this[t]&&e.push("span"!==t?`w-col-${t}-${this[t]}`:`w-col-${this[t]}`)}),["xs","sm","md","lg"].forEach(t=>{if("number"==typeof this[t])e.push(`w-col-${t}-${this[t]}`);else if("object"==typeof this[t]){let s=this[t];Object.keys(s).forEach(n=>{e.push("span"!==n?`w-col-${t}-${n}-${s[n]}`:`w-col-${t}-${s[n]}`)})}}),t(this.tag,{class:["w-col",e],style:s},this.$slots.default)},install:function(t){t.component(L.name,L)}},B=L,T={name:"WTag",props:{closable:Boolean,color:{type:String,default:"primary"}},data:()=>({isclosed:!1}),methods:{hiddenTag(){this.isclosed=!0,this.$emit("close")}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"w-zoom-in-center"}},[e("div",{staticClass:"w__tag",class:"w__tag--"+this.color},[e("span",{staticClass:"w__tag--desc"},[this._t("default")],2),this._v(" "),this.closable?e("i",{staticClass:"w-icon-close2 w__tag--close",on:{click:this.hiddenTag}}):this._e()])])},staticRenderFns:[]},M=s("VU/8")(T,N,!1,null,null,null).exports;M.install=function(t){t.component(M.name,M)};var W=M,O={name:"WShowmore",props:{len:{type:Number,default:-1},text:{type:String,default:""},showText:{type:String,default:"显示更多"},hiddenText:{type:String,default:"收起"},allowFold:Boolean},data(){return{textLen:this.len}},methods:{showMore(){this.textLen=this.textLen===this.text.length?this.len:this.text.length}},filters:{filterText:(t,e)=>-1!==e&&e<t.length?t.substring(0,e)+"...":t}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"w__show-more"},[s("span",[t._v(t._s(t._f("filterText")(t.text,t.textLen)))]),t._v(" "),-1!==t.textLen&&t.textLen<t.text.length?s("a",{on:{click:t.showMore}},[t._v(t._s(t.showText))]):t._e(),t._v(" "),-1!==t.textLen&&t.textLen===t.text.length&&t.allowFold?s("a",{on:{click:t.showMore}},[t._v(t._s(t.hiddenText))]):t._e()])},staticRenderFns:[]},F=s("VU/8")(O,R,!1,null,null,null).exports;F.install=function(t){t.component(F.name,F)};var U=F,A={name:"WLimit",props:{placeholder:{type:String,default:"请输入内容"},rows:{type:Number,default:4},maxLen:{type:Number,default:20},isCut:{type:Boolean,default:!1},value:{type:[String,Number],default:""}},data(){return{isOver:!1,num:this.maxLen,currentValue:""}},methods:{handleInput(t){const e=t.target.value;this.$emit("input",e),this.setCurrentValue(e),this.$emit("change",e)},setCurrentValue(t){if(t!==this.currentValue)if(this.currentValue=t,this.currentValue.length<=this.maxLen)this.isOver=!1,this.num=this.maxLen-this.currentValue.length;else{if(this.isCut)return this.currentValue=this.currentValue.substring(0,this.maxLen),void(this.num=this.currentValue.length-this.maxLen);this.isOver=!0,this.num=this.currentValue.length-this.maxLen,this.$emit("overText",this.currentValue)}}},watch:{}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative"}},[s("textarea",t._b({staticClass:"w__limit--textarea",class:{"w__limit-over":t.isOver},domProps:{value:t.currentValue},on:{input:t.handleInput}},"textarea",t.$props,!1)),t._v(" "),s("span",{staticClass:"w__limit--text"},[t._v("\n    "+t._s(t.isOver?"已超出":"还可以输入")),s("span",{staticClass:"w__limit--num",class:{"w__limit--num-over":t.isOver}},[t._v(t._s(t.num))]),t._v("个字\n  ")])])},staticRenderFns:[]},P=s("VU/8")(A,j,!1,null,null,null).exports;P.install=function(t){t.component(P.name,P)};var q=P;const z="data-vue-meta-info";function K(t,e){t.setAttribute(z,!0);for(let s in e)e.hasOwnProperty(s)&&t.setAttribute(s,e[s])}function J(){let t=document.getElementsByTagName("head")[0];return{setMetaInfo(e){for(let s in e)"title"!==s?e.hasOwnProperty(s)&&e[s].forEach(e=>{let n=document.createElement(s);K(n,e),t.appendChild(n)}):document.title=e.title},removeMetaInfo(){!function(t){let e=t.querySelectorAll(`[${z}]`);for(let s=e.length-1;s>-1;s--)"true"===e[s].getAttribute(z)&&t.removeChild(e[s])}(t)}}}function G(t){J().removeMetaInfo(),J().setMetaInfo(t)}let H=()=>{};H.install=function(t){t.mixin({beforeCreate(){if(void 0!==this.$options.metaInfo){let t=typeof this.$options.metaInfo;this._hasMetaInfo=!0,void 0===this.$options.computed&&(this.$options.computed={}),this.$options.computed.$metaInfo="function"===t?this.$options.metaInfo:()=>this.$options.metaInfo}},beforeMount(){this._hasMetaInfo&&G(this.$metaInfo)},mounted(){this._hasMetaInfo&&this.$watch("$metaInfo",()=>{G(this.$metaInfo)})},activated(){this._hasMetaInfo&&G(this.$metaInfo)},deactivated(){this._hasMetaInfo&&G(this.$metaInfo)}})};var Q=H;var D={name:"WAlert",props:{title:{type:String,requre:!0,default(){const t=this.$slots.default;return e=t,Array.isArray(e)&&1===e.length&&void 0===e[0].tag&&e[0].text?t[0].text:void 0;var e}},type:{type:String,default:"info"},showIcon:{type:Boolean,default:!1},center:{type:Boolean,default:!1},closeText:{type:String},closable:{type:Boolean,default:!0},description:{type:String}},data:()=>({visible:!0}),computed:{typeClass(){return`w-alert--${this.type}`},iconClass:()=>"w-icon-fav",isBoldTitle(){return this.description?"is-bold":""},isBigIcon(){return this.description?"is-big":""}},methods:{close(t){this.visible=!1,this.$emit("close")}}},X={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"w-alert-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"w-alert",class:[t.typeClass,{"is-center":t.center}]},[t.showIcon?s("i",{staticClass:"w-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),t._v(" "),s("div",{staticClass:"w-alert__content"},[s("span",{staticClass:"w-alert__title",class:t.isBoldTitle},[t._v(t._s(this.title))]),t._v(" "),t.description?s("p",{staticClass:"w-alert__description"},[t._v(t._s(t.description))]):t._e(),t._v(" "),t.closable?s("i",{staticClass:"w-alert__closebtn",class:[t.closeText?"is-customed":"w-icon-close2"],on:{click:t.close}},[t._v(t._s(t.closeText))]):t._e()])])])},staticRenderFns:[]},Y=s("VU/8")(D,X,!1,null,null,null).exports;Y.install=function(t){t.component(Y.name,Y)};var Z=Y,tt={name:"WLoadingBar",props:{type:{type:Number,default:1}},data:()=>({speed:5,easing:"linear",percentNum:0,totalProgress:0,showSpinner:!0,isError:!1})},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w__loading-bar"},[e("div",{staticClass:"w__loading-bar--bar",class:this.isError?"w__loading-bar--error":"",style:{transform:"translate3d(-"+(100-this.totalProgress)+"%, 0, 0)"},attrs:{role:"bar"}},[e("div",{staticClass:"w__loading-bar--peg"})]),this._v(" "),this.showSpinner?e("div",{staticClass:"w__loading-bar--spinner",attrs:{role:"spinner"}},[e("div",{staticClass:"spinner-icon",class:this.isError?"spinner-icon--error":"",style:{animation:"w-spinner 400ms "+this.easing+" infinite"}})]):this._e()])},staticRenderFns:[]},st=s("VU/8")(tt,et,!1,null,null,null).exports;let nt=n.a.extend(st),it=null,at=null;nt.prototype.config=function(t){Object.keys(t).forEach(e=>{"isError"!==e&&"totalProgress"!==e&&(this[e]=t[e])})},nt.prototype.init=function(){return clearTimeout(it),this.totalProgress=0,this.isError=!1,this.vm=this.$mount(),document.body.appendChild(this.vm.$el),this},nt.prototype.start=function(){this.init(),it=setInterval(()=>{this.totalProgress<90&&(this.totalProgress+=(this.percentNum||Math.random())*this.speed)},100)},nt.prototype.end=function(){it||this.init(),this.totalProgress=100,clearTimeout(at),at=setTimeout(()=>{clearTimeout(it),it=null,document.body.removeChild(this.vm.$el)},200)},nt.prototype.error=function(){this.end(),this.totalProgress=100,this.isError=!0};var ot=(()=>new nt)(),rt={name:"WSkeleton",props:{proportion:{type:Number,default:1},bgColor:{type:String,default:"#b4bccc"},width:{type:String,default:"100%"},height:{type:[String,Boolean],default:!1}},data(){return{paddingBottom:this.height||`${100*this.proportion}%`}}},lt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w__skeleton",style:{background:this.bgColor,paddingBottom:this.paddingBottom,width:this.width}})},staticRenderFns:[]},ct=s("VU/8")(rt,lt,!1,null,null,null).exports;ct.install=function(t){t.component(ct.name,ct)};var ut=ct;const dt=[S,V,B,W,U,q,Z,ut],ht=function(t){ht.installed||(dt.map(e=>t.component(e.name,e)),Q.install(t),t.prototype.$loading=ot)};"undefined"!=typeof window&&window.Vue&&ht(window.Vue);var pt={install:ht,WButton:S,WRow:V,WCol:B,WTag:W,WShowMore:U,WLimitTextArea:q,MetaInfo:Q,WAlert:Z,WLoadingBar:ot,Skeleton:ut},mt={data:()=>({isExpand:!1}),methods:{toggle(){this.isExpand=!this.isExpand}}},ft={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"docs-demo-wrapper"},[e("div",{staticClass:"demo-container",style:{height:this.isExpand?"auto":"0"}},[e("div",{attrs:{span:"14"}},[e("div",{staticClass:"docs-demo docs-demo--expand"},[e("div",{staticClass:"highlight-wrapper"},[this._t("highlight")],2)])])]),this._v(" "),e("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:this.toggle}},[this._v(this._s(this.isExpand?"隐藏代码":"显示代码"))])])},staticRenderFns:[]};var vt=s("VU/8")(mt,ft,!1,function(t){s("KkAk")},null,null).exports;s("I5gi");n.a.component("demo-block",vt),n.a.use(pt),n.a.config.productionTip=!1,new n.a({el:"#app",router:$,components:{App:w},template:"<App/>"})},qygr:function(t,e,s){t.exports=s.p+"static/img/avater.b44d40d.png"}},["mUtA"]);