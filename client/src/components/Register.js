import React,{useState} from 'react'
import { slide as Menu } from 'react-burger-menu'
import PdfViewerComponent from './PdfViewerComponent';
import axios from 'axios';
import baseurl from '../baseurl'
import { BrowserRouter as Router, Route, useNavigate} from 'react-router-dom'
import {Nav, NavItem, Navbar, Button,Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap'
import { Link } from 'react-router-dom';
function Register()
{
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [name , setName] = useState('');

  const navigate = useNavigate()



  async function  handleRegister(e)
  {
      e.preventDefault();
    
      const {data}= await axios.post(`${baseurl}/users/signin`, {name,email,password})
      console.log(data)
      navigate('/login')
    

  }

    return(
       <>
       <div className='bg'>
      
        <div className="login-box">
      <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="avatar" alt="Avatar Image"/>
      <h1>Signup Here</h1>
      <form>
        <label >Name</label>
        <input type="text" id="name" placeholder="Name" onChange= {(e)=> setName(e.target.value)}/>
        <label >Email Id</label>
        <input type="text" id="email" placeholder="Enter email" onChange= {(e)=> setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password"   placeholder="Enter Password" onChange= {(e)=> setPassword(e.target.value)}/>
        <Button  className=' offset-3 col-5' onClick={handleRegister}>Sign Up </Button>
        <hr>
        </hr>
       
        <Link to={"/login"}>
        Have An account?Login Here
        </Link>
        
      </form>
    </div>
    </div>

       </>
    )
}
export default Register