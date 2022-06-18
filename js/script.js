import ScrollSuave from './modules/scroll-suave.js';
import initTabNav from './modules/tabnav.js';
import initAccordionList from './modules/accordion-list.js';
import initShowSections from './modules/scroll-animacao.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initHorarioFuncionamento from './modules/horario-funcionamento.js';

const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]');
scrollSuave.init();

initTabNav();
initAccordionList();
initShowSections();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFetchAnimais();
initFetchBitcoin();
initHorarioFuncionamento();