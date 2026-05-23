const Bike = require("../models/Bike");

/* ADD BIKE */

exports.addBike = async(req,res)=>{

  try{

    console.log(req.body);

    console.log(req.user);

    const {

      title,
      brand,
      model,
      year,
      price,
      kmDriven,
      fuel,
      image,
      description

    } = req.body;

    /* VALIDATION */

    if(

      !title ||
      !brand ||
      !model ||
      !year ||
      !price ||
      !kmDriven ||
      !fuel ||
      !image

    ){

      return res.status(400).json({

        message:"All Fields Required"

      });

    }

    /* CREATE BIKE */

    const bike = await Bike.create({

      title,
      brand,
      model,
      year,
      price,
      kmDriven,
      fuel,
      image,
      description,

      seller:req.user.id

    });

    res.status(201).json({

      message:"Bike Added Successfully 🚀",

      bike

    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* GET ALL BIKES */

exports.getBikes = async(req,res)=>{

  try{

    const bikes = await Bike.find()

    .populate(

      "seller",

      "name email mobile"

    )

    .sort({

      createdAt:-1

    });

    res.status(200).json(bikes);

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* GET SINGLE BIKE */

exports.getBike = async(req,res)=>{

  try{

    const bike = await Bike.findById(

      req.params.id

    ).populate(

      "seller",

      "name email mobile"

    );

    if(!bike){

      return res.status(404).json({

        message:"Bike Not Found"

      });

    }

    res.status(200).json(bike);

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* DELETE BIKE */

exports.deleteBike = async(req,res)=>{

  try{

    const bike = await Bike.findById(

      req.params.id

    );

    if(!bike){

      return res.status(404).json({

        message:"Bike Not Found"

      });

    }

    await Bike.findByIdAndDelete(

      req.params.id

    );

    res.status(200).json({

      message:"Bike Deleted ✅"

    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};

/* UPDATE BIKE */

exports.updateBike = async(req,res)=>{

  try{

    const updatedBike =
    await Bike.findByIdAndUpdate(

      req.params.id,

      req.body,

      {

        new:true

      }

    );

    if(!updatedBike){

      return res.status(404).json({

        message:"Bike Not Found"

      });

    }

    res.status(200).json({

      message:"Bike Updated ✅",

      updatedBike

    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({

      error:error.message

    });

  }

};