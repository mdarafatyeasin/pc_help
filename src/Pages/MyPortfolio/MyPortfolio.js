import React from 'react';
import myPhoto from '../../assets/my-photo.jpg'

const MyPortfolio = () => {
    return (
        <div className=' w-5/6 m-auto'>
            <div class="avatar flex justify-center mt-20">
                <div class="w-[200px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={myPhoto} />
                </div>
            </div>
            <h1 className='text-center mt-10 text-5xl font-bold text-primary'>Md.Yeasin Arafat</h1>
            <div class="card mt-10 bg-secondary">
                <div class="card-body">
                    <h2 class="card-title text-3xl mb-4"><u>Personal Information</u></h2>
                    <p><strong className='p-2'>Email:</strong>yeasinarafat54239@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;