/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AccordionList)\n/* harmony export */ });\nclass AccordionList {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.ativo = 'ativo';\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.ativo);\n    item.nextElementSibling.classList.toggle(this.ativo);\n  }\n\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionList.length) {\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n  \n    numeros.forEach(numero => {\n      const numTotal = +numero.innerText;\n      const incremento = Math.round(numTotal / 100);\n  \n      let numAtual = 0;\n      const intervalo = setInterval(() => {\n        numAtual += incremento;\n        numero.innerText = numAtual;\n  \n        if(numAtual > numTotal) {\n          numero.innerText = numTotal;\n          clearInterval(intervalo);\n        }\n      }, 25 * Math.random());\n    })\n  }\n  \n  \n  function handleObserver() {\n    if(observeTarget.classList.contains('ativo')) {\n      animaNumeros();\n      observer.disconnect();\n    }\n  }\n  \n  const observeTarget = document.querySelector('.numeros');\n  const observer = new MutationObserver(handleObserver);\n  observer.observe(observeTarget, {attributes: true});\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(dropdownMenus, itens, events) {\r\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\r\n    this.dropdownItems = document.querySelectorAll(itens);\r\n    this.events = events || ['click', 'touchstart'];\r\n    this.ativo = 'ativo';\r\n\r\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\r\n  }\r\n\r\n  activeDropdownMenu(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.ativo);\r\n\r\n    this.dropdownItems.forEach((menuItem) => {\r\n      if (element.contains(menuItem)) {\r\n        (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuItem, this.events, () => element.classList.remove(this.ativo));\r\n      }\r\n    });\r\n  }\r\n\r\n  addDropdownMenusEvent() {\r\n    this.events.forEach((userEvent) => {\r\n      this.dropdownMenus.forEach((menu) => {\r\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.dropdownMenus.length) {\r\n      this.addDropdownMenusEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais(urlApi, gridNumeros) {\n  const numeroGrid = document.querySelector(gridNumeros);\n\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    try {\n      const responseAnimais = await fetch(url);\n      const animaisJSON = await responseAnimais.json();\n\n      animaisJSON.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numeroGrid.appendChild(divAnimal);\n        (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      });\n    } catch (erro) {\n      console.log(Error(erro));\n    }\n  }\n  fetchAnimais(urlApi);\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch('https://blockchain.info/ticker')\r\n  .then(response => response.json())\r\n  .then(bitcoin => {\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    const valorReal = (100 / bitcoin.BRL.sell).toFixed(4);\r\n    btcPreco.innerText = valorReal;\r\n  })\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/horario-funcionamento.js":
/*!*********************************************!*\
  !*** ./js/modules/horario-funcionamento.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHorarioFuncionamento)\n/* harmony export */ });\nfunction initHorarioFuncionamento() {\r\n  const data = new Date();\r\n  const diaAtual = data.getDay();\r\n  const horarioAtual = data.getHours();\r\n\r\n  const funcionamento = document.querySelector('[data-semana]');\r\n  const diasSemana = funcionamento.dataset.semana.split(', ').map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(', ').map(Number);\r\n\r\n  const diaAberto = diasSemana.includes(diaAtual);\r\n  const horarioAberto = (horarioSemana[0] <= horarioAtual && horarioAtual <= horarioSemana[1]);\r\n\r\n  if(diaAberto && horarioAberto) {\r\n    funcionamento.classList.add('aberto');\r\n    funcionamento.setAttribute('title', 'Estabelecimento aberto');\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/horario-funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./js/modules/outsideClick.js\");\n\n\nclass MenuMobile {\n  constructor(menuBtn, menuList, events) {\n    this.btnMobile = document.querySelector(menuBtn);\n    this.menuItems = document.querySelector(menuList);\n    this.events = events || ['click', 'touchstart'];\n    this.ativoClass = 'ativo';\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  openMenu(event) {\n    if (event.type === 'touchstart') event.preventDefault();\n    this.btnMobile.classList.add(this.ativoClass);\n    this.menuItems.classList.add(this.ativoClass);\n\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuItems, this.events, () => {\n      this.btnMobile.classList.remove(this.ativoClass);\n      this.menuItems.classList.remove(this.ativoClass);\n    });\n  }\n\n  addMenuMobileEvent() {\n    this.events.forEach((eventsUser) => {\n      this.btnMobile.addEventListener(eventsUser, this.openMenu);\n    });\n  }\n\n  init() {\n    if (this.btnMobile) {\n      this.addMenuMobileEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(container, btnAbrir, btnFechar) {\r\n    this.containerModal = document.querySelector(container);\r\n    this.botaoAbrir = document.querySelector(btnAbrir);\r\n    this.botaoFechar = document.querySelector(btnFechar);\r\n\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) this.toggleModal();\r\n  }\r\n\r\n  addModalEvents() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.containerModal && this.botaoAbrir && this.botaoFechar) {\r\n      this.addModalEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideClick.js":
/*!************************************!*\
  !*** ./js/modules/outsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  \r\n  if(!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    })\r\n    element.setAttribute(outside, '');\r\n  }\r\n\r\n  function handleOutsideClick(event) {\r\n    if(!element.contains(event.target)) {\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      element.removeAttribute(outside);\r\n      callback();\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outsideClick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowSections)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ShowSections {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.metadeWindow = window.innerHeight * 0.7;\r\n\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\r\n  }\r\n\r\n  getDistance() {\r\n    this.distance = [...this.sections].map((section) => {\r\n      const offset = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offset: Math.floor(offset - this.metadeWindow),\r\n      };\r\n    });\r\n  }\r\n\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offset) {\r\n        item.element.classList.add('ativo');\r\n      }\r\n    });\r\n  }\r\n\r\n  addScrollSectionEvent() {\r\n    window.addEventListener('scroll', this.checkDistance);\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      this.addScrollSectionEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n  stop() {\r\n    window.removeEventListener('scroll', this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(link, options) {\n    this.linksInternos = document.querySelectorAll(link);\n\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const sessao = document.querySelector(event.currentTarget.getAttribute('href'));\n\n    sessao.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((item) => item.addEventListener('click', this.scrollToSection));\n  }\n\n  init() {\n    if (this.linksInternos) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabMenu)\n/* harmony export */ });\nclass TabMenu {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.tabContent.forEach((item) => {\r\n      item.classList.remove(this.activeClass);\r\n    });\r\n\r\n    this.tabContent[index].classList.add(this.activeClass);\r\n  }\r\n\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((item, index) => {\r\n      item.addEventListener('click', () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n  }\r\n\r\n  onMouseOver({currentTarget}) {\r\n    this.criarTooltipBox(currentTarget);\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  }\r\n\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.innerText = text;\r\n    tooltipBox.classList.add('tooltip');\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  onMouseLeave({currentTarget}) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseOut);\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  }\r\n\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - this.tooltipBox.offsetWidth - 10}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  addTooltipsEvents() {\r\n    this.tooltips.forEach(tooltip => tooltip.addEventListener('mouseover', this.onMouseOver));\r\n  }\r\n\r\n  init() {\r\n    if(this.tooltips) {\r\n      this.addTooltipsEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/horario-funcionamento.js */ \"./js/modules/horario-funcionamento.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"menu\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-tabmenu=\"menu\"] li', '[data-tabcontent=\"content\"] section');\ntabNav.init();\n\nconst accordionList = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-accordion=\"list\"] dt');\naccordionList.init();\n\nconst showSection = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-anime=\"scroll\"]');\nshowSection.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"container\"]', '[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\nconst dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-dropdown]', '.dropdown-menu');\ndropdownMenu.init();\n\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"items\"]');\nmenuMobile.init();\n\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('./animaisapi.json', '.grid-numeros');\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_horario_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;