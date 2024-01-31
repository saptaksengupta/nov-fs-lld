import logo from './logo.svg';
import './App.css';
import {ComponentOne} from './ComponentOne';
import ListComp from './ListComp';
import Counter from './Counter';
import TodoApp from './TodoApp/TodoApp';

function App() {
  return (
    <div className='App'>
       {/* I am at app.
       <ComponentOne name="Saptak" age={10} /> 
       <ComponentOne name="Scaler" age={20} />
       <ComponentOne name="React" age={30} />

       <ListComp list={['apple', 'Banana', 'Orange']} />
       <div style={{marginTop: '100px'}}>
       <ListComp list={['creta', 'verna', 'honda city', 'virtus']} />
       </div> */}

       {/* <Counter initialCount={10}/>

       <Counter initialCount={15} />

       <Counter initialCount={0}/> */}

       <TodoApp />
       
    </div>
  );
}

export default App;
