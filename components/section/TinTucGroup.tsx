"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const TinTucGroup = () => {
  const [openTab, setOpenTab] = React.useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Độ dài của hiệu ứng (milliseconds)
      offset: 100, // Offset (px) từ cạnh trên của màn hình
    });
  }, []);
  return (
    <>
      {/* Tin Tức Group mobile */}
      <div className="w-full lg:hidden">
        <ul
          className="mb-0 list-none bg-[#E5A604] overflow-auto whitespace-nowrap"
          role="tablist"
        >
          <li className="-mb-px  inline-block py-3 last:mr-0 flex-auto text-center ">
            <a
              className={
                "text-[14px] font-iCeil uppercase px-3 leading-none  block border-r-2 border-[#fff] border-solid " +
                (openTab === 1 ? "text-[#FFF500]" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Sự Kiện InGame
            </a>
          </li>
          <li className="-mb-px mr-2 inline-block py-3 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-[14px] font-iCeil uppercase px-3 leading-none  block border-r-2 border-[#fff] border-solid " +
                (openTab === 2 ? "text-[#FFF500]" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Sự Kiện Web
            </a>
          </li>
          <li className="-mb-px mr-2 inline-block py-3 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-[14px] font-iCeil uppercase px-3 leading-none  block border-r-2 border-[#fff] border-solid " +
                (openTab === 3 ? "text-[#FFF500]" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Tin Cộng Đồng
            </a>
          </li>
          <li className="-mb-px mr-2 inline-block py-3 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-[14px] font-iCeil uppercase px-3 leading-none  block border-r-2 border-[#fff] border-solid " +
                (openTab === 4 ? "text-[#FFF500]" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link4"
              role="tablist"
            >
              Tin Cộng Đồng 1
            </a>
          </li>
          <li className="-mb-px mr-2 inline-block py-3 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-[14px] font-iCeil uppercase px-3 leading-none  block " +
                (openTab === 5 ? "text-[#FFF500]" : "text-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(5);
              }}
              data-toggle="tab"
              href="#link5"
              role="tablist"
            >
              Tin Cộng Đồng 2
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col w-full">
          <div className="px-[10px] flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                {/* tin đầu */}
                <div className="py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
                  <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                    <img
                      className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                      width={770}
                      height={380}
                      src="assets/images/thumb-news.jpg"
                      alt="Audition - Tin Mới"
                    />
                  </span>
                  <div className="flex-1 ml-0 text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                    <h4 className="text-[#fff] font-bold  text-[22px] line-clamp-3 leading-[1.1] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* tin đầu */}
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>

                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* end tin tức */}
                <a
                  href="#"
                  className="flex items-center justify-center text-[#fff] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore-fff.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                >
                  XEM THÊM
                </a>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                {/* tin đầu */}
                <div className="py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
                  <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                    <Image
                      className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                      width={770}
                      height={380}
                      src="/assets/images/thumb-news.jpg"
                      alt="Audition - Tin Mới 1"
                    />
                  </span>
                  <div className="flex-1 ml-0 text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                    <h4 className="text-[#fff] font-bold  text-[22px] line-clamp-3 leading-[1.1] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station2
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* tin đầu */}
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>

                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* end tin tức */}
                <a
                  href="#"
                  className="flex items-center justify-center text-[#fff] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore-fff.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                >
                  XEM THÊM
                </a>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                {/* tin đầu */}
                <div className="py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
                  <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                    <img
                      className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                      width={770}
                      height={380}
                      src="assets/images/thumb-news.jpg"
                      alt="Audition - Tin Mới"
                    />
                  </span>
                  <div className="flex-1 ml-0 text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                    <h4 className="text-[#fff] font-bold  text-[22px] line-clamp-3 leading-[1.1] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station3
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* tin đầu */}
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>

                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* end tin tức */}
                <a
                  href="#"
                  className="flex items-center justify-center text-[#fff] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore-fff.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                >
                  XEM THÊM
                </a>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                {/* tin đầu */}
                <div className="py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
                  <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                    <img
                      className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                      width={770}
                      height={380}
                      src="assets/images/thumb-news.jpg"
                      alt="Audition - Tin Mới"
                    />
                  </span>
                  <div className="flex-1 ml-0 text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                    <h4 className="text-[#fff] font-bold  text-[22px] line-clamp-3 leading-[1.1] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station4
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* tin đầu */}
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>

                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* end tin tức */}
                <a
                  href="#"
                  className="flex items-center justify-center text-[#fff] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore-fff.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                >
                  XEM THÊM
                </a>
              </div>
              <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                {/* tin đầu */}
                <div className="py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
                  <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                    <img
                      className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                      width={770}
                      height={380}
                      src="assets/images/thumb-news.jpg"
                      alt="Audition - Tin Mới"
                    />
                  </span>
                  <div className="flex-1 ml-0 text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:text-[18px]">
                    <h4 className="text-[#fff] font-bold  text-[22px] line-clamp-3 leading-[1.1] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station5
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* tin đầu */}
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>

                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                <div className="flex py-[24px] border-b-[1px] border-solid border-[#fff] group lg:flex-col lg:border-none">
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
                    <h4 className="text-[#fff] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </h4>
                    <span className="block text-[12px] text-[#fff] my-[4px] lg:hidden">
                      12/08/2023 | 21:26:15
                    </span>
                    <p className="text-[#fff] line-clamp-2 lg:hidden">
                      Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                      BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11
                      tỉnh thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                    </p>
                  </div>
                </div>
                {/* end tin tức */}
                <a
                  href="#"
                  className="flex items-center justify-center text-[#fff] text-[18px] hover:tracking-wider font-iCeil my-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore-fff.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                >
                  XEM THÊM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tin Tức Group mobile */}

      {/* Tin tức Group PC */}
      <div className="max-w-[1920px] mx-auto hidden lg:block">
        <div className=" mx-auto max-w-[1200px] py-[30px] relative">
          <h2
            className="hidden lg:block w-[158px] h-[493px] absolute right-[-250px] top-[50%] mt-[-246px] z-10 text-[0px]"
            style={{
              backgroundImage: "url(/assets/images/text-tinchuyenmuc.png)",
            }}
          >
            Tin Chuyên Mục
          </h2>
          <div data-aos="fade-down">
            <Swiper
              className="slideNewsGroup"
              spaceBetween={30}
              slidesPerView={3}
              navigation={true}
              autoplay={false}
              modules={[Navigation, Autoplay]}
              loop={false}
            >
              <SwiperSlide>
                <h3 className="text-[#fff] text-[24px] font-iCeil mb-[24px] border-l-4 border-[#fff] pl-[10px] leading-tight">
                  Sự kiện Ingame
                </h3>
                <div className="bg-[#fff]">
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] group">
                    <span className="block w-full h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                      <Image
                        className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                        width={770}
                        height={380}
                        src="/assets/images/thumb-news.jpg"
                        alt="Audition - Tin Mới 1"
                      />
                    </span>
                    <h4 className="text-[#4E4E4E] font-bold px-[15px] mb-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ
                      cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn
                      với 8 item sẽ lên kệ AUu station
                    </h4>
                  </div>
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  <div className="py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  {/* end tin tức */}
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil py-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3 className="text-[#fff] text-[24px] font-iCeil mb-[24px] border-l-4 border-[#fff] pl-[10px] leading-tight">
                  Sự kiện Web
                </h3>
                <div className="bg-[#fff]">
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] group">
                    <span className="block w-full h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                      <img
                        className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                        width={770}
                        height={380}
                        src="assets/images/thumb-news.jpg"
                        alt="Audition - Tin Mới"
                      />
                    </span>
                    <h4 className="text-[#4E4E4E] font-bold px-[15px] mb-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ
                      cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn
                      với 8 item sẽ lên kệ AUu station
                    </h4>
                  </div>
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  <div className="py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  {/* end tin tức */}
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil py-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3 className="text-[#fff] text-[24px] font-iCeil mb-[24px] border-l-4 border-[#fff] pl-[10px] leading-tight">
                  Tin Cộng Đồng
                </h3>
                <div className="bg-[#fff]">
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] group">
                    <span className="block w-full h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                      <img
                        className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                        width={770}
                        height={380}
                        src="assets/images/thumb-news.jpg"
                        alt="Audition - Tin Mới"
                      />
                    </span>
                    <h4 className="text-[#4E4E4E] font-bold px-[15px] mb-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ
                      cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn
                      với 8 item sẽ lên kệ AUu station
                    </h4>
                  </div>
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  <div className="py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  {/* end tin tức */}
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil py-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3 className="text-[#fff] text-[24px] font-iCeil mb-[24px] border-l-4 border-[#fff] pl-[10px] leading-none">
                  Sự kiện Ingame 1
                </h3>
                <div className="bg-[#fff]">
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] group">
                    <span className="block w-full h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                      <img
                        className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                        width={770}
                        height={380}
                        src="assets/images/thumb-news.jpg"
                        alt="Audition - Tin Mới"
                      />
                    </span>
                    <h4 className="text-[#4E4E4E] font-bold px-[15px] mb-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ
                      cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn
                      với 8 item sẽ lên kệ AUu station
                    </h4>
                  </div>
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  <div className="py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  {/* end tin tức */}
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil py-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h3 className="text-[#fff] text-[24px] font-iCeil mb-[24px] border-l-4 border-[#fff] pl-[10px] leading-tight">
                  Sự kiện Ingame 2
                </h3>
                <div className="bg-[#fff]">
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] group">
                    <span className="block w-full h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                      <img
                        className="w-[100%] h-[100%] mb-[24px] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                        width={770}
                        height={380}
                        src="assets/images/thumb-news.jpg"
                        alt="Audition - Tin Mới"
                      />
                    </span>
                    <h4 className="text-[#4E4E4E] font-bold px-[15px] mb-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]">
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ
                      cực lớn với 8 item sẽ lên kệ AUu station Bất ngờ cực lớn
                      với 8 item sẽ lên kệ AUu station
                    </h4>
                  </div>
                  {/* tin đầu */}
                  <div className="border-b-[1px] border-solid border-[#ECECEC] py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  <div className="py-[15px] group">
                    <a
                      href="#"
                      className="text-[#4E4E4E] font-bold px-[15px] uppercase line-clamp-2 leading-[1.3] group-hover:text-[#000]"
                    >
                      Bất ngờ cực lớn với 8 item sẽ lên kệ AUu station
                    </a>
                  </div>
                  {/* end tin tức */}
                  <a
                    href="#"
                    className="flex items-center justify-center text-[#FBC12B] text-[18px] hover:tracking-wider font-iCeil py-[30px] after:block after:content-[''] after:bg-[url(/assets/images/icon-readmore.png)] after:w-[14px] after:h-[12px] after:ml-[15px]"
                  >
                    XEM THÊM
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* Tin tức Group PC */}
    </>
  );
};

export default TinTucGroup;
