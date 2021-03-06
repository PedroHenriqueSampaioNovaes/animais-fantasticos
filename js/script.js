import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tabnav.js';
import AccordionList from './modules/accordion-list.js';
import ShowSections from './modules/scroll-animacao.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import HorarioFuncionamento from './modules/horario-funcionamento.js';
import NavSlide from './modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const tabNav = new TabNav('[data-tabmenu="menu"] li', '[data-tabcontent="content"] section');
tabNav.init();

const accordionList = new AccordionList('[data-accordion="list"] dt');
accordionList.init();

const showSection = new ShowSections('[data-anime="scroll"]');
showSection.init();

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', '.dropdown-menu');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="items"]');
menuMobile.init();

fetchAnimais('./animaisapi.json', '.grid-numeros');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const horarioFuncionamento = new HorarioFuncionamento();
horarioFuncionamento.init();

const slide = new NavSlide('.slide-wrapper', '.slide');
slide.init();
slide.addControl('.custom-control');
slide.addArrow('.prev', '.next');
