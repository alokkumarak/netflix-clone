import React, { useEffect, useState } from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
//import Scrollablerows from './Scrollablerows'
import './Row.css'
import axios from './axios';

function Row({title,fetchUrl,isLargeRow=false}) {

    const [movies,setMovies]=useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{

        async function fetchMovie(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchMovie();

    },[fetchUrl])

    console.log(movies)
    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>

          <div className="row__posters">
          {movies.map((movie)=>(
              <div>
              <img 
              className={`row__poster ${isLargeRow && "row__posterLarge" }`}
              key={movie.id}
              src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
              <div className="row__name">
              <TypeWriterEffect
            textStyle={{ fontSize:'15px',fontWeight:'100' }}
            startDelay={100}
            cursorColor="white"
            text={movie.name || movie.original_title} 
            typeSpeed={70}
            
          />
            </div>
             </div>
          ))}
            </div>
        </div>
    )
}

export default Row
