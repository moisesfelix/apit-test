const express = require("express");
const router = express.Router();

const ShippingManifestController = require("../../controllers/shipping-manifest/order-to-preview");

//router.get("/sent", ShippingManifestController.getAll);
router.get("/", ShippingManifestController.getAll);

router.get("/:id", ShippingManifestController.getOne);

router.post("/", ShippingManifestController.createOne);

router.post("/bucket", ShippingManifestController.createMany);

router.delete("/:id", ShippingManifestController.delete);

router.patch("/:id", ShippingManifestController.update);

module.exports = router;
