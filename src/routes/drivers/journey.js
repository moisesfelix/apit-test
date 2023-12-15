const express = require("express");
const router = express.Router();

const JourneyController = require("../../controllers/drivers/journey");

router.get("/", JourneyController.getAll);

router.get("/:id", JourneyController.getOne);

router.post("/start", JourneyController.createOne);

router.post("/bucket", JourneyController.createMany);

router.delete("/:id", JourneyController.delete);

router.patch("/:id", JourneyController.update);

module.exports = router;
