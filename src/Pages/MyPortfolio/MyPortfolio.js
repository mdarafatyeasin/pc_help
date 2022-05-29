import React from 'react';
import myPhoto from '../../assets/my-photo.jpg'

const MyPortfolio = () => {
    return (
        <div className=' w-5/6 m-auto mb-20'>
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
                    <p><strong className='p-2'>Educational Background:</strong>BA Honours in Bangla</p>
                    <p><strong className='p-2'>Institute:</strong>Gov. City College (NU)</p>
                    <p><strong className='p-2'>List of technologies:</strong>React.js, JavaScript, HTML, CSS, Bootstrap,Node.js, Express.js, MongoDB,Git, Github, Gitlab, VS Code, Chrome Dev Tool,
                        Firebase, Heroku, Figma.</p>
                        <p><strong className='p-2'>My Live website</strong></p>
                    <div className='pl-10'>
                        <p><strong className='p-2'>live website links 1: </strong> https://peaceful-smakager-c89cce.netlify.app</p>
                        <p><strong className='p-2'>live website links 2: </strong> https://deft-blancmange-bd9dc8.netlify.app</p>
                        <p><strong className='p-2'>live website links 3: </strong> https://ultimate-wild.web.app</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;