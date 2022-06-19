export default class Modal {
  constructor(container, btnAbrir, btnFechar) {
    this.containerModal = document.querySelector(container);
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if(this.containerModal && this.botaoAbrir && this.botaoFechar) {
      this.addModalEvents();
    }
    return this;
  }
}