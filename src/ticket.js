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
    this.perdido = false;
    this.HoraSalida = null;
  }
  MarcarComoPerdido() {
    this.perdido = true;
  }
  ConsultarCosto() {
    if (this.perdido) {
      return Ticket.PenalidadPorPerdida;
    }
    return undefined;
  }

  TiempoAMinutos(hora){
    const[horas, minutos] = hora.split(":").map(Number);
    return horas * 60 + minutos;
  }

  CalcularDiferenciaHoras(HoraIngreso, HoraSalida){
    const minutosIngreso = this.TiempoAMinutos(HoraIngreso);
    const minutosSalida = this.TiempoAMinutos(HoraSalida);

    if (minutosSalida < minutosIngreso) {

      throw new Error("Hora de salida no puede ser anterior a la entrada")
    }

    return (minutosSalida - minutosIngreso) / 60;
  }


  CalcularCosto(HoraSalida) {
    if (this.perdido) {
      return Ticket.PenalidadPorPerdida.toFixed(2);
    }

    const horasEstacionado = this.CalcularDiferenciaHoras(this.HoraIngreso, HoraSalida);

    let costoTotal = 0;
    for (let i = 0; i < Math.ceil(horasEstacionado); i++) {
      const HoraActual = parseInt(this.HoraIngreso.split(":")[0]) + i;
      const HorarioNocturno = (HoraActual >= 18 || HoraActual < 6);

      if (HorarioNocturno) {
        costoTotal += this.tarifaNocturna;
      } else {
        costoTotal += this.tarifaBase;
      }
    }

    if (costoTotal > this.tarifaDiario) {
      costoTotal = this.tarifaDiario;
    }

    this.HoraSalida = HoraSalida;
    return costoTotal.toFixed(2);
  }

    
  showId() {
    return this.id;
  }
}

module.exports = Ticket; 


