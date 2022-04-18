import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId}= useParams();
    return (
        <div>
            <h2>This is Checkout : {serviceId}</h2>
        </div>
    );
};

export default Checkout;