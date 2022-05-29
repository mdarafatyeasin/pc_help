import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }
        , [])
    return (
        <div>
            <h1>all users {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full w-[800px]">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Job</th>
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