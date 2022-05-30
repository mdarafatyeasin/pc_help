import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index }) => {
    // console.log(user)
    const {email, role} = user;
    const makeAdmin = () =>{
        fetch(`https://guarded-fjord-57826.herokuapp.com/users/admin/${email}`,{
            method: "PUT",
            headers:{
                "content-type":"application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Added an admin')
        })
    }
    return (
            <tr>
                <td>{index +1 }</td>
                <td>{email}</td>
                <td className='text-center'>
                    {
                        role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs text-white">Make Admin</button>
                    }
                    
                </td>
                    <td className='text-center'><button class="btn bg-error btn-xs text-white">Delete</button></td>
            </tr>
        
    );
};

export default UserRow;