import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </>
    );
};

export default Home;