var express = require('express');
var Users = require('../models/user');
const fetch = require("node-fetch");
const {getToken, isAdmin}=require('../authenticate')
const {isAuth}= require('../authenticate')
var passport = require('passport');
var authenticate = require('../authenticate');
const facebookController=require('../authenticate')
const axios =require('axios');
const config =require('../config');
const { OAuth2Client } = require('google-auth-library');
const bcrypt = require('bcryptjs');

const router = express.Router();







router.post('/signin', async (req, res) => {
 

 let hash=""
 try
 {
   hash=await bcrypt.hash(req.body.password,10);
 
  console.log(hash)
 }

 catch(error)
 {
   console.log("error")
 }
  const signinUser = new Users({
    email: req.body.email,
    name:req.body.name,
    password: hash,
  
  });
  
  console.log(req.body)
  const newsignin=await signinUser.save()
  console.log(newsignin)
  if (newsignin) {
    res.send(JSON.stringify({
      _id: newsignin.id,
      email: newsignin.email,
      
      token: getToken(signinUser),
    }));

  } else {
    res.status(401).send({ message: 'Invalid Email or Password.' });
  }
});





   router.post('/login', async (req, res) => {

    hash=await bcrypt.hash(req.body.password,10);
 
  
    const loginUser = await Users.findOne({
      email: req.body.email,
    
    });
   
  if(loginUser)
    {
      let pass=await bcrypt.compare(req.body.password,loginUser.password);
      if (pass) {
      res.send(JSON.stringify({
        _id: loginUser.id,
        name: loginUser.name,
        email: loginUser.email,
       
       token: getToken(loginUser),
      }));
    } else {
     // res.status(401).send({ message: 'Invalid Email or Password.' });
      res.send("Invalid Username and password");
    }
  }
  else
  {
    res.send("Invalid Username and password");
  }
  });







/// google


const client = new OAuth2Client("323182642781-39lt59q309bkj7n90486390v79tt2jip.apps.googleusercontent.com");
// Google Login


const googleController = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: "323182642781-39lt59q309bkj7n90486390v79tt2jip.apps.googleusercontent.com" })
    .then(response => {
      console.log('GOOGLE LOGIN RESPONSE',response)
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        Users.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = getToken({ _id: user._id })
            const { _id, email, name } = user;
            return res.json({
              token,
              user: { _id, email, name }
            });
          } else {
            let password = email + config.JWT_SECRET;
            user = new Users({ name, email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with google'
                });
              }
              const token = getToken( { _id: data._id })
              const { _id, email, name} = data;
              return res.json({
                token,
                user: { _id, email, name }
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
};

router.post('/google', googleController)








module.exports=router;
