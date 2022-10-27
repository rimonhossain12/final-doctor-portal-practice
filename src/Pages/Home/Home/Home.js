import React from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Info />
            <Treatments />
        </div>
    );
};

export default Home;