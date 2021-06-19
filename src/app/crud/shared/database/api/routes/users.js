const express = require("express");
const router = express.Router(); // to create mulitple routing path
const mongoose = require('mongoose');
const User = require('../models/users');
const bcrypt = require('bcrypt');

/*
To check a password:
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});

*/
router.get("/", async (req, res, next) => {
    try {
      const data = await User.find();
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
  })

router.post("/signup", async (req, res, next) => {

    try {
        const userName = await User.find({ userName: req.body.userName });

        if (userName.length >= 1) {
            res.status(402).json({
                message: "email exist alredy"
            })
        }
        else{
            bcrypt.hash(req.body.password, 8, (err, hash) => {
                if (err) {
                    res.status(404).json({
                        message: "somthing went wrong while hashing ",
                        error: err
                    })
                } else {
                    const data = new User({
                        _id: mongoose.Types.ObjectId(),
                        userName: req.body.userName,
                        password: hash
                    })
                    const useData = data.save();
                    res.status(200).json({
                        code: 1,
                        message: "user created successfully",
                        data: useData,
                        error: null
                    })
                }
        
            })
        }

} catch (err) {
    res.status(500).json({
        code: 0,
        message: null,
        error: err
    })
}
})

router.delete("/:userId",async (req,res,next)=>{
    try{
        const id = req.params.userId;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({
        code: 1,
        data: user,
        message:"user successfully deleted",
        error: null,
      });
    }
    catch(err){
        res.status(500).json({
            code: 0,
            data: null,
            message: "Somthing went wrong,while delete",
            error: err,
          });

    }
})


module.exports = router
