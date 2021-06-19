const mongoose = require("mongoose");
const Institute = require("../models/institute");

exports.get_institute = async (req, res, next) => {
  try {
    const data = await Institute.find();
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

exports.create_institute = async (req, res, next) => {
  try {
    const institute = new Institute({
      _id: mongoose.Types.ObjectId(),
      instituteName: req.body.instituteName
    });
    const data = await institute.save(); // save methode save data on mongodb databse
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

exports.get_institute_byId = async (req, res, next) => {
  try {
    const data = await Institute.findById(req.params.instituteId);
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

exports.update_institute = async (req, res, next) => {
  try {
    const data = await Institute.findByIdAndUpdate(
      req.params.instituteId,
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
      message: "Somthing went wrong,while updating institute",
      error: err,
    });
  }
};

exports.delete_institute = async (req, res, next) => {
  try {
    const data = await Institute.findByIdAndDelete(req.params.instituteId);
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
