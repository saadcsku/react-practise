import React from 'react'
import './App.css';
import ComponentA from './ComponentA';
import { UserProvider } from './UserContext';

function App() {

  const students=[
    {id: 10, std:"saad"},
    {id: 11, std:"wasi"}
  ]

  return (
    <UserProvider value={students}>
      <ComponentA />
    </UserProvider>
  );
}

export default App;
