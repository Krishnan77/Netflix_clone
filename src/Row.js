import axios from './axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";


function Row({title, fetchUrl, isLargeRow=false})
 {
    const[movies,setMovies] = useState([]);
    const[trailerURL,setTrailerURL]= useState("");
    const base_url ="https://image.tmdb.org/t/p/original/";
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    const opts ={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
    };
    const handleclick=(movie) => {
        if(trailerURL){
            setTrailerURL("");
        }else{
            movieTrailer(movie?.name||" ")
            .then((url) => {
                const urlParams=new URLSearchParams(new URL(url).search);
               setTrailerURL (urlParams.get("v"));
            })
            .catch((error)=>console.log(error));
        }
    };
    
    
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className = "row_posters">
            {movies.map ((movie) => (
                 

                <img className ={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                 onClick={() =>handleclick(movie)}

                 
                src = {`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path

                 } `} alt={movie.name}/>
            ))}
            
             
        </div>  
       {trailerURL && <YouTube videoId={trailerURL}  opts={opts}/>}
        </div>
    );

}

export default Row;
