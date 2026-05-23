import {

  Link,
  useNavigate

} from "react-router-dom";

import {

  FaMotorcycle,
  FaUserCircle,
  FaSearch,
  FaSignOutAlt,
  FaRobot,
  FaMagic

} from "react-icons/fa";

import "../styles/Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  /* CHECK LOGIN */

  const token =
  localStorage.getItem("token");

  /* LOGOUT */

  const handleLogout = ()=>{

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    alert("Logout Success");

    navigate("/login");

  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >

        <FaMotorcycle className="logo-icon" />

        <h1 className="logo-text">

          Bike<span>Market</span>

        </h1>

      </Link>

      {/* MENU */}

      <div className="nav-links">

        <Link to="/">

          Home

        </Link>

        <Link to="/bikes">

          Explore

        </Link>

        <Link to="/sell">

          Sell Bike

        </Link>

        <Link to="/dashboard">

          Dashboard

        </Link>

        {/* PRICE PREDICTION */}

        <Link to="/predict">

          <FaRobot />

          Predict Price

        </Link>

        {/* SMART RECOMMEND */}

        <Link to="/recommend">

          <FaMagic />

          Recommend

        </Link>

        {/* AI CHATBOT */}

        <Link to="/chatbot">

          <FaRobot />

          AI Chat

        </Link>

      </div>

      {/* RIGHT */}

      <div className="nav-right">

        {/* SEARCH */}

        <button className="icon-btn">

          <FaSearch />

        </button>

        {/* IF LOGIN */}

        {

          token ?

          <>

            {/* PROFILE */}

            <Link to="/profile">

              <button className="icon-btn">

                <FaUserCircle />

              </button>

            </Link>

            {/* LOGOUT */}

            <button
              className="logout-btn"
              onClick={handleLogout}
            >

              <FaSignOutAlt />

              Logout

            </button>

          </>

          :

          <Link to="/login">

            <button className="login-btn">

              Login

            </button>

          </Link>

        }

      </div>

    </nav>

  );
}

export default Navbar;