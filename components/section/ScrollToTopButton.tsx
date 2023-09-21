import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Xác định khi nào nút "Scroll to Top" nên hiển thị dựa trên vị trí cuộn
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Xử lý sự kiện khi nút được nhấn để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-button  fixed w-[40px] h-[40px] lg:w-[86px] lg:h-[86px] bottom-[20px] right-[20px] opacity-80 cursor-pointer z-50 hover:opacity-100
        "
          onClick={scrollToTop}
        >
          <img src="assets/images/buttonTop.png" />
        </button>
      )}
    </>
  );
}
