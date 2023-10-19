import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Courses from '../Component/CoursesComponent/Courses';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Courses></Courses>

            <Footer></Footer>
        </div>
    );
};

export default Home;