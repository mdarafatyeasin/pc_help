import React from 'react';
import banner1 from '../../assets/BannerImg1.png'

const Banner = () => {
    return (
        <div className='bg-secondary'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg w-full" />
                    <div>
                        <h1 class="text-5xl font-bold">Computer Hardware Manufacturers!</h1>
                        <p class="py-6">We always want to create something new out of nothing, and without research, and without long hard hours of effort. But there is no such things as a quantum leap. There is only dogged persistence—and in the end you make it look like a quantum leap.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;