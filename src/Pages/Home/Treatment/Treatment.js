import React from 'react';

const Treatment = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div className="card card-compact lg:max-w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Treatment;