(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{767:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});var a=n(16),i=n(17),r=n(19),u=n(18),l=n(20),o=n(0),d=n.n(o),c=n(12),m=n.n(c),s=n(246),h=n(771),g=n(298),f=n.n(g),E=(n(299),n(263),n(14)),b=n.n(E),p=function(){return d.a.createElement("div",null,d.a.createElement(f.a,{type:"Oval",color:"#005696",height:"100",width:"100"}))},k=b()({loader:function(){return n.e(45).then(n.bind(null,755))},loading:p}),v=b()({loader:function(){return n.e(46).then(n.bind(null,760))},loading:p}),w=b()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(47)]).then(n.bind(null,756))},loading:p}),q=b()({loader:function(){return Promise.all([n.e(0),n.e(3),n.e(48)]).then(n.bind(null,757))},loading:p}),S=new m.a.auth.GoogleAuthProvider,T=m.a.functions().httpsCallable("isUserAdmin"),O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={user:null,loading:!0,admin:!1},n.adminButtons=[{linkTo:"/tutorqadmin/adminqueue",linkText:"Main Admin Tool"},{linkTo:"/tutorqadmin/whosinqueue",linkText:"See Queue List"},{linkTo:"/tutorqadmin/seatingdistribution",linkText:"Seating Distribution"}],n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;m.a.auth().onAuthStateChanged(function(t){t?T().then(function(n){n.data?e.setState({admin:!0,user:t,loading:!1}):e.setState({admin:!1,user:t,loading:!1})}):e.setState({user:null,loading:!1})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.user,i=t.admin;return d.a.createElement("div",{style:{textAlign:"center"}},d.a.createElement("h1",{style:{marginBottom:"5vh"}},"TutorQ Admin Panel"),n&&d.a.createElement(p,null),!n&&!a&&d.a.createElement("div",null,d.a.createElement(s.b,{onClick:function(){m.a.auth().signInWithRedirect(S)},style:{backgroundColor:"#005696"}},"Sign in with Google")),a&&i&&d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,{exact:!0,path:"/tutorqadmin",render:function(){return d.a.createElement(k,{adminButtons:e.adminButtons})}}),d.a.createElement(h.a,{path:"/tutorqadmin/adminqueue",render:function(){return d.a.createElement(w,{uid:a.uid})}}),d.a.createElement(h.a,{path:"/tutorqadmin/whosinqueue",render:function(){return d.a.createElement(v,null)}}),d.a.createElement(h.a,{path:"/tutorqadmin/seatingdistribution",render:function(){return d.a.createElement(q,null)}})),a&&!i&&d.a.createElement(d.a.Fragment,null,d.a.createElement("h1",null,"You are not permitted to view this page."),d.a.createElement(s.b,{onClick:function(){m.a.auth().signOut()}},"Sign out")))}}]),t}(o.Component)}}]);
//# sourceMappingURL=13.67372150.chunk.js.map