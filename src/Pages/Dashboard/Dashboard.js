import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center ">
                <h2 className='text-5xl text-purple-500'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
                    {!admin && <li><Link to="/dashboard/review">Add Review</Link></li>}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/allUsers">All Users</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/addProduct">Add Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;