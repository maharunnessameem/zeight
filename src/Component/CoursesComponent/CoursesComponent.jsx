import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';

const CoursesComponent = () => {
    const [course, setCourses] = useState([]);
    useEffect(() => {
        fetch(`./coursesData.json`)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    return (
        <div className='container mx-auto  p-8 mt-10'>
            <h1 className='font-bold text-2xl text-center'>
                Life Spring Professionals
            </h1>

            <div className=' flex flex-wrap -mx-4'>
                {course.map((courses) => (
                    <CoursesCard
                        courses={courses}
                        key={courses.id}></CoursesCard>
                ))}
            </div>
        </div>
    );
};

export default CoursesComponent;