import send from "../assets/images/PropertyAddress/Send message, Send, Share.png";
import heart from "../assets/images/PropertyAddress/heart-round-circle.png";
import arrowLeft from "../assets/images/sidebar/arrowToLeft.png";

import image from "../assets/images/image.png";

export const ImageShow = () => {
  return (
    <div className="pt-[5px] bg-white w-full space-y-[20px] pb-[20px]">
      <div className="shadow-md w-[90%] mx-auto p-[20px] rounded-[10px] space-y-[20px]">
        <div className="flex justify-between">
          <img src={arrowLeft}></img>
          <div className="flex items-end">
            <div className="flex gap-[20px] ">
              <div className="flex items-center shadow-md py-[4px] px-[8px] rounded-[400px] gap-[10px]">
                <img src={send}></img>
                <div>Share</div>
              </div>
              <div className="flex items-center shadow-md py-[4px] px-[8px] rounded-[400px] gap-[10px]">
                <img src={heart}></img>
                <div>Save</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] mx-auto space-y-[20px]">
          <img src={image} className="w-full"></img>
          <div className="grid grid-cols-2 w-full gap-[20px]">
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
