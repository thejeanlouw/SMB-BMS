(this["webpackJsonpsbm-bms"]=this["webpackJsonpsbm-bms"]||[]).push([[0],{43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(1),c=n.n(a),s=n(34),i=n.n(s),u=(n(43),n(4)),o=n.n(u),l=n(14),d=n(9),p=n(17),b=n(18),h=n(20),f=n(19),j=(n(45),n(37)),m=(n(46),function(e){var t=e.children,n=(e.isGoogleSignIn,Object(j.a)(e,["children","isGoogleSignIn"]));return Object(r.jsx)("button",Object(l.a)(Object(l.a)({className:"".concat(t," custom-button")},n),{},{children:t}))}),v=(n(47),n(16));function O(){return Object(r.jsxs)("div",{className:"main-menu-buttons",children:[Object(r.jsx)(v.c,{to:"/",children:Object(r.jsx)(m,{children:"Welcome"})}),Object(r.jsx)(v.c,{to:"showcase",children:Object(r.jsx)(m,{children:"Showcase"})}),Object(r.jsx)(v.c,{to:"sign-in",children:Object(r.jsx)(m,{children:"Sign-In"})})]})}n(52);function x(){return Object(r.jsxs)("div",{className:"main-page",children:[Object(r.jsx)("span",{className:"header",children:"SMB | BMS"}),Object(r.jsx)(O,{})]})}n(53);var g=n(26);n(63),n(54);g.a.initializeApp({apiKey:"AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",authDomain:"parangelmata.firebaseapp.com",databaseURL:"https://parangelmata.firebaseio.com",projectId:"parangelmata",storageBucket:"parangelmata.appspot.com",messagingSenderId:"824823048409",appId:"1:824823048409:web:3e241472d3babc2c3576c8",measurementId:"G-09Q8GHTRFZ"});var w=g.a.auth(),k=g.a.firestore(),y=g.a,N=n(24),S=n.n(N),A=n(36),I=n.n(A),C=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.deviceDetect)();case 2:return t=e.sent,n=function(e){t.geolocation=JSON.stringify(e)},r=N.getUA,e.prev=5,e.next=8,window.navigator.getBattery();case 8:return t.battery=e.sent,t.battery=JSON.stringify(t.battery),e.next=12,window.navigator.bluetooth.getAvailability();case 12:return t.bluetooth=e.sent,e.next=16,window.navigator.geolocation.getCurrentPosition(n);case 16:e.next=20;break;case 18:e.prev=18,e.t0=e.catch(5);case 20:return t.Uuid=I()(r),e.abrupt("return",Object(l.a)(Object(l.a)({},t),S.a));case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(){return e.apply(this,arguments)}}(),U=new y.auth.GoogleAuthProvider,E=function(){return w.signInWithPopup(U)},F=function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,r,a,c,s,i,u,l,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:if(t=e.sent,n=w.currentUser){e.next=6;break}return e.abrupt("return");case 6:if(null!=t&&null!=t.ua){e.next=8;break}return e.abrupt("return");case 8:return r=k.doc("smb-devices/".concat(t.Uuid)),e.next=12,r.get();case 12:if(a=e.sent,c=n.email,s=n.uid,i=new Date,u=new Date,!1,"https://www.parangelmata.com/plans-pricing",l={},d=t,a.exists){e.next=33;break}return e.prev=23,e.next=26,r.set({email:c,ownerId:s,firstAccessedAt:i,internalLink:false,linkAddress:"https://www.parangelmata.com/plans-pricing",linkProperties:l,deviceInfo:d});case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(23),console.log("ERROR CREATING DEVICE",e.t0.message);case 31:e.next=41;break;case 33:return e.prev=33,e.next=36,r.update({email:c,ownerId:s,lastAccessedAt:u,deviceInfo:d});case 36:e.next=41;break;case 38:e.prev=38,e.t1=e.catch(33),console.log("ERROR UPDATING DEVICE",e.t1.message);case 41:return e.abrupt("return",r);case 42:case"end":return e.stop()}}),e,null,[[23,28],[33,38]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:if((n=e.sent).Uuid){e.next=5;break}return e.abrupt("return");case 5:return r=k.doc("smb-devices/".concat(n.Uuid)),e.next=8,r.get();case 8:if(!(a=e.sent).exists){e.next=17;break}return t&&r.onSnapshot({includeMetadataChanges:!0},t),e.next=13,a.data();case 13:return c=e.sent,e.abrupt("return",{id:n.Uuid,data:c,ref:r});case 17:return e.abrupt("return",{data:{id:0,linkAddress:"https://thejeanlouw.github.io/super-media-bros",linkProperties:{}}});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(o.a.mark((function e(t){var n,r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=w.currentUser,w,n){e.next=5;break}return e.abrupt("return",null);case 5:return r=k.collection("smb-devices").where("ownerId","==",n.uid),e.next=9,r.get();case 9:return a=e.sent,c=[],a.empty||(a.docs.forEach((function(e){c.push(Object(l.a)({id:e.id,uid:e.uid},e.data()))})),t&&r.onSnapshot((function(e){e.docs.forEach((function(e){c.push(Object(l.a)({id:e.id,uid:e.uid},e.data()))})),t([])}))),e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(d.a)(o.a.mark((function e(t,n){var r,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=k.doc("smb-users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=19;break}return a=t.displayName,c=t.email,t.phoneNumber,s=new Date,!1,!1,e.prev=11,e.next=14,r.set(Object(l.a)({displayName:a,email:c,createdAt:s,signedAgreements:false,onboardedComplete:false},n));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(11),console.log("ERROR CREATING USER",e.t0.message);case 19:return e.next=21,F();case 21:return e.abrupt("return",r);case 22:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t,n){return e.apply(this,arguments)}}(),M=n(6),L=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleYes=Object(d.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:E().then((function(t){t.user?e.props.history.push("/info-page"):e.props.history.push("/link-page")}));case 1:case"end":return t.stop()}}),t)}))),e.handleNo=function(){e.props.history.push("/link-page")},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"sign-in-page",children:[Object(r.jsx)("span",{className:"main-text",children:"IS THIS THE MANAGING DEVICE?"}),Object(r.jsxs)("div",{className:"yes-or-no-buttons",children:[Object(r.jsx)(m,{onClick:this.handleYes,children:"Yes"}),Object(r.jsx)(m,{onClick:this.handleNo,children:"No"})]})]})}}]),n}(c.a.Component),P=Object(M.f)(L),T=(n(60),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).getLinkFromFireStore=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(r.getChangeFromFireStore);case 2:t=e.sent,r.setState({device:t});case 4:case"end":return e.stop()}}),e)}))),r.getChangeFromFireStore=function(){var e=Object(d.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({device:{data:t.data(),id:t.id}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.componentDidMount=Object(d.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.getLinkFromFireStore();case 1:case"end":return e.stop()}}),e)}))),r.state={device:null},r}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state.device,t="";return null!=e&&null!=e.data&&null!=e.data.linkAddress?(t=e.data.linkAddress,console.log("link address: ",t,"".concat(t)),Object(r.jsx)("div",{className:"iframe",children:Object(r.jsx)("iframe",{className:"frame",id:e.id,url:t,src:t,title:"",width:"100%",height:"100%",allowFullScreen:!0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0"})})):Object(r.jsx)("div",{children:Object(r.jsx)("span",{children:"NO LINK"})})}}]),n}(c.a.Component)),B=(n(61),function(e){var t=e.device,n=e.index,a="Device ".concat(n);return t.displayName?a=t.displayName:t.uid&&(a=t.uid),t.Uuid&&(a=t.Uuid),t.id&&(a=t.id),Object(r.jsx)("div",{className:"device-list-item",children:Object(r.jsx)("h3",{className:"display-name",children:a})},t.id)}),J=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={devices:null},e.onListChange=function(){var t=Object(d.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.setState({devices:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;R(null).then((function(t){var n=t;n?e.setState({devices:n}):e.props.history.push("sign-in")}))}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"info-page",children:Object(r.jsx)("div",{className:"device-list",children:this.state.devices?this.state.devices.map((function(e){return Object(r.jsx)(B,{device:e})})):null})})}}]),n}(a.Component),K=Object(M.f)(J),V=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).unsubscribeFromAuth=null,e.state={currentUser:null},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=Object(N.deviceDetect)();this.unsubscribeFromAuth=w.onAuthStateChanged(function(){var n=Object(d.a)(o.a.mark((function n(r){var a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=6;break}return n.next=3,G(r,t);case 3:a=n.sent,console.log("userAuth: ",r),a.onSnapshot((function(n){e.setState({currentUser:Object(l.a)({id:n.id},n.data),device:t},(function(){return console.log("currentUser: ",e.state.currentUser)}))}));case 6:e.setState({currentUser:r});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth(),w.signOut()}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(v.b,{children:Object(r.jsxs)(M.c,{children:[Object(r.jsx)(M.a,{path:"/sign-in",component:P}),Object(r.jsx)(M.a,{path:"/info-page",component:K}),Object(r.jsx)(M.a,{path:"/link-page",component:T}),Object(r.jsx)(M.a,{path:"/",component:x})]})})})}}]),n}(c.a.Component),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(v.a,{children:Object(r.jsx)(V,{})})}),document.getElementById("root")),H()}},[[62,1,2]]]);
//# sourceMappingURL=main.9db8c92d.chunk.js.map