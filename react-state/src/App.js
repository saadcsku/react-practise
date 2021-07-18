import React,{useState} from 'react';
import './App.css';

const App = () => {
  let a = 0;
  let [val, valUpdator]=useState(a);

  const Inc = () =>{
    val=val+1
    valUpdator(val);
  }

  return (
    <div className="App">
      <h1>Counter {val}</h1>
      <button onClick={Inc}>Add</button>
    </div>
  );
}

export default App;
