const express = require('express');
const StudentInfo = require('../models/StudentInfo');
const router = express.Router();


const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// To add student information
function create(req,res,next) {
    var dbStudent = new StudentInfo({
        name: req.body.name,
        rollno: req.body.rollno,
        department: req.body.department,
        emailid: req.body.emailid,
        photo: {
            data: Buffer,
            contentType: String
          },
        released: req.body.released,
        phonenumber: req.body.phonenumber,       
      })
      dbStudent.save()
        .then(item => {
          res.status(200).send(item);
        })
        .catch(err => {
          res.status(400).send(err.toString());
        }
        )    
    }

    function getAllStudInfo(req,res)
    {
     StudentInfo.find({}, (err, allStudents) => {
        if (err) console.error(err);    
        res.send({ allStudents })
      })
    }

    function getStudOne(req,res)
    {
      const{id} = req.params
     StudentInfo.findById({_id:id}, (err, allStudents) => {
        if (err) console.error(err);    
        res.send({ allStudents })
      })
    }

    function update(req,res) 
    {
        const{id} = req.params
        StudentInfo.findOneAndUpdate({_id:id},{
            ...req.body
        }).then(item=>{res.status(200).send(item)}).catch(err=>{
            res.status(400).send(err)
        })
    }

    function deletestud(req,res) 
    {
        const {id} = req.params;
        StudentInfo.findByIdAndDelete({_id: id}, (err)=>{
        res.status(200).send("Deleted")
        if (err) return res.status(400).send(`error occured: ${err}`)
    })   
   }
    

module.exports = {create,getAllStudInfo,update,deletestud,getStudOne}


