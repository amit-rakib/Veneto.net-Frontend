import React, { useState } from 'react';
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const UpdateMovie = ({setMovieList, movies, id}) => {

    const navigate = useNavigate()

    const [ Movies, setMovies] = useState({
        title: "",
        genre: "",
        stock: "",
        rate: ""
    })
    
    const handleChange = e => {
        const { name, value} = e.target
        setMovies({
            ...Movies,
            [name]: value
        })
    }

    const updateMovie = () => {
          const { title, genre, stock, rate } = Movies  
          if( title && genre && stock && rate) {
              axios.post("http://localhost:9002/update", Movies) 
              .then( res => { 
                 alert(res.data.message)
                 setMovieList(res.data)
                 navigate("/")
                })
          } else {
            alert("invalid input")
          }
          
    }
    return ( 
        <Container>
            
             <CTA>
            <img src='/images/cta-logo-one.svg'/>
        </CTA>
       <Reg className='register'>
        
            <h3>Update Movie</h3>
            
             <input type="text" name='title' value={Movies.title} placeholder= "Title" onChange={handleChange}></input>
            <input type="text" name='genre' value={Movies.genre} placeholder= "Genre" onChange={handleChange}></input>
            <input type="text" name='stock' value={Movies.stock} placeholder= "Stock in number" onChange={handleChange}></input>
            <input type="text" name='rate' value={Movies.rate} placeholder= "Daily rental rate" onChange={handleChange}></input>
            <div className='button' onClick={()=>updateMovie()}>Update</div>

        </Reg>
         <CTA>
            <img src='/images/cta-logo-two.png'/>
        </CTA>
        </Container>
     );
}
 
export default UpdateMovie;
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