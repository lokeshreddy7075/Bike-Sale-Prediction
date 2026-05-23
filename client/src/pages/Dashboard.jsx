import { useEffect,useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell

} from "recharts";

import {

  FaEdit,
  FaTrash

} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {

  /* STATES */

  const [bikes,setBikes] =
  useState([]);

  /* FETCH BIKES */

  useEffect(()=>{

    const fetchBikes = async()=>{

      try{

        const res = await axios.get(

          "http://localhost:5000/api/bikes"

        );

        setBikes(res.data);

      }
      catch(error){

        console.log(error);

      }

    };

    fetchBikes();

  },[]);

  /* DELETE BIKE */

  const handleDelete = async(id)=>{

    try{

      const token =
      localStorage.getItem("token");

      await axios.delete(

        `http://localhost:5000/api/bikes/${id}`,

        {

          headers:{

            authorization:token

          }

        }

      );

      alert("Bike Deleted ✅");

      setBikes(

        bikes.filter(

          (bike)=>
          bike._id !== id

        )

      );

    }
    catch(error){

      console.log(error);

    }

  };

  /* PIE DATA */

  const pieData = [

    {

      name:"Available",

      value:bikes.length

    }

  ];

  const COLORS = [

    "#facc15"

  ];

  return (

    <div className="dashboard-page">

      {/* SIDEBAR */}

      <div className="sidebar">

        <h1 className="sidebar-title">

          BikeMarket

        </h1>

        <div className="sidebar-links">

          <Link to="/">Home</Link>

          <Link to="/bikes">

            Explore Bikes

          </Link>

          <Link to="/sell">

            Sell Bike

          </Link>

          <Link to="/dashboard">

            Dashboard

          </Link>

        </div>

      </div>

      {/* MAIN */}

      <div className="dashboard-main">

        <div className="dashboard-top">

          <h1>

            Dashboard Analytics

          </h1>

        </div>

        {/* CARDS */}

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <h2>Total Listings</h2>

            <p>

              {bikes.length}

            </p>

          </div>

          <div className="dashboard-card">

            <h2>Total Bikes</h2>

            <p>

              {bikes.length}

            </p>

          </div>

          <div className="dashboard-card">

            <h2>Revenue</h2>

            <p>

              ₹ 8.5L

            </p>

          </div>

        </div>

        {/* CHARTS */}

        <div className="charts-container">

          {/* LINE CHART */}

          <div className="chart-box">

            <h2>

              Bike Prices

            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <LineChart data={bikes}>

                <XAxis dataKey="brand" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#facc15"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}

          <div className="chart-box">

            <h2>

              Listings

            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={100}
                  label
                >

                  {

                    pieData.map((entry,index)=>(

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))

                  }

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* RECENT LISTINGS */}

        <div className="recent-section">

          <h2>

            Recent Listings

          </h2>

          <table>

            <thead>

              <tr>

                <th>Bike</th>

                <th>Price</th>

                <th>Fuel</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {

                bikes.map((bike)=>(

                  <tr key={bike._id}>

                    <td>

                      {bike.brand}

                    </td>

                    <td>

                      ₹ {bike.price}

                    </td>

                    <td>

                      {bike.fuel}

                    </td>

                    <td className="action-buttons">

                      {/* EDIT */}

                      <Link to={`/edit-bike/${bike._id}`}>

                        <button className="edit-btn">

                          <FaEdit />

                        </button>

                      </Link>

                      {/* DELETE */}

                      <button
                        className="delete-btn"
                        onClick={()=>handleDelete(
                          bike._id
                        )}
                      >

                        <FaTrash />

                      </button>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;