(function(){"use strict";var t={1603:function(t,e,n){var a=n(2856),o=function(){var t=this,e=t._self._c;return e("router-view")},r=[],s={name:"App",components:{}},i=s,l=n(1656),c=(0,l.A)(i,o,r,!1,null,null,null),u=c.exports,d=n(1594),p=function(){var t=this,e=t._self._c;return e("el-container",[e("el-header",[e("span",{staticClass:"title"},[t._v(t._s(t.userName))])]),e("el-main",{staticClass:"main_container"},[e("ProfilePanel"),e("RecentNews"),e("ProjectPanel"),e("CollaboratorPanel")],1),e("el-footer",[e("p",{staticClass:"footer"},[t._v("© 2025 Qin Peinuan | Built with Vue & Element UI")])])],1)},g=[],h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile-container"},[e("el-row",{staticClass:"profile-panel",attrs:{gutter:20,justify:"center"}},[e("el-col",{staticClass:"left-panel",attrs:{span:12}},[e("div",{staticClass:"about-me",domProps:{innerHTML:t._s(t.aboutMe)}}),e("div",{staticClass:"globe-overlay",attrs:{id:"clustr-globe-container"}})]),e("el-col",{staticClass:"right-panel",attrs:{span:8}},[e("img",{staticClass:"profile-image",attrs:{src:t.profileImage,alt:"Profile Picture"}}),e("div",{staticClass:"social-links"},[e("el-row",{attrs:{gutter:10}},t._l(t.socialLinks,(function(t,n){return e("el-col",{key:n,staticClass:"contact-item",attrs:{span:8}},[e("a",{attrs:{href:t.url,target:"_blank"}},[e("img",{staticClass:"icon",attrs:{src:t.icon,alt:t.name}})])])})),1)],1)])],1)],1)},m=[],f=n(7650),v={name:"ProfilePanel",mounted(){this.getMarkdown();const t=document.getElementById("clstr_globe");if(!t){const t=document.createElement("script");t.type="text/javascript",t.id="clstr_globe",t.src="//clustrmaps.com/globe.js?d=INA58IVLqJvoe3UkBduCYuKIO96pu32r6f542tBBv6c",document.getElementById("clustr-globe-container")?.appendChild(t)}},data(){return{profileImage:"/profile.png",socialLinks:[{name:"GitHub",url:"https://github.com/peinuanqin-nus?tab=repositories",icon:"/icons/github.svg"},{name:"Google Scholar",url:"https://scholar.google.com.au/citations?user=hi0tKAkAAAAJ&hl=en&oi=ao",icon:"/icons/googlescholar.svg"},{name:"Email",url:"mailto:e1322754@u.nus.edu",icon:"/icons/gmail.svg"},{name:"Twitter",url:"https://twitter.com/your-twitter",icon:"/icons/twiter.svg"},{name:"LinkedIn",url:"https://www.linkedin.com/in/peinuan-qin-2759301b3/",icon:"/icons/linkedin.svg"}],aboutMe:""}},methods:{getMarkdown(){fetch("/aboutme.md").then((t=>t.text())).then((t=>{this.aboutMe=(0,f.xI)(t)})).catch((t=>console.error("Error loading markdown:",t)))}}},b=v,_=(0,l.A)(b,h,m,!1,null,"5742a890",null),w=_.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"recent-news-container"},[e("h2",{staticClass:"header"},[t._v("Recent News")]),e("div",{staticClass:"timeline-scroll-container"},[e("el-timeline",t._l(t.recentNews,(function(n,a){return e("el-timeline-item",{key:a,attrs:{timestamp:n.date}},[e("span",{domProps:{innerHTML:t._s(t.renderMarkdown(n.content))}},[t._v(t._s(t.renderMarkdown(n.content)))])])})),1)],1)])},C=[],y={name:"RecentNews",data(){return{recentNews:[{date:"2025-03",content:"🎉 [first author] Workshop paper <u>_Empowering Bystanders: Leveraging Generative AI to Enhance Direct Cyberbullying Intervention and Support Teen Well-Being_</u> accepted to **CHI 2025 Mobile Technology and Teens workshop**"},{date:"2025-02",content:"🎉 [first author] Full paper <u>_Timing Matters: How Using LLMs at Different Timings Influences Writers’ Perceptions and Ideation Outcomes in AI-Assisted Ideation_</u> accepted to **CHI 2025**"},{date:"2025-02",content:"🎉 [4th author] Contributed to <u>_Deconstructing Depression Stigma: Integrating AI-driven Data Collection and Analysis with Causal Knowledge Graphs_</u> (led by Menghan), accepted to **CHI 2025**"},{date:"2025-02",content:"🎉 [first author] Full paper <u>_AI-Based Speaking Assistant: Supporting Non-Native Speakers’ Speaking in Real-Time Multilingual Communication_</u> accepted to **CSCW 2025**"},{date:"2024-12",content:"🎉 [first author] Workshop paper <u>_Empowering Bystanders: Enhancing Direct Intervention in Cyberbullying with EmojiGen_</u> accepted to **WABF (World Anti-Bullying Forum) 2025**"},{date:"2024-05",content:"🎉  [4th author] contributed to <u>_Mitigating Ageism through Virtual Reality: Intergenerational Collaborative Escape Room Design_</u>, accepted to **CHI 2024 Late-Breaking Work (LBW)**"}]}},methods:{renderMarkdown(t){return(0,f.xI)(t)}}},P=y,k=(0,l.A)(P,j,C,!1,null,"5abe3736",null),A=k.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-panel"},[e("h2",[t._v("Ongoing Projects")]),e("div",{staticClass:"markdown-body project-intro",domProps:{innerHTML:t._s(t.ongoingIntro)}}),e("el-row",{attrs:{gutter:20,justify:"center"}},t._l(t.ongoingProjects,(function(n,a){return e("el-col",{key:a,attrs:{span:8}},[e("ProjectCard",{attrs:{project:n,index:a},nativeOn:{click:function(e){return t.openDrawer(n)}}})],1)})),1),e("h2",[t._v("Finished Projects")]),e("el-row",{attrs:{gutter:20,justify:"center"}},t._l(t.finishedProjects,(function(n,a){return e("el-col",{key:a,attrs:{span:8}},[e("ProjectCard",{attrs:{project:n,index:a},nativeOn:{click:function(e){return t.openDrawer(n)}}})],1)})),1),e("el-dialog",{staticClass:"project-dialog",attrs:{visible:t.drawerVisible,title:"",width:"60%","close-on-click-modal":!1},on:{"update:visible":function(e){t.drawerVisible=e}}},[e("div",{staticClass:"dialog-content"},[e("h1",{staticClass:"project-title"},[t._v(t._s(t.selectedProject.title))]),e("div",{staticClass:"info-grid"},[e("div",[e("span",{staticClass:"label"},[t._v("✍️ Author:")]),e("span",{staticClass:"markdown-inline",domProps:{innerHTML:t._s(t.selectedProject.author)}})]),e("div",[e("span",{staticClass:"label"},[t._v("🔗 Paper URL:")]),t.selectedProject.url?e("span",{staticClass:"markdown-inline",domProps:{innerHTML:t._s(t.selectedProject.url)}}):e("span",[t._v("...")])]),e("div",[e("span",{staticClass:"label"},[t._v("🌟 Status:")]),t._l(t.selectedProject.status,(function(n,a){return e("el-tag",{key:a,attrs:{type:t.tagColorMap[n]||"info"}},[t._v(t._s(n))])}))],2),t.selectedProject.published?e("div",[e("span",{staticClass:"label"},[t._v("🏛️ Published:")]),e("span",{staticStyle:{"font-weight":"bolder"}},[t._v(t._s(t.selectedProject.published))])]):t._e()]),e("hr"),e("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.markdownContent)}})])])],1)},S=[],x=(n(4114),n(8111),n(2489),n(1701),function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"project-card",on:{click:function(e){return t.$emit("click")}}},[e("img",{staticClass:"project-image",attrs:{src:t.project.image,alt:"Project Image"}}),e("div",{staticClass:"project-info"},[e("span",{staticClass:"project-title",attrs:{title:t.project.short_title}},[t._v("📌 "+t._s(t.project.short_title))]),e("div",{staticClass:"labels"},t._l(t.project.labels,(function(n,a){return e("span",{key:a,staticClass:"label"},[t._v(t._s(n))])})),0),e("div",{staticClass:"labels-row"},[e("p",{staticClass:"year"},[t._v(t._s(t.project.year))]),e("div",{staticClass:"tags"},t._l(t.project.status,(function(n,a){return e("el-tag",{key:a,attrs:{size:"small",type:t.tagColorMap[n]||"info"}},[t._v(t._s(n))])})),1)])])])}),M=[],T={name:"ProjectCard",props:{project:Object,index:Number},data(){return{tagColorMap:{"🕒 Ongoing":"warning","🟢 Accept":"success"}}},methods:{goToProject(){console.log("click on project",this.index)}}},N=T,L=(0,l.A)(N,x,M,!1,null,"f9bbdac6",null),O=L.exports,D={name:"ProjectPanel",components:{ProjectCard:O},created(){this.loadAllProjects()},data(){return{ongoingProjects:[],ongoingIntro:(0,f.xI)("\nWe are currently investigating how **human-centered AI** can support expression, communication, and learning across diverse contexts.\nOur ongoing projects span several interrelated directions:\n- **AI-assisted creation** — exploring how intelligent systems can augment, rather than replace, human agency in creative practices.\n- **AI-mediated communication** — designing tools that facilitate mutual understanding across linguistic and cultural boundaries.\n- **Supportive social interventions** — leveraging AI to empower users in responding to challenging social dynamics, such as online hostility.\n- **Language learning with AI** — examining how LLMs can act as adaptive and context-aware partners in the development of communicative competence.\n\nTogether, these efforts aim to uncover design principles for building **co-creative, empowering, and inclusive AI systems**.\n"),finishedProjects:[],projectFolders:["ai_assisted_creation","ai_mediated_communication","timing_matters","speaking_support_for_NNS","language_learning_support","cyberbullying_mitigation"],drawerVisible:!1,selectedProject:{},newTag:"",markdownContent:"",tagColorMap:{"🕒 Ongoing":"warning","🟢 Accept":"success"}}},methods:{openDrawer(t){console.log("Clicked project:",t),this.selectedProject={...t},this.markdownContent=(0,f.xI)(t.content||"No content available."),this.selectedProject.author=(0,f.xI)(t.author||"Unknown"),this.selectedProject.url=(0,f.xI)(t.url||"..."),this.drawerVisible=!0},addTag(){const t=this.newTag.trim();t&&!this.selectedProject.status.includes(t)&&this.selectedProject.status.push(t),this.newTag=""},removeTag(t){this.selectedProject.status.splice(t,1)},async loadAllProjects(){const t=await Promise.all(this.projectFolders.map((t=>this.loadProject(t)))),e=t.filter((t=>null!==t));this.ongoingProjects=e.filter((t=>t.status&&"🕒 Ongoing"===t.status[0])).sort(((t,e)=>e.year-t.year)),this.finishedProjects=e.filter((t=>!t.status||"🕒 Ongoing"!==t.status[0])).sort(((t,e)=>e.year-t.year))},async loadProject(t){try{const e=await fetch(`/projects/${t}/meta.json`),n=await e.json(),a=await fetch(`/projects/${t}/description.md`),o=await a.text(),r=(0,f.xI)(o);return{...n,content:r}}catch(e){return console.error(`Error loading project from folder "${t}":`,e),null}},toArray(t){return t?Array.isArray(t)?t:[String(t)]:[]}}},E=D,U=(0,l.A)(E,I,S,!1,null,"fe4da272",null),B=U.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"collaborator-panel"},[e("h2",[t._v("Collaborators")]),e("el-row",{attrs:{gutter:20,justify:"center"}},t._l(t.collaborators,(function(n,a){return e("el-col",{key:a,staticClass:"collaborator-col",attrs:{span:8}},[e("div",{staticClass:"collaborator-card"},[e("img",{staticClass:"avatar",attrs:{src:n.avatar,alt:"Avatar"}}),e("div",{staticClass:"info"},[e("a",{staticClass:"name",attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.name))]),e("div",{staticClass:"role"},[t._v(t._s(n.role))])])])])})),1)],1)},R=[],W={name:"CollaboratorPanel",data(){return{collaborators:[{name:"Yi-Chieh Lee",role:"Assistant Professor, NUS Computing",avatar:"/collaborators/EJ.png",link:"https://www.comp.nus.edu.sg/cs/people/yclee/"},{name:"Naomi Yamashita",role:"Senior Researcher, NTT Japan",avatar:"/collaborators/naomi.png",link:"http://naomi-yamashita.net/"},{name:"Chi-Lan Yang",role:"Assistant Professor, University of Tokyo",avatar:"/collaborators/chilan.png",link:"https://www.chilanyang.space/"},{name:"Jungup Lee",role:"Assistant Professor, NUS Social Work",avatar:"/collaborators/junguplee.png",link:"https://junguplee.com/"},{name:"Renwen Zhang",role:"Assistant Professor, NUS CNM",avatar:"/collaborators/renwenzhang.png",link:"https://renwenzhang.com/"},{name:"Xiangmin Fan",role:"Researcher, CAS Institute of Software",avatar:"/collaborators/xiangminfan.png",link:"https://lcs.ios.ac.cn/~xiangmin/"},{name:"Zicheng Zhu",role:"PostDoc, NUS School of Computing",avatar:"/collaborators/zichengzhu.png",link:"https://www.zicheng-zhu.com/"},{name:"Jingshu Li",role:"PhD candidate, NUS School of Computing",avatar:"/collaborators/jingshu.png",link:"https://jasonleejsl.github.io/"},{name:"Han Meng",role:"PhD candidate, NUS School of Computing",avatar:"/collaborators/hanmeng.png",link:"https://hanmeng2004.github.io/"},{name:"Yitian Yang",role:"PhD student, NUS School of Computing",avatar:"/collaborators/yitian.png",link:"https://yitian.super.site/"},{name:"Junti Zhang",role:"PhD student, NUS School of Computing",avatar:"/collaborators/junti.png",link:"https://junti.space/"},{name:"Yugin Tan",role:"PhD candidate, NUS School of Computing",avatar:"/collaborators/yugin.png",link:"https://lumos309.notion.site/Yugin-s-Online-Home-b3373f39bab748d6ae9dd30b38758334"}]}}},F=W,V=(0,l.A)(F,H,R,!1,null,"1780523e",null),Y=V.exports,z={name:"PersonalHomepage",components:{CollaboratorPanel:Y,ProjectPanel:B,RecentNews:A,ProfilePanel:w},data(){return{userName:"Qin Peinuan"}}},J=z,G=(0,l.A)(J,p,g,!1,null,null,null),$=G.exports,Z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-detail-blog"},[e("v-md-editor",{attrs:{height:"400px"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},q=[],K={name:"ProjectDetail",data(){return{content:"\n# Writing Retrieval System ✍️\n\nThis project is part of my PhD work at NUS. It's designed to support:\n\n- Language-aware writing\n- Highlight-based knowledge tracing\n- 🧠 Cognitive offloading\n\n## Screenshot\n\n![Writing System UI](/projects/AI-assisted%20writing.png)\n\n## Technologies\n\n```bash\nVue.js + Django + ChromaDB + LLM\n```\n\nStay tuned for the paper 📄!\n      "}}},Q=K,X=(0,l.A)(Q,Z,q,!1,null,null,null),tt=X.exports;a["default"].use(d.Ay);const et=[{path:"/",component:$},{path:"/project/:id",component:tt}],nt=new d.Ay({mode:"hash",routes:et});var at=nt,ot=n(4927),rt=n.n(ot),st=n(246),it=n.n(st),lt=n(5255),ct=n.n(lt),ut=n(8570),dt=n.n(ut),pt=n(9153),gt=n.n(pt);n(3043),n(2222),n(5943),n(591);ct().use(dt(),{Prism:gt()}),it().use(dt(),{Prism:gt()}),a["default"].use(ct()),a["default"].use(it()),a["default"].use(rt()),a["default"].config.productionTip=!1,new a["default"]({router:at,render:t=>t(u)}).$mount("#app"),console.log("环境变量：",{NODE_ENV:"production",BASE_URL:"/"})}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,o,r){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],o=t[u][1],r=t[u][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(i=!1,r<s&&(s=r));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,r,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var u=l(n)}for(e&&e(a);c<s.length;c++)r=s[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkcv_template"]=self["webpackChunkcv_template"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1603)}));a=n.O(a)})();
//# sourceMappingURL=app.a02fc4ab.js.map