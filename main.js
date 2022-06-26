(()=>{"use strict";function t(t,e){let i;return(...s)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...s),i=null}),e)}}function e(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(e.forEach((t=>{s.removeEventListener(t,o)})),t.removeAttribute(n),i())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,o)))})),t.setAttribute(n,""))}class i{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleObserver=this.handleObserver.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.round(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleObserver(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleObserver),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault(),document.querySelector(t.currentTarget.getAttribute("href")).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>t.addEventListener("click",this.scrollToSection)))}init(){return this.linksInternos&&this.addLinkEvent(),this}}('[data-menu="menu"] a[href^="#"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)})),this.tabContent[t].classList.add(this.activeClass)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tabmenu="menu"] li','[data-tabcontent="content"] section').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.ativo="ativo"}toggleAccordion(t){t.classList.toggle(this.ativo),t.nextElementSibling.classList.toggle(this.ativo)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-accordion="list"] dt').init(),new class{constructor(e){this.sections=document.querySelectorAll(e),this.metadeWindow=.7*window.innerHeight,this.checkDistance=t(this.checkDistance.bind(this),50)}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.metadeWindow)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset&&t.element.classList.add("ativo")}))}addScrollSectionEvent(){window.addEventListener("scroll",this.checkDistance)}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.addScrollSectionEvent()),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e,i){this.containerModal=document.querySelector(t),this.botaoAbrir=document.querySelector(e),this.botaoFechar=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.containerModal&&this.botaoAbrir&&this.botaoFechar&&this.addModalEvents(),this}}('[data-modal="container"]','[data-modal="abrir"]','[data-modal="fechar"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.innerText=i,e.classList.add("tooltip"),document.body.appendChild(e),this.tooltipBox=e}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseOut),t.removeEventListener("mousemove",this.onMouseMove)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-this.tooltipBox.offsetWidth-10+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}addTooltipsEvents(){this.tooltips.forEach((t=>t.addEventListener("mouseover",this.onMouseOver)))}init(){return this.tooltips&&this.addTooltipsEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e,i){this.dropdownMenus=document.querySelectorAll(t),this.dropdownItems=document.querySelectorAll(e),this.events=i||["click","touchstart"],this.ativo="ativo",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(t){t.preventDefault();const i=t.currentTarget;i.classList.add(this.ativo),this.dropdownItems.forEach((t=>{i.contains(t)&&e(t,this.events,(()=>i.classList.remove(this.ativo)))}))}addDropdownMenusEvent(){this.events.forEach((t=>{this.dropdownMenus.forEach((e=>{e.addEventListener(t,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]",".dropdown-menu").init(),new class{constructor(t,e,i){this.btnMobile=document.querySelector(t),this.menuItems=document.querySelector(e),this.events=i||["click","touchstart"],this.ativoClass="ativo",this.openMenu=this.openMenu.bind(this)}openMenu(t){"touchstart"===t.type&&t.preventDefault(),this.btnMobile.classList.add(this.ativoClass),this.menuItems.classList.add(this.ativoClass),e(this.menuItems,this.events,(()=>{this.btnMobile.classList.remove(this.ativoClass),this.menuItems.classList.remove(this.ativoClass)}))}addMenuMobileEvent(){this.events.forEach((t=>{this.btnMobile.addEventListener(t,this.openMenu)}))}init(){return this.btnMobile&&this.addMenuMobileEvent(),this}}('[data-menu="button"]','[data-menu="items"]').init(),function(t,e){const s=document.querySelector(".grid-numeros");!async function(){try{const t=await fetch("./animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3><span data-numero>${t.total}</span>`,e}(t);s.appendChild(e)}(t))),new i("[data-numero]",".numeros","ativo").init()}catch(t){console.log(Error(t))}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{const e=document.querySelector(".btc-preco"),i=(100/t.BRL.sell).toFixed(4);e.innerText=i})),(new class{constructor(){this.funcionamento=document.querySelector("[data-semana]"),this.classActive="aberto"}dadosAgora(){this.data=new Date,this.diaAtual=this.data.getDay(),this.horarioAtual=this.data.getHours()}diasFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(", ").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(", ").map(Number)}estaAberto(){return this.diaAberto=this.diasSemana.includes(this.diaAtual),this.horarioAberto=this.horarioSemana[0]<=this.horarioAtual&&this.horarioAtual<=this.horarioSemana[1],this.diaAberto&&this.horarioAberto}ativaAberto(){this.estaAberto()&&(this.funcionamento.classList.add(this.classActive),this.funcionamento.setAttribute("title","Estabelecimento aberto"))}init(){return this.funcionamento&&(this.diasFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}).init();const s=new class extends class{constructor(t,e){this.wrapper=document.querySelector(t),this.slide=document.querySelector(e),this.activeClass="active",this.changeSlideEvent=new Event("changeSlide"),this.dist={startX:0,finalPosition:0,movement:0}}transition(t){this.slide.style.transition=t?"transform 0.4s":""}onStart(t){"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,this.wrapper.addEventListener("mousemove",this.onMove)):(this.dist.startX=t.changedTouches[0].clientX,this.wrapper.addEventListener("touchmove",this.onMove)),this.transition(!1)}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0, 0)`}changePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.changePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.transition(!0),this.changeSlideOnEnd()}getDistanceSlides(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.arraySlide=[...this.slide.children].map((t=>({position:this.getDistanceSlides(t),element:t})))}getIndexSlides(t){const e=this.arraySlide.length-1;this.indexSlides={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.indexSlides.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.indexSlides.prev?this.activePrevSlide():this.changeSlide(this.indexSlides.active)}activeNextSlide(){void 0!==this.indexSlides.next&&this.changeSlide(this.indexSlides.next)}activePrevSlide(){void 0!==this.indexSlides.prev&&this.changeSlide(this.indexSlides.prev)}changeActiveSlide(){this.arraySlide.forEach((t=>t.element.classList.remove(this.activeClass))),this.arraySlide[this.indexSlides.active].element.classList.add(this.activeClass)}changeSlide(t){const e=this.arraySlide[t];this.moveSlide(e.position),this.getIndexSlides(t),this.dist.finalPosition=e.position,this.changeActiveSlide(),this.wrapper.dispatchEvent(this.changeSlideEvent)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.indexSlides.active)}),500)}resizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this),this.onResize=t(this.onResize.bind(this),200)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("touchend",this.onEnd)}init(){return this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.changeSlide(2),this.resizeEvent(),this}}{constructor(t,e){super(t,e),this.bindControl()}addArrow(t,e){this.btnPrev=document.querySelector(t),this.btnNext=document.querySelector(e),this.addArrowEvent()}addArrowEvent(){this.btnPrev.addEventListener("click",this.activePrevSlide),this.btnNext.addEventListener("click",this.activeNextSlide)}createControls(){const t=document.createElement("ul");return t.dataset.control="slide",this.arraySlide.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),t}activeControlItem(){this.arrayControls.forEach((t=>t.classList.remove(this.activeClass))),this.arrayControls[this.indexSlides.active].classList.add(this.activeClass)}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e)})),this.wrapper.addEventListener("changeSlide",this.activeControlItem)}addControl(t){const e=void 0!==t?document.querySelector(t):this.createControls();this.arrayControls=[...e.children],this.activeControlItem(),this.arrayControls.forEach(this.eventControl)}bindControl(){this.activeControlItem=this.activeControlItem.bind(this),this.eventControl=this.eventControl.bind(this)}}(".slide-wrapper",".slide");s.init(),s.addControl(".custom-control"),s.addArrow(".prev",".next")})();