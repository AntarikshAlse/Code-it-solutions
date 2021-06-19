const express = require("express");
const router = express.Router(); // to create mulitple routing path
const controller = require('../controller/stdEnroll.model');

router.get("/",controller.get_student);
router.post("/",controller.create_student);
//by id's
router.get("/:studentId", controller.get_student_byId);
router.put("/:studentId", controller.update_student);
router.delete("/:studentId",controller.delete_student);

module.exports = router;
