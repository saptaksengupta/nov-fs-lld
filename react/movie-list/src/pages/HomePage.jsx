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
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [language, setLanguage] = useState(null);

  const onSearchKeywordChange = (searchValue) => {
    setSearchKeyword(searchValue);
  }

  const onLangChange = (value) => {
    setLanguage(value);
  }


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
        <SearchBar onSearch={onSearchKeywordChange} />
        <ChooseLanguage onLanguageChange={onLangChange} />
      </div>
      {(allMovies !== null) ? (<MovieList searchKeyword={searchKeyword} language={language} allMovies={allMovies}/>): null}
    </div>
  )
}
