import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import './App.css';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';

function ErrorElement() {
  return (
    <div>
      <h2>404, Not found!</h2>
      <Link to={"./"}>Go to Home</Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/movies/:moviesId' element={<MovieDetails />}></Route>
          <Route path='*' element={<ErrorElement />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
