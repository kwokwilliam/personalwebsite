(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{121:function(e,t,n){e.exports=n(247)},130:function(e,t,n){},132:function(e,t,n){},140:function(e,t,n){},148:function(e,t,n){},150:function(e,t,n){},152:function(e,t,n){},155:function(e,t,n){},166:function(e,t){},168:function(e,t){},200:function(e,t){},201:function(e,t){},247:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(34),r=n.n(i),o=(n(130),n(12)),l=n(13),A=n(15),s=n(14),u=n(16),m=n(32),d=(n(132),n(117)),h=n.n(d),p=n(33),f=n.n(p),b=(n(140),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(A.a)(this,Object(s.a)(t).call(this,e))).state={position:{xPercent:.5,yPercent:.5},documentSize:{x:window.innerWidth,y:window.innerHeight},showW:!0,showK:!0,spinning:!1,show:!0},n.state.documentSize.x<560?(n.width=.8*n.state.documentSize.x,n.height=n.width):(n.height=.4*n.state.documentSize.y,n.width=n.height),n.viewboxNumbers="-230 562 460 460",setInterval(function(){n.mounted&&n.setState({spinning:!0})},1e3),setInterval(function(){n.mounted&&n.props.fadeOutGear()},1500),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return c.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden"}},c.a.createElement("svg",{style:{display:"block",margin:"auto"},className:"".concat(this.state.spinning?"spin":""," ").concat(this.state.show?"show":"hide"),version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,viewBox:"-230 562 460 460"},c.a.createElement(h.a,{easing:"easeOutCubic",duration:500,loop:!1,delay:function(e,t){return 200*t},strokeDashoffset:function(e){var t=0;return e.getTotalLength&&(t=e.getTotalLength(),e.setAttribute("stroke-dasharray",t)),[t,0]},key:"1"},c.a.createElement("circle",{className:"st1",cx:"0.172",cy:"792",r:"164.928"}),c.a.createElement("path",{className:"st1",d:"\r M226.84,806.436V777.54c-10.004,0-18.738-4.737-23.651-11.835c-1.192-9.3-2.988-18.407-5.383-27.274\r c1.85-8.403,8.09-16.083,17.294-19.895l-11.057-26.697c-9.229,3.823-19.095,2.797-26.348-1.863\r c-4.632-8.049-9.784-15.754-15.43-23.067c-1.548-8.497,1.271-18.028,8.344-25.101l-20.433-20.433\r c-7.073,7.073-16.598,9.9-25.09,8.356c-7.31-5.643-15.012-10.793-23.058-15.423c-4.665-7.256-5.699-17.125-1.876-26.353\r l-26.697-11.059c-3.813,9.205-11.484,15.448-19.882,17.3c-8.87-2.397-17.981-4.193-27.285-5.385\r c-7.105-4.914-11.851-13.647-11.851-23.65H-14.46c0,10.004-4.737,18.738-11.835,23.651c-9.297,1.192-18.401,2.987-27.266,5.381\r c-8.397-1.852-16.068-8.096-19.881-17.301l-26.697,11.057c3.822,9.228,2.788,19.098-1.878,26.353\r c-8.049,4.631-15.755,9.783-23.068,15.429c-8.493,1.544-18.016-1.283-25.09-8.356l-20.433,20.433\r c7.073,7.073,9.892,16.603,8.344,25.1c-5.644,7.31-10.794,15.011-15.424,23.057c-7.253,4.659-17.119,5.684-26.348,1.861\r l-11.059,26.697c9.204,3.813,15.444,11.493,17.293,19.896c-2.397,8.87-4.194,17.981-5.387,27.285\r c-4.913,7.098-13.647,11.835-23.651,11.835v28.896c10.004,0,18.737,4.746,23.65,11.851c1.192,9.3,2.987,18.408,5.382,27.275\r c-1.852,8.397-8.096,16.068-17.301,19.88l11.058,26.697c9.228-3.822,19.098-2.788,26.353,1.878\r c4.631,8.05,9.783,15.755,15.429,23.068c1.544,8.493-1.283,18.016-8.356,25.09l20.433,20.433c7.073-7.073,16.603-9.892,25.1-8.344\r c7.31,5.644,15.012,10.794,23.057,15.424c4.659,7.253,5.684,17.119,1.861,26.348l26.697,11.059\r c3.813-9.204,11.493-15.444,19.896-17.293c8.87,2.397,17.981,4.194,27.285,5.387c7.098,4.913,11.835,13.647,11.835,23.651h28.896\r c0-10.004,4.746-18.737,11.851-23.65c9.303-1.192,18.413-2.988,27.283-5.385c8.403,1.85,16.083,8.09,19.895,17.294l26.697-11.057\r c-3.823-9.229-2.797-19.095,1.863-26.348c8.049-4.632,15.754-9.784,23.067-15.43c8.497-1.548,18.028,1.271,25.101,8.344\r l20.433-20.433c-7.073-7.073-9.9-16.597-8.356-25.09c5.643-7.31,10.793-15.012,15.423-23.058c7.256-4.665,17.125-5.699,26.353-1.877\r l11.059-26.697c-9.205-3.813-15.449-11.484-17.3-19.882c2.397-8.87,4.193-17.981,5.385-27.285\r C208.103,811.183,216.835,806.436,226.84,806.436z"}),c.a.createElement("path",{className:"st1",d:"M-30.474,832.93l-9.463,0.091\r l-16.832-49.131l-16.741,49.131l-9.462-0.091l-15.832-71.059h-3.73c-1.82,0-3.125-0.364-3.913-1.092\r c-0.789-0.728-1.183-1.667-1.183-2.821c0-1.092,0.394-2.001,1.183-2.729c0.788-0.728,2.093-1.092,3.913-1.092h21.017\r c1.82,0,3.124,0.364,3.913,1.092c0.788,0.728,1.183,1.669,1.183,2.821c0,1.092-0.395,2.001-1.183,2.729\r c-0.789,0.728-2.093,1.092-3.913,1.092h-9.735l13.557,60.595l16.286-48.403h9.099l16.741,48.403l13.011-60.595h-9.644\r c-1.82,0-3.14-0.364-3.958-1.092c-0.819-0.728-1.229-1.667-1.229-2.821c0-1.092,0.394-2.001,1.183-2.729\r c0.788-0.728,2.123-1.092,4.004-1.092h20.926c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821\r c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-3.64L-30.474,832.93z"}),c.a.createElement("path",{className:"st1",d:"M39.493,798.902v34.028H21.569\r c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.151,0.394-2.077,1.183-2.775\r c0.788-0.697,2.093-1.046,3.912-1.046H31.85v-98.809H21.569c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.667-1.183-2.82\r c0-1.092,0.394-2.002,1.183-2.729c0.788-0.728,2.093-1.092,3.912-1.092h17.925v70.422l32.48-27.295h-3.912\r c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.152,0.394-2.093,1.183-2.821\r c0.788-0.728,2.093-1.092,3.912-1.092h24.475c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821\r c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-8.825l-29.843,24.93l37.759,38.486h8.825\r c1.879,0,3.214,0.35,4.003,1.046c0.788,0.698,1.184,1.624,1.184,2.775c0,1.092-0.396,2.001-1.184,2.729\r c-0.789,0.728-2.124,1.092-4.003,1.092H75.705c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729\r c0-1.151,0.394-2.077,1.183-2.775c0.788-0.697,2.093-1.046,3.912-1.046h5.368l-32.845-33.755L39.493,798.902z"}))),c.a.createElement(f.a,{duration:500},c.a.createElement("div",{style:{textAlign:"center",fontSize:this.props.mobile?25:50,width:"80%",margin:"auto",color:"#005696"}},c.a.createElement("div",null,"William Kwok"),c.a.createElement("div",{style:{height:2,width:"80%",backgroundColor:"#005696",margin:"auto"}}),c.a.createElement("div",null,"UW Informatics 2020"))))}}]),t}(a.Component)),g=n(56),v=n(701),E=n(704),y=n(705),k=n(702),z=n(695),w=(n(148),function(e){function t(){return Object(o.a)(this,t),Object(A.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("svg",{style:{display:"inline",position:"absolute"},className:"logospin",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:70,height:70,viewBox:"-230 562 460 460"},c.a.createElement("circle",{className:"logost1",cx:"0.172",cy:"792",r:"164.928"}),c.a.createElement("path",{className:"logost1",d:"\r M226.84,806.436V777.54c-10.004,0-18.738-4.737-23.651-11.835c-1.192-9.3-2.988-18.407-5.383-27.274\r c1.85-8.403,8.09-16.083,17.294-19.895l-11.057-26.697c-9.229,3.823-19.095,2.797-26.348-1.863\r c-4.632-8.049-9.784-15.754-15.43-23.067c-1.548-8.497,1.271-18.028,8.344-25.101l-20.433-20.433\r c-7.073,7.073-16.598,9.9-25.09,8.356c-7.31-5.643-15.012-10.793-23.058-15.423c-4.665-7.256-5.699-17.125-1.876-26.353\r l-26.697-11.059c-3.813,9.205-11.484,15.448-19.882,17.3c-8.87-2.397-17.981-4.193-27.285-5.385\r c-7.105-4.914-11.851-13.647-11.851-23.65H-14.46c0,10.004-4.737,18.738-11.835,23.651c-9.297,1.192-18.401,2.987-27.266,5.381\r c-8.397-1.852-16.068-8.096-19.881-17.301l-26.697,11.057c3.822,9.228,2.788,19.098-1.878,26.353\r c-8.049,4.631-15.755,9.783-23.068,15.429c-8.493,1.544-18.016-1.283-25.09-8.356l-20.433,20.433\r c7.073,7.073,9.892,16.603,8.344,25.1c-5.644,7.31-10.794,15.011-15.424,23.057c-7.253,4.659-17.119,5.684-26.348,1.861\r l-11.059,26.697c9.204,3.813,15.444,11.493,17.293,19.896c-2.397,8.87-4.194,17.981-5.387,27.285\r c-4.913,7.098-13.647,11.835-23.651,11.835v28.896c10.004,0,18.737,4.746,23.65,11.851c1.192,9.3,2.987,18.408,5.382,27.275\r c-1.852,8.397-8.096,16.068-17.301,19.88l11.058,26.697c9.228-3.822,19.098-2.788,26.353,1.878\r c4.631,8.05,9.783,15.755,15.429,23.068c1.544,8.493-1.283,18.016-8.356,25.09l20.433,20.433c7.073-7.073,16.603-9.892,25.1-8.344\r c7.31,5.644,15.012,10.794,23.057,15.424c4.659,7.253,5.684,17.119,1.861,26.348l26.697,11.059\r c3.813-9.204,11.493-15.444,19.896-17.293c8.87,2.397,17.981,4.194,27.285,5.387c7.098,4.913,11.835,13.647,11.835,23.651h28.896\r c0-10.004,4.746-18.737,11.851-23.65c9.303-1.192,18.413-2.988,27.283-5.385c8.403,1.85,16.083,8.09,19.895,17.294l26.697-11.057\r c-3.823-9.229-2.797-19.095,1.863-26.348c8.049-4.632,15.754-9.784,23.067-15.43c8.497-1.548,18.028,1.271,25.101,8.344\r l20.433-20.433c-7.073-7.073-9.9-16.597-8.356-25.09c5.643-7.31,10.793-15.012,15.423-23.058c7.256-4.665,17.125-5.699,26.353-1.877\r l11.059-26.697c-9.205-3.813-15.449-11.484-17.3-19.882c2.397-8.87,4.193-17.981,5.385-27.285\r C208.103,811.183,216.835,806.436,226.84,806.436z"})),c.a.createElement("svg",{style:{display:"float",position:"absolute"},version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:70,height:70,viewBox:"-230 562 460 460"},c.a.createElement("path",{className:"logost1",d:"M-30.474,832.93l-9.463,0.091\r l-16.832-49.131l-16.741,49.131l-9.462-0.091l-15.832-71.059h-3.73c-1.82,0-3.125-0.364-3.913-1.092\r c-0.789-0.728-1.183-1.667-1.183-2.821c0-1.092,0.394-2.001,1.183-2.729c0.788-0.728,2.093-1.092,3.913-1.092h21.017\r c1.82,0,3.124,0.364,3.913,1.092c0.788,0.728,1.183,1.669,1.183,2.821c0,1.092-0.395,2.001-1.183,2.729\r c-0.789,0.728-2.093,1.092-3.913,1.092h-9.735l13.557,60.595l16.286-48.403h9.099l16.741,48.403l13.011-60.595h-9.644\r c-1.82,0-3.14-0.364-3.958-1.092c-0.819-0.728-1.229-1.667-1.229-2.821c0-1.092,0.394-2.001,1.183-2.729\r c0.788-0.728,2.123-1.092,4.004-1.092h20.926c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821\r c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-3.64L-30.474,832.93z"}),c.a.createElement("path",{className:"logost1",d:"M39.493,798.902v34.028H21.569\r c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.151,0.394-2.077,1.183-2.775\r c0.788-0.697,2.093-1.046,3.912-1.046H31.85v-98.809H21.569c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.667-1.183-2.82\r c0-1.092,0.394-2.002,1.183-2.729c0.788-0.728,2.093-1.092,3.912-1.092h17.925v70.422l32.48-27.295h-3.912\r c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.152,0.394-2.093,1.183-2.821\r c0.788-0.728,2.093-1.092,3.912-1.092h24.475c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821\r c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-8.825l-29.843,24.93l37.759,38.486h8.825\r c1.879,0,3.214,0.35,4.003,1.046c0.788,0.698,1.184,1.624,1.184,2.775c0,1.092-0.396,2.001-1.184,2.729\r c-0.789,0.728-2.124,1.092-4.003,1.092H75.705c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729\r c0-1.151,0.394-2.077,1.183-2.775c0.788-0.697,2.093-1.046,3.912-1.046h5.368l-32.845-33.755L39.493,798.902z"})))}}]),t}(a.Component)),q=(n(150),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(A.a)(this,Object(s.a)(t).call(this,e))).state={mobile:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.setState({mobile:this.props.mobile})}},{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{style:{margin:"auto",display:"flex",padding:10,paddingRight:10,lineHeight:"70px"}},c.a.createElement("div",{style:{marginRight:80}},c.a.createElement(w,null)),this.props.pages.map(function(t){return c.a.createElement("div",{key:t,style:{marginLeft:10,marginRight:10}},c.a.createElement(z.a,{to:"/".concat(t),style:{textDecoration:"none",color:"#005696",fontSize:e.props.mobile?20:30}},c.a.createElement("div",{className:"link"},t)))})))}}]),t}(a.Component)),j=(n(152),n(22)),N=n.n(j),T=function(){return c.a.createElement("div",null)},O=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,697))},loading:T}),x=N()({loader:function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,698))},loading:T}),W=N()({loader:function(){return Promise.all([n.e(0),n.e(2),n.e(7)]).then(n.bind(null,699))},loading:T}),R=N()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(17),n.e(8)]).then(n.bind(null,700))},loading:T}),I=N()({loader:function(){return Promise.all([n.e(15),n.e(9)]).then(n.bind(null,703))},loading:T}),Q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(A.a)(this,Object(s.a)(t).call(this,e))).state={mobile:!1},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({mobile:this.props.mobile})}},{key:"componentWillReceiveProps",value:function(e){this.setState({mobile:e.mobile})}},{key:"renderPage",value:function(){switch(this.props.page){case"main":return c.a.createElement(O,{mobile:this.state.mobile});case"projects":return c.a.createElement(x,{mobile:this.state.mobile});case"about":return c.a.createElement(W,{mobile:this.state.mobile});case"resume":return c.a.createElement(R,{mobile:this.state.mobile});case"blog":return c.a.createElement(I,{mobile:this.state.mobile,post:this.props.match.params.blogpost});default:return c.a.createElement("div",null,"Error: Page doesn't exist")}}},{key:"render",value:function(){return c.a.createElement("div",{className:"page"},this.renderPage())}}]),t}(a.Component),G=n(67),D=n.n(G),B=n(68),H=n.n(B),M=n(69),L=n.n(M),X=n(70),C=n.n(X),P=n(71),V=n.n(P),Z=n(72),J=n.n(Z),S=n(73),Y=n.n(S),U=n(74),K=n.n(U),F=n(75),$=n.n(F),_=n(76),ee=n.n(_),te=n(77),ne=n.n(te),ae=n(78),ce=n.n(ae),ie=N()({loader:function(){return n.e(4).then(n.bind(null,696))},loading:function(){return c.a.createElement("div",null)}}),re=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(A.a)(this,Object(s.a)(t).call(this))).state={loaded:!1,mobile:!1,show:!0,gearIn:!0,finishedGear:!1},e.fadeOutGear=e.fadeOutGear.bind(Object(m.a)(Object(m.a)(e))),e.mobileSize=768,window.addEventListener("resize",function(){!e.state.mobile&&window.innerWidth<e.mobileSize?e.setState({mobile:!0}):e.state.mobile&&window.innerWidth>=e.mobileSize&&e.setState({mobile:!1})}),document.title="William Kwok",e.images=[D.a,H.a,L.a,C.a,V.a,J.a,Y.a,K.a,$.a,ee.a,ne.a,ce.a],e.pages=["main","about","projects"],e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){window.innerWidth<this.mobileSize&&this.setState({mobile:!0})}},{key:"prefetchImages",value:function(){this.images.forEach(function(e){(new Image).src=e})}},{key:"componentDidMount",value:function(){this.prefetchImages()}},{key:"fadeOutGear",value:function(){var e=this;this.setState({gearIn:!1}),setInterval(function(){e.setState({finishedGear:!0})},700)}},{key:"render",value:function(){var e=this;return c.a.createElement(v.a,{basename:""},c.a.createElement(E.a,{render:function(t){var n=t.location;return c.a.createElement(y.a,null,c.a.createElement(E.a,{exact:!0,path:"/Test",component:ie}),c.a.createElement(E.a,{exact:!0,path:"/Tes6t",component:ie}),c.a.createElement(E.a,{render:function(){return c.a.createElement("div",null,e.state.finishedGear&&c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return c.a.createElement(k.a,{to:"/main"})}}),c.a.createElement(g.TransitionGroup,null,c.a.createElement(g.CSSTransition,{key:n.key,classNames:"fade",timeout:{enter:300,exit:300}},c.a.createElement("div",{className:"fix-container"},c.a.createElement(y.a,{location:n},c.a.createElement(E.a,{exact:!0,path:"/",render:function(){return null}}),c.a.createElement(E.a,{render:function(){return c.a.createElement(q,{pages:e.pages,mobile:e.state.mobile})}})),c.a.createElement(y.a,{location:n},c.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return c.a.createElement("div",{style:{position:"fixed",top:"40%",left:"50%",transform:"translate(-50%,-50%)"}},c.a.createElement(f.a,{clear:!0,enter:!1,spy:!0,when:e.state.gearIn},c.a.createElement(b,{fadeOutGear:e.fadeOutGear,mobile:e.state.mobile})))}}),e.pages.map(function(t){return c.a.createElement(E.a,{key:t,path:"/".concat(t),render:function(){return c.a.createElement(Q,{page:t,mobile:e.state.mobile})}})}),c.a.createElement(E.a,{path:"/resume",render:function(){return c.a.createElement(Q,{page:"resume",mobile:e.state.mobile})}}),c.a.createElement(E.a,{path:"/blog/:blogpost",render:function(t){return c.a.createElement(Q,Object.assign({page:"blog",mobile:e.state.mobile},t))}}),c.a.createElement(E.a,{render:function(){return c.a.createElement("div",{style:{margin:20}},"Error: Page not found :(")}}))))))}}))}}))}}]),t}(a.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(155);var Ae=n(18),se=n.n(Ae),ue=(n(119),n(118)),me=n.n(ue),de=n(42),he=n.n(de);console.log("v1.0.2");se.a.initializeApp({apiKey:"AIzaSyBJCJ5AivGAldYdv9IYyhGeOEWskuaBE8k",authDomain:"personalsite-visitcounter.firebaseapp.com",databaseURL:"https://personalsite-visitcounter.firebaseio.com",projectId:"personalsite-visitcounter",storageBucket:"personalsite-visitcounter.appspot.com",messagingSenderId:"300262936321"});var pe=window.location.href.split("?q="),fe=he.a.get("id");if(fe?sessionStorage.getItem("visited")||(sessionStorage.setItem("visited",!0),se.a.database().ref("/repeatVisitors").push({timestamp:se.a.database.ServerValue.TIMESTAMP,id:fe})):(fe=me.a.randomBytes(20).toString("hex"),he.a.set("id",fe),se.a.database().ref("/uniqueVisitors").push({timestamp:se.a.database.ServerValue.TIMESTAMP,id:fe})),pe.length>1){var be=pe[1];se.a.database().ref("/cameFrom").push({comeFrom:be,timestamp:se.a.database.ServerValue.TIMESTAMP,id:fe}),document.referrer&&""!==document.referrer&&se.a.database().ref("/cameFromReferrer").push({comeFrom:document.referrer,timestamp:se.a.database.ServerValue.TIMESTAMP,id:fe})}r.a.render(c.a.createElement(re,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");oe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()},67:function(e,t,n){e.exports=n.p+"static/media/main.6a0b7eef.png"},68:function(e,t,n){e.exports=n.p+"static/media/walker.aacf9e89.png"},69:function(e,t,n){e.exports=n.p+"static/media/dfSim.5c9bcf44.png"},70:function(e,t,n){e.exports=n.p+"static/media/igem2017.3441e223.jpg"},71:function(e,t,n){e.exports=n.p+"static/media/planet.ce5f0fd5.png"},72:function(e,t,n){e.exports=n.p+"static/media/pr.4479c254.png"},73:function(e,t,n){e.exports=n.p+"static/media/safecycleJS.898b2d43.png"},74:function(e,t,n){e.exports=n.p+"static/media/safecycleR.b1d2bbda.png"},75:function(e,t,n){e.exports=n.p+"static/media/scout.6a0df6e7.png"},76:function(e,t,n){e.exports=n.p+"static/media/teammanager.27409909.png"},77:function(e,t){e.exports="data:image/png;base64,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"},78:function(e,t,n){e.exports=n.p+"static/media/koconut.def81f38.jpg"}},[[121,18,16]]]);
//# sourceMappingURL=main.3a87080a.chunk.js.map