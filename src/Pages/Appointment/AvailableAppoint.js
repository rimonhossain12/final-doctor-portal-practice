import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';

const AvailableAppoint = ({ date }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-primary py-3 text-2xl text-thin'>Available Service On {format(date, 'PP')}</h2>
                <h3 className='uppercase text-accent fw-3xl'>Please select a service</h3>
            </div>
        </div>
    );
};

export default AvailableAppoint;