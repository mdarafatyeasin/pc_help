import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://guarded-fjord-57826.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }
        , [])
    return (
        <div>
            <h1>Total users {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full w-[800px]">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =><UserRow user={user} index={index}></UserRow>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;