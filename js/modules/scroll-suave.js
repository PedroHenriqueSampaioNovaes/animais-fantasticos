export default class ScrollSuave {
  constructor(link, options) {
    this.linksInternos = document.querySelectorAll(link);

    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const sessao = document.querySelector(event.currentTarget.getAttribute('href'));

    sessao.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => item.addEventListener('click', this.scrollToSection));
  }

  init() {
    if (this.linksInternos) {
      this.addLinkEvent();
    }
    return this;
  }
}
