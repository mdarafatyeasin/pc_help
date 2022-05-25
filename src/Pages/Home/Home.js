import React from 'react';
import Reviews from '../Review/Reviews/Reviews';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
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
            <State></State>
            {/* <Question></Question> */}
            <Footer></Footer>
        </>
    );
};

export default Home;