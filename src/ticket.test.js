const Ticket = require("./ticket.js");

describe("Ticket", () => {
   it("debería mostrar un ticket con el id de 1", () => {
    const ticket = new Ticket();
    expect(ticket.id).toBe(1);
  });
});
