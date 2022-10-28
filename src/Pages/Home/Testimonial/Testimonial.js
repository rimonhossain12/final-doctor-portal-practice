import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <div className='py-12 my-12'>
            <div className="flex justify-between sm:gap-5">
                <div>
                    <h2 className='text-primary text-2xl font-bold'>Testimonial</h2>
                    <h3 className='text-accent text-3xl'>What our patients says</h3>
                </div>
                <div>
                    <img className='sm:w-24 lg:w-48' src={quote} alt="not found" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;