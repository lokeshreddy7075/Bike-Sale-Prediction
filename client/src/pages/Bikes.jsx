import { useEffect,useState } from "react";

import axios from "axios";

import BikeCard from "../components/BikeCard";

import "../styles/Bikes.css";

function Bikes() {

  const [bikes,setBikes] =
  useState([]);

  /* FETCH BIKES */

  useEffect(()=>{

    const fetchBikes = async()=>{

      try{

        const res = await axios.get(

          "https://bike-backend.onrender.com/api/bikes"

        );

        console.log(res.data);

        setBikes(res.data);

      }
      catch(error){

        console.log(error);

      }

    };

    fetchBikes();

  },[]);

  return (

    <div className="bikes-page">

      <h1 className="bikes-title">

        Explore Bikes 🚀

      </h1>

      <div className="bikes-grid">

        {

          bikes.map((bike)=>(

            <BikeCard
              key={bike._id}
              bike={bike}
            />

          ))

        }

      </div>

    </div>

  );
}

export default Bikes;