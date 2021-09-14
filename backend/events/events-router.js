const express = require("express");
const Events = require("./events-model.js");
const router = express.Router();
const { DateTime } = require("luxon");

router.get("/", (req, res) => {
  Events.getEvents()
    .then((events) => {
      events.forEach((event) => {
        if (
          DateTime.fromISO(event.startTime, { zone: "UTC" }).toMillis() <=
          DateTime.now().toUTC().toMillis()
        ) {
          event.passed = "true";
        } else {
          event.passed = "false";
        }
      });
      res.status(200).json(events);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting events from database" });
    });
});

router.get("/event", (req, res) => {
  const { id } = req.body;
  console.log(id);
  Events.getEventById(id)
    .then((event) => {
      event.forEach((e) => {
        if (
          DateTime.fromISO(e.startTime, { zone: "UTC" }).toMillis() <=
          DateTime.now().toUTC().toMillis()
        ) {
          e.passed = "true";
        } else {
          e.passed = "false";
        }
      });
      if (!event[0]) {
        return res.status(404).json({ message: "Invalid event id" });
      } else {
        res.status(200).json(event);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error getting event from database" });
    });
});

router.post("/", (req, res) => {
  const event = req.body;

  if (!event.event) {
    return res.status(404).json({ message: "Missing event name" });
  }
  if (!event.startTime) {
    return res.status(404).json({ message: "Missing event start time" });
  }
  if (!event.endTime) {
    return res.status(404).json({ message: "Missing event end time" });
  }

  Events.addEvent(event)
    .then((count) => {
      res.status(201).json(count);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error adding event to database" });
    });
});

module.exports = router;
