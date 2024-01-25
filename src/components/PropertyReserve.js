import NUSD from "../assets/images/NUSD.png";
import calendar from "../assets/images/Calendar,Schedule.png";
import cross from "../assets/images/close-mini.png";
import { Calendar } from "react-multi-date-picker";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "../Actions/PageSlice";
import { setRentDetail } from "../Actions/RentSlice";

export const PropertyReserve = ({ action, hide }) => {
  // const options = {
  //   year: "numeric",
  //   month: "2-digit",
  //   day: "2-digit",
  // };

  const dates = useSelector((state) => state.rent.period);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const [value, setValue] = useState(dates);
  const navigate = useNavigate();
  const [showReserveModal, setShowReserveModal] = useState(false);
  const handleCloseReserveModal = () => setShowReserveModal(false);
  const handleShowReserveModal = () => setShowReserveModal(true);
  const dispatch = useDispatch();
  const [months, setMonths] = useState();
  const pricePerMonth = useSelector(
    (state) => state.nft.currentNFT.longtermrentalInfo.landlord.price_per_month
  );
  const [totalPayment, setTotalPayment] = useState();
  const fee = 300;
  const refundableDeposit = useSelector(
    (state) =>
      state.nft.currentNFT.longtermrentalInfo.landlord.refundable_deposit
  );
  useEffect(() => {
    if (value.length == 2) {
      // console.log(value[0]);
      const diffInMonths =
        (value[1].year - value[0].year) * 12 +
        (value[1].monthIndex - value[0].monthIndex) +
        1;
      setMonths(diffInMonths);
      setTotalPayment(diffInMonths * pricePerMonth + fee + refundableDeposit);
      dispatch(
        setRentDetail({
          period: value,
          totalPrice: diffInMonths * pricePerMonth + fee + refundableDeposit,
          guest: 1,
        })
      );
    } else setMonths(null);
  }, [value]);

  return (
    <div>
      {!hide ? (
        <>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-[18px]">Price</div>

              <div className="flex items-center text-[20px] gap-[5px]">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
                  {pricePerMonth}
                </div>
                <div>NUSD</div>
                <div className="text-[#959595]">/month</div>
              </div>
              {/* <div className="text-[#5B1DEE] underline">
                How do I get the best deal?
              </div> */}
            </div>
            <div>
              <div>Available from</div>
              <div className="text-[20px]">
                {new Date().toLocaleDateString("en-US", options)}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[16px] mt-[30px]">
            <div className="space-y-[10px]">
              <div className="text-[20px]">Check in</div>
              <div
                className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]"
                onClick={handleShowReserveModal}
              >
                <input
                  className="w-full text-[14px]"
                  placeholder="Select date"
                  value={value[0]?.toString()}
                ></input>
                <img src={calendar}></img>
              </div>
            </div>
            <div className="space-y-[10px]">
              <div className="text-[20px]">Check out</div>
              <div
                className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]"
                onClick={handleShowReserveModal}
              >
                <input
                  className="w-full text-[14px]"
                  placeholder="Select date"
                  value={value[1]?.toString()}
                ></input>
                <img src={calendar}></img>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {/* <div className="flex items-center px-[14px] py-[6px] rounded-[100px] shadow-md mt-[20px] gap-[10px] w-max">
            <img src={warning}></img>
            <div className="text-[#5B1DEE]">Available from 11 Nov 2023</div>
          </div> */}

      {/* <div className="space-y-[10px] mt-[30px]">
            <div>Guests</div>
            <div className="globalInputForm radius40 flex w-full px-[24px] py-[13px] gap-[6px] items-center text-[14px]">
              <input
                className="w-full text-[14px]"
                placeholder="1 guest"
              ></input>
            </div>
          </div> */}

      <div className="space-y-[16px] mt-[30px]">
        <div className="flex justify-between">
          <div className="text-[#B6B6B6]">Rent per month</div>
          <div className="flex items-center text-[18px] gap-[5px] font-normal">
            <img src={NUSD}></img>
            {/* <div className="text-[#5B1DEE] font-bold"></div> */}
            <div>{pricePerMonth} NUSD</div>
          </div>
        </div>
        {/* <div className="flex justify-between">
              <div className="text-[#B6B6B6]">Rent VAT per month</div>
              <div className="flex items-center text-[18px] gap-[5px] font-normal">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE] font-bold"></div>
                <div>375 NUSD</div>
              </div>
            </div> */}
        {/* <div className="flex justify-between">
              <div className="text-[#B6B6B6]">Non-refundable deposit</div>
              <div className="flex items-center text-[18px] gap-[5px] font-normal">
                <img src={NUSD}></img>
                <div className="text-[#5B1DEE] font-bold"></div>
                <div>375 NUSD</div>
              </div>
            </div> */}
        <div className="flex justify-between">
          <div className="text-[#B6B6B6] text-black">Monthly Subtotal</div>
          <div className="flex items-center text-[18px] gap-[5px] font-normal">
            <img src={NUSD}></img>
            <div className="text-[#5B1DEE] font-bold">{pricePerMonth}</div>
            <div>NUSD</div>
          </div>
        </div>
        <div className="bg-[#E3E3E3] w-full h-[2px]"></div>

        <div className="flex justify-between">
          <div className="text-[#B6B6B6]">Fee</div>
          <div className="flex items-center text-[18px] gap-[5px] font-normal">
            <img src={NUSD}></img>
            {/* <div className="text-[#5B1DEE] font-bold"></div> */}
            <div>{fee} NUSD</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#B6B6B6] text-black">Total Payment</div>
          <div className="flex items-center text-[18px] gap-[5px] font-normal">
            <img src={NUSD}></img>
            <div className="text-[#5B1DEE] font-bold">
              {totalPayment - refundableDeposit}
            </div>
            <div>({months} months)</div>
            <div>NUSD</div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3E3E3] w-full h-[2px] mt-[10px]"></div>
      <div className="flex justify-between font-normal items-center mt-[10px]">
        <div className="text-[#B6B6B6]">Refundable Deposit</div>
        <div className="flex items-center gap-[5px] text-[24px]">
          <img src={NUSD}></img>
          <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
            {refundableDeposit}
          </div>
          <div>NUSD</div>
        </div>
      </div>
      <div className="flex justify-between font-normal items-center mt-[10px]">
        <div className="font-bold">TOTAL</div>
        <div className="flex items-center gap-[5px] text-[24px]">
          <img src={NUSD}></img>
          <div className="text-[#5B1DEE] px-[4px] py-[2px] rounded-[8px] shadow-md">
            {totalPayment}
          </div>
          <div>NUSD</div>
        </div>
      </div>
      <Modal show={showReserveModal} onHide={handleCloseReserveModal} centered>
        <Modal.Body>
          <div className="w-full space-y-[20px] p-[24px] font-semibold">
            <div className="w-full flex justify-end">
              <img src={cross} onClick={handleCloseReserveModal}></img>
            </div>
            <div className="flex justify-between relative">
              <div>
                <div className="text-[24px] font-bold">{months} months</div>
                <div className="text-[#B6B6B6]">3 beds 0 baths</div>
              </div>
              <div className="p-[6px] rounded-[40px] shadow-md flex items-center w-[50%] gap-[20px]">
                <div className="px-[16px] rounded-[40px] shadow-md w-[50%] h-full">
                  <div className="font-bold">Check-in</div>
                  <div className="text-[#B6B6B6]">{value[0]?.toString()}</div>
                </div>
                <div className="h-full">
                  <div className="font-bold">Checkout</div>
                  <div className="text-[#B6B6B6]">{value[1]?.toString()}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <Calendar
                highlightToday={false}
                range
                numberOfMonths={2}
                minDate={new Date()}
                onChange={setValue}
                value={value}
              />
            </div>

            {/* <div className="">
                <div className="font-bold">November 2023</div>
                <div className="grid grid-cols-3 mt-[20px] gap-[10px]">
                  <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                    <div className="text-[12px] font-bold">Your Dates</div>
                    <div className="text-[#5B1DEE] text-[18px] font-bold">
                      2000 NUSD
                    </div>
                    <div className="text-[#959595]">/month</div>
                    <div>8 months & 24 days</div>
                  </div>
                  <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                    <div className="text-[12px] font-bold">Your Dates</div>
                    <div className="text-[#5B1DEE] text-[18px] font-bold">
                      2000 NUSD
                    </div>
                    <div className="text-[#959595]">/month</div>
                    <div>8 months & 24 days</div>
                  </div>
                  <div className="flex flex-col items-center rounded-[16px] py-[12px] shadow-md space-y-[4px]">
                    <div className="text-[12px] font-bold">Your Dates</div>
                    <div className="text-[#5B1DEE] text-[18px] font-bold">
                      2000 NUSD
                    </div>
                    <div className="text-[#959595]">/month</div>
                    <div>8 months & 24 days</div>
                  </div>
                </div>
              </div> */}

            <div className="flex items-center justify-between">
              <div
                className="text-[#6B349A] underline cursor-pointer"
                onClick={() => setValue([])}
              >
                Clear dates
              </div>
              <div
                className="bg-[#5D00CF] px-[16px] py-[10px] rounded-[16px] text-white cursor-pointer"
                onClick={handleCloseReserveModal}
              >
                Save
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <>{action}</>
    </div>
  );
};
