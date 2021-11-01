(window.webpackJsonp=window.webpackJsonp||[]).push([[9,25,28,31,35,36],{487:function(t,e,n){"use strict";var o=n(488);e.a=o.a},508:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(26),n(46);var o={props:{size:{type:Number,required:!1,default:8}},data:function(){return{pageNumber:0}},computed:{pageCount:function(){if(this.items){var t=this.items.length,s=this.size;return Math.ceil(t/s)}return 0},paginatedData:function(){var t=this.pageNumber*this.size,e=t+this.size;return this.items?this.items.slice(t,e):[]}},methods:{nextPage:function(){this.pageNumber++},prevPage:function(){this.pageNumber--}}}},509:function(t,e,n){"use strict";n.r(e);var o={props:{msg:{type:Object,required:!0,default:function(){return{}}}}},l=n(36),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return""!=t.msg.message?n("div",{staticClass:"pl-5 mt-2 text-white text-center",class:"bg-"+t.msg.type},[n("p",[t._v(t._s(t.msg.message))])]):t._e()}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){"use strict";n.r(e);var o;o=n(670);var l={components:{ckeditor:n(671).component},props:{content:{type:String,required:!0,default:"Enter text here"}},data:function(){return{editor:o,editorConfig:{fontFamily:{options:["default","Ubuntu, Arial, sans-serif","Ubuntu Mono, Courier New, Courier, monospace"],supportAllValues:!0},fontSize:{options:[9,11,13,"default",17,19,21]},fontColor:{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"}]},link:{addTargetToExternalLinks:!0,decorators:[{mode:"manual",label:"Downloadable",attributes:{download:"download"}}]},toolbar:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","imageUpload","insertTable","|","alignment","outdent","indent","|","link","undo","redo"],language:"en",image:{toolbar:["imageTextAlternative","|","imageStyle:full","imageStyle:side","|","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter"],styles:["full","alignLeft","alignRight","side","alignCenter"]},alignment:{options:["left","right"]},tableProperties:{borderColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}],backgroundColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}}}}},r=n(36),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ckeditor",{attrs:{editor:t.editor,config:t.editorConfig,value:t.content},on:{input:function(content){return t.$emit("update:content",content)}}})],1)}),[],!1,null,null,null);e.default=component.exports},514:function(t,e,n){"use strict";n.r(e);var o={props:{image:{type:Object,default:function(){return{url:"",alt:"",id:""}}},type:{type:String,required:!0}},data:function(){return{defaultImg:{url:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7",alt:"Placeholder Image"}}},computed:{postImage:{get:function(){return this.image},set:function(t){this.$emit("update:image",t)}},images:function(){return this.$store.getters["images/"+this.type+"Images"]}}},l=n(36),r=n(40),c=n.n(r),h=n(497),d=n(499),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[""!=t.postImage.url?n("img",{staticClass:"img-fluid",attrs:{src:t.postImage.url,alt:t.postImage.alt}}):n("img",{staticClass:"img-fluid",attrs:{src:t.defaultImg.url,alt:t.defaultImg.alt}})]),t._v(" "),n("ModalUploadModal",{attrs:{image:t.postImage,type:t.type},on:{"update:image":function(e){t.postImage=e}}}),t._v(" "),n("ModalSelectImageModal",{attrs:{item:t.postImage,images:t.images},on:{"update:item":function(e){t.postImage=e}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ModalUploadModal:n(657).default,ModalSelectImageModal:n(658).default}),c()(component,{VCol:h.a,VRow:d.a})},515:function(t,e,n){"use strict";n.r(e);var o={props:{content:{type:Object,default:function(){return{}}}},computed:{postContent:{get:function(){return this.content},set:function(t){this.$emit("update:content",t)}}}},l=n(36),r=n(40),c=n.n(r),h=n(497),d=n(711),v=n(499),f=n(488),m=n(703),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",["circuit"!=t.content.type&&"calendar"!=t.content.type?n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Title"},model:{value:t.postContent.title,callback:function(e){t.$set(t.postContent,"title","string"==typeof e?e.trim():e)},expression:"postContent.title"}})],1):t._e(),t._v(" "),"partner"==t.content.type||"shop"==t.content.type?n("v-col",{staticClass:"md-form",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Partner url"},model:{value:t.postContent.link,callback:function(e){t.$set(t.postContent,"link","string"==typeof e?e.trim():e)},expression:"postContent.link"}})],1):t._e(),t._v(" "),"car"==t.content.type?n("v-col",{staticClass:"md-form",attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Subtitle"},model:{value:t.postContent.subtitle,callback:function(e){t.$set(t.postContent,"subtitle","string"==typeof e?e.trim():e)},expression:"postContent.subtitle"}})],1):t._e(),t._v(" "),"post"==t.content.type?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{counter:"",label:"Excerpt",value:t.postContent.excerpt},model:{value:t.postContent.excerpt,callback:function(e){t.$set(t.postContent,"excerpt","string"==typeof e?e.trim():e)},expression:"postContent.excerpt"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-date-picker",{attrs:{type:"date"},model:{value:t.postContent.date,callback:function(e){t.$set(t.postContent,"date","string"==typeof e?e.trim():e)},expression:"postContent.date"}})],1)],1):t._e(),t._v(" "),"circuit"==t.content.type?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Track"},model:{value:t.postContent.track,callback:function(e){t.$set(t.postContent,"track","string"==typeof e?e.trim():e)},expression:"postContent.track"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Length"},model:{value:t.postContent.length,callback:function(e){t.$set(t.postContent,"length","string"==typeof e?e.trim():e)},expression:"postContent.length"}})],1)],1):t._e(),t._v(" "),"calendar"==t.content.type?n("v-row",[n("v-col",{staticClass:"px-5",attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"Rounds"},model:{value:t.postContent.rounds,callback:function(e){t.$set(t.postContent,"rounds","string"==typeof e?e.trim():e)},expression:"postContent.rounds"}})],1),t._v(" "),n("v-col",{staticClass:"px-5",attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"Laps"},model:{value:t.postContent.laps,callback:function(e){t.$set(t.postContent,"laps","string"==typeof e?e.trim():e)},expression:"postContent.laps"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",lg:"6"}},[n("h3",[t._v("Start:")]),t._v(" "),n("v-date-picker",{attrs:{value:t.postContent.dateFrom,type:"date"},model:{value:t.postContent.dateFrom,callback:function(e){t.$set(t.postContent,"dateFrom","string"==typeof e?e.trim():e)},expression:"postContent.dateFrom"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",lg:"6"}},[n("h3",[t._v("Finish:")]),t._v(" "),n("v-date-picker",{attrs:{value:t.postContent.dateTo,type:"date"},model:{value:t.postContent.dateTo,callback:function(e){t.$set(t.postContent,"dateTo","string"==typeof e?e.trim():e)},expression:"postContent.dateTo"}})],1)],1)],1)],1):t._e(),t._v(" "),"circuit"!=t.content.type&&"calendar"!=t.content.type?n("v-col",{attrs:{cols:"12"}},[n("h3",{staticClass:"pb-1"},[t._v("Main content")]),t._v(" "),n("UiEditor",{attrs:{content:t.postContent.content},on:{"update:content":function(e){return t.$set(t.postContent,"content",e)}}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{UiEditor:n(512).default}),c()(component,{VCol:h.a,VDatePicker:d.a,VRow:v.a,VTextField:f.a,VTextarea:m.a})},516:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("83ff91dc",content,!0,{sourceMap:!1})},517:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@import url(https://use.typekit.net/qjp6avj.css);"]),o.push([t.i,".theme--light.v-file-input .v-file-input__text{color:rgba(0,0,0,.87)}.theme--light.v-file-input .v-file-input__text--placeholder{color:rgba(0,0,0,.6)}.theme--light.v-file-input.v-input--is-disabled .v-file-input__text,.theme--light.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-file-input .v-file-input__text{color:#fff}.theme--dark.v-file-input .v-file-input__text--placeholder{color:hsla(0,0%,100%,.7)}.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text,.theme--dark.v-file-input.v-input--is-disabled .v-file-input__text .v-file-input__text--placeholder{color:hsla(0,0%,100%,.5)}.v-file-input input[type=file]{left:0;opacity:0;pointer-events:none;position:absolute;max-width:0;width:0}.v-file-input .v-file-input__text{align-items:center;align-self:stretch;display:flex;flex-wrap:wrap;width:100%}.v-file-input .v-file-input__text.v-file-input__text--chips{flex-wrap:wrap}.v-file-input .v-file-input__text .v-chip{margin:4px}.v-file-input .v-text-field__slot{min-height:32px}.v-file-input.v-input--dense .v-text-field__slot{min-height:26px}.v-file-input.v-text-field--filled:not(.v-text-field--single-line) .v-file-input__text{padding-top:22px}.v-file-input.v-text-field--outlined .v-text-field__slot{padding:6px 0}.v-file-input.v-text-field--outlined.v-input--dense .v-text-field__slot{padding:3px 0}",""]),t.exports=o},518:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("197fcea4",content,!0,{sourceMap:!1})},519:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@import url(https://use.typekit.net/qjp6avj.css);"]),o.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--x-small .v-icon{font-size:10px;height:10px;width:10px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--small .v-icon{font-size:12px;height:12px;width:12px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--default .v-icon{font-size:14px;height:14px;width:14px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--large .v-icon{font-size:16px;height:16px;width:16px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}.v-chip.v-size--x-large .v-icon{font-size:18px;height:18px;width:18px}',""]),t.exports=o},657:function(t,e,n){"use strict";n.r(e);n(41),n(7),n(73);var o=n(8),l={props:{image:{type:Object,default:function(){return{}}},type:{type:String,required:!0}},data:function(){return{file:"",uploadImage:!1,exists:!1,exisitsImg:{},uploadedImage:{alt:"",url:"",id:""},payload:{file:"",alt:"",type:""}}},computed:{uploadMsg:function(){return this.$store.getters["images/message"]},img:{get:function(){return this.image},set:function(t){this.$emit("update:image",t)}}},methods:{upload:function(){this.uploadImage=!0},reset:function(){this.uploadedImage={alt:"",url:"",id:""},this.file="",this.payload={file:"",alt:"",type:""}},closeUpload:function(){this.uploadImage=!1,this.reset()},checkFile:function(){var t,e=this;"image"===this.type?t=o.h:"partner"===this.type?t=o.j:"circuit"===this.type&&(t=o.f),t.where("name","==",this.file.name).get().then((function(t){t.forEach((function(t){t.exists&&(e.uploadImage=!1,e.img.url=t.data().url,e.img.alt=t.data().alt,e.img.id=t.id,e.exists=!0)}))}))},saveFile:function(){var t=this;this.payload={file:this.file,alt:this.uploadedImage.alt,type:this.type},this.$store.dispatch("global/setLoading",!0),this.$store.dispatch("images/uploadImage",this.payload).then((function(e){t.uploadedImage=e,t.$store.dispatch("global/setLoading",!1),t.$emit("update:image",t.uploadedImage),setTimeout((function(){t.reset(),t.uploadImage=!1,t.$store.commit("images/SET_MSG",{})}),4e3)}))}}},r=n(36),c=n(40),h=n.n(c),d=n(210),v=n(510),f=n(504),m=n(497),x=n(868),y=n(668),_=n(202),C=n(499),k=n(500),w=n(488),O=n(83),$=n(505),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",on:{click:t.upload}},[t._v("Upload")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",transition:"dialog-bottom-transition"},model:{value:t.uploadImage,callback:function(e){t.uploadImage=e},expression:"uploadImage"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Upload image")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.closeUpload}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Description",inline:""},model:{value:t.uploadedImage.alt,callback:function(e){t.$set(t.uploadedImage,"alt","string"==typeof e?e.trim():e)},expression:"uploadedImage.alt"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{label:"File upload","prepend-icon":"mdi-camera",accept:"image/jpeg image/png"},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:""==t.uploadedImage.alt},nativeOn:{click:function(e){return t.saveFile.apply(null,arguments)}}},[t._v("Save")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},nativeOn:{click:function(e){return t.closeUpload.apply(null,arguments)}}},[t._v("Close")]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("UiMessage",{attrs:{msg:t.uploadMsg}})],1)],1)],1)],1),t._v(" "),t.exists?n("UiExistsModal",{attrs:{exists:t.exists,image:t.img},on:{"update:exists":function(e){t.exists=e},"update:image":function(e){t.img=e}}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{UiMessage:n(509).default}),h()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VDialog:x.a,VFileInput:y.a,VIcon:_.a,VRow:C.a,VSpacer:k.a,VTextField:w.a,VToolbar:O.a,VToolbarTitle:$.b})},658:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(508).a],props:{item:{type:Object,default:function(){return{}}},images:{type:Array,default:function(){return[]}}},data:function(){return{selected:"",selectModel:!1,itemData:{},radios:null}},computed:{items:{get:function(){return this.images},set:function(t){return t}}},methods:{select:function(){this.selectModel=!0},saveSelection:function(){this.$emit("update:item",this.selected.itemData),this.reset()},reset:function(){this.selected="",this.selectModel=!1,this.itemData={},this.radios=null},close:function(){this.reset()}}},l=n(36),r=n(40),c=n.n(r),h=n(210),d=n(510),v=n(504),f=n(497),m=n(503),x=n(868),y=n(202),_=n(499),C=n(500),k=n(83),w=n(505),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"mx-1",nativeOn:{click:function(e){return t.select.apply(null,arguments)}}},[t._v("Select")]),t._v(" "),n("v-dialog",{attrs:{persistent:"",scrollable:""},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}},[n("v-card",[n("v-card-title",{staticClass:"pa-0"},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Select an image")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.selectModel=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("\n              Save\n            ")])],1)],1)],1),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[t._l(t.paginatedData,(function(e,o){return n("v-col",{key:o,staticClass:"p-0",attrs:{cols:"3"}},[n("div",{staticClass:"custom-control custom-radio custom-control text-center"},[n("img",{staticClass:"img-fluid",attrs:{src:e.url,alt:e.alt}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{id:e.id,name:"images",type:"radio"},domProps:{value:{itemData:e},checked:t._q(t.selected,{itemData:e})},on:{change:function(n){t.selected={itemData:e}}}}),t._v(" "),n("label",{staticClass:"custom-control-label",attrs:{for:e.id}},[t._v("\n                  "+t._s(e.alt)+"\n                ")])])])})),t._v(" "),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"primary",class:{"d-none":0==t.pageNumber},nativeOn:{click:function(e){return t.prevPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-left")])],1),t._v("\n              "+t._s(t.pageNumber+1)+" of "+t._s(t.pageCount)+"\n              "),n("v-btn",{staticClass:"primary",class:{"d-none":t.pageNumber>=t.pageCount-1},nativeOn:{click:function(e){return t.nextPage.apply(null,arguments)}}},[n("v-icon",[t._v(" mdi-chevron-double-right")])],1)],1)],2)],1)],1),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"mx-1",attrs:{color:"primary",disabled:""==t.selected},nativeOn:{click:function(e){return t.saveSelection.apply(null,arguments)}}},[t._v("Save")]),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"error"},on:{click:t.close}},[t._v("Close")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:f.a,VContainer:m.a,VDialog:x.a,VIcon:y.a,VRow:_.a,VSpacer:C.a,VToolbar:k.a,VToolbarItems:w.a,VToolbarTitle:w.b})},668:function(t,e,n){"use strict";n(11),n(9),n(12),n(14),n(17);var o=n(209),l=n(3),r=n(28),c=(n(26),n(60),n(71),n(41),n(29),n(169),n(7),n(46),n(516),n(487)),h=n(669),d=n(2),v=n(13),f=n(61);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"==typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(d.y)(t).every((function(t){return null!=t&&"object"===Object(r.a)(t)}))}}},computed:{classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var n=e.size;return t+(void 0===n?0:n)}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(d.p)(e,1024===this.base))},internalArrayValue:function(){return Object(d.y)(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var n=e.name,o=void 0===n?"":n,l=e.size,r=void 0===l?0:l,c=t.truncateText(o);return t.showSize?"".concat(c," (").concat(Object(d.p)(r,1024===t.base),")"):c})):[this.placeholder]},base:function(){return"boolean"!=typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(v.b)("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.multiple?t:t?[t]:[];Object(d.i)(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(text,e){return t.$createElement(h.a,{props:{small:t.smallChips},on:{"click:close":function(){var n=t.internalValue;n.splice(e,1),t.internalValue=n}}},[text])})):[]},genControl:function(){var t=c.a.options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(f.c)(t.data.style,{display:"none"})),t},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data.attrs.multiple=this.multiple,delete input.data.domProps.value,delete input.data.on.input,input.data.on.change=this.onInput,[this.genSelections(),input]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,o){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[o],file:n,index:o}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=c.a.options.methods.genTextFieldSlot.call(this);return e.data.on=x(x({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(o.a)(t.target.files||[]);this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},669:function(t,e,n){"use strict";n(11),n(9),n(14),n(7),n(17);var o=n(22),l=n(3),r=(n(12),n(518),n(10)),c=n(101),h=n(99),d=n(31),v=n(137),f=n(27),m=n(93),x=n(100),y=n(138),_=n(13);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(d.a,y.a,x.a,f.a,Object(v.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},x.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),l=n[0],r=n[1];t.$attrs.hasOwnProperty(l)&&Object(_.a)(l,r,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var l=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(l,data),e)}})},754:function(t,e,n){"use strict";n.r(e);n(73);var o=n(8),l={data:function(){return{msg:{type:"",message:""},defaultImg:{url:"https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7",alt:"Placeholder Image"},type:"image"}},computed:{post:function(){var t={id:this.$store.getters["posts/getContent"].id,image:{id:this.$store.getters["posts/getContent"].imgId,url:this.$store.getters["posts/getContent"].url,alt:this.$store.getters["posts/getContent"].alt},content:{type:"post_page",title:this.$store.getters["posts/getContent"].title,content:this.$store.getters["posts/getContent"].content}};return t}},methods:{update:function(){var t=this;""===this.post.image.url&&(this.post.image.url=this.defaultImg.url,this.post.image.alt=this.defaultImg.alt),o.l.doc(this.post.id).update({title:this.post.content.title,content:this.post.content.content,lastUpdateOn:new Date,imgId:this.post.image.id,url:this.post.image.url,alt:this.post.image.alt,type:this.post.content.type}).then((function(){t.msg={type:"success",message:"News page updated"},setTimeout((function(){t.msg={type:"",message:""}}),2e3)})).catch((function(e){t.msg={type:"warning",message:e.message},setTimeout((function(){t.msg={type:"",message:""}}),2e3)}))}}},r=n(36),c=n(40),h=n.n(c),d=n(210),v=n(503),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h2",{staticClass:"font-weight-bold text-center pb-2"},[t._v("News Page Content")]),t._v(" "),n("PostImageUpload",{attrs:{image:t.post.image,type:t.type},on:{"update:image":function(e){return t.$set(t.post,"image",e)}}}),t._v(" "),n("PostStandardForm",{attrs:{content:t.post.content},on:{"update:content":function(e){return t.$set(t.post,"content",e)}}}),t._v(" "),n("UiMessage",{attrs:{msg:t.msg}}),t._v(" "),n("v-btn",{staticClass:"mt-5",attrs:{color:"primary"},nativeOn:{click:function(e){return t.update.apply(null,arguments)}}},[t._v("Update content")])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{PostImageUpload:n(514).default,PostStandardForm:n(515).default,UiMessage:n(509).default}),h()(component,{VBtn:d.a,VContainer:v.a})}}]);