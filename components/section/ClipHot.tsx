"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClipHot = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <>
      <div className="mx-auto max-w-[1200px] pt-[10px] pb-[30px] relative">
        <h2 className="flex items-center justify-center mb-[36px] bg-[#E5A604] lg:bg-transparent h-[51px] font-iCeil text-[#fff] text-[14px] uppercase lg:bg-[url(/assets/images/text-cliphot.png)] lg:w-[140px] lg:h-[258px] lg:absolute lg:left-[-250px] lg:top-[50%] lg:mt-[-129px] z-10 lg:text-[0px]">
          Clip Hot
        </h2>
        <div data-aos="fade-up">
          <Swiper
            className="slideNewsGroup clipHot "
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            autoplay={false}
            modules={[Navigation, Autoplay]}
            loop={false}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="px-[20px] lg:px-0">
              <div className="lg:bg-[#fff]">
                <div className="block w-full overflow-hidden">
                  <video
                    autoPlay
                    controls
                    width="100%"
                    height="194"
                    className=""
                  >
                    <source
                      src="/assets/images/bunny.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
                <div className="hidden lg:block py-[24px]">
                  <h4 className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực
                    lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn với 8
                    item sẽ lên kệ AUu station
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-[20px] lg:px-0">
              <div className="lg:bg-[#fff]">
                <div className="block w-full overflow-hidden">
                  <video
                    autoPlay
                    controls
                    width="100%"
                    height="194"
                    className=""
                  >
                    <source
                      src="/assets/images/bunny.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
                <div className="hidden lg:block py-[24px]">
                  <h4 className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực
                    lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn với 8
                    item sẽ lên kệ AUu station
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-[20px] lg:px-0">
              <div className="lg:bg-[#fff]">
                <div className="block w-full overflow-hidden">
                  <video
                    autoPlay
                    controls
                    width="100%"
                    height="194"
                    className=""
                  >
                    <source
                      src="/assets/images/bunny.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
                <div className="hidden lg:block py-[24px]">
                  <h4 className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực
                    lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn với 8
                    item sẽ lên kệ AUu station
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-[20px] lg:px-0">
              <div className="lg:bg-[#fff]">
                <div className="block w-full overflow-hidden">
                  <video
                    autoPlay
                    controls
                    width="100%"
                    height="194"
                    className=""
                  >
                    <source
                      src="/assets/images/bunny.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                </div>
                <div className="hidden lg:block py-[24px]">
                  <h4 className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực
                    lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn với 8
                    item sẽ lên kệ AUu station
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default ClipHot;
