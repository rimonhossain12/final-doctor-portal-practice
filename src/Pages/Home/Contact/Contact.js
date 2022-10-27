import React from 'react';
import bgChair from '../../../assets/images/appointment.png';


const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section
            style={{
                background: `url(${bgChair})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'

            }} className="text-center py-10">
            <h3 className='text-primary text-2xl py-4'>Contact Us</h3>
            <h2 className='text-white text-3xl mb-3'>Stay Connected us</h2>
            <div className='form-div'>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                    <input type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs mb-5" /> <br />
                    <textarea name="textarea" id="" cols="20" rows="8" className='text-area w-full max-w-xs mb-5 rounded' placeholder='Write here your comments'></textarea> <br />
                    <button className='btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary'>submit</button>
                </form>
            </div>
        </section>

    );
};

export default Contact;