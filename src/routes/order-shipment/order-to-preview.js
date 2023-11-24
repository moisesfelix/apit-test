const express = require("express");
const router = express.Router();

const OrderToPreviewController = require("../../controllers/order-shipment/order-to-preview");

router.get("/", OrderToPreviewController.getAll);

router.get("/:id", OrderToPreviewController.getOne);

router.post("/", OrderToPreviewController.createOne);

router.post("/bucket", OrderToPreviewController.createMany);

router.delete("/:id", OrderToPreviewController.delete);

router.patch("/:id", OrderToPreviewController.update);

module.exports = router;
