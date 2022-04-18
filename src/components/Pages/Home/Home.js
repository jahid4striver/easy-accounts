import React from 'react';
import Services from '../Home/Services/Services';
import Banner from './Banner/Banner';
import Testmonials from './Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;