import React from 'react';
import banner from "../../images/banner.png";
import SearchBar from '../../Component/SearchBar';

const Banner = () => {
    return (
        <div>
            <div className='min-h-full  md:mx-52  mb-5 lg:mb-10'>
                <div className='grid lg:grid-cols-2 lg:gap-8 justify-center items-center sm:flex-row '
                // 'lg:flex flex-col lg:flex-row 
                // justify-center items-center'
                >

                    <div className='lg:ml-5 mb-5 lg:mb-0 mt-20'>

                        <h2 className="text-3xl lg:text-4xl text-dark font-bold mb-6  lg:text-left sm:text-center">Take Your <br />
                            <span className='text-green-500'>Dreams</span> To The <br />Next Level!</h2>
                        <p className="mb-6 text-base lg:text-xs text-dark font-semibold text-left lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae. Eveniet quidem, natus cumque itaque hic, harum sed accusamus illo sapiente excepturi ullam impedit veritatis adipisci nulla tenetur quod iure. Lorem ipsum dolor sit amet, exercitationem explicabo!
                        </p>
                        <SearchBar></SearchBar>

                    </div>
                    <div className=' mb-6 lg:mb-[-10px] lg:mr-14'>
                        <img src={banner} alt={banner} className="w-full h-full md:max-w-full rounded-lg bg " />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;