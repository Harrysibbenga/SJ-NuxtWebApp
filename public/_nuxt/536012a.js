(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{846:function(t,n,r){"use strict";r.r(n);var e=r(33),o=(r(106),r(8)),c=r(268),v=r.n(c),l={name:"Admin",layout:"admin",methods:{logout:function(){return Object(e.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.signOut();case 2:return t.next=4,v.a.remove("access_token");case 4:location.href="/";case 5:case"end":return t.stop()}}),t)})))()}}},m=r(35),_=r(39),d=r.n(_),x=r(484),f=r(192),h=r(481),w=r(843),C=r(845),V=r(79),k=r(486),component=Object(m.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",{attrs:{id:"admin"}},[r("v-container",{attrs:{id:"admin-nav"}},[r("v-toolbar",{staticClass:"mt-4 mx-4",attrs:{flat:""}},[r("v-toolbar-title",[t._v("Website Dashboard")]),t._v(" "),r("v-spacer"),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[r("v-icon",{staticClass:"mr-1"},[t._v("mdi-home")]),t._v("Home ")],1),t._v(" "),r("a",{on:{click:function(n){return t.logout()}}},[r("v-icon",{staticClass:"mr-1",attrs:{icon:"ban"}}),t._v("\n        Logout\n      ")],1)],1),t._v(" "),r("v-tabs",{staticClass:"mt-4 mx-4",attrs:{"center-active":"",color:"primary"}},[r("v-tab",{attrs:{nuxt:!0,to:"/admin"}},[t._v("Home")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/car"}},[t._v(" Car ")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/about"}},[t._v(" About ")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/shop"}},[t._v(" Shop ")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/news"}},[t._v(" News ")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/partners"}},[t._v(" Partners ")]),t._v(" "),r("v-tab",{attrs:{nuxt:!0,to:"/admin/calendar"}},[t._v(" Calendar ")])],1)],1),t._v(" "),r("nuxt-child",{staticClass:"pt-3"})],1)}),[],!1,null,null,null);n.default=component.exports;d()(component,{VContainer:x.a,VIcon:f.a,VSpacer:h.a,VTab:w.a,VTabs:C.a,VToolbar:V.a,VToolbarTitle:k.b})}}]);