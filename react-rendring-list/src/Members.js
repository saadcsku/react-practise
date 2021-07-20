import React from 'react';


const Members =(props) =>{


    const listMembers=props.list.map((member) =>{
        return(
            <tr>
                <td>{member.name}</td>
                <td>{member.id}</td>
                <td>{member.age}</td>
                <td>{member.email}</td>
            </tr>
        )
    })

    return(

        <table width="400px" border="1" align="center">
            <tr>
                <td>Name</td>
                <td>Id</td>
                <td>Age</td>
                <td>Email</td>
            </tr>
            {listMembers}
        </table>

    )


};

export default Members;