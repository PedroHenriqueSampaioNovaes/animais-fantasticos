import ScrollSuave from './modules/scroll-suave.js';
import TabNav from './modules/tabnav.js';
import AccordionList from './modules/accordion-list.js';
import ShowSections from './modules/scroll-animacao.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initHorarioFuncionamento from './modules/horario-funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

const tabNav = new TabNav('[data-tabmenu="menu"] li', '[data-tabcontent="content"] section');
tabNav.init();

const accordionList = new AccordionList('[data-accordion="list"] dt');
accordionList.init();

const showSection = new ShowSections('[data-anime="scroll"]');
showSection.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchAnimais();
initFetchBitcoin();
initHorarioFuncionamento();