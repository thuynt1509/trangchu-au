"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerWeb from "@/components/section/BannerWeb";

const TinMoi = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <div className="bg-[#fff]">
      <div className="mx-auto max-w-[1200px] px-[10px] relative">
        <h2
          className="hidden lg:block w-[192px] h-[511px] absolute left-[-250px] top-[50%] mt-[-255px] text-[0px]"
          style={{ backgroundImage: "url(/assets/images/text-tinmoi.png)" }}
        >
          Tin Mới
        </h2>
        {/* list tin mới */}
        <div className="">
          <div className="w-full flex justify-between  ">
            {/* tin đầu tiên */}
            <div
              className="flex  border-b-[1px] border-solid py-[24px] border-[#D9D9D9] lg:w-[66%] lg:flex-col group lg:border-none"
              data-aos="fade-up"
            >
              <span className="w-[166px] h-[90px] lg:w-[100%] lg:h-[380px] lg:mb-[18px] overflow-hidden">
                <img
                  className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                  width={770}
                  height={380}
                  src="assets/images/thumb-news.jpg"
                  alt="Audition - Tin Mới"
                />
              </span>
              <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:ml-0 lg:leading-[1.3] lg:text-[18px]">
                <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] lg:text-[24px] group-hover:text-[#FBC12B]">
                  Danh sách chia bảng Giải đấu đơn mừng sinh nhật AU BIRTHDAY
                  17TH - 11 tỉnh thành
                </h4>
                <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:text-[18px] lg:my-[6px]">
                  12/08/2023 | 21:26:15
                </span>
                <p className="text-[#505050] line-clamp-2">
                  Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                  BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                  thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                </p>
              </div>
            </div>
            {/* tin đầu tiên */}

            <BannerWeb />
          </div>

          {/* 3 tin sau */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-[2%]">
            <div
              className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:flex-col lg:border-none"
              data-aos="fade-up"
            >
              <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                <img
                  className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                  width={770}
                  height={380}
                  src="assets/images/thumb-news.jpg"
                  alt="Audition - Tin Mới"
                />
              </span>
              <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                  Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                </h4>
                <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:hidden">
                  12/08/2023 | 21:26:15
                </span>
                <p className="text-[#505050] line-clamp-2 lg:hidden">
                  Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                  BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                  thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                </p>
              </div>
            </div>
            <div
              className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:flex-col lg:border-none"
              data-aos="fade-up"
            >
              <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                <img
                  className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                  width={770}
                  height={380}
                  src="assets/images/thumb-news.jpg"
                  alt="Audition - Tin Mới"
                />
              </span>
              <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                  Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                </h4>
                <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:hidden">
                  12/08/2023 | 21:26:15
                </span>
                <p className="text-[#505050] line-clamp-2 lg:hidden">
                  Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                  BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                  thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                </p>
              </div>
            </div>
            <div
              className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:flex-col lg:border-none"
              data-aos="fade-up"
            >
              <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                <img
                  className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                  width={770}
                  height={380}
                  src="assets/images/thumb-news.jpg"
                  alt="Audition - Tin Mới"
                />
              </span>
              <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                  Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                </h4>
                <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:hidden">
                  12/08/2023 | 21:26:15
                </span>
                <p className="text-[#505050] line-clamp-2 lg:hidden">
                  Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                  BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                  thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* list tin mới */}
        <a
          href="#"
          className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
        >
          XEM THÊM
        </a>
      </div>
    </div>
  );
};
export default TinMoi;
