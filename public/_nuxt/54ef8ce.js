(window.webpackJsonp=window.webpackJsonp||[]).push([[31,34],{493:function(e,l,t){"use strict";t.r(l);var o;o=t(650);var n={components:{ckeditor:t(651).component},props:{content:{type:String,required:!0,default:"Enter text here"}},data:function(){return{editor:o,editorConfig:{fontFamily:{options:["default","Ubuntu, Arial, sans-serif","Ubuntu Mono, Courier New, Courier, monospace"],supportAllValues:!0},fontSize:{options:[9,11,13,"default",17,19,21]},fontColor:{colors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White",hasBorder:!0}]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading5"}]},link:{addTargetToExternalLinks:!0,decorators:[{mode:"manual",label:"Downloadable",attributes:{download:"download"}}]},toolbar:["heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","imageUpload","insertTable","|","alignment","outdent","indent","|","link","undo","redo"],language:"en",image:{toolbar:["imageTextAlternative","|","imageStyle:full","imageStyle:side","|","imageStyle:alignLeft","imageStyle:alignRight","imageStyle:alignCenter"],styles:["full","alignLeft","alignRight","side","alignCenter"]},alignment:{options:["left","right"]},tableProperties:{borderColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}],backgroundColors:[{color:"hsl(0, 0%, 0%)",label:"Black"},{color:"#010e5c",label:"Blue"},{color:"#cba052",label:"Yellow"},{color:"hsl(0, 0%, 30%)",label:"Dim grey"},{color:"hsl(0, 0%, 60%)",label:"Grey"},{color:"hsl(0, 0%, 90%)",label:"Light grey"},{color:"hsl(0, 0%, 100%)",label:"White"}]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}}}}},r=t(35),component=Object(r.a)(n,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("ckeditor",{attrs:{editor:e.editor,config:e.editorConfig,value:e.content},on:{input:function(content){return e.$emit("update:content",content)}}})],1)}),[],!1,null,null,null);l.default=component.exports},655:function(e,l,t){"use strict";t.r(l);t(163);var o={props:{quotes:{type:Array,default:function(){return[]}}},computed:{items:{get:function(){return this.quotes},set:function(e){this.$emit("update:content",e)}}},methods:{add:function(){this.items.push({name:"",content:""})},remove:function(e){this.items.splice(e,1)}}},n=t(35),r=t(39),c=t.n(r),d=t(478),h=t(484),m=t(192),f=t(480),v=t(469),component=Object(n.a)(o,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("v-container",{staticClass:"my-10",attrs:{fluid:""}},[t("h3",[e._v("Quotes")]),e._v(" "),e._l(e.items,(function(l,o){return t("v-row",{key:o},[t("v-col",{attrs:{cols:"10"}},[t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{label:"Name"},model:{value:l.name,callback:function(t){e.$set(l,"name","string"==typeof t?t.trim():t)},expression:"item.name"}})],1),e._v(" "),t("v-col",{attrs:{cols:"12"}},[t("UiEditor",{attrs:{content:l.content},on:{"update:content":function(t){return e.$set(l,"content",t)}}})],1)],1),e._v(" "),t("v-col",{staticClass:"my-auto text-center",attrs:{cols:"2"}},[t("v-icon",{attrs:{color:"green"},nativeOn:{click:function(l){return e.add()}}},[e._v("mdi-plus")]),e._v(" "),0!=o?t("v-icon",{attrs:{color:"error"},nativeOn:{click:function(l){return e.remove(o)}}},[e._v("mdi-minus")]):e._e()],1)],1)}))],2)],1)}),[],!1,null,null,null);l.default=component.exports;c()(component,{UiEditor:t(493).default}),c()(component,{VCol:d.a,VContainer:h.a,VIcon:m.a,VRow:f.a,VTextField:v.a})}}]);