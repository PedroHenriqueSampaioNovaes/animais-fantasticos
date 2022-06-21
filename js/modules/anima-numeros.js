export default class AnimaNumeros {
  constructor(numeros, observerTarget, ativo) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = ativo;

    this.handleObserver = this.handleObserver.bind(this);
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
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  handleObserver(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
