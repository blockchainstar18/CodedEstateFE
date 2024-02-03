import { SelectionGroup, SelectionItem } from "../Selection";
import light from "../../assets/images/light.png";
import search from "../../assets/images/tabler-icon-search.png";
import slash from "../../assets/images/slash.png";
import windowIcon from "../../assets/images/window.png";
import list from "../../assets/images/list.png";
import arrowtoLeft from "../../assets/images/ArrowToLeft.png";
import { useState } from "react";
import { CarouselCompo } from "../CarouselCompo";
import circleIcon from "../../assets/images/Frame 1000005306.png";
import { useSelector } from "react-redux";
import clockAlarm from "../../assets/images/dashboard/Social (2).png";
import clockSand from "../../assets/images/dashboard/Social.png";
import profileIcon from "../../assets/images/Profile.png";
import NUSD from "../../assets/images/NUSD.png";
import documentchart from "../../assets/images/dashboard/document-chart-hand.png";
import { useEffect } from "react";
import { getAllNFTsInfo } from "../NFTs";

import map from "../../assets/images/map.png";
import locationPin from "../../assets/images/locationPin.png";
import location from "../../assets/images/location.png";
import image from "../../assets/images/image.jpg";
import bookLet from "../../assets/images/dashboard/Hotel, Booklet.png";
import messageschat from "../../assets/images/dashboard/Messages, Chat.png";
import homehousebig from "../../assets/images/dashboard/home-house-big.png";

import empty from "../../assets/images/Frame 1000005568.png";

export const TenantMyRental = () => {
  const [viewDetailFlag, setViewDetailFlag] = useState(false);
  const [viewMapFlag, setViewMapFlag] = useState(false);

  const [rentingAssetsFlag, setRentingAssetsFlag] = useState(0);
  const account = useSelector((state) => state.auth.account);
  const [currentToken, setCurrentToken] = useState();
  const assets = useSelector((state) => state.nft.allNFTs);

  const [daysRentedOut, setDaysRentedOut] = useState(0);
  const [daysLeftOfRental, setDaysLeftOfRental] = useState(0);

  const [myRentingAssets, setMyRentingAssets] = useState([]);

  useEffect(() => {
    const tempArray = [];
    for (let i = 0; i < assets.length; i++) {
      if (assets[i].longtermrental_info.tenant_address == account)
        tempArray.push(assets[i]);
    }
    setMyRentingAssets(tempArray);
  }, [assets]);

  function calculateDifferenceDays(date1, date2) {
    // To calculate the time difference of two dates
    var timeDifference = date2.getTime() - date1.getTime();

    // To calculate the number of days between two dates
    var differenceInDays = timeDifference / (1000 * 3600 * 24);
    if (differenceInDays < 0) return 0;
    return Math.round(differenceInDays);
  }

  const setdays = () => {
    setDaysRentedOut(
      calculateDifferenceDays(
        new Date(currentToken.longtermrental_info.tenant.renting_period[0]),
        new Date()
      )
    );
    setDaysLeftOfRental(
      calculateDifferenceDays(
        new Date(),
        new Date(currentToken.longtermrental_info.tenant.renting_period[1])
      )
    );
  };

  useEffect(() => {
    if (currentToken) setdays();
  }, [currentToken]);

  return (
    <>
      {viewMapFlag ? (
        <>
          <div className="relative w-full h-full">
            <img src={map} className="w-full h-full absolute top-0 left-0" />
            <img src={locationPin} className="absolute left-[10%] top-[20%]" />
            <div className="p-[16px] rounded-[8px] shadow-md w-[400px] absolute bg-white right-0 h-full space-y-[16px]">
              <img src={arrowtoLeft} onClick={() => setViewMapFlag(false)} />
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
                    <div className="text-[#959595]">Address: Rasdalsvegen</div>
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
        <>
          {!viewDetailFlag ? (
            <div className="w-full p-[16px] h-full flex flex-col">
              <div className="font-bold text-[18px]">Rental Overview</div>
              <div className="flex justify-between my-[24px]">
                <div>
                  <SelectionGroup
                    defaultItem={rentingAssetsFlag}
                    className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                    SelectedItemMask="shadow-md font-bold text-black"
                  >
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>Upcoming</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setRentingAssetsFlag(0)}
                        >
                          <div>Upcoming</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>Current</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setRentingAssetsFlag(1)}
                        >
                          <div>Current</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>Ended</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setRentingAssetsFlag(2)}
                        >
                          <div>Ended</div>
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]">
                          <div>All</div>
                          <img src={light}></img>
                        </div>
                      }
                      UnselectedItem={
                        <div
                          className="w-[120px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                          onClick={() => setRentingAssetsFlag(3)}
                        >
                          <div>All</div>
                        </div>
                      }
                    />
                  </SelectionGroup>
                </div>

                <div className="flex items-center gap-[20px]">
                  <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                    <img src={search}></img>
                    <input placeholder="Search" className="w-full" />
                    <img src={slash}></img>
                  </div>

                  <div className="items-center flex">
                    <div className="p-[8px] bg-[#F2F2F2]">
                      <img src={windowIcon}></img>
                    </div>
                    <div className="p-[8px]">
                      <img src={list}></img>
                    </div>
                  </div>
                </div>
              </div>

              {myRentingAssets.length ? (
                <></>
              ) : (
                <>
                  <div className="w-full shadow-md bg-[#F6F6F6] h-full flex flex-col">
                    <div className="m-auto flex flex-col">
                      <img src={empty} className="m-auto"></img>
                      <div>No Rentals Yet</div>
                    </div>
                  </div>
                </>
              )}
              {rentingAssetsFlag == 1 ? (
                <div className="w-full flex gap-[16px]">
                  {assets.map((item) => {
                    if (
                      item.longtermrental_info.tenant_address == account &&
                      item.longtermrental_info.isreserved &&
                      item.longtermrental_info.deposit_amount != "0"
                    )
                      return (
                        <div className="w-[400px]">
                          <CarouselCompo
                            nftInfo={item.nft_info}
                            metaData={item.metaData}
                            longtermrentalInfo={item.longtermrental_info}
                            totalPriceHide={true}
                            imageHeight={"200px"}
                            btn={
                              <div
                                className="bg-[#5D00CF] py-[10px] text-center mt-[10px] cursor-pointer px-[18px]  text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full group-hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] group-hover:-translate-y-[3px]"
                                onClick={() => {
                                  setCurrentToken(item);
                                  setViewDetailFlag(!viewDetailFlag);
                                }}
                              >
                                View Details
                              </div>
                            }
                          />
                        </div>
                      );
                  })}
                </div>
              ) : (
                <></>
              )}

              {rentingAssetsFlag == 0 ? (
                <div className="w-full flex gap-[16px]">
                  {assets.map((item) => {
                    if (
                      item.longtermrental_info.tenant_address == account &&
                      item.longtermrental_info.isreserved &&
                      item.longtermrental_info.deposit_amount == "0"
                    )
                      return (
                        <div className="w-[400px]">
                          <CarouselCompo
                            nftInfo={item.nft_info}
                            metaData={item.metaData}
                            longtermrentalInfo={item.longtermrental_info}
                            totalPriceHide={true}
                            imageHeight={"200px"}
                            btn={
                              <div
                                className="bg-[#5D00CF] py-[10px] text-center mt-[10px] cursor-pointer px-[18px]  text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full group-hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] group-hover:-translate-y-[3px]"
                                onClick={() => {
                                  setCurrentToken(item);
                                  setViewDetailFlag(!viewDetailFlag);
                                }}
                              >
                                View Details
                              </div>
                            }
                          />
                        </div>
                      );
                  })}
                </div>
              ) : (
                <></>
              )}

              {rentingAssetsFlag == 3 ? (
                <div className="w-full flex gap-[16px]">
                  {assets.map((item) => {
                    if (item.longtermrental_info.tenant_address == account)
                      return (
                        <div className="w-[400px]">
                          <CarouselCompo
                            nftInfo={item.nft_info}
                            metaData={item.metaData}
                            longtermrentalInfo={item.longtermrental_info}
                            totalPriceHide={true}
                            imageHeight={"200px"}
                            btn={
                              <div
                                className="bg-[#5D00CF] py-[10px] text-center mt-[10px] cursor-pointer px-[18px]  text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full group-hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] group-hover:-translate-y-[3px]"
                                onClick={() => {
                                  setCurrentToken(item);
                                  setViewDetailFlag(!viewDetailFlag);
                                }}
                              >
                                View Details
                              </div>
                            }
                          />
                        </div>
                      );
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
              <div className="w-full rounded-[8px] bg-white p-[16px] flex flex-col h-full">
                <div className="flex gap-[20px] items-center">
                  <img
                    src={arrowtoLeft}
                    className="w-[20px]"
                    onClick={() => setViewDetailFlag(!viewDetailFlag)}
                  />
                  <div className="font-bold text-[24px]">Your Payment Plan</div>
                </div>

                <div className="w-full mt-[10px]">
                  <div className="flex justify-between w-full">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                    <div>Aug</div>
                    <div>Sep</div>
                    <div>Oct</div>
                    <div>Nov</div>
                    <div>Dec</div>
                  </div>
                  <div className="flex items-center my-[15px]">
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                    <div className="bg-[#EFE8FD] h-[4px] w-full" />
                    <img src={circleIcon} />
                  </div>
                  <div className="flex justify-between w-full">
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                    <div>
                      {currentToken.longtermrental_info.landlord
                        .price_per_month / 1000}
                      k
                    </div>
                  </div>
                </div>

                <div className="h-full w-full flex">
                  <div className="m-auto">
                    <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                      <img src={clockAlarm} />
                      <div>Days rented</div>
                      <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px] text-[24px]">
                        {daysRentedOut}
                      </div>
                      <div>days</div>
                    </div>
                    <div className=" py-[20px] rounded-[8px] shadow-md w-[500px] flex items-center gap-[14px]">
                      <img src={clockSand} />
                      <div>Days left of rental</div>
                      <div className="p-[4px] shadow-md text-[#5B1DEE] rounded-[8px] text-[24px]">
                        {daysLeftOfRental}
                      </div>
                      <div>days</div>
                    </div>
                  </div>
                </div>
                <div className="p-[24px] rounded-[16px] shadow-md gap-[16px] flex w-full">
                  <div className="flex flex-col justify-between h-full w-[400px] p-[16px] shadow-md rounded-[16px]">
                    <div className="font-bold">Message Landlord</div>
                    <div className="flex items-center">
                      <img src={profileIcon} />
                      <div>
                        Marit is here to help you if you have any questions
                      </div>
                    </div>
                    <div className="globalInputForm p-[10px] h-[100px]">
                      <textarea
                        placeholder="Write something fun and punchy."
                        className="w-full h-full"
                      />
                    </div>
                    <div className="text-white text-center py-[10px] rounded-[16px] bg-[#5D00CF]">
                      Send Message
                    </div>
                  </div>
                  <div className="w-[350px]">
                    <CarouselCompo
                      nftInfo={currentToken.nft_info}
                      metaData={currentToken.metaData}
                      imageHeight={"150px"}
                      totalPriceHide={true}
                      PriceHide={true}
                      btn={
                        <div
                          className="bg-[#5D00CF] py-[10px] text-center mt-[10px] cursor-pointer px-[18px]  text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full group-hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] group-hover:-translate-y-[3px]"
                          onClick={() => setViewMapFlag(true)}
                        >
                          View Details
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="w-[400px] rounded-[8px] bg-white p-[16px]">
                <div className="space-y-[16px]">
                  <div className="w-full h-[1px] bg-[#E3E3E3]" />
                  <div className="font-bold text-[24px]">Payment Details</div>
                  <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                    <div className="text-[#B6B6B6]">Monthly Revenue</div>
                    <img src={NUSD} />
                    <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                      2000
                    </div>
                    <div>NUSD</div>
                  </div>
                  <div className="shadow-md rounded-[16px] p-[12px] flex justify-between items-center">
                    <div className="text-[#B6B6B6]">Rent VAT / month</div>
                    <div className="p-[4px] rounded-[8px] text-[#5B1DEE] shadow-md">
                      November 10th
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center text-white bg-[#5B1DEE] rounded-[16px] py-[10px] gap-[10px] mt-[50px]">
                  <img src={documentchart}></img>
                  <div>Claim Deposit</div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
