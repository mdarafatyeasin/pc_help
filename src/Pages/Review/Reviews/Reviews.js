import React from 'react';
import { useEffect, useState } from "react"
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const url = 'reviewData.json'
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='mt-32 text-center text-6xl font-bold text-primary mb-16'>Customer Review</h1>
            <div className="w-4/5 m-auto parts-card">
            {
                reviews.map(review => <Review key={review._id} review = {review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;