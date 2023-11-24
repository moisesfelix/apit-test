const express = require("express");
const router = express.Router();

const OrderController = require("../../controllers/shipping-manifest/order");

router.get("/", OrderController.getAll);

router.get("/:id", OrderController.getOne);

router.post("/test", OrderController.createOne);

router.post("/", OrderController.createMany);

router.delete("/:id", OrderController.delete);

router.patch("/:id", OrderController.update);

module.exports = router;
