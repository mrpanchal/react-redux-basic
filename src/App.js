import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counter';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  let newValue = 5;
  return (
    <div className="App">
      <h1>Redux</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment(newValue))}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
