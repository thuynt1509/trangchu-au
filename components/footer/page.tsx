"use client";
import ScrollToTopButton from "@/components/section/ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="bg-[#00105A] pt-[43px] pb-[90px] px-5 text-[#fff]">
      <div className="container m-auto">
        <div className="hidden lg:flex items-center justify-center mb-[20px]">
          <a
            href="#"
            className="block w-[74px] h-[74px] mx-[13px]"
            style={{ backgroundImage: "url(/assets/images/icon-fb.jpg)" }}
          ></a>
          <a
            href="#"
            className="block w-[74px] h-[74px] mx-[13px]"
            style={{ backgroundImage: "url(/assets/images/icon-tiktok.jpg)" }}
          ></a>
          <a
            href="#"
            className="block w-[74px] h-[74px] mx-[13px]"
            style={{ backgroundImage: "url(/assets/images/icon-youtube.jpg)" }}
          ></a>
          <a
            href="#"
            className="block w-[74px] h-[74px] mx-[13px]"
            style={{ backgroundImage: "url(/assets/images/icon-game.jpg)" }}
          ></a>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[auto_auto_auto] xl:gap-[50px]">
          <div className="grid grid-cols-1 mb-5 ">
            <img
              src="/assets/images/logo-f-1.svg"
              alt="logo-footer"
              className="mb-7"
            />
            <h5 className="">TỔNG CÔNG TY TRUYỀN THÔNG ĐA PHƯƠNG TIỆN (VTC)</h5>
            <h5 className="">
              {" "}
              CÔNG TY VTC CÔNG NGHỆ VÀ NỘI DUNG SỐ (VTC INTECOM)
            </h5>
          </div>
          <div className="grid grid-cols-1 mb-5 xl:mt-7">
            <div className="grid grid-cols-1 mb-7">
              <span className="font-bold">
                CHỊU TRÁCH NHIỆM QUẢN LÍ NỘI DUNG:
              </span>
              <h5 className="">Ông Lâm Ngọc Tú</h5>
            </div>
            <div className="grid grid-cols-1">
              <span className="font-bold"> THÔNG TIN LIÊN HỆ</span>
              <div className="grid">
                <div className="flex items-center col-span-2 cursor-pointer">
                  <img
                    src="/assets/images/icon-f-1.svg"
                    alt="gmail-f"
                    className="mr-2"
                  />
                  <span className="">partners@vtc.vn</span>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img
                    src="/assets/images/icon-f-2.svg"
                    alt="facebook-f"
                    className="mr-2"
                  />
                  <span className="">fb.com/congvtcgame</span>
                </div>
                <div className="flex items-center cursor-pointer">
                  <img
                    src="/assets/images/icon-f-3.svg"
                    alt="web-f"
                    className="mr-2"
                  />
                  <span className="">hotro.vtc.vn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:mt-7">
            <span className="font-bold"> TRỤ SỞ HÀ NỘI</span>
            <h5 className="mb-7">
              Tầng 14, Tòa nhà VTC 23 Lạc Trung, Quận Hai Bà Trưng, Hà Nội
            </h5>

            <span className="font-bold">
              VĂN PHÒNG ĐẠI DIỆN TP. HỒ CHÍ MINH
            </span>
            <h5>59 Đồng Đen, Phường 10, Quận Tân Bình, TP. Hồ Chí Minh</h5>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
