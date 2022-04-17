import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const {price, name, img, description } = service;
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <Card className='shadow bg-body rounded service-card' style={{ width: '24rem', height: '32rem' }}>
                <Card.Img className='img-fluid h-50' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='service-title'>{name} ${price}</Card.Title>
                    <Card.Text className='mt-5'>
                        {description}
                    </Card.Text>
                    <Button className='checkout-btn'>Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;