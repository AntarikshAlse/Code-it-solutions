const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const courseRoute = require('./api/routes/courses');
const instituteRoute = require("./api/routes/institutes");
const enrollRoute = require('./api/routes/studentsEnroll');
const usersRoute = require('./api/routes/users');



mongoose.connect("mongodb+srv://Admin:"+process.env.MONGO_ATLAS_PW+"@cluster0.t8sjc.mongodb.net/test",{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
})

// middleware - morgan
app.use(morgan("dev")); //custom cmd - dev in package.json to run server
// Body Parsers
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Routes import

app.use("/courses", courseRoute);
app.use("/institutes", instituteRoute);
app.use("/student",enrollRoute);
app.use("/users",usersRoute); 

// Handling CORS errors
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Header",'Origine,X-Requested-Width,Content-Type,Authorization');
  if(req.method === "OPTION"){
      res.header("Access-Control-Allow-Methode","PUT,POST,PATCH,DELETE,GET");
      return res.status(200).json();
  }
  next();
});



app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(console.error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});



// to access app in other file
module.exports = app;
