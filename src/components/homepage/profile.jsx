import React from 'react'
import styled from 'styled-components';

const Profile = ({setLoginUser, user}) => {
    return ( 
         
        <Prof className=''>
          
             <img src='data:image/jpeg;base64,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' alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <ul>
              <li>Sync is on</li>
              <li>Manage your Account</li>
               <li>Switch Account </li>
                <li>Language: English</li>
                 <li>Mood- Dark</li>
            </ul>
            <div className='btn btn-danger' onClick={() => setLoginUser({})}>Logout</div>
    
        </Prof>
     );
}
 
export default Profile;

const Prof = styled.div`
  
  position: absolute;
  top: 5rem;
  right: 6rem;
  width: 300px;
  height: 400px;
  color: white;
  padding: 15px;
  border-radius: 15px;
  background: #040714;
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 9;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
       transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
  }
  
  &:before {
    content: "";
    position: absolute;
    top: -0.7rem;
    right: 1.1rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background: #040714;
    border-left: 3px solid rgba(249, 249, 249, 0.1);
    border-top: 3px solid rgba(249, 249, 249, 0.1);  
         


}
p {
  opacity: 0.4;
}
img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
   
    cursor: pointer;
}
`