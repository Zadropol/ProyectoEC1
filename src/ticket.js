class Ticket {
  static ultimoID = 0;
  
  static tarifaBase = 10;
  static tarifaNocturna = 6
  static tarifaDiario = 50;
  static PenalidadPorPerdida = 80;

  constructor(HoraIngreso) {
    Ticket.ultimoID++;
    this.id = Ticket.ultimoID;
    this.HoraIngreso = HoraIngreso;
    this.tarifaBase = Ticket.tarifaBase;
    this.tarifaNocturna = Ticket.tarifaNocturna;
    this.tarifaDiario = Ticket.tarifaDiario;
    this.MensajePenalidad = "Aviso: En caso de perdiad, se apliacra una penalidad de Bs. " + Ticket.PenalidadPorPerdida;
  }
  showId() {
    return this.id;
  }
}

module.exports = Ticket; 


