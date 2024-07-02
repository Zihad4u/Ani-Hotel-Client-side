// import React from 'react';

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
    const [reviewData,setReviewData]=useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-ten-phi.vercel.app/reviewData')
            .then(res => res.json())
            .then(data => setReviewData(data))
    })

    return (
        <div className="mt-8 sm:mt-16 md:mt-16" >
            <div className="flex justify-center " >
                <p className=" animate__animated animate__fadeInUpBig text-[32px] font-bold" >Our Clients Reviews & Testimonials</p>
            </div>
            <div className="mt-12 gap-2 justify-center grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3" >
                {
                    reviewData.map(item=><ReviewCard
                    item={item}
                    key={item._id}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;