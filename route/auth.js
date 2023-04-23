/** @format */
const jwt=require('jsonwebtoken');
const express = require("express");
// const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");
const e = require('express');


      


// Using async await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the fields properly " });
  }

  try {
    const response = await User.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "Email already exist " });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    const userRegister = await user.save();

    if (userRegister) {
      return res.status(201).json({ message: "user registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (error) {
    console.log(error);
  }
});

// login route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the credentials" });
    }

    const userLogin = await User.findOne({ email: email });


    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "User Sign in Successfull" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
});

// About US PAge
router.get("/about", authenticate, (req,  res) => {
  res.send(req.rootUser);
});

// get user data for contact us and home page

router.get("/getdata", authenticate , (req, res) => {
  res.send(req.rootUser);
});

//Contact us Page data

router.post("/contact",authenticate, async(req, res) => {
  try {
    
    const{name, email,phone,work,message}= req.body;

    if (!name|| !email || !phone|| !work || !message) {
      return res.json({error: "Please fill the fields"});
    }

    const userContact= await User.findOne({_id:req.userID});

    if(userContact){
      const userMessage = await userContact.addMessage(name,email,phone,work,message);

      await userContact.save();
      
      res.status(201).json({message:"User Contact Successfully"});
    }


  } catch (error) {
    console.log(error);
  }
});

// Logout PAge
router.get("/logout",  (req,  res) => {
  console.log(`Hello logout`);
  res.clearCookie('jwttoken',{path:'/'})
  res.status(200).send(message= "User Logout");
});

module.exports = router;
