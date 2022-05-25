import React, { useEffect, useState } from 'react';

const Parts = () => {
    const [parts, setParts] = useState([])

    useEffect(() => {
        fetch('partsData.json ')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])

    return (
        <div>
            <h1>{parts.length}</h1>
        </div>
    );
};

export default Parts;