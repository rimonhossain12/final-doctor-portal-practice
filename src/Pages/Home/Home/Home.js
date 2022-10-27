import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Info from '../Info/Info';
import SampleDoctor from '../SampleDoctor/SampleDoctor';
import TeethService from '../TeethService/TeethService';
import Testimonial from '../Testimonial/Testimonial';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className='px-12'>
            <Header />
            <Info />
            <Treatments />
            <TeethService />
            <SampleDoctor />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;