import React from 'react';
import Reviews from '../Review/Reviews/Reviews';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Connect from './Connect';
import Parts from './Parts';
import State from './State';
// import Question from './Question'


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Connect></Connect>
            <State></State>
            
        </>
    );
};

export default Home;