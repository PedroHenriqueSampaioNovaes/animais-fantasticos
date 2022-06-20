export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.ativo = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.ativo);
    item.nextElementSibling.classList.toggle(this.ativo);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
