import { Provider } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import SingleUserComponent from './components/SingleUserComponent';
import TodoComponent from './components/TodoComponent';
import UsersComponent from './components/UsersComponent';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        {/* <Counter /> */}
        {/* <TodoComponent /> */}
        {/* <UsersComponent /> */}
        <SingleUserComponent />
      </Provider>
    </div>
  );
}

export default App;
