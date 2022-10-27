import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bgImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const SampleDoctor = () => {
    return (
        // <section
        //     style={{
        //         background: `url(${bgImg})`
        //     }}
        // >
        //     <div className="hero">
        //         <div className="hero-content flex-col lg:flex-row">
        //             <img src={doctor} alt='not found' className="mt-[-100px] max-w-sm rounded-lg" />
        //             <div>
        //                 <h1 className="text-5xl font-bold">Box Office News!</h1>
        //                 <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //                 <button className="btn btn-primary">Get Started</button>
        //             </div>
        //         </div>
        //     </div>
        // </section>

        <section className='flex justify-center items-center mb-6 text-white'
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'

            }}>
            <div className="flex-1">
                <figure><img src={doctor} className="mt-[-100px]" alt="Shoes" /></figure>
            </div>
            <div className="flex-1">
                <h3 className='text-primary text-3xl '>Appointment</h3>
                <h2 className='text-4xl py-7'>Make an appointment</h2>
                <p>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nostrum, sit officia saepe r
                    epellat sapiente, eaque facilis eos nobis corrupti
                    veritatis est, et aliquam hic repellendus quam reiciendis?
                    Fugit neque deleniti necessitatibus repellendus soluta beatae ex
                    inventore sit ullam. Expedita, numquam.</p>

                <div className='mt-5'>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>

            </div>
        </section>

    );
};

export default SampleDoctor;