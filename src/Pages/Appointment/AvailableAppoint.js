import { format, } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AppointmentService from './AppointmentService';
import SingleAppointment from './SingleAppointment';
import BookingModal from './BookingModal';

const AvailableAppoint = ({ date }) => {
    const [services, setService] = useState([]);

    // handle booking modal data from here
    const [treatment, setTreatment] = useState(null)
    let formattedDate = format(date, 'PP');

    useEffect(() => {
        // fetch('services.json')
        fetch(`http://localhost:8000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [formattedDate])

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
                <div className='text-center'>
                    <h2 className='text-primary text-2xl capitalize'>Available slots for teeth orthodontics</h2>
                </div>
                <div className="grid px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12">
                    {
                        services.map((service) => <AppointmentService
                            key={service._id}
                            setTreatment={setTreatment}
                            service={service}
                            date={date}
                        >
                        </AppointmentService>)
                    }
                    {
                        treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} />
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppoint;