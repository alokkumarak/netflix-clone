import React from 'react';
import './HomeScreen.css';
import Banner from './Banner';
import Row from './Row';
import Nav from './Nav';
import requests from './Request';

function HomeScreen() {
    return (
        <div className="homescreen">
        {/* navbar */}
        <Nav/>
        {/* banner */}
        <Banner />
        {/* different rows */}
        <Row title="Trending Now...." 
             fetchUrl={requests.fetchTrending}
             isLargeRow
        />
        <Row title="Netflix Originals"
            fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Top Rated "
            fetchUrl={requests.fetchTopRated}
        />
        <Row title="Action movies"
            fetchUrl={requests.fetchActionMovies}
        />
        <Row title="Horror"
            fetchUrl={requests.fetchHorrorMovies}
        />
        <Row title="Romantic"
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Row title="comedy"
            fetchUrl={requests.fetchComedyMovies}
        />
        <Row title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
        /> 

        
        </div>
    )
}

export default HomeScreen
