const NewsList = () => {
  return (
    <div className="bg-[#fff] lg:bg-[#F4F4F4]">
      <div className="mx-auto max-w-[1200px] relative lg:py-[50px]">
        <h2
          className="hidden lg:inline-block relative 
        before:absolute before:block before:content-[''] before:bg-contain bg-no-repeat before:bg-[url(/assets/images/shadow-news.png)] before:w-[220px] before:h-[58px]
        before:top-[-5px] before:left-[-10px]
        "
        >
          <span className="flex items-center justify-center relative text-[20px] bg-[#FBC12B] text-[#fff] w-[200px] h-[46px] font-iCeil shadow-[#0000006c] shadow-sm ">
            Tin Mới Nhất
          </span>
        </h2>
        {/* list tin mới */}
        {/* tin đầu tiên */}
        <div className="pb-[24px] lg:py-[50px] lg:flex lg:border-solid lg:border-b-[1px] lg:border-[#D9D9D9] group">
          <span className="block w-[100%] h-auto lg:w-[450px] lg:h-[236px] overflow-hidden">
            <img
              className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
              width={770}
              height={380}
              src="assets/images/thumb-news.jpg"
              alt="Audition - Tin Mới"
            />
          </span>
          <div className=" text-[16px] px-[10px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
            <h4 className="text-[#202020] font-bold text-[22px]  uppercase line-clamp-2 leading-[1.2] my-[15px] lg:mt-0 lg:text-[24px] lg:leading-[1.5] group-hover:text-[#FBC12B]">
              Danh sách chia bảng Giải đấu đơn mừng sinh nhật AU BIRTHDAY 17TH -
              11 tỉnh thành
            </h4>
            <span className="block text-[14px] text-[#8F8F8F] mb-[15px] lg:text-[18px]">
              12/08/2023 | 21:26:15
            </span>
            <p className="text-[#505050] line-clamp-3 lg:line-clamp-4">
              Phục Kích là tựa game bắn súng thế hệ mới trên mobile của VTC Game
              ra mắt từ đầu năm 2017. Tuy nhiên, cho tới năm 2023, người ta vẫn
              bàn luận về Phục Kích như một game thuần FPS được ưa chuộng bậc
              nhất hiện nay, luôn quy tụ đông đảo xạ thủ tham gia. Bằng chứng là
              việc BQT game liên tục làm mới.
            </p>
          </div>
        </div>
        {/* tin đầu tiên */}

        {/* 3 tin sau */}
        <div className="px-[10px]">
          <div className="flex py-[24px] lg:py-[50px] border-b-[1px] border-solid border-[#D9D9D9] group">
            <span className="w-[166px] h-[90px] overflow-hidden lg:w-[450px] lg:h-[236px]">
              <img
                className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                width={770}
                height={380}
                src="assets/images/thumb-news.jpg"
                alt="Audition - Tin Mới"
              />
            </span>
            <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
              <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B] lg:mb-[15px] lg:text-[24px] lg:leading-[1.5]">
                Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
              </h4>
              <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:mt-0 lg:mb-[15px] lg:text-[18px]">
                12/08/2023 | 21:26:15
              </span>
              <p className="text-[#505050] line-clamp-2 lg:line-clamp-4">
                Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
              </p>
            </div>
          </div>
          <div className="flex py-[24px] lg:py-[50px] border-b-[1px] border-solid border-[#D9D9D9] group">
            <span className="w-[166px] h-[90px] overflow-hidden lg:w-[450px] lg:h-[236px]">
              <img
                className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                width={770}
                height={380}
                src="assets/images/thumb-news.jpg"
                alt="Audition - Tin Mới"
              />
            </span>
            <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
              <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B] lg:mb-[15px] lg:text-[24px] lg:leading-[1.5]">
                Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
              </h4>
              <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:mt-0 lg:mb-[15px] lg:text-[18px]">
                12/08/2023 | 21:26:15
              </span>
              <p className="text-[#505050] line-clamp-2 lg:line-clamp-4">
                Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
              </p>
            </div>
          </div>
          <div className="flex py-[24px] lg:py-[50px] border-b-[1px] border-solid border-[#D9D9D9] group">
            <span className="w-[166px] h-[90px] overflow-hidden lg:w-[450px] lg:h-[236px]">
              <img
                className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                width={770}
                height={380}
                src="assets/images/thumb-news.jpg"
                alt="Audition - Tin Mới"
              />
            </span>
            <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
              <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B] lg:mb-[15px] lg:text-[24px] lg:leading-[1.5]">
                Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
              </h4>
              <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:mt-0 lg:mb-[15px] lg:text-[18px]">
                12/08/2023 | 21:26:15
              </span>
              <p className="text-[#505050] line-clamp-2 lg:line-clamp-4">
                Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
              </p>
            </div>
          </div>
          <div className="flex py-[24px] lg:py-[50px] border-b-[1px] border-solid border-[#D9D9D9] group">
            <span className="w-[166px] h-[90px] overflow-hidden lg:w-[450px] lg:h-[236px]">
              <img
                className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                width={770}
                height={380}
                src="assets/images/thumb-news.jpg"
                alt="Audition - Tin Mới"
              />
            </span>
            <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
              <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B] lg:mb-[15px] lg:text-[24px] lg:leading-[1.5]">
                Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
              </h4>
              <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:mt-0 lg:mb-[15px] lg:text-[18px]">
                12/08/2023 | 21:26:15
              </span>
              <p className="text-[#505050] line-clamp-2 lg:line-clamp-4">
                Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
              </p>
            </div>
          </div>
          <div className="flex py-[24px] lg:py-[50px] border-b-[1px] border-solid border-[#D9D9D9] group">
            <span className="w-[166px] h-[90px] overflow-hidden lg:w-[450px] lg:h-[236px]">
              <img
                className="w-[100%] h-[100%] object-cover transition ease-in-out group-hover:transform group-hover:scale-[1.1] group-hover:rotate-1"
                width={770}
                height={380}
                src="assets/images/thumb-news.jpg"
                alt="Audition - Tin Mới"
              />
            </span>
            <div className="flex-1 ml-[10px] text-[14px] leading-[16px] lg:flex-1 lg:px-0 lg:pl-[30px] lg:leading-[1.3] lg:text-[18px]">
              <h4 className="text-[#202020] font-bold  uppercase line-clamp-2 leading-[1.3] group-hover:text-[#FBC12B] lg:mb-[15px] lg:text-[24px] lg:leading-[1.5]">
                Bất ngờ cực lớn với 8 item sẽ lên kệ AUDITION FASHION
              </h4>
              <span className="block text-[12px] text-[#8F8F8F] my-[4px] lg:mt-0 lg:mb-[15px] lg:text-[18px]">
                12/08/2023 | 21:26:15
              </span>
              <p className="text-[#505050] line-clamp-2 lg:line-clamp-4">
                Chỉ còn vài giờ nữa thôi là giải đấu đơn mừng sinh nhật AU
                BIRTHDAY 17TH sẽ chính thức khởi tranh trên toàn bộ 11 tỉnh
                thành toàn quốc. Các "phím thủ" Audition sẽ bắt đầu
              </p>
            </div>
          </div>
        </div>
        {/* list tin mới */}

        {/* Phân trang */}
        <div className="hidden lg:flex justify-center py-[50px] lst-paging">
          <a
            href="#"
            className="block w-[60px] h-[60px] mx-[8px] bg-[url(/assets/images/chevron-right-gray.png)]  bg-center bg-no-repeat tranform rotate-[180deg] border-solid border-[1.5px] border-[#D5D5D5] hover:bg-[#FBC12B] hover:border-[#FBC12B] hover:bg-[url(/assets/images/chevron-right.png)] hover:rotate-0"
          ></a>
          <a
            href="#"
            className="active flex items-center justify-center text-[#B6B6B6] font-bold w-[60px] h-[60px] mx-[8px] border-solid border-[1.5px] border-[#D5D5D5] hover:bg-[#FBC12B] hover:border-[#FBC12B] hover:text-[#fff]"
          >
            1
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-[#B6B6B6] font-bold w-[60px] h-[60px] mx-[8px] border-solid border-[1.5px] border-[#D5D5D5] hover:bg-[#FBC12B] hover:border-[#FBC12B] hover:text-[#fff]"
          >
            2
          </a>
          <a
            href="#"
            className="flex items-center justify-center text-[#B6B6B6] font-bold w-[60px] h-[60px] mx-[8px] border-solid border-[1.5px] border-[#D5D5D5] hover:bg-[#FBC12B] hover:border-[#FBC12B] hover:text-[#fff]"
          >
            3
          </a>

          <a
            href="#"
            className="block w-[60px] h-[60px] mx-[8px] bg-[url(/assets/images/chevron-right-gray.png)]  bg-center bg-no-repeat tranform  border-solid border-[1.5px] border-[#D5D5D5] hover:bg-[#FBC12B] hover:border-[#FBC12B] hover:bg-[url(/assets/images/chevron-right.png)] hover:rotate-[180deg]"
          ></a>
        </div>
        {/* Phân trang */}
      </div>
    </div>
  );
};

export default NewsList;
