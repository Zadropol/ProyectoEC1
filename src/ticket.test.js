const Ticket = require("./ticket.js");

describe("Ticket", () => {
  it("debería mostrar un ticket con el id de 1", () => {
    const ticket = new Ticket();
    expect(ticket.id).toBe(1);
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
});
