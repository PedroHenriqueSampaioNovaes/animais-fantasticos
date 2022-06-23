export default class HorarioFuncionamento {
  constructor() {
    this.funcionamento = document.querySelector('[data-semana]');
    this.classActive = 'aberto';
  }

  dadosAgora() {
    this.data = new Date();
    this.diaAtual = this.data.getDay();
    this.horarioAtual = this.data.getHours();
  }

  diasFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(', ').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(', ').map(Number);
  }

  estaAberto() {
    this.diaAberto = this.diasSemana.includes(this.diaAtual);
    this.horarioAberto = (this.horarioSemana[0] <= this.horarioAtual && this.horarioAtual <= this.horarioSemana[1]);
    return this.diaAberto && this.horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.classActive);
      this.funcionamento.setAttribute('title', 'Estabelecimento aberto');
    }
  }

  init() {
    if (this.funcionamento) {
      this.diasFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
