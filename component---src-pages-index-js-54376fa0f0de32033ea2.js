(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return m})),i.d(t,"query",(function(){return u}));i("q1tI"),i("p3AD");var n=i("Bl7J"),r=i("qKvR"),l=(i("rMck"),i("Wbzz")),o=i("9eSz"),b=i.n(o),c=function(e){return Object(r.b)(l.StaticQuery,{query:"3857911135",render:function(t){var i=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return i?Object(r.b)(b.a,{alt:e.alt,fluid:i.node.childImageSharp.fluid,style:{margin:"0rem",maxHeight:e.maxHeight},imgStyle:e.imgStyle}):null}})},a=i("vrFN"),s=function(e){var t=e.headerText;return Object(r.b)("header",{style:{background:"white",marginBottom:"1.45rem"}},Object(r.b)("div",{style:{margin:"0 auto",maxWidth:960}},Object(r.b)("h1",{style:{margin:0}},t)))};s.defaultProps={siteTitle:""};function m(e){var t=e.data,i=t.basicInfoYaml.basic_info,l=t.workYaml.work,o=t.projectsYaml.projects;return console.log(i,l,o),Object(r.b)(n.a,{title:"home"},Object(r.b)(a.a,{title:"Home"}),Object(r.b)("div",{style:{marginRight:"20%"}},Object(r.b)("div",{dangerouslySetInnerHTML:{__html:i.summary}}),Object(r.b)("div",{id:"work"},Object(r.b)("h2",null," Work"),Object(r.b)("ul",{style:{margin:"1%"}},l.map((function(e,t){return Object(r.b)("li",{key:"work_"+t,style:{listStyleType:"none"}},Object(r.b)("h3",null,e.place),Object(r.b)("div",{class:"container",style:{flexDirection:"column",justifyContent:"space-between"}},Object(r.b)("div",{class:"item",style:{float:"right"}},e.duration),Object(r.b)("div",{class:"item"},e.position)),Object(r.b)("p",{style:{margin:"2%"}},e.summary))})))),Object(r.b)("div",{id:"projects"},Object(r.b)("h2",null,"Projects"),Object(r.b)("p",null," I enjoy working on a variety of projects in my spare time. Check out ",Object(r.b)("a",{href:"https://github.com/leungjch"},"my Github")," to see more. "),Object(r.b)("ul",{style:{margin:"1%"}},o.map((function(e,t){var i,n;i=/[\/.](webm)$/i.test(e.img)?Object(r.b)("video",{autoplay:"true",loop:"true",muted:"true",style:{width:"100%",maxHeight:"33vh",backgroundColor:"white",marginLeft:"rem",padding:"2px"}}," ",Object(r.b)("source",{src:e.img,type:"video/webm"})," "):Object(r.b)(c,{filename:e.img,maxHeight:"33vh",imgStyle:{objectFit:"scale-down",objectPosition:"right"}}),e.linkdemo.length>0&&(n=Object(r.b)("a",{href:e.linkdemo},"[demo]"));var l=Object(r.b)("a",{href:e.linkrepo},"[code]");return Object(r.b)("li",{key:"projects_"+t,style:{listStyleType:"none",marginLeft:"-25%"}},Object(r.b)("div",{style:{display:"flex",flexDirection:"row",verticalAlign:"middle",alignItems:"middle",border:"black",marginBottom:"5%"}},Object(r.b)("div",{className:"zoom",style:{flexGrow:1,width:"30%",marginRight:"5%",justifyContent:"center"}},i),Object(r.b)("div",{style:{width:"70%"}},Object(r.b)("h3",{style:{margin:"0% 0 2% 0"}},e.name," ",n," ",l),Object(r.b)("p",null,e.description),Object(r.b)("p",null,"Keywords: ",Object(r.b)("strong",null,e.keywords)))))}))))))}var u="460173021"}}]);
//# sourceMappingURL=component---src-pages-index-js-54376fa0f0de32033ea2.js.map