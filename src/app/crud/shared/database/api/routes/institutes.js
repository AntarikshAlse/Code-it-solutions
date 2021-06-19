const express = require("express");
const router = express.Router(); // to create mulitple routing path
const controller = require('../controller/institutes.model');


router.get("/",controller.get_institute);
router.post("/",controller.create_institute);
//by id's
router.get("/:instituteId", controller.get_institute_byId);
router.put("/:instituteId", controller.update_institute);
router.delete("/:instituteId",controller.delete_institute);

module.exports = router;