const express = require("express");
const router = express.Router();

const event_controller = require("../controllers/eventController");

// POST request for creating event.
router.post("/create", event_controller.event_create);

// DELETE request to delete event.
router.delete("/:id", event_controller.event_delete);

// PUT request to update event.
router.put("/:id", event_controller.event_update);

// GET request for one event.
router.get("/:id", event_controller.event_detail);

// GET request for list of all event items.
router.get("/", event_controller.event_list);

module.exports = router;