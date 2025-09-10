const Ticket = require("./ticket.js");

describe("Ticket", () => {
  it("debería mostrar un ticket con el id de 1", () => {
    const ticket = new Ticket();
    const ticket2 = new Ticket();
    expect(ticket2.id).toBe(2);
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

});
