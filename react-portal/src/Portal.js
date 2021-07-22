import React from 'react'
import ReactDOM from 'react-dom';


const Portal = () =>{
    return ReactDOM.createPortal(
        <div className="App">
          <h1>Welcome Saad</h1>
        </div>,document.getElementById('portal-root')
      );
}

export default Portal;