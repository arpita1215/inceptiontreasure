/** @format */

import React,{useContext} from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Logo from "../images/c.png";
import { UserContext } from "../App";
import Home from "../images/home.svg";
import Login from "../images/login.svg";
import Signup from "../images/signup.svg";
import About from "../images/about.svg";
import Contact from "../images/contact.svg";
import Logout from "../images/logout.svg"

const Navbar = () => {
  const {state} = useContext(UserContext)

  const RenderMenu=()=>{
   if(state){
     return(
       <>
       
             {/* <li className='nav-item'> */}
      {/* <NavLink
        className='nav-link active'
        style={{ color: "black" }}
        aria-current='page'
        to='/'
      >
 
 <img src={Home} alt="" style={{height:"15px" }} /> Home
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='about'
      >
          <img src={About} alt="" style={{height:"15px"}} /> About
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='contact'
      >
          <img src={Contact} alt="" style={{height:"15px"}} /> Contact
      </NavLink>
    </li> */}
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='logout'
      >
       <img src={Logout} alt="" style={{height:"15px" }} /> Logout
      </NavLink>
    </li>
       </>
     )
   }else{
     return(
       <>
{/*              
             <li className='nav-item'>
      <NavLink
        className='nav-link active'
        style={{ color: "black" }}
        aria-current='page'
        to='/'
      >
       <img src={Home} alt="" style={{height:"15px"}} /> Home
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='about'
      >
         <img src={About} alt="" style={{height:"15px"}} /> About
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='contact'
      >
        <img src={Contact} alt="" style={{height:"15px"}} /> Contact
      </NavLink>
    </li> */}
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='login'
      >
       <img src={Login} alt="" style={{height:"15px"}} /> Login
      </NavLink>
    </li>
    <li className='nav-item'>
      <NavLink
        className='nav-link'
        style={{ color: "black" }}
        to='signup'
      >
        <img src={Signup} alt="" style={{height:"15px"}} /> Register
      </NavLink>
    </li>
   
       </>
     )
   }
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light '>
        <div className='container-fluid'>
          {/* <NavLink className='navbar-brand' to='/'>
            <img src={Logo} alt='logo' srcset='' className='navlogo' style={{"height":"120px","width":"120px","marginTop":"12px"}} />
          </NavLink> */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
             <RenderMenu/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
