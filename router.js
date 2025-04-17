const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/matematik/hesapla", controller.calculate);
router.get("/matematik/hesapla", controller.infoCalculate);
router.get("/matematik/hesapla", controller.infoFaktoriyel);
router.post("/matematik/hesapla", controller.faktoriyel);

module.exports = router;
