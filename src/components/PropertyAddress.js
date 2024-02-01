import arrow from "../assets/images/PropertyAddress/Group.png";
import locationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import send from "../assets/images/PropertyAddress/Send message, Send, Share.png";
import heart from "../assets/images/PropertyAddress/heart-round-circle.png";
import user from "../assets/images/PropertyAddress/User,Profile.png";
import arrow1 from "../assets/images/Arrow1.png";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "../Actions/PageSlice";

export const PropertyAddress = () => {
  const mode = useSelector((state) => state.header.mode);
  const submode = useSelector((state) => state.header.submode);
  const metaData = useSelector((state) => state.nft.currentNFT.metaData);

  const page = useSelector((state) => state.page.page);

  const dispatch = useDispatch();
  return (
    <>
      {metaData ? (
        <div className="shadow-md w-full h-max p-[20px] rounded-[10px] space-y-[20px] bg-white">
          <div className="flex items-center gap-[10px]">
            {/* <div className="text-[#A4A4A4]">Buy</div> */}
            {mode == 1 ? (
              <div
                className="text-[#A4A4A4] cursor-pointer"
                onClick={() => {
                  dispatch(setPage(null));
                }}
              >
                Rent
              </div>
            ) : (
              <></>
            )}
            {mode == 3 && submode == 2 ? (
              <div className="text-[#A4A4A4]">My Listings</div>
            ) : (
              <></>
            )}
            <img src={arrow}></img>
            {page == "confirmation" ? (
              <>
                <div className="text-[#A4A4A4]">
                  {metaData.Area.areaEn}, Dubai
                </div>
                <img src={arrow}></img>
                <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
                  Confirmation and Pay
                </div>
              </>
            ) : (
              <div className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] ">
                {metaData.Area.areaEn}, Dubai
              </div>
            )}
          </div>

          {page == "confirmation" ? (
            <div className="shadow-md p-[16px] rounded-[16px] flex gap-[24px] items-center">
              <img
                src={arrow1}
                onClick={() => {
                  dispatch(setPage("detail"));
                }}
              ></img>
              <div className="text-[24px] font-bold">Confirmation and pay</div>
            </div>
          ) : (
            <></>
          )}
          {page != "confirmed" && page != "confirmation" ? (
            <div className="flex justify-between">
              <div className="space-y-[10px]">
                <div className="text-[20px]">
                  {metaData["Building Name"].buildingNameEn}
                </div>
                <div className="flex items-center">
                  <img src={locationPin} alt=""></img>
                  <div className="text-[#A4A4A4] ">
                    {metaData.Area.areaEn}, Dubai
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <div className="flex gap-[20px] ">
                  <div className="flex items-center py-[4px] px-[8px] gap-[10px] cursor-pointer shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full hover:shadow-[-1px_6px_10px_0_rgba(80,80,80,0.5)] hover:-translate-y-[3px]">
                    <img src={send} alt=""></img>
                    <div>Share</div>
                  </div>
                  <div className="flex items-center py-[4px] px-[8px] gap-[10px] cursor-pointer shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full hover:shadow-[-1px_6px_10px_0_rgba(80,80,80,0.5)] hover:-translate-y-[3px]">
                    <img src={heart} alt=""></img>
                    <div>Save</div>
                  </div>
                  {mode === 3 && submode === 2 ? (
                    <></>
                  ) : (
                    <div className="flex items-center py-[4px] px-[8px] gap-[5px] cursor-pointer bg-[#5D00CF] text-white shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] hover:-translate-y-[3px]">
                      <img src={user} alt=""></img>
                      <div>View Profile</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
