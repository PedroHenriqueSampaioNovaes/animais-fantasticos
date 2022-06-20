import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, itens, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.dropdownItems = document.querySelectorAll(itens);
    this.events = events || ['click', 'touchstart'];
    this.ativo = 'ativo';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.ativo);

    this.dropdownItems.forEach((menuItem) => {
      if (element.contains(menuItem)) {
        outsideClick(menuItem, this.events, () => element.classList.remove(this.ativo));
      }
    });
  }

  addDropdownMenusEvent() {
    this.events.forEach((userEvent) => {
      this.dropdownMenus.forEach((menu) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
