import React from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import TeethService from '../TeethService/TeethService';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Info />
            <Treatments />
            <TeethService />
        </div>
    );
};

export default Home;