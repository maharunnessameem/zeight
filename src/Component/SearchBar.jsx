import React from 'react';
import search from ".././images/searchIcon.png"

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-2 btn btn-link text-white text-decoration-none bg-green-600  border-l rounded ">

                    <img className='ml-5 mr-2 bg-green-500' height={100} src={search} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;