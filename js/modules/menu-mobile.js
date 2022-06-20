import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.btnMobile = document.querySelector(menuBtn);
    this.menuItems = document.querySelector(menuList);
    this.events = events || ['click', 'touchstart'];
    this.ativoClass = 'ativo';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    this.btnMobile.classList.add(this.ativoClass);
    this.menuItems.classList.add(this.ativoClass);

    outsideClick(this.menuItems, this.events, () => {
      this.btnMobile.classList.remove(this.ativoClass);
      this.menuItems.classList.remove(this.ativoClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((eventsUser) => {
      this.btnMobile.addEventListener(eventsUser, this.openMenu);
    });
  }

  init() {
    if (this.btnMobile) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
