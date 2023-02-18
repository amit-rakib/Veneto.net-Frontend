import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import NewMovie from './components/homepage/newMovie';
import UpdateMovie from './components/homepage/updateMovie';
import ComingSoon from './components/homepage/comingSoon';
import { Routes , Route} from 'react-router-dom'
import { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
function App() {  
  const [ user, setLoginUser ] = useState({
  })
  const [ movies, setMovieList ] = useState({
  })
  useEffect(() =>{
    axios.get("http://localhost:9002/login/movies")
    .then(res =>setMovieList(res.data))
  },[ ])  
  return (
    <div className="App" >
 <BgImg></BgImg>
<Routes>
<Route exact path='/'
       element={ user && user._id ?        
       <Homepage setLoginUser={setLoginUser} setMovieList={setMovieList} movies={movies} user={user}/>: <Login setLoginUser={setLoginUser}/>}/>
<Route exact path='/login' 
element={<Login setLoginUser={setLoginUser}/>} /> 
<Route exact path='/register' 
element={<Register/>} />
<Route exact path='/new' 
element={<NewMovie setMovieList={setMovieList} movies ={movies}/>} />
<Route exact path='/update' 
element={<UpdateMovie setMovieList={setMovieList} movies ={movies}/>} />
<Route exact path='/upgrade' 
element={<ComingSoon setMovieList={setMovieList} movies ={movies}/>} />
</Routes>     
    </div>
  );
}
export default App;
const BgImg = styled.div`
     height: 100%;
     background-position: top ;
     background-size: cover;
     background-repeat: repeat;
     background-image: url("/images/login-background.jpg");
     position: fixed;
     top: 0;
     right: 0;
     left: 0;
     z-index: -1;

`
