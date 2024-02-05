import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SearchBar from '../components/SearchBar';
import ChooseLanguage from '../components/ChooseLanguages';
import './styles/Home.style.css';
import { useEffect } from 'react';
import MovieApiService from '../api/MovieServices';
import { useState } from 'react';
import MovieList from '../components/MovieList';
export default function HomePage() {

  const [allMovies, setAllMovies] = useState(null); 

  useEffect(() => {
    MovieApiService.fetchMovies().then(resp => {
      if (resp && resp.length > 0) {
        setAllMovies(resp);
      }
    });
  });

  return (
    <div>
      <NavigationBar />
      <div className='toolbarContainer'>
        <SearchBar />
        <ChooseLanguage />
      </div>
      {(allMovies !== null) ? (<MovieList allMovies={allMovies}/>): null}
    </div>
  )
}
