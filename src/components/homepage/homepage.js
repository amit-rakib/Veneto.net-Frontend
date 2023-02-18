import React from 'react';
import "./homepage.css"
import Header from './header';
import Home from './home';
import Footer from './footer';

const Homepage = ({setLoginUser, setMovieList, movies, user}) => {

    return ( 
        
        <main className='container'>
             
             <Header setLoginUser={setLoginUser} user={user}/>
            
             
             <Home setMovieList={setMovieList} movies={movies}/>
            
             <Footer/>
           
            </main>
     );
}
 
export default Homepage;