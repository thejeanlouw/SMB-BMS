(this["webpackJsonpsbm-bms"]=this["webpackJsonpsbm-bms"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),s=n(35),i=n.n(s),u=(n(43),n(4)),o=n.n(u),l=n(11),d=n(6),p=n(17),h=n(18),b=n(20),f=n(19),v=(n(45),n(26)),j=(n(46),function(e){var t=e.children,n=(e.isGoogleSignIn,Object(v.a)(e,["children","isGoogleSignIn"]));return Object(a.jsx)("button",Object(l.a)(Object(l.a)({className:"".concat(t," custom-button")},n),{},{children:t}))}),m=(n(47),n(16));function O(){return Object(a.jsxs)("div",{className:"main-menu-buttons",children:[Object(a.jsx)(m.c,{to:"/",children:Object(a.jsx)(j,{children:"Welcome"})}),Object(a.jsx)(m.c,{to:"link",children:Object(a.jsx)(j,{children:"Showcase"})}),Object(a.jsx)(m.c,{to:"signin",children:Object(a.jsx)(j,{children:"Sign-In"})})]})}n(52);function x(){return Object(a.jsxs)("div",{className:"main-page",children:[Object(a.jsx)("span",{className:"header",children:"SMB | BMS"}),Object(a.jsx)(O,{})]})}n(53);var g=n(25);n(66),n(54);g.a.initializeApp({apiKey:"AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",authDomain:"parangelmata.firebaseapp.com",databaseURL:"https://parangelmata.firebaseio.com",projectId:"parangelmata",storageBucket:"parangelmata.appspot.com",messagingSenderId:"824823048409",appId:"1:824823048409:web:3e241472d3babc2c3576c8",measurementId:"G-09Q8GHTRFZ"});var k=g.a.auth(),N=g.a.firestore(),w=g.a,y=n(27),I=n.n(y),S=n(37),C=n.n(S),A=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.deviceDetect)();case 2:return n=e.sent,a=y.getUA,e.prev=4,e.next=7,window.navigator.getBattery();case 7:r=e.sent,n.battery={isCharging:null===r||void 0===r?void 0:r.charging,timeUntilCharged:null===r||void 0===r?void 0:r.chargingTime,batteryLevel:null===r||void 0===r?void 0:r.level,timeUntilEmpty:null===r||void 0===r?void 0:r.dischargingTime},e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("COULD NOT GET BATTERY INFO");case 14:return e.prev=14,e.next=17,window.navigator.bluetooth.getAvailability();case 17:n.bluetooth=e.sent,e.next=23;break;case 20:e.prev=20,e.t1=e.catch(14),console.error("COULD NOT GET BLUETOOTH INFO");case 23:return n.Uuid=C()(a),e.abrupt("return",Object(l.a)(Object(l.a)({},n),I.a));case 25:case"end":return e.stop()}}),e,null,[[4,11],[14,20]])})));return function(t){return e.apply(this,arguments)}}(),D=new w.auth.GoogleAuthProvider,U=function(){return k.signInWithPopup(D)},E=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,r,c,s,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,A();case 3:if((t=e.sent).id&&(t.Uuid=t.id),n=k.currentUser){e.next=8;break}return e.abrupt("return");case 8:if(null!=t&&null!=t.ua){e.next=10;break}return e.abrupt("return");case 10:return a=N.doc("smb-devices/".concat(t.Uuid)),e.next=13,a.get();case 13:if(r=e.sent,c=n.email,s=n.uid,i=new Date,u=new Date,!1,"https://www.parangelmata.com/plans-pricing",l={},d=t,r.exists){e.next=33;break}return e.prev=23,e.next=26,a.set({email:c,ownerId:s,firstAccessedAt:i,internalLink:false,linkAddress:"https://www.parangelmata.com/plans-pricing",linkProperties:l,deviceInfo:d});case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(23),console.log("ERROR CREATING DEVICE",e.t0.message);case 31:e.next=41;break;case 33:return e.prev=33,e.next=36,a.update({email:c,ownerId:s,lastAccessedAt:u,deviceInfo:d});case 36:e.next=41;break;case 38:e.prev=38,e.t1=e.catch(33),console.log("ERROR UPDATING DEVICE",e.t1.message);case 41:return e.abrupt("return",a);case 42:case"end":return e.stop()}}),e,null,[[23,28],[33,38]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=N.doc("smb-devices/".concat(t)),e.next=5,a.get();case 5:e.sent.exists&&a.update({linkAddress:n});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=N.doc("smb-devices/".concat(t)),e.next=5,a.get();case 5:e.sent.exists&&a.update({displayName:n});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,A();case 3:if((a=e.sent).id&&(a.Uuid=a.id),a.Uuid){e.next=7;break}return e.abrupt("return");case 7:return null!=n&&(a.Uuid=n),r=N.doc("smb-devices/".concat(a.Uuid)),e.next=12,r.get();case 12:if(!(c=e.sent).exists){e.next=21;break}return t&&r.onSnapshot({includeMetadataChanges:!0},t),e.next=17,c.data();case 17:return s=e.sent,e.abrupt("return",{id:a.Uuid,data:s,ref:r});case 21:return e.abrupt("return",{data:{id:0,linkAddress:"https://thejeanlouw.github.io/super-media-bros",linkProperties:{}}});case 22:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=k.currentUser,k,n){e.next=4;break}return e.abrupt("return",null);case 4:return a=N.collection("smb-devices").where("ownerId","==",n.uid),e.next=7,a.get();case 7:return r=e.sent,c=[],r.empty||(r.docs.forEach((function(e){c.push(Object(l.a)({id:e.id,uid:e.uid},e.data()))})),t&&a.onSnapshot((function(e){e.docs.forEach((function(e){c.push(Object(l.a)({id:e.id,uid:e.uid},e.data()))})),t([])}))),e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var a,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=N.doc("smb-users/".concat(t.uid)),e.next=6,a.get();case 6:if(e.sent.exists){e.next=20;break}return r=t.displayName,c=t.email,t.phoneNumber,s=new Date,!1,!1,e.prev=12,e.next=15,a.set(Object(l.a)({displayName:r,email:c,createdAt:s,signedAgreements:false,onboardedComplete:false},n));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(12),console.log("ERROR CREATING USER",e.t0.message);case 20:return e.abrupt("return",a);case 21:case"end":return e.stop()}}),e,null,[[12,17]])})));return function(t,n){return e.apply(this,arguments)}}(),M=n(7),B=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleYes=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:U().then((function(t){t.user?e.props.history.push("/info"):e.props.history.push("/link")}));case 1:case"end":return t.stop()}}),t)}))),e.handleNo=function(){e.props.history.push("/link")},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"sign-in-page",children:[Object(a.jsx)("span",{className:"main-text",children:"IS THIS THE MANAGING DEVICE?"}),Object(a.jsxs)("div",{className:"yes-or-no-buttons",children:[Object(a.jsx)(j,{onClick:this.handleYes,children:"Yes"}),Object(a.jsx)(j,{onClick:this.handleNo,children:"No"})]})]})}}]),n}(c.a.Component),H=Object(M.f)(B),P=(n(60),function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).getLinkFromFireStore=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(a.getChangeFromFireStore);case 2:t=e.sent,a.setState({device:t});case 5:case"end":return e.stop()}}),e)}))),a.getChangeFromFireStore=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({device:{data:t.data(),id:t.id}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getLinkFromFireStore();case 1:case"end":return e.stop()}}),e)}))),a.state={device:null},a}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.device,t="";return null!=e&&null!=e.data&&null!=e.data.linkAddress?(t=e.data.linkAddress,console.log("link address: ",t,"".concat(t)),Object(a.jsx)("div",{className:"iframe",children:Object(a.jsx)("iframe",{className:"frame",id:e.id,url:t,src:t,title:"",width:"100%",height:"100%",allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0"})})):Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:"NO LINK"})})}}]),n}(c.a.Component)),V=(n(61),function(e){var t=e.device,n=e.clickHandler,r="Device";t.displayName?r=t.displayName:t.id&&(r=t.id);return Object(a.jsx)("div",{className:"device-list-item",onClick:function(){n(t.id)},children:Object(a.jsx)("h3",{className:"display-name",children:r})},t.id)}),K=(n(62),function(e){var t=e.handleChange,n=e.label,r=e.value,c=Object(v.a)(e,["handleChange","label","value"]);return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("input",Object(l.a)({className:"form-input",value:r,onChange:t},c)),n?Object(a.jsx)("label",{className:"".concat(r?"shrink":""," form-input-label"),children:n}):null]})}),Y=(n(63),function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleChange=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target,r=n.name,c=n.value,(s=a.state.deviceInfo).data[r]=c,a.setState({deviceInfo:s});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSubmit=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a.props.submitHandler&&a.props.submitHandler(a.state.deviceInfo);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={deviceInfo:a.props.device},a}return Object(h.a)(n,[{key:"render",value:function(){var e,t,n=this.state.deviceInfo.data,r=n.linkAddress,c=n.displayName;if(null===(e=this.state.deviceInfo)||void 0===e||null===(t=e.data)||void 0===t?void 0:t.deviceInfo){var s=this.state.deviceInfo.data.deviceInfo,i=s.vendor,u=s.os,o=s.osVersion,l=s.model;return Object(a.jsxs)("div",{className:"device-info",children:[Object(a.jsx)("span",{className:"header",children:"Device Info:"}),Object(a.jsxs)("div",{className:"all-details",children:[Object(a.jsxs)("div",{className:"details-group",children:[Object(a.jsx)("span",{className:"detailName",children:"Vendor"}),Object(a.jsx)("span",{className:"detail-value",children:i})]}),Object(a.jsxs)("div",{className:"details-group",children:[Object(a.jsx)("span",{className:"detailName",children:"OS"}),Object(a.jsx)("span",{className:"detail-value",children:u})]}),Object(a.jsxs)("div",{className:"details-group",children:[Object(a.jsx)("span",{className:"detailName",children:"OS Version"}),Object(a.jsx)("span",{className:"detail-value",children:o})]}),Object(a.jsxs)("div",{className:"details-group",children:[Object(a.jsx)("span",{className:"detailName",children:"Model"}),Object(a.jsx)("span",{className:"detail-value",children:l})]})]}),Object(a.jsxs)("form",{className:"device-changes",onSubmit:this.handleSubmit,children:[Object(a.jsx)(K,{value:c,name:"displayName",handleChange:this.handleChange,label:"Display Name"}),Object(a.jsx)(K,{value:r,name:"linkAddress",handleChange:this.handleChange,label:"Link Address"}),Object(a.jsx)(j,{type:"submit",children:"Submit"})]})]})}return null}}]),n}(r.Component)),W=(n(64),function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={devices:null,selectedDevice:null},e.onListChange=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.setState({devices:n});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onItemSelected=function(){var t=Object(d.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(null,n);case 2:a=t.sent,e.setState({selectedDevice:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleInfoChange=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(n.id,n.data.linkAddress);case 2:return t.next=4,T(n.id,n.data.displayName);case 4:R(null).then((function(t){var n=t;n?e.setState({devices:n}):e.props.history.push("signin")}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;R(null).then((function(t){var n=t;n?e.setState({devices:n}):e.props.history.push("signin")})),L().then((function(t){e.setState({selectedDevice:t})}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"info-page",children:[Object(a.jsxs)("div",{className:"device-list",children:[Object(a.jsx)("div",{className:"device-list-header",children:"Device List"}),Object(a.jsx)("div",{className:"all-devices",children:this.state.devices?this.state.devices.map((function(t){return Object(a.jsx)(V,{device:t,clickHandler:e.onItemSelected},t.id)})):null}),Object(a.jsx)("div",{className:"link-page",children:Object(a.jsx)(m.c,{to:"link",children:"LINK PAGE"})})]}),Object(a.jsx)("div",{className:"details",children:this.state.selectedDevice?Object(a.jsx)(Y,{device:this.state.selectedDevice,submitHandler:this.handleInfoChange},this.state.selectedDevice.id):null})]})}}]),n}(r.Component)),z=Object(M.f)(W),J=function(e){Object(b.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=k.onAuthStateChanged(function(){var t=Object(d.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=10;break}return console.log("userAuth: ",n),t.next=5,G(n);case 5:return a=t.sent,t.next=8,E();case 8:t.sent,a.onSnapshot((function(t){e.setState({currentUser:Object(l.a)({id:t.id},t.data())},(function(){return console.log("currentUser: ",e.state.currentUser)}))}));case 10:e.setState({currentUser:n});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.setState({currentUser:null}),this.unsubscribeFromAuth(),k.signOut()}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(m.b,{children:Object(a.jsxs)(M.c,{children:[Object(a.jsx)(M.a,{path:"/signin",component:H}),Object(a.jsx)(M.a,{path:"/info",component:z}),Object(a.jsx)(M.a,{path:"/link",component:P}),Object(a.jsx)(M.a,{path:"/",component:x})]})})})}}]),n}(c.a.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(m.a,{children:Object(a.jsx)(J,{})})}),document.getElementById("root")),Q()}},[[65,1,2]]]);
//# sourceMappingURL=main.0ed0f491.chunk.js.map