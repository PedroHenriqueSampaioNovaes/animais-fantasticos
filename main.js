(()=>{"use strict";function t(t,e,s){const i=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(e.forEach((t=>{i.removeEventListener(t,n)})),t.removeAttribute(o),s())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,n)))})),t.setAttribute(o,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=s,this.handleObserver=this.handleObserver.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.round(e/100);let i=0;const o=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleObserver(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleObserver),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault(),document.querySelector(t.currentTarget.getAttribute("href")).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>t.addEventListener("click",this.scrollToSection)))}init(){return this.linksInternos&&this.addLinkEvent(),this}}('[data-menu="menu"] a[href^="#"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tabmenu="menu"] li','[data-tabcontent="content"] section').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.ativo="ativo"}toggleAccordion(t){t.classList.toggle(this.ativo),t.nextElementSibling.classList.toggle(this.ativo)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-accordion="list"] dt').init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.metadeWindow=.7*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.metadeWindow)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset&&t.element.classList.add("ativo")}))}addScrollSectionEvent(){window.addEventListener("scroll",this.checkDistance)}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addScrollSectionEvent()),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e,s){this.containerModal=document.querySelector(t),this.botaoAbrir=document.querySelector(e),this.botaoFechar=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.containerModal&&this.botaoAbrir&&this.botaoFechar&&this.addModalEvents(),this}}('[data-modal="container"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}criarTooltipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.innerText=s,e.classList.add("tooltip"),document.body.appendChild(e),this.tooltipBox=e}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseOut),t.removeEventListener("mousemove",this.onMouseMove)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-this.tooltipBox.offsetWidth-10+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}addTooltipsEvents(){this.tooltips.forEach((t=>t.addEventListener("mouseover",this.onMouseOver)))}init(){return this.tooltips&&this.addTooltipsEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e,s){this.dropdownMenus=document.querySelectorAll(t),this.dropdownItems=document.querySelectorAll(e),this.events=s||["click","touchstart"],this.ativo="ativo",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const s=e.currentTarget;s.classList.add(this.ativo),this.dropdownItems.forEach((e=>{s.contains(e)&&t(e,this.events,(()=>s.classList.remove(this.ativo)))}))}addDropdownMenusEvent(){this.events.forEach((t=>{this.dropdownMenus.forEach((e=>{e.addEventListener(t,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]",".dropdown-menu").init(),new class{constructor(t,e,s){this.btnMobile=document.querySelector(t),this.menuItems=document.querySelector(e),this.events=s||["click","touchstart"],this.ativoClass="ativo",this.openMenu=this.openMenu.bind(this)}openMenu(e){"touchstart"===e.type&&e.preventDefault(),this.btnMobile.classList.add(this.ativoClass),this.menuItems.classList.add(this.ativoClass),t(this.menuItems,this.events,(()=>{this.btnMobile.classList.remove(this.ativoClass),this.menuItems.classList.remove(this.ativoClass)}))}addMenuMobileEvent(){this.events.forEach((t=>{this.btnMobile.addEventListener(t,this.openMenu)}))}init(){return this.btnMobile&&this.addMenuMobileEvent(),this}}('[data-menu="button"]','[data-menu="items"]').init(),function(t,s){const i=document.querySelector(".grid-numeros");!async function(){try{const t=await fetch("./animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(Error(t))}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{const e=document.querySelector(".btc-preco"),s=(100/t.BRL.sell).toFixed(4);e.innerText=s})),function(){const t=new Date,e=t.getDay(),s=t.getHours(),i=document.querySelector("[data-semana]"),o=i.dataset.semana.split(", ").map(Number),n=i.dataset.horario.split(", ").map(Number),a=o.includes(e),r=n[0]<=s&&s<=n[1];a&&r&&(i.classList.add("aberto"),i.setAttribute("title","Estabelecimento aberto"))}()})();