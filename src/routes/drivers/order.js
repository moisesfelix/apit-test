const express = require("express");
const router = express.Router();

const OrderController = require("../../controllers/drivers/order");

router.get("/", OrderController.getAll);

router.get("/:id", OrderController.getOne);

router.post("/load", OrderController.loadOrderIntoDriver);

router.delete("/:id", OrderController.delete);

router.patch("/:id", OrderController.update);

module.exports = router;
