import React from 'react';
import "./Container.css"

const Container =(props) =>{

    const containerclass=props.className + " container"

    return(

        <div className={containerclass}>{props.children}</div>
    )

}
export default Container;