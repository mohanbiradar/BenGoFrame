(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ff23"],{"22to":function(e,t,a){},"4bby":function(e,t,a){"use strict";var n=a("22to");a.n(n).a},"6/LN":function(e,t,a){},KVRT:function(e,t,a){},NI31:function(e,t,a){"use strict";var n=a("6/LN");a.n(n).a},Pwak:function(e,t,a){"use strict";var n=a("KVRT");a.n(n).a},UBpW:function(e,t,a){"use strict";var n={name:"ActionTips",data:function(){return{activeName:""}}},i=(a("nSs8"),a("ZrdR")),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("el-form-item",[a("el-button",{attrs:{type:"warning",size:"small"}},[e._v("Actions Tips")]),e._v(" "),a("el-collapse",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-collapse-item",{attrs:{title:"Action: Browser",name:"1"}},[a("div",[e._v("1. Open or close browser")]),e._v(" "),a("div",[e._v("2. Switch to new or parent browser")]),e._v(" "),a("div",[e._v("3. In module table. It must be selected with action type")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: CheckElementIf",name:"2"}},[a("div",[e._v("1. It will run the wrap steps between {Check object if exist} and {End if} if the element is found.")]),e._v(" "),a("div",[e._v("2. It must be group by {End if} at the end.")]),e._v(" "),a("div",[e._v("3. In module table.It must be combining with action {EndIf}")]),e._v(" "),a("div",[e._v("\n          Example 1:\n          "),a("br"),e._v("\n          [Expression] [Description: Check object {objectName} if exist in {pageName}]\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v("[Expression] [Description: End if]\n        ")]),e._v(" "),a("div",[e._v("\n          Example 2:\n          "),a("br"),e._v("[pageName] [objectName] [Action: CheckElementIf] [comment]\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v(".....................................................................\n          "),a("br"),e._v("[Action: EndIf] [comment]\n        ")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Click",name:"3"}},[a("div",[e._v("1. Click on {objectName} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: Click] [comment]")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Iframe",name:"4"}},[a("div",[e._v("1. Switch to default page")]),e._v(" "),a("div",[e._v("2. Switch to new iframe {objectName} in {pageName}")]),e._v(" "),a("div",[e._v("3. [Action: Iframe] [ActionType: BackToDefault] [comment]")]),e._v(" "),a("div",[e._v("4. [pageName] [objectName] [Action: Iframe] [comment]")]),e._v(" "),a("div",[e._v("5. Don't forget to switch back after you switch to a new iframe")]),e._v(" "),a("div",[e._v("6. In module table. If you want to switch to new iframe you don't need to select action type {BackToDefault}")]),e._v(" "),a("div",[e._v("7. In module table. Don't forget to input the iframe object if you want to switch to new iframe")]),e._v(" "),a("div",[e._v("8. In module table. If you want to switch to back to default iframe you must select action type {BackToDefault}")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: MouseEvent",name:"5"}},[a("div",[e._v("1. Mouseover on {objectName} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: MouseEvent] [comment]")]),e._v(" "),a("div",[e._v("3. It will update more action type for mouseover event if any quired")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Select",name:"6"}},[a("div",[e._v("1. Select on {objectName} with {optionText} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: Select] [input: optionText] [comment]")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Sendkeys",name:"7"}},[a("div",[e._v("1. Sendkeys on {objectName} with {inputData} in {pageName}")]),e._v(" "),a("div",[e._v("1. [pageName] [objectName] [Action: Sendkeys] [input: text] [comment]")]),e._v(" "),a("div",[e._v("3. Input data is the text you want to send into the object")]),e._v(" "),a("div",[e._v("4. It could be a key name in TestData map")]),e._v(" "),a("div",[e._v("5. If your key name can't be found in TestData map. It will use itself to be a text")]),e._v(" "),a("div",[e._v("6. So you can use itself to be a text in step directly. But i sugguest you to store it into the TestData map")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Store",name:"8"}},[a("div",[e._v("1. Store the object {objectName} text as {storeName} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: Store] [input: storeName] [comment]")]),e._v(" "),a("div",[e._v("3. It will sotre the text from the object to TestData map as a {storeName}")]),e._v(" "),a("div",[e._v("4. {storeName} is the key name in TestData map")]),e._v(" "),a("div",[e._v("5. If you want it use it. Just use the {storeName} to your sendkeys steps")]),e._v(" "),a("div",[e._v("6. Also it can be used in object. But this function will be added at next version")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: ContainsText",name:"9"}},[a("div",[e._v("1. Object {objectName} should containstext with {text} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: ContainsText] [input: text] [comment]")]),e._v(" "),a("div",[e._v("3. To verify the object text if contains the expected text")]),e._v(" "),a("div",[e._v("4. {text} will be a text or a key name in TestData map")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: NotContainsText",name:"10"}},[a("div",[e._v("1. Object {objectName} should notcontainstext with {text} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: NotContainsText] [input: text] [comment]")]),e._v(" "),a("div",[e._v("3. To verify the object text if not contains the expected text")]),e._v(" "),a("div",[e._v("4. {text} will be a text or a key name in TestData map")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: See",name:"11"}},[a("div",[e._v("1. Should see the object {objectName} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: See] [comment]")]),e._v(" "),a("div",[e._v("3. To verify the object text if exist in {pageName}")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: NotSee",name:"12"}},[a("div",[e._v("1. Should notsee the object {objectName} in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: NotSee] [comment]")]),e._v(" "),a("div",[e._v("3. To verify the object text if not exist in {pageName}")])]),e._v(" "),a("el-collapse-item",{attrs:{title:"Action: Wait",name:"13"}},[a("div",[e._v("1. Wait {waitTime} second until {objectName} exist in {pageName}")]),e._v(" "),a("div",[e._v("2. [pageName] [objectName] [Action: Wait] [input: waitTime] [comment]")]),e._v(" "),a("div",[e._v("3. To wait any time you want until the object exist or display in page")]),e._v(" "),a("div",[e._v("4. {waitTime} will be a text or a key name in TestData map")])])],1)],1)],1)},[],!1,null,null,null);o.options.__file="ActionTips.vue";t.a=o.exports},VeoX:function(e,t,a){var n=a("12G+"),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},kUvm:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a("rerW"),i=a.n(n),o={choosesFilter:function(e,t){var a=[];if(0===t.length)a=e;else if(0===e.length)a=[];else{var n=function(t){a=a.concat(e.filter(function(e){return e[t.type]===t.value}))},o=!0,s=!1,l=void 0;try{for(var r,c=i()(t);!(o=(r=c.next()).done);o=!0){n(r.value)}}catch(e){s=!0,l=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}}return a}};function s(e,t){for(var a in t)e=o.choosesFilter(e,t[a]);return e}},mZXu:function(e,t,a){"use strict";a.r(t);var n=a("omC7"),i=a.n(n),o=a("t3Un");function s(e){var t={env:e};return Object(o.a)({url:"/testmodule/getModulesByEnv",method:"post",data:t})}var l=a("kUvm"),r={name:"SearchModule",data:function(){return{env:"",loading:!1,currentPage:1,pageSize:10,pageName:"",name:"",creator:"",modulesTable:[]}},computed:{origTestModule:function(){return this.$store.getters.origTestModule}},methods:{onSearch:function(){var e=this,t=this.env.toLowerCase();t?s(t).then(function(t){var a=t.data.status,n=t.data.message;if("success"===a){var o=JSON.parse(i()(n)),s=JSON.parse(i()(n));e.modulesTable=o,e.$store.dispatch("setOrigModule",s)}else e.$message({message:n,type:"error"})}):this.$message({message:"Please input env",type:"error"})},onClear:function(){this.env="",this.currentPage=1,this.pageSize=10,this.modulesTable=[],this.$store.dispatch("setOrigModule",[])},handleSizeChange:function(e){this.currentPage=1,this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e},onView:function(e,t){var a=JSON.parse(i()(e));this.$emit("viewDetails",a)},onDelete:function(e,t){var a=this,n=e.env.toLowerCase(),i=e.id,s=e.name;1!==this.currentPage&&(t=this.pageSize+t),this.$msgbox({title:"Delete Test Module",message:"Are you sure to delete the test module: "+s,showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){a.loading=!0,function(e,t){var a={id:e,env:t};return Object(o.a)({url:"/testmodule/deleteModule",method:"post",data:a})}(i,n).then(function(e){var n=e.data.status,i=e.data.message;"success"===n?(a.loading=!1,a.modulesTable.splice(t,1),a.origTestModule.splice(t,1),0===a.origTestModule.length?(a.$emit("refreshTable"),a.env=""):a.$emit("refreshTable"),a.$emit("viewDetails",""),a.$message({message:s+" was deleted",type:"success"})):(a.loading=!1,a.$message({message:i,type:"error"}))})}).catch(function(){a.loading=!1,a.$message({message:"Cancel delete test module: "+s,type:"info"})})},onFilter:function(){var e={};this.pageName&&(e.pageName=[{type:"pageName",value:this.pageName}]),this.name&&(e.name=[{type:"name",value:this.name}]),this.creator&&(e.creator=[{type:"creator",value:this.creator}]);var t=JSON.parse(i()(this.origTestModule)),a=Object(l.a)(t,e);0===a.length?(this.modulesTable=[],this.$message({message:"No data found",type:"warning"})):this.modulesTable=a},onFilterClear:function(){this.pageName="",this.name="",this.creator="",this.modulesTable=JSON.parse(i()(this.origTestModule))},updateSearchTable:function(e){var t=this;this.env=e,s(e).then(function(e){var a=e.data.status,n=e.data.message;if("success"===a){var o=JSON.parse(i()(n)),s=JSON.parse(i()(n));t.modulesTable=o,t.$store.dispatch("setOrigModule",s)}else t.$message({message:n,type:"error"})})}}},c=(a("Pwak"),a("ZrdR")),u=Object(c.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchModule"},[a("el-form",{attrs:{inline:!0,"label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"Env"}},[a("el-input",{attrs:{placeholder:"Input env"},model:{value:e.env,callback:function(t){e.env=t},expression:"env"}})],1),e._v(" "),a("el-form-item",[a("ElButton",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{icon:"el-icon-search",size:"small",type:"info"},on:{click:e.onSearch}},[e._v("Search")]),e._v(" "),a("ElButton",{attrs:{icon:"el-icon-refresh",size:"small",type:"info"},on:{click:e.onClear}},[e._v("Clear")])],1)],1),e._v(" "),a("el-form",{attrs:{inline:!0,"label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"Page Name"}},[a("el-input",{attrs:{placeholder:"Input page name"},model:{value:e.pageName,callback:function(t){e.pageName=t},expression:"pageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Module Name"}},[a("el-input",{attrs:{placeholder:"Input module name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Creator"}},[a("el-input",{attrs:{placeholder:"Input creator name"},model:{value:e.creator,callback:function(t){e.creator=t},expression:"creator"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-view"},on:{click:e.onFilter}},[e._v("Filter")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh"},on:{click:e.onFilterClear}},[e._v("Clear")])],1)],1),e._v(" "),e.modulesTable.length>0?a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"sModuleTable"},[a("el-table",{attrs:{border:"",data:e.modulesTable.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"header-cell-style":{background:"rgba(234,238,241,.41)"},size:"small"}},[a("el-table-column",{attrs:{prop:"pageName",label:"Page Name",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"Module Name",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"description",label:"Description"}}),e._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"Creator",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Action",width:"280",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{size:"mini",type:"info",icon:"el-icon-view"},on:{click:function(a){e.onView(t.row,t.$index)}}},[e._v("View Details")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-remove-outline"},on:{click:function(a){e.onDelete(t.row,t.$index)}}},[e._v("Delete")])]}}])})],1),e._v(" "),a("br"),e._v(" "),a("el-pagination",{attrs:{background:"",align:"center","current-page":e.currentPage,"page-sizes":[1,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.modulesTable.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)},[],!1,null,null,null);u.options.__file="SearchModule.vue";var m=u.exports,p=a("Q2cO"),d=a.n(p),v=a("EPZ6"),f=a.n(v),h={name:"ModuleTable",data:function(){return{isNew:!0,id:"",origEnv:"",pageName:"",name:"",env:"",creator:"",description:"",steps:[{page:"",object:"",action:"",actionType:"",input:"",comment:"",edit:!1}],actionMap:[{id:"Browser",label:"Browser"},{id:"Click",label:"Click"},{id:"Sendkeys",label:"Sendkeys"},{id:"See",label:"See"},{id:"NotSee",label:"NotSee"},{id:"Wait",label:"Wait"},{id:"Select",label:"Select"},{id:"ContainsText",label:"ContainsText"},{id:"NotContainsText",label:"NotContainsText"},{id:"Store",label:"Store"},{id:"CheckelEmentIf",label:"CheckelEmentIf"},{id:"EndIf",label:"EndIf"},{id:"MouseEventAction",label:"MouseEventAction"},{id:"Iframe",label:"Iframe"}],actionTypeMap:[{id:"Browser-Navigate",label:"Navigate"},{id:"Browser-Close",label:"Close"},{id:"Browser-SwitchToNewWindow",label:"SwitchToNewWindow"},{id:"Browser-SwitchToParentWindow",label:"SwitchToParentWindow"},{id:"Iframe-BackToDefault",label:"BackToDefault"}],newLine:{page:"",object:"",action:"",actionType:"",input:"",comment:"",edit:!1}}},computed:{tempTestModule:function(){return this.$store.getters.tempTestModule},origTestModule:function(){return this.$store.getters.origTestModule}},methods:{addNewModule:function(){this.onClear(),this.$emit("createNewModule"),this.isNew=!0},onSave:function(){var e=this,t={};this.validateField()&&(t.id=this.id,t.pageName=this.pageName,t.origEnv=this.origEnv,t.env=this.env.toLowerCase(),t.name=this.name,t.creator=this.creator,t.description=this.description,t.steps=this.steps,this.$msgbox({title:"Update Test Module",message:"Are you sure to update test module?",showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){(function(e){var t={id:e.id,origEnv:e.origEnv,env:e.env,creator:e.creator,name:e.name,pageName:e.pageName,description:e.description,steps:e.steps};return Object(o.a)({url:"/testmodule/updateModule",method:"post",data:t})})(t).then(function(t){var a=t.data.status,n=t.data.message;if("success"===a)if("Nothing was updated"!==n){var o=JSON.parse(i()(t.data.id));e.$emit("submit",e.env.toLowerCase()),e.$emit("refreshTable"),e.id=o,e.origEnv=JSON.parse(i()(e.env)).toLowerCase(),e.$message({message:"Update success",type:"success"})}else e.$message({message:"Nothing was updated",type:"info"});else-1!==n.indexOf("not exist")?e.$message({message:e.name+" was not found in server. You should click the Save As Button",type:"error"}):e.$message({message:n,type:"error"})})}).catch(function(){e.$message({message:"Cancel update test module",type:"info"})}))},onClear:function(){this.pageName="",this.isNew=!0,this.id="",this.name="",this.origEnv="",this.env="",this.creator="",this.description="",this.steps=[{page:"",object:"",action:"",actionType:"",input:"",comment:"",edit:!1}]},insertUp:function(e,t){var a={page:"",object:"",action:"",actionType:"",input:"",comment:"",edit:!1};0===t?this.steps.splice(0,0,a):this.steps.splice(t,0,a)},insertDown:function(e,t){var a={page:"",object:"",action:"",actionType:"",input:"",comment:"",edit:!1};f()(this.steps).length-1===t?this.steps.push(a):this.steps.splice(t+1,0,a)},remove:function(e,t){0===t&&1===this.steps.length?this.$message({message:"Do not remove the last line",type:"info"}):this.steps.splice(t,1)},setDetails:function(e){e?(this.isNew=!1,this.id=e.id,this.steps=e.steps,this.env=e.env.toUpperCase(),this.origEnv=e.env.toUpperCase(),this.pageName=e.pageName,this.name=e.name,this.creator=e.creator,this.description=e.description):this.onClear()},onSubmit:function(){this.createNewModule()},onSaveAs:function(){this.createNewModule()},optionTxt:function(e){return-1!==e.indexOf("Browser")?"Browser action only":"Iframe action only"},createNewModule:function(){var e=this,t={};this.validateField()&&(t.pageName=this.pageName,t.env=this.env.toLowerCase(),t.name=this.name,t.creator=this.creator,t.description=this.description,t.steps=this.steps,this.$msgbox({title:"Create New Test Module",message:"Are you sure to create a new test module?",showCancelButton:!0,confirmButtonText:"Confirm",cancelButtonText:"Cancel"}).then(function(){(function(e){var t={env:e.env,creator:e.creator,name:e.name,pageName:e.pageName,description:e.description,steps:e.steps};return Object(o.a)({url:"/testmodule/createModule",method:"post",data:t})})(t).then(function(t){var a=t.data.status,n=t.data.message;if("success"===a){e.isNew=!1;var o=JSON.parse(i()(t.data.id));e.$emit("submit",e.env),e.id=o,e.origEnv=JSON.parse(i()(e.env)).toLowerCase(),e.$emit("refreshTable"),e.$message({message:"Create success",type:"success"})}else e.$message({message:n,type:"error"})})}).catch(function(){e.$message({message:"Cancel create new test module",type:"info"})}))},validateField:function(){var e=this;if(!this.name)return this.$message({message:"Please input module name on the details table",type:"error"}),!1;if(!this.pageName)return this.$message({message:"Please input pageName on the details table",type:"error"}),!1;if(!this.creator)return this.$message({message:"Please input creator on the details table",type:"error"}),!1;if(!this.env)return this.$message({message:"Please input env on the details table",type:"error"}),!1;if(!this.description)return this.$message({message:"Please input description on the details table",type:"error"}),!1;var t=this.steps,a=function(a){var i=t[a].action,o=t[a].actionType,s=(t[a].page,t[a].object),l=(t[a].input,t[a].comment);if(!i)return a++,e.$message({message:"Please select action on the details table at line "+a,type:"error",duration:5e3}),{v:!1};if(!l)return a++,e.$message({message:"Please input comment on the details table at line "+a,type:"error",duration:5e3}),{v:!1};if("Iframe"===i){if(s&&o)return a++,e.$message({message:"If you want to switch to new iframe you don't need to select action type {BackToDefault} at line "+a,type:"error",duration:5e3}),{v:!1};if(!s&&"BackToDefault"!==o)return a++,e.$message({message:"Action {Iframe}  must be selected with action type {BackToDefault} at line "+a,type:"error",duration:5e3}),{v:!1}}var r=["Navigate","Close","SwitchToNewWindow","SwitchToParentWindow"].find(function(e){return e===o});if("Browser"===i&&!r)return a++,e.$message({message:o+" must not be selected with action {Browser} or not null at line "+a,type:"error",duration:5e3}),{v:!1};if("CheckelEmentIf"===i){var c=t.length;if(a==c-1)return a++,e.$message({message:"Action {CheckelEmentIf} must be combining with action {EndIf} at next steps after line: "+a,type:"error",duration:5e3}),{v:!1};for(var u in t)if(!(u<a+1)){var m=t[u].action;if("EndIf"===m)break;if("EndIf"!==m&&u==c-1)return a++,e.$message({message:"Action {CheckelEmentIf} must be combining with action {EndIf} at next steps after line: "+a,type:"error",duration:5e3}),{v:!1}}}n=a};for(var n in t){var i=a(n);if("object"===(void 0===i?"undefined":d()(i)))return i.v}return!0},isPageName:function(e){return"Click"===e||("Sendkeys"===e||("See"===e||("NotSee"===e||("Select"===e||("ContainsText"===e||("NotContainsText"===e||("Store"===e||("CheckelEmentIf"===e||("MouseEventAction"===e||("Iframe"===e||"Wait"===e))))))))))},isInput:function(e){return"Sendkeys"===e||("Select"===e||("ContainsText"===e||("NotContainsText"===e||"Store"===e)))},setBlank:function(e,t){this.steps;return this.steps[t][e]="",!0}}},b=(a("NI31"),Object(c.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"moduleTable"},[a("el-form",{attrs:{inline:!0,"label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",[a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:e.addNewModule}},[e._v("Add Module")])],1),e._v(" "),a("el-form-item",[a("el-tag",{staticClass:"el-icon-warning",attrs:{type:"info"}},[a("span",[e._v("Note: Will clear all details you view before and then create a new one")])])],1)],1),e._v(" "),a("el-form",{attrs:{inline:!0}},[a("ElFormItem",{attrs:{label:"Env"}},[a("el-input",{attrs:{size:"small"},model:{value:e.env,callback:function(t){e.env=t},expression:"env"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Page Name"}},[a("el-input",{attrs:{size:"small"},model:{value:e.pageName,callback:function(t){e.pageName=t},expression:"pageName"}})],1),e._v(" "),a("ElFormItem",{attrs:{label:"Module Name"}},[a("el-input",{attrs:{size:"small"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),a("ElFormItem",{attrs:{label:"Creator"}},[a("el-input",{attrs:{size:"small"},model:{value:e.creator,callback:function(t){e.creator=t},expression:"creator"}})],1)],1),e._v(" "),a("el-form",{attrs:{inline:!0}},[a("ElFormItem",{attrs:{label:"Description"}},[a("el-input",{staticStyle:{width:"420px"},attrs:{size:"small"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1),e._v(" "),a("el-form",[a("el-form-item",[a("el-table",{attrs:{data:e.steps,"header-cell-style":{background:"rgba(234,238,241,.41)"},border:"",size:"small"}},[a("el-table-column",{attrs:{label:"Page Name",prop:"page",width:"135"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isPageName(t.row.action)?a("el-input",{attrs:{size:"mini",title:t.row.page},model:{value:t.row.page,callback:function(a){e.$set(t.row,"page",a)},expression:"props.row.page"}}):a("el-input",{attrs:{size:"mini",placeholder:"Be blank",disabled:e.setBlank("page",t.$index)},model:{value:t.row.page,callback:function(a){e.$set(t.row,"page",a)},expression:"props.row.page"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Object Name",prop:"object",width:"135"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isPageName(t.row.action)?a("el-input",{attrs:{size:"mini",title:t.row.object},model:{value:t.row.object,callback:function(a){e.$set(t.row,"object",a)},expression:"props.row.object"}}):a("el-input",{attrs:{size:"mini",placeholder:"Be blank",disabled:e.setBlank("object",t.$index)},model:{value:t.row.object,callback:function(a){e.$set(t.row,"object",a)},expression:"props.row.object"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Action",prop:"action"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{size:"mini",title:t.row.action},model:{value:t.row.action,callback:function(a){e.$set(t.row,"action",a)},expression:"props.row.action"}},e._l(e.actionMap,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Action Type",prop:"actionType"},scopedSlots:e._u([{key:"default",fn:function(t){return["Browser"===t.row.action|"Iframe"===t.row.action?a("el-select",{attrs:{size:"mini",title:t.row.actionType,clearable:""},model:{value:t.row.actionType,callback:function(a){e.$set(t.row,"actionType",a)},expression:"props.row.actionType"}},e._l(e.actionTypeMap,function(t){return a("el-option",{key:t.id,attrs:{label:t.label,value:t.label}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"5px","padding-left":"10px"}},[e._v(e._s(e.optionTxt(t.id)))])])})):a("el-input",{attrs:{size:"mini",placeholder:"Be blank",disabled:e.setBlank("actionType",t.$index)},model:{value:t.row.actionType,callback:function(a){e.$set(t.row,"actionType",a)},expression:"props.row.actionType"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Input",prop:"input",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.isInput(t.row.action)?a("el-input",{attrs:{size:"mini",title:t.row.input},model:{value:t.row.input,callback:function(a){e.$set(t.row,"input",a)},expression:"props.row.input"}}):a("el-input",{attrs:{size:"mini",placeholder:"Be blank",disabled:e.setBlank("input",t.$index)},model:{value:t.row.input,callback:function(a){e.$set(t.row,"input",a)},expression:"props.row.input"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Comment",prop:"comment",width:"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{size:"mini",title:t.row.comment},model:{value:t.row.comment,callback:function(a){e.$set(t.row,"comment",a)},expression:"props.row.comment"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Edit Step",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-arrow-up"},on:{click:function(a){e.insertUp(t.row.steps,t.$index)}}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"info",icon:"el-icon-arrow-down"},on:{click:function(a){e.insertDown(t.row.steps,t.$index)}}}),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-minus"},on:{click:function(a){e.remove(t.row.steps,t.$index)}}})]}}])})],1)],1),e._v(" "),a("el-form-item",{staticStyle:{float:"right"}},[e.isNew?a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-files"},on:{click:e.onSubmit}},[e._v("Submit")]):a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-document-checked"},on:{click:e.onSave}},[e._v("Save")]),e._v(" "),e.isNew?e._e():a("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small",icon:"el-icon-document-copy"},on:{click:e.onSaveAs}},[e._v("Save As")]),e._v(" "),a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-refresh"},on:{click:e.onClear}},[e._v("Clear")])],1)],1)],1)},[],!1,null,null,null));b.options.__file="ModuleTable.vue";var g={name:"TestModule",components:{searchModule:m,moduleTable:b.exports,actionTips:a("UBpW").a},data:function(){return{envs:[],currentEnvPage:1,envPageSize:5}},created:function(){this.setExistingTable()},computed:{tempTestModule:function(){return this.$store.getters.tempTestModule},origTestModule:function(){return this.$store.getters.origTestModule}},methods:{clearAllModule:function(){this.$refs.searchModule.onClear()},handleEnvSizeChange:function(e){this.currentEnvPage=1,this.envPageSize=e},handleEnvCurrentChange:function(e){this.currentEnvPage=e},onRefresh:function(){this.setExistingTable()},setExistingTable:function(){var e=this;Object(o.a)({url:"/testmodule/getExistingModuleTable",method:"get"}).then(function(t){var a=t.data.status,n=t.data.message;e.envs="success"===a?JSON.parse(i()(n)):[]})},setDetailsToTable:function(e){this.$refs.moduleTableDetails.setDetails(e)},updateSearch:function(e){this.$refs.searchModule.updateSearchTable(e)}}},_=(a("4bby"),Object(c.a)(g,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:19}},[a("el-row",[a("el-col",[a("div",{staticClass:"wrapper"},[a("searchModule",{ref:"searchModule",on:{viewDetails:e.setDetailsToTable,refreshTable:e.setExistingTable}})],1)])],1),e._v(" "),a("el-row",[a("el-col",[a("div",{staticClass:"wrapper"},[a("moduleTable",{ref:"moduleTableDetails",on:{createNewModule:e.clearAllModule,submit:e.updateSearch,refreshTable:e.setExistingTable}})],1)])],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-row",[a("el-col",[a("div",{staticClass:"wrapper"},[a("el-form",[a("el-form-item",[a("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-tickets"}},[e._v("Existing Env")]),e._v(" "),a("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-refresh"},on:{click:e.onRefresh}},[e._v("Refresh")]),e._v(" "),a("el-table",{attrs:{data:e.envs.slice((e.currentEnvPage-1)*e.envPageSize,e.currentEnvPage*e.envPageSize),"cell-style":{background:"rgba(234,238,241,.41)"},size:"mini",border:""}},[a("el-table-column",{attrs:{label:"Env",prop:"env",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"Page Name",prop:"pageName",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{label:"Module Name",prop:"name"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.currentEnvPage,"page-size":e.envPageSize,total:e.envs.length,align:"center",small:"",background:"",layout:"total, prev,next"},on:{"size-change":e.handleEnvSizeChange,"current-change":e.handleEnvCurrentChange}})],1)],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",[a("div",{staticClass:"wrapper"},[a("actionTips")],1)])],1)],1)],1)],1)},[],!1,null,null,null));_.options.__file="index.vue";t.default=_.exports},nSs8:function(e,t,a){"use strict";var n=a("tXWX");a.n(n).a},omC7:function(e,t,a){e.exports={default:a("VeoX"),__esModule:!0}},tXWX:function(e,t,a){}}]);