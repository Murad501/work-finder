import React from 'react';
import ExperiencedJob from './ExperiencedJob/ExperiencedJob';
import FindJob from './FindJob/FindJob';
import FresherJob from './FresherJob/FresherJob';
import TopItCompanies from './TopItCompanies/TopItCompanies';

const Home = () => {
    return (
        <div>
            <FindJob></FindJob>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
            <TopItCompanies></TopItCompanies>
        </div>
    );
};

export default Home;