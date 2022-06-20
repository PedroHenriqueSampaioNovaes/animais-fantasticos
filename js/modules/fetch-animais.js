import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais(urlApi, gridNumeros) {
  const numeroGrid = document.querySelector(gridNumeros);

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const responseAnimais = await fetch(url);
      const animaisJSON = await responseAnimais.json();

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numeroGrid.appendChild(divAnimal);
        initAnimaNumeros();
      });
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchAnimais(urlApi);
}
