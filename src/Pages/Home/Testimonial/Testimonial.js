import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import Review from '../Review/Review';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';

const Testimonial = () => {
    const review = [
        {
            _id: 1,
            name: 'Alex',
            location: 'California',
            img: people1,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor in quo! Expedita eaque suscipit cupiditate eum a maxime laborum.'
        },
        {
            _id: 2,
            name: 'Marie',
            location: 'New York',
            img: people2,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor in quo! Expedita eaque suscipit cupiditate eum a maxime laborum.'
        },
        {
            _id: 3,
            name: 'Zara',
            location: 'Washington',
            img: people2,
            description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor in quo! Expedita eaque suscipit cupiditate eum a maxime laborum.'
        }
    ]
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
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
                {
                    review.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </div>



    );
};

export default Testimonial;