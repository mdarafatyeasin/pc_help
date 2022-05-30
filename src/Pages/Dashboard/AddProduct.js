import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, loading, error] = useAuthState(auth);
    // const [review, setReview] = useState()
    // console.log(review)
    const onSubmit = data => {
        // setReview(data);
        // --------------------
        const inputParts = {
            name: data.name,
            description: data.description,
            minimum_quantity: data.minimum_quantity,
            price: data.price,
            available_quantity: data.available_quantity,
            picture: data.picture
        }
        fetch('https://guarded-fjord-57826.herokuapp.com/parts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputParts)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Parts added successfully')
            })
    }
    return (
        <div className='w-2/4 ml-auto mr-auto p-20'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* -------------------------------------------1st -------------------------- */}
                <div className="form-control w-full max-w-xs">

                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Parts name is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid parts name'
                            }
                        })}
                        type="text" placeholder="Enter product name"
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
                        <span className="label-text">Give your product description:</span>
                    </label>
                    <input
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid description'
                            }
                        })}
                        type="text" placeholder="Enter your product description"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt">{errors.description.message}</span>}
                        {errors.description?.type === 'pattern' && <span className="label-text-alt">{errors.description.message}</span>}

                    </label>
                </div>
                {/* -----------------------------------------------3rd--------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Quantity:</span>
                    </label>
                    <input
                        {...register("minimum_quantity", {
                            required: {
                                value: true,
                                message: 'Minimum Quantity is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid Minimum Quantity'
                            }
                        })}
                        type="text" placeholder="Enter product Minimum Quantity"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.minimum_quantity?.type === 'required' && <span className="label-text-alt">{errors.minimum_quantity.message}</span>}
                        {errors.minimum_quantity?.type === 'pattern' && <span className="label-text-alt">{errors.minimum_quantity.message}</span>}

                    </label>
                </div>
                {/* ------------------------------4th-------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid price'
                            }
                        })}
                        type="text" placeholder="Enter product price"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt">{errors.price.message}</span>}
                        {errors.price?.type === 'pattern' && <span className="label-text-alt">{errors.price.message}</span>}

                    </label>
                </div>
                {/* -----------------------------6th----------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity:</span>
                    </label>
                    <input
                        {...register("available_quantity", {
                            required: {
                                value: true,
                                message: 'available_quantity is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid available_quantity'
                            }
                        })}
                        type="text" placeholder="Enter product available_quantity"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.available_quantity?.type === 'required' && <span className="label-text-alt">{errors.available_quantity.message}</span>}
                        {errors.available_quantity?.type === 'pattern' && <span className="label-text-alt">{errors.available_quantity.message}</span>}

                    </label>
                </div>
                {/* -----------------------------5th----------------------------------- */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Picture:</span>
                    </label>
                    <input
                        {...register("picture", {
                            required: {
                                value: true,
                                message: 'Picture is required'
                            },
                            pattern: {
                                // value: /w{1,15}$/,
                                message: 'Please give a valid picture url'
                            }
                        })}
                        type="url" placeholder="Enter product picture url"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.picture?.type === 'required' && <span className="label-text-alt">{errors.picture.message}</span>}
                        {errors.picture?.type === 'pattern' && <span className="label-text-alt">{errors.picture.message}</span>}

                    </label>
                </div>
                {/* ----------------------------submit---------------------------- */}
                <input type="submit" value={'Submit'} className='btn w-full max-w-xs text-white' />
            </form>
        </div>
    );
};

export default AddProduct;