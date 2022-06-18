export default class ScrollSuave {
  constructor(link) {
    this.linksInternos = document.querySelectorAll(link);

    this.scrollSuave = this.scrollSuave.bind(this);
  }

  scrollSuave(event) {
    event.preventDefault();
    const sessao = document.querySelector(event.currentTarget.getAttribute('href'));

    sessao.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  addLinkEvent() {
    this.linksInternos.forEach(item => {
      item.addEventListener('click', this.scrollSuave);
    });
  }

  init() {
    if (this.linksInternos) {
      this.addLinkEvent();
    }
    return this;
  }
}