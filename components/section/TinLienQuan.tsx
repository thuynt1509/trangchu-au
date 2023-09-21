"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const TinLienQuan = () => {
  return (
    <>
      <div className="">
        <div
          className="inline-block relative 
          before:absolute before:block before:content-[''] before:bg-contain bg-no-repeat before:bg-[url(/assets/images/shadow-news.png)] before:w-[220px] before:h-[58px]
          before:top-[-5px] before:left-[-10px] lg:mb-[30px]
          "
        >
          <span className="flex items-center justify-center relative text-[20px] bg-[#FBC12B] text-[#fff] w-[200px] h-[46px] font-iCeil shadow-[#0000006c] shadow-sm ">
            Tin Liên Quan
          </span>
        </div>

        <Swiper
          className="news-slide"
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          autoplay={false}
          modules={[Navigation, Autoplay]}
          loop={false}
        >
          <SwiperSlide className="">
            <div className="lg:lg:grid lg:grid-cols-3 lg:gap-[2%]">
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
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
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="lg:lg:grid lg:grid-cols-3 lg:gap-[2%]">
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
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
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="lg:lg:grid lg:grid-cols-3 lg:gap-[2%]">
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
                    12/08/2023 | 21:26:15
                  </span>
                  <p className="text-[#505050] line-clamp-2 lg:hidden">
                    Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                    BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                    thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
                  </p>
                </div>
              </div>
              <div className="flex py-[24px] border-b-[1px] border-solid border-[#D9D9D9] group lg:bg-[#fff] lg:flex-col lg:border-none lg:pt-0">
                <span className="w-[166px] h-[90px] overflow-hidden lg:w-[100%] lg:h-[194px] lg:mb-[18px]">
                  <img
                    className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                    width={770}
                    height={380}
                    src="assets/images/thumb-news.jpg"
                    alt="Audition - Tin Mới"
                  />
                </span>
                <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:leading-[1.3] lg:ml-0 lg:px-[16px] lg:text-[18px]">
                  <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B]">
                    Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
                  </h4>
                  <span className="block text-[12px] text-[#8F8F8F] my-[4px]">
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
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default TinLienQuan;
