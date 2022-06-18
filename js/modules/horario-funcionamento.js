export default function initHorarioFuncionamento() {
  const data = new Date();
  const diaAtual = data.getDay();
  const horarioAtual = data.getHours();

  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(', ').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(', ').map(Number);

  const diaAberto = diasSemana.includes(diaAtual);
  const horarioAberto = (horarioSemana[0] <= horarioAtual && horarioAtual <= horarioSemana[1]);

  if(diaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
    funcionamento.setAttribute('title', 'Estabelecimento aberto');
  }
}

