import React from 'react';
import './App.css';
import PropReciever from './PropReciever';

function App() {

  // declare numbers
  const num=1;

  // declare strings
  const str="saad";
  
  // declare object
  const obj={
    fname: "saad",
    lname: "ur rehman",
    id:22
  };

  // declare array
  const arr=[1,2,3,4,6];

  // declare function
  const func=(a)=>{
    return +a;
  };
  
  // Declare boolean
  var bool=false;


  return (
    <div className="App">
      <header className="App-header">
        <PropReciever obj1={obj} str1={str} num1={num} arr1={arr} func1={func} bol1={bool} />
      </header>
    </div>
  );
}

export default App;
