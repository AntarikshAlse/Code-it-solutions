const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const courseSchema = Schema({
    _id:Schema.Types.ObjectId,
    courseName:{type:String,require:true},
    courseFees:{type:String,require:true}
})

module.exports = mongoose.model("Course",courseSchema);
