import React, { useState } from 'react';
import "./register.css"
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
       
    })
    
    const handleChange = e => {
        const { name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
          const { name, email, password, reEnterPassword } = user  
          if( name && email && password && ( password === reEnterPassword) ) {
              axios.post("http://localhost:9002/register", user) 
              .then( res => { 
                 alert(res.data.message)
                 navigate("/login")
                })
          } else {
            alert("invalid input")
          }
          
    }
    
    const handleLogin = () => {
        navigate('/login')
    }

    return ( 
        <Container>
             <CTA>
            <img src='/images/cta-logo-one.svg'/>
        </CTA>
       <Reg className='register'>
        {console.log("User", user)}
            <h3>Register</h3>
            
             <input type="text" name='name' value={user.name} placeholder= "Your Name" onChange={handleChange}></input>
            <input type="text" name='email' value={user.email} placeholder= "Your Email" onChange={handleChange}></input>
            <input type="password" name='password' value={user.password} placeholder= "Your Password" onChange={handleChange}></input>
            <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder= "Re-enter Password" onChange={handleChange}></input>
            
            <div className='button' onClick={register}>Register</div>
            <div>or</div>
            <div className='button' onClick={handleLogin}>Login</div>
        </Reg>
         <CTA>
            <img src='/images/cta-logo-two.png'/>
        </CTA>
        </Container>
     );
}
 
export default Register;
const Container = styled.div`
 
`
const Reg = styled.div`
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
     border: 3px solid rgba(249, 249, 249, 0.1);
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


     