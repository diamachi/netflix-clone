import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../requests';
import Row from '../Row';

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav/>
            
            <Banner/>

            <Row 
                title = 'Netflix Originals'       
                fetchURL = {requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row 
                title = 'Trending Now'       
                fetchURL = {requests.fetchTrending}
            />

            <Row 
                title = 'Action Movies '       
                fetchURL = {requests.fetchActionMovies}
            />

            <Row 
                title = 'Comedy Movies'       
                fetchURL = {requests.fetchComedyMovies}
            />

            <Row 
                title = 'Documentaries '       
                fetchURL = {requests.fetchDocumentaries}
                />

            <Row 
                title = 'Horror Movies'       
                fetchURL = {requests.fetchHorrorMovies}
                />

            <Row 
                title = 'Romance Movies '       
                fetchURL = {requests.fetchRomanceMovies}
                />

            <Row 
                title = 'Top Rated'       
                fetchURL = {requests.fetchTopRated}
                />


        </div>
        );
}

export default HomeScreen