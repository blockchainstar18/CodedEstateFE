import light from "../assets/images/light.png";

import image from "../assets/images/image.jpg";
import NUSD from "../assets/images/NUSD.png";
import LocationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";

import { CarouselCompo } from "../components/CarouselCompo";
import { PropertyItem } from "../components/PropertyItem";
import { SelectionGroup, SelectionItem } from "../components/Selection";
import { useSelector } from "react-redux";

import circleIcon from "../assets/images/Frame 1000005306 (2).png";

import circlechecked from "../assets/images/Frame 1000005306 (1).png";
import uploadimage from "../assets/images/dashboardListing/uploadimage.png";

import closeIcon from "../assets/images/Close1.png";

import imgBack from "../assets/images/dashboard/luke-van-zyl-koH7IVuwRLw-unsplash 1.png";
import colorarrow from "../assets/images/Arrow.png";
import imageCard from "../assets/images/image.png";

import location from "../assets/images/location.png";

import heart from "../assets/images/dashboard/Frame 1000005004.png";

import walletIcon from "../assets/images/dashboard/Wallet, Money.png";
import medalIcon from "../assets/images/dashboard/medal-reward.png";
import starfavorite from "../assets/images/dashboard/star-favorite-send.png";

import bankNote from "../assets/images/dashboard/Money, Banknote.png";
import binaryIcon from "../assets/images/dashboard/icon.png";
import bankIcon from "../assets/images/dashboard/icon (1).png";

import map from "../assets/images/map.png";
import locationPin from "../assets/images/locationPin.png";
import arrowtoLeft from "../assets/images/ArrowToLeft.png";
import bookLet from "../assets/images/dashboard/Hotel, Booklet.png";
import messageschat from "../assets/images/dashboard/Messages, Chat.png";
import homehousebig from "../assets/images/dashboard/home-house-big.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Calendar } from "react-big-calendar";
import { PropertyDetail } from "../components/PropertyDetail";
import { Verify } from "./Verify";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Inbox } from "../components/Inbox";
import { setDashboardMode } from "../Actions/DashboardSlice";
import { useDispatch } from "react-redux";
import { DashboardListing } from "./DashboardListing";
import { setNFT } from "../Actions/NFTSlice";

import { NibiruTxClient, NibiruQuerier, Testnet } from "@nibiruchain/nibijs";

import ImageUploading from "react-images-uploading";

import axios from "axios";

import { DetailPage } from "./DetailPage";
import { PropertyAddress } from "../components/PropertyAddress";
import { ImageView } from "../components/ImageView";
import { PropertyListingDetail } from "../components/PropertyListingDetail";

import {
  executeContract,
  queryContract,
} from "../components/InteractToContract";

import { getMetadata, getMyNFTsInfo, getAllNFTsInfo } from "../components/NFTs";
import { LandlordDashboard } from "../components/LandlordDashboard/LandlordDashboard";
import { LandlordTenantOverview } from "../components/LandlordDashboard/LandlordTenantOverview";
import { LandlordNFTs } from "../components/LandlordDashboard/LandlordNFTs";
import { LandlordCalendar } from "../components/LandlordDashboard/LandlordCalendar";
import { TenantDashboard } from "../components/TenantDashboard/TenantDashboard";
import { TenantMyRental } from "../components/TenantDashboard/TenantMyRental";
import { TenantTransaction } from "../components/TenantDashboard/TenantTransaction";
import { LandlordTransaction } from "../components/LandlordDashboard/LandlordTransaction";
import { LandlordInbox } from "../components/LandlordDashboard/LandlordInbox";
import { TenantInbox } from "../components/TenantDashboard/TenantInbox";

export const Dashboard = () => {
  const headerMode = useSelector((state) => state.header.submode);
  const dashboardMode = useSelector((state) => state.dashboard.mode);
  const dispatch = useDispatch();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [showPriceEditModal, setShowPriceEditModal] = useState(false);
  const [images, setImages] = useState([]);

  const [myTokens, setMyTokens] = useState([]);

  const [rentingAssets, setRentingAssets] = useState([]);

  const [currentToken, setCurrentToken] = useState();

  const [updateFlag, setUpdateFlag] = useState(false);

  const [myRentalFlag, setMyRentalFlag] = useState(0);

  const [actionMode, setActionMode] = useState(false);
  const [tenantOverviewFlag, setTenantOverviewFlag] = useState(0);

  // const metaData = useSelector((state) => state.nft.currentNFT.metaData);
  // const nftInfo = useSelector((state) => state.nft.currentNFT.NftInfo);

  const walletEx = useSelector((state) => state.auth.wallet);
  const account = useSelector((state) => state.auth.account);

  const amountToPay = useSelector((state) => state.rent.amountToPay);
  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWEyZjc5ZS1iNDQyLTQzOWUtOGNlNC0wZmRiMTIzYmNkNDciLCJlbWFpbCI6ImJsb2NrY2hhaW5zdGFyMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJkZjAxNDE1NGYxOTBhZjY4M2Y3Iiwic2NvcGVkS2V5U2VjcmV0IjoiZDUxNGZjOTljMGZkMGJlYTA1NzA4OTkzOGFkZGQyOTI5OWQ1ZjkyZTUyOGY2NWRjZjQ0NGIzODdmOTQ2YmEyMCIsImlhdCI6MTcwMjk2NDQxOX0.2KDJPbgRnpIbvgYbvGZnkwnjAZw7NiRhtif_SqW1z2E";

  const setListNFT = async (
    token_id,
    islist,
    denom,
    price_per_month,
    refundable_deposit,
    available_period
  ) => {
    const listingMessage = {
      set_list_for_long_term_rental: {
        token_id: token_id,
        islisted: islist,
        denom: denom,
        price_per_month: price_per_month,
        refundable_deposit: refundable_deposit,
        available_period: available_period,
      },
    };
    await executeContract(
      dispatch,
      token_id,
      listingMessage,
      account,
      walletEx
    );
    setUpdateFlag(!updateFlag);
    dispatch(setDashboardMode(2));
  };

  // const getTime = (date) => {
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   const amOrPm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12 || 12;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   const timeString = hours + ":" + minutes + " " + amOrPm;
  //   return timeString;
  // };

  useEffect(() => {
    if (dashboardMode == 1 && headerMode == 2) {
      if (currentToken) setTenantOverviewFlag(1);
      else setTenantOverviewFlag(0);
    }
    if (dashboardMode == 1 && headerMode == 3) {
      if (currentToken) setMyRentalFlag(1);
      else setMyRentalFlag(0);
    }
  }, [currentToken]);

  const handleUnlist = async () => {
    alert("asdfad");
  };

  return (
    <div className="bg-white w-full rounded-[8px] shadow-md flex flex-col sidebarheight overflow-auto">
      {headerMode == 2 ? (
        <>
          {dashboardMode == 0 ? <LandlordDashboard /> : <></>}

          {dashboardMode == 1 ? <LandlordTenantOverview /> : <></>}
          {dashboardMode == 2 ? <LandlordNFTs /> : <></>}
          {dashboardMode == 3 ? <LandlordTransaction /> : <></>}
          {/* {dashboardMode == 4 ? <DashboardListing /> : <></>} */}
          {/* {dashboardMode == 5 ? <LandlordCalendar /> : <></>} */}

          {dashboardMode == 4 ? <LandlordInbox /> : <></>}
        </>
      ) : (
        <></>
      )}

      {headerMode == 3 ? (
        <>
          {dashboardMode == 0 ? <TenantDashboard /> : <></>}
          {dashboardMode == 1 ? <TenantMyRental /> : <></>}
          {dashboardMode == 2 ? (
            <TenantTransaction />
          ) : (
            // <div className="w-full p-[16px] flex flex-col">

            //   <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //     <div className="bg-[#5D00CF] w-[150px] h-[6px]" />
            //     <img src={circlechecked} />
            //   </div>

            // </div>
            <></>
          )}
          {dashboardMode == 3 ? <TenantInbox /> : <></>}
        </>
      ) : (
        <></>
      )}
      {headerMode == 5 ? (
        <>
          {dashboardMode == 0 ? (
            <>
              <div className="p-[16px] w-full h-full flex flex-col">
                <div className="bg-[#eeeeee] relative rounded-[8px]">
                  <div className="w-full flex justify-end">
                    <img src={imgBack} className="" />
                  </div>
                  <div className="absolute top-[10%] left-[2%] space-y-[20px] w-[50%]">
                    <div className="text-[28px] font-bold">
                      Explore homes on-chain, and find your dream stay today
                    </div>
                    <div>
                      Explore the best of the best in real estate with our
                      recommended properties.
                    </div>
                    <div className="bg-[#5D00CF] text-white px-[14px] py-[8px] w-max rounded-[16px]">
                      Explore
                    </div>
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Recommended properties</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>

                <div className="flex w-full justify-between my-[10px]">
                  <div>Wishlist</div>
                  <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
                    <div className="text-[#4C37C3]">See all</div>
                    <img src={colorarrow} className="" />
                  </div>
                </div>

                <div className="flex gap-[20px]">
                  <div className="p-[8px] rounded-[16px] shadow-md relative">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                    <div className="absolute top-[20px] right-[20px] z-[10]">
                      <img src={heart}></img>
                    </div>
                  </div>
                  <div className="p-[8px] rounded-[16px] shadow-md">
                    <img className="rounded-[16px] w-[200px]" src={imageCard} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {dashboardMode == 1 ? (
            <>
              <div className="relative w-full h-full">
                <img
                  src={map}
                  className="w-full h-full absolute top-0 left-0"
                />
                <img
                  src={locationPin}
                  className="absolute left-[10%] top-[20%]"
                />
                <div className="p-[16px] rounded-[8px] shadow-md w-[400px] absolute bg-white right-0 h-full space-y-[16px]">
                  <img src={arrowtoLeft} />
                  <div>Your stay</div>
                  <img src={image} className="w-full rounded-[8px] h-[200px]" />
                  <div className="p-[12px] rounded-[8px] shadow-md space-y-[16px]">
                    <div className="h-[120px] flex justify-between">
                      <div className="space-y-[2px]">
                        <div className="text-[18px]">Check-in</div>
                        <div className="text-[#959595]">Mon, Dec 11</div>
                        <div className="text-[#959595]">3:00 PM</div>
                        <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                          Instruction
                        </div>
                      </div>
                      <div className="h-full w-[2px] bg-[#E3E3E3]"></div>
                      <div className="flex-col items-end inline-flex space-y-[2px]">
                        <div className="text-[18px]">Check-out</div>
                        <div className="text-[#959595]">Mon, Dec 11</div>
                        <div className="text-[#959595]">3:00 PM</div>
                        <div className="text-white bg-[#5D00CF] px-[14px] py-[6px] rounded-[16px] w-max">
                          Instruction
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#E3E3E3]" />

                    <div className="flex items-start gap-[12px]">
                      <img src={location} />
                      <div>
                        <div>Convenience and security</div>
                        <div className="text-[#959595]">
                          Address: Rasdalsvegen
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={bookLet} />
                      <div>
                        <div>Things to know</div>
                        <div className="text-[#959595]">
                          Intructions and house rules
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={messageschat} />
                      <div>
                        <div>Message your host</div>
                        <div className="text-[#959595]">Marit</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-[12px]">
                      <img src={homehousebig} />
                      <div>
                        <div>Your place</div>
                        <div className="text-[#959595]">
                          Harmonisk norsk hytte i Rasdalen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      {headerMode == 6 ? (
        <>
          {dashboardMode == 1 ? (
            <>
              <div className="p-[16px] w-full space-y-[16px]">
                <div>Wallet</div>
                <div className="grid grid-cols-2 w-full gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={walletIcon} />
                      <div className="text-[#959595]">Cash balance</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[24px] text-[#959595]">NUSD 0</div>
                      <div className="flex gap-[8px]">
                        <div className="bg-black rounded-[16px] px-[14px] py-[8px] text-white">
                          Deposit
                        </div>
                        <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                          Withdraw
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={medalIcon} />
                      <div className="text-[#959595]">Rewards balance</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-[24px] text-[#959595]">NUSD 0</div>
                      <img src={starfavorite} />
                    </div>
                  </div>
                </div>
                <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[16px]">
                  <div>Transaction</div>
                  <div className="grid justify-items-start text-[#959595] grid-cols-5 border-b-[1px] border-[#E3E3E3] pb-[4px]">
                    <div>Type</div>
                    <div>Status</div>
                    <div>Date</div>
                    <div>Wallet</div>
                    <div>Amount</div>
                  </div>
                  <div className="w-full flex">
                    <div className="mx-auto flex flex-col items-center my-[30px]">
                      <img src={bankNote} />
                      <div className="text-[#959595]">No transaction yet</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 w-full gap-[16px]">
                  <div className="p-[16px] rounded-[8px] shadow-md w-full flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={binaryIcon} />
                      <div>
                        Add a card to enjoy instant deposits from anywhere in
                        the world
                      </div>
                    </div>

                    <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                      Deposit
                    </div>
                  </div>
                  <div className="p-[16px] rounded-[8px] shadow-md w-full flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={bankIcon} />
                      <div>
                        Add a bank account to deposits from anywhere in the
                        world
                      </div>
                    </div>
                    <div className="border-[#5D00CF] border-[1px] rounded-[16px] px-[14px] py-[8px] text-[#5D00CF]">
                      Deposit
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
