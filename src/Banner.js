import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Request';
//import Typewriter from 'typewriter-effect';
import TypeWriterEffect from 'react-typewriter-effect';

function Banner() {


    const [movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
           
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;

        } 

        fetchData();

    },[])
   

    function truncate(string,n){
        return string?.length>n?string.substr(0,n-1)+ '............':string;

    }
    return (
        <header className="banner"
          style={{
              backgroundSize:"cover",
              backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition:"center center",
          }}
        >
        <div className="banner__contents">
              <div className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
              </div>
              <div className="banner__buttons">
                   <button className="banner__button"> Play </button>
                   <button className="banner__button">My List</button>
              </div>
              <div className="banner__desc">
                 
              <TypeWriterEffect
            textStyle={{ fontSize:'15px',fontWeight:'100' }}
            startDelay={100}
            cursorColor="white"
            text={truncate(`${movie?.overview}`,300)} 
            typeSpeed={70}
            
          />
            


               {/* {truncate(`${movie?.overview}`,250)}  */}
              </div>
            
             </div>
             <div className="banner--fadeBotton" />
        </header>
         
          
    )
}

export default Banner
