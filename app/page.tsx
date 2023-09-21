"use client";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import appSlice from "./appSlice";
import Template from "@/components/common/Template/Template";
import LayoutFacebook from "@/components/common/Facebook/LayoutFacebook";
import LoadingBar from "react-top-loading-bar";
import Section1 from "@/components/section/section1";
import TinMoi from "@/components/section/TinMoi";
import TinTucGroup from "@/components/section/TinTucGroup";
import ClipHot from "@/components/section/ClipHot";
import VipAu from "@/components/section/VipAu";
import Section2 from "@/components/section/section2";

export default function Home() {
  const modal = useAppSelector((state: RootState) => state.app.modal);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const { finishLoad } = appSlice.actions;
  return (
    <main>
      {modal ? modal : <></>}
      <Section1 />
      <TinMoi />
      <div className="bg-[#FBC12B]">
        <TinTucGroup />
        <ClipHot />
      </div>
      <VipAu />
      <Section2 />
    </main>
  );
}
