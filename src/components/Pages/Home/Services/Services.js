import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../../../Hooks/useFetch';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='container my-5 mx-auto'>
            <div className='text-center my-5'><h1 style={{ borderBottom: '3px solid #ffe400' }} className='d-inline'>Services</h1></div>
                <div className='row g-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;