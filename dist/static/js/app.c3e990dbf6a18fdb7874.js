webpackJsonp([3],{"33x2":function(t,e){},"38EM":function(t,e){},"7yKk":function(t,e,n){t.exports=n.p+"static/img/banner.26ba0a2.png"},"E/7q":function(t,e){},I5gi:function(t,e){},JNxM:function(t,e){},dG7Z:function(t,e){},"ffz/":function(t,e){t.exports={"开发指南":[{name:"giud",path:"/giud",desc:"介绍"},{name:"install",path:"/install",desc:"安装"},{name:"start",path:"/start",desc:"快速开始"},{name:"index",path:"/",type:"pages"},{name:"logs",path:"/logs",desc:"更新日志"}],"组件":[{desc:"基础组件",path:"/component",items:[{desc:"Layout 布局",name:"layout",path:"/layout"},{desc:"Icon 图标",name:"icon",path:"/icon"},{desc:"Button 按钮",name:"button",path:"/button"},{desc:"Tag 标签",name:"tag",path:"/tag"}]},{desc:"视图组件",path:"/component",items:[{desc:"Showmore 显示更多",name:"show-more",path:"/showMore"},{desc:"Limit 限制输入域",name:"limit-textarea",path:"/limit"},{desc:"metaInfo 三要素",name:"meta-info",path:"/meta-info"},{desc:"alert 警告",name:"alert",path:"/alert"},{desc:"LoadingBar 加载进度条",name:"loading-bar",path:"/loadingBar"},{desc:"skeleton 骨架屏",name:"skeleton",path:"/skeleton"}]}]}},lN6u:function(t,e){},mUtA:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header",style:"index"===this.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[e("div",{staticClass:"header-container"},[e("router-link",{attrs:{to:{name:"index"}}},[e("img",{attrs:{src:n("7yKk"),width:"100"}})]),this._v(" "),e("router-link",{attrs:{to:{name:"giud"}}},[this._v("组件")])],1)])},staticRenderFns:[]};var a=n("VU/8")({data:function(){return{}}},s,!1,function(t){n("lN6u")},null,null).exports,o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-footer"},[i("div",{staticClass:"footer-container"},[i("w-row",{attrs:{type:"flex",justify:"space-between"}},[i("w-col",{staticClass:"text-left",attrs:{span:12}},[i("a",{attrs:{href:"https://codelou.github.io/"}},[i("img",{attrs:{src:n("qygr"),width:"80"}})]),t._v(" "),i("div",[i("p",[t._v("author: codelou")]),t._v(" "),i("p",[t._v("email: 1577985001@qq.com ")]),t._v(" "),i("p",[t._v("github: "),i("a",{attrs:{href:"https://github.com/codelou"}},[t._v("https://github.com/codelou")])])])]),t._v(" "),i("w-col",{staticClass:"text-right",attrs:{span:12}},[i("a",{attrs:{href:"https://github.com/codelou/louview"}},[i("svg",{attrs:{"aria-hidden":"true",height:"80",version:"1.1",viewBox:"0 0 16 16",width:"40"}},[i("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])],1)],1)])},staticRenderFns:[]};var r=n("VU/8")(null,o,!1,function(t){n("JNxM")},"data-v-4161b9d2",null).exports,l=n("ffz/"),c=n.n(l),u={data:function(){return{data:c.a}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-nav"},t._l(Object.keys(t.data),function(e){return n("div",{staticClass:"group-container"},[n("p",{staticClass:"side-nav-title"},[t._v(t._s(e))]),t._v(" "),t._l(t.data[e],function(e){return e.desc?n("div",{staticClass:"side-nav-items"},[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):n("p",{staticClass:"side-nav-group"},[t._v(t._s(e.desc))]),t._v(" "),t._l(e.items,function(e){return n("div",[n("router-link",{staticClass:"slid-nav-component",class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))])],1)})],2):t._e()})],2)}),0)},staticRenderFns:[]};var h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-skeleton"},[e("w-skeleton",{attrs:{height:"80px"}}),this._v(" "),e("div",[e("div",{staticClass:"skeleton-container"},[e("div",{staticClass:"skeleton"},[e("w-skeleton",{attrs:{height:"300px"}})],1),this._v(" "),e("w-skeleton",{attrs:{height:"45px"}})],1),this._v(" "),e("div",{staticClass:"skeleton-bottom"},[e("w-skeleton",{attrs:{height:"45px"}})],1)])],1)},staticRenderFns:[]};var p={name:"app",data:function(){return{init:!1,isIndex:!0}},watch:{$route:function(){this.isIndex="index"===this.$route.name}},mounted:function(){var t=this;setTimeout(function(){t.init=!0},250)},components:{mainHeader:a,sideNav:n("VU/8")(u,d,!1,function(t){n("E/7q")},null,null).exports,mainFooter:r,mainSkeleton:n("VU/8")({data:function(){return{msg:"hello vue"}}},h,!1,function(t){n("38EM")},null,null).exports}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this.init?e("div",[e("mainHeader"),this._v(" "),this.isIndex?e("router-view",{staticClass:"page"}):e("div",{staticClass:"container"},[e("sideNav",{staticClass:"nav"}),this._v(" "),e("router-view",{staticClass:"view"})],1),this._v(" "),this.isIndex?this._e():e("mainFooter")],1):e("mainSkeleton")],1)},staticRenderFns:[]};var f=n("VU/8")(p,m,!1,function(t){n("33x2")},null,null).exports,v=n("/ocq");i.a.use(v.a);let g=[];Object.keys(c.a).forEach(t=>{g=g.concat(c.a[t])});let _=t=>{t.forEach(t=>{if(t.items)_(t.items),g=g.concat(t.items);else{if("pages"===t.type)return void(t.component=(e=>n.e(1).then((()=>e(n("LFUG")(`./${t.name}.vue`))).bind(null,n)).catch(n.oe)));t.component=(e=>n.e(0).then((()=>e(n("Gv6s")(`./${t.name}.md`))).bind(null,n)).catch(n.oe))}})};_(g);var w=new v.a({routes:g}),x={name:"WButton",props:{type:{type:String,default:"default"},size:{type:String,default:"default"},icon:{type:String,default:""},plain:Boolean,disabled:Boolean,round:Boolean},data:function(){return{msg:"button"}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"w__button",class:["w__button--"+t.type,{"is-plain":t.plain,"is-disabled":t.disabled,"is-round":t.round},"w__button--size-"+t.size],attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[""!==t.icon?n("i",{class:t.icon}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},y=n("VU/8")(x,b,!1,null,null,null).exports;y.install=function(t){t.component(y.name,y)};var C=y,$={name:"WRow",componentName:"WRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["w-row","start"!==this.justify?"is-justify-"+this.justify:"","top"!==this.align?"is-align-"+this.align:"",{"w-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)},install:function(t){t.component($.name,$)}},E=$,I=n("fZjL"),k=n.n(I),S=n("pFYg"),L=n.n(S),V={name:"WCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object]},computed:{gutter:function(){for(var t=this.$parent;t&&"WRow"!==t.$options.componentName;)t=t.$parent;return t?t.gutter:0}},render:function(t){var e=this,n=[],i={};return this.gutter&&(i.paddingLeft=this.gutter/2+"px",i.paddingRight=i.paddingLeft),["span","offset","pull","push"].forEach(function(t){e[t]&&n.push("span"!==t?"w-col-"+t+"-"+e[t]:"w-col-"+e[t])}),["xs","sm","md","lg"].forEach(function(t){if("number"==typeof e[t])n.push("w-col-"+t+"-"+e[t]);else if("object"===L()(e[t])){var i=e[t];k()(i).forEach(function(e){n.push("span"!==e?"w-col-"+t+"-"+e+"-"+i[e]:"w-col-"+t+"-"+i[e])})}}),t(this.tag,{class:["w-col",n],style:i},this.$slots.default)},install:function(t){t.component(V.name,V)}},N=V,B={name:"WTag",props:{closable:Boolean,color:{type:String,default:"primary"}},data:function(){return{isclosed:!1}},methods:{hiddenTag:function(){this.isclosed=!0,this.$emit("close")}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"w-zoom-in-center"}},[e("div",{staticClass:"w__tag",class:"w__tag--"+this.color},[e("span",{staticClass:"w__tag--desc"},[this._t("default")],2),this._v(" "),this.closable?e("i",{staticClass:"w-icon-close2 w__tag--close",on:{click:this.hiddenTag}}):this._e()])])},staticRenderFns:[]},M=n("VU/8")(B,T,!1,null,null,null).exports;M.install=function(t){t.component(M.name,M)};var W=M,F={name:"WShowmore",props:{len:{type:Number,default:-1},text:{type:String,default:""},showText:{type:String,default:"显示更多"},hiddenText:{type:String,default:"收起"},allowFold:Boolean},data:function(){return{textLen:this.len}},methods:{showMore:function(){this.textLen=this.textLen===this.text.length?this.len:this.text.length}},filters:{filterText:function(t,e){return-1!==e&&e<t.length?t.substring(0,e)+"...":t}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"w__show-more"},[n("span",[t._v(t._s(t._f("filterText")(t.text,t.textLen)))]),t._v(" "),-1!==t.textLen&&t.textLen<t.text.length?n("a",{on:{click:t.showMore}},[t._v(t._s(t.showText))]):t._e(),t._v(" "),-1!==t.textLen&&t.textLen===t.text.length&&t.allowFold?n("a",{on:{click:t.showMore}},[t._v(t._s(t.hiddenText))]):t._e()])},staticRenderFns:[]},U=n("VU/8")(F,R,!1,null,null,null).exports;U.install=function(t){t.component(U.name,U)};var O=U,j={name:"WLimit",props:{placeholder:{type:String,default:"请输入内容"},rows:{type:Number,default:4},maxLen:{type:Number,default:20},isCut:{type:Boolean,default:!1},value:{type:[String,Number],default:""}},data:function(){return{isOver:!1,num:this.maxLen,currentValue:""}},methods:{handleInput:function(t){var e=t.target.value;this.$emit("input",e),this.setCurrentValue(e),this.$emit("change",e)},setCurrentValue:function(t){if(t!==this.currentValue)if(this.currentValue=t,this.currentValue.length<=this.maxLen)this.isOver=!1,this.num=this.maxLen-this.currentValue.length;else{if(this.isCut)return this.currentValue=this.currentValue.substring(0,this.maxLen),void(this.num=this.currentValue.length-this.maxLen);this.isOver=!0,this.num=this.currentValue.length-this.maxLen,this.$emit("overText",this.currentValue)}}},watch:{}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("textarea",t._b({staticClass:"w__limit--textarea",class:{"w__limit-over":t.isOver},domProps:{value:t.currentValue},on:{input:t.handleInput}},"textarea",t.$props,!1)),t._v(" "),n("span",{staticClass:"w__limit--text"},[t._v("\n    "+t._s(t.isOver?"已超出":"还可以输入")),n("span",{staticClass:"w__limit--num",class:{"w__limit--num-over":t.isOver}},[t._v(t._s(t.num))]),t._v("个字\n  ")])])},staticRenderFns:[]},P=n("VU/8")(j,A,!1,null,null,null).exports;P.install=function(t){t.component(P.name,P)};var q=P,z="data-vue-meta-info";function G(){var t=document.getElementsByTagName("head")[0];return{setMetaInfo:function(e){var n=function(n){if("title"===n)return document.title=e.title,"continue";e.hasOwnProperty(n)&&e[n].forEach(function(e){var i=document.createElement(n);!function(t,e){for(var n in t.setAttribute(z,!0),e)e.hasOwnProperty(n)&&t.setAttribute(n,e[n])}(i,e),t.appendChild(i)})};for(var i in e)n(i)},removeMetaInfo:function(){!function(t){for(var e=t.querySelectorAll("["+z+"]"),n=e.length-1;n>-1;n--)"true"===e[n].getAttribute(z)&&t.removeChild(e[n])}(t)}}}function J(t){G().removeMetaInfo(),G().setMetaInfo(t)}var Z=function(){};Z.install=function(t){t.mixin({beforeCreate:function(){var t=this;if(void 0!==this.$options.metaInfo){var e=L()(this.$options.metaInfo);this._hasMetaInfo=!0,void 0===this.$options.computed&&(this.$options.computed={}),this.$options.computed.$metaInfo="function"===e?this.$options.metaInfo:function(){return t.$options.metaInfo}}},beforeMount:function(){this._hasMetaInfo&&J(this.$metaInfo)},mounted:function(){var t=this;this._hasMetaInfo&&this.$watch("$metaInfo",function(){J(t.$metaInfo)})},activated:function(){this._hasMetaInfo&&J(this.$metaInfo)},deactivated:function(){this._hasMetaInfo&&J(this.$metaInfo)}})};var H=Z;var K={name:"WAlert",props:{title:{type:String,requre:!0,default:function(){var t,e=this.$slots.default;return t=e,Array.isArray(t)&&1===t.length&&void 0===t[0].tag&&t[0].text?e[0].text:void 0}},type:{type:String,default:"info"},showIcon:{type:Boolean,default:!1},center:{type:Boolean,default:!1},closeText:{type:String},closable:{type:Boolean,default:!0},description:{type:String}},data:function(){return{visible:!0}},computed:{typeClass:function(){return"w-alert--"+this.type},iconClass:function(){return"w-icon-fav"},isBoldTitle:function(){return this.description?"is-bold":""},isBigIcon:function(){return this.description?"is-big":""}},methods:{close:function(t){this.visible=!1,this.$emit("close")}}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"w-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"w-alert",class:[t.typeClass,{"is-center":t.center}]},[t.showIcon?n("i",{staticClass:"w-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),t._v(" "),n("div",{staticClass:"w-alert__content"},[n("span",{staticClass:"w-alert__title",class:t.isBoldTitle},[t._v(t._s(this.title))]),t._v(" "),t.description?n("p",{staticClass:"w-alert__description"},[t._v(t._s(t.description))]):t._e(),t._v(" "),t.closable?n("i",{staticClass:"w-alert__closebtn",class:[t.closeText?"is-customed":"w-icon-close2"],on:{click:t.close}},[t._v(t._s(t.closeText))]):t._e()])])])},staticRenderFns:[]},D=n("VU/8")(K,Y,!1,null,null,null).exports;D.install=function(t){t.component(D.name,D)};var Q=D,X={name:"WLoadingBar",props:{type:{type:Number,default:1}},data:function(){return{speed:5,easing:"linear",percentNum:0,totalProgress:0,showSpinner:!0,isError:!1}}},tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w__loading-bar"},[e("div",{staticClass:"w__loading-bar--bar",class:this.isError?"w__loading-bar--error":"",style:{transform:"translate3d(-"+(100-this.totalProgress)+"%, 0, 0)"},attrs:{role:"bar"}},[e("div",{staticClass:"w__loading-bar--peg"})]),this._v(" "),this.showSpinner?e("div",{staticClass:"w__loading-bar--spinner",attrs:{role:"spinner"}},[e("div",{staticClass:"spinner-icon",class:this.isError?"spinner-icon--error":"",style:{animation:"w-spinner 400ms "+this.easing+" infinite"}})]):this._e()])},staticRenderFns:[]},et=n("VU/8")(X,tt,!1,null,null,null).exports,nt=i.a.extend(et),it=null,st=null;nt.prototype.config=function(t){var e=this;k()(t).forEach(function(n){"isError"!==n&&"totalProgress"!==n&&(e[n]=t[n])})},nt.prototype.init=function(){return clearTimeout(it),this.totalProgress=0,this.isError=!1,this.vm=this.$mount(),document.body.appendChild(this.vm.$el),this},nt.prototype.start=function(){var t=this;this.init(),it=setInterval(function(){t.totalProgress<90&&(t.totalProgress+=(t.percentNum||Math.random())*t.speed)},100)},nt.prototype.end=function(){var t=this;it||this.init(),this.totalProgress=100,clearTimeout(st),st=setTimeout(function(){clearTimeout(it),it=null,document.body.removeChild(t.vm.$el)},200)},nt.prototype.error=function(){this.end(),this.totalProgress=100,this.isError=!0};var at=new nt,ot={name:"WSkeleton",props:{proportion:{type:Number,default:1},bgColor:{type:String,default:"#b4bccc"},width:{type:String,default:"100%"},height:{type:[String,Boolean],default:!1}},data:function(){return{paddingBottom:this.height||100*this.proportion+"%"}}},rt={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"w__skeleton",style:{background:this.bgColor,paddingBottom:this.paddingBottom,width:this.width}})},staticRenderFns:[]},lt=n("VU/8")(ot,rt,!1,null,null,null).exports;lt.install=function(t){t.component(lt.name,lt)};var ct=lt,ut=[C,E,N,W,O,q,Q,ct],dt=function t(e){t.installed||(ut.map(function(t){return e.component(t.name,t)}),H.install(e),e.prototype.$loading=at)};"undefined"!=typeof window&&window.Vue&&dt(window.Vue);var ht={install:dt,WButton:C,WRow:E,WCol:N,WTag:W,WShowMore:O,WLimitTextArea:q,MetaInfo:H,WAlert:Q,WLoadingBar:at,Skeleton:ct},pt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"docs-demo-wrapper"},[e("div",{staticClass:"demo-container",style:{height:this.isExpand?"auto":"0"}},[e("div",{attrs:{span:"14"}},[e("div",{staticClass:"docs-demo docs-demo--expand"},[e("div",{staticClass:"highlight-wrapper"},[this._t("highlight")],2)])])]),this._v(" "),e("span",{staticClass:"docs-trans docs-demo__triangle",on:{click:this.toggle}},[this._v(this._s(this.isExpand?"隐藏代码":"显示代码"))])])},staticRenderFns:[]};var mt=n("VU/8")({data:function(){return{isExpand:!1}},methods:{toggle:function(){this.isExpand=!this.isExpand}}},pt,!1,function(t){n("dG7Z")},null,null).exports;n("I5gi");i.a.component("demo-block",mt),i.a.use(ht),i.a.config.productionTip=!1,new i.a({el:"#app",router:w,components:{App:f},template:"<App/>"})},qygr:function(t,e,n){t.exports=n.p+"static/img/avater.b44d40d.png"}},["mUtA"]);
//# sourceMappingURL=app.c3e990dbf6a18fdb7874.js.map