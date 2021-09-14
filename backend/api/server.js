const express = require("express");
const cors = require("cors");
const helment = require("helmet");

const server = express();

const authRouter = require("../users/auth-router.js");
const usersRouter = require("../users/users-router.js");
const eventsRouter = require("../events/events-router.js");
const reservationsRouter = require("../reservations/reservations-router.js");

//gobal middleware
server.use(helment());
server.use(cors());
server.use(express.json());

//Routes
server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/events", eventsRouter);
server.use("/reservation", reservationsRouter);

server.get("/", (req, res) => {
  res.send("Server working");
});

module.exports = server;
