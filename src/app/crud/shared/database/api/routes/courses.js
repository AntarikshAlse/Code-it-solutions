const express = require("express");
const router = express.Router(); // to create mulitple routing path
const controller = require('../controller/courses.model');

router.get("/",controller.get_course);
router.post("/",controller.create_course);
//by id's
router.get("/:courseId", controller.get_course_byId);
router.put("/:courseId", controller.update_course);
router.delete("/:courseId",controller.delete_course);

module.exports = router;
