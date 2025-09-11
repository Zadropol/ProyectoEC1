const Ticket = require("./ticket.js");

describe("Ticket", () => {
  it("debería mostrar un ticket con el id de 1", () => {
    const ticket2 = new Ticket();
    expect(ticket2.id).toBe(1);
  });

  it("deberia poder registrar la hora de ingreso del ticket", () => {
    const ingreso = "10:00";
    const ticket = new Ticket(ingreso);
    expect(ticket.HoraIngreso).toBe(ingreso);
  });

  it("debería mostrar las tarifas en el ticket", () => {
    const ticket = new Ticket("10:00");
    expect(ticket.tarifaBase).toBe(10);
    expect(ticket.tarifaNocturna).toBe(6);
    expect(ticket.tarifaDiario).toBe(50);
  });

  it("debería mostrar mensaje de penalidad en caso de perdida", () => {
    const ticket = new Ticket("10:00");
    ticket.perdido = true;
    expect(ticket.MensajePenalidad).toBe("Aviso: En caso de perdiad, se apliacra una penalidad de Bs. 80");
  });

  it("deberia poder marcar el ticket como perdido", () => {
    const ticket = new Ticket("10:00");
    ticket.MarcarComoPerdido();
    expect(ticket.perdido).toBe(true);
  });

  it("Si el ticket esta perdido, deberia mostrar el precio de la penalidad", ()  => {
    const ticket = new Ticket("10:00");
    ticket.MarcarComoPerdido();
    expect(ticket.ConsultarCosto()).toBe(80);
  }); 

  it("Deberia mostrar un caldulo de Costo Normal", ()  => {
    const ticket = new Ticket("10:00");
    const costo = ticket.CalcularCosto("10:30");
    expect(costo).toBe("10.00");
  });

  it("deberia aplicar tarifa nocturna despues de las 18:00", ()  => {
    const ticket = new Ticket("18:00");
    const costo = ticket.CalcularCosto("20:00");
    expect(costo).toBe("12.00");
  });

  it("deberia calcular el costo para 2 horas", ()  => {
    const ticket = new Ticket("10:00");
    const costo = ticket.CalcularCosto("12:00");
    expect(costo).toBe("20.00");
  });

  it("Deberia aplicar tope diario", ()  => {
    const ticket = new Ticket("08:00");
    const costo = ticket.CalcularCosto("20:00");
    expect(costo).toBe("50.00");
  });

  it("Deberia validar que hora de salida no sea anterior a entrada", () => {
    const ticket = new Ticket("10:00");
    expect(() => {
      ticket.CalcularCosto("09:00");
    }).toThrow("Hora de salida no puede ser anterior a la entrada");
  });

  it("Deberia cobrar al menos 1 hora aunque el tiempo sea menor a 1 hora", () =>{
    const ticket = new Ticket("10:00");
    const costo = ticket.CalcularCosto("10:30");
    expect(costo).toBe("10.00");
  });

});
