class Ticket {
  constructor(HoraIngreso) {
    this.id = 1;
    this.HoraIngreso = HoraIngreso;
    this.tarifaBase = 10;
    this.tarifaNocturna = 6;
    this.tarifaDiario = 50;
  }
  showId() {
    return this.id;
  }
}

module.exports = Ticket; 


