(window.webpackJsonp=window.webpackJsonp||[]).push([[16,19,38],{656:function(t,e,n){"use strict";n.r(e);n(23);var r={props:{width:{type:Number,default:100},height:{type:Number,default:100}}},l=n(35),o=n(39),c=n.n(o),d=n(290),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",{attrs:{src:"/jelley-star.png",alt:"Stephen Jelley Star Logo","max-height":t.height,"max-width":t.width}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a})},682:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(43);var r={methods:{truncateString:function(t,e){return t.length<=e?t:t.slice(0,e)+"..."}}}},688:function(t,e,n){var content=n(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("26815f93",content,!0,{sourceMap:!1})},694:function(t,e,n){"use strict";n.r(e);n(23);var r={props:{width:{type:Number,default:100},height:{type:Number,default:100}}},l=n(35),o=n(39),c=n.n(o),d=n(290),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-img",{attrs:{src:"/star-yellow copy.png",alt:"Stephen Jelley Star Logo","max-height":t.height,"max-width":t.width}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VImg:d.a})},712:function(t,e,n){"use strict";n(688)},713:function(t,e,n){var r=n(16)(!1);r.push([t.i,".hero-nav{bottom:0;left:0;z-index:1;width:100%;height:100%}",""]),t.exports=r},738:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(682).a],data:function(){return{index:0,iconSize:25,slide:0}},computed:{posts:function(){return this.$store.getters["posts/getPosts"]}},methods:{moveTo:function(t){this.slide=t-1}}},l=(n(712),n(35)),o=n(39),c=n.n(o),d=n(199),m=n(491),h=n(485),v=n(863),f=n(864),w=n(478),x=n(290),y=n(480),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{staticClass:"position-relative",attrs:{cycle:"","hide-delimiters":"","show-arrows-on-hover":"",height:"auto"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[t._l(t.posts,(function(e,i){return n("v-carousel-item",{key:i},[n("v-card",{staticClass:"transparent"},[n("v-img",{attrs:{src:e.url,alt:e.alt}},[n("v-row",{staticClass:"d-none d-md-block"},[n("v-col",{staticClass:"pa-10",attrs:{md:"8",lg:"4",xl:"3"}},[n("v-card-text",[n("h1",{staticClass:"text-h3 secondary primary--text font-weight-medium"},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("v-card-subtitle",[n("v-btn",{staticClass:"secondary primary--text font-weight-medium",attrs:{nuxt:!0,to:{name:"post-slug",params:{slug:e.slug}},small:""}},[t._v("\n                Click for more\n              ")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"d-md-none"},[n("h1",{staticClass:"text-h6 secondary primary--text font-weight-medium"},[t._v("\n          "+t._s(e.title)+"\n        ")])]),t._v(" "),n("v-card-subtitle",{staticClass:"d-md-none"},[n("v-btn",{staticClass:"secondary primary--text font-weight-medium",attrs:{nuxt:!0,to:{name:"post-slug",params:{slug:e.slug}},small:""}},[t._v("\n          Click for more\n        ")])],1)],1)],1)})),t._v(" "),n("v-row",{staticClass:"position-absolute hero-nav align-content-md-end mb-md-10"},[n("v-col",{staticClass:"ml-16"},[n("v-btn",{staticClass:"secondary primary--text font-weight-medium",attrs:{nuxt:!0,to:"/news"}},[t._v("\n        Click for news\n      ")])],1),t._v(" "),n("v-col",{staticClass:"text-right mr-16 mx-16"},[n("v-row",{attrs:{align:"end",justify:"end","no-gutters":""}},t._l(t.posts.length,(function(e){return n("div",{key:e,staticClass:"pl-md-2",on:{click:function(n){return t.moveTo(e)}}},[t.slide===e-1?n("Icon",{attrs:{id:e,width:t.iconSize,length:t.iconSize}}):n("YIcon",{attrs:{id:e,width:t.iconSize,length:t.iconSize}})],1)})),0)],1)],1)],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{Icon:n(656).default,YIcon:n(694).default}),c()(component,{VBtn:d.a,VCard:m.a,VCardSubtitle:h.b,VCardText:h.c,VCarousel:v.a,VCarouselItem:f.a,VCol:w.a,VImg:x.a,VRow:y.a})}}]);