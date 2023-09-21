import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import MessageTemplate from "./MessageTemplate";
import "./style.module.css";

const Template = () => {
  // copy phần khai báo này
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    <>
      <a
        className="custom-poiter text-[#ffeeb7] bg-[#610000] py-2 px-5 rounded"
        onClick={() => {
          // mở popup
          dispatch(
            updateModalState(<MessageTemplate message="Demo mở popup" />)
          );
        }}
      >
        Mở popup
      </a>
      <div></div>
    </>
  );
};
export default Template;
