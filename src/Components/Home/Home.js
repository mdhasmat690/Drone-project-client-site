import React from 'react';
import Product from '../Product/Product';
import TopBanner from './TopBanner';
import CustomarsReview from '../CustomarsReview/CustomarsReview';

const Home = () => {
    return (
        <div className="container">
            <div><br /></div>     
            <TopBanner/>
            <Product/>
            <CustomarsReview></CustomarsReview>
        </div>
    );
};

export default Home;