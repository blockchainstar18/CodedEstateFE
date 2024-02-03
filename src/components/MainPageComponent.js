import shop from "../assets/images/Shop.png";
import rent from "../assets/images/Group 1000004856.png";

import arrow from "../assets/images/Icon color.png";
import iconFilter from "../assets/images/iconFilter.png";
import { SearchOptionBar } from "./SearchOptionBar";
import { CarouselCompo } from "./CarouselCompo";

import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import "../css/MainPageComponent.css";

import checked from "../assets/images/checkbox/checked.png";
import unchecked from "../assets/images/checkbox/unchecked.png";
import closeIcon from "../assets/images/Group 1000004790.png";

import { useSelector } from "react-redux";
import { CustomChain, NibiruQuerier, Testnet } from "@nibiruchain/nibijs";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setNFT } from "../Actions/NFTSlice";
import { setPage } from "../Actions/PageSlice";
import { queryContract } from "./InteractToContract";
import { getAllNFTsInfo } from "./NFTs";
import { Checkbox } from "./Checkbox";
import { SelectionGroup, SelectionItem } from "./Selection";
import { Toggle } from "./Toggle";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { CustomChart } from "./CustomChart";

export const MainPageComponent = () => {
  const [show, setShow] = useState(false);

  // const [assets, setAssets] = useState([]);
  const assets = useSelector((state) => state.nft.allNFTs);

  const handleClose = () => {
    // document.getElementById("sortby").classList.remove("z-[1200]");
    setShow(false);
  };
  const handleShow = (e) => {
    // e.target.parentNode.classList.add("z-[1200]");
    setShow(true);
  };

  const handleCheck = (e) => {
    if (e.target.src == checked) e.target.src = unchecked;
    else e.target.src = checked;
  };

  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);
  const account = useSelector((state) => state.auth.account);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkedAdults, setCheckedAdults] = useState(false);
  const [checkedRoom, setCheckedRoom] = useState(false);
  const [checkedSharedRoom, setCheckedSharedRoom] = useState(false);

  const [range, setRange] = useState({
    min: 210,
    max: 1200,
  });

  const handleOnRangeChange = (value) => {
    setRange(value);
  };

  function generateRandomArray(min, max, length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }

  const min = 1;
  const max = 100;
  const length = 20;

  const chartData = [
    7, 22, 1, 93, 48, 8, 67, 9, 55, 25, 16, 78, 63, 20, 50, 99, 100, 20, 86, 38,
    7, 22, 1, 93, 48, 8, 67, 9, 55,
  ];

  const defaultEssentials = {
    wifi: true,
    kitchen: false,
    washer: false,
    airConditioning: false,
    dryer: false,
    heating: false,
  };

  const [essentials, setEssentials] = useState(defaultEssentials);

  return (
    <div className="bg-white w-full rounded-[8px] relative">
      <div className="flex justify-between px-[20px] h-[70px] items-center">
        <div className="flex items-center gap-[10px]">
          {/* Buy Mode */}
          {/* <img src={shop}></img>
          <div className="text-[28px] font-semibold">Marketplace</div> */}
          {/* Rent Mode */}

          {mode === 1 && submode === 0 ? (
            <>
              <img src={rent} alt=""></img>
              <div className="text-[28px] font-semibold">Long-Term Rental</div>
            </>
          ) : (
            <></>
          )}

          {mode === 1 && submode === 1 ? (
            <>
              <img src={rent} alt=""></img>
              <div className="text-[28px] font-semibold">Short-Term Rental</div>
            </>
          ) : (
            <></>
          )}
        </div>

        <div
          // id="sortby"
          className="flex items-center gap-[8px] shadow-md bg-white rounded-[20px] px-[24px] py-[14px] mt-[8px] z-[1000] cursor-pointer mr-[240px]"
          onClick={handleShow}
        >
          <img src={iconFilter} alt=""></img>
          <div className="">Filter</div>
        </div>

        {/* <Modal show={show} onHide={handleClose} dialogClassName="_modal-dialog">
          <Modal.Body>
            <div className="space-y-[10px] p-[10px]">
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Published</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Total Price (High-Low)</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Total Price (Low-High)</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Square FT Price (High-Low)</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Square FT Price (Low-High)</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Closest Location</div>
              </div>
              <div className="flex gap-[20px] items-center">
                <img src={unchecked} onClick={handleCheck}></img>
                <div>Most Relevant</div>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <div className="w-max p-[10px]">
              <div className="w-[600px] p-[20px] h-[80vh] overflow-auto scrollbarwidth">
                <div className="flex items-center w-full justify-between">
                  <div className="text-[20px] font-bold">Filters</div>
                  <img
                    src={closeIcon}
                    className="mr-[-10px] cursor-pointer"
                    onClick={handleClose}
                    alt="Close"
                  />
                </div>
                <div className="mt-[20px]">
                  <div className="text-[18px] font-semibold">Price range</div>
                  <div>Cats, dogs, iguanas?!</div>
                </div>

                <div className="w-full">
                  <div className="w-[80%] mx-auto my-[20px]">
                    <CustomChart
                      data={chartData}
                      min={range.min}
                      max={range.max}
                    />
                    <InputRange
                      draggableTrack
                      maxValue={2500}
                      minValue={100}
                      onChange={handleOnRangeChange}
                      value={range}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-[20px] my-[16px] font-semibold">
                  <div className="">
                    <div>Maximum</div>
                    <div className="globalInputForm p-[8px] flex gap-[4px]">
                      <div>NUSD</div>

                      <input
                        value={range.max}
                        onChange={(e) =>
                          setRange({
                            ...range,
                            max: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Minimum</div>
                    <div className="globalInputForm p-[8px] flex gap-[4px]">
                      <div>NUSD</div>
                      <input
                        value={range.min}
                        onChange={(e) =>
                          setRange({
                            ...range,
                            min: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                {/* <div className="space-y-[12px] select-none">
                  <div className="text-[18px] font-semibold">Type of place</div>
                  <div className="flex justify-between">
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() => setCheckedAdults(!checkedAdults)}
                    >
                      <Checkbox checked={checkedAdults} />
                      <div>
                        <div className="font-semibold">Adults</div>
                        <div className="text-[14px] text-[#959595]">
                          age 13 or above
                        </div>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() => setCheckedRoom(!checkedRoom)}
                    >
                      <Checkbox checked={checkedRoom} />
                      <div>
                        <div className="font-semibold">Room</div>
                        <div className="text-[14px] text-[#959595]">
                          Your own room, plus access to shared spaces
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() => setCheckedSharedRoom(!checkedSharedRoom)}
                    >
                      <Checkbox checked={checkedSharedRoom} />
                      <div>
                        <div className="font-semibold">Shared room</div>
                        <div className="text-[14px] text-[#959595]">
                          A sleeping space and common areas that may be shared
                          with others
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" /> */}
                <div className="space-y-[12px]">
                  <div className="text-[18px] font-semibold">Rooms</div>
                  <div>
                    <div>Bedrooms</div>
                    <SelectionGroup
                      defaultItem={0}
                      className="flex gap-[8px] text-[#D5D5D5] my-[12px]"
                      SelectedItemMask="border-[#5D00CF] text-[#5D00CF]"
                    >
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            Any
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            Any
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            1
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            1
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            2
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            2
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            3
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            3
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            4
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            4
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            5
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            5
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            6
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            6
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            7+
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            7+
                          </div>
                        }
                      />
                    </SelectionGroup>

                    {/* <div>Beds</div>
                    <SelectionGroup
                      defaultItem={0}
                      className="flex gap-[8px] text-[#D5D5D5] my-[12px]"
                    >
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            Any
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            Any
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            1
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            1
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            2
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            2
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            3
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            3
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            4
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            4
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            5
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            5
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            6
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            6
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] border-[#5D00CF] text-[#5D00CF] text-center">
                            7+
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            7+
                          </div>
                        }
                      />
                    </SelectionGroup> */}

                    <div>Bathrooms</div>
                    <SelectionGroup
                      defaultItem={0}
                      className="flex gap-[8px] text-[#D5D5D5] my-[12px]"
                      SelectedItemMask="border-[#5D00CF] text-[#5D00CF]"
                    >
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            Any
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            Any
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            1
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            1
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            2
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            2
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            3
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            3
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            4
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            4
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            5
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            5
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            6
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            6
                          </div>
                        }
                      />
                      <SelectionItem
                        SelectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            7+
                          </div>
                        }
                        UnselectedItem={
                          <div className="w-full py-[8px] border-[1px] rounded-[16px] text-center">
                            7+
                          </div>
                        }
                      />
                    </SelectionGroup>
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                <div>
                  <div className="text-[18px] font-semibold">Property type</div>
                  <SelectionGroup
                    defaultItem={0}
                    className="flex gap-[8px] text-[#D5D5D5] my-[12px]"
                    SelectedItemMask="border-[#5D00CF] text-[#5D00CF]"
                  >
                    <SelectionItem
                      SelectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          House
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          House
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Apartment
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Apartment
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Guesthouse
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Guesthouse
                        </div>
                      }
                    />
                    <SelectionItem
                      SelectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Hotel
                        </div>
                      }
                      UnselectedItem={
                        <div className="w-full py-[30px] border-[1px] rounded-[16px] text-center">
                          Hotel
                        </div>
                      }
                    />
                  </SelectionGroup>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                <div className="space-y-[12px]">
                  <div className="text-[18px] font-semibold">Amenities</div>
                  <div className="font-semibold">Essentials</div>
                  <div className="grid grid-cols-2 font-semibold">
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({ ...essentials, wifi: !essentials.wifi })
                      }
                    >
                      <Checkbox checked={essentials.wifi} />
                      <div>Wifi</div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({
                          ...essentials,
                          kitchen: !essentials.kitchen,
                        })
                      }
                    >
                      <Checkbox checked={essentials.kitchen} />
                      <div>Kitchen</div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({
                          ...essentials,
                          washer: !essentials.washer,
                        })
                      }
                    >
                      <Checkbox checked={essentials.washer} />
                      <div>Washer</div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({
                          ...essentials,
                          airConditioning: !essentials.airConditioning,
                        })
                      }
                    >
                      <Checkbox checked={essentials.airConditioning} />
                      <div>Air conditioning</div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({
                          ...essentials,
                          dryer: !essentials.dryer,
                        })
                      }
                    >
                      <Checkbox checked={essentials.dryer} />
                      <div>Dryer</div>
                    </div>
                    <div
                      className="flex items-center gap-[8px] cursor-pointer"
                      onClick={() =>
                        setEssentials({
                          ...essentials,
                          heating: !essentials.heating,
                        })
                      }
                    >
                      <Checkbox checked={essentials.heating} />
                      <div>Heating</div>
                    </div>
                  </div>
                  <div className="font-semibold underline">Show more</div>
                </div>
                {/* <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                <div className="space-y-[12px]">
                  <div className="font-semibold text-[18px]">
                    Booking options
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Instant Book</div>
                      <div className="text-[14px] text-[#959595]">
                        Listings you can book without for Host approval
                      </div>
                    </div>
                    <Toggle status={true} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Self Checking</div>
                      <div className="text-[14px] text-[#959595]">
                        Easy access to the property once you arrive
                      </div>
                    </div>
                    <Toggle status={true} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Allows pets</div>
                      <div className="text-[14px] text-[#959595] underline">
                        Bringing a service animal?
                      </div>
                    </div>
                    <Toggle status={true} />
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                <div className="space-y-[12px]">
                  <div className="font-semibold text-[18px]">
                    Top tier stays
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">Superost</div>
                      <div className="text-[14px] text-[#959595]">
                        Stay with recognized Hosts
                      </div>
                      <div className="font-semibold text-[#959595] underline">
                        Learn more
                      </div>
                    </div>
                    <Toggle status={true} />
                  </div>
                </div>
                <div className="w-full h-[2px] bg-[#eeeeee] my-[12px]" />
                <div className="space-y-[12px]">
                  <div className="text-[18px] font-semibold">Host Language</div>
                  <div className="grid grid-cols-2 font-semibold">
                    <div className="flex items-center gap-[8px]">
                      <Checkbox />
                      <div>English</div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Checkbox />
                      <div>French</div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Checkbox />
                      <div>Duct</div>
                    </div>
                    <div className="flex items-center gap-[8px]">
                      <Checkbox />
                      <div>Japanese</div>
                    </div>
                  </div>
                  <div className="font-semibold underline">Show more</div>
                </div> */}
                <div className="flex items-center justify-between mt-[32px]">
                  <div className="px-[14px] py-[8px] border-[1px] border-[#959595] text-[#959595] rounded-[16px] w-max cursor-pointer">
                    Clear all
                  </div>
                  <div className="px-[14px] py-[8px] bg-[#202020] text-white rounded-[16px] w-max cursor-pointer">
                    Apply
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="absolute flex justify-center w-full top-0">
        <SearchOptionBar />
      </div>
      <div className="p-[20px] grid gap-[20px] grid-cols-5 h-[80vh] overflow-y-auto hiddenscrollbar">
        {assets.map((item) => {
          if (
            item.longtermrental_info.islisted &&
            item.nft_info.access.owner != account &&
            !item.longtermrental_info.tenant_address
          )
            return (
              <CarouselCompo
                nftInfo={item.nft_info}
                metaData={item.metaData}
                longtermrentalInfo={item.longtermrental_info}
                totalPriceHide={true}
                imageHeight={"200px"}
                btn={
                  <div className="bg-[#5D00CF] py-[10px] text-center mt-[10px] cursor-pointer px-[18px]  text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full group-hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] group-hover:-translate-y-[3px]">
                    View Details
                  </div>
                }
                onClick={() => {
                  dispatch(
                    setNFT({
                      tokenId: item.token_id,
                      NftInfo: item.nft_info,
                      metaData: item.metaData,
                      longtermrentalInfo: item.longtermrental_info,
                    })
                  );
                  // navigate("/property");
                  dispatch(setPage("detail"));
                }}
              />
            );
        })}
      </div>
      {/* <div className="flex absolute w-full">
        <div className="bg-[#5B1DEE] mx-auto px-[50px] rounded-[15px] text-white mt-[-15px] py-[8px] z-[10]">
          Show map
        </div>
      </div> */}
    </div>
  );
};
