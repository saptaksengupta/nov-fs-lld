import logo from './logo.svg';
import './App.css';
import {ComponentOne} from './ComponentOne';
import ListComp from './ListComp';

function App() {
  return (
    <div className='App'>
       I am at app.
       <ComponentOne name="Saptak" age={10} /> 
       <ComponentOne name="Scaler" age={20} />
       <ComponentOne name="React" age={30} />

       <ListComp list={['apple', 'Banana', 'Orange']} />
       <div style={{marginTop: '100px'}}>
       <ListComp list={['creta', 'verna', 'honda city', 'virtus']} />
       </div>
       
    </div>
  );
}

export default App;
