import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais(url, gridNumeros) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  const numeroGrid = document.querySelector(gridNumeros);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  async function requestAnimals() {
    try {
      const responseAnimais = await fetch(url);
      const animaisJSON = await responseAnimais.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros');
      animaNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  requestAnimals();
}
