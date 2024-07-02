// import React from 'react';

import { useContext, useState } from "react";
import { toast } from "react-toastify";
import moment from 'moment';
import { AutoContext } from "../Authprovider/AuthContext";

const MybookingCard = ({ book, handleDelete, handleRevie }) => {
    const { user } = useContext(AutoContext)
    const { roomImages, roomTitle, displayName, _id, discountPrice } = book;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleConfirm = (e) => {
        e.preventDefault();
        const date = selectedDate;
        if (date) {
            toast.success('Date Update Successfully')
        }
        else {
            toast.error('Select a date')
        }
        // Add your confirm logic here
        closeModal();
    };

    const haddleREview = id => {
        console.log(id)
        
    }
    // console.log(realId)
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };
    const handleReview = (e) => {
        e.preventDefault();
        const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const reviewStar = e.target.reviews.value;
        const message = e.target.textReview.value;
        const data = {
            currentDateTime, star: reviewStar, reviewMessage: message, email: user.email
        }
        // console.log(data)
        // console.log(_id)
        fetch('https://assignment-11-server-ten-phi.vercel.app/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged == true) {
                    toast.success('Add review successfully')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
            e.reset()
    }
    return (

        <>
            <tr className="bg-white border-b">
                <td className="p-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={roomImages} alt="Room Image" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{displayName}</div>
                        </div>
                    </div>
                </td>
                <td className="p-4 whitespace-nowrap">
                    {roomTitle}
                    <br />
                </td>
                <td className="p-4 whitespace-nowrap">${discountPrice}</td>
                <td className="p-4 whitespace-nowrap flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button className="btn" onClick={openModal}>Update</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-error" onClick={() => document.getElementById('my_modal_2').showModal()}>Cancel</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div>
                        <button
                            className={`btn btn-outline btn-success  `}
                            onClick={() => {
                                document.getElementById('my_modal_1').showModal();
                                haddleREview(_id);
                            }}
                        >
                            Add Review
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <form onSubmit={handleReview} className="modal-box">
                                <div className="relative w-full lg:max-w-sm">
                                    <select name='reviews'
                                        className="w-full  p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                                        defaultValue="" required // Set the default value to an empty string
                                    >
                                        <option value="" disabled hidden>
                                            Give Star Rating
                                        </option>
                                        <option >1 </option>
                                        <option >2</option>
                                        <option>3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </select>
                                </div>
                                <textarea required
                                    placeholder='Write your review'
                                    rows='5'
                                    name='textReview'
                                    className='w-full p-2 mt-3 shadow-xl border rounded-md'
                                ></textarea>
                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type="button" className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                                    <button onClick={() => document.getElementById('my_modal_1').close()} type="submit" className="btn">Submit</button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4 font-semibold text-[12px] sm:text-[18px] ">Are you sure you want to cancel the booking?</p>
                            <div className="modal-action">
                                <div className="space-x-2" method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={() => handleDelete(_id)} className="btn btn-error ">Yes</button>
                                    <button className="btn btn-neutral">No</button>
                                </div>
                            </div>
                        </div>
                    </dialog>
                </td>
            </tr>

            {isModalOpen && (
                <dialog open className="modal">
                    <div className="modal-box space-y-3">
                        <p className="font-bold">Choose a new date</p>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="date"
                            name="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        <div className="modal-action">
                            <form className="space-x-3" onSubmit={handleConfirm}>
                                <button type="button" className="btn" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="btn btn-outline">Confirm</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
};

export default MybookingCard;