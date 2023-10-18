import React from 'react';
import banner from "../../images/banner.png";

const Banner = () => {
    return (
        <div>
            <div className='min-h-full  md:mx-52  mb-5 lg:mb-10'>
                <div className='grid lg:grid-cols-2 lg:gap-8 justify-center items-center sm:flex-row'
                // 'lg:flex flex-col lg:flex-row 
                // justify-center items-center'
                >

                    <div className='lg:ml-5 mb-5 lg:mb-0 mt-20'>

                        <h2 className="text-3xl lg:text-4xl text-dark font-bold mb-6 text-left lg:text-left">Take Your <br />
                            <span className='text-green-500'>Dreams</span> To The <br />Next Level!</h2>
                        <p className="mb-6 text-base lg:text-xs text-dark font-semibold text-left lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae. Eveniet quidem, natus cumque itaque hic, harum sed accusamus illo sapiente excepturi ullam impedit veritatis adipisci nulla tenetur quod iure. Lorem ipsum dolor sit amet, exercitationem explicabo!
                        </p>
                        {/* <div class="relative text-gray-600">
                            <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" 
                                    xmlns: xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml: space="preserve" width="512px" height="512px">
                                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                    </svg>
                                </button>
                            </input>
                        </div> */}

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