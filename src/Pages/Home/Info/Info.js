import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';


const Info = () => {
    return (
        <div className='grid pb-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <InfoCard img={clock} cardTitle="Opening Hour" description="Saturday-ThursDay 9 to 6" bgColor="bg-gradient-to-r from-secondary to-primary text-white" />
            <InfoCard img={marker} cardTitle="Opening Hour" description="Saturday-ThursDay 9 to 6" bgClass="bg-accent" />
            <InfoCard img={phone} cardTitle="Opening Hour" description="Saturday-ThursDay 9 to 6" bgColor="bg-gradient-to-r from-secondary to-primary text-white" />
        </div>
    );
};

export default Info;