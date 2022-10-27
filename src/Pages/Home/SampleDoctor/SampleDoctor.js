import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bgImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const SampleDoctor = () => {
    return (
        <section className='flex justify-center items-center px-10 mt-12 text-white'
            style={{
                background: `url(${bgImg})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'

            }}>
            <div className="flex-1 hidden lg:block">
                <figure><img src={doctor} className="mt-[-120px] " alt="Shoes" /></figure>
            </div>
            <div className="flex-1">
                <h3 className='text-primary text-3xl'>Appointment</h3>
                <h2 className='text-4xl py-4'>Make an appointment</h2>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nostrum, sit officia saepe r
                    epellat sapiente, eaque facilis eos nobis corrupti
                    veritatis est, et aliquam hic repellendus quam reiciendis?
                    Fugit neque deleniti necessitatibus repellendus soluta beatae ex
                    inventore sit ullam. Expedita, numquam.</p>
                <PrimaryButton>Get started</PrimaryButton>

            </div>
        </section>

    );
};

export default SampleDoctor;