const db = require("../database/dbConfig.js");

module.exports = {
  getEvents,
  getEventById,
  addEvent,
};

function getEvents() {
  return db("events");
}

function getEventById(id) {
  return db("events").where({ id });
}

function addEvent(event) {
  return db("events").insert(event);
}
