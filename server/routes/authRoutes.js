const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getUser
} = require("../controllers/authController");

const authMiddleware =
require("../middleware/authMiddleware");

/* ROUTES */

router.post("/register",register);

router.post("/login",login);

/* GET USER */

router.get(

  "/me",

  authMiddleware,

  getUser

);

module.exports = router;