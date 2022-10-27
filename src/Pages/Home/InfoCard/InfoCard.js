// import React from 'react';

// const InfoCard = ({ img, address, bgClass }) => {
//     return (
//         <div className="card sm:d-flex lg:max-w-96 shadow-xl">
//             <figure className="px-10 pt-10">
//                 <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
//             </figure>
//             <div className="card-body items-center text-center">
//                 <h2 className="card-title">Shoes!</h2>
//                 <p>If a dog chews shoes whose shoes does he choose?</p>
//             </div>
//         </div>
//     );
// };

// export default InfoCard;

import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    console.log(bgColor)
    return (
        <div className={`hero shadow-xl rounded-lg ${bgColor}`}>
            <div className='sm:flex sm:flex-col md:flex md:flex-row'>
                <figure className="px-10 pt-10 sm:justify-items-center">
                    <img src={img} className="fill-white" alt={cardTitle} />
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