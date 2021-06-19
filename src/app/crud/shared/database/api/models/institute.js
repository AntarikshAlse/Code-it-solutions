const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const instituteSchema = Schema({
    _id:Schema.Types.ObjectId,
    instituteName:{type:String,require:true}
})

module.exports = mongoose.model("Institute",instituteSchema);
