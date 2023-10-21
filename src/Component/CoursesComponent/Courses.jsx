

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faClock, faStar, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        cssEase: 'linear',
        arrow: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div className=' mx-28 my-10 w-full sm:w-1/2 md:w-1/2 xl:w-1/4'>
            <div className='justify-center items-center text-center heading'>
                <h1 className='font-extrabold text-3xl mb-4 '>Our Top Selling Courses</h1>
                <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum distinctio ipsa rerum, odit ullam aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nulla </p>
            </div>
            <div className='mt-30 courses '>
                <Slider {...settings}>
                    {courses.map((d) => (
                        <div className='bg-white h-[450px]  rounded-xl  card p-2 shadow'>
                            <div className='h-50 rounded-t-xl bg-slate-500 flex justify-center items-center  space-y-3'>
                                <img key={d.id} src={d.img} alt='' className='h-44 w-44' />
                            </div>

                            <div className='flex flex-col justify-center  gap-1'>
                                <div className='flex gap-5'>
                                    <p className='text-sm font-bold text-left'>{d.name}</p>
                                    <div className='flex gap-1 py-1 px-4'>
                                        <FontAwesomeIcon icon={faStar} style={{ color: "#a9b0bc", }} />
                                        <p className='text-slate-100'>(4.7)</p>
                                    </div>
                                </div>
                                <p>{d.coursename}</p>




                                <div className='flex gap-5'>
                                    <div >
                                        <div className='flex py-1'>
                                            <FontAwesomeIcon className='px-1 text-slate-200' icon={faBookOpen} style={{ color: "#a9b0bc", }} />
                                            <p className='text-xs text-slate-50'>Lesson</p>
                                        </div>

                                        <div className='flex'>
                                            <FontAwesomeIcon className='px-1 text-slate-200' icon={faClock} style={{ color: "#a9b0bc", }} />
                                            <p className='text-xs text-slate-50'>1 hr 50 min</p>
                                        </div>





                                    </div>
                                    <div className=''>

                                        <div className='flex py-1 '>
                                            <FontAwesomeIcon className='px-1 text-slate-200' icon={faUser} style={{ color: "#a9b0bc", }} />
                                            <p className='text-xs text-slate-50'>125 students</p>
                                        </div>

                                        <div className='flex  '>
                                            <FontAwesomeIcon className='px-1 text-slate-200' icon={faVideo} style={{ color: "#a9b0bc", }} />
                                            <p className='text-xs text-slate-50'>12 lectures</p>
                                        </div>

                                    </div>
                                </div>


                                <button className='btn btn-link hover:bg-slate-500 text-white text-decoration-none bg-green-600 text-sm font-bold px-6 py-1 rounded'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </Slider>


            </div>
            <div className='justify-center items-center text-center '>
                <Link to="/allcourses" className='bg-green-600 items-center justify-center text-center px-4 py-2 rounded text-white font-bold'>View All Courses</Link>

            </div>
        </div>
    );
};




export default Courses;