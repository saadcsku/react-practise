import React from 'react';
import { UserComsumer } from './UserContext';

const ComponentC =() =>{
    return(
        <UserComsumer>
            {
                (name) =>{
                    return(
                      name.map((a)=>{
                          return  <h1>{a.std} {a.id}</h1>
                      })
                    )
                }
            }
        </UserComsumer>
    )

}
export default ComponentC;