(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{485:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(491),o=r(2),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},491:function(t,e,r){"use strict";r(12),r(10),r(13),r(15),r(7),r(18);var n=r(3),o=(r(23),r(164),r(494),r(200)),c=r(201),l=r(95),d=r(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},494:function(t,e,r){var content=r(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e23b7040",content,!0,{sourceMap:!1})},501:function(t,e,r){var n=r(16)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},643:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},646:function(t,e,r){"use strict";r.d(e,"a",(function(){return filter}));var n=r(487),o=r.n(n),filter={filters:{formatDate:function(t){if(!t)return"-";var e=t;return o()(e).format("Do MMM YYYY")},fullDate:function(t){if(!t)return"-";var e=t;return o()(e).format("dddd Do, MMMM YYYY")},formatCreation:function(t){if(!t)return"-";var e=t.toDate();return o()(e).fromNow()}}}},653:function(t,e,r){var map={"./af":503,"./af.js":503,"./ar":504,"./ar-dz":505,"./ar-dz.js":505,"./ar-kw":506,"./ar-kw.js":506,"./ar-ly":507,"./ar-ly.js":507,"./ar-ma":508,"./ar-ma.js":508,"./ar-sa":509,"./ar-sa.js":509,"./ar-tn":510,"./ar-tn.js":510,"./ar.js":504,"./az":511,"./az.js":511,"./be":512,"./be.js":512,"./bg":513,"./bg.js":513,"./bm":514,"./bm.js":514,"./bn":515,"./bn-bd":516,"./bn-bd.js":516,"./bn.js":515,"./bo":517,"./bo.js":517,"./br":518,"./br.js":518,"./bs":519,"./bs.js":519,"./ca":520,"./ca.js":520,"./cs":521,"./cs.js":521,"./cv":522,"./cv.js":522,"./cy":523,"./cy.js":523,"./da":524,"./da.js":524,"./de":525,"./de-at":526,"./de-at.js":526,"./de-ch":527,"./de-ch.js":527,"./de.js":525,"./dv":528,"./dv.js":528,"./el":529,"./el.js":529,"./en-au":530,"./en-au.js":530,"./en-ca":531,"./en-ca.js":531,"./en-gb":532,"./en-gb.js":532,"./en-ie":533,"./en-ie.js":533,"./en-il":534,"./en-il.js":534,"./en-in":535,"./en-in.js":535,"./en-nz":536,"./en-nz.js":536,"./en-sg":537,"./en-sg.js":537,"./eo":538,"./eo.js":538,"./es":539,"./es-do":540,"./es-do.js":540,"./es-mx":541,"./es-mx.js":541,"./es-us":542,"./es-us.js":542,"./es.js":539,"./et":543,"./et.js":543,"./eu":544,"./eu.js":544,"./fa":545,"./fa.js":545,"./fi":546,"./fi.js":546,"./fil":547,"./fil.js":547,"./fo":548,"./fo.js":548,"./fr":549,"./fr-ca":550,"./fr-ca.js":550,"./fr-ch":551,"./fr-ch.js":551,"./fr.js":549,"./fy":552,"./fy.js":552,"./ga":553,"./ga.js":553,"./gd":554,"./gd.js":554,"./gl":555,"./gl.js":555,"./gom-deva":556,"./gom-deva.js":556,"./gom-latn":557,"./gom-latn.js":557,"./gu":558,"./gu.js":558,"./he":559,"./he.js":559,"./hi":560,"./hi.js":560,"./hr":561,"./hr.js":561,"./hu":562,"./hu.js":562,"./hy-am":563,"./hy-am.js":563,"./id":564,"./id.js":564,"./is":565,"./is.js":565,"./it":566,"./it-ch":567,"./it-ch.js":567,"./it.js":566,"./ja":568,"./ja.js":568,"./jv":569,"./jv.js":569,"./ka":570,"./ka.js":570,"./kk":571,"./kk.js":571,"./km":572,"./km.js":572,"./kn":573,"./kn.js":573,"./ko":574,"./ko.js":574,"./ku":575,"./ku.js":575,"./ky":576,"./ky.js":576,"./lb":577,"./lb.js":577,"./lo":578,"./lo.js":578,"./lt":579,"./lt.js":579,"./lv":580,"./lv.js":580,"./me":581,"./me.js":581,"./mi":582,"./mi.js":582,"./mk":583,"./mk.js":583,"./ml":584,"./ml.js":584,"./mn":585,"./mn.js":585,"./mr":586,"./mr.js":586,"./ms":587,"./ms-my":588,"./ms-my.js":588,"./ms.js":587,"./mt":589,"./mt.js":589,"./my":590,"./my.js":590,"./nb":591,"./nb.js":591,"./ne":592,"./ne.js":592,"./nl":593,"./nl-be":594,"./nl-be.js":594,"./nl.js":593,"./nn":595,"./nn.js":595,"./oc-lnc":596,"./oc-lnc.js":596,"./pa-in":597,"./pa-in.js":597,"./pl":598,"./pl.js":598,"./pt":599,"./pt-br":600,"./pt-br.js":600,"./pt.js":599,"./ro":601,"./ro.js":601,"./ru":602,"./ru.js":602,"./sd":603,"./sd.js":603,"./se":604,"./se.js":604,"./si":605,"./si.js":605,"./sk":606,"./sk.js":606,"./sl":607,"./sl.js":607,"./sq":608,"./sq.js":608,"./sr":609,"./sr-cyrl":610,"./sr-cyrl.js":610,"./sr.js":609,"./ss":611,"./ss.js":611,"./sv":612,"./sv.js":612,"./sw":613,"./sw.js":613,"./ta":614,"./ta.js":614,"./te":615,"./te.js":615,"./tet":616,"./tet.js":616,"./tg":617,"./tg.js":617,"./th":618,"./th.js":618,"./tk":619,"./tk.js":619,"./tl-ph":620,"./tl-ph.js":620,"./tlh":621,"./tlh.js":621,"./tr":622,"./tr.js":622,"./tzl":623,"./tzl.js":623,"./tzm":624,"./tzm-latn":625,"./tzm-latn.js":625,"./tzm.js":624,"./ug-cn":626,"./ug-cn.js":626,"./uk":627,"./uk.js":627,"./ur":628,"./ur.js":628,"./uz":629,"./uz-latn":630,"./uz-latn.js":630,"./uz.js":629,"./vi":631,"./vi.js":631,"./x-pseudo":632,"./x-pseudo.js":632,"./yo":633,"./yo.js":633,"./zh-cn":634,"./zh-cn.js":634,"./zh-hk":635,"./zh-hk.js":635,"./zh-mo":636,"./zh-mo.js":636,"./zh-tw":637,"./zh-tw.js":637};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=653},857:function(t,e,r){"use strict";r.r(e);r(7);var n={name:"Post",mixins:[r(646).a],data:function(){return{slug:"",post:{},imgIndex:0,visible:!1,images:[]}},head:function(){return{title:this.post.title,meta:[{property:"og:title",content:this.post.title},{property:"og:description",content:this.post.excerpt},{property:"og:url",content:"https://stephenjelley.com/"+this.slug},{property:"og:image",content:this.post.url},{property:"og:site_name",content:"Stephen Jelley | Official Website"},{property:"og:type",content:"post"},{name:"robots",content:"index,follow"},{hid:"description",name:"description",content:this.post.excerpt}]}},created:function(){var t=this,e=this.$route.params.slug;this.$store.dispatch("posts/setPostSlug",e).then((function(data){t.post=data,data.gallery.forEach((function(img){t.images.push(img.url)}))}))},destroyed:function(){this.$store.commit("posts/clearPost")},methods:{showImg:function(t){this.imgIndex=t,this.visible=!0},handleHide:function(){this.visible=!1}}},o=r(35),c=r(39),l=r.n(c),d=r(491),v=r(485),h=r(478),j=r(484),f=r(290),m=r(480),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"p-0 text-center",attrs:{col:"12"}},[r("v-card",[r("v-img",{attrs:{src:t.post.url,alt:t.post.alt}},[r("v-row",[r("v-col",{staticClass:"pa-10",attrs:{cols:"6",lg:"4",xl:"3"}},[r("v-card-text",[r("h1",{staticClass:"text-h3 secondary primary--text"},[t._v("\n                    "+t._s(t.post.title)+"\n                  ")])])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"pl-5"},[r("v-col",{staticClass:"pt-2 white--text",attrs:{col:"12"}},[r("h2",{staticClass:"date"},[t._v(t._s(t._f("fullDate")(t.post.date)))]),t._v(" "),r("div",{staticClass:"py-5",domProps:{innerHTML:t._s(t.post.content)}})])],1)],1),t._v(" "),r("v-container",[r("v-row",{staticClass:"m-0"},[t._l(t.post.gallery,(function(e,n){return r("v-col",{key:n,attrs:{cols:"6",md:"4"},on:{click:function(){return t.showImg(n)}}},[r("v-img",{attrs:{src:e.url,alt:e.alt}})],1)})),t._v(" "),r("client-only",[r("vue-easy-lightbox",{attrs:{visible:t.visible,imgs:t.images,index:t.imgIndex},on:{hide:t.handleHide}})],1)],2)],1),t._v(" "),r("v-container",[r("v-row",t._l(t.post.quotes,(function(content,e){return r("v-col",{key:e,staticClass:"secondary--text",attrs:{cols:"12"}},[r("h2",[t._v(t._s(content.name))]),t._v(" "),r("div",{staticClass:"py-5",domProps:{innerHTML:t._s(content.content)}})])})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:v.c,VCol:h.a,VContainer:j.a,VImg:f.a,VRow:m.a})}}]);