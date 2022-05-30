import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    return (
        <div className=' w-5/6 m-auto mb-20'>
            <div class="avatar flex justify-center mt-20">
                <div class="w-[200px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {/* <img src={myPhoto} /> */}
                </div>
            </div>
            <h1 className='text-center mt-10 text-5xl font-bold text-primary'>{user.displayName}</h1>
            <div class="card mt-10 bg-secondary">
                <div class="card-body">
                    <h2 class="card-title text-3xl mb-4"><u>My Profile</u></h2>
                    <p><strong className='p-2'>Email:</strong>{user.email}</p>
                    

                </div>
            </div>
        </div>
    );
};

export default MyProfile;