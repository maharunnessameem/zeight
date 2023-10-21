import React from 'react';
import CoursesComponent from './CoursesComponent/CoursesComponent';
import Header from '../Shared/Header/Header';

const AllCourses = () => {
    return (
        <div>
            <Header></Header>
            <CoursesComponent></CoursesComponent>
        </div>
    );
};

export default AllCourses;