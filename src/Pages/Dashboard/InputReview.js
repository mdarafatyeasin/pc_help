import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const InputReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    // const [review, setReview] = useState()
    // console.log(review)
    const onSubmit = data => {
        // setReview(data);
        // --------------------
        const inputReviews = {
            name: data.name,
            opinion: data.opinion,
            rating: data.rating
        }
        fetch('https://guarded-fjord-57826.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputReviews)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Order added successfully')
            })
    }
    return (
        <div className='w-2/4 ml-auto mr-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* -------------------------------------------1st -------------------------- */}
                <div className="form-control w-full max-w-xs">

                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid email'
                            }
                        })}
                        type="text" placeholder="Enter your Name"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt">{errors.name.message}</span>}
                        {errors.name?.type === 'pattern' && <span className="label-text-alt">{errors.name.message}</span>}

                    </label>
                </div>
                {/* --------------------------------------------2nd---------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Give your opinion:</span>
                    </label>
                    <input
                        {...register("opinion", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid email'
                            }
                        })}
                        type="text" placeholder="Enter your Review"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.opinion?.type === 'required' && <span className="label-text-alt">{errors.opinion.message}</span>}
                        {errors.opinion?.type === 'pattern' && <span className="label-text-alt">{errors.opinion.message}</span>}

                    </label>
                </div>
                {/* -----------------------------------------------3rd--------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating:</span>
                    </label>
                    <input
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid rating'
                            }
                        })}
                        type="text" placeholder="Enter your rating"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt">{errors.rating.message}</span>}
                        {errors.rating?.type === 'pattern' && <span className="label-text-alt">{errors.rating.message}</span>}

                    </label>
                </div>
                {/* ----------------------------submit---------------------------- */}
                <input type="submit" value={'Submit'} className='btn w-full max-w-xs text-white' />
            </form>
        </div>
    );
};

export default InputReview;