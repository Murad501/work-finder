import React from 'react';
import ExperiencedJob from './ExperiencedJob/ExperiencedJob';
import FindJob from './FindJob/FindJob';
import FresherJob from './FresherJob/FresherJob';

const Home = () => {
    return (
        <div>
            <FindJob></FindJob>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
        </div>
    );
};

export default Home;