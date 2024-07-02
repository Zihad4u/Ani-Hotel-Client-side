// import React from 'react';
import {
    Card,
    CardHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const RoomCard = ({available}) => {
    const {roomImages,_id}=available;
    console.log(roomImages)
    return (
        <Link to={`/featureDetails/${_id}`} className="mt-3 " >
            <Card className="w-full     h-full hover:transform hover:scale-105 transition-transform duration-300  hover:shadow-xl shadow-lg">
                <CardHeader floated={false} className="h-full">
                    <img src={roomImages} alt="profile-picture" />
                </CardHeader>
            </Card>
        </Link>
    );
};

export default RoomCard;