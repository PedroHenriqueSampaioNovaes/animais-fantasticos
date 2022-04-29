import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const numeroGrid = document.querySelector('.grid-numeros');
      const responseAnimais = await fetch(url);
      const animaisJSON = await responseAnimais.json();
      
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numeroGrid.appendChild(divAnimal);
        initAnimaNumeros();
      })
    } catch(erro) {
      console.log(Error(erro));
    }
  };

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  fetchAnimais('./animaisapi.json');
}