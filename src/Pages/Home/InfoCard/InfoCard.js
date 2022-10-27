import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div className={`hero shadow-xl lg:max-w-96 rounded-lg ${bgColor}`}>
            <div className='sm:flex sm:flex-col md:flex md:flex-row'>
                <figure className="px-10 pt-10 sm:justify-items-center">
                    <img src={img} className="fill-white md:w-64 lg:w-24 " alt={cardTitle} />
                </figure>
                <div className='card-body rounded'>
                    <h4>{cardTitle}</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, doloremque!</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;