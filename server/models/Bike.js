const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  brand:{
    type:String,
    required:true
  },

  model:{
    type:String,
    required:true
  },

  year:{
    type:Number,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  kmDriven:{
    type:Number,
    required:true
  },

  fuel:{
    type:String,
    required:true
  },

  image:{
    type:String,
    required:true
  },

  description:{
    type:String
  },

  seller:{
    type:mongoose.Schema.Types.ObjectId,

    ref:"User"
  }

},

{
  timestamps:true
});

module.exports = mongoose.model(
  "Bike",
  bikeSchema
);