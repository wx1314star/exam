(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-101a0a6f"],{"0c00":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.paperList,(function(e){return a("el-card",{staticStyle:{"margin-bottom":"10px","line-height":"30px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[t._v(" 考试时间："+t._s(e.createTime)+" ")]),a("el-col",{attrs:{span:12}},[t._v(" 考试用时："+t._s(e.userTime)+"分钟 ")]),a("el-col",{attrs:{span:12}},[t._v(" 考试得分："+t._s(e.userScore)+" ")]),a("el-col",{attrs:{span:12}},[t._v(" 是否合格："+t._s(e.userScore>e.qualifyScore?"是":"否")+" ")]),a("el-col",{attrs:{span:12}},[t._v(" 考试状态："+t._s(t._f("paperStateFilter")(e.state))+" ")])],1)],1)})),1)},i=[],s=a("6066"),l={name:"UserPaperList",props:{examId:{type:String,defaultValue:""},userId:{type:String,defaultValue:""}},data:function(){return{value1:null,paperList:[]}},watch:{examId:{handler:function(){this.fetchPaperList()},deep:!0},userId:{handler:function(){this.fetchPaperList()},deep:!0}},created:function(){this.fetchPaperList()},methods:{fetchPaperList:function(){var t=this;Object(s["b"])(this.userId,this.examId).then((function(e){t.paperList=e.data.records}))}}},o=l,r=a("2877"),u=Object(r["a"])(o,n,i,!1,null,null,null);e["a"]=u.exports},"101f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-table",{ref:"pagingTable",attrs:{options:t.options,"list-query":t.listQuery}},[a("template",{slot:"filter-content"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索人员"},model:{value:t.listQuery.params.realName,callback:function(e){t.$set(t.listQuery.params,"realName",e)},expression:"listQuery.params.realName"}})],1),a("template",{slot:"data-columns"},[a("el-table-column",{attrs:{label:"人员",prop:"realName",align:"center"}}),a("el-table-column",{attrs:{label:"考试次数",prop:"tryCount",align:"center"}}),a("el-table-column",{attrs:{label:"最高分",prop:"maxScore",align:"center"}}),a("el-table-column",{attrs:{label:"是否通过",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.passed?a("span",{staticStyle:{color:"#00ff00"}},[t._v("通过")]):a("span",{staticStyle:{color:"#ff0000"}},[t._v("未通过")])]}}])}),a("el-table-column",{attrs:{label:"最后考试时间",prop:"updateTime",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-view"},on:{click:function(a){return t.handleExamDetail(e.row.examId,e.row.userId)}}},[t._v("考试明细")])]}}])})],1)],2),a("el-dialog",{attrs:{title:"考试明细",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"el-dialog-div"},[a("my-paper-list",{attrs:{"exam-id":t.examId,"user-id":t.userId}})],1)])],1)},i=[],s=a("7845"),l=a("0c00"),o={name:"ExamUserList",components:{MyPaperList:l["a"],DataTable:s["a"]},data:function(){return{dialogVisible:!1,examId:"",userId:"",listQuery:{current:1,size:10,params:{examId:"",realName:""}},options:{multi:!1,listUrl:"/exam/api/user/exam/paging"}}},created:function(){this.listQuery.params.examId=this.$route.params.examId},methods:{handleExamDetail:function(t,e){this.examId=t,this.userId=e,this.dialogVisible=!0},handlerExamBook:function(t){this.$router.push({name:"BookList",params:{examId:t}})}}},r=o,u=(a("6c1e"),a("2877")),c=Object(u["a"])(r,n,i,!1,null,"b55c062c",null);e["default"]=c.exports},"197b":function(t,e,a){},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("c5f6");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function o(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(t,e,a){var n=o(),i=t-n,r=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=r;var o=Math.easeInOutQuad(u,n,i,e);l(o),u<e?s(t):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&r(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},c=u,d=(a("5660"),a("2877")),p=Object(d["a"])(c,n,i,!1,null,"6af373ef",null);e["a"]=p.exports},"457f":function(t,e,a){"use strict";a("5364")},5364:function(t,e,a){},5660:function(t,e,a){"use strict";a("7a30")},6066:function(t,e,a){"use strict";a.d(e,"b",(function(){return i}));var n=a("b775");function i(t,e){return Object(n["b"])("/exam/api/paper/paper/paging",{current:1,size:5,params:{userId:t,examId:e}})}},"6c1e":function(t,e,a){"use strict";a("197b")},7845:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[t._t("filter-content"),a("el-row",[a("el-col",[t.options.addRoute?a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")]):t._e()],1)],1)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.multiShow&&t.options.multiActions,expression:"multiShow && options.multiActions"}],staticClass:"filter-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"130px"},attrs:{placeholder:t.selectedLabel},on:{change:t.handleOption},model:{value:t.multiNow,callback:function(e){t.multiNow=e},expression:"multiNow"}},t._l(t.options.multiActions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.dataList.records,border:"",fit:"","highlight-current-row":"","header-cell-style":{background:"#f2f3f4",color:"#555","font-weight":"bold","line-height":"32px"}},on:{"selection-change":t.handleSelection}},[t.options.multi?a("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}):t._e(),t._t("data-columns")],2),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.dataList.total>0,expression:"dataList.total>0"}],attrs:{total:t.dataList.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.getList}})],1)},i=[],s=(a("ac6a"),a("b775"));function l(t,e){return Object(s["b"])(t,e)}function o(t,e){return Object(s["b"])(t,{ids:e})}function r(t,e,a){return Object(s["b"])(t,{ids:e,state:a})}var u=a("333d"),c={name:"PagingTable",components:{Pagination:u["a"]},props:{options:{type:Object,default:function(){return{multiActions:[],listUrl:"/exam/api",deleteUrl:"",stateUrl:"",multi:!1}}},listQuery:{type:Object,default:function(){return{current:1,size:10,params:{},t:0}}}},data:function(){return{dataList:{total:0},listLoading:!0,selectedIds:[],selectedObjs:[],selectedLabel:"",multiShow:!1,multiNow:""}},watch:{listQuery:{handler:function(){this.getList()},deep:!0}},created:function(){this.getList()},methods:{handleAdd:function(){this.options.addRoute?this.$router.push({name:this.options.addRoute,params:{}}):console.log("未设置添加数据跳转路由！")},getList:function(){var t=this;this.listLoading=!0,this.listQuery.t=(new Date).getTime(),l(this.options.listUrl,this.listQuery).then((function(e){t.dataList=e.data,t.listLoading=!1}))},handleFilter:function(){this.getList()},handleOption:function(t){this.multiNow="","delete"!==t?"enable"!==t?"disable"!==t?this.$emit("multi-actions",{opt:t,ids:this.selectedIds}):this.handleState(1):this.handleState(0):this.handleDelete()},handleState:function(t){var e=this;r(this.options.stateUrl,this.selectedIds,t).then((function(t){0===t.code&&(e.$message({type:"success",message:"状态修改成功!"}),e.getList())}))},handleDelete:function(){var t=this;0!==this.selectedIds.length?this.$confirm("确实要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){o(t.options.deleteUrl,t.selectedIds).then((function(){t.$message({type:"success",message:"删除成功!"}),t.getList()}))})):this.$message({message:"请至少选择一条数据！",type:"warning"})},handleSelection:function(t){var e=[];t.forEach((function(t){e.push(t.id)})),this.selectedObjs=t,this.selectedIds=e,this.multiShow=e.length>0,this.selectedLabel="已选"+e.length+"项",this.$emit("select-changed",{ids:this.selectedIds,objs:this.selectedObjs})}}},d=c,p=(a("457f"),a("2877")),m=Object(p["a"])(d,n,i,!1,null,null,null);e["a"]=m.exports},"7a30":function(t,e,a){}}]);