import profile from "../assets/images/Social.png";
import camera from "../assets/images/camera-front-style-3.png";
import homeuser from "../assets/images/home-user.png";
import locked from "../assets/images/Frame 1000005254.png";
import traveler from "../assets/images/airplane-plane-big.png";
import money from "../assets/images/Money.png";
import home from "../assets/images/store-modern.png";
import location from "../assets/images/Earth, Pin, Location, Direction.png";
import arrow from "../assets/images/PropertyAddress/Group.png";
import school from "../assets/images/school-building-2.png";
import mywork from "../assets/images/buyer-bag-buy.png";
import language from "../assets/images/Language, Translate.png";
import decade from "../assets/images/User,Profile2.png";
import song from "../assets/images/music-square.png";
import heart from "../assets/images/PropertyAddress/heart-round-circle.png";
import question from "../assets/images/question-loading.png";
import puzzle from "../assets/images/puzzle-right.png";
import book from "../assets/images/book-open-text.png";
import clock from "../assets/images/clock-time-coins-deposit.png";
import restaurant from "../assets/images/Knife, Fork, Restaurant, Food.png";
import reception from "../assets/images/reception-bell.png";
import star from "../assets/images/star-favorite-send.png";
import btn from "../assets/images/Button.png";

export const Profile = () => {
  return (
    <div className="pt-[6px] pb-[6px] bg-[#F2F2F2] w-full h-max">
      <div className="w-[80%] mx-auto bg-white shadow-md mt-[6px] rounded-[6px] p-[24px] flex gap-[40px]">
        <div className="min-w-[30%] flex flex-col justify-center items-center space-y-[40px] h-max">
          {/* <div> */}
          <img src={profile}></img>
          <div className="flex items-center text-white px-[8px] bg-[#5D00CF] rounded-[400px] py-[2px] w-max mx-auto">
            <img src={camera}></img>
            <div>Edit</div>
          </div>
          {/* </div> */}
          <div className="px-[14px] py-[8px] bg-[#5D00CF] rounded-[16px] w-full text-white text-center">
            Verify
          </div>
          {/* <div className="p-[24px] shadow-md rounded-[6px] space-y-[16px]">
            <div className="font-bold text-[16px]">Mode</div>
            <div className="">
              If there any lock on these switch mode, you should
              <span className="underline ml-[5px]">verify</span>
            </div>
            <div className="flex justify-between py-[6px] px-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={homeuser}></img>
                <div className="text-[#959595]">Host</div>
              </div>
              <img src={locked}></img>
            </div>
            <div className="flex justify-between shadow-md rounded-[24px] py-[6px] px-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={traveler}></img>
                <div>Traveler</div>
              </div>
              <img src={locked}></img>
            </div>
            <div className="flex justify-between py-[6px] px-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={money}></img>
                <div className="text-[#959595]">Buyer</div>
              </div>
              <img src={locked}></img>
            </div>
            <div className="flex justify-between py-[6px] px-[10px]">
              <div className="flex items-center gap-[10px]">
                <img src={home}></img>
                <div className="text-[#959595]">Seller</div>
              </div>
              <img src={locked}></img>
            </div>
          </div> */}
        </div>

        <div className="space-y-[20px] bg-blur">
          <div className="font-bold text-[24px]">Your profile</div>
          <div className="text-[#5A5A5A]">
            The information you share will be used across Airbnb to help other
            guests and Hosts get to know you
            <span className="underline text-[#6B349A] ml-[5px]">
              Learn more
            </span>
          </div>

          <div className="grid grid-cols-2 space-y-[0px] gap-[20px]">
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={location}></img>
              <div>Where llive: Bergen, Norway</div>
              <img src={arrow}></img>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={school}></img>
              <div className="text-[#959595]">Where l went to school</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={mywork}></img>
              <div className="text-[#959595]">My work</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={language}></img>
              <div className="text-[#959595]">Languages I speak</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={decade}></img>
              <div className="text-[#959595]">Decade l was born</div>
            </div>

            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={song}></img>
              <div className="text-[#959595]">
                My favorite song in high school
              </div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={heart}></img>
              <div className="text-[#959595]">I'm obsessed with</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={question}></img>
              <div className="text-[#959595]">My fun fact</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={puzzle}></img>
              <div className="text-[#959595]">My most useless skill</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={book}></img>
              <div className="text-[#959595]">My biography title would be</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={clock}></img>
              <div className="text-[#959595]">Ispend too much time</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={restaurant}></img>
              <div className="text-[#959595]">Pets</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={restaurant}></img>
              <div className="text-[#959595]">What's for breakfast</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={reception}></img>
              <div className="text-[#959595]">For guests, l always</div>
            </div>
            <div className="py-[20px] border-b-[1px] border-[#E3E3E3] gap-[12px] flex items-center w-full">
              <img src={star}></img>
              <div className="text-[#959595]">What makes my home unique</div>
            </div>
          </div>

          <div className="font-bold text-[18px]">About you</div>
          <div className="globalInputForm p-[10px] w-[70%]">
            <textarea
              className="w-full"
              placeholder="Write something fun and punchy."
            ></textarea>
          </div>
          <div className="underline text-[#6B349A]">Add intro</div>

          <div className="w-full h-[1px] bg-[#E3E3E3]"></div>
          <div className="space-y-[10px]">
            <div className="font-bold text-[18px]">What you're into</div>
            <div className="font-bold text-[#959595]">
              Find common ground with other guests and Hosts by adding interests
              to your profile.
            </div>
            <div className="flex gap-[10px]">
              <img src={btn}></img>
              <img src={btn}></img>
              <img src={btn}></img>
            </div>
            <div className="underline text-[#6B349A]">
              Add interests and sports
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E3E3E3]"></div>
          <div>
            <div className="font-bold text-[18px]">Your past trips</div>
            <div className="font-bold text-[#959595]">
              Show the destinations I've traveled to.
            </div>
            <div className="grid grid-cols-4 gap-[20px]">
              <div className="p-[24px] rounded-[6px] shadow-md">
                <div>2022</div>
                <div className="font-bold text-[18px]">
                  Tingstadsvas... Sweden
                </div>
              </div>
              <div className="p-[24px] rounded-[6px] shadow-md">
                <div>2022</div>
                <div className="font-bold text-[18px]">
                  Tingstadsvas... Sweden
                </div>
              </div>
              <div className="p-[24px] rounded-[6px] shadow-md">
                <div>2022</div>
                <div className="font-bold text-[18px]">
                  Tingstadsvas... Sweden
                </div>
              </div>
              <div className="p-[24px] rounded-[6px] shadow-md">
                <div>2022</div>
                <div className="font-bold text-[18px]">
                  Tingstadsvas... Sweden
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#E3E3E3]"></div>

          <div className="flex justify-end">
            <div className="rounded-[16px] px-[18px] py-[10px] bg-[#5D00CF] text-center w-max text-white">
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
