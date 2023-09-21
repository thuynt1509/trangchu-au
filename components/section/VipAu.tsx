"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VipAu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <>
      <div className="mx-auto lg:max-w-[1200px] pt-[10px] pb-[30px] relative overflow-x-visible">
        <h2
          className="block mb-[20px] bg-[url(/assets/images/text-vipau.png)] bg-contain w-[294px] h-[75px] mx-auto lg:bg-transparent text-[0px]  lg:w-[654px] lg:h-[147px]"
          data-aos="fade-down"
        >
          Vip Au
        </h2>
        <div
          className="px-[15px] lg:pb-[50px] lg:px-0 overflow-x-visible"
          data-aos="zoom-in"
        >
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
            loop={true}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="auSwiper"
          >
            <SwiperSlide>
              <img src="/assets/images/img-vipau.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/img-vipau.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/img-vipau.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/img-vipau.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/images/img-vipau.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default VipAu;
