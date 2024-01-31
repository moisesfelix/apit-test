const express = require("express");
const router = express.Router();

const ItineraryController = require("../../controllers/drivers/itinerary");

router.get("/", ItineraryController.getAll);

router.get("/:id", ItineraryController.getOne);

router.get("/:id/task/:taskId", ItineraryController.getOneTask);

router.post("/one", ItineraryController.createOne);

router.post("/:id/start", ItineraryController.startItinerary);

router.post("/", ItineraryController.createOne);

router.delete("/:id", ItineraryController.delete);

router.patch("/:id", ItineraryController.update);

module.exports = router;
