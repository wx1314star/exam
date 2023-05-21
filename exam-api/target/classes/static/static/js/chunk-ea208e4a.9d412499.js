(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea208e4a"],{"0468":function(e,t,l){"use strict";l.d(t,"b",(function(){return a})),l.d(t,"d",(function(){return n})),l.d(t,"c",(function(){return s})),l.d(t,"a",(function(){return o}));var i=l("b775");function a(e){return Object(i["b"])("/exam/api/repo/detail",e)}function n(e){return Object(i["b"])("/exam/api/repo/save",e)}function s(e){return Object(i["b"])("/exam/api/repo/list",e)}function o(e){return Object(i["b"])("/exam/api/repo/batch-action",e)}},"4a02":function(e,t,l){"use strict";var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-select",{staticClass:"filter-item",attrs:{filterable:"",remote:"",multiple:e.multi,"reserve-keyword":"",clearable:"","automatic-dropdown":"",placeholder:"选择或搜索题库","remote-method":e.fetchData},on:{change:e.handlerChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dataList,(function(e){return l("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)},a=[],n=l("0468"),s={name:"RepoSelect",props:{multi:Boolean,value:Array,default:String},data:function(){return{dataList:[],currentValue:[]}},watch:{value:{handler:function(){this.currentValue=this.value}}},created:function(){this.currentValue=this.value,this.fetchData()},methods:{fetchData:function(){var e=this;Object(n["c"])({}).then((function(t){e.dataList=t.data}))},handlerChange:function(e){this.$emit("change",e),this.$emit("input",e)}}},o=s,r=l("2877"),u=Object(r["a"])(o,i,a,!1,null,null,null);t["a"]=u.exports},d5b7:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-form",{ref:"postForm",attrs:{model:e.postForm,rules:e.rules,"label-position":"left","label-width":"150px"}},[l("el-card",[l("el-form-item",{attrs:{label:"题目类型 ",prop:"quType"}},[l("el-select",{staticClass:"filter-item",attrs:{disabled:e.quTypeDisabled},on:{change:e.handleTypeChange},model:{value:e.postForm.quType,callback:function(t){e.$set(e.postForm,"quType",t)},expression:"postForm.quType"}},e._l(e.quTypes,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"难度等级 ",prop:"level"}},[l("el-select",{staticClass:"filter-item",model:{value:e.postForm.level,callback:function(t){e.$set(e.postForm,"level",t)},expression:"postForm.level"}},e._l(e.levels,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"归属题库",prop:"repoIds"}},[l("repo-select",{attrs:{multi:!0},model:{value:e.postForm.repoIds,callback:function(t){e.$set(e.postForm,"repoIds",t)},expression:"postForm.repoIds"}})],1),l("el-form-item",{attrs:{label:"题目内容",prop:"content"}},[l("el-input",{attrs:{type:"textarea"},model:{value:e.postForm.content,callback:function(t){e.$set(e.postForm,"content",t)},expression:"postForm.content"}})],1),l("el-form-item",{attrs:{label:"试题图片"}},[l("file-upload",{model:{value:e.postForm.image,callback:function(t){e.$set(e.postForm,"image",t)},expression:"postForm.image"}})],1),l("el-form-item",{attrs:{label:"整题解析",prop:"oriPrice"}},[l("el-input",{attrs:{type:"textarea",precision:1,max:999999},model:{value:e.postForm.analysis,callback:function(t){e.$set(e.postForm,"analysis",t)},expression:"postForm.analysis"}})],1)],1),4!==e.postForm.quType?l("div",{staticClass:"filter-container",staticStyle:{"margin-top":"25px"}},[l("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus",size:"small",plain:""},on:{click:e.handleAdd}},[e._v(" 添加 ")]),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.postForm.answerList,border:!0}},[l("el-table-column",{attrs:{label:"是否答案",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{model:{value:t.row.isRight,callback:function(l){e.$set(t.row,"isRight",l)},expression:"scope.row.isRight"}},[e._v("答案")])]}}],null,!1,1650073960)}),e.itemImage?l("el-table-column",{attrs:{label:"选项图片",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("file-upload",{model:{value:t.row.image,callback:function(l){e.$set(t.row,"image",l)},expression:"scope.row.image"}})]}}],null,!1,2486182644)}):e._e(),l("el-table-column",{attrs:{label:"答案内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea"},model:{value:t.row.content,callback:function(l){e.$set(t.row,"content",l)},expression:"scope.row.content"}})]}}],null,!1,924406712)}),l("el-table-column",{attrs:{label:"答案解析"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{attrs:{type:"textarea"},model:{value:t.row.analysis,callback:function(l){e.$set(t.row,"analysis",l)},expression:"scope.row.analysis"}})]}}],null,!1,3792987939)}),l("el-table-column",{attrs:{label:"操作",align:"center",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(l){return e.removeItem(t.$index)}}})]}}],null,!1,1518468532)})],1)],1):e._e(),l("div",{staticStyle:{"margin-top":"20px"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存")]),l("el-button",{attrs:{type:"info"},on:{click:e.onCancel}},[e._v("返回")])],1)],1)],1)},a=[],n=(l("ac6a"),l("f4bc")),s=l("4a02"),o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("file-upload-local",{attrs:{accept:e.accept,tips:e.tips,"list-type":e.listType},model:{value:e.fileUrl,callback:function(t){e.fileUrl=t},expression:"fileUrl"}})],1)},r=[],u=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[l("el-upload",{attrs:{action:e.server,accept:e.accept,"before-remove":e.beforeRemove,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"on-exceed":e.handleExceed,drag:"picture"!==e.listType,limit:e.limit,headers:e.header,"file-list":e.fileList,"list-type":e.listType},model:{value:e.fileUrl,callback:function(t){e.fileUrl=t},expression:"fileUrl"}},["picture"===e.listType?l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]):e._e(),"picture"!==e.listType?l("i",{staticClass:"el-icon-upload"}):e._e(),"picture"!==e.listType?l("div",{staticClass:"el-upload__text"},[e._v(" 将文件拖到此处，或 "),l("em",[e._v("点击上传")])]):e._e(),e.tips?l("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(e._s(e.tips))]):e._e()],1)],1)},c=[],p=(l("c5f6"),l("5f87")),m={name:"FileUploadLocal",props:{value:String,accept:String,tips:String,listType:String,limit:{type:Number,default:1}},data:function(){return{server:"".concat("","/common/api/file/upload"),fileList:[],fileUrl:"",header:{}}},watch:{value:{handler:function(){this.fillValue()}}},created:function(){this.fillValue(),this.header={token:Object(p["a"])()}},methods:{fillValue:function(){this.fileList=[],this.fileUrl=this.value,this.fileUrl&&(this.fileList=[{name:this.fileUrl,url:this.fileUrl}])},handleExceed:function(){this.$message.warning("每次只能上传 ".concat(this.limit," 个文件"))},beforeRemove:function(){return this.$confirm("确定移除文件吗？")},handleRemove:function(){this.$emit("input",""),this.fileList=[]},handleSuccess:function(e){if(1===e.code)return this.$message({type:"error",message:e.msg}),void(this.fileList=[]);this.$emit("input",e.data.url)}}},f=m,d=l("2877"),h=Object(d["a"])(f,u,c,!1,null,null,null),b=h.exports,v={name:"FileUpload",components:{FileUploadLocal:b},props:{value:String,accept:{type:String,default:"*"},tips:String,listType:{type:String,default:"picture"}},data:function(){return{fileUrl:""}},watch:{value:{handler:function(){this.fillValue()}},fileUrl:{handler:function(){this.$emit("input",this.fileUrl)}}},mounted:function(){},created:function(){this.fillValue()},methods:{fillValue:function(){this.fileUrl=this.value}}},y=v,g=Object(d["a"])(y,o,r,!1,null,null,null),x=g.exports,F={name:"QuDetail",components:{FileUpload:x,RepoSelect:s["a"]},data:function(){return{quTypeDisabled:!1,itemImage:!0,levels:[{value:1,label:"普通"},{value:2,label:"较难"}],quTypes:[{value:1,label:"单选题"},{value:2,label:"多选题"},{value:3,label:"判断题"}],postForm:{repoIds:[],tagList:[],answerList:[]},rules:{content:[{required:!0,message:"题目内容不能为空！"}],quType:[{required:!0,message:"题目类型不能为空！"}],level:[{required:!0,message:"必须选择难度等级！"}],repoIds:[{required:!0,message:"至少要选择一个题库！"}]}}},created:function(){var e=this.$route.params.id;"undefined"!==typeof e&&(this.quTypeDisabled=!0,this.fetchData(e))},methods:{handleTypeChange:function(e){this.postForm.answerList=[],3===e&&(this.postForm.answerList.push({isRight:!0,content:"正确",analysis:""}),this.postForm.answerList.push({isRight:!1,content:"错误",analysis:""})),1!==e&&2!==e||(this.postForm.answerList.push({isRight:!1,content:"",analysis:""}),this.postForm.answerList.push({isRight:!1,content:"",analysis:""}),this.postForm.answerList.push({isRight:!1,content:"",analysis:""}),this.postForm.answerList.push({isRight:!1,content:"",analysis:""}))},handleAdd:function(){this.postForm.answerList.push({isRight:!1,content:"",analysis:""})},removeItem:function(e){this.postForm.answerList.splice(e,1)},fetchData:function(e){var t=this;Object(n["b"])(e).then((function(e){t.postForm=e.data}))},submitForm:function(){var e=this;console.log(JSON.stringify(this.postForm));var t=0;this.postForm.answerList.forEach((function(e){e.isRight&&(t+=1)})),1!==this.postForm.quType||1===t?2===this.postForm.quType&&t<2?this.$message({message:"多选题至少要有两个正确答案！",type:"warning"}):3!==this.postForm.quType||1===t?this.$refs.postForm.validate((function(t){t&&Object(n["e"])(e.postForm).then((function(t){e.postForm=t.data,e.$notify({title:"成功",message:"试题保存成功！",type:"success",duration:2e3}),e.$router.push({name:"ListQu"})}))})):this.$message({message:"判断题只能有一个正确项！",type:"warning"}):this.$message({message:"单选题答案只能有一个",type:"warning"})},onCancel:function(){this.$router.push({name:"ListQu"})}}},w=F,_=Object(d["a"])(w,i,a,!1,null,"9b5923c2",null);t["default"]=_.exports},f4bc:function(e,t,l){"use strict";l.d(t,"b",(function(){return a})),l.d(t,"e",(function(){return n})),l.d(t,"a",(function(){return s})),l.d(t,"d",(function(){return o})),l.d(t,"c",(function(){return r}));var i=l("b775");function a(e){return Object(i["b"])("/exam/api/qu/qu/detail",{id:e})}function n(e){return Object(i["b"])("/exam/api/qu/qu/save",e)}function s(e){return Object(i["a"])("/exam/api/qu/qu/export",e,"导出的数据.xlsx")}function o(){return Object(i["a"])("/exam/api/qu/qu/import/template",{},"qu-import-template.xlsx")}function r(e){return Object(i["c"])("/exam/api/qu/qu/import",e)}}}]);