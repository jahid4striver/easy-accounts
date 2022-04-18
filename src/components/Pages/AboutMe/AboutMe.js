import React from 'react';
import jahid from '../../../images/jahid.jpg'

const About = () => {
    return (
        <div className='container text-center'>
            <div className='text-center my-5'> <h1 style={{ borderBottom: '3px solid #ffe400' }} className='d-inline'>About Me</h1></div>
            <div className='row mx-auto'>
                <div className='col-12 col-md-12 col-lg-12'>
                    <div className='shadow-lg p-3 mb-5 bg-body text-center'>
                        <img width='400px' className='rounded-circle' src={jahid} alt="" />
                        <h3>Jahid Hossen</h3>
                        <h4>Sinior Accounts Officer at <span className='text-warning fw-bold'>NBC Firm</span></h4>
                        <p className='text-justify'>Assalamualikum, Iam Jahid. I Am 25 year old. Recently Finished 4 year BBA Course in Management Department. Working as a accounts officer since 2017. In my job i find computer make my job very easy and painless. I used various company online/offline softwares for accounts and inventory management. Recently i discovered that learning software development can make my job more easy when need to solving accounts related problems of others. So Recently i engaged with Programming Hero Web Development Course so that i can use this knowlede and Patience to learn more technologies that relates to online software development and solve others problem and of course make money. So Inshallah i will try hard and soul to fulfill my goals.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;