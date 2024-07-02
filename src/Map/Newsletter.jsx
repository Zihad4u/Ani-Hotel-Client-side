// import React from 'react';

import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        toast.success('Subscribe success')
        // Perform subscription logic here
        // Clear the input field after subscription
        setEmail('');
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    return (
        <div  className="mt-8 sm:mt-14 md:mt-20">
            <div  className="flex justify-center pb-8" >
                <p className="text-[12px] sm:text-[20px] md:text-[32px] font-semibold" >Newsletter Signup</p>
            </div>
            <section data-aos="fade-up" className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-[#374151] md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                            Sign Up For <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">Hotel</span> Updates
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                            Join our newsletter and be the first to know about our latest hotel deals, exclusive discounts, and travel tips. Whether you’re planning a quick getaway or a luxurious vacation
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleSubscribe}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input
                                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                value={email}
                                onChange={handleChange}
                            />
                            <button type="submit" className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Newsletter;