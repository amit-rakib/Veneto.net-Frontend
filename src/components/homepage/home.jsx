import React from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './movies';
import Viewers from './viewers';

export default function Home({setMovieList, movies}) {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
       <Movies setMovieList={setMovieList} movies={movies}/>
       
    </Container>
  )
}

const Container = styled.main`
     min-height: calc(100vh - 130px);
     padding: 0 calc(3.5vw + 5px);
     position: relative;  
`