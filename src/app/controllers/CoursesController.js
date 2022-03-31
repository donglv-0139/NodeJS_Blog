const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class CoursesController {
  //[GET] /courses
  courses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("courses", {
          title: "Courses Page",
          courses: multipleMongooseToObject(courses),
        }),
      )
      // .catch((error) => next(error));
      .catch(next);
  }

  //[GET] /courses/html-css
  htmlcss(req, res) {
    res.send("HTML-CSS Course");
  }

  //[GET] /courses/JS
  js(req, res) {
    res.send("JavaScript Course");
  }

  //[GET] /courses/reactjs
  reactjs(req, res) {
    res.send("ReactJS Course");
  }

  //[GET] /courses/nodejs
  nodejs(req, res) {
    res.send("NodeJS Course");
  }
}

module.exports = new CoursesController();
