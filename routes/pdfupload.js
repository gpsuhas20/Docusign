const express = require('express');
const bodyParser = require('body-parser');
const multer=require('multer');


const uploadRouter=express.Router();

uploadRouter.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "client/public/")
    },
    filename: (req, file, cb) => {
      cb(null, "example.pdf")
    },
  })
  
  const uploadStorage = multer({ storage: storage })
  
  // Single file
  uploadRouter.post("/pdf", uploadStorage.single("file"), (req, res) => {
    console.log(req.file)
    return res.send("Single file")
  })




module.exports=uploadRouter;