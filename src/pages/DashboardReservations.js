import arrow from "../assets/images/dashboardreservations/Arrow.png";
import filter from "../assets/images/dashboardreservations/Group1.png";
import output from "../assets/images/dashboardreservations/Group2.png";
import print from "../assets/images/dashboardreservations/Group.png";
import folder from "../assets/images/dashboardreservations/folders.png";

import star from "../assets/images/dashboardreservations/Frame 1000001460.png";
import verified from "../assets/images/dashboardreservations/Frame 1000004812.png";
import joined from "../assets/images/dashboardreservations/Frame 1000004813.png";
import home from "../assets/images/dashboardreservations/Frame 1000001460 (1).png";

import light from "../assets/images/light.png";

import close from "../assets/images/Group 1000004790.png";
import profile from "../assets/images/Profile.png";

import { useState } from "react";
import { Modal } from "react-bootstrap";

export const DashboardReservations = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="bg-white w-full mx-[5px] mb-[5px] rounded-[8px] shadow-md flex flex-col p-[16px]">
      <div className="flex items-center justify-between">
        <div className="p-[4px] rounded-[16px] shadow-md">
          <img src={arrow}></img>
        </div>

        <div className="flex gap-[6px] text-[#5D00CF]">
          <div className="flex items-center shadow-md rounded-[16px] px-[14px] gap-[8px] py-[4px]">
            <img src={filter}></img>
            <div>Filter</div>
          </div>
          <div className="flex items-center shadow-md rounded-[16px] px-[14px] gap-[8px] py-[4px]">
            <div>Export</div>
            <img src={output}></img>
          </div>
          <div className="flex items-center shadow-md rounded-[16px] px-[14px] gap-[8px] py-[4px]">
            <img src={print}></img>
            <div>Print</div>
          </div>
        </div>
      </div>
      <div className="font-bold text-[24px] my-[16px]">Reservations</div>

      <div className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] my-[16px]">
        <div className="w-[150px] rounded-[10px] flex items-center justify-center gap-[10px] px-[10px] py-[6px]">
          <div>Upcoming</div>
        </div>
        <div className="w-[150px] rounded-[10px] flex items-center justify-center gap-[10px] px-[10px] py-[6px]">
          <div>Completed</div>
        </div>
        <div className="w-[150px] rounded-[10px] flex items-center justify-center gap-[10px] px-[10px] py-[6px]">
          <div>Canceled</div>
        </div>
        <div className="w-[150px] rounded-[10px] flex items-center justify-center gap-[10px] px-[10px] py-[6px] shadow-md font-bold text-black ">
          <div>All</div>
          <img src={light}></img>
        </div>
      </div>

      <table>
        <tr className="text-[#959595] w-full">
          <td className="pl-[10px]">Status</td>
          <td>Guests</td>
          <td>Check-in</td>
          <td>Checkout</td>
          <td>Booked</td>
          <td>Listing</td>
          <td>Confirmation Code</td>
          <td>Total Payout</td>
          <td></td>
        </tr>
        <tr className="w-full shadow-md rounded-[8px] items-center">
          <td className="text-[#38A569] pl-[10px]">Past guest</td>
          <td>
            <div className="underline">Jacob Jones</div>
            <div className="text-[#959595]">3 adults</div>
          </td>
          <td>Aug 27, 2023</td>
          <td>Aug 30, 2023</td>
          <td>
            <div className="underline">Aug 7, 2023</div>
            <div className="text-[#959595]">9:21 PM CET</div>
          </td>
          <td>Modern Apartment in Bergen</td>
          <td>AA627188263KK</td>
          <td>3.724 NUSD</td>

          <td>
            <div className="flex items-center gap-[10px]">
              <div className="px-[12px] py-[4px] w-max rounded-[21px] shadow-md">
                Details
              </div>
              <img src={folder}></img>
            </div>
          </td>
        </tr>

        <tr className="w-full shadow-md rounded-[8px] items-center">
          <td className="text-[#ff0000] pl-[10px]">Canceled by guest</td>
          <td>
            <div className="underline">Jacob Jones</div>
            <div className="text-[#959595]">3 adults</div>
          </td>
          <td>Aug 27, 2023</td>
          <td>Aug 30, 2023</td>
          <td>
            <div className="underline">Aug 7, 2023</div>
            <div className="text-[#959595]">9:21 PM CET</div>
          </td>
          <td>Modern Apartment in Bergen</td>
          <td>AA627188263KK</td>
          <td>3.724 NUSD</td>

          <td>
            <div className="flex items-center gap-[10px]">
              <div
                className="px-[12px] py-[4px] w-max rounded-[21px] shadow-md"
                onClick={handleShow}
              >
                Details
              </div>

              <Modal
                show={show}
                onHide={handleClose}
                centered
                backdropClassName="_modal-backdrop"
              >
                <Modal.Body>
                  <div className="bg-[#F2F2F2] p-[8px] rounded-[8px] space-y-[8px] h-[500px] overflow-auto hiddenscrollbar">
                    <div className="p-[24px] w-[400px] bg-white rounded-[8px] shadow-md">
                      <div className="flex items-center pb-[16px] justify-between border-b-[1px] border-[#E3E3E3]">
                        <div className="text-[24px] font-bold">
                          Reservation details
                        </div>
                        <img src={close}></img>
                      </div>
                      <div className="py-[16px] border-b-[1px] border-[#E3E3E3]">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-[#B6B6B6]">Past guest</div>
                            <div className="font-bold text-[18px]">
                              Nicole Ametsreiter
                            </div>
                          </div>
                          <img src={profile}></img>
                        </div>
                        <div className="text-[#B6B6B6]">
                          Modern Apartment in Bergen
                        </div>
                        <div className="text-[#B6B6B6]">
                          Aug 27 - 30 (3 nights)
                        </div>
                        <div className="text-[#B6B6B6]">
                          3 guests ∙3,724.84 NUSD
                        </div>
                      </div>

                      <div className="font-bold pt-[16px]">
                        Nicole Ametsreiter
                      </div>
                      <div className="text-[#B6B6B6]">
                        Great Location for your stay in Bergen. 30min walk into
                        downtown Bergen, the tram is close too.
                      </div>
                      <div className="underline text-[#6B349A]">
                        Show review
                      </div>
                    </div>
                    <div className="p-[24px] w-[400px] bg-white rounded-[8px] shadow-md">
                      <div className="font-bold mb-[10px]">About Nicole</div>
                      <div className="flex items-center">
                        <img src={star}></img>
                        <div className="underline">
                          5.0 ratings from 2 reviews
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={verified}></img>
                        <div className="underline">Identity verified</div>
                      </div>
                      <div className="flex items-center">
                        <img src={joined}></img>
                        <div className="">Joined Aibnb in 2016</div>
                      </div>
                      <div className="flex items-center">
                        <img src={home}></img>
                        <div className="">Lives in Concord, MA</div>
                      </div>
                      <div className="underline text-[#6B349A]">
                        Show review
                      </div>

                      <div className="bg-[#5D00CF] rounded-[16px] text-white text-center px-[20px] py-[12px] mt-[40px]">
                        Send or request money
                      </div>

                      <div className="grid grid-cols-2 gap-[16px]">
                        <div className="bg-black rounded-[16px] text-white text-center px-[20px] py-[12px] mt-[16px]">
                          Message
                        </div>
                        <div className="bg-[#dddddd] rounded-[16px] text-white text-center px-[20px] py-[12px] mt-[16px]">
                          Call
                        </div>
                      </div>

                      <div className="w-full text-center mt-[20px]">
                        Phone number unvailable
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>

              <img src={folder}></img>
            </div>
          </td>
        </tr>
      </table>

      {/* <div className="flex gap-[12px]">
        <div className="w-[350px] shadow-md rounded-[8px]">
          <div className="p-[16px]">
            <div className="flex items-center w-full justify-between">
              <div>Arriving in 14 days</div>
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#C2C2C2]"></div>
            </div>
            <div className="text-[24px]">Ruairidh</div>
            <div>Oct 20-22</div>
            <div className="text-[#959595]">Moder Apartment in Bergen</div>
          </div>
          <div className="py-[12px] text-center border-t-[1px] border-[#E3E3E3]">
            Message
          </div>
        </div>

        <div className="w-[350px] shadow-md rounded-[8px]">
          <div className="p-[16px]">
            <div className="flex items-center w-full justify-between">
              <div>Arriving in 14 days</div>
              <div className="w-[40px] h-[40px] rounded-[20px] bg-[#C2C2C2]"></div>
            </div>
            <div className="text-[24px]">Ruairidh</div>
            <div>Oct 20-22</div>
            <div className="text-[#959595]">Moder Apartment in Bergen</div>
          </div>
          <div className="py-[12px] text-center border-t-[1px] border-[#E3E3E3]">
            Message
          </div>
        </div>
      </div> */}
    </div>
  );
};
