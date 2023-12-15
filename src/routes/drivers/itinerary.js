const express = require("express");
const router = express.Router();

const ItineraryController = require("../../controllers/shipping-manifest/itinerary");

router.get("/", ItineraryController.getAll);

router.get("/:id", ItineraryController.getOne);

router.get("/:id/task/:taskId", ItineraryController.getOneTask);

router.post("/one", ItineraryController.createOne);

router.post("/", ItineraryController.createOne);

router.delete("/:id", ItineraryController.delete);

router.patch("/:id", ItineraryController.update);

module.exports = router;
