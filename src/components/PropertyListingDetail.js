import { useEffect, useState } from "react";
import NUSD from "../assets/images/NUSD.png";
import arrowdown from "../assets/images/arrowdown (2).png";
import { Toggle } from "./Toggle";
import { useSelector } from "react-redux";

export const PropertyListingDetail = ({
  token_id,
  setListNFT = () => {},
  editMetaData = () => {},
}) => {
  console.log(token_id);
  const [status, setStatus] = useState(false);
  const [price_per_month, setPrice] = useState(0);
  const [refundable_deposit, setRefundableDeposit] = useState(0);
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handle = (e) => {
    setRefundableDeposit(e.target.value);
  };

  const islisted = useSelector(
    (state) => state.nft.currentNFT.longtermrentalInfo.islisted
  );

  return (
    <div className="p-[24px] rounded-[12px] shadow-md w-full bg-white h-max space-y-[24px]">
      <div className="font-bold text-[18px]">Property Listing Details</div>
      <div className="p-[16px] rounded-[8px] shadow-md w-full space-y-[10px]">
        <div className="font-bold text-[18px]">Currency</div>
        <div className="px-[24px] py-[14px] rounded-[100px] shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <img src={NUSD}></img>
            <div>NUSD</div>
          </div>
          <img src={arrowdown}></img>
        </div>
        <div className="font-bold text-[18px]">Price per month</div>
        <div className="globalInputForm px-[20px] py-[10px] rounded-[16px]">
          <input
            className="w-full"
            value={price_per_month}
            onChange={handleChange}
            placeholder="125,000,000"
          />
        </div>
        {/* <div className="flex items-center justify-between">
          <div className="font-bold text-[18px]">Allow Auction</div>
          <Toggle
            onChange={() => {
              setStatus(!status);
            }}
            status={status}
          />
        </div> */}
        <div className="font-bold text-[18px]">Refundable Deposit</div>
        <div className="globalInputForm px-[20px] py-[10px] rounded-[16px]">
          <input
            className="w-full"
            value={refundable_deposit}
            onChange={handle}
            placeholder="125,000,000"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="font-bold text-[18px]">TOTAL AMOUNT</div>
          <div className="flex items-center gap-[4px]">
            <img src={NUSD}></img>
            <div className="text-[#4C37C3]">{price_per_month}</div>
            <div>NUSD / month </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex items-center gap-[4px]">
            <img src={NUSD}></img>
            <div className="text-[#4C37C3]">{refundable_deposit}</div>
            <div>NUSD in refundable deposit</div>
          </div>
        </div>
        {/* <div className="flex justify-between">
          <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
            Manage Guest Info...
          </div>
          <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
            Longer Stay Discount
          </div>
          <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
            Manage Availability
          </div>
        </div> */}
        {/* <div className="px-[12px] py-[4px] rounded-[100px] text-[#5B1DEE] shadow-md w-max">
          Manage Availability
        </div> */}

        <div
          className="px-[20px] py-[12px] rounded-[16px] text-center text-white bg-[#5D00CF] cursor-pointer"
          onClick={() => {
            setListNFT(
              token_id,
              true,
              "unibi",
              Number(price_per_month),
              Number(refundable_deposit),
              []
            );
          }}
        >
          List For Rental
        </div>

        <div className="flex gap-[16px]">
          <div
            className="px-[20px] py-[12px] rounded-[16px] text-center text-white bg-black w-full cursor-pointer"
            onClick={editMetaData}
          >
            Edit Metadata
          </div>
          <div
            className={`px-[20px] py-[12px] rounded-[16px] text-center text-white w-full 
            ${
              islisted
                ? "bg-black cursor-pointer"
                : "bg-[#E3E3E3] cursor-not-allowed"
            }`}
            onClick={() => {
              if (islisted) setListNFT(token_id, false, "unibi", 0, 0, []);
            }}
          >
            Unlist Property
          </div>
        </div>
      </div>
    </div>
  );
};
