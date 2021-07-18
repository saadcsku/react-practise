import React from 'react';
import "./App.css"

function App() {

  const css={
      color:'white',
      fontSize:"50px",
      backgroundColor: "red"
  }

  return (
    <div className="App">
      <header className="App-header">
       <h1 style={css}>This css is coming from page css</h1>
       <h2 className="h2style">This css is coming from external css file</h2>
      </header>
    </div>
  );
}

export default App;
