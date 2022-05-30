import React from 'react';
import useParts from '../../Hooks/useParts';
import SinglePart from '../Home/SinglePart';

const Shop = () => {
    const [parts] = useParts()
    return (
        <div>
            <h1 className='mt-20 text-center text-6xl font-bold text-primary mb-2'>Get your product now</h1>
            <p className='text-center text-2xl font-bold mb-24'>TRY TO UNDERSTWAND USERS EXPECTATION</p>
            <div className="w-4/5 parts-card m-auto">
                {
                    parts.map(part => <SinglePart key={part._id} part={part}></SinglePart>)
                }
            </div>
        </div>
    );
};

export default Shop;