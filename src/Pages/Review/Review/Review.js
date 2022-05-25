import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.review}</p>
                    <h2 className='text-center bg-slate-300 p-2'>Rating: <strong>{review.rating}</strong></h2>
                </div>
            </div>
        </div>
    );
};

export default Review;