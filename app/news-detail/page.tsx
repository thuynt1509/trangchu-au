import TinLienQuan from "@/components/section/TinLienQuan";
const NewsList = () => {
  return (
    <div className="bg-[#fff] lg:bg-[#F4F4F4]">
      <div className="mx-auto max-w-[1200px] px-[10px]  relative lg:py-[50px]">
        <div
          className="hidden lg:inline-block relative 
        before:absolute before:block before:content-[''] before:bg-contain bg-no-repeat before:bg-[url(/assets/images/shadow-news.png)] before:w-[220px] before:h-[58px]
        before:top-[-5px] before:left-[-10px]
        "
        >
          <span className="flex items-center justify-center relative text-[20px] bg-[#FBC12B] text-[#fff] w-[200px] h-[46px] font-iCeil shadow-[#0000006c] shadow-sm ">
            Tin Cộng Đồng
          </span>
        </div>
        {/* Nội dung tin tức */}
        <article className="detail-news py-[16px] lg:py-[50px]">
          <h1 className="text-[#202020] text-[22px] font-bold">
            [Sự kiện KHTT] Cháy hết mình cùng THANH XUÂN RỰC RỠ và sinh nhật
            Audition 17 tuổi
          </h1>
          <span className="text-[#8F8F8F] text-[14px] my-[12px]">
            12/08/2023 | 21:26:12
          </span>
          <div className="text-[##505050] text-[18px]">
            <p>
              Chỉ có một lần và Sinh nhật Audition 17 tuổi cũng vậy. Để kỷ niệm
              sự kiện đặc biệt trong năm này, Audition đã chuẩn bị sẵn một cuộc
              đua dành riêng cho TOP VIP, Khách hàng thân thiết và Khách hàng
              tinh tú.
            </p>
            <img src="assets/images/img-news.jpg" />
            <p>
              Chỉ có một lần và Sinh nhật Audition 17 tuổi cũng vậy. Để kỷ niệm
              sự kiện đặc biệt trong năm này, Audition đã chuẩn bị sẵn một cuộc
              đua dành riêng cho TOP VIP, Khách hàng thân thiết và Khách hàng
              tinh tú.
            </p>
            <p>
              Chỉ có một lần và Sinh nhật Audition 17 tuổi cũng vậy. Để kỷ niệm
              sự kiện đặc biệt trong năm này, Audition đã chuẩn bị sẵn một cuộc
              đua dành riêng cho TOP VIP, Khách hàng thân thiết và Khách hàng
              tinh tú.
            </p>
          </div>
        </article>
        {/* Nội dung tin tức */}

        {/* Tin Liên quan */}

        <TinLienQuan />
        {/* Tin Liên quan */}
      </div>
    </div>
  );
};

export default NewsList;
