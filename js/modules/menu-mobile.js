import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const btnMobile = document.querySelector('[data-menu="button"]');
  const menuItems = document.querySelector('[data-menu="items"]');
  const events = ['click', 'touchstart'];
  
  events.forEach(eventsUser => {
    btnMobile.addEventListener(eventsUser, handleClick);
  })
  
  function handleClick(event) {
    if(event.type === 'touchstart') event.preventDefault();
    btnMobile.classList.add('ativo');
    menuItems.classList.add('ativo');
  
    outsideClick(menuItems, events, () => {
      btnMobile.classList.remove('ativo');
      menuItems.classList.remove('ativo');
    })
  }
}