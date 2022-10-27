import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoint from './AvailableAppoint';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppoint date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;