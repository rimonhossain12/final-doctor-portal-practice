import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, description } = review;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl px-10">
            <div className="card-body">
                <p>{description}</p>
                <div className="card-actions justify-start lg:gap-5">
                    <div>
                        <figure><img src={img} className='w-24 rounded-full' alt="Shoes" /></figure>
                    </div>
                    <div>
                        <div className="mt-5">
                            <h4 className='text-accent text-xl font-bold'>{name}</h4>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;