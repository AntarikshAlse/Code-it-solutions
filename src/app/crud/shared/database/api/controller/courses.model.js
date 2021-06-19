const mongoose = require("mongoose");
const Course = require("../models/course");

exports.get_course = async (req, res, next) => {
  try {
    const data = await Course.find();
    // console.log(data)
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        code: 0,
        data: data,
        message: "No Data Found",
        error: null,
      });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong, while fetching data",
      error: err,
    });
  }
};

exports.create_course = async (req, res, next) => {
  try {
    const course = new Course({
      _id: mongoose.Types.ObjectId(),
      courseName: req.body.courseName,
      courseFees: req.body.courseFees
    });
    const data = await course.save(); // save methode save data on mongodb databse
    res.status(200).json({
      code: 1,
      data: data
    });
  } catch (err) {
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong,while creating course.",
      error: err,
    });
  }
};

exports.get_course_byId = async (req, res, next) => {
  try {
    const data = await Course.findById(req.params.courseId);
    console.log(data);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({
        code: 0,
        data: data,
        message: "No Data Found",
        error: null,
      });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong,while fetching by id",
      error: err,
    });
  }
};

exports.update_course = async (req, res, next) => {
  try {
    const data = await Course.findByIdAndUpdate(
      req.params.courseId,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      code: 1,
      data: data
    });
  } catch (err) {
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong,while updating course",
      error: err,
    });
  }
};

exports.delete_course = async (req, res, next) => {
  try {
    const data = await Course.findByIdAndDelete(req.params.courseId);
    res.status(200).json({
      code: 1,
      data: data
    });
  } catch (err) {
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong, while deleting.",
      error: err,
    });
  }
};
