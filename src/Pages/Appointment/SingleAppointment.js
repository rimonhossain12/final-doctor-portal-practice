import React from 'react';

const SingleAppointment = ({ service }) => {
    const { name, slots } = service;
    return (
        <>
            <div className="card lg:max-w-64 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title text-primary">{name}</h2>
                </div>
            </div>
        </>

    );
};

export default SingleAppointment;