import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='row'>
                <div className='col-6'>
                <h1 className='text-white text-center display-1 fw-bolder'>Make Your Small Business</h1>
                <h1 style={{backgroundColor: '#ffe400'}} className='p-3 text-center display-2 fw-bolder'>Accounts</h1>
                <h1 className='text-white text-center display-1 fw-bolder'>Digital and Easy</h1>
                </div>
                <div className='col-6 '>
                    <img  className='w-75 m-5 p-5' src="https://img.freepik.com/free-photo/young-man-working-his-laptop-coffee-shop-young-student-typing-computer_56854-2631.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;