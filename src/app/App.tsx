import React, {useEffect} from 'react';
import './App.css';
import {filmsAPI} from "../api/filmsAPI";

export function App() {


    getMovies()
    async function getMovies () {

        filmsAPI.topFilms()
            .then(res => console.log(res.data))

    }

    return (
        <div className="App">

        </div>
    );
}

