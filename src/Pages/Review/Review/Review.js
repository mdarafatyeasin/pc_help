import React from 'react';

const Review = ({ review }) => {
    // console.log(review)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                    <h2 className='text-center bg-slate-300 p-2'>Rating: <strong>{review.rating}</strong></h2>
                </div>
            </div>
        </div>
    );
};

export default Review;