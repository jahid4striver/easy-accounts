import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <div className='text-center my-5'> <h1 style={{ borderBottom: '3px solid #ffe400' }} className='d-inline'>Blogs</h1></div>
            <div className='row'>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div className='shadow-lg p-3 mb-5 bg-body text-center'>
                        <h6><span className='display-6'>Q</span>: Difference between authorization and authentication?</h6>
                        <img width='400px' className='rounded' src="https://static.javatpoint.com/blog/images/authentication-vs-authorization2.png" alt="" />
                        <p>Authentication relate to the user identification and Authorization relate to user permission. Thus user login a website with email and password. The Website will verify user email and password is correct or not, if correct than user can succesfully sign in so it pass authentication. On the other hand there is some page which can see only selected person is authorization of the website. </p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div className='shadow-lg p-3 mb-5 bg-body text-center'>
                        <h6><span className='display-6'>Q</span>: Why you using Firebase? What other option do you have to implement authentication?</h6>
                        <img width='400px' className='rounded' src="https://miro.medium.com/max/1024/1*zTdZMxbTkVdXCOoZlXLnsg.png" alt="" />
                        <p>Firebase is open source and free authentication system provided by google. Authentication Information is need to be protected and secure.Who is more trusted than google when comes to secure data. That's why i use google firebase authentication system.It also Make App fast. There is many alternative of firebase like Back4App, Parse, AWS Amplify, Backendless etc.</p>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <div className='shadow-lg p-3 mb-5 bg-body text-center'>
                        <h6><span className='display-6'>Q</span>: What other service does firebase provide other than authentication?</h6>
                        <img width='400px' className='rounded' src="https://i.ytimg.com/vi/iosNuIdQoy8/maxresdefault.jpg" alt="" />
                        <p>Firebase provide Hosting for host website, Cloud Firestore use for Caches data of app, Cloud Functions use for manage servers, Cloud Storage for save data and files, Google Analytics for know visitor trends, Predictions use as Event Tracker, Cloud Messaging for Send messages to any device, Dynamic Links for link website to mobile app, Remote Config change the behavior and appearance of your app remotely.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;