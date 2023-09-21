"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerWeb = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <div
      className="relative hidden w-[32%] py-[24px] lg:block"
      data-aos="fade-left"
    >
      <Swiper
        className="slide1 banner-web"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
      >
        <SwiperSlide>
          <img
            className="w-100"
            width={378}
            height={546}
            src="assets/images/img-slide.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            width={378}
            height={546}
            src="assets/images/img-slide.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            width={378}
            height={546}
            src="assets/images/img-slide.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default BannerWeb;
