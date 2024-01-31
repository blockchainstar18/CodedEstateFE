import search from "../assets/images/Frame 1000001522.png";
import searchsm from "../assets/images/search-normal.png";
import recent from "../assets/images/Group 1000004834.png";

import AbuDhabi from "../assets/images/Group 1000004849.png";
import Ajman from "../assets/images/Group 1000004849 (1).png";
import Dubai from "../assets/images/Group 1000004849 (2).png";
import Fujairah from "../assets/images/Group 1000004849 (3).png";
import RasAlKhaimah from "../assets/images/Group 1000004849 (4).png";
import Sharjah from "../assets/images/Group 1000004849 (5).png";
import UmmAlQuwain from "../assets/images/Group 1000004849 (6).png";

import { Calendar } from "react-multi-date-picker";
import light from "../assets/images/light.png";
import minus from "../assets/images/Group 1000004840.png";
import plus from "../assets/images/Group 1000004839.png";
import uncheck from "../assets/images/checkbox/unchecked.png";
import check from "../assets/images/checkbox/checked.png";

import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { NumberSpin } from "./NumberSpin";
import { Checkbox } from "./Checkbox";
import { useDispatch, useSelector } from "react-redux";

import {
  setAmenities,
  setCheckIn,
  setCheckOut,
  setGuests,
  setRegion,
} from "../Actions/SearchSlice";
import { SelectionGroup, SelectionItem } from "./Selection";
import { setPeriod } from "../Actions/RentSlice";

export const SearchOptionBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    document.getElementById("searchbar").classList.remove("z-[1200]");
    setShow(false);
  };
  const handleShow = (e) => {
    document.getElementById("searchbar").classList.add("z-[1200]");
    setShow(true);
  };

  // const [value, setValue] = useState([
  //   ,
  // ]);

  const [value, setValue] = useState(useSelector((state) => state.rent.period));

  useEffect(() => {
    // dispatch(setCheckIn(value[0]));
    // if (value.length > 1) dispatch(setCheckOut(value[1]));
    dispatch(setPeriod(value));
  }, [value]);

  const region = useSelector((state) => state.search.region);

  const [guestsAdults, setGuestsAdults] = useState(
    useSelector((state) => state.search.guests.adults)
  );
  const [guestsChildren, setGuestsChildren] = useState(
    useSelector((state) => state.search.guests.children)
  );
  const [guestsInfants, setGuestsInfants] = useState(
    useSelector((state) => state.search.guests.infants)
  );
  const [guestsPets, setGuestsPets] = useState(
    useSelector((state) => state.search.guests.pets)
  );

  useEffect(() => {
    dispatch(
      setGuests({
        adults: guestsAdults,
        children: guestsChildren,
        infants: guestsInfants,
        pets: guestsPets,
      })
    );
  }, [guestsAdults, guestsChildren, guestsInfants, guestsPets]);

  const [squareFeet, setSquareFeet] = useState(
    useSelector((state) => state.search.amenities.squareFeet)
  );
  const [bathroom, setBathroom] = useState(
    useSelector((state) => state.search.amenities.bathroom)
  );
  const [bedroom, setBedroom] = useState(
    useSelector((state) => state.search.amenities.bedroom)
  );

  useEffect(() => {
    dispatch(
      setAmenities({
        bathroom: bathroom,
        bedroom: bedroom,
        squareFeet: squareFeet,
      })
    );
  }, [bedroom, bathroom, squareFeet]);

  const [searchMode, setSearchMode] = useState(0);
  const [checked, setChecked] = useState(false);
  const [onlyMonthPicker, setOnlyMonthPicker] = useState(false);

  const [datePickerIndex, setDatePickerIndex] = useState(0);

  const dispatch = useDispatch();

  return (
    // <div className="flex gap-[20px] shadow-md rounded-[20px] items-center h-[50px] px-[5px] pl-[30px] font-semibold">
    //   <div>Anywhere</div>
    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>

    //   {/* buymode */}
    //   {/* <div>Property Type</div> */}

    //   {/* rent mode */}
    //   <div>Any Week</div>

    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>
    //   {/* buymode */}
    //   {/* <div>Sales Form</div> */}

    //   {/* rent mode  */}
    //   <div className="text-[#959595]">Add Guests...</div>

    //   <div className="w-[2px] bg-[#E3E3E3] h-[80%]"></div>
    //   <div className="text-[#959595]">Add Amenities...</div>
    //   <img src={search}></img>
    // </div>
    <div
      className="flex rounded-[40px] bg-white shadow-md mt-[8px]"
      id="searchbar"
    >
      <div
        className="px-[24px] py-[12px] cursor-pointer hover:bg-[#efefef] rounded-[400px]"
        onClick={() => {
          setSearchMode(0);
          handleShow();
        }}
      >
        <div className="text-[16px]">Where</div>
        <div className="text-[14px] text-[#959595]">
          {region ? region : "Search Destination"}
        </div>
      </div>
      {/* <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div> */}
      <div
        className="px-[24px] py-[12px] cursor-pointer hover:bg-[#efefef] rounded-[400px]"
        onClick={() => {
          setSearchMode(1);
          handleShow();
        }}
      >
        <div className="text-[16px]">Check In</div>
        <div className="text-[14px] text-[#959595]">
          {value[0] ? value[0].toString() : "Add Dates"}
        </div>
      </div>
      {/* <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div> */}

      <div
        className="px-[24px] py-[12px] cursor-pointer hover:bg-[#efefef] rounded-[400px]"
        onClick={() => {
          setSearchMode(1);
          handleShow();
        }}
      >
        <div className="text-[16px]">Check Out</div>
        <div className="text-[14px] text-[#959595]">
          {value[1] ? value[1].toString() : "Add Dates"}
        </div>
      </div>
      {/* <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div> */}

      <div
        className="px-[24px] py-[12px] cursor-pointer hover:bg-[#efefef] rounded-[400px]"
        onClick={() => {
          setSearchMode(2);
          handleShow();
        }}
      >
        <div className="text-[16px]">Who</div>
        <div className="text-[14px] text-[#959595]">
          {guestsAdults +
            "," +
            guestsChildren +
            "," +
            guestsInfants +
            "," +
            guestsPets}
        </div>
      </div>
      {/* <div className="w-[1px] h-[40px] bg-[#E3E3E3] my-auto"></div> */}

      <div
        className="px-[24px] py-[12px] cursor-pointer hover:bg-[#efefef] rounded-[400px]"
        onClick={() => {
          setSearchMode(3);
          handleShow();
        }}
      >
        <div className="text-[16px]">Amenities</div>
        <div className="text-[14px] text-[#959595]">
          {bathroom + "," + bedroom + "," + squareFeet}
        </div>
      </div>

      <div className="p-[14px] bg-[#5B1DEE] rounded-[400px] text-white gap-[8px] flex items-center cursor-pointer">
        <img src={searchsm}></img>
        <div>Search</div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="_modal-dialog_searchbar"
      >
        {searchMode == 0 ? (
          <Modal.Body>
            <div className="p-[16px] flex gap-[16px] font-semibold">
              <div className="pr-[32px] border-r-[1px] border-[#E3E3E3] space-y-[10px]">
                <div className="text-[18px]">Recent searches</div>
                <div className="flex items-center">
                  <img src={recent}></img>
                  <div>
                    <div className="text-[16px]">Dubai Stays</div>
                    <div className="text-[#959595]">
                      Nov 6 - Nov 25 (3 guests)
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={recent}></img>
                  <div>
                    <div className="text-[16px]">Dubai Stays</div>
                    <div className="text-[#959595]">
                      Nov 6 - Nov 25 (3 guests)
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[18px]">Search by region</div>
                <div className="grid grid-cols-4">
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Abu Dhabi"))}
                  >
                    <img src={AbuDhabi}></img>
                    <div className="text-center">Abu Dhabi</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Ajman"))}
                  >
                    <img src={Ajman}></img>
                    <div className="text-center">Ajman</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Dubai"))}
                  >
                    <img src={Dubai}></img>
                    <div className="text-center">Dubai</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Fujairah"))}
                  >
                    <img src={Fujairah}></img>
                    <div className="text-center">Fujairah</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Ras Al-Khaimah"))}
                  >
                    <img src={RasAlKhaimah}></img>
                    <div className="text-center">Ras Al-Khaimah</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Sharjah"))}
                  >
                    <img src={Sharjah}></img>
                    <div className="text-center">Sharjah</div>
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => dispatch(setRegion("Umm Al-Quwain"))}
                  >
                    <img src={UmmAlQuwain}></img>
                    <div className="text-center">Umm Al-Quwain</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 1 ? (
          <Modal.Body>
            <div>
              <SelectionGroup
                defaultItem={datePickerIndex}
                className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max mx-auto my-[20px] text-[#959595]"
                SelectedItemMask="shadow-md font-bold text-black"
              >
                <SelectionItem
                  SelectedItem={
                    <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]">
                      <div>Dates</div>
                      <img src={light} alt=""></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]"
                      onClick={() => {
                        setOnlyMonthPicker(false);
                        setDatePickerIndex(0);
                      }}
                    >
                      <div>Dates</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]">
                      <div>Months</div>
                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]"
                      onClick={() => {
                        setOnlyMonthPicker(true);
                        setDatePickerIndex(1);
                      }}
                    >
                      <div>Months</div>
                    </div>
                  }
                />
                {/* <SelectionItem
                  SelectedItem={
                    <div className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px] shadow-md font-bold text-black">
                      <div>Flexible</div>
                      <img src={light}></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[120px] rounded-[10px] flex items-center justify-center gap-[10px]"
                      onClick={() => {
                        setOnlyMonthPicker(false);
                        setDatePickerIndex(2);
                      }}
                    >
                      <div>Flexible</div>
                    </div>
                  }
                /> */}
              </SelectionGroup>
            </div>

            <Calendar
              highlightToday={false}
              range
              numberOfMonths={2}
              minDate={new Date()}
              onChange={setValue}
              value={value}
              onlyMonthPicker={onlyMonthPicker}
            />

            {/* <SelectionGroup
              defaultItem={0}
              className="m-[10px] flex gap-[8px] text-[#D5D5D5]"
            >
              <SelectionItem
                SelectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                    Exact dates
                  </div>
                }
                UnselectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                    Exact dates
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                    +-1day
                  </div>
                }
                UnselectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                    +-1day
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                    +-2day
                  </div>
                }
                UnselectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                    +-2day
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                    +-3day
                  </div>
                }
                UnselectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                    +-3day
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max border-[#5D00CF] text-[#5D00CF]">
                    +-7day
                  </div>
                }
                UnselectedItem={
                  <div className="px-[14px] py-[8px] border-[1px] rounded-[16px] w-max">
                    +-7day
                  </div>
                }
              />
            </SelectionGroup> */}
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 2 ? (
          <Modal.Body>
            <div className="w-[340px] p-[20px] space-y-[10px]">
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Adults</div>
                  <div className="text-[#959595]">Age 13 or above</div>
                </div>
                <div className="flex items-center">
                  <NumberSpin
                    value={guestsAdults}
                    onChange={setGuestsAdults}
                    min={0}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Children</div>
                  <div className="text-[#959595]">Age 2-12</div>
                </div>
                <div className="flex items-center">
                  <NumberSpin
                    value={guestsChildren}
                    onChange={setGuestsChildren}
                    min={0}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Infants</div>
                  <div className="text-[#959595]">Under 2</div>
                </div>
                <div className="flex items-center">
                  <NumberSpin
                    value={guestsInfants}
                    onChange={setGuestsInfants}
                    min={0}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Pets</div>
                  <div className="text-[#959595] underline">
                    Bringing a service animal?
                  </div>
                </div>
                <div className="flex items-center">
                  <NumberSpin
                    value={guestsPets}
                    onChange={setGuestsPets}
                    min={0}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
        {searchMode == 3 ? (
          <Modal.Body>
            <div className="w-[340px] p-[20px] space-y-[10px]">
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Bathroom</div>
                  <div className="text-[#959595]">Bathroom</div>
                </div>
                <div className="flex items-center">
                  {/* <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img> */}
                  <NumberSpin value={bathroom} onChange={setBathroom} min={1} />
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div>
                  <div className="font-semibold">Bedroom</div>
                  <div className="text-[#959595]">Bedroom</div>
                </div>
                <div className="flex items-center">
                  {/* <img src={minus}></img>
                  <div className="font-bold">1</div>
                  <img src={plus}></img> */}
                  <NumberSpin value={bedroom} onChange={setBedroom} min={1} />
                </div>
              </div>

              <div className="font-semibold">Square Feet</div>

              <SelectionGroup className="grid grid-cols-2">
                <SelectionItem
                  SelectedItem={
                    <div className="flex items-center">
                      <Checkbox checked={true} />
                      <div>&lt;100m</div>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="flex items-center"
                      onClick={() => setSquareFeet("<100m")}
                    >
                      <Checkbox checked={false} />
                      <div>&lt;100m</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="flex items-center">
                      <Checkbox checked={true} />
                      <div>500-1000</div>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="flex items-center"
                      onClick={() => setSquareFeet("500-1000m")}
                    >
                      <Checkbox checked={false} />
                      <div>500-1000</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="flex items-center">
                      <Checkbox checked={true} />
                      <div>100-500</div>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="flex items-center"
                      onClick={() => setSquareFeet("100-500m")}
                    >
                      <Checkbox checked={false} />
                      <div>100-500</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="flex items-center">
                      <Checkbox checked={true} />
                      <div>&lt;1000m</div>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="flex items-center"
                      onClick={() => setSquareFeet("<1000m")}
                    >
                      <Checkbox checked={false} />
                      <div>&lt;1000m</div>
                    </div>
                  }
                />
              </SelectionGroup>
            </div>
          </Modal.Body>
        ) : (
          <></>
        )}
      </Modal>
    </div>
  );
};
