import React from 'react';

const Footer = () => {
    const date= new Date();
    const currentYear= date.getUTCFullYear();
    return (
        <div style={{height: '150px'}} className='bg-dark text-white d-flex justify-content-center align-items-center'>
            <p>&copy; Copyright Easy Accounts {currentYear}</p>
        </div>
    );
};

export default Footer;