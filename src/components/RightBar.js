import close from "../assets/images/close-mini.png";
import avatar from "../assets/images/Profile.png";

import star from "../assets/images/rightbar/Frame 1000001460.png";
import check from "../assets/images/rightbar/Frame 1000001461.png";
import joined from "../assets/images/rightbar/Frame 1000001461 (1).png";
import home from "../assets/images/rightbar/Frame 1000001460 (1).png";
import also from "../assets/images/rightbar/Frame 1000001461 (2).png";
import speak from "../assets/images/rightbar/Frame 1000001461 (3).png";

import money from "../assets/images/rightbar/Money.png";
import arrow from "../assets/images/rightbar/Arrow1.png";

import flag from "../assets/images/rightbar/Flag, Pin.png";
import help from "../assets/images/rightbar/Group.png";

export const RightBar = () => {
  return (
    <>
      <div className="flex justify-end">
        <img src={close} />
      </div>
      <div className="shadow-md p-[12px] rounded-[8px]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#B6B6B6]">Past guest</div>
            <div className="font-bold text-[18px]">Geir Bakka</div>
          </div>
          <img src={avatar} />
        </div>
        <div className="text-[#B6B6B6]">Modern Apartment in Bergen</div>
        <div className="text-[#B6B6B6]">Aug 1 - 4 (3 nights)</div>
        <div className="text-[#B6B6B6]">4 guests</div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px]">
        <div className="font-bold text-[18px]">About Geir</div>
        <div className="flex items-center">
          <img src={star} />
          <div className="underline">5.0 ratings from 5 reviews</div>
        </div>
        <div className="flex items-center">
          <img src={check} />
          <div className="underline">Identity verified</div>
        </div>
        <div className="flex items-center">
          <img src={joined} />
          <div className="text-[#5A5A5A]">Joined Aibnb in 2018</div>
        </div>
        <div className="flex items-center">
          <img src={home} />
          <div className="text-[#5A5A5A]">Lives in Kongsberg, Norway</div>
        </div>
        <div className="flex items-center">
          <img src={also} />
          <div className="text-[#5A5A5A]">Also a host</div>
        </div>
        <div className="flex items-center">
          <img src={speak} />
          <div className="text-[#5A5A5A]">
            Speaks Dansk, English, Deutsch, Norsk, Svenska
          </div>
        </div>

        <div className="text-[#4C37C3] underline">Show profile</div>
        <div className="text-white text-center bg-[#5D00CF] rounded-[16px] py-[8px] my-[10px]">
          Send or request money
        </div>
        <div className="grid grid-cols-2 gap-[10px]">
          <div className="text-white text-center bg-[#5D00CF] rounded-[16px] py-[8px]">
            Message
          </div>
          <div className="text-white text-center bg-[#E3E3E3] rounded-[16px] py-[8px]">
            Call
          </div>
        </div>
        <div className="w-full text-center mt-[10px]">
          Phone number unavailable
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px]">
        <div className="font-bold text-[18px]">Tenant details</div>
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E3E3E3]">
          <div>
            <div>Tenants</div>
            <div className="text-[#B6B6B6]">2 adults, 2 children</div>
          </div>
          <div className="text-[#4C37C3] underline">View</div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E3E3E3]">
          <div>
            <div>Check-in</div>
            <div className="text-[#B6B6B6]">3:00 PM - 5:00 PM</div>
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E3E3E3]">
          <div>
            <div>Check-out</div>
            <div className="text-[#B6B6B6]">Fri, Aug 4, 2023</div>
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E3E3E3]">
          <div>
            <div>Booking date</div>
            <div className="text-[#B6B6B6]">Fri, Aug 4, 2023</div>
          </div>
        </div>
        <div className="flex items-center justify-between py-[16px] border-b-[1px] border-[#E3E3E3]">
          <div>
            <div>Confirmation code</div>
            <div className="text-[#B6B6B6]">HMKS4YSNCY</div>
          </div>
        </div>
        <div className="text-[#4C37C3] underline mt-[10px]">Show calender</div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div className="font-bold text-[18px]">Tenant paid</div>
        <div className="flex justify-between w-full">
          <div className="text-[#B6B6B6]">1,290.00 NUSD x 3 nights</div>
          <div className="text-[#B6B6B6]">3,870.00 NUSD</div>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-[#B6B6B6]">Guest service fee</div>
          <div className="text-[#B6B6B6]">682.94 NUSD</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Total NUSD</div>
          <div>4,552.94 NUSD</div>
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div className="font-bold text-[18px]">Landlord total payout</div>
        <div className="flex justify-between w-full">
          <div className="text-[#B6B6B6]">3 nights room fee</div>
          <div className="text-[#B6B6B6]">3,870.00 NUSD</div>
        </div>
        <div className="text-[#4C37C3] underline">Show breakdowns</div>
        <div className="flex justify-between w-full">
          <div className="text-[#B6B6B6]">Host service fee (3.0% + VAT)</div>
          <div className="text-[#B6B6B6]">-145.16 NUSD</div>
        </div>
        <div className="flex justify-between w-full">
          <div>Total NUSD</div>
          <div>4,552.94 NUSD</div>
        </div>
        <div className="w-full h-[1px] bg-[#E3E3E3]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={money} />
            <div>Transaction History</div>
          </div>
          <img src={arrow} />
        </div>
        <div className="w-full h-[1px] bg-[#E3E3E3]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={money} />
            <div>VAT Invoice</div>
          </div>
          <img src={arrow} />
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div className="font-bold text-[18px]">Calendar note</div>
        <div className="text-[#B6B6B6]">
          Add a private reminder for these dates that only you can view
        </div>
        <div className="globalInputForm p-[10px]">
          <textarea className="w-full" placeholder="Write a note" />
        </div>
        <div className="bg-[#B6B6B6] text-white rounded-[16px] py-[8px] text-center">
          Save
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div>
          If your place or belongings were damaged or extra cleaning was needed,
          we're here to help.
        </div>
        <div className="bg-black text-white rounded-[16px] py-[8px] text-center">
          File a request
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div className="font-bold text-[18px]">Support</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={flag} />
            <div>Report this guest</div>
          </div>
          <img src={arrow} />
        </div>
        <div className="w-full h-[1px] bg-[#E3E3E3]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={help} />
            <div>Get help</div>
          </div>
          <img src={arrow} />
        </div>
      </div>
      <div className="shadow-md p-[12px] rounded-[8px] space-y-[10px]">
        <div className="font-bold text-[18px]">Common questions</div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={flag} />
            <div>Report this guest</div>
          </div>
          <img src={arrow} />
        </div>
        <div className="w-full h-[1px] bg-[#E3E3E3]" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <img src={help} />
            <div>Get help</div>
          </div>
          <img src={arrow} />
        </div>
      </div>
    </>
  );
};
