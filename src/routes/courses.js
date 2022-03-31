const express = require("express");
const router = express.Router();

const coursesController = require("../app/controllers/CoursesController");

router.get("/html-css", coursesController.htmlcss);
router.get("/js", coursesController.js);
router.get("/reactjs", coursesController.reactjs);
router.get("/nodejs", coursesController.nodejs);
router.get("/", coursesController.courses);

module.exports = router;
