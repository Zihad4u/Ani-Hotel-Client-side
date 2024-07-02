import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHouse, FaBowlFood, FaWifi } from "react-icons/fa6";
import { MdOutlinePets, MdReduceCapacity } from "react-icons/md";
import { Tooltip } from 'react-tooltip';
import { AutoContext } from '../Authprovider/AuthContext';
import { toast } from 'react-toastify';
const FeatureDetails = () => {
    const { user } = useContext(AutoContext);
    const displayName = user ? user.displayName : 'Guest';
    const data = useLoaderData();
    const { roomImages, roomTitle, description,_id, discountPrice,
        pricePerNight, petFriendly, availability, details, roomSize, specialOffers } = data;
    // console.log(details)
    const [tooltipContent, setTooltipContent] = useState(null);
    const [date,setDate]=useState(null)
    const handleDate=e=>{
        e.preventDefault()
        const date=e.target.date.value;
        setDate(date)
    }
    const handleBooked=()=>{
        const bookedData={
            roomImages,roomTitle,discountPrice,email:user.email,availability:'Booked',_id,displayName
        }
        fetch('https://assignment-11-server-ten-phi.vercel.app/bookedRoom',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(bookedData)
        })
        
        .then(res => res.json())
        .then(data=>{
            if(data.acknowledged==true){
                toast.success('Booked Success')
            }
        })
        .catch(error=>{
            toast.error(error.message)
        })
        window.location.reload();
        
    }
    return (
        <div className="px-4" >
            <div className="w-full h-[680px] mt-4 md:flex  pb-14" >
                {/* left side div */}
                <div className="md:w-[50%] w-[100%]  h-full  flex justify-center items-center" >
                    <img className="w-full rounded-xl object-cover h-full" src={roomImages} alt="" />
                </div>
                {/* right side */}
                <div className="md:w-[50%] mt-3 sm:mt-0 w-[100%] h-full sm:pl-5 bg-[#FFF]" >
                    <h3 className="m-0 sm:text-[40px] text-[20px] font-bold text-[#131313]" >{roomTitle}</h3>
                    {/* <p className="text-[20px] font-medium text-[#424242]" >Subcategory Name : <span>{subcategory_Name}</span></p> */}
                    <hr />
                    <p className="text-[20px] font-medium text-[#424242]" ></p>
                    <hr className="text-white" />
                    <p className="font-normal text-[#5a5a5a]  text-[16px] " ><span className="text-[#131313] font-bold" >Description :</span>{description}</p>
                    <div className="lg:flex sm:gap-5 mt-3 " >
                        <p className="font-medium btn rounded-full  text-[#23BE0A]" >Status:<>{availability}</></p>
                        <p className="font-medium btn rounded-full text-[#23BE0A]" >Room Size:<>{roomSize}</></p>
                        <p className="font-medium mt-3 lg:mt-0 btn rounded-full text-[#23BE0A]" >Offer:<>{`${specialOffers}% discount`}</></p>
                    </div>
                    <hr />
                    <div className="mt-4" >
                        <p className='mb-4' >Our Serevices:</p>
                        <div className='sm:flex grid grid-cols-3 sm:grid-cols-1 gap-4' >
                            <div>
                                <p id="cardClickable" className='btn btn-circle' onClick={() => setTooltipContent('bedrooms')}>
                                    <FaHouse />
                                </p>
                                <Tooltip anchorSelect="#cardClickable" open={tooltipContent === 'bedrooms'} content={`${details.bedrooms} bedrooms`} >
                                </Tooltip>
                            </div>
                            <div>
                                <p id="Breakfast" className='btn btn-circle' onClick={() => setTooltipContent('breakfast')}>
                                    <FaBowlFood />
                                </p>
                                <Tooltip anchorSelect="#Breakfast" open={tooltipContent === 'breakfast'} content='Free Breakfast'>
                                </Tooltip>
                            </div>
                            <div>
                                <p id="petFriendly" className='btn btn-circle' onClick={() => setTooltipContent('petFriendly')}>
                                    <MdOutlinePets />
                                </p>
                                <Tooltip anchorSelect="#petFriendly" open={tooltipContent === 'petFriendly'} content={`PetFriendly ${petFriendly}`}>
                                </Tooltip>
                            </div>
                            <div>
                                <p id="FreeWifi" className='btn btn-circle' onClick={() => setTooltipContent('Free Wifi')}>
                                    <FaWifi />
                                </p>
                                <Tooltip anchorSelect="#FreeWifi" open={tooltipContent === 'Free Wifi'} content='Free Wifi'>
                                </Tooltip>
                            </div>
                            <div>
                                <p id="capacity" className='btn btn-circle' onClick={() => setTooltipContent('capaciy')}>
                                    <MdReduceCapacity />
                                </p>
                                <Tooltip anchorSelect="#capacity" open={tooltipContent === 'capacity'} content={`${details.capacity} person`}>
                                </Tooltip>
                            </div>
                        </div>
                        <div className='space-y-4' >
                            <p>Price:${pricePerNight}</p>
                            <p>Discount Price:${discountPrice}</p>
                        </div>
                        <div className="flex  mt-6 " >
                            <div className='space-y-4' >
                                <form className='space-y-2' onSubmit={handleDate} >
                                    <input className='input input-bordered w-full max-w-xs' type="date" name="date" id="" />
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className={`btn w-full ${availability == 'Booked' ?'hidden' : ''}`} onClick={() => document.getElementById('my_modal_1').showModal()}>Book</button>
                                </form>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{roomTitle}</h3>
                                        <p className="py-4">{description}</p>
                                        <p>Price:${pricePerNight}</p>
                                        <p>Discount Price:${discountPrice}</p>
                                        <p>Date:{date}</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn ">Close</button>
                                                <button onClick={handleBooked} className='btn' >Confirm</button>
                                            </form>
                                            
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureDetails;