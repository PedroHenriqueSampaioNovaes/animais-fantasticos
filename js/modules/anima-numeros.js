export default function initAnimaisNumeros() {
  
}

function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach(numero => {
    const numTotal = +numero.innerText;
    const incremento = Math.round(numTotal / 100);

    let numAtual = 0;
    const intervalo = setInterval(() => {
      numAtual = numAtual + incremento;
      numero.innerText = numAtual;

      if(numAtual > numTotal) {
        numero.innerText = numTotal;
        clearInterval(intervalo);
      }
    }, 25 * Math.random());
  })
}


function handleObserver() {
  if(observeTarget.classList.contains('ativo')) {
    animaNumeros();
    observer.disconnect();
  }
}

const observeTarget = document.querySelector('.numeros');
const observer = new MutationObserver(handleObserver);
observer.observe(observeTarget, {attributes: true});
