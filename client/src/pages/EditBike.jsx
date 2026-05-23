import {

  useEffect,
  useState

} from "react";

import {

  useNavigate,
  useParams

} from "react-router-dom";

import axios from "axios";

import "../styles/SellBike.css";

function EditBike() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [bike,setBike] =
  useState({

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

  /* FETCH BIKE */

  useEffect(()=>{

    const fetchBike = async()=>{

      try{

        const res = await axios.get(

          `http://localhost:5000/api/bikes/${id}`

        );

        setBike(res.data);

      }
      catch(error){

        console.log(error);

      }

    };

    fetchBike();

  },[id]);

  /* HANDLE CHANGE */

  const handleChange = (e)=>{

    setBike({

      ...bike,

      [e.target.name]:
      e.target.value

    });

  };

  /* UPDATE BIKE */

  const handleUpdate = async(e)=>{

    e.preventDefault();

    try{

      const token =
      localStorage.getItem("token");

      await axios.put(

        `http://localhost:5000/api/bikes/${id}`,

        bike,

        {

          headers:{

            authorization:token

          }

        }

      );

      alert("Bike Updated 🚀");

      navigate("/dashboard");

    }
    catch(error){

      console.log(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="sell-page">

      <div className="sell-container">

        <h1 className="sell-title">

          Edit <span>Bike</span>

        </h1>

        <form
          className="sell-form"
          onSubmit={handleUpdate}
        >

          <input
            type="text"
            name="title"
            placeholder="Bike Title"
            value={bike.title}
            onChange={handleChange}
          />

          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={bike.brand}
            onChange={handleChange}
          />

          <input
            type="text"
            name="model"
            placeholder="Model"
            value={bike.model}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={bike.price}
            onChange={handleChange}
          />

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={bike.year}
            onChange={handleChange}
          />

          <input
            type="number"
            name="kmDriven"
            placeholder="KM Driven"
            value={bike.kmDriven}
            onChange={handleChange}
          />

          <select
            name="fuel"
            value={bike.fuel}
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

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={bike.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={bike.description}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="sell-btn"
          >

            Update Bike

          </button>

        </form>

      </div>

    </div>
  );
}

export default EditBike;