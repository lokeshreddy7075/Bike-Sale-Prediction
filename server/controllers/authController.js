const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

/* REGISTER */

exports.register = async(req,res)=>{

  try{

    console.log(req.body);

    const {
      name,
      email,
      mobile,
      password
    } = req.body;

    /* CHECK USER */

    const existingUser =
    await User.findOne({email});

    if(existingUser){

      return res.status(400).json({

        message:"User already exists"

      });

    }

    /* HASH PASSWORD */

    const hashedPassword =
    await bcrypt.hash(password,10);

    /* CREATE USER */

    const user = await User.create({

      name,
      email,
      mobile,
      password:hashedPassword

    });

    res.status(201).json({

      message:"Registration Success",

      user

    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* LOGIN */

exports.login = async(req,res)=>{

  try{

    const {
      email,
      password
    } = req.body;

    const user =
    await User.findOne({email});

    if(!user){

      return res.status(400).json({

        message:"User not found"

      });

    }

    const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

    if(!isMatch){

      return res.status(400).json({

        message:"Invalid Password"

      });

    }

    /* JWT TOKEN */

    const token = jwt.sign(

      {
        id:user._id
      },

      process.env.JWT_SECRET,

      {
        expiresIn:"7d"
      }

    );

    res.status(200).json({

      message:"Login Success",

      token,

      user

    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* GET LOGGED IN USER */

exports.getUser = async(req,res)=>{

  try{

    const user = await User.findById(

      req.user.id

    ).select("-password");

    res.status(200).json(user);

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};