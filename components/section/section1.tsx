"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Section1 = () => {
  return (
    <div className="relative section2 mx-auto max-w-[1920px]">
      <Swiper
        className="slide1"
        spaceBetween={50}
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
            width={1920}
            height={750}
            src="assets/images/img-banner.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            width={1920}
            height={750}
            src="assets/images/img-banner.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100"
            width={1920}
            height={750}
            src="assets/images/img-banner.jpg"
            alt="Truy Kích PC - Landing PVE"
          />
        </SwiperSlide>
      </Swiper>
      <a href="#" className="btn-play hidden lg:flex">
        <span className="text">CHƠI NGAY</span>
      </a>
    </div>
  );
};
export default Section1;
