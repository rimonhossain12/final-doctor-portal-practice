import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleAppointment from './SingleAppointment';

const AvailableAppoint = ({ date }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-primary py-3 text-2xl text-thin'>Available Service On {format(date, 'PP')}</h2>
                <h3 className='uppercase text-accent fw-3xl'>Please select a service</h3>

                <div className="grid px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
                    {
                        services.map((service) => <SingleAppointment
                            key={service._id}
                            service={service}
                        >

                        </SingleAppointment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppoint;