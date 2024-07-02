// import React from 'react';

import Feature from "../FeatureSection/Feature";
import Map from "../Map/Map";
import Newsletter from "../Map/Newsletter";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Feature/>
            <Map/>
            <Newsletter></Newsletter>
            <Review/>
        </div>
    );
};

export default Home;