import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../index.css';
import Left from "../images/signup.gif";
import swal from 'sweetalert';




const Signup = () => {


  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;
    if (!name || !email || !phone || !work || !password || !cpassword) {
      swal({
        title: "Fill all fields properly",
        icon: "warning",
      });
      return console.error();
    }
   
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

   

    const data = await res.json();

    if (data.status === 422 || !data) {
      swal({
        title: "Invalid Registration",
        icon: "error",
      });
    } else {
      swal({
        title: "Registration Successfull",
        icon: "success",
      });

      history(`/login`);
    }
  };

  return (
    <>
    <div className="wrapper">
        <div className="form-left">
            <h2 className="text-uppercase">Inception</h2>
            <p>
                Welcome to the <span style={{color:"#F45C84"}}>Treausre</span> , we heartly welcomes you to become a member after registering in our organization.
            </p>
         <img src={Left} alt="leftimg"  style={{"height":"150px"}} />
            <div className="form-field">
               <NavLink to='/login'><input type="submit" className="account" value="Have an Account?"/></NavLink> 
            </div>
        </div>
        <form className="form-right" method="POST">
            <h2 className="text-uppercase">Registration form</h2>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>First Name</label>
                    <input type="text" id="first_name" className="input-field" placeholder='Enter your name'
                    name='name'
                    required ={true}
                    value={user.name}
                    onChange={handleInputs}/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Work</label>
                    <input type="text" id="last_name" className="input-field"  placeholder='Enter your Work'
                    name='work'
                    required={true}
                    value={user.work}
                    onChange={handleInputs}/>
                </div>
            </div>
            <div className="mb-3">
                <label>Your Email</label>
                <input type="email" className="input-field" placeholder='Enter your email'
                    name='email'
                    required={true}
                    value={user.email}
                    onChange={handleInputs}/>
            </div>
            <div className="mb-3">
                <label>Contact Number</label>
                <input type="email" className="input-field" minLength='10'
                    maxLength='10'
                    placeholder='Enter your number'
                    name='phone'
                    required = {true}
                    value={user.phone}
                    onChange={handleInputs}/>
            </div>
            <div className="row">
                <div className="col-sm-6 mb-3">
                    <label>Password</label>
                    <input type="password" id="pwd"
                     className="input-field" 
                     placeholder='Enter your password'
                    name='password'
                    required
                    value={user.password}
                    onChange={handleInputs}/>
                </div>
                <div className="col-sm-6 mb-3">
                    <label>Confirm Password</label>
                    <input type="password" id="cpwd" 
                    className="input-field" 
                     placeholder='Confirm your password'
                    name='cpassword'
                    required={true}
                    value={user.cpassword}
                    onChange={handleInputs}/>
                </div>
            </div>
           
            <div className="form-field">
                <input type="submit" value="Register" className="register" name="register"  onClick={PostData}/>
            </div>
        </form>
        
    </div>
    </>
   
    );
  };
        
  






export default Signup;
