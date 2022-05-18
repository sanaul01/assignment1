import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import page1 from '../../images/Page1.jpg';
import page2 from '../../images/Page2.jpg';
import page3 from '../../images/Page3.jpg';

const Slider = () => {
    return (
        <div className="s-wrapper">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
            >
                <SwiperSlide>
                    <img src={page1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={page2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={page3} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;