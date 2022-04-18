import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId}= useParams();
    return (
        <div className='my-5 text-center'>
            <h2>Checkout Service Id : {serviceId}</h2>
        </div>
    );
};

export default Checkout;