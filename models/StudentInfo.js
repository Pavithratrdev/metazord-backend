const mongoose = require("mongoose");

const StudentInfoSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  rollno:{
    type: String,
    required: false,
  },
  department:{
    type: String,
    required: true,
  },
  emailid:{
    type: String,
    required: false,
    unique : true,
  },  
  // photo:{
  //   data: Buffer,
  //   contentType: String,    
  // },
  released:{
    type: Date,
    required: true,
  },
  phonenumber:{
    type : Number,
    required:true,
    unique : true,
  }
});

module.exports =  mongoose.model("StudentInfo", StudentInfoSchema)