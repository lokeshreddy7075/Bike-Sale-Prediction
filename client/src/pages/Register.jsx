import { useState } from "react";

import {
  FaEye,
  FaEyeSlash,
  FaUserCircle
} from "react-icons/fa";

import {
  Link,
  useNavigate
} from "react-router-dom";

import axios from "axios";

import "../styles/Auth.css";

function Register() {

  const navigate = useNavigate();

  const [showPassword,setShowPassword] =
  useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
  useState(false);

  const [image,setImage] = useState(null);

  const [formData,setFormData] =
  useState({

    name:"",
    email:"",
    mobile:"",
    password:"",
    confirmPassword:""

  });

  /* IMAGE PREVIEW */

  const handleImage = (e) => {

    const file = e.target.files[0];

    if(file){

      setImage(URL.createObjectURL(file));

    }
  };

  /* HANDLE CHANGE */

  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };

  /* REGISTER */

  const handleRegister = async(e)=>{

    e.preventDefault();

    try{

      if(
        formData.password !==
        formData.confirmPassword
      ){

        alert("Passwords do not match");

        return;
      }

      const res = await axios.post(

        "https://bike-backend.onrender.com/api/auth/register",

        {

          name:formData.name,

          email:formData.email,

          mobile:formData.mobile,

          password:formData.password

        }

      );

      alert(res.data.message);

      console.log(res.data);

      /* REDIRECT */

      navigate("/login");

    }
    catch(error){

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="auth-page">

      <div className="auth-card register-card">

        <h1 className="auth-title">

          Create <span>Account</span>

        </h1>

        <form
          className="auth-form"
          onSubmit={handleRegister}
        >

          {/* PROFILE IMAGE */}

          <div className="profile-upload">

            {
              image
              ?

              <img
                src={image}
                alt="profile"
                className="profile-preview"
              />

              :

              <FaUserCircle className="default-profile" />
            }

            <label className="upload-btn">

              Upload Profile

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                hidden
              />

            </label>

          </div>

          {/* NAME */}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          {/* MOBILE NUMBER */}

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
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

              placeholder="Password"

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

          {/* CONFIRM PASSWORD */}

          <div className="password-box">

            <input
              type={
                showConfirmPassword
                ? "text"
                : "password"
              }

              name="confirmPassword"

              placeholder="Confirm Password"

              value={formData.confirmPassword}

              onChange={handleChange}
            />

            <span
              className="password-icon"
              onClick={()=>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >

              {
                showConfirmPassword
                ? <FaEyeSlash />
                : <FaEye />
              }

            </span>

          </div>

          {/* TERMS */}

          <div className="terms-box">

            <input type="checkbox" />

            <p>

              I agree to Terms &
              Conditions

            </p>

          </div>

          {/* BUTTON */}

          <button className="auth-btn">

            Register

          </button>

          {/* LOGIN */}

          <p className="auth-text">

            Already have account?

            <Link to="/login">

              Login

            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;