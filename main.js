(()=>{"use strict";function t(t,e,n){const i=document.documentElement,o="data-outside";function s(c){t.contains(c.target)||(e.forEach((t=>{i.removeEventListener(t,s)})),t.removeAttribute(o),n())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,s)))})),t.setAttribute(o,""))}new class{constructor(t){this.linksInternos=document.querySelectorAll(t),this.scrollSuave=this.scrollSuave.bind(this)}scrollSuave(t){t.preventDefault(),document.querySelector(t.currentTarget.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"})}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollSuave)}))}init(){return this.linksInternos&&this.addLinkEvent(),this}}('[data-menu="menu"] a[href^="#"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tabmenu="menu"] li','[data-tabcontent="content"] section').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.ativo="ativo"}toggleAccordion(t){t.classList.toggle(this.ativo),t.nextElementSibling.classList.toggle(this.ativo)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-accordion="list"] dt').init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.metadeWindow=.7*window.innerHeight,this.checkDistance=function(t,e){let n;return(...e)=>{n&&clearTimeout(n),n=setTimeout((()=>{t(...e),n=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.metadeWindow)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset&&t.element.classList.add("ativo")}))}addScrollSectionEvent(){window.addEventListener("scroll",this.checkDistance)}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addScrollSectionEvent()),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),function(){const t=document.querySelector('[data-modal="container"]'),e=document.querySelector('[data-modal="abrir"]'),n=document.querySelector('[data-modal="fechar"]');if(t&&e&&n){function i(e){e.preventDefault(),t.classList.toggle("ativo"),t.classList.contains("ativo")?(n.addEventListener("click",i),t.addEventListener("click",o)):(n.removeEventListener("click",i),t.removeEventListener("click",o))}function o(t){this===t.target&&i(t)}e.addEventListener("click",i)}}(),function(){const t=document.querySelectorAll("[data-tooltip]");if(t){function e(){const t=n(this);o.tooltip=t,this.addEventListener("mousemove",o),i.tooltip=t,this.addEventListener("mouseout",i)}function n(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.innerText=n,e.classList.add("tooltip"),document.body.appendChild(e),e}t.forEach((t=>t.addEventListener("mouseover",e)));const i={handleEvent(t){this.tooltip.remove(),t.currentTarget.removeEventListener("mouseout",i),t.currentTarget.removeEventListener("mousemove",o)}},o={handleEvent(t){this.tooltip.style.top=t.pageY+20+"px",this.tooltip.style.left=t.pageX+20+"px"}}}}(),function(){const e=document.querySelectorAll("[data-dropdown]"),n=document.querySelectorAll(".dropdown-menu"),i=["click","touchstart"];function o(e){e.preventDefault(),this.classList.add("ativo"),n.forEach((e=>{this.contains(e)&&t(e,i,(()=>this.classList.remove("ativo")))}))}i.forEach((t=>{e.forEach((e=>e.addEventListener(t,o)))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="items"]'),i=["click","touchstart"];if(e){function o(o){"touchstart"===o.type&&o.preventDefault(),e.classList.add("ativo"),n.classList.add("ativo"),t(n,i,(()=>{e.classList.remove("ativo"),n.classList.remove("ativo")}))}i.forEach((t=>{e.addEventListener(t,o)}))}}(),async function(t){try{const t=document.querySelector(".grid-numeros"),e=await fetch("./animaisapi.json");(await e.json()).forEach((e=>{const n=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(e);t.appendChild(n),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(){t.classList.contains("ativo")&&(document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=Math.round(e/100);let i=0;const o=setInterval((()=>{i+=n,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())})),e.disconnect())}));e.observe(t,{attributes:!0})}()}))}catch(t){console.log(Error(t))}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{const e=document.querySelector(".btc-preco"),n=(100/t.BRL.sell).toFixed(4);e.innerText=n})),function(){const t=new Date,e=t.getDay(),n=t.getHours(),i=document.querySelector("[data-semana]"),o=i.dataset.semana.split(", ").map(Number),s=i.dataset.horario.split(", ").map(Number),c=o.includes(e),a=s[0]<=n&&n<=s[1];c&&a&&(i.classList.add("aberto"),i.setAttribute("title","Estabelecimento aberto"))}()})();