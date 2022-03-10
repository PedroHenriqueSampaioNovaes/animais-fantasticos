import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const dropdownItems = document.querySelectorAll('.dropdown-menu');
  const events = ['click', 'touchstart'];

  events.forEach(userEvent => {
    dropdownMenus.forEach(menu => menu.addEventListener(userEvent, handleClick));
  })
  
  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    
    dropdownItems.forEach(menuItem => {
      if(this.contains(menuItem)) {
        outsideClick(menuItem, events, () => this.classList.remove('ativo'));
      }
    })
  }
}