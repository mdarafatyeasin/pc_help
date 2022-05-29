import React from 'react';

const UserRow = ({ user, index }) => {
    console.log(user)
    return (
            <tr>
                <td>{index +1 }</td>
                <td>{user.email}</td>
                <td>Blue</td>
            </tr>
        
    );
};

export default UserRow;