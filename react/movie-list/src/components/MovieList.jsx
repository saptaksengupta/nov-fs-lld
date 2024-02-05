import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import "./style/MovieList.css";
export default function MovieList({ allMovies }) {

    const [movies, setMovies] = useState(null);
    useEffect(() => {
        setMovies(allMovies);
    }, [allMovies]);
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
