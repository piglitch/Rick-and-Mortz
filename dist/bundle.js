(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),d=t(667),c=t.n(d),l=new URL(t(914),t.b),s=a()(r());s.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&display=swap);"]);var p=c()(l);s.push([e.id,`body{\n  font-family: 'IBM Plex Mono', monospace;\n  margin: 20px;\n  justify-content: center;\n  height: 100vh;\n  overflow: hidden;\n  background: url(${p}) no-repeat;\n  background-size: cover;\n  color: greenyellow;\n  background-position: center;\n}\n.charDiv{\n  margin-top: 180px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 2px;\n}\n.char-input{\n  background: black;\n  width: fit-content;\n  padding: 5px;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  border-top: none;\n}\n.details{\n  border: 1px solid greenyellow;\n  width: 450px;\n  height: 250px;\n  backdrop-filter: blur(5px);\n  border-radius: 5px;\n  padding: 20px;\n  background: rgba(0, 0, 0, 0.5);\n  color: greenyellow;\n  font-size: larger;\n  font-weight: 900;\n}\n.char-image{\n  width: 344px;\n  height: 350px;\n  backdrop-filter: blur(5px);\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.5);\n}\n.buttons{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 240px;\n}\n.buttons button{\n  padding: 15px;\n  width: 230px;\n  border: 5px solid crimson;\n  border-radius: 15px;\n  background: black;\n  color: crimson;\n  text-align: center;\n  font-size: larger;\n  font-weight: 900;\n  cursor: pointer;\n  transition: background 0.2s ease-in-out;\n}\n.buttons button:hover{\n  background: greenyellow;\n}\n.locArea{\n  width: 450px;\n  height: 200px;\n  border: 1px solid greenyellow;\n  padding: 50px;\n  color: greenyellow;\n  font-size: larger;\n  font-weight: 900;\n  backdrop-filter: blur(5px);\n  border-radius: 5px;\n  background:  rgba(0, 0, 0, 0.5);\n}\n.locInput{\n  width: 480px;\n  padding: 5px;\n  background: none;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  color: greenyellow;\n  outline: none;\n}\n.locInputDiv{\n  display: flex;\n  justify-content: space-between;\n  background: black;\n  width: 536px;\n  padding: 8px;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  gap: 10px;\n  border-top: none;\n  padding-bottom: 15px;\n}\n.locDiv{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 180px;\n}\n.locSubmit{\n  background : none;\n  color : greenyellow;\n  border : 1px solid greenyellow;\n  border-radius: 5px;\n  padding : 5px;\n  cursor : pointer;\n  transition: background .2s ease-in-out;\n  width: 150px;\n}\n.locSubmit:hover{\n  background : greenyellow;\n  color: black;\n}\n.sbmtBtn{\n  padding: 5px;\n  background: none;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  color: greenyellow;  \n  cursor: pointer;\n  transition: background .2s ease-in-out;\n}\n.sbmtBtn:hover{\n  color: black;\n  background: greenyellow;\n}\n.epiArea{  \n  width: 450px;\n  height: 200px;\n  border: 1px solid greenyellow;\n  padding: 50px;\n  color: greenyellow;\n  font-size: larger;\n  font-weight: 900;\n  backdrop-filter: blur(5px);\n  border-radius: 5px;\n  background:  rgba(0, 0, 0, 0.5);\n}\n.epiInputDiv{  \n  display: flex;\n  justify-content: space-between;\n  background: black;\n  width: 534px;\n  padding: 8px;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  gap: 10px;\n  border-top: none;\n  padding-bottom: 15px;\n}\n.epiDiv{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 180px;\n}\n.epiInput{\n  width: 480px;\n  padding: 5px;\n  background: none;\n  border: 1px solid greenyellow;\n  border-radius: 5px;\n  color: greenyellow;\n  outline: none;\n}\n.epiSubmit{\n  background : none;\n  color : greenyellow;\n  border : 1px solid greenyellow;\n  border-radius: 5px;\n  padding : 5px;\n  cursor : pointer;\n  transition: background .2s ease-in-out;\n  width: 150px;\n}\n.epiSubmit:hover{\n  color: black;\n  background: greenyellow;\n}\n.closeModal{\n  position: absolute;\n  margin-top: 1rem;\n  margin-left: 30rem;\n  fill: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: fill .3s ease-in-out;\n  transition: scale .3s ease-in-out;\n}\n.closeModal:hover{\n  scale: 1.5;\n  fill: rgb(255, 0, 0);\n}\n.closecharModal{  \n  position: absolute;\n  margin-top: 1rem;\n  margin-left: 48rem;\n  fill: rgba(255, 255, 255, 0.3);\n  cursor: pointer;\n  transition: fill .3s ease-in-out;\n  transition: scale .3s ease-in-out;\n}\n.closecharModal:hover{\n  scale: 1.5;\n  fill: rgb(255, 0, 0);\n}\n`,""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],l=o.base?c[0]+o.base:c[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=r(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=t(i[a]);n[d].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},914:(e,n,t)=>{e.exports=t.p+"f000703ae38d75b145df.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),d=t(565),c=t.n(d),l=t(216),s=t.n(l),p=t(589),u=t.n(p),m=t(426),g={};function h(){const e=document.createElement("div");e.classList.add("buttons");const n=document.createElement("button");n.classList.add("character"),n.textContent="Character";const t=document.createElement("button");t.classList.add("location"),t.textContent="Location";const o=document.createElement("button");o.classList.add("episode"),o.textContent="Episodes",e.appendChild(n),e.appendChild(t),e.appendChild(o),document.body.appendChild(e)}g.styleTagTransform=u(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=s(),n()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const b=()=>{document.body.innerHTML="";const e=document.createElement("script");e.src="bundle.js",document.body.appendChild(e),h();const n=document.createElement("div");n.classList.add("epiArea"),document.body.appendChild(n);const t=document.createElement("div");t.textContent="Episode name: ";const o=document.createElement("div");o.textContent="Air-Date: ",o.style.marginTop="20px";const r=document.createElement("div");r.textContent="Episode number: ",r.style.marginTop="20px",n.appendChild(t),n.appendChild(o),n.appendChild(r);const i=document.createElement("div");i.classList.add("epiInputDiv");const a=document.createElement("label");a.textContent="Episode: ",a.style.marginTop="auto",a.style.marginBottom="auto";const d=document.createElement("input");d.style.padding="5px",d.classList.add("epiInput");const c=document.createElement("button");c.textContent="Submit",c.classList.add("epiSubmit");const l=document.createElement("div");l.classList.add("closeModal"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';const s=document.createElement("div");s.classList.add("epiDiv"),i.appendChild(a),i.appendChild(d),i.appendChild(c),s.appendChild(n),s.appendChild(i),s.appendChild(l),document.body.appendChild(s),c.addEventListener("click",(()=>{!async function(e){try{if(""===d.value)return void window.alert("No input received!");const n=await fetch(`https://rickandmortyapi.com/api/episode/?name=${e}`,{mode:"cors"}),i=await n.json();console.log(i.results[0]),t.textContent=`Episode name: ${i.results[0].name}`,o.textContent=`Air-Date: ${i.results[0].air_date}`,r.textContent=`Episode number: ${i.results[0].episode}`}catch(e){console.error(e),window.alert("Could not find!")}}(d.value)}))},x=()=>{document.body.innerHTML="";const e=document.createElement("script");e.src="bundle.js",document.body.appendChild(e),h();const n=document.createElement("div");n.classList.add("locArea"),document.body.appendChild(n);const t=document.createElement("div");t.textContent="Planet: ";const o=document.createElement("div");o.textContent="Dimension: ",o.style.marginTop="20px";const r=document.createElement("div");r.textContent="Type: ",r.style.marginTop="20px",n.appendChild(t),n.appendChild(o),n.appendChild(r);const i=document.createElement("div");i.classList.add("locInputDiv");const a=document.createElement("label");a.textContent="Location: ",a.style.marginTop="auto",a.style.marginBottom="auto";const d=document.createElement("input");d.style.padding="5px",d.classList.add("locInput");const c=document.createElement("button");c.textContent="Submit",c.classList.add("locSubmit");const l=document.createElement("div");l.classList.add("closeModal"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';const s=document.createElement("div");s.classList.add("locDiv"),i.appendChild(a),i.appendChild(d),i.appendChild(c),s.appendChild(n),s.appendChild(i),s.appendChild(l),document.body.appendChild(s),c.addEventListener("click",(()=>{!async function(e){try{if(null!=d.value&&""!==d.value){const n=await fetch(`https://rickandmortyapi.com/api/location/?name=${e}`,{mode:"cors"}),i=await n.json();return t.textContent=`Planet: ${i.results[0].name}`,o.textContent=`Dimension: ${i.results[0].dimension}`,r.textContent=`Type: ${i.results[0].type}`,void console.log(i.results,i.results[0].dimension)}window.alert("No input received!")}catch(e){console.error(e),window.alert("Could not find!"),t.textContent="Planet: ",o.textContent="Dimension: ",r.textContent="Type: "}}(d.value)}))},y=()=>{document.body.innerHTML="";const e=document.createElement("script");e.src="bundle.js",document.body.appendChild(e),h();const n=document.querySelector("body"),t=document.createElement("div");t.classList.add("char-image"),t.textContent="The character will appear here",t.style.textAlign="center";const o=document.createElement("div");o.classList.add("char-input");const r=document.createElement("label");r.setAttribute("for","text"),r.textContent="Character: ";const i=document.createElement("input");i.setAttribute("type","text"),i.style.padding="5px",i.style.background="none",i.style.border="1px solid greenyellow",i.style.borderRadius="5px",i.style.color="greenyellow",i.style.outline="none";const a=document.createElement("button");a.classList.add("sbmtBtn"),a.textContent="Submit";const d=document.createElement("div");d.classList.add("details");const c=document.createElement("div");c.classList.add("name"),c.style.marginTop="20px",c.textContent="Name: ";const l=document.createElement("div");l.classList.add("species"),l.style.marginTop="20px",l.textContent="Species: ";const s=document.createElement("div");s.classList.add("gender"),s.style.marginTop="20px",s.textContent="Gender: ";const p=document.createElement("div");p.classList.add("char-location"),p.style.marginTop="20px",p.textContent="Location: ";const u=document.createElement("div");u.classList.add("status"),u.style.marginTop="20px",u.textContent="Is Alive? ",o.appendChild(r),o.appendChild(i),o.appendChild(a),d.appendChild(c),d.appendChild(l),d.appendChild(s),d.appendChild(p),d.appendChild(u);const m=document.createElement("div");m.appendChild(t),m.appendChild(o);const g=document.createElement("div");g.classList.add("closecharModal"),g.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';const b=document.createElement("div");b.classList.add("charDiv"),b.appendChild(m),b.appendChild(d),b.appendChild(g),n.appendChild(b),document.querySelector(".sbmtBtn").addEventListener("click",(()=>{const e=document.createElement("img");let n="";e.innerHTML="",n=document.querySelector("input").value,async function(t){try{if(null!=n&&""!==n){const o=document.querySelector(".char-image");o.textContent="",o.appendChild(e);const r=await fetch(`https://rickandmortyapi.com/api/character/?name=${t}`,{mode:"cors"}),i=await r.json();return e.src=i.results[0].image,e.height=350,e.width=344,document.querySelector(".name").textContent=`Name: ${i.results[0].name}`,document.querySelector(".species").textContent=`Species: ${i.results[0].species}`,document.querySelector(".gender").textContent=`Gender: ${i.results[0].gender}`,document.querySelector(".char-location").textContent=`Location: ${i.results[0].location.name}`,"Alive"===i.results[0].status?void(document.querySelector(".status").textContent="Is Alive? Yes"):(document.querySelector(".status").textContent="Is Alive? No",void console.log(n,r.results))}window.alert("No input recieved!")}catch(e){console.log(e),window.alert("Could not find"),c.textContent="Name: ",l.textContent="Species: ",s.textContent="Gender: ",p.textContent="Location: "}}(n)}))},v=function(){document.querySelector(".closeModal").addEventListener("click",(()=>{document.querySelector(".epiDiv").style.display="none"}))},f=function(){document.querySelector(".closecharModal").addEventListener("click",(()=>{document.querySelector(".charDiv").style.display="none"}))},w=function(){document.querySelector(".closeModal").addEventListener("click",(()=>{document.querySelector(".locDiv").style.display="none"}))};let C=!0,E=!0,L=!0;document.querySelector(".character").addEventListener("click",(()=>{!0===C&&(E=!0,L=!0,C=!1,y(),f())})),document.querySelector(".location").addEventListener("click",(()=>{console.log("hi"),!0===E&&(C=!0,L=!0,E=!1,x(),console.log("Location here"),w())})),document.querySelector(".episode").addEventListener("click",(()=>{console.log("hi"),!0===L&&(C=!0,E=!0,L=!1,b("pilot"),v(),console.log("Episodes  here"))}))})()})();