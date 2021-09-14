const express = require("express");
const Reservations = require("./reservations-model.js");
const router = express.Router();
const { DateTime } = require("luxon");

// Reservations

router.get("/", (req, res) => {
  Reservations.getReservations()
    .then((reservations) => {
      reservations.forEach((reservation) => {
        if (
          DateTime.fromISO(reservation.startTime, { zone: "UTC" }).toMillis() <=
          DateTime.now().toUTC().toMillis()
        ) {
          reservation.passed = "true";
        } else {
          reservation.passed = "false";
        }
      });
      res.status(200).json(reservations);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error getting reservations from database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Reservations.getReservationById(id)
    .then((reservation) => {
      reservation.forEach((e) => {
        if (
          DateTime.fromISO(e.startTime, { zone: "UTC" }).toMillis() <=
          DateTime.now().toUTC().toMillis()
        ) {
          e.passed = "true";
        } else {
          e.passed = "false";
        }
      });
      if (!reservation[0]) {
        return res.status(404).json({ message: "Invalid reservation id" });
      } else {
        res.status(200).json(reservation);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error getting reservation from database" });
    });
});

// need to work on being able to reject post if startTime has passed
// currently can just make a request to this without

// need to go back to events to keep track of users that are registered for the event
// this would allow ability to reject user that already exists

// should not have done table set up with just ids. needs more information
// would redo if did not stretch beyond suggested time limit.
router.post("/", (req, res) => {
  const reservation = req.body;

  Reservations.addReservation(reservation)
    .then((reservation) => {
      return res.status(201).json(reservation);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding reservation to database" });
    });
});

module.exports = router;
