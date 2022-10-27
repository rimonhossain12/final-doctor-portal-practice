import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import Info from '../Info/Info';
import SampleDoctor from '../SampleDoctor/SampleDoctor';
import TeethService from '../TeethService/TeethService';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Info />
            <Treatments />
            <TeethService />
            <SampleDoctor />
            <Footer />
        </div>
    );
};

export default Home;