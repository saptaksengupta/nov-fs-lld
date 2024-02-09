import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProductDetails from './components/ProductDetails';
import ThemeProvider from './contenxt-api/ThemeProvider';

function App() {
  return (
    <div>
      <div className="App">
        <ThemeProvider>
          <NavBar /> 
          <ProductDetails />
        </ThemeProvider>
      </div>

      <div>
        <div>asdsad</div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
