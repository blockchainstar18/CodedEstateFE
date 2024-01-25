import star from "../assets/images/Star1.png";
import { Dropdown, ProgressBar } from "react-bootstrap";
import star1 from "../assets/images/Star2.png";
import check from "../assets/images/Check mark, Сertificate.png";
import house from "../assets/images/house-key.png";
import message from "../assets/images/Messages, Chat.png";
import map from "../assets/images/map-pin-location.png";
import sale from "../assets/images/Sale, Discount, Promotion, Label.png";
import profile from "../assets/images/Profile.png";
import StarRatings from "react-star-ratings";
import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";
import close from "../assets/images/Group 1000004790.png";

import { useState } from "react";
import { Modal } from "react-bootstrap";

export const Reviews = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const handleCloseReviewModal = () => setShowReviewModal(false);
  const handleShowReviewModal = () => setShowReviewModal(true);

  return (
    <div className="shadow-md p-[20px] rounded-[10px] space-y-[20px]">
      <div className="shadow-md w-full p-[20px] rounded-[10px]">
        <div className="flex items-center gap-[10px] font-bold">
          <img src={star}></img>
          <div>4.48</div>
          <div>31 reviews</div>
        </div>
        <div className="grid grid-cols-7  mt-[20px] bg-[#B6B6B6] gap-[2px]">
          <div className="bg-white px-[10px]">
            <div className="mb-[5px]">Overall rating</div>
            <div className="flex items-center gap-[5px] text-[12px]">
              <div>5</div>
              <ProgressBar now={60}></ProgressBar>
            </div>
            <div className="flex items-center gap-[5px] text-[12px]">
              <div>4</div>
              <ProgressBar now={60}></ProgressBar>
            </div>
            <div className="flex items-center gap-[5px] text-[12px]">
              <div>3</div>
              <ProgressBar now={60}></ProgressBar>
            </div>
            <div className="flex items-center gap-[5px] text-[12px]">
              <div>2</div>
              <ProgressBar now={60}></ProgressBar>
            </div>
            <div className="flex items-center gap-[5px] text-[12px]">
              <div>1</div>
              <ProgressBar now={60}></ProgressBar>
            </div>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Cleanliness</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={star1} className="self-start"></img>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Accuracy</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={check} className="self-start"></img>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Check-in</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={house} className="self-start"></img>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Communication</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={message} className="self-start"></img>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Locaion</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={map} className="self-start"></img>
          </div>
          <div className="bg-white px-[20px] flex flex-col justify-between">
            <div>
              <div>Value</div>
              <div className="font-bold">3.9</div>
            </div>

            <img src={sale} className="self-start"></img>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[40px]">
        <div className="shadow-md w-full p-[20px] rounded-[10px] space-y-[20px]">
          <div className="flex items-center gap-[10px]">
            <img src={profile}></img>
            <div>
              <div className="font-bold">Mantas</div>
              <div>Vilnius, Lithuania</div>
            </div>
          </div>
          <div className="flex items-center">
            <StarRatings
              rating={3.5}
              starRatedColor="#F8BC30"
              starDimension="20px"
              starSpacing="0px"
            ></StarRatings>
            <div className="text-[#959595]">1 week ago</div>
          </div>
          <div className="text-[#959595]">
            Great views on the road to the cabin. Nice suroundings. Not too
            remote, there are a few houses around. abin has electricity.
          </div>
        </div>
        <div className="shadow-md w-full p-[20px] rounded-[10px] space-y-[20px]">
          <div className="flex items-center gap-[10px]">
            <img src={profile}></img>
            <div>
              <div className="font-bold">Mantas</div>
              <div>Vilnius, Lithuania</div>
            </div>
          </div>
          <div className="flex items-center">
            <StarRatings
              rating={3.5}
              starRatedColor="#F8BC30"
              starDimension="20px"
              starSpacing="0px"
            ></StarRatings>
            <div className="text-[#959595]">1 week ago</div>
          </div>
          <div className="text-[#959595]">
            Great views on the road to the cabin. Nice suroundings. Not too
            remote, there are a few houses around. abin has electricity.
          </div>

          <div className="underline text-[#6b349a] ">Show more</div>
        </div>
      </div>

      <div
        className="bg-[#202020] text-white rounded-[20px] px-[20px] py-[10px] w-max"
        onClick={handleShowReviewModal}
      >
        Show All 31 reviews
      </div>

      <Modal show={showReviewModal} onHide={handleCloseReviewModal} centered>
        <Modal.Body>
          <div className="p-[16px] space-y-[24px]">
            <div className="flex justify-end">
              <img src={close} onClick={handleCloseReviewModal}></img>
            </div>

            <div className="flex gap-[24px]">
              <div className="p-[16px] shadow-md rounded-[12px] h-max w-[250px]">
                <div className="flex items-center gap-[10px] font-bold">
                  <img src={star}></img>
                  <div>4.48</div>
                </div>
                <div className="space-y-[4px] mb-[10px]">
                  <div className="mb-[5px]">Overall rating</div>
                  <div className="flex items-center gap-[5px] text-[12px]">
                    <div>5</div>
                    <ProgressBar now={60}></ProgressBar>
                  </div>
                  <div className="flex items-center gap-[5px] text-[12px]">
                    <div>4</div>
                    <ProgressBar now={60}></ProgressBar>
                  </div>
                  <div className="flex items-center gap-[5px] text-[12px]">
                    <div>3</div>
                    <ProgressBar now={60}></ProgressBar>
                  </div>
                  <div className="flex items-center gap-[5px] text-[12px]">
                    <div>2</div>
                    <ProgressBar now={60}></ProgressBar>
                  </div>
                  <div className="flex items-center gap-[5px] text-[12px]">
                    <div>1</div>
                    <ProgressBar now={60}></ProgressBar>
                  </div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={star1}></img>
                    <div>Cleanliness</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={check}></img>
                    <div>Accuracy</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={house}></img>
                    <div>Check-in</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={message}></img>
                    <div>Communication</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={map}></img>
                    <div>Location</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
                <div className="items-center flex justify-between border-b-[1px] border-[#B6B6B6] py-[8px]">
                  <div className="items-center flex">
                    <img src={sale}></img>
                    <div>Value</div>
                  </div>
                  <div className="font-bold">3.9</div>
                </div>
              </div>
              <div className="p-[16px] shadow-md rounded-[12px] max-w-[600px] max-h-[550px] space-y-[12px] flex flex-col">
                <div className="flex justify-between">
                  <div className="font-bold text-[20px]">31 reviews</div>
                  <Dropdown>
                    <Dropdown.Toggle>Most recent</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>asdfasdf</Dropdown.Item>
                      <Dropdown.Item>asdfadf</Dropdown.Item>
                      <Dropdown.Item>asdfadsfa</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                  <img src={search}></img>
                  <input placeholder="Search" className="w-full" />
                  <img src={slash}></img>
                </div>

                <div className="overflow-auto h-full">
                  <div className="shadow-md w-full p-[20px] rounded-[10px] space-y-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={profile}></img>
                      <div>
                        <div className="font-bold">Mantas</div>
                        <div>Vilnius, Lithuania</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <StarRatings
                        rating={3.5}
                        starRatedColor="#F8BC30"
                        starDimension="20px"
                        starSpacing="0px"
                      ></StarRatings>
                      <div className="text-[#959595]">1 week ago</div>
                    </div>
                    <div className="text-[#959595]">
                      Great views on the road to the cabin. Nice suroundings.
                      Not too remote, there are a few houses around. abin has
                      electricity.
                    </div>
                  </div>

                  <div className="shadow-md w-full p-[20px] rounded-[10px] space-y-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={profile}></img>
                      <div>
                        <div className="font-bold">Mantas</div>
                        <div>Vilnius, Lithuania</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <StarRatings
                        rating={3.5}
                        starRatedColor="#F8BC30"
                        starDimension="20px"
                        starSpacing="0px"
                      ></StarRatings>
                      <div className="text-[#959595]">1 week ago</div>
                    </div>
                    <div className="text-[#959595]">
                      Great views on the road to the cabin. Nice suroundings.
                      Not too remote, there are a few houses around. abin has
                      electricity.
                    </div>

                    <div className="underline text-[#6b349a] ">Show more</div>
                  </div>
                  <div className="shadow-md w-full p-[20px] rounded-[10px] space-y-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <img src={profile}></img>
                      <div>
                        <div className="font-bold">Mantas</div>
                        <div>Vilnius, Lithuania</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <StarRatings
                        rating={3.5}
                        starRatedColor="#F8BC30"
                        starDimension="20px"
                        starSpacing="0px"
                      ></StarRatings>
                      <div className="text-[#959595]">1 week ago</div>
                    </div>
                    <div className="text-[#959595]">
                      Great views on the road to the cabin. Nice suroundings.
                      Not too remote, there are a few houses around. abin has
                      electricity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
