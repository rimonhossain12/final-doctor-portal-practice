import { format } from 'date-fns';
import React from 'react';

const AppointmentService = ({ service, date }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p className='text-thin text-accent'>{format(date, 'PP')}</p>
                <p> {slots.length}
                    {slots.length > 1 ? " spaces " : " space "}
                    Available</p>
                <button className='btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary'>Book Appointment</button>
            </div>
        </div>
    );
};

export default AppointmentService;