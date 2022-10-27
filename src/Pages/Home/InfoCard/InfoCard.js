import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor}`}>
            <figure><img src={img} className="p-3" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;