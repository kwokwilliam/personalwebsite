(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{311:function(e,t,a){},766:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return R});var n=a(256),i=a(16),o=a(17),r=a(19),l=a(18),s=a(20),c=a(0),d=a.n(c),m=a(33),g=a.n(m),h=a(758),p=a(247),u=a(267),b=a(282),y=a(257),f=a(283),v=a.n(f),w=(a(311),a(313)),S=a.n(w),E=a(12),I=a.n(E),C=(a(117),a(42)),x=a.n(C),R=function(e){function t(){var e;if(Object(i.a)(this,t),(e=Object(r.a)(this,Object(l.a)(t).call(this))).exportPDFWithMethod=function(){if(e.resume.save(),!sessionStorage.getItem("resumeDownloaded")){sessionStorage.setItem("resumeDownloaded",!0);var t=x.a.get("id");I.a.database().ref("/resumeDownload").push({timestamp:I.a.database.ServerValue.TIMESTAMP,id:t})}},e.inchToPixels=function(e){return 72*e},e.convertSvgToImage=function(t){var a=e.refs.canvas;a.getContext("2d"),t.forEach(function(e,t){var n=v.a.renderToStaticMarkup(d.a.createElement(y.a,{icon:e.icon,size:"3x",style:{color:"#005696",height:"500px",width:"500px"}}));S()(a,n),e.icon=a.toDataURL("image/png")})},e.convertBulletToImage=function(t){var a=e.refs.canvas;a.getContext("2d"),t.forEach(function(e,t){var n=v.a.renderToStaticMarkup(d.a.createElement(y.a,{icon:e.icon,size:"2x",style:{color:"#000000",height:"500px",width:"500px"}}));S()(a,n),e.icon=a.toDataURL("image/png")})},e.state={},!sessionStorage.getItem("resumeVisited")){sessionStorage.setItem("resumeVisited",!0);var a=x.a.get("id");I.a.database().ref("/resumePageView").push({timestamp:I.a.database.ServerValue.TIMESTAMP,id:a})}return e.leftHeader=[{icon:u.e,text:"wkwok16@uw.edu"},{icon:u.k,text:"(808) 218 - 3017"}],e.middleHeader=["William Kwok"],e.rightHeader=[{icon:b.a,text:"kwokwilliam"},{icon:b.b,text:"william-w-kwok"},{icon:u.i,text:"https://williamk.info"}],e.bullet=[{icon:u.c}],e.mainBody=[{title:"EDUCATION",icon:u.j,content:[{title:"University of Washington - Seattle, Washington",rightContent:"June 2020",bullets:["GPA: 3.66/4.0 (Dean's List)","Bachelor of Science in Informatics working towards a custom Software Development track","Current coursework: Core Methods in Data Science, Informations Systems Analysis and Design, Server Side Development"]}]},{title:"EXPERIENCE",icon:u.a,content:[{title:"University of Washington iSchool, Undergraduate Tutor",rightContent:"Jan 2019 - Present",bullets:["Help and tutor students on all technical content in required various Information School courses","Technical Foundations of Informatics, Client Side Development, Databases and Data Modeling, and Server Side Development","Created a tutor hub with written and video tutorials on various topics or covered in the course","Created an interactive tutoring queue to organize questions when busy, and collect data on common problems"]},{title:"University of Washington iSchool, Teaching Assistant",rightContent:"Sep 2018 - Dec 2018",bullets:["Teach students the foundational skills for building client side applications (INFO 340)","Host lab sections of about 35 students and answering content related questions on a class Slack channel","Grade problem sets and project-based assignments","Hold office hours for help understanding material from basic HTML and CSS to advanced React development"]},{title:"Code and Cognition Lab, Undergraduate Researcher",rightContent:"Jun 2018 - Present",bullets:["Apply Agile development principles for assisting with research projects","Design, build, and user test computer science tutoring applications using JavaScript/ES6, React, Jest, and Enzyme","Collect, analyze data, and write for a paper on teaching programming strategies to adolescents accepted to SIGCSE 2019"]},{title:"Washington iGEM, Web Development Lead",rightContent:"Feb 2017 - Present",bullets:["Previously helped design a modular, affordable, bio-reactor along with a novel open-source syringe pump design","Lead a diverse team of six to design and build the team website and iGEM Team Wiki (required for competition judging)"]}]},{title:"RECENT PROJECTS",icon:u.g,content:[{title:"CodeItz, Code and Cognition Lab",rightContent:"June 2018 - Present",bullets:["CodeItz is a web tutor that uses a Bayesian Knowledge Tracing algorithm to help users learn programming concepts","Established the framework for writing unit tests in the application and helped removed code redundancy to reduce bugs","Enzyme, Express, Firebase, Flow, JavaScript, Jest, Lodash, MaterialUI, React, React Router, Sass"]},{title:"Research Paper - Programming Strategies, Code and Cognition Lab",rightContent:"June 2018 - August 2018",bullets:["The paper, titled 'Teaching Explicit Programming Strategies to Adolescents' was accepted to SIGCSE 2019","The paper investigates the teaching of explicit programming strategies in the classroom to adolescent students","Aided in the process of data collection, analyzation, and writing to determine if strategy scaffolding correlates to success ","Excel, JavaScript, LaTeX, Ordinal Linear Regression, R"]},{title:"App Development Personal Project - FRC Scouting App 2018",rightContent:"March 2018",bullets:["A web application that allows the Hawaii Robotics community to visualize their performance at the state championships","The application was built a day before the competition, and had data input in it by my old high school team","The data was released to the local community so teams could see their performance going into the world championship","Bootstrap, D3js, Firebase, JavaScript, React, React Router"]}]}],e.bottom=[{title:"SKILLS",icon:u.l,items:[{title:"Languages: ",list:["Golang","JavaScript (ES6+)","Java","Python","SQL","R","LaTeX","C++","CSS","HTML","MATLAB"]},{title:"Tools and Frameworks: ",list:["AWS","Docker","git","Firebase","GraphQL","jQuery","NextJS","React","Redis","VueJS"]},{title:"Processes: ",list:["Agile Development, Data Analysis, Managing, Research, Teaching, Typescript, Web Development"]}]}],e.canvLoaded=!1,e.remainingHeightForBody=T().paperStyle.height-(2*T().paperBorder.padding+T().header.height),e}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.convertSvgToImage(this.leftHeader),this.convertSvgToImage(this.rightHeader),this.convertSvgToImage(this.mainBody),this.convertSvgToImage(this.bottom),this.convertBulletToImage(this.bullet),this.forceUpdate()}},{key:"render",value:function(){var e=this,t=d.a.createElement(h.a,{paperSize:"Letter",fileName:"WilliamKwokResume.pdf",title:"William Kwok",subject:"William Kwok",keywords:"William Kwok Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow Firebase Router Redux",ref:function(t){return e.resume=t}},d.a.createElement("div",{style:T(this.props.mobile).paperStyle,className:"resume"}," ",d.a.createElement("div",{style:T().paperBorder},d.a.createElement(p.Grid,{fluid:!0,style:{padding:0}},d.a.createElement(p.Row,{style:T().header},d.a.createElement("div",{style:Object(n.a)({},T().col,T().minHCol)},this.leftHeader.map(function(e,t){return d.a.createElement(p.Row,{middle:"xs",style:Object(n.a)({},T().headerItems),key:"hiL"+t},d.a.createElement("span",{style:T().headerItemIcon},d.a.createElement("img",{src:e.icon,alt:"",style:T().headerIconSize})),e.text)})),d.a.createElement("div",{style:Object(n.a)({},T().col,T().maxHCol,T().middleHeader)},this.middleHeader[0]),d.a.createElement("div",{style:Object(n.a)({},T().col,T().minHCol,T().rightHeader)},this.rightHeader.map(function(e,t){return d.a.createElement(p.Row,{middle:"xs",style:Object(n.a)({},T().headerItems),key:"hiR"+t},d.a.createElement("span",{style:T().headerItemIcon},d.a.createElement("img",{src:e.icon,alt:"",style:T().headerIconSize})),e.text)}))),this.mainBody.map(function(t,a){return d.a.createElement(p.Row,{style:Object(n.a)({},T().body),key:"mainBody"+a},d.a.createElement(p.Row,{middle:"xs",style:Object(n.a)({},T().bodyHeaders,{marginBottom:3})},d.a.createElement("span",{style:Object(n.a)({},T().bodyItemIcon,{paddingBottom:3})},d.a.createElement("img",{src:t.icon,alt:"",style:T().bodyIconSize})),t.title),t.content.map(function(t,i){return d.a.createElement(p.Row,{key:"bc"+a+"-"+i,style:Object(n.a)({},T().bodyContentHeaders,{padding:0,marginBottom:4})},d.a.createElement("div",{style:Object(n.a)({},T().contentItemTitle,{width:"70%",paddingLeft:3,marginBottom:2})},t.title),d.a.createElement("div",{style:Object(n.a)({},T().contentItemRightContent,{width:"30%"})},t.rightContent),d.a.createElement("ul",{style:{paddingLeft:0,margin:0,fontSize:8,listStyleType:"none"}},t.bullets.map(function(t,n){return d.a.createElement("li",{key:"bc"+a+"-"+i+"-"+n,style:{marginBottom:0,paddingLeft:7}},d.a.createElement("span",{style:{marginLeft:-4,fontSize:10}},d.a.createElement("img",{alt:"",src:e.bullet[0].icon,style:{width:3,height:3,marginRight:5}}),t))})))}))}),this.bottom.map(function(e,t){return d.a.createElement(p.Row,{style:Object(n.a)({},T().body),key:"bottomBody"+t},d.a.createElement(p.Row,{middle:"xs",style:Object(n.a)({},T().bodyHeaders,{marginBottom:3})},d.a.createElement("span",{style:Object(n.a)({},T().bodyItemIcon,{paddingBottom:3})},d.a.createElement("img",{src:e.icon,alt:"",style:T().bodyIconSize})),e.title),e.items.map(function(e,a){return d.a.createElement(p.Row,{key:"bc"+t+"-"+a,style:Object(n.a)({},T().bodyContentHeaders,{padding:0,marginBottom:0})},d.a.createElement("div",{style:Object(n.a)({},T().contentItemTitle,{paddingLeft:3,marginBottom:2})},e.title,d.a.createElement("span",{style:{fontSize:10,color:"black",fontWeight:"normal"}},e.list.join(", "))))}))})))));return d.a.createElement(p.Grid,{fluid:!0},d.a.createElement(p.Row,null,d.a.createElement("div",{style:{width:"100%"}},!this.canvLoaded&&d.a.createElement("canvas",{ref:"canvas",style:{display:"none"}}),d.a.createElement(g.a,{right:!0,cascade:!0},d.a.createElement("div",null,d.a.createElement("div",{style:{margin:"auto",textAlign:"center",marginBottom:10}},"This page doesn't appear correctly on mobile, sorry!",d.a.createElement("br",null),d.a.createElement("br",null),d.a.createElement("div",{onClick:this.exportPDFWithMethod,style:{cursor:"pointer",margin:"auto",textDecoration:"none",color:"#005696",minWidth:"60px",textAlign:"center"}},d.a.createElement(y.a,{icon:u.d,size:"2x"})," Download PDF")),d.a.createElement("div",null,t))))))}}]),t}(c.Component),T=function(e){return{paperStyle:{height:792,width:612,padding:"none",backgroundColor:"white",boxShadow:"5px 5px 5px #888888",margin:"auto",overflowX:"hidden",overflowY:"hidden"},paperBorder:{height:"100%",width:"100%",padding:12,overflowX:"hidden",overflowY:"hidden"},header:{height:60,padding:0,margin:0},body:{padding:0,margin:0},bodyHeaders:{color:"#005696",fontSize:19,fontWeight:"bold",margin:0,width:"100%",paddingBottom:4,borderBottom:"0.5px solid #005696"},bodyContentHeaders:{margin:0,width:"100%"},contentItemTitle:{color:"#005696",fontSize:12,fontWeight:"bold",padding:0},contentItemRightContent:{fontSize:12,textAlign:"right",padding:0},col:{padding:0},headerItems:{fontSize:10.5,color:"#005696",marginLeft:0,marginBottom:3},headerItemIcon:{textDecoration:"none",textAlign:"center",marginRight:5},bodyItemIcon:{textDecoration:"none",textAlign:"center",marginRight:5},minHCol:{width:"147px"},maxHCol:{width:"294px"},middleHeader:{textAlign:"center",fontSize:40,fontWeight:"bold",color:"#005696"},rightHeader:{paddingLeft:35},headerIconSize:{height:15,width:15},bodyIconSize:{height:20,width:20}}}}}]);
//# sourceMappingURL=10.9f90fc2f.chunk.js.map