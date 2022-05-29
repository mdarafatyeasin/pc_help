import React from 'react';

const UserRow = ({ user, index }) => {
    // console.log(user)
    const {email} = user;
    const makeAdmin = () =>{
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
            <tr>
                <td>{index +1 }</td>
                <td>{email}</td>
                <td className='text-center'>
                    <button onClick={makeAdmin} class="btn btn-xs text-white">Make Admin</button>
                    <button class="btn bg-error btn-xs ml-2 text-white">Delete</button>
                </td>
            </tr>
        
    );
};

export default UserRow;