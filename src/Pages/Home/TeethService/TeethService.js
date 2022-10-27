import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const TeethService = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={treatment} alt='not found' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental care! 
                        On Your Terms
                    </h1>
                    <p className="py-6">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Ut maxime repellat, tenetur quis veniam sed error quisquam excepturi
                        beatae obcaecati animi, harum distinctio laboriosam repellendus vero? Earum laboriosam modi saepe!
                        Quidem quod vitae, delectus eligendi sapiente consectetur asperiores architecto. Minus?
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default TeethService;