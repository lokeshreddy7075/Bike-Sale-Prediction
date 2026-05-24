import { useState } from "react";

import {
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import {
  Link,
  useNavigate
} from "react-router-dom";

import axios from "axios";

import "../styles/Auth.css";

function Login() {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] =
  useState(false);

  const [formData,setFormData] =
  useState({

    email:"",
    password:""

  });

  /* HANDLE CHANGE */

  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  /* LOGIN */

  const handleLogin = async(e)=>{

    e.preventDefault();

    try{

      const res = await axios.post(

        "https://bike-backend.onrender.com/api/auth/login",

        {

          email:formData.email,

          password:formData.password

        }

      );

      /* SAVE TOKEN */

      localStorage.setItem(

        "token",

        res.data.token

      );

      /* SAVE USER */

      localStorage.setItem(

        "user",

        JSON.stringify(res.data.user)

      );

      alert(res.data.message);

      console.log(res.data);

      /* REDIRECT */

      navigate("/dashboard");

    }
    catch(error){

      console.log(error);

      alert(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card">

        <h1 className="auth-title">

          Login <span>Account</span>

        </h1>

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}

          <div className="password-box">

            <input
              type={
                showPassword
                ? "text"
                : "password"
              }

              name="password"

              placeholder="Enter Password"

              value={formData.password}

              onChange={handleChange}
            />

            <span
              className="password-icon"
              onClick={()=>setShowPassword(
                !showPassword
              )}
            >

              {
                showPassword
                ? <FaEyeSlash />
                : <FaEye />
              }

            </span>

          </div>

          {/* BUTTON */}

          <button className="auth-btn">

            Login

          </button>

          {/* REGISTER */}

          <p className="auth-text">

            Don't have account?

            <Link to="/register">

              Register

            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;