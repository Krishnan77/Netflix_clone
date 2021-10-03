import React from 'react'
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import requests from './Requests';
import Row from './Row';

function Homescreen() {
    return (
        <div className = "homescreen">
            <Nav />
            
            <Banner />
            
            <Row
            title = 'Trending'
            fetchUrl={requests.fetchTrending}
            isLargeRow
            />
            <Row title = 'NetfixOriginals' fetchUrl={requests.fetchNetflixOriginals} />
            <Row title = 'ComedyMovies' fetchUrl={requests.fetchComedyMovies} />
            <Row title = 'Documentaries' fetchUrl={requests.fetchDocumentaries} />
            <Row title = 'HorrorMovies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title = 'Trending' fetchUrl={requests.fetchTrending} />
                  
        </div>
    )
}

export default Homescreen
