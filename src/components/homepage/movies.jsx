import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Movies=({setMovieList, movies, id})=> {
   const navigate = useNavigate()
   const handleDelete = (id) => {
       axios.post("http://localhost:9002/delete",{ id })
       .then(res => setMovieList(res.data))
    };
   const handleUpdate = (id) => {
         navigate('/update', id)
         console.log("Id:", id)
         axios.post("http://localhost:9002/updatee",{ id })
         .then(res => setMovieList(res.data))
         
   }

        return (
  <Movie>
    

 
     {movies.movieList.map(movie => 
     <Wrap key={movie._id}>
              
                    <Title> {movie.title}</Title>
                    <Genre>Genre: {movie.genre}</Genre>
                    <Stock>Stock in Number: {movie.stock}</Stock>
                    <Rate>Daily Rental Rate: {movie.rate}</Rate>
                    <DelButton><button onClick = { () => handleDelete(movie._id)} className="btn btn-danger btn-sm">Delete</button></DelButton>
                    <UpButton><button className='btn btn-success btn-sm' 
                  
                    onClick={()=> handleUpdate(movie._id)}
                    >Update</button>
                    </UpButton>
                    
                </Wrap>
                )} 
</Movie>
        );
     
}
 
export default Movies;
const Title = styled.div`
     font-size: 52px;
     color: rgb(211,211,211);
     margin-bottom: 60px;
`
const Genre = styled.div`
     color: rgb(169,169,169);
`
const Stock = styled.div`
color: rgb(169,169,169);
`
const Rate = styled.div`
color: rgb(169,169,169);
margin-bottom: 40px;
`
const DelButton = styled.div`
`
const UpButton = styled.div`
  
`

const Movie = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  color: #444;

`
const Wrap = styled.div`
      
      background-color: #444;
      color: #fff;
      border-radius: 10px;
      padding: 20px;
      font-size: 150%;
      opacity: 0.8;
     
     border: 3px solid rgba(249, 249, 249, 0.1);
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
     rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`