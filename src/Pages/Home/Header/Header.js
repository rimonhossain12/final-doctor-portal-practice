import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import chair from '../../../assets/images/chair.png';

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Quis saepe reiciendis minima debitis eaque
                            reprehenderit adipisci. Lorem ipsum dolor sit amet.</p>
                        <PrimaryButton>get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;