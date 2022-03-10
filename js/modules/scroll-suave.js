export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="menu"] a[href^="#"]');

  function scrollSuave(event) {
    event.preventDefault();
    const sessao = document.querySelector(this.getAttribute('href'));

    sessao.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach(item => {
    item.addEventListener('click', scrollSuave);
  });
}