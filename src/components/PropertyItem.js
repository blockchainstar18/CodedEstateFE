import image from "../assets/images/image.jpg";
import image1 from "../assets/images/image.png";
import NUSD from "../assets/images/NUSD.png";
import LocationPin from "../assets/images/PropertyAddress/Pin, Location.png";
import icon from "../assets/images/icon.png";
import icon1 from "../assets/images/icon (1).png";
import icon2 from "../assets/images/icon (2).png";
import heart from "../assets/images/Frame 1000005004.png";

import btnnext from "../assets/images/carousel/Frame 1000005236.png";
import btnprev from "../assets/images/carousel/Frame 1000005237.png";
import NUSD1 from "../assets/images/carousel/Frame.png";

import Carousel from "react-bootstrap/Carousel";

import { useDispatch } from "react-redux";
import { setId } from "../Actions/PropertySlice";
import { useNavigate } from "react-router-dom";

export const PropertyItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full shadow-md rounded-[10px] p-[10px] relative">
      <Carousel
        className="w-full"
        interval={null}
        fade={true}
        prevIcon={<img src={btnprev}></img>}
        nextIcon={<img src={btnnext}></img>}
      >
        <Carousel.Item>
          <img src={image} className="rounded-[10px] w-full h-[200px]"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image1} className="rounded-[10px] w-full h-[200px]"></img>
        </Carousel.Item>
      </Carousel>

      <div className="flex items-center ml-[10px] my-[10px] font-semibold text-[14px] gap-[10px]">
        <img src={NUSD1}></img>

        <div className="font-bold text-[16px]">NUSD</div>
      </div>

      <div className="flex items-center text-[#959595] ml-[10px] gap-[10px]">
        <img src={LocationPin}></img>
        <div>Los Angeles, CA</div>
      </div>
      <div className="flex items-center gap-[10px] text-[#959595] w-full">
        <img src={icon}></img>
        <div>350</div>

        <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>
        <img src={icon1}></img>
        <div>5</div>
        <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>

        <img src={icon2}></img>
        <div>1</div>
      </div>

      <div className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px]">
        Verify
      </div>
    </div>
  );
};
