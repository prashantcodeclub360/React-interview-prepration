import React, {useState, useEffect  } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from'./search.svg';

const API_URL= 'https://www.omdbapi.com?apikey=5376e2e4'

const movie = 
{
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
   const [movies , setMovies] = useState([]);
   const [ searchTerm , setsearchTerm] = useState('');
  
    // fetch the api data 
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }



    useEffect(()=> {
      searchMovies('spiderman');
    },[]);
    return (
      <div className="app">
        <h1>Movie search Engine</h1>
        <div className="search">
          <input 
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          
          /> 
          <img
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(searchTerm)}
          />
        </div>
        {
          movies?.length > 0
          ?(
            <div className="container">
           {movies.map((movie)=> (
            <MovieCard movie = {movie} />
          ))} 
          </div>
          ) : ( 
              <div className="empty">
                <h2>No Movies found</h2>
              </div>

          )
        }
        
       
        </div>

    );

    
}
export default App;