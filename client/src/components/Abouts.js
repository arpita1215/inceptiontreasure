/** @format */

import React,{ useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Aman from "../images/aman.JPG";
import dummy from "../images/dummy.jpg";
// import HomeVideo from "../video/background2.mp4";
import { useNavigate } from "react-router-dom";

const Abouts = () => {

  const navigate= useNavigate();
  const[userData, setuserData] = useState({});

  const callAboutPage= async() => {
    try {
      const res= await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
       credentials:"include"
      });


      const data= await res.json();
      setuserData(data);

      if(!res.status===200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

useEffect(()=>{
  callAboutPage();
});

  
  return (
    <div className="about_body">
    <div className="about-box">
      <div className='container emp-profile col-md-8'>
        <form method='GET'>
          <div className='row'  >
            <div className='col-md-3'>
              <img src={userData.name==="Aman Sah" ? Aman : dummy} alt='aman' />
            </div>
            <div className="row col-md-8">
                <div className="row mt-4">
                  <div className="col-md-8 text-md-start text-center">
                    <h4 className="fw-bold" style={{color:"white"}}>{userData.name}</h4>
                    <p id="about_p"style={{color:"white"}}>{userData.work}</p>
                    <p style={{color:"white"}}>Rankings:1/10</p>
                  </div>
                  <div className="col-md-3 text-md-start text-center">
                   
                      <button
                        className="profile-edit-btn"
                      >
                        Edit Profile
                      </button>
                    
                  </div>
                </div>
                <div className="row">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        About
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Timeline
                      </button>
                    </div>
                  </nav>

                  {/* About(Home) */}

                  <div className="tab-content ms-2 mb-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="row mt-2 ">
                        <div className="col-md-6">
                          <label className="fw-bold"style={{color:"white"}}>UserID</label>
                        </div>
                        <div className="col-md-6"style={{color:"white"}}>
                          <p>8768969696</p>
                        </div>
                      </div>

                      <div className="row mt-2 ">
                        <div className="col-md-6">
                          <label className="fw-bold"style={{color:"white"}}>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>{userData.name}</p>
                        </div>
                      </div>
                      <div className="row mt-2 ">
                        <div className="col-md-6">
                          <label className="fw-bold"style={{color:"white"}}>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>{userData.email}</p>
                        </div>
                      </div>
                      <div className="row mt-2 ">
                        <div className="col-md-6">
                          <label className="fw-bold"style={{color:"white"}}>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>{userData.phone}</p>
                        </div>
                      </div>
                      <div className="row mt-2 ">
                        <div className="col-md-6">
                          <label className="fw-bold" style={{color:"white"}}>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>{userData.work}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline(Profile) */}

                    <div
                      className="tab-pane fade ms-2 mb-3"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="fw-bold" style={{color:"white"}}>Experience</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>Expert</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="fw-bold"style={{color:"white"}}>Hourly Rate</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>$10/hr</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="fw-bold"  style={{color:"white"}}>Total Projects</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>230</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="fw-bold" style={{color:"white"}}>English Proficiency</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>Expert</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label className="fw-bold" style={{color:"white"}}>Availability</label>
                        </div>
                        <div className="col-md-6">
                          <p style={{color:"white"}}>6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div> 
          </div>
    </div>
  );
};

export default Abouts;
