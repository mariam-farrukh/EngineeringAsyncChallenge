const db = require("../database/dbConfig.js");

module.exports = {
  getReservations,
  getReservationById,
  addReservation,
  getEventById,
};

function getReservations() {
  return db("reservations")
    .select([
      "events.event as event",
      "events.startTime as startTime",
      "events.endTime as endTime",
      "users.name as user",
      "users.email as email",
    ])
    .join("events", "events.id", "reservations.event_id")
    .join("users", "users.id", "reservations.user_id");
}

function getReservationById(id) {
  return db("reservations").where({ id });
}

function getEventById(id) {
  return db("events").where({ id });
}

function addReservation(reservation) {
  return db("reservations").insert(reservation);
}
