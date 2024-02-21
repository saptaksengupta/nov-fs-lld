import logo from './logo.svg';
import './App.css';
import MemoExample from './components/MemoExample';
import CallBackExample from './components/CallBackExample';
import PaginationExample from './PaginationExample';

function App() {
  return (
    <div className="App">
      {/* <MemoExample /> */}
      {/* <CallBackExample /> */}
      {/* <div>
        <p>Hello, a test implementation</p>
        <div>Hello world!!!</div>
        <div>One more div</div>
      </div> */}
      <PaginationExample />
    </div>
  );
}

export default App;
