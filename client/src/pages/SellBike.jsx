import { useState } from "react";

import axios from "axios";

import "../styles/SellBike.css";

function SellBike() {

  const [bike, setBike] = useState({

    title:"",
    brand:"",
    model:"",
    year:"",
    price:"",
    kmDriven:"",
    fuel:"",
    image:"",
    description:""

  });

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setBike({

      ...bike,

      [e.target.name]:
      e.target.value

    });

  };

  /* SUBMIT */

  const handleSubmit = async(e) => {

    e.preventDefault();

    try{

      const token =
      localStorage.getItem("token");

      const res = await axios.post(

        "https://bike-backend.onrender.com/api/bikes/add",

        bike,

        {

          headers:{

            authorization:token

          }

        }

      );

      console.log(res.data);

      alert(

        "Bike Listed Successfully 🚀"

      );

      /* CLEAR FORM */

      setBike({

        title:"",
        brand:"",
        model:"",
        year:"",
        price:"",
        kmDriven:"",
        fuel:"",
        image:"",
        description:""

      });

    }
    catch(error){

      console.log(error);

      alert("Failed To Add Bike");

    }

  };

  return (

    <div className="sell-page">

      <div className="sell-container">

        <h1 className="sell-title">

          Sell Your <span>Bike</span>

        </h1>

        <form
          className="sell-form"
          onSubmit={handleSubmit}
        >

          {/* TITLE */}

          <input
            type="text"
            name="title"
            placeholder="Bike Title"
            value={bike.title}
            onChange={handleChange}
          />

          {/* BRAND */}

          <input
            type="text"
            name="brand"
            placeholder="Bike Brand"
            value={bike.brand}
            onChange={handleChange}
          />

          {/* MODEL */}

          <input
            type="text"
            name="model"
            placeholder="Bike Model"
            value={bike.model}
            onChange={handleChange}
          />

          {/* PRICE */}

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={bike.price}
            onChange={handleChange}
          />

          {/* YEAR */}

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={bike.year}
            onChange={handleChange}
          />

          {/* KM */}

          <input
            type="number"
            name="kmDriven"
            placeholder="KM Driven"
            value={bike.kmDriven}
            onChange={handleChange}
          />

          {/* FUEL */}

          <select
            name="fuel"
            value={bike.fuel}
            onChange={handleChange}
          >

            <option value="">

              Select Fuel Type

            </option>

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

          {/* IMAGE */}

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={bike.image}
            onChange={handleChange}
          />

          {/* DESCRIPTION */}

          <textarea
            name="description"
            placeholder="Bike Description"
            value={bike.description}
            onChange={handleChange}
          />

          {/* BUTTON */}

          <button
            type="submit"
            className="sell-btn"
          >

            Post Bike

          </button>

        </form>

      </div>

    </div>
  );
}

export default SellBike;