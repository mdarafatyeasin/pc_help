import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    const { purchaseId } = useParams();
    const [part, setPart] = useState({});
    // console.log(part)
    const { _id, name, description, picture, price, available_quantity, minimum_quantity } = part;

    useEffect(() => {
        const url = `https://guarded-fjord-57826.herokuapp.com/parts/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault();
        // const name = event.target.name.value;
        // console.log(name)

        const order = {
            partId: _id,
            partName: name,
            img: picture,
            email: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            quantity: event.target.quantity.value
        }
        fetch('https://guarded-fjord-57826.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)               
                    toast.success('Order added successfully ')
            })
    }


    return (
        <div className='w-2/4 ml-auto mr-auto mt-20'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-[300px] ml-6 mt-6 mb-6' src={picture} /></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl font-bold">{name}</h2>
                    <p>{description}</p>
                    <p><strong>Minimum Order:</strong> {minimum_quantity}</p>
                    <p><strong>Available Quantity:</strong> {available_quantity}</p>
                    <p><strong>Unite Price:</strong> {price}</p>
                </div>
            </div>
            {/* --------------------------------- */}
            <div class="card mt-20 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title mb-6">Order details:</h2>
                    <form onSubmit={handleOrder} className='w-3/4 m-auto grid grid-cols-1 gap-2'>
                        <input name='name' type="text" disabled value={user.displayName} class="input input-bordered input-accent w-full" />
                        <input name='email' type="text" disabled value={user.email} class="input input-bordered input-accent w-full" />
                        <input name='quantity' type="number" placeholder="Quantity" class="input input-bordered input-accent w-full" />
                        <input name='address' type="text" placeholder="Address" class="input input-bordered input-accent w-full" />
                        <input name='phone' type="number" placeholder="Phone Number" class="input input-bordered input-accent w-full" />
                        <input type="Submit" value="Order" class="btn btn-primary w-1/2 m-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;