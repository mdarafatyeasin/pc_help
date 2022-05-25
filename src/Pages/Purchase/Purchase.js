import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user)
    const { purchaseId } = useParams();
    const [part, setPart] = useState({});
    // console.log(part)

    useEffect(() => {
        const url = `http://localhost:5000/parts/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const handleOrder = event =>{
        event.preventDefault();
        const name =event.target.name.value;
        console.log(name)
    }

    return (
        <div className='w-2/4 ml-auto mr-auto mt-20'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-[300px] ml-6 mt-6 mb-6' src={part.picture} /></figure>
                <div class="card-body">
                    <h2 class="card-title text-3xl font-bold">{part.name}</h2>
                    <p>{part.description}</p>
                    <p><strong>Minimum Order:</strong> {part.minimum_quantity}</p>
                    <p><strong>Available Quantity:</strong> {part.available_quantity}</p>
                    <p><strong>Unite Price:</strong> {part.price}</p>
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
                        <input name='phone' type="number" placeholder="phone number" class="input input-bordered input-accent w-full" />
                        <input type="Submit" value="Order" class="btn btn-primary w-1/2 m-auto" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;