import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePart = ({ part }) => {
    // console.log(part)
    const navigate = useNavigate()
    const navigateBuy = id =>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-[300px]' src={part.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{part.name}</h2>
                    <p>{part.description}</p>
                    <p><strong>Minimum Order:</strong> {part.minimum_quantity}</p>
                    <p><strong>Available Quality:</strong> {part.available_quantity}</p>
                    <p><strong>Unite Price:</strong> {part.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={()=>navigateBuy(part._id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;