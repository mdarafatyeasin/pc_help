import React from 'react';
import './BusinessSummary.css'
import img from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const BusinessSummary = () => {
    return (
        <div className='w-5/6 ml-auto mr-auto mb-24 mt-32'>
            <h1 className='mt-12 text-center text-6xl font-bold text-primary'>MILLIONS BUSINESS TRUST US</h1>
            <p className='text-center text-2xl font-bold'>TRY TO UNDERSTWAND USERS EXPECTATION</p>
            <div className='card-summary mb-5'>
                <div>
                    <div className="img flex item-center justify-center  mt-10 ">
                        <img className='w-36' src={img} alt="" />
                    </div>
                    <div className="text text-center">
                        <h1 className='text-5xl font-bold'>45+</h1>
                        <p className='text-2xl mt-1 text-primary font-bold'>Countries</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <div className="img flex item-center justify-center mt-10">
                        <img className='w-36' src={img2} alt="" />
                    </div>
                    <div className="text text-center">
                        <h1 className='text-5xl font-bold'>500+</h1>
                        <p className='text-2xl mt-1 text-primary font-bold'>Order Shipped</p>
                    </div>
                </div>
                <div>
                    <div className="img flex item-center justify-center mt-10">
                        <img className='w-36' src={img3} alt="" />
                    </div>
                    <div className="text text-center">
                        <h1 className='text-5xl font-bold'>355+</h1>
                        <p className='text-2xl mt-1 text-primary font-bold'>Feedback</p>
                    </div>
                </div>
                <div>
                    <div className="img flex item-center justify-center mt-10">
                        <img className='w-36' src={img4} alt="" />
                    </div>
                    <div className="text text-center">
                        <h1 className='text-5xl font-bold'>400+</h1>
                        <p className='text-2xl mt-1 text-primary font-bold'>Happy Client</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;