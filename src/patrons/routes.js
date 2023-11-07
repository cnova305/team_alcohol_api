const { Router } = require("express");
const pool = require("../../db");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getPatrons);
router.post("/", controller.addPatron);
router.get("/:id", controller.getPatronById);
router.put("/:id", controller.updatePatron);
router.delete("/:id", controller.deletePatron);

module.exports = router;
