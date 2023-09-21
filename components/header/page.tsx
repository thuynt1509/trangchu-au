"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import {
  accountGetBalance,
  getAccountInfo,
  getAccountLogin,
  getFullAccountInfo,
} from "@/services/client-side/account-info/account-info.api";

import JSCookie from "js-cookie";
import { useMyReducer } from "@/store/Provider";
import { logError, logInfo } from "@/utils/log-helper";
import moment from "moment";
import { AccountFullInfoType } from "@/types/componentTypes";
import { StoreContext } from "@/store";
import SpinLoading from "../common/Loading/spin-loading";
import appSlice from "@/app/appSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/configure-store";
import { Collapse, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
type TokenProps = {
  tokenName: string;
  tokenValue: string;
};
type HeaderProps = {
  token: TokenProps;
};
const Header = ({ token }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  let menuRef = useRef<any>();

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const { updateModalState, loadingLoginAPI, setLogin, setLogout } =
    appSlice.actions;
  const { refresh, loadingLogin } = useAppSelector(
    (state: RootState) => state.app
  );
  const [hrefJS, setHrefJS] = useState(0);
  const [accountname, setAccountName] = useState<any>("");
  const [currentToken, setCurrentToken] = useState<any>("");
  const [crrBalance, setBalance] = useState<number>(0);
  logInfo("Header", {
    tokenName: token.tokenName,
    tokenValue: token.tokenValue,
  });
  const loginAction = () => {
    localStorage.clear();
    setHrefJS(1);
    // @ts-ignore
    return calPopLogin();
  };
  const logoutAction = () => {
    setAccountName("");
    setLogout();
    localStorage.clear();
    // @ts-ignore
    return Logout();
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      localStorage.setItem(token.tokenName, token.tokenValue);
      setCurrentToken(token.tokenValue);

      JSCookie.set("vtc-jwt", token.tokenValue, {
        expires: moment().add(23, "hour").toDate(),
      });
    }
  }, []);
  useEffect(() => {
    getAccountInfo()
      .then((res) => {
        if (res.data.code > 0) {
          setAccountName(res.data.data);
          logInfo("getAccountInfo", "", `AccountName: ${res.data.data}`);
          setLogin();
          loadingLoginAPI(false);
        }
      })
      .finally(() => {
        loadingLoginAPI(false);
      });
  }, [currentToken]);
  useEffect(() => {
    accountGetBalance().then((res) => {
      if (res && res.data.code > 0) {
        setBalance(res.data.data);
      }
    });
  }, [refresh]);

  useEffect(() => {
    setTimeout(() => {
      const targets = document.querySelectorAll(`[href="javascript:;"]`);
      for (let i = 0; i < targets.length; i++) {
        targets[i].removeAttribute("href");
      }
      setHrefJS(0);
    }, 300);
  }, [hrefJS]);

  return (
    <header className="relative z-10">
      {/* Tạo header tại đây */}
      <div className="bg-[#fff]  border-b-[1px] border-[#EAEAEA]">
        <div className="mx-auto px-[16px] h-[54px] flex items-center justify-between max-w-[1200px] lg:h-[71px] relative ">
          <h1>
            <a
              href="#"
              className="block w-[42px] lg:w-[70px] lg:absolute lg:left-[50%] lg:ml-[-35px] lg:hidden"
            >
              <img
                alt="Game Audition"
                width={71}
                height={70}
                src="/assets/images/logo.png"
              />
            </a>
          </h1>
          {/* Nếu đã đăng nhập addClass logged */}
          <div className="lg:hidden">
            <a
              href="#"
              className="btn-login flex items-center text-[#8B8B8B] text-[12px] before:content-[''] before:block before:mr-[10px] before:bg-[url(/assets/images/fi-rr-user.png)] before:w-[24px] before:h-[24px]"
            >
              Đăng nhập
            </a>
            <div className="user-login hidden">
              <span>Moctieungu</span>
              <a href="#">Thoát</a>
            </div>
          </div>
          <div className="menu-container relative lg:hidden" ref={menuRef}>
            <div
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span className={`icon-menu ${open ? "open" : "close"}`}></span>
            </div>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <div className="max-h-[100%] overflow-y-auto">
                <Space direction="vertical" className="w-full">
                  <Collapse
                    className=""
                    collapsible="header"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <img
                          src="assets/images/icon-arr.png"
                          className="antd-tranform-antd "
                        ></img>
                      ) : (
                        <img src="assets/images/icon-arr.png"></img>
                      )
                    }
                    items={[
                      {
                        key: "1",
                        label: "TIN TỨC",
                        children: (
                          <div className="lst-submenu">
                            <a href="#">Tin sự kiện game</a>
                            <a href="#">Tin sự kiện web</a>
                            <a href="#">Tin cộng đồng</a>
                            <a href="#">Tin update</a>
                            <a href="#">Tin vip</a>
                          </div>
                        ),
                      },
                    ]}
                  />
                  <Collapse
                    collapsible="header"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <img
                          src="assets/images/icon-arr.png"
                          className="antd-tranform-antd "
                        ></img>
                      ) : (
                        <img src="assets/images/icon-arr.png"></img>
                      )
                    }
                    items={[
                      {
                        key: "2",
                        label: "SỰ KIỆN",
                        children: (
                          <div className="lst-submenu">
                            <a href="#">Au Mall</a>
                            <a href="#">Au Gift</a>
                            <a href="#">Nhập Giftcode</a>
                          </div>
                        ),
                      },
                    ]}
                  />
                  <Collapse
                    collapsible="header"
                    items={[
                      {
                        key: "3",
                        label: "VIP AU",
                        children: null,
                        showArrow: false,
                        onClick: () => {},
                      },
                    ]}
                  />
                  <Collapse
                    collapsible="header"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <img
                          src="assets/images/icon-arr.png"
                          className="antd-tranform-antd "
                        ></img>
                      ) : (
                        <img src="assets/images/icon-arr.png"></img>
                      )
                    }
                    items={[
                      {
                        key: "4",
                        label: "CỘNG ĐỒNG",
                        children: (
                          <div className="lst-submenu">
                            <a href="#">Fanpage</a>
                            <a href="#">Thành phố vũ hội</a>
                            <a href="#">Đại chiến</a>
                            <a href="#">Chủ Fam</a>
                            <a href="#">Fan Club</a>
                          </div>
                        ),
                      },
                    ]}
                  />
                  <Collapse
                    collapsible="header"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <img
                          src="assets/images/icon-arr.png"
                          className="antd-tranform-antd "
                        ></img>
                      ) : (
                        <img src="assets/images/icon-arr.png"></img>
                      )
                    }
                    items={[
                      {
                        key: "5",
                        label: "HƯỚNG DẪN",
                        children: (
                          <div className="lst-submenu">
                            <a href="#">Tân thủ</a>
                            <a href="#">Nạp Vcoin</a>
                            <a href="#">Tải và cài game</a>
                            <a href="#">Tham gia sự kiện</a>
                            <a href="#">Au Wiki</a>
                            <a href="#">FAQ</a>
                          </div>
                        ),
                      },
                    ]}
                  />
                  <Collapse
                    collapsible="header"
                    expandIconPosition="end"
                    expandIcon={({ isActive }) =>
                      isActive ? (
                        <img
                          src="assets/images/icon-arr.png"
                          className="antd-tranform-antd "
                        ></img>
                      ) : (
                        <img src="assets/images/icon-arr.png"></img>
                      )
                    }
                    items={[
                      {
                        key: "6",
                        label: "HỖ TRỢ",
                        children: (
                          <div className="lst-submenu">
                            <a href="#">Hỗ trợ trực tiếp</a>
                            <a href="#">Website hỗ trợ</a>
                          </div>
                        ),
                      },
                    ]}
                  />
                </Space>
              </div>
            </div>
          </div>
        </div>
        {/* menu pc */}
        <div className="hidden lg:block absolute top-0 w-full h-[71px] bg-[#ffffffd9] list-menu">
          <div className="mx-auto max-w-[1200px] grid grid-cols-7 text-[#4A4A4A] wrapper-lst-menu">
            <div className="">
              <span className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]">
                TIN TỨC
              </span>
              <div className="flex flex-col items-center text-[13px] py-[20px] sub-menu">
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tin sự kiện game
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tin sự kiện web
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tin cộng đồng
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tin sự kiện game
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tin sự kiện game
                </a>
              </div>
            </div>
            <div className="">
              <span className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]">
                SỰ KIỆN AU
              </span>
              <div className="flex flex-col items-center text-[13px] py-[20px] sub-menu">
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Au Mall
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Au Gift
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Nhập Giftcode
                </a>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]"
            >
              VIP AU
            </a>
            <a href="#" className="block pt-[15px] clip-logo">
              <img
                alt="Game Audition"
                width={71}
                height={70}
                className="mx-auto relative"
                src="/assets/images/logo.png"
              />
            </a>
            <div className="">
              <span className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]">
                CỘNG ĐỒNG
              </span>
              <div className="flex flex-col items-center  text-[13px] py-[20px] sub-menu">
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Fanpage
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Thành phố vũ hội
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Đại chiến
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Chủ Fam
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Fan Club
                </a>
              </div>
            </div>
            <div className="">
              <span className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]">
                HƯỚNG DẪN
              </span>
              <div className="flex flex-col items-center  text-[13px] py-[20px] sub-menu">
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tân thủ
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Nạp Vcoin
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tải và cài game
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Tham gia sự kiện
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Au Wiki
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  FAQ
                </a>
              </div>
            </div>
            <div className="">
              <span className="flex items-center justify-center h-[71px] hover:text-[#FBC12B] text-[18px]">
                HỖ TRỢ
              </span>
              <div className="flex flex-col items-center  text-[13px] py-[20px] sub-menu">
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Hỗ trợ trực tiếp
                </a>
                <a href="#" className="py-[8px] hover:text-[#FBC12B]">
                  Website hỗ trợ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      {/* {loadingLogin && <SpinLoading color="#59e6ff" width={25} height={25} />} */}
      {!loadingLogin && (accountname ? <>Đã đăng nhập</> : <></>)}
      <div
        id="header"
        style={{ zIndex: 999, height: "31px", display: "none" }}
      ></div>
      <div id="LogAndReg"></div>
    </header>
  );
};
export default Header;
