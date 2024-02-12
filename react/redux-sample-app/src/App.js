import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import TodoComponent from './components/TodoComponent';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        {/* <Counter /> */}
        <TodoComponent />
      </Provider>
    </div>
  );
}

export default App;
