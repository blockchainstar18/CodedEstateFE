import icon2 from "../assets/images/icon (2).png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import location from "../assets/images/location.png";
import logo from "../assets/images/image 7.png";
import arrow1 from "../assets/images/Arrow.png";
import SwimmingPool from "../assets/images/home-house-click.png";
import Heart from "../assets/images/Money, Banknote, Hand.png";
import Star from "../assets/images/users-profile-group.png";
import gardenView from "../assets/images/Frame 1000001460.png";
import Cityskylineview from "../assets/images/Frame 1000001460 (5).png";
import kitchen from "../assets/images/Frame 1000001460 (1).png";
import dework from "../assets/images/Frame 1000001460 (2).png";
import pool from "../assets/images/Frame 1000001460 (3).png";
import sa from "../assets/images/Frame 1000001460 (4).png";
import wifi from "../assets/images/Frame 1000001460 (6).png";
import fpp from "../assets/images/Frame 1000001460 (7).png";
import cma from "../assets/images/Frame 1000001460 (8).png";
import tv from "../assets/images/Frame 1000001460 (9).png";
import close from "../assets/images/Group 1000004790.png";

import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setHeaderMode } from "../Actions/HeaderSlice";
import { setDashboardMode } from "../Actions/DashboardSlice";
import { setSomeoneToContact } from "../Actions/MessageSlice";
import { Checkbox } from "./Checkbox";
import { setUploadingData } from "../Actions/NFTSlice";

export const PropertyDetail = ({ editable }) => {
  const [showOfferModal, setShowOfferModal] = useState(false);
  const handleCloseOfferModal = () => setShowOfferModal(false);
  const handleShowOfferModal = () => setShowOfferModal(true);

  const [showDescriptionModal, setShowDescriptionModal] = useState(false);
  const handleCloseDescriptionModal = () => setShowDescriptionModal(false);
  const handleShowDescriptionModal = () => setShowDescriptionModal(true);

  const [description, setDescription] = useState("");
  const [tempDescription, setTempDescription] = useState("");

  const metaData = useSelector((state) => state.nft.currentNFT.metaData);
  const landlord = useSelector(
    (state) => state.nft.currentNFT.NftInfo?.access.owner
  );

  const headerMode = useSelector((state) => state.header.submode);
  const dispatch = useDispatch();

  const defaultOffers = {
    garden_View: false,
    city_Skyline_View: false,
    kitchen: false,
    wifi: false,
    dedicated_Workspace: false,
    free_Parking_On_Premiese: false,
    pool: false,
    carbon_Monoxide_Alarm: false,
    smoking_Alarm: false,
    tv: false,
  };
  const [offers, setOffers] = useState(defaultOffers);
  const [tempOffers, setTempOffers] = useState(defaultOffers);

  const metaDataDescription = useSelector(
    (state) => state.nft.currentNFT.metaData.description
  );
  const metaDataOffers = useSelector(
    (state) => state.nft.currentNFT.metaData.offers
  );

  useEffect(() => {
    // if (editable) {
    // } else {
    if (metaDataDescription) setDescription(metaDataDescription);
    if (metaDataOffers) setOffers(metaDataOffers);
    // }
  }, []);

  useEffect(() => {
    if (editable) {
      dispatch(
        setUploadingData({
          description: description,
          offers: offers,
        })
      );
    }
  }, [description, offers]);

  return (
    <>
      {metaData && landlord ? (
        <div className="shadow-md w-full rounded-[10px] p-[20px] space-y-[24px] bg-white">
          {headerMode == 2 ? (
            <></>
          ) : (
            <div className="flex items-center justify-between">
              <div className="text-[24px]">
                Landlord:
                {" " +
                  landlord?.substring(0, 8) +
                  "..." +
                  landlord?.substring(landlord?.length - 7)}
              </div>
              {/* <div className="bg-[#5B1DEE] text-white px-[20px] py-[12px] rounded-[16px] flex items-center gap-[4px]">
            <img src={delivery}></img>
            <div>Virtual tour</div>
          </div> */}
              <div
                className="px-[24px] py-[8px] cursor-pointer bg-[#5D00CF] text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] hover:-translate-y-[3px]"
                onClick={() => {
                  dispatch(setSomeoneToContact(landlord));
                  dispatch(
                    setHeaderMode({
                      mode: 3,
                      submode: 3,
                    })
                  );
                  dispatch(setDashboardMode(3));
                }}
              >
                Contact
              </div>
            </div>
          )}

          {/* <div className="flex gap-[20px] text-[18px] ">
            <div>
              <div>Bedroom</div>
              <div className="flex items-center">
                <img src={icon2}></img>
                <div>2</div>
              </div>
            </div>
            <div>
              <div>Bathroom</div>
              <div className="flex items-center">
                <img src={icon1}></img>
                <div>2</div>
              </div>
            </div>
            <div>
              <div>Land area</div>
              <div className="flex items-center">
                <img src={icon}></img>
                <div>2</div>
              </div>
            </div>
          </div> */}

          {/* <div className="bg-[#E3E3E3] w-full h-[2px]"></div> */}

          <div className="space-y-[10px]">
            <div className="text-[24px]">Location</div>
            <div className="flex items-center text-[18px]  gap-[10px]">
              <img src={location}></img>
              <div>{metaData["Building Name"].buildingNameEn}</div>
            </div>
            <div className="text-[#959595]">{metaData.Area.areaEn}, Dubai</div>
          </div>
          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          {headerMode == 2 ? (
            <></>
          ) : (
            <div className="space-y-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={SwimmingPool}></img>
                <div>
                  <div className="text-[18px] ">Property type</div>
                  <div className="text-[#959595]">
                    {metaData["Property Type and Usage"].usageNameEn}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src={Star}></img>
                <div>
                  <div className="text-[18px] ">Maximum People</div>
                  <div className="text-[#959595]">4 people</div>
                </div>
              </div>
              <div className="flex items-center gap-[10px]">
                <img src={Heart}></img>
                <div>
                  <div className="text-[18px] ">Flexible payment plan</div>
                  <div className="text-[#959595]">
                    This Landlord accepts flexible payment plans
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="bg-[#E3E3E3] w-full h-[2px]"></div> */}

          {headerMode == 2 ? (
            <></>
          ) : (
            <div className="space-y-[10px]">
              <img src={logo}></img>
              <div>
                All transactions are done securely on the Nibiru blockchain
                through smart contracts, with the real world data verified
                on-chain by zero-knowledge proof.
              </div>
              {/* <div className="flex items-center text-[#6B349A] rounded-[10px] px-[10px] py-[5px] shadow-md w-max">
                <div className="">Learn more</div>
                <img src={arrow1}></img>
              </div> */}
            </div>
          )}

          {/* <div className="bg-[#E3E3E3] w-full h-[2px]"></div> */}
          <div>
            <div className="flex justify-between items-center mb-[10px]">
              <div className="text-[22px]">Description</div>
              {editable ? (
                <div
                  className="underline cursor-pointer"
                  onClick={() => {
                    setTempDescription(description);
                    handleShowDescriptionModal();
                  }}
                >
                  Edit
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>{description}</div>
          </div>

          <Modal
            show={showDescriptionModal}
            onHide={handleCloseDescriptionModal}
            centered
          >
            <Modal.Body>
              <div className="w-[500px]">
                <div className="flex items-center justify-between rounded-t-[8px] px-[20px] pt-[20px]">
                  <div className="font-bold text-[18px] text-center">
                    Description
                  </div>
                  <img src={close} onClick={handleCloseDescriptionModal}></img>
                </div>

                <div className="w-full h-[200px] p-[20px]">
                  <div className="globalInputForm p-[16px] h-full">
                    <textarea
                      className="w-full h-full"
                      value={tempDescription}
                      onChange={(e) => setTempDescription(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-full flex justify-end px-[20px] mb-[20px]">
                  <div
                    className="px-[20px] py-[8px] rounded-[16px] bg-[#5D00CF] text-white shadow-md cursor-pointer"
                    onClick={() => {
                      handleCloseDescriptionModal();
                      setDescription(tempDescription);
                    }}
                  >
                    Save
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

          <div className="space-y-[10px]">
            <div className="flex justify-between items-center mb-[10px]">
              <div className="text-[24px]">What this place offers</div>
              {editable ? (
                <div
                  className="underline cursor-pointer"
                  onClick={() => {
                    setTempOffers({ ...offers });
                    handleShowOfferModal();
                  }}
                >
                  Edit
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="grid grid-cols-2">
              {offers?.garden_View ? (
                <div className="flex items-center">
                  <img src={gardenView}></img>
                  <div>Garden View</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.city_Skyline_View ? (
                <div className="flex items-center">
                  <img src={Cityskylineview}></img>
                  <div>City skyline view</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.kitchen ? (
                <div className="flex items-center">
                  <img src={kitchen}></img>
                  <div>Kitchen</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.wifi ? (
                <div className="flex items-center">
                  <img src={wifi}></img>
                  <div>Wifi</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.dedicated_Workspace ? (
                <div className="flex items-center">
                  <img src={dework}></img>
                  <div>Dedicated Workspace</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.free_Parking_On_Premiese ? (
                <div className="flex items-center">
                  <img src={fpp}></img>
                  <div>Free Parking on premiese</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.pool ? (
                <div className="flex items-center">
                  <img src={pool}></img>
                  <div>Pool</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.carbon_Monoxide_Alarm ? (
                <div className="flex items-center">
                  <img src={cma}></img>
                  <div>Carbon monoxide alarm</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.smoking_Alarm ? (
                <div className="flex items-center">
                  <img src={sa}></img>
                  <div>Smoking alarm</div>
                </div>
              ) : (
                <></>
              )}
              {offers?.tv ? (
                <div className="flex items-center">
                  <img src={tv}></img>
                  <div>TV</div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] w-max cursor-pointer">
            Show All
          </div> */}

          <Modal show={showOfferModal} onHide={handleCloseOfferModal} centered>
            <Modal.Body>
              <div className="w-[500px]">
                <div className="flex items-center justify-between  rounded-t-[8px] px-[30px] py-[20px]">
                  <div className="font-bold text-[18px] text-center">
                    What this place offers
                  </div>
                  <img src={close} onClick={handleCloseOfferModal}></img>
                </div>

                <div className="h-[500px] overflow-auto scrollbarwidth mr-[20px]">
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        garden_View: !tempOffers.garden_View,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={gardenView}></img>
                      <div>Garden View</div>
                    </div>
                    <Checkbox checked={tempOffers.garden_View} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        city_Skyline_View: !tempOffers.city_Skyline_View,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={Cityskylineview}></img>
                      <div>City skyline view</div>
                    </div>
                    <Checkbox checked={tempOffers.city_Skyline_View} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        kitchen: !tempOffers.kitchen,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={kitchen}></img>
                      <div>Kitchen</div>
                    </div>
                    <Checkbox checked={tempOffers.kitchen} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        wifi: !tempOffers.wifi,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={wifi}></img>
                      <div>Wifi</div>
                    </div>
                    <Checkbox checked={tempOffers.wifi} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        dedicated_Workspace: !tempOffers.dedicated_Workspace,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={dework}></img>
                      <div>Dedicated Workspace</div>
                    </div>
                    <Checkbox checked={tempOffers.dedicated_Workspace} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        free_Parking_On_Premiese:
                          !tempOffers.free_Parking_On_Premiese,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={fpp}></img>
                      <div>Free Parking on premiese</div>
                    </div>
                    <Checkbox checked={tempOffers.free_Parking_On_Premiese} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        pool: !tempOffers.pool,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={pool}></img>
                      <div>Pool</div>
                    </div>
                    <Checkbox checked={tempOffers.pool} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        carbon_Monoxide_Alarm:
                          !tempOffers.carbon_Monoxide_Alarm,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={cma}></img>
                      <div>Carbon monoxide alarm</div>
                    </div>
                    <Checkbox checked={tempOffers.carbon_Monoxide_Alarm} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        smoking_Alarm: !tempOffers.smoking_Alarm,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={sa}></img>
                      <div>Smoking alarm</div>
                    </div>
                    <Checkbox checked={tempOffers.smoking_Alarm} />
                  </div>
                  <div
                    className="flex items-center border-b-[1px] border-[#E3E3E3] py-[6px] mx-[20px] justify-between"
                    onClick={() =>
                      setTempOffers({
                        ...tempOffers,
                        tv: !tempOffers.tv,
                      })
                    }
                  >
                    <div className="flex items-center">
                      <img src={tv}></img>
                      <div>TV</div>
                    </div>
                    <Checkbox checked={tempOffers.tv} />
                  </div>
                </div>

                <div className="w-full flex justify-end px-[20px] my-[20px]">
                  <div
                    className="px-[20px] py-[8px] rounded-[16px] bg-[#5D00CF] text-white shadow-md cursor-pointer"
                    onClick={() => {
                      setOffers({ ...tempOffers });
                      handleCloseOfferModal();
                    }}
                  >
                    Save
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
