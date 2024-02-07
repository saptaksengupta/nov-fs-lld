import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import "./style/MovieList.css";
export default function MovieList({ allMovies, searchKeyword, language }) {

    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        setMovies(allMovies);
    }, []);

    useEffect(() => {
        let scope = allMovies;

        if (language) {
            scope = movies;
        }

        // do search now...
        if (searchKeyword) {
            setMovies(filterArr(scope, doSearch));
        } else {
            setMovies(scope);
        }
    }, [searchKeyword]);

    useEffect(() => {
        let scope = allMovies;
        if (searchKeyword) {
            scope = movies;
        }

        if (language && language !== 'all') {
            setMovies(filterArr(scope, doFilterBasedOnLang));
        } else {
            setMovies(scope);
        }

    }, [language]);

    const filterArr = (arr, condition) => {
        return arr.filter(item => condition(item));
    }

    const doSearch = (movie) => {
        return movie.name.includes(searchKeyword);
    }

    const doFilterBasedOnLang = (movie) => {
        return movie.language === language;
    }

    return (
        <div className='movie-list-container'>
            {
                movies && movies.map((movie, index) => {
                    return (
                        <MovieCard key={index} movie={movie} />
                    );
                })
            }
        </div>
    )
}
