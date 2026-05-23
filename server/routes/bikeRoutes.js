const express = require("express");

const router = express.Router();

const {

  addBike,
  getBikes,
  getBike,
  deleteBike,
  updateBike

} = require(

  "../controllers/bikeController"

);

const authMiddleware = require(

  "../middleware/authMiddleware"

);

/* ADD BIKE */

router.post(

  "/add",

  authMiddleware,

  addBike

);

/* GET ALL BIKES */

router.get(

  "/",

  getBikes

);

/* GET SINGLE BIKE */

router.get(

  "/:id",

  getBike

);

/* UPDATE BIKE */

router.put(

  "/:id",

  authMiddleware,

  updateBike

);

/* DELETE BIKE */

router.delete(

  "/:id",

  authMiddleware,

  deleteBike

);

module.exports = router;