"use client";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import MessageTemplate from "@/components/common/Template/MessageTemplate";
const Modal = () => {
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    <div>
      <MessageTemplate message="" />
    </div>
  );
};

export default Modal;
