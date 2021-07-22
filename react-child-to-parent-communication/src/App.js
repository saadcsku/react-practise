import React from 'react';
import './App.css';
import ComponentA from './ComponentA'

function App() {

  let students=[
    {name: "saad", designation: "Head of Web Development", id:10},
    {name: "wasi", designation: "Senior Web Developer", id:11},
    {name: "kumail", designation: "CO-CEO", id:12},
    {name: "hassan", designation: "CO-CEO", id:13}
  ];

const updateStudents = (val) =>{
 console.log([...students, val]);
}
  return (
    <div className="App">
      <ComponentA  upstd={updateStudents} />
    </div>
  );
}

export default App;
