/** @format */
import React ,{useState,useContext} from "react";
import LogImg from "../images/signup.gif";
import { NavLink , useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Board from './Board';
import swal from 'sweetalert';

const Login = () => {

  const {dispatch} = useContext(UserContext)

  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      swal({
        title: "Invalid Credentials",
        icon: "error",
      });
    } else {
      dispatch({type:"USER", payload:true})
      swal({
        title: "Login Successfull",
        icon: "success",
      });
      history('/board');
    }

  }


  return (
    <>
      <div className='loginbody'>
        <div className='container' id='container'>
          <div className='form-container log-in-container'>
            <form  method="POST">
              <h1>Login</h1>
              <div className='social-container'>
                <a href='/' className='social1'>
                  <i className='fa fa-google fa-2x'></i>
                </a>
                <a href='/' className='social2'>
                  <i className='fa fa-facebook fa-2x'></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type='email' name='Email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email' value={email} />
              <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Password' value={password} />
              <NavLink to='/signup' className='signup'>
                New User? SignUp
              </NavLink>
              <button type='submit' onClick={loginUser} >Log In</button>
            </form>
          </div>
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-right'>
                <h1>Login Here to Enter the World of INCEPTION</h1>
                <img src={LogImg} alt='login' className='loginimg' />
                <p>This login takes you to another DEVELOPMENT Universe.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
