// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AutoContext } from "../Authprovider/AuthContext";
import axios from "axios";
import MybookingCard from "./MybookingCard";
import { toast } from "react-toastify";

const Mybooking = () => {
    const { user } = useContext(AutoContext)
    const [booking, setBooking] = useState([])
    // console.log(booking)
    useEffect(() => {
        // Only fetch data if user is defined
        if (user && user.email) {
            const url = `https://assignment-11-server-ten-phi.vercel.app/mybooking?email=${user.email}`;
            axios.get(url)
                .then(res => {
                    setBooking(res.data);
                })
                .catch(err => {
                    console.error("Error fetching bookings:", err);
                });
        }
    }, [user]); // Run effect when `user` changes
    const handleRevie = data => {
        console.log('hello',data)
    }
    const handleDelete = id => {
        console.log(id)
        fetch(`https://assignment-11-server-ten-phi.vercel.app/cancellation/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success('Booking Cancel')
                }
                console.log(data)
                setBooking(prevBookings => prevBookings.filter(booking => booking._id !== id));
            })
            .catch(errro => {
                toast.error(errro.message)
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-6" >
                <p className=" text-[12px] font-semibold sm:text-[25px]" >My Bookings</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Room Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {booking.map(book => (
                            <MybookingCard
                                handleRevie={handleRevie}
                                handleDelete={handleDelete}
                                key={book._id}
                                book={book}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mybooking;