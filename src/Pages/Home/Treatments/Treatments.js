import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Treatment from '../Treatment/Treatment';

const Treatments = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride treatment',
            img: fluoride,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis culpa ex repellat! Tempora, libero!'
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis culpa ex repellat! Tempora, libero!'
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis culpa ex repellat! Tempora, libero!'
        },

    ]
    return (
        <div className='my-12 py-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map((service) => <Treatment
                    key={service._id}
                    service={service}
                />)
            }
        </div>
    );
};

export default Treatments;