(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c7a68eb"],{"865f":function(t,e,a){},b4ff:function(t,e,a){"use strict";var n=a("865f"),i=a.n(n);i.a},ee72:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification"},[t._m(0),a("div",{staticClass:"notification-content"},[t._m(1),a("div",{staticClass:"notification-content-crossing"}),a("div",{staticClass:"notification-content-main"},[a("div",{staticClass:"notification-content-main-title"},[t._v(" 债权转让通知书 ")]),a("div",[a("input",{attrs:{type:"text"},domProps:{value:t.InitMsg.personName}})]),a("div",[t._v("本公司/本人(债权人)享有的对你方(债务人)如下债权,现已转让给资产公司名字。自你方收到本通知函之日起,本公司/本人与你方债权偾务关系消灭,由你方向前述新债权人履行债务清偿义务。")]),a("div",{staticClass:"notification-content-main-table"},[t._m(2),a("div",{staticClass:"notification-content-main-table-content"},[a("span",[t._v(t._s(t.InitMsg.debtName))]),a("span",[t._v(t._s(t.InitMsg.personName))]),a("span",[t._v(t._s(t.InitMsg.idCard))]),a("span",[t._v(t._s(t.InitMsg.personReason))]),a("span",[t._v(t._s(t.InitMsg.amountThis))])])]),a("div",{staticClass:"notification-content-main-title"},[t._v("特此通知！")]),t._m(3),a("div",{staticClass:"notification-content-main-message"},[t._v("债权人签字: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.SubmitData.obligorSign,expression:"SubmitData.obligorSign"}],attrs:{type:"text"},domProps:{value:t.SubmitData.obligorSign},on:{input:function(e){e.target.composing||t.$set(t.SubmitData,"obligorSign",e.target.value)}}})]),a("div",{staticClass:"notification-content-main-message"},[t._v("身份证/统一社会信用代码 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.SubmitData.cardId,expression:"SubmitData.cardId"}],attrs:{type:"text"},domProps:{value:t.SubmitData.cardId},on:{input:function(e){e.target.composing||t.$set(t.SubmitData,"cardId",e.target.value)}}})]),a("div",{staticClass:"notification-content-main-message"},[a("span",[t._v("时间")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.SubmitData.obligorDate,expression:"SubmitData.obligorDate"}],attrs:{type:"text"},domProps:{value:t.SubmitData.obligorDate},on:{input:function(e){e.target.composing||t.$set(t.SubmitData,"obligorDate",e.target.value)}}})]),a("div",{staticClass:"notification-content-main-button"},[a("button",{on:{click:t.Submit}},[t._v("提交")])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification-title"},[a("span",{staticClass:"notification-title-go1"},[t._v("我的审批")]),a("span",{staticClass:"notification-title-separator"},[t._v(" / ")]),a("span",{staticClass:"notification-title-go2"},[t._v("债权转让通知书")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification-content-progress-map"},[a("div",{staticClass:"promise-content-progress-map-finished"},[a("span"),t._v(" 1.资产评估 ")]),a("div",{staticClass:"promise-content-progress-map-finished"},[a("span"),t._v(" 2.债权转让协议 ")]),a("div",{staticClass:"promise-content-progress-map-highlight"},[a("span"),t._v(" 3.债权转让确认书 ")]),a("div",[a("span"),t._v(" 4.债权确认书 ")]),a("div",[a("span"),t._v(" 5.债权转让通知书 ")]),a("div",[a("span"),t._v(" 6.委托代理销售合同 ")]),a("div",[a("span"),t._v(" 7.催款函 ")]),a("div",[a("span"),t._v(" 8.和解协议 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification-content-main-table-title"},[a("span",[t._v("债权人姓名/名称")]),a("span",[t._v("债务人姓名/名称")]),a("span",[t._v("债务人身份证号码或统一社会信用代码")]),a("span",[t._v("债权债务关系形成原因")]),a("span",[t._v("债权债务金额（元）")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notification-content-main-message"},[t._v("债权人盖章: "),a("button",[t._v("上传电子章")])])}],s=(a("96cf"),a("1da1")),o={data:function(){return{InitMsg:{},SubmitData:{propertId:"",noticeNo:"",obligorSeal:"111",cardId:"",obligorSign:"",obligorDate:""}}},methods:{InitData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=window.sessionStorage.getItem("relativePerId"),console.log(a),n=new FormData,n.append("relativePerId",a),e.next=6,t.$http({method:"post",url:"/api/api/busAssignmentNoticeController/initialize",data:n,headers:{"Content-Type":"multipart/form-data"}});case 6:i=e.sent,s=i.data,t.InitMsg=s.data,console.log(t.InitMsg);case 10:case"end":return e.stop()}}),e)})))()},Submit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,n,i,s,o,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t.SubmitData.propertId=window.sessionStorage.getItem("propertId"),t.SubmitData.noticeNo=t.InitMsg.assignmentAgreementNo,a=new FormData,t.SubmitData)a.append(n,t.SubmitData[n]);return e.next=6,t.$http({method:"post",url:"/api/api/busAssignmentNoticeController/insertSelective",data:a,headers:{"Content-Type":"multipart/form-data"}});case 6:if(i=e.sent,s=i.data,"200"===s.resultCode){e.next=10;break}return e.abrupt("return",t.$message.error(s.resultMessage));case 10:return o=new FormData,o.append("propertId",window.sessionStorage.getItem("propertId")),o.append("stage","5"),e.next=15,t.$http({method:"post",url:"/api/api/busPropertController/updateStage",data:o,headers:{"Content-Type":"multipart/form-data"}});case 15:if(r=e.sent,c=r.data,"200"===c.resultCode){e.next=19;break}return e.abrupt("return",t.$message.error(c.resultMessage));case 19:t.$emit("onChangeFragment","SalesAgreement");case 20:case"end":return e.stop()}}),e)})))()}},created:function(){this.InitData()}},r=o,c=(a("b4ff"),a("2877")),p=Object(c["a"])(r,n,i,!1,null,"c24d797c",null);e["default"]=p.exports}}]);