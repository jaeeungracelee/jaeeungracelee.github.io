(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(16),n(4)),i=n(2),d=n(3);var m=()=>{const e=Object(a.useRef)(null),t=Object(a.useRef)({x:0,y:0});return Object(a.useEffect)(()=>{const n=e.current,a=new d.e,o=new d.d(75,window.innerWidth/window.innerHeight,.1,1e3),r=new d.f({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),n.appendChild(r.domElement);const c=new d.a,l=new d.c({color:14201855}),i=new d.b(c,l);a.add(i),o.position.z=5;const m=e=>{t.current.x=e.clientX/window.innerWidth*2-1,t.current.y=-e.clientY/window.innerHeight*2+1};window.addEventListener("mousemove",m);const s=()=>{requestAnimationFrame(s),i.rotation.x=t.current.y*Math.PI,i.rotation.y=t.current.x*Math.PI,r.render(a,o)};s();const u=()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u),window.removeEventListener("mousemove",m),n&&n.removeChild(r.domElement)}},[]),o.a.createElement("div",{ref:e})};n(17);var s=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)(()=>{const e=()=>{const e=document.body.classList.contains("dark-mode");document.body.style.backgroundColor=e?"#282c34":"#ffffff",document.body.style.color=e?"#ffffff":"#000000"};return e(),document.body.addEventListener("classChange",e),()=>{document.body.removeEventListener("classChange",e)}},[]),Object(a.useEffect)(()=>{const e=new Event("classChange");document.body.dispatchEvent(e)},[e]),o.a.createElement("div",{className:"home"},o.a.createElement("button",{className:"toggle-button",onClick:()=>{t(!e),e?document.body.classList.remove("dark-mode"):document.body.classList.add("dark-mode")}},e?"Light Mode":"Dark Mode"),o.a.createElement("nav",{className:"navigation"},o.a.createElement(l.b,{to:"/about"},"About"),o.a.createElement(l.b,{to:"/storyboard"},"Storyboard"),o.a.createElement(l.b,{to:"/contact"},"Contact")),o.a.createElement("div",{className:"three-container"},o.a.createElement(m,null)),o.a.createElement("header",{className:"home-header"},o.a.createElement("h1",null,"welcome to my portfolio"),o.a.createElement("p",null,"hi, i'm grace and i'm learning how to build a website")))};var u=()=>o.a.createElement("div",null,o.a.createElement("h1",null,"about me"),o.a.createElement("p",null,"this is the about page."));var E=()=>o.a.createElement("div",null,o.a.createElement("h1",null,"my storyboard"),o.a.createElement("p",null,"this is the storyboard page."));var h=()=>o.a.createElement("div",null,o.a.createElement("h1",null,"contact me"),o.a.createElement("p",null,"this is the contact page."));n(18);var w=()=>o.a.createElement(l.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(i.c,null,o.a.createElement(i.a,{path:"/",element:o.a.createElement(s,null)}),o.a.createElement(i.a,{path:"/about",element:o.a.createElement(u,null)}),o.a.createElement(i.a,{path:"/storyboard",element:o.a.createElement(E,null)}),o.a.createElement(i.a,{path:"/contact",element:o.a.createElement(h,null)}))));var b=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then(t=>{let{getCLS:n,getFID:a,getFCP:o,getLCP:r,getTTFB:c}=t;n(e),a(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null))),b()},8:function(e,t,n){e.exports=n(19)}},[[8,1,2]]]);
//# sourceMappingURL=main.214f2cd8.chunk.js.map