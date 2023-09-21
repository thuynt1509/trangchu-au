import { Mulish } from "next/font/google";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
interface P {
  message: string;
}

// 1 popup demo
const MessageTemplate = (props: P) => {
  const { message } = props;
  // khai báo các thành phần để điều khiển popup
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    // w-63-ctp h-97-ctp
    <div className="bg-black bg-opacity-50 fixed inset-0 z-20 w-full h-full flex items-center justify-center">
      <div
        className={`relative`}
        // bấm vào popup ko tự tắt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <a href="" className="absolute right-0 w-[36px] h-[36px] top-[-40px]">
          <img
            src={
              process.env.NEXT_PUBLIC_BASE_MEDIA +
              "/assets/images/icon-close-m.jpg"
            }
            style={{ cursor: "pointer" }}
            alt=""
            //action khi tắt popup
            onClick={() => {
              dispatch(updateModalState(null));
            }}
          />
        </a>
        <img
          src={
            process.env.NEXT_PUBLIC_BASE_MEDIA + "/assets/images/img-modal.jpg"
          }
          style={{ cursor: "pointer" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default MessageTemplate;
