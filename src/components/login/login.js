import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';


const Login = ( { setLoginUser}) => {
     
    const navigate = useNavigate()

     const [ user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = e => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }
   
    
    const handleRegister = () => {
        navigate('/register')
    }

    return ( 
        <Container>
            
        <CTA>
            <img src='/images/cta-logo-one.svg'/>
        </CTA>
       
        
        <Log className='login' >
            {console.log("USER: ", user)}
            <p>Get Premium Quality Movies & Series</p>
            <h1>By Login</h1>
            
            <input type="text" name='email' value={user.email} onChange={handleChange} placeholder= "Enter your Email"></input>
            <input type="password" name='password' value={user.password} onChange={handleChange} placeholder= "Enter your Password"></input>
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={handleRegister}>Register</div>
        </Log>
         
         <CTA>
            <img src='/images/cta-logo-two.png'/>
        </CTA>
          
        </Container>
        
     );

     
}
 
export default Login;

const Container = styled.div`
 
`
const Log = styled.div`
     border: 3px solid rgba(249, 249, 249, 0.1);
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
     &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`
const CTA = styled.div`
      img {
        margin-top: 22px;
        margin-bottom: 12px;
        max-width: 400px;
        min-height: 1px;
        display: flex;
        width: 100%;
      }
     `
