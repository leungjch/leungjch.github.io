(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return l})),i.d(t,"query",(function(){return b}));i("q1tI"),i("p3AD");var r=i("Bl7J"),n=i("qKvR"),a=(i("rMck"),i("Wbzz"),i("tBDR")),o=i("vrFN"),c=function(e){var t=e.headerText;return Object(n.b)("header",{style:{background:"white",marginBottom:"1.45rem"}},Object(n.b)("div",{style:{margin:"0 auto",maxWidth:960}},Object(n.b)("h1",{style:{margin:0}},t)))};c.defaultProps={siteTitle:""};function l(e){var t=e.data,i=t.basicInfoYaml.basic_info,c=t.workYaml.work,l=t.projectsYaml.projects;return console.log(i,c,l),Object(n.b)(r.a,{title:"home"},Object(n.b)(o.a,{title:"Home"}),Object(n.b)("div",{style:{marginRight:"10%"}},Object(n.b)("div",{dangerouslySetInnerHTML:{__html:i.summary}}),Object(n.b)("div",{id:"projects"},Object(n.b)("h2",null,"Projects"),Object(n.b)("p",null," ","I'm a maker at heart. Over the years, I've worked on a variety of projects in my spare time. Check out"," ",Object(n.b)("a",{href:"https://github.com/leungjch"},"my Github")," to see more."," "),Object(n.b)("ul",{style:{margin:"1%"}},l.map((function(e,t){var i,r;i=/[\/.](webm)$/i.test(e.img)?Object(n.b)("video",{autoplay:"true",loop:"true",muted:"true",style:{width:"100%",maxHeight:"33vh",backgroundColor:"white",padding:"2px"}}," ",Object(n.b)("source",{src:e.img,type:"video/webm"})," "):Object(n.b)(a.a,{filename:e.img,maxHeight:"33vh",imgStyle:{objectFit:"scale-down",objectPosition:"right"}}),e.linkdemo.length>0&&(r=Object(n.b)("a",{href:e.linkdemo},"[demo]"));var o=Object(n.b)("a",{href:e.linkrepo},"[code]");return Object(n.b)("li",{key:"projects_"+t,style:{listStyleType:"none",marginLeft:"-22%"}},Object(n.b)("div",{style:{display:"flex",flexDirection:"row",verticalAlign:"middle",alignItems:"middle",border:"black",marginBottom:"5%"}},Object(n.b)("div",{className:"zoom",style:{flexGrow:1,width:"30%",marginRight:"5%",marginLeft:"2%",justifyContent:"center"}},i),Object(n.b)("div",{style:{width:"70%"}},Object(n.b)("h3",{style:{margin:"0% 0 2% 0"}},e.name," ",r," ",o),Object(n.b)("p",null,e.description),Object(n.b)("p",null,"Keywords: ",Object(n.b)("strong",null,e.keywords)))))}))))))}var b="460173021"},tBDR:function(e,t,i){"use strict";i("q1tI");var r=i("Wbzz"),n=i("9eSz"),a=i.n(n),o=(i("rMck"),i("qKvR"));t.a=function(e){return Object(o.b)(r.StaticQuery,{query:"3930661807",render:function(t){var i=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return i?Object(o.b)(a.a,{alt:e.alt,fluid:i.node.childImageSharp.fluid,style:{margin:"0rem",maxHeight:e.maxHeight},imgStyle:e.imgStyle}):null}})}}}]);
//# sourceMappingURL=component---src-pages-index-js-f4b5ad8458f46b5baa3c.js.map