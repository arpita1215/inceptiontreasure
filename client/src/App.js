/** @format */

import React, { createContext,useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Abouts from "./components/Abouts";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Errorpage from "./components/Errorpage";
import { initialState,reducer } from "../src/reducer/UseReducer";
import Board from "./components/Board";
//1.contextAPI
export const UserContext= createContext();


const Routing = ()=>{
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Abouts />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path = 'board' element={<Board/>}/>
        <Route path='logout' element={<Logout />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
  );
};


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
  
   

    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routing/>
      
      </UserContext.Provider>
    </>
  );
};

export default App;
