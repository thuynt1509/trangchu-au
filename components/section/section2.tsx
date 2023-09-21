"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Section2 = () => {
  return (
    <div className="relative section2 mx-auto max-w-[1920px]">
      <video loop autoPlay muted>
        <source
          src="https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/video.mp4"
          type="video/mp4"
        ></source>
      </video>

      <a
        href="#"
        className="btn-play hidden lg:flex lg:bottom-[50%!important] lg:mb-[-60px]"
      >
        <span className="text">CHƠI NGAY</span>
      </a>
    </div>
  );
};
export default Section2;
