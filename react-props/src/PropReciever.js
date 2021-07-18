import React from 'react';


const PropReciever = (props) =>{

    return(
        <div>       
        <h1>Number is {props.num1}</h1>
        <h1>String is {props.str1}</h1>
        <h1>Array is {props.arr1[0]}, {props.arr1[1]}, {props.arr1[2]}, {props.arr1[3]}, {props.arr1[4]} </h1>
        <h1>Object is {props.obj1.fname} {props.obj1.lname} {props.obj1.id}</h1>
        <h1>function is {props.func1(23)}</h1>
        <h1>Boolean value is {props.bol1.toString()}</h1>
        </div>
    );

};

export default PropReciever;