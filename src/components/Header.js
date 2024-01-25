import logo from "../assets/images/Logo Coded-Estate.png";
import group from "../assets/images/Group 1000004850.png";
import frame from "../assets/images/Frame 1000001444.png";
import frame1 from "../assets/images/Frame 1000001445.png";
import light from "../assets/images/light.png";

import User from "../assets/images/Group 1000004807.png";
import Metamask from "../assets/images/Group 10000048071.png";
import copy from "../assets/images/copy-03.png";
import wallet1 from "../assets/images/Wallet.png";
import user from "../assets/images/User,Profile1.png";
import logout from "../assets/images/log-out-03.png";
import cross from "../assets/images/Group 1000004790.png";
import noti from "../assets/images/notification-bing.png";
import noti1 from "../assets/images/Group 10000048101.png";

import arrowdown from "../assets/images/ArrowDown.png";
import arrowtop from "../assets/images/ArrowTop1.png";

import keplrIcon from "../assets/images/landingpage/image 2228.png";
import leapIcon from "../assets/images/landingpage/leap.svg";

import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { disconnect } from "../Actions/AuthSlice";
import { setHeaderMode } from "../Actions/HeaderSlice";

import { Link } from "react-router-dom";

import { SelectionGroup, SelectionItem } from "./Selection";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [showNoti, setShowNoti] = useState(false);
  const [showDash, setShowDash] = useState(false);

  const handleShowNoti = () => setShowNoti(true);
  const handleCloseNoti = () => setShowNoti(false);

  const handleShowDash = () => setShowDash(true);
  const handleCloseDash = () => setShowDash(false);

  const [walletIcon, setWalletIcon] = useState(User);

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const account = useSelector((state) => state.auth.account);
  const wallet = useSelector((state) => state.auth.wallet);

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCurrentWalletIcon = () => {
    if (wallet == "keplr") setWalletIcon(keplrIcon);
    if (wallet == "leap") setWalletIcon(leapIcon);
  };

  const [showDashDropdown, setShowDashDropdown] = useState(false);
  const [showRentDropdown, setShowRentDropdown] = useState(false);

  useEffect(() => {
    // if (!isAuthenticated) navigate("/landing");
    setCurrentWalletIcon();
  }, []);
  const handleClose = (e) => {
    for (
      let i = 0;
      i < document.getElementsByClassName("z-[120]").length;
      i++
    ) {
      document
        .getElementsByClassName("z-[120]")
        [i].classList.replace("z-[120]", "z-[1200]");
    }

    setShow(false);
  };
  const handleShow = (e) => {
    for (
      let i = 0;
      i < document.getElementsByClassName("z-[1200]").length;
      i++
    ) {
      document
        .getElementsByClassName("z-[1200]")
        [i].classList.replace("z-[1200]", "z-[120]");
    }

    setShow(true);
  };

  return (
    <div className="relative w-full">
      <div className="flex w-full h-[60px] items-center justify-between p-[20px] bg-white rounded-t-lg fixed top-0 font-semibold z-[1200]">
        <img src={logo}></img>

        <div className="flex items-center">
          <img src={group}></img>
          <img src={frame} onClick={handleShowNoti}></img>
          <Modal
            show={showNoti}
            onHide={handleCloseNoti}
            dialogClassName="_modal-dialog ___modal-dialog"
            backdropClassName="_modal-backdrop"
          >
            <Modal.Body>
              <div className="w-[320px] h-[600px] p-[20px]">
                <div className="font-bold mb-[10px]">Notifications</div>
                {/* <div className="flex w-full h-full">
                <div className="m-auto text-center">
                  <img src={noti} className="m-auto"></img>
                  <div>No notifications yet</div>
                  <div>
                    You've got a blank slate (for now). We'll let you know when
                    updates arrive!
                  </div>
                </div>
              </div> */}
                <div>
                  <div className="flex items-start text-[16px]">
                    <img src={noti1} className="ml-[-10px]"></img>
                    <div className="text-black">
                      Please confirm your email address by clicking on the link
                      we just emailed you.
                    </div>
                    <div className="text-[#959595]">Now</div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Link to="/swap">
            <img src={frame1}></img>
          </Link>
          <div
            className="bg-[#5B1DEE] rounded-[16px] px-[12px] py-[10px] text-[14px] text-white cursor-pointer"
            onClick={handleShow}
          >
            {account?.substring(0, 5) +
              "..." +
              account?.substring(account?.length - 4)}
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="_modal-dialog __modal-dialog"
          >
            <Modal.Body>
              <div>
                <div className="flex justify-end">
                  <img src={cross} onClick={handleClose}></img>
                </div>
                <div className="space-y-[20px] px-[20px] pb-[20px] w-[350px]">
                  {/* <img src={User} className="mx-auto"></img> */}
                  <img src={walletIcon} className="mx-auto w-[100px]"></img>
                  <div className="globalInputForm flex w-full px-[12px] py-[9px] gap-[6px]">
                    {/* <input placeholder="Not Connected yet"></input> */}
                    <input
                      placeholder={
                        account?.substring(0, 5) +
                        "..." +
                        account?.substring(account?.length - 4)
                      }
                      className="w-full"
                      disabled
                    ></input>
                    <img src={copy}></img>
                  </div>

                  <div className="grid grid-cols-2 gap-[20px]">
                    <Link to="/wallet">
                      <div
                        className="border-[1px] border-[#FFFFFF] shadow-md rounded-[16px] flex items-center px-[20px] py-[12px] gap-[8px]"
                        onClick={handleClose}
                      >
                        <img src={wallet1}></img>
                        <div className="text-black">Wallet</div>
                      </div>
                    </Link>
                    <Link to="/account">
                      <div
                        className="border-[1px] border-[#FFFFFF] shadow-md rounded-[16px] flex items-center px-[20px] py-[12px] gap-[8px]"
                        onClick={handleClose}
                      >
                        <img src={user}></img>
                        <div className="text-black">Account</div>
                      </div>
                    </Link>
                  </div>
                  {/* <div className="bg-[#5B1DEE] gap-[10px] py-[12px] rounded-[40px] text-white w-full text-center font-semibold flex items-center justify-center">
                <img src={logout}></img>
                <div>Buy now</div>
              </div> */}
                  <div
                    className="bg-[#202020] gap-[10px] py-[12px] rounded-[40px] text-white w-full text-center font-semibold flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      dispatch(disconnect());
                    }}
                  >
                    <img src={logout}></img>
                    <div>Disconnect</div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="absolute flex justify-center w-full top-0 h-[60px] items-center">
        <div className="z-[1300]">
          <SelectionGroup
            className="px-[6px] py-[4px] rounded-[14px] shadow-md flex gap-[10px] text-[#959595]"
            defaultItem={mode}
          >
            <SelectionItem
              SelectedItem={
                <div className="w-[130px] flex justify-between py-[2px] px-[20px] items-center gap-[10px] shadow-md rounded-[10px]">
                  <div className="text-black">YieldEstate</div>
                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="w-[130px] flex justify-between py-[2px] px-[20px] items-center gap-[10px] hover:bg-[#efefef] rounded-[10px]"
                  onClick={() =>
                    dispatch(setHeaderMode({ mode: 0, submode: null }))
                  }
                >
                  <div>YieldEstate</div>
                </div>
              }
            />

            <SelectionItem
              SelectedItem={
                <div
                  onMouseEnter={() => setShowRentDropdown(true)}
                  onMouseLeave={() => setShowRentDropdown(false)}
                  className="relative text-black"
                >
                  <div className="w-[130px] flex justify-between px-[15px] py-[2px] items-center gap-[10px] shadow-md rounded-[10px]">
                    <div className="">Rent</div>
                    <img src={light}></img>
                  </div>
                  <div
                    className="absolute top-[0px] w-[130px] bg-white shadow-md rounded-[10px] font-normal"
                    hidden={!showRentDropdown}
                  >
                    <div className="w-[130px] flex justify-between px-[15px] py-[2px] items-center gap-[10px]">
                      <div className="font-semibold">Rent</div>
                      <img src={arrowtop}></img>
                    </div>

                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 1, submode: 0 }));
                        setShowRentDropdown(false);
                      }}
                    >
                      Long-term
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 1, submode: 1 }));
                        setShowRentDropdown(false);
                      }}
                    >
                      Short-term
                    </div>
                  </div>
                </div>
              }
              UnselectedItem={
                <div
                  onMouseEnter={() => setShowRentDropdown(true)}
                  onMouseLeave={() => setShowRentDropdown(false)}
                  className="relative text-black"
                >
                  <div className="w-[130px] flex justify-between px-[15px] py-[2px] items-center gap-[10px]">
                    <div className="text-[#959595]">Rent</div>
                    <img src={arrowdown}></img>
                  </div>
                  <div
                    className="absolute top-[0px] w-[130px] bg-white shadow-md rounded-[10px] font-normal"
                    hidden={!showRentDropdown}
                  >
                    <div className="w-[130px] flex justify-between px-[15px] py-[2px] items-center gap-[10px]">
                      <div className="font-semibold">Rent</div>
                      <img src={arrowtop}></img>
                    </div>

                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 1, submode: 0 }));
                        setShowRentDropdown(false);
                      }}
                    >
                      Long-term
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 1, submode: 1 }));

                        setShowRentDropdown(false);
                      }}
                    >
                      Short-term
                    </div>
                  </div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="w-[130px] flex justify-between py-[2px] px-[40px] items-center gap-[10px] shadow-md rounded-[10px]">
                  <div className="text-black">Buy</div>
                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="w-[130px] flex justify-between py-[2px] px-[40px] items-center gap-[10px] hover:bg-[#efefef] rounded-[10px]"
                  onClick={() =>
                    dispatch(setHeaderMode({ mode: 2, submode: null }))
                  }
                >
                  <div>Buy</div>
                </div>
              }
            />

            <SelectionItem
              SelectedItem={
                <div
                  onMouseEnter={() => setShowDashDropdown(true)}
                  onMouseLeave={() => setShowDashDropdown(false)}
                  onClick={() => navigate("/dashboard")}
                  className="relative text-black"
                >
                  <div className="w-[130px] flex justify-between px-[12px] py-[2px] items-center gap-[10px] shadow-md rounded-[10px]">
                    <div className="text-black">Dashboard</div>
                    <img src={light}></img>
                  </div>
                  <div
                    className="absolute top-[0px] w-[130px] bg-white shadow-md rounded-[10px] font-normal"
                    hidden={!showDashDropdown}
                  >
                    <div className="w-[130px] flex justify-between px-[12px] py-[2px] items-center gap-[10px]">
                      <div className="font-semibold">Dashboard</div>
                      <img src={arrowtop}></img>
                    </div>
                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Long-term Rental
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 3, submode: 2 }));
                        setShowDashDropdown(false);
                      }}
                    >
                      Landlord Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 3, submode: 3 }));
                        setShowDashDropdown(false);
                      }}
                    >
                      Tenant Mode
                    </div>
                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Marketplace
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 0 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Buy Mode";
                      }}
                    >
                      Buy Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 1 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Sell Mode";
                      }}
                    >
                      Sell Mode
                    </div>

                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Short-term Rental
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 4 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Host Mode";
                      }}
                    >
                      Host Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 5 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Traveler Mode";
                      }}
                    >
                      Traveler Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 6 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "YieldEstate";
                      }}
                    >
                      YieldEstate
                    </div>
                  </div>
                </div>
              }
              UnselectedItem={
                <div
                  onMouseEnter={() => setShowDashDropdown(true)}
                  onMouseLeave={() => setShowDashDropdown(false)}
                  className="relative text-black"
                >
                  <div className="w-[130px] flex justify-between px-[12px] py-[2px] items-center gap-[10px]">
                    <div className="text-[#959595]">Dashboard</div>
                    <img src={arrowdown}></img>
                  </div>
                  <div
                    className="absolute top-[0px] w-[130px] bg-white shadow-md rounded-[10px] font-normal"
                    hidden={!showDashDropdown}
                  >
                    <div className="w-[130px] flex justify-between px-[12px] py-[2px] items-center gap-[10px]">
                      <div className="font-semibold">Dashboard</div>
                      <img src={arrowtop}></img>
                    </div>
                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Long-term Rental
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 3, submode: 2 }));
                        setShowDashDropdown(false);
                      }}
                    >
                      Landlord Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-pointer hover:bg-[#efefef]"
                      onClick={() => {
                        dispatch(setHeaderMode({ mode: 3, submode: 3 }));
                        setShowDashDropdown(false);
                      }}
                    >
                      Tenant Mode
                    </div>
                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Marketplace
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 0 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Buy Mode";
                      }}
                    >
                      Buy Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 1 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Sell Mode";
                      }}
                    >
                      Sell Mode
                    </div>

                    <div className="pl-[12px] text-[14px] text-[#B6B6B6]">
                      Short-term Rental
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 4 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Host Mode";
                      }}
                    >
                      Host Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 5 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "Traveler Mode";
                      }}
                    >
                      Traveler Mode
                    </div>
                    <div
                      className="pl-[15px] py-[3px] cursor-not-allowed hover:bg-[#efefef]"
                      onClick={() => {
                        // dispatch(setHeaderMode({ mode: 3, submode: 6 }));
                        // setShowDashDropdown(false);
                      }}
                      onMouseEnter={(e) => {
                        e.target.innerText = "coming soon";
                      }}
                      onMouseLeave={(e) => {
                        e.target.innerText = "YieldEstate";
                      }}
                    >
                      YieldEstate
                    </div>
                  </div>
                </div>
              }
            />
          </SelectionGroup>
        </div>
      </div>
    </div>
  );
};
