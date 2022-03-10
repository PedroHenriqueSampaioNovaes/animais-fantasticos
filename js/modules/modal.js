export default function initModal() {
  const containerModal = document.querySelector('[data-modal="container"]');
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  
  if(containerModal && botaoAbrir && botaoFechar) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');

      if(containerModal.classList.contains('ativo')) {
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
      } else {
        botaoFechar.removeEventListener('click', toggleModal)
        containerModal.removeEventListener('click', cliqueForaModal);
      }
    }

    function cliqueForaModal(event) {
      if(this === event.target) toggleModal(event);
    }

    botaoAbrir.addEventListener('click', toggleModal);
  }
}