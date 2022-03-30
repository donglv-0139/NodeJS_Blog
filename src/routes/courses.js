const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.use("/html-css", coursesController.htmlcss);
router.use("/js", coursesController.js);
router.use("/reactjs", coursesController.reactjs);
router.use("/nodejs", coursesController.nodejs);
router.use("/", coursesController.courses);

module.exports = router;
