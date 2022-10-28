import { format } from 'date-fns';
import React from 'react';

const AppointmentService = ({ service, date, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p className='text-thin text-acceont'>{format(date, 'PP')}</p>
                <p> {slots.length}
                    {slots.length > 1 ? " spaces " : " space "}
                    Available</p>
                <p>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500 text-thin'>Try Another day!</span>
                    }
                </p>
                <button>Book Appointment</button>


            </div>
        </div>
    );
};

export default AppointmentService;