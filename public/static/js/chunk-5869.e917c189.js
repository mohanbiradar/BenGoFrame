(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5869"],{"2zKP":function(e,t,r){"use strict";r.d(t,"e",function(){return s}),r.d(t,"g",function(){return a}),r.d(t,"f",function(){return u}),r.d(t,"b",function(){return i}),r.d(t,"d",function(){return o}),r.d(t,"c",function(){return l}),r.d(t,"a",function(){return c});var n=r("t3Un");function s(){return Object(n.a)({url:"/testresult/getAllTestResults",method:"get"})}function a(e){var t={runId:e};return Object(n.a)({url:"/testresult/getTestResultByRunId",method:"post",data:t})}function u(){return n.a.defaults.baseURL}function i(e){var t={runId:e};return Object(n.a)({url:"/testresult/deleteTestResultByRunId",method:"post",data:t})}function o(){return Object(n.a)({url:"/testresult/getAllAPITestResults",method:"get"})}function l(e){var t={runId:e};return Object(n.a)({url:"/testresult/getAPITestResultByRunId",method:"post",data:t})}function c(e){var t={runId:e};return Object(n.a)({url:"/testresult/deleteAPITestResultByRunId",method:"post",data:t})}},"9x5b":function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("Mpsw"),s=r("sEe0"),a=r.n(s);function u(e,t){var r=new a.a(t.target,{text:function(){return e}});r.on("success",function(){n.default.prototype.$message({message:"Copy successfully",type:"success",duration:1500}),r.off("error"),r.off("success"),r.destroy()}),r.on("error",function(){n.default.prototype.$message({message:"Copy failed",type:"error"}),r.off("error"),r.off("success"),r.destroy()}),r.onClick(t)}},"BkV+":function(e,t,r){"use strict";r.r(t);var n=r("cLjf"),s=r.n(n),a=r("rerW"),u=r.n(a),i=r("hDQ3"),o=r.n(i),l=r("T+J7"),c=r("yhYA"),d=r("9x5b"),f=r("2zKP"),m={name:"ExecuteForm",data:function(){var e=this;return{totalCases:0,finishedCase:0,afterRun:!1,runId:"",runStatus:"Non any tests running",disableRerun:!0,existingSuites:[],pre:0,ruleForm:{suite:"",grid:"",threadCount:"1",reRun:"false"},rules:{suite:[{required:!0,message:"Please input test suite",trigger:"blur"},{validator:function(t,r,n){""===r?n():e.existingSuites.find(function(e){return e.testSuite===r})||n(new Error(r+" is not existing in server."))},trigger:"blur"}],grid:[{required:!0,message:"Please input test grid.",trigger:"blur"}],threadCount:[{required:!0,message:"Please input test threadCount",trigger:"blur"}]}}},methods:{handleCopy:function(e,t){Object(d.a)(e,t)},setExistingSuites:function(e){this.existingSuites=e},onRun:function(){var e=this,t=this.validateFiled();if("Passed"===t){var r=this.ruleForm.suite,n=this.existingSuites;this.pre=0,n.find(function(e){return e.testSuite===r})?(Object(l.d)(r).then(function(t){var r=t.data.message.filter(function(e){return"Y"===e.execute});e.totalCases=r.length}),Object(c.b)(this.ruleForm).then(function(t){var r=t.data.runId,n=t.data.message;e.runStatus=n,e.runId=r,e.afterRun=!0,e.$emit("changeSize",550),e.$message({message:"Test is running. For more detials, Please copy runId and move to Test Report Page"})})):this.$message({message:r+" is not existing in server.",type:"error"})}else this.$message({message:t,type:"error"})},onClear:function(){var e=this,t=this.runStatus;"Test is running"===t||"Finished"===t?this.$msgbox({title:"Clear All Config Fields",closeOnClickModal:!1,message:"Are you sure to clear config field? RunId is "+this.runId,confirmButtonText:"Clear",cancelButtonText:"Cancel",showCancelButton:!0}).then(function(){e.rollBalck()}).catch(function(){e.$message({message:"Clear is cancel"})}):this.rollBalck()},rollBalck:function(){this.ruleForm.suite="",this.ruleForm.grid="",this.ruleForm.threadCount="1",this.ruleForm.reRun="false",this.$refs.ruleForm.clearValidate(),this.afterRun=!1,this.runId="",this.runStatus="Non any tests running",this.totalCases=0,this.finishedCase=0,this.pre=0,this.$emit("changeSize",430)},validateFiled:function(){var e=this.ruleForm.suite,t=this.ruleForm.grid,r=this.ruleForm.threadCount,n=this.ruleForm.reRun;return e?t?r?n?"Passed":"Please input reRun parameter":"Please input thread count":"Please input grid address":"Please input suite name"},onRefresh:function(){var e=this,t=this.runId;if(t){var r=this.totalCases;setTimeout(function(){Object(f.g)(t).then(function(t){var n=t.data.message.logs,s=t.data.message.status,a=n.length;"Finished"===s?(e.pre=100,e.runStatus=s):e.pre=Math.ceil(a/r*100)})},500)}else this.$message({message:"Please input the config form below and run the test",type:"error"})},customColorMethod:function(e){return e<30?"#909399":e<70?"#e6a23c":"#67c23a"}}},p=(r("Bsa9"),r("ZrdR")),h=Object(p.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ExecuteForm"},[r("el-row",[r("el-col",[r("div",{staticClass:"wrapper"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"Total Cases"}},[r("el-button",{attrs:{type:"info",size:"mini"}},[e._v(e._s(e.totalCases))])],1),e._v(" "),r("el-form-item",{attrs:{label:"Run Status"}},["Finished"!==e.runStatus?r("el-button",{attrs:{type:"danger",size:"mini"}},[e._v(e._s(e.runStatus))]):r("el-button",{attrs:{type:"success",size:"mini"}},[e._v(e._s(e.runStatus))])],1),e._v(" "),r("el-form-item",[r("el-tooltip",{attrs:{content:"Refresh me and check the progress",placement:"right"}},[r("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-refresh"},on:{click:e.onRefresh}},[e._v("Refresh")])],1)],1)],1),e._v(" "),e.afterRun?r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"Run Id"}},[r("el-tooltip",{attrs:{content:"Click me copy",placement:"right"}},[r("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(t){e.handleCopy(e.runId,t)}}},[e._v(e._s(e.runId))])],1)],1),e._v(" "),r("el-tag",{staticClass:"el-icon-warning",attrs:{type:"info"}},[r("span",[e._v("Note: For more details. Please copy runId and move to Test Report Page")])]),e._v(" "),r("el-progress",{attrs:{percentage:e.pre,color:e.customColorMethod}}),e._v(" "),r("br")],1):e._e()],1)])],1),e._v(" "),r("el-row",[r("el-col",[r("div",{staticClass:"wrapper"},[r("el-form",{ref:"ruleForm",attrs:{rules:e.rules,model:e.ruleForm,"label-width":"120px","label-position":"left"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"Test Suite",prop:"suite"}},[r("el-tooltip",{attrs:{content:"Input existing suite name",placement:"right-end"}},[r("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.suite,callback:function(t){e.$set(e.ruleForm,"suite",t)},expression:"ruleForm.suite"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Test Grid",prop:"grid"}},[r("el-tooltip",{attrs:{content:"Grid address. You dont need input port. Default port 4444",placement:"right-end"}},[r("el-input",{staticStyle:{width:"60%"},model:{value:e.ruleForm.grid,callback:function(t){e.$set(e.ruleForm,"grid",t)},expression:"ruleForm.grid"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Test Thread",prop:"threadCount"}},[r("el-tooltip",{attrs:{content:"Run test in parallel",placement:"right"}},[r("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.threadCount,callback:function(t){e.$set(e.ruleForm,"threadCount",t)},expression:"ruleForm.threadCount"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Rerun Test",prop:"reRun"}},[r("el-tooltip",{attrs:{content:"Rerun function will update next version",placement:"right"}},[r("el-input",{staticStyle:{width:"30%"},attrs:{disabled:e.disableRerun},model:{value:e.ruleForm.reRun,callback:function(t){e.$set(e.ruleForm,"reRun",t)},expression:"ruleForm.reRun"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"Run Test"}},[r("el-button",{staticStyle:{background:"hsl(214, 37%, 28%)",color:"#fff"},attrs:{type:"info",size:"small"},on:{click:e.onRun}},[e._v("Run")]),e._v(" "),r("el-button",{attrs:{type:"info",size:"small"},on:{click:e.onClear}},[e._v("Clear")])],1)],1),e._v(" "),r("br")],1)])],1)],1)},[],!1,null,null,null);h.options.__file="ExecuteForm.vue";var g={name:"TestExecute",components:{executeForm:h.exports},created:function(){this.getSuiteNames()},data:function(){return{suiteNamesTable:[],currentPage:1,total:0,pageSize:10,size:"430"}},methods:{setSize:function(e){this.size=e},getSuiteNames:function(){var e=this;return o()(s.a.mark(function t(){var r,n,a,i,o,c,d,f,m,p,h,g,v;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.suiteNamesTable=[],r=e.suiteNamesTable,t.next=4,Object(l.e)();case 4:if(n=t.sent,a=n.data.status,i=n.data.message,"success"!==a){t.next=39;break}for(o in i)r.push({testSuite:i[o]});c=[],d=function(e){if(c.find(function(t){return t.testSuite===e.testSuite}))return"continue";c.push(e)},f=!0,m=!1,p=void 0,t.prev=14,h=u()(r);case 16:if(f=(g=h.next()).done){t.next=24;break}if(v=g.value,"continue"!==d(v)){t.next=21;break}return t.abrupt("continue",21);case 21:f=!0,t.next=16;break;case 24:t.next=30;break;case 26:t.prev=26,t.t0=t.catch(14),m=!0,p=t.t0;case 30:t.prev=30,t.prev=31,!f&&h.return&&h.return();case 33:if(t.prev=33,!m){t.next=36;break}throw p;case 36:return t.finish(33);case 37:return t.finish(30);case 38:r=c;case 39:return e.$refs.executeForm.setExistingSuites(r),t.abrupt("return",r);case 41:case"end":return t.stop()}},t,e,[[14,26,30,38],[31,,33,37]])}))()},handleSizeChange:function(e){this.currentPage=1,this.pageSize=e},handleCurrentChange:function(e){this.currentPage=e}}},v=(r("JX58"),Object(p.a)(g,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("br"),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("el-row",{attrs:{type:"flex",justify:"center",gutter:20}},[r("el-col",{attrs:{span:8}},[r("executeForm",{ref:"executeForm",on:{changeSize:e.setSize}})],1),e._v(" "),r("el-col",{attrs:{span:4}},[r("div",{staticClass:"wrapper",style:{height:e.size+"px"}},[r("el-form",[r("el-form-item",[r("el-button",{attrs:{type:"info",size:"small",icon:"el-icon-tickets"}},[e._v("Existing Suite")]),e._v(" "),r("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-refresh"},on:{click:e.getSuiteNames}},[e._v("Refresh")]),e._v(" "),r("el-table",{attrs:{data:e.suiteNamesTable.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),"cell-style":{background:"rgba(234,238,241,.41)"},size:"mini",border:""}},[r("el-table-column",{attrs:{label:"Test Suite",prop:"testSuite"}})],1),e._v(" "),r("el-pagination",{attrs:{align:"center",small:"",background:"","current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev,next",total:e.suiteNamesTable.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)])],1)],1)},[],!1,null,null,null));v.options.__file="index.vue";t.default=v.exports},Bsa9:function(e,t,r){"use strict";var n=r("Kgfb");r.n(n).a},F4qw:function(e,t,r){},JX58:function(e,t,r){"use strict";var n=r("F4qw");r.n(n).a},Kgfb:function(e,t,r){},"T+J7":function(e,t,r){"use strict";r.d(t,"d",function(){return s}),r.d(t,"e",function(){return a}),r.d(t,"k",function(){return u}),r.d(t,"j",function(){return i}),r.d(t,"i",function(){return o}),r.d(t,"h",function(){return l}),r.d(t,"a",function(){return c}),r.d(t,"f",function(){return d}),r.d(t,"b",function(){return f}),r.d(t,"c",function(){return m}),r.d(t,"g",function(){return p});var n=r("t3Un");function s(e){var t={suiteName:e};return Object(n.a)({url:"/testsuite/getTestSuiteByName",method:"post",data:t})}function a(){return Object(n.a)({url:"/testsuite/getTestSuiteNames",method:"get"})}function u(e,t){var r={suiteName:t,update:e};return Object(n.a)({url:"/testsuite/updateSingleTestSuite",method:"post",data:r})}function i(e,t){var r={suiteName:t,update:e};return Object(n.a)({url:"/testsuite/updateNewCaseToTestSuite",method:"post",data:r})}function o(e){var t={suiteName:e};return Object(n.a)({url:"/testsuite/setAllExecuteY",method:"post",data:t})}function l(e){var t={suiteName:e};return Object(n.a)({url:"/testsuite/setAllExecuteN",method:"post",data:t})}function c(e,t){var r={testName:e,suiteName:t};return Object(n.a)({url:"/testsuite/deleteSingleTestCase",method:"post",data:r})}function d(e,t){var r={caseList:e,suiteName:t};return Object(n.a)({url:"/testsuite/importMultipleTestCase",method:"post",data:r})}function f(e){var t={suiteName:e};return Object(n.a)({url:"/testsuite/dropTestSuite",method:"post",data:t})}function m(e,t){var r={id:e,suiteName:t};return Object(n.a)({url:"/testsuite/getTestCaseById",method:"post",data:r})}function p(e,t){var r={origSuiteName:e,newSuiteName:t};return Object(n.a)({url:"/testsuite/modifySuiteName",method:"post",data:r})}},yhYA:function(e,t,r){"use strict";r.d(t,"b",function(){return s}),r.d(t,"a",function(){return a});var n=r("t3Un");function s(e){var t=e;return Object(n.a)({url:"/automation/runTest",method:"post",data:t})}function a(e){var t=e;return Object(n.a)({url:"/automation/runAPI",method:"post",data:t})}}}]);