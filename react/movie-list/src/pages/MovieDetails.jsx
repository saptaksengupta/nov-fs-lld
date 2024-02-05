import React from 'react'
import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const { state } = useLocation();
  const movie = state.movie;

  return (
    <div>
      <h2>{movie.name}</h2>
      <div>
        {movie.description}
      </div>
    </div>
  )
}
