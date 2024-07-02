// import React from 'react';

import { useState } from "react";

import { Rating } from "@material-tailwind/react";

const ReviewCard = ({ item }) => {
    const { star, currentDateTime, reviewMessage } = item;
    const realStar = parseInt(star)
    console.log(realStar)


    return (
        <div>

            <div className="  w-full border  h-52  card  bg-base-100 shadow-xl">
                <div className="flex justify-center" >
                    <Rating value={realStar} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{currentDateTime}</h2>
                    <p>{reviewMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;