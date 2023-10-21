import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';
import "./CoursesComponent.css"

const CoursesComponent = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div id='courses' className='container mx-auto  p-8 mt-10'>
            <h1 className='font-bold text-2xl text-center'>
                All Courses
            </h1>

            <div className=' flex mx-4 courses-container'>
                {courses.map(course =>
                    <CoursesCard
                        course={course}
                        key={course.id}></CoursesCard>
                )}
            </div>
        </div>
    );
};

export default CoursesComponent;