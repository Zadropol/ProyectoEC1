class Ticket {
  constructor(HoraIngreso) {
    this.id = 1;
    this.HoraIngreso = HoraIngreso;
    this.tarifaBase = 10;
    this.tarifaNocturna = 6;
    this.tarifaDiario = 50;
    this.MensajePenalidad = "Aviso: En caso de perdiad, se apliacra una penalidad de Bs. 80";
  }
  showId() {
    return this.id;
  }
}

module.exports = Ticket; 


