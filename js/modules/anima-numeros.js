export default class AnimaNumeros {
  constructor(numeroList, sectionNumero) {
    this.numeros = document.querySelectorAll('[data-numero]');
    this.observeTarget = document.querySelector('.numeros');
  }

  static incrementarNumero(numero) {
    const numTotal = +numero.innerText;
    const incremento = Math.round(numTotal / 100);

    let numAtual = 0;
    const intervalo = setInterval(() => {
      numAtual += incremento;
      numero.innerText = numAtual;

      if (numAtual > numTotal) {
        numero.innerText = numTotal;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.incrementarNumero(numero));
  }

  handleObserver() {
    if (this.observeTarget.classList.contains('ativo')) {
      this.animaNumeros();
      this.observer.disconnect();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    this.addMutationObserver();
    return this;
  }
}
