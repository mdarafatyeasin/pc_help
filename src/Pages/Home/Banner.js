import React from 'react';
import banner1 from '../../assets/BannerImg1.png'

const Banner = () => {
    return (
        <div className='bg-secondary'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Hardware Manufacturers!</h1>
                        <p className="py-6">We always want to create something new out of nothing, and without research, and without long hard hours of effort. But there is no such things as a quantum leap. There is only dogged persistence—and in the end you make it look like a quantum leap.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;