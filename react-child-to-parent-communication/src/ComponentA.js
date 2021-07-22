import React from 'react';
import ComponentB from './ComponentB';


const ComponentA = (props) =>{

    const StdFunc= (e) =>{
        
        //console.log(e)
        props.upstd(e);
    }


    return(
        <ComponentB stdfunc={StdFunc} />
    )
}
export default ComponentA