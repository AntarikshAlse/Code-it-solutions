const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = Schema({
    _id:Schema.Types.ObjectId,
      Advert:{type:String,require:true},
      Batch:{type:String,require:true},
      Course:{type:String,require:true},
      Institute:{type:String,require:true},
      appearing:{type:String,require:true},
      city:{type:String,require:true},
      college:{type:String,require:true},
      email:{type:String,require:true},
      experience:{type:String,require:true},
      name:{type:String,require:true},
      mobileNo:{type:String,require:true},
      yearofPassing:{type:String,require:true},
      qualification:{type:String,require:true},
      specialization:{type:String,require:true}

})

module.exports = mongoose.model("Students",studentSchema);
