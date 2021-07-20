import React from 'react';
import Members from './Members';


const App =() =>{

    const memberList=[
        {name: "saad", id: 20, age:32, email:"saadcsku@gmail.com"},
        {name: "wasi", id: 20, age:32, email:"wasi@gmail.com"},
        {name: "kumail", id: 20, age:32, email:"kumail@gmail.com"},
        {name: "waqar", id: 20, age:32, email:"waqar@gmail.com"},
        {name: "mubeen", id: 20, age:32, email:"mubeen@gmail.com"},
    ]
    return(
        <Members list={memberList} />

    )


};

export default App;