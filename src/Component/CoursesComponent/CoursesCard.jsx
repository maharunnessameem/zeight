import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faClock, faStar, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';

const CoursesCard = ({ course }) => {
    const { id, name, coursename, img } = course;
    return (
        <div className='w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4'>
            {/* <div className='c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                <div className='relative pb-48 overflow-hidden'>
                    <img
                        className='absolute inset-0 h-full w-full object-cover'
                        src={img}
                        alt='card-images'
                    />
                </div>
                <div className='p-4'>
                    <span className='inline-block px-2 py-1 leading-none bg-green-100 text-green-900  font-semibold uppercase tracking-wide text-xs'>
                        {title}
                    </span>
                    <h2 className='mt-2 mb-2  font-bold'>{name}</h2>
                    <p className='text-sm'>{description}</p>
                    <div className='mt-3 flex items-center'>
                        <Link
                            to={`/professionals/bookAppointment/${id}`}
                            className='text-[#106731]  py-2 font-semibold text-lg capitalize font-mono inline-block hover:text-black'>
                            book appointment
                            <EastIcon className='ml-2' />
                        </Link>
                    </div>
                </div>
            </div> */}

            <div className='bg-white h-[450px]  rounded-xl  card p-2 shadow '>
                <div className='h-50 rounded-t-xl bg-slate-500 flex justify-center items-center  space-y-3'>
                    <img key={id} src={img} alt='' className='h-44 w-44' />
                </div>

                <div className='flex flex-col justify-center  gap-1'>
                    <div className='flex gap-5'>
                        <p className='text-sm font-bold text-left'>{name}</p>
                        <div className='flex gap-1 py-1 px-4'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#a9b0bc", }} />
                            <p className='text-slate-100'>(4.7)</p>
                        </div>
                    </div>
                    <p>{coursename}</p>




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



        </div>
    );
};

export default CoursesCard;