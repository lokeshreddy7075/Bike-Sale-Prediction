import {

  FaHeart,
  FaPhone,
  FaGasPump,
  FaCalendarAlt,
  FaRoad,
  FaMotorcycle

} from "react-icons/fa";

import {

  useParams

} from "react-router-dom";

import {

  useEffect,
  useState

} from "react";

import axios from "axios";

import "../styles/BikeDetails.css";

function BikeDetails() {

  const { id } = useParams();

  const [bike,setBike] =
  useState(null);

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

  /* LOADING */

  if(!bike){

    return(

      <div className="loading-page">

        Loading Bike Details...

      </div>

    );

  }

  return (

    <div className="bike-details-page">

      <div className="bike-container">

        {/* LEFT IMAGE */}

        <div>

          <img

            src={bike.image}

            alt={bike.title}

            className="bike-image"

          />

        </div>

        {/* RIGHT SIDE */}

        <div className="bike-info">

          {/* TITLE */}

          <h1 className="bike-title">

            {bike.title}

          </h1>

          {/* PRICE */}

          <h2 className="bike-price">

            ₹ {bike.price}

          </h2>

          {/* DETAILS */}

          <div className="details-grid">

            <div className="detail-card">

              <p>

                Brand

              </p>

              <h3>

                <FaMotorcycle />

                {bike.brand}

              </h3>

            </div>

            <div className="detail-card">

              <p>

                Model

              </p>

              <h3>

                {bike.model}

              </h3>

            </div>

            <div className="detail-card">

              <p>

                Year

              </p>

              <h3>

                <FaCalendarAlt />

                {bike.year}

              </h3>

            </div>

            <div className="detail-card">

              <p>

                KM Driven

              </p>

              <h3>

                <FaRoad />

                {bike.kmDriven}

              </h3>

            </div>

            <div className="detail-card">

              <p>

                Fuel Type

              </p>

              <h3>

                <FaGasPump />

                {bike.fuel}

              </h3>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="description-box">

            <h2>

              Bike Description

            </h2>

            <p>

              {bike.description}

            </p>

          </div>

          {/* SELLER */}

          <div className="seller-box">

            <h2>

              Seller Information

            </h2>

            <p>

              👤 Name :

              {

                bike.seller?.name

              }

            </p>

            <p>

              📞 Mobile :

              {

                bike.seller?.mobile

              }

            </p>

          </div>

          {/* BUTTONS */}

          <div className="button-group">

            <button className="contact-btn">

              <FaPhone />

              Contact Seller

            </button>

            <button className="wishlist-btn">

              <FaHeart />

              Wishlist

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BikeDetails;