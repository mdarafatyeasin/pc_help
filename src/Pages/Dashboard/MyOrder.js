import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)
    console.log(orders)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Order {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-[800px]">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Img</th>
                            <th>Parts Name</th>
                            <th>Quantity</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><img className='w-14' src={order.img} alt="" /></td>
                                    <td>{order.partName}</td>
                                    <td>{order.quantity}</td>
                                    <td className='text-center'>
                                        <button class="btn-success rounded-full btn-xs">Pay Now</button>
                                        <button class="btn-error ml-5 rounded-full btn-xs">Cancel</button>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;