import React,{useState} from 'react';


const ComponentB = (props) =>{

    const [stdname , Setstdname]=useState('');
    const [stddesign , Setstdesign]=useState('');

const SubmitHandler = (e) =>{
e.preventDefault();

const studentObj ={
    name: stdname,
    Designation: stddesign,
    id: Math.random()
}

props.stdfunc(studentObj);
//console.log(studentObj);
}

const NameHndler = (e) => {
    Setstdname(e.target.value);
}

const DesignationHandler = (e) =>{
    Setstdesign(e.target.value);

}


    return(
        <form onSubmit={SubmitHandler}>
            <input type="text" placeholder="Name" onChange={NameHndler}/> <br></br>
            <input type="text" placeholder="Designation" onChange={DesignationHandler} /><br></br>
            <button>Submit</button>
        </form>
    )
}
export default ComponentB