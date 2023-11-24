const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order-shipment/order-to-send");

router.get("/", OrderController.getAll);

router.get("/:id", OrderController.getOne);

router.post("/", OrderController.createOne);

router.post("/bucket", OrderController.createMany);

router.delete("/:id", OrderController.delete);

router.patch("/:id", OrderController.update);

module.exports = router;
