const jwt = require("jsonwebtoken");

/* REGISTER */

exports.register = async (req, res) => {

  try {

    const {
      name,
      email,
      mobile,
      password
    } = req.body;

    res.status(201).json({

      message: "Registration Success",

      user: {
        name,
        email,
        mobile
      }

    });

  }
  catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};

/* LOGIN */

exports.login = async (req, res) => {

  try {

    const {
      email
    } = req.body;

    const token = jwt.sign(

      {
        email
      },

      "supersecretkey",

      {
        expiresIn: "7d"
      }

    );

    res.status(200).json({

      message: "Login Success",

      token,

      user: {
        email
      }

    });

  }
  catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};

/* GET USER */

exports.getUser = async (req, res) => {

  try {

    res.status(200).json({

      user: req.user

    });

  }
  catch (error) {

    console.log(error);

    res.status(500).json({

      error: error.message

    });

  }

};