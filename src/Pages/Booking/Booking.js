import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>This is booking No: {serviceId}</h1>
        </div>
    );
};

export default Booking;