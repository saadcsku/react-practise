import React,{useState, useEffect} from 'react';
import './App.css';

function App() {

   const [resourceType, SetResourceType]=useState()
   
  console.log("Render");

  useEffect(()=>{
    console.log("Reosurce type changed");
  }, [resourceType])

  const PostHandler =() =>{
    SetResourceType('Post')
  }
  
  const UserHandler =() =>{
    SetResourceType('User')
  }
  
  const CommentsHandler =() =>{
    SetResourceType('Comments')
  }


  return (
    <div className="App">
      <h1>Welcome</h1>
      <button onClick={PostHandler}>Post</button>
      <button onClick={UserHandler}>User</button>
      <button onClick={CommentsHandler}>Comments</button> <br></br>
        {resourceType}
    </div>
  );
}

export default App;
