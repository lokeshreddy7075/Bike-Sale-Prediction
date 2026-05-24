import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaSignOutAlt
} from "react-icons/fa";

import {
  useNavigate
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import "../styles/Profile.css";

function Profile() {

  const navigate = useNavigate();

  const [user,setUser] =
  useState(null);

  /* FETCH USER */

  useEffect(()=>{

    const fetchUser = async()=>{

      try{

        const token =
        localStorage.getItem(
          "token"
        );

        /* NO TOKEN */

        if(!token){

          navigate("/login");

          return;
        }

        const res = await axios.get(

          "https://bike-backend.onrender.com/api/auth/me",

          {

            headers:{

              authorization:token

            }

          }

        );

        console.log(res.data);

        setUser(res.data);

      }
      catch(error){

        console.log(error);

      }

    };

    fetchUser();

  },[navigate]);

  /* LOGOUT */

  const handleLogout = ()=>{

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    alert("Logout Success");

    navigate("/login");

  };

  /* LOADING */

  if(!user){

    return (

      <div className="profile-page">

        <h1 style={{color:"white"}}>

          Loading...

        </h1>

      </div>

    );

  }

  return (

    <div className="profile-page">

      <div className="profile-card">

        {/* IMAGE */}

        <div className="profile-image">

          <FaUserCircle />

        </div>

        {/* NAME */}

        <h1>

          {user.name}

        </h1>

        {/* INFO */}

        <div className="profile-info">

          <p>

            <FaEnvelope />

            {user.email}

          </p>

          <p>

            <FaPhone />

            {user.mobile}

          </p>

        </div>

        {/* BUTTON */}

        <div className="profile-buttons">

          <button
            className="logout-btn"
            onClick={handleLogout}
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;