const Ticket = require("/src/ticket.js");

class Presenter {
  constructor() {
    this.tickets = [];
  }

  crearTicket(horaIngreso) {
    const ticket = new Ticket(horaIngreso);
    this.tickets.push(ticket);
    return {
      id: ticket.showId(),
      horaIngreso: ticket.HoraIngreso,
      mensajePenalidad: ticket.MensajePenalidad,
    };
  }

  marcarTicketComoPerdido(id) {
    const ticket = this.buscarTicket(id);
    if (!ticket) throw new Error("Ticket no encontrado");
    ticket.MarcarComoPerdido();
    return { id: ticket.id, perdido: ticket.perdido };
  }

  calcularCosto(id, horaSalida) {
    const ticket = this.buscarTicket(id);
    if (!ticket) throw new Error("Ticket no encontrado");
    const costo = ticket.CalcularCosto(horaSalida);
    return { id: ticket.id, costo, horaSalida: ticket.HoraSalida };
  }

  buscarTicket(id) {
    return this.tickets.find((t) => t.id === id);
  }
}

// -------- Conexión con el DOM -------- //
const formTicket = document.querySelector("#form-ticket");
const inputIngreso = document.querySelector("#hora-ingreso");
const divTicketInfo = document.querySelector("#ticket-info");

const formSalida = document.querySelector("#form-salida");
const inputIdSalida = document.querySelector("#ticket-id-salida");
const inputHoraSalida = document.querySelector("#hora-salida");
const divCostoInfo = document.querySelector("#costo-info");

const formPerdida = document.querySelector("#form-perdida");
const inputIdPerdida = document.querySelector("#ticket-id-perdida");
const divPerdidaInfo = document.querySelector("#perdida-info");

const presenter = new Presenter();

formTicket.addEventListener("submit", (event) => {
  event.preventDefault();
  const ticket = presenter.crearTicket(inputIngreso.value);
  divTicketInfo.innerHTML = `<p>Ticket #${ticket.id}, ingreso: ${ticket.horaIngreso}<br>${ticket.mensajePenalidad}</p>`;
});

formSalida.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = Number.parseInt(inputIdSalida.value);
  const horaSalida = inputHoraSalida.value;
  const result = presenter.calcularCosto(id, horaSalida);
  divCostoInfo.innerHTML = `<p>Ticket #${result.id}, costo: Bs ${result.costo}</p>`;
});

formPerdida.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = Number.parseInt(inputIdPerdida.value);
  const result = presenter.marcarTicketComoPerdido(id);
  divPerdidaInfo.innerHTML = `<p>Ticket #${result.id} marcado como perdido.</p>`;
});

export default Presenter;
