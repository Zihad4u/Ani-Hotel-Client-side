// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='w-full h-[200px] md:h-[300px] lg:h-[400px]' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img
                    className="object-cover w-full h-full"
                    src="https://i.ibb.co/njPM9Mz/rakabtw-M3-Yu-HIpgm-SY-unsplash.jpg"
                    alt=""
                /></SwiperSlide>
                <SwiperSlide><img className='object-cover w-full h-full' src="https://i.ibb.co/C6xCbcD/sara-dubler-Koei-7y-Yt-Io-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/bLPnbSk/donald-teel-CFy-JZMDy-JJY-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover w-full h-full' src="https://i.ibb.co/GCNdSq0/mp-f-V2d-M2-Wv-Kv-E-unsplash.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='object-cover w-full h-full' src="https://i.ibb.co/XDzWh1x/adriana-saraceanu-ix-Nd-O62-FSg-unsplash.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;