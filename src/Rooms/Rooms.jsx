import React, { useContext, useEffect, useState } from 'react';
import { AutoContext } from '../Authprovider/AuthContext';
import RoomCard from './RoomCard';

const Rooms = () => {
    const { feature, loading } = useContext(AutoContext);
    const [data, setData] = useState([]);
    const [sortOrder, setSortOrder] = useState(''); // State to track the sort order

    useEffect(() => {
        if (!loading) {
            const available = feature.filter(data => data.availability === 'Available');
            setData(available);
        }
    }, [loading, feature]);

    useEffect(() => {
        if (sortOrder === 'lowToHigh') {
            setData(prevData => [...prevData].sort((a, b) => a.pricePerNight - b.pricePerNight));
        } else if (sortOrder === 'highToLow') {
            setData(prevData => [...prevData].sort((a, b) => b.pricePerNight - a.pricePerNight));
        }
    }, [sortOrder]);

    const handleSort = (order) => {
        setSortOrder(order);
    };

    return (
        <div>
            <div className='flex justify-center mt-4 font-semibold text-[22px]' >
                <p>Available Rooms</p>
            </div>
            <div className='flex justify-center py-4 bg-[#2b3440]' >
                <details className="dropdown">
                    <summary className="m-1 btn">Price</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li className='btn' onClick={() => handleSort('lowToHigh')}><a>Low to High</a></li>
                        <li className='btn' onClick={() => handleSort('highToLow')}><a>High to Low</a></li>
                    </ul>
                </details>
            </div>
            {loading ? (
                <span className="loading loading-spinner flex justify-center loading-lg"></span>
            ) : (
                <div className='mt-4 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
                    {data.map(available => (
                        <RoomCard
                            available={available}
                            key={available._id}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Rooms;
