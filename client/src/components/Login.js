import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import PdfViewerComponent from './PdfViewerComponent';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import baseurl from '../baseurl'

import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, useNavigate} from 'react-router-dom'

function Login(props)
{
  const navigate = useNavigate()
 

    const [email, setemail] = useState('');
    const [password , setPassword] = useState('');
  
    async function handlelogin(e)
    {
        e.preventDefault();
        const {data}= await axios.post(`${baseurl}/users/login`, {email,password})
        console.log(data)
        if(data!="Invalid Username and password")
        {
          alert("Login Succesful")
          navigate("/upload")
         
        }
       

      


    }
 
    return(
      
      <div className='bg'>

     
       
        <div className="login-box">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="avatar" alt="Avatar Image"></img>
      <h1>Login Here</h1>
      <form>
        
        <label >Email ID</label>
        <input type="text"  id ="email" placeholder="Enter email"   onChange= {(e)=> setemail(e.target.value)}></input>
       
        <label>Password</label>
        <input type="password"  placeholder="Enter Password"   onChange= {(e)=> setPassword(e.target.value)}></input>
        <Button className=' offset-3 col-6' onClick={(e)=>handlelogin(e)}> Login </Button>
        <hr>
        </hr>

       
        <Link to={"/register"}>
        Don't Have An account? Register Here
        </Link>
      </form>
    </div>
    </div>

       
    )
}
export default Login