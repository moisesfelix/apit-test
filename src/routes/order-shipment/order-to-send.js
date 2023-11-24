const express = require("express");
const router = express.Router();

const OrderToSendController = require("../../controllers/order-shipment/order-to-send");

router.get("/", OrderToSendController.getAll);

router.get("/:id", OrderToSendController.getOne);

router.post("/", OrderToSendController.createOne);

router.post("/bucket", OrderToSendController.createMany);

router.delete("/:id", OrderToSendController.delete);

router.patch("/:id", OrderToSendController.update);

module.exports = router;
