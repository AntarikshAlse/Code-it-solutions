const mongoose = require("mongoose");
const Student = require("../models/stdEnroll");

exports.get_student = async (req, res, next) => {
  try {
    const data = await Student.find();
     console.log(data)
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

exports.create_student = async (req, res, next) => {
  try {
    const student = new Student({
      _id: mongoose.Types.ObjectId(),

      name:req.body.name,
      email:req.body.email,
      mobileNo:req.body.mobileNo,
      city:req.body.city,
      college:req.body.college,
      specialization:req.body.specialization,
      appearing:req.body.appearing,
      yearofPassing:req.body.yearofPassing,
      qualification:req.body.qualification,
      experience:req.body.experience,
      Course:req.body.Course,
      Institute:req.body.Institute,
      Advert:req.body.Advert,
      Batch:req.body.Batch

    });
    const data = await student.save(); // save methode save data on mongodb databse
    res.status(200).json({
      code: 1,
      message:"data added successfully",
      data: data
    });
  } catch (err) {
    res.status(500).json({
      code: 0,
      data: null,
      message: "Somthing went wrong,while creating student.",
      error: err,
    });
  }
};

exports.get_student_byId = async (req, res, next) => {
  try {
    const data = await Student.findById(req.params.studentId);
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

exports.update_student = async (req, res, next) => {
  try {
    const data = await Student.findByIdAndUpdate(
      req.params.studentId,
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
      message: "Somthing went wrong,while updating student",
      error: err,
    });
  }
};

exports.delete_student = async (req, res, next) => {
  try {
    const data = await Student.findByIdAndDelete(req.params.studentId);
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
