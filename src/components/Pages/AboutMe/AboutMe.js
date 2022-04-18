import React from 'react';

const About = () => {
    return (
        <div className='container text-center'>
            <div className='text-center mb-5'> <h1 style={{ borderBottom: '3px solid #ffe400' }} className='d-inline'>About Me</h1></div>
            <div className='row mx-auto'>
                <div className='col-12 col-md-12 col-lg-12'>
                    <div className='shadow-lg p-3 mb-5 bg-body text-center'>
                        <h6>Difference between authorization and authentication?</h6>
                        <img width='400px' className='rounded' src="https://static.javatpoint.com/blog/images/authentication-vs-authorization2.png" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eligendi nobis consequuntur nesciunt placeat. Totam natus labore ipsam voluptates fuga.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;