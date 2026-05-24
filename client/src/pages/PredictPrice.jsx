import { useState } from "react";

import axios from "axios";

import "../styles/PredictPrice.css";

function PredictPrice() {

  const [formData,setFormData] =
  useState({

    brand:"",
    model:"",
    year:"",
    kmDriven:"",
    owner:"",
    fuel:"Petrol",
    condition:"Good"

  });

  const [price,setPrice] =
  useState(null);

  const [loading,setLoading] =
  useState(false);

  const [insights,setInsights] =
  useState([]);

  /* HANDLE CHANGE */

  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  /* PREDICT */

  const handlePredict = async(e)=>{

    e.preventDefault();

    try{

      setLoading(true);

      const res = await axios.post(

        "https://bike-backend.onrender.com/api/predict",

        formData

      );

      let finalPrice =
      res.data.predicted_price;

      /* CONDITION LOGIC */

      if(

        formData.condition ===
        "Excellent"

      ){

        finalPrice += 15000;

      }

      else if(

        formData.condition ===
        "Good"

      ){

        finalPrice += 5000;

      }

      else if(

        formData.condition ===
        "Average"

      ){

        finalPrice -= 5000;

      }

      else if(

        formData.condition ===
        "Poor"

      ){

        finalPrice -= 15000;

      }

      setPrice(finalPrice);

      /* AI INSIGHTS */

      let aiTips = [];

      /* YEAR */

      if(

        Number(formData.year) >= 2021

      ){

        aiTips.push(

          "✔ Newer bikes have higher resale value"

        );

      }

      else{

        aiTips.push(

          "⚠ Older bikes depreciate faster"

        );

      }

      /* KM */

      if(

        Number(formData.kmDriven) < 20000

      ){

        aiTips.push(

          "✔ Low KM driven increases bike value"

        );

      }

      else{

        aiTips.push(

          "⚠ High KM reduces resale price"

        );

      }

      /* CONDITION */

      if(

        formData.condition ===
        "Excellent"

      ){

        aiTips.push(

          "✔ Excellent condition boosts market demand"

        );

      }

      else if(

        formData.condition ===
        "Poor"

      ){

        aiTips.push(

          "⚠ Poor condition lowers resale interest"

        );

      }

      /* FUEL */

      if(

        formData.fuel ===
        "Electric"

      ){

        aiTips.push(

          "✔ Electric bikes are trending in market"

        );

      }

      else{

        aiTips.push(

          "✔ Petrol bikes currently have stable demand"

        );

      }

      setInsights(aiTips);

      setLoading(false);

    }
    catch(error){

      setLoading(false);

      console.log(error);

      alert("Prediction Failed");

    }

  };

  return (

    <div className="predict-page">

      <div className="predict-card">

        <h1>

          Bike Price
          <span>

            Prediction

          </span>

        </h1>

        <form
          className="predict-form"
          onSubmit={handlePredict}
        >

          {/* BRAND */}

          <input
            type="text"
            name="brand"
            placeholder="Bike Brand"
            value={formData.brand}
            onChange={handleChange}
          />

          {/* MODEL */}

          <input
            type="text"
            name="model"
            placeholder="Bike Model"
            value={formData.model}
            onChange={handleChange}
          />

          {/* YEAR */}

          <input
            type="number"
            name="year"
            placeholder="Manufacturing Year"
            value={formData.year}
            onChange={handleChange}
          />

          {/* KM */}

          <input
            type="number"
            name="kmDriven"
            placeholder="KM Driven"
            value={formData.kmDriven}
            onChange={handleChange}
          />

          {/* OWNER */}

          <input
            type="number"
            name="owner"
            placeholder="Owner Count"
            value={formData.owner}
            onChange={handleChange}
          />

          {/* FUEL */}

          <select
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
          >

            <option value="Petrol">

              Petrol

            </option>

            <option value="Electric">

              Electric

            </option>

            <option value="Diesel">

              Diesel

            </option>

          </select>

          {/* CONDITION */}

          <select
            name="condition"
            value={formData.condition}
            onChange={handleChange}
          >

            <option value="Excellent">

              Excellent

            </option>

            <option value="Good">

              Good

            </option>

            <option value="Average">

              Average

            </option>

            <option value="Poor">

              Poor

            </option>

          </select>

          {/* BUTTON */}

          <button>

            {

              loading

              ?

              "Predicting..."

              :

              "Predict Price"

            }

          </button>

        </form>

        {/* RESULT */}

        {

          price &&

          <div className="result-box">

            <h3>

              Estimated Price

            </h3>

            <h2>

              ₹ {price}

            </h2>

            <p>

              Condition:
              {formData.condition}

            </p>

          </div>

        }

        {/* AI INSIGHTS */}

        {

          insights.length > 0 &&

          <div className="insights-box">

            <h3>

              AI Insights 🤖

            </h3>

            {

              insights.map((tip,index)=>(

                <p key={index}>

                  {tip}

                </p>

              ))

            }

          </div>

        }

      </div>

    </div>
  );
}

export default PredictPrice;