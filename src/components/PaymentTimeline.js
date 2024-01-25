import { useState } from "react";
import { Modal } from "react-bootstrap";
import icon from "../assets/images/Frame 1000005306 (2).png";

import closemini from "../assets/images/close-mini.png";
import NUSD from "../assets/images/NUSD.png";
import { useSelector } from "react-redux";

export const PaymentTimeline = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleCloseDetailModal = () => setShowDetailModal(false);
  const handleShowDetailModal = () => setShowDetailModal(true);

  const totalPrice = useSelector((state) => state.rent.totalPrice);
  const pricePerMonth = useSelector(
    (state) => state.nft.currentNFT.longtermrentalInfo.landlord.price_per_month
  );
  const refundableDeposit = useSelector(
    (state) =>
      state.nft.currentNFT.longtermrentalInfo.landlord.refundableDeposit
  );

  const date = useSelector((state) => state.rent.period);

  return (
    <div className="p-[24px] rounded-[12px] shadow-md h-max space-y-[24px]">
      <div className="flex justify-between">
        <div className="text-[24px]">Payment timeline</div>
        <div
          className="underline text-[12px] cursor-pointer"
          onClick={handleShowDetailModal}
        >
          View Detail
        </div>

        <Modal show={showDetailModal} centered onHide={handleCloseDetailModal}>
          <Modal.Body>
            <div className="p-[20px] space-y-[24px]">
              <div className="flex items-center justify-between">
                <div className="text-[24px] font-bold">Payment timeline</div>
                <img src={closemini} onClick={handleCloseDetailModal}></img>
              </div>
              <div className="text-[#B6B6B6]">
                Payment are pro-rated based on your chosen payment plan and
                dates of stay
              </div>
              <div className="flex gap-[10px] border-b-[1px] border-[#D5D5D5]">
                <div className="flex flex-col items-center w-max">
                  <img src={icon}></img>
                  <div className="bg-[#EFE8FD] w-[4px] h-[110px]"></div>
                  <img src={icon}></img>
                  <div className="bg-[#EFE8FD] w-[4px] h-[50px]"></div>
                  <img src={icon}></img>
                </div>
                <div className="w-full space-y-[10px]">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-bold">
                        Complete to reserve the apertment
                      </div>
                      <div>Due now</div>
                    </div>
                    <div className="flex items-center">
                      <img src={NUSD}></img>
                      <div>{totalPrice} NUSD</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end bg-[#F6F6F6] p-[8px] rounded-[16px]">
                    <div>
                      <div className="font-bold">Pro-rated charge</div>
                      <div>Rent (25% of rent per month)</div>
                    </div>
                    <div className="flex items-center">
                      <img src={NUSD}></img>
                      <div>{totalPrice * 0.25} NUSD</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-bold">Monthly Payment Rate</div>
                      <div>Due {date[0].toString()}</div>
                    </div>
                    <div className="flex items-center">
                      <img src={NUSD}></img>
                      <div>{pricePerMonth} NUSD</div>
                    </div>
                  </div>
                  {/* <div className="flex justify-between items-end bg-[#F6F6F6] p-[8px] rounded-[16px]">
                    <div>
                      <div className="font-bold">Pro-rated charges</div>
                      <div>Rent</div>
                      <div>Vat</div>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>

                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="bg-[#F6F6F6] p-[8px] rounded-[16px]">
                    <div className="font-bold">One-time charges</div>

                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Tourism fee</div>
                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Booking fee</div>
                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">
                          Exit cleaning & initial stocking fee
                        </div>
                        <div>(supplies, linens, towels)</div>
                      </div>
                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">Security deposit</div>
                      <div className="flex items-center">
                        <img src={NUSD}></img>
                        <div>400 NUSD</div>
                      </div>
                    </div>
                  </div> */}

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-bold">
                        Receive your {refundableDeposit} deposit back
                      </div>
                      <div>Usually within 15 calendar days of move-out</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="text-[#B6B6B6]">
        Payment are pro-rated based on your chosen payment plan and dates of
        stay
      </div>

      <div className="flex gap-[10px]">
        <div className="flex flex-col items-center w-max">
          <img src={icon}></img>
          <div className="bg-[#EFE8FD] w-[4px] h-[50px]"></div>
          <img src={icon}></img>
          <div className="bg-[#EFE8FD] w-[4px] h-[50px]"></div>
          <img src={icon}></img>
        </div>
        <div className="w-full space-y-[25px]">
          <div className="flex justify-between items-end">
            <div>
              <div className="font-bold">Complete to reserve the apertment</div>
              <div>Due now</div>
            </div>
            <div className="flex items-center">
              <img src={NUSD}></img>
              <div>{totalPrice} NUSD</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="font-bold">Monthly Payment Rate</div>
              <div>Due {date[0].toString()}</div>
            </div>
            <div className="flex items-center">
              <img src={NUSD}></img>
              <div>{pricePerMonth} NUSD</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="font-bold">
                Receive your {refundableDeposit} deposit back
              </div>
              <div>Usually within 15 calendar days of move-out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
