

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className='w-3/4 mx-28 '>
            <div className='justify-center items-center text-center'>
                <h1 className='font-extrabold text-3xl '>Our Top Selling Courses</h1>
                <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus earum distinctio ipsa rerum, odit ullam aliquam.</p>
            </div>
            <div className='mt-28 '>
                <Slider {...settings}>
                    {coursesList.map((d) => (
                        <div className='bg-white h-[450px] text-black rounded-xl mx-26'>
                            <div className='h-50 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                                <img key={d.id} src={d.img} alt='' className='h-44 w-44' />
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-xl font-semibold'>{d.name}</p>
                                <p>{d.coursename}</p>
                                <button className='btn btn-link text-white text-decoration-none bg-green-600 text-lg px-6 py-1 rounded-xl'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


const coursesList = [
    {
        "id": 1,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/1rhmD6x"
    },
    {
        "id": 2,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/M5cVVfL"
    },
    {
        "id": 3,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/M5cVVfL"
    },
    {
        "id": 4,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/M5cVVfL"
    },
    {
        "id": 5,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/M5cVVfL"
    },
    {
        "id": 6,
        "name": "Adam John",
        "coursename": "Deep Learning Specification",

        "img": "https://ibb.co/M5cVVfL"
    }
]

export default Courses;