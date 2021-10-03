import React, { useEffect, useState } from 'react'
import'./Banner.css';
import axios from './axios';
import requests from './Requests';

function Banner() {
      const [movie,setMovie]= useState([]);

      useEffect(() => {
          async function fetchData() {
              const request = await axios.get(requests.fetchTrending);
              setMovie(
                  request.data.results[
                      Math.floor(Math.random()*request.data.results.length - 1)
                  ]
              );
              return request;
          }
          fetchData();
      },[]);
      
      
  return (
        <header
         className="banner"
         style= {{
             backgroundSize:"cover",
             backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
             backgroundPosition:"center center",}}>

    <div className="banner_contents">

        <h1 className="banner_title">{movie?.name|| movie?.orginal_name || movie?.title}</h1>
        <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>

        <h1 className="banner_decri">{movie.overview}</h1>
        </div>
    </div>
         <div className ="banner_fadebutton" ></div>     
        </header>
    )
}

export default Banner
