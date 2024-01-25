import image from "../assets/images/dashboardListing/Frame 1000005568.png";
import nft from "../assets/images/dashboardListing/Frame 1000001399.png";

import social1 from "../assets/images/dashboardListing/Social.png";
import social2 from "../assets/images/dashboardListing/Social (2).png";
import social3 from "../assets/images/dashboardListing/Social (3).png";

import Private from "../assets/images/dashboardListing/private.png";
import Shared from "../assets/images/dashboardListing/shared.png";

import home from "../assets/images/dashboardListing/places/home.png";
import apartment from "../assets/images/dashboardListing/places/apartment.png";
import barn from "../assets/images/dashboardListing/places/Barn.png";
import bedandbreakfast from "../assets/images/dashboardListing/places/restaurant.png";
import boat from "../assets/images/dashboardListing/places/boat.png";
import camper from "../assets/images/dashboardListing/places/camper.png";
import container from "../assets/images/dashboardListing/places/container.png";

import tv from "../assets/images/dashboardListing/places/tv-retro.png";
import kitchen from "../assets/images/dashboardListing/places/kitchen.png";
import washer from "../assets/images/dashboardListing/places/Washing, Machine, Appliance.png";

import map from "../assets/images/dashboardListing/Frame 1000001319.png";

import Guests from "../assets/images/dashboardListing/Guests.png";
import Bedrooms from "../assets/images/dashboardListing/Bedrooms.png";
import Beds from "../assets/images/dashboardListing/Beds.png";
import Bathrooms from "../assets/images/dashboardListing/Bathrooms.png";

import wifi from "../assets/images/dashboardListing/Router, Internet, Wifi.png";
import arrowtoleft from "../assets/images/dashboardListing/chevron_right.png";
import arrowtoleft1 from "../assets/images/dashboardListing/chevron_right1.png";
import close from "../assets/images/dashboardListing/close-mini.png";

import uploadimage from "../assets/images/dashboardListing/uploadimage.png";
import edit from "../assets/images/dashboardListing/Pen, Edit, Write.png";

import house from "../assets/images/image.png";
import star from "../assets/images/Star.png";

import calendar from "../assets/images/dashboardListing/icon.png";
import adjust from "../assets/images/dashboardListing/icon (1).png";
import prepare from "../assets/images/dashboardListing/icon (2).png";

import verifiedStatus from "../assets/images/Frame 1000005306 (1).png";
import unverifiedStatus from "../assets/images/Frame 1000005306.png";
import statusverified from "../assets/images/icon2.png";

import festivalback from "../assets/images/festivalback.png";
import clock from "../assets/images/clock.png";

import dollar from "../assets/images/dashboardListing/Frame 10000055681.png";
import NUSD from "../assets/images/NUSD.png";

import { ProgressBar } from "react-bootstrap";
import { NumberSpin } from "../components/NumberSpin";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Gallery } from "../components/Gallery";

import { showGallery } from "../Actions/GallerySlice";
import { useDispatch } from "react-redux";
import { Checkbox } from "../components/Checkbox";

export const DashboardListing = () => {
  const [guestsValue, setGuestsValue] = useState(1);
  const [bedroomsValue, setBedroomsValue] = useState(1);
  const [bedsValue, setBedsValue] = useState(1);
  const [bathroomsValue, setBathroomsValue] = useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-white w-full sidebarheight rounded-[8px] shadow-md p-[16px] flex flex-col">
      {/* <div className="text-[24px]">Listing page</div>
      <div className="flex w-full h-full">
        <div className="m-auto flex flex-col items-center space-y-[24px]">
          <img src={image}></img>
          <div>You don't have any listings, please create a listing.</div>
          <div className="px-[20px] py-[12px] bg-[#202020] text-white rounded-[16px] w-max">
            Create Listing
          </div>
        </div>
      </div> */}
      <div className="w-full flex justify-end gap-[10px]">
        <div className="px-[14px] py-[6px] rounded-[21px] shadow-md text-white bg-[#202020]">
          Edit Photos
        </div>
        <div className="px-[14px] py-[6px] rounded-[21px] shadow-md">
          Save and Exit
        </div>
      </div>

      {/* <div className="w-full flex">
        <div className="mx-auto">
          <div className="flex items-center">
            <img src={verifiedStatus}></img>
            <div className="bg-[#EFE8FD] w-[120px] h-[4px]"></div>
            <img src={unverifiedStatus}></img>
            <div className="bg-[#EFE8FD] w-[120px] h-[4px]"></div>
            <img src={unverifiedStatus}></img>
            <div className="bg-[#EFE8FD] w-[120px] h-[4px]"></div>
            <img src={unverifiedStatus}></img>
          </div>
          <div className="grid grid-cols-4">
            <div>1. ID</div>
            <div>2. Ejari</div>
            <div>3. DLD</div>
            <div>4. Mint NFT Module</div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-full flex">
        {/* <div className="m-auto space-y-[20px] max-w-[440px]">
          <div className="text-center text-[32px] mb-[20px]">
            Get your NFTs ready for rental
          </div>
          <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
            <img src={social2}></img>
            <div>
              <div>Tell us about your place</div>
              <div className="text-[#8C8C8C]">
                Share some basic info, like where it is and how many guests can
                stay
              </div>
            </div>
          </div>
          <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
            <img src={social2}></img>
            <div>
              <div>Make it stand out</div>
              <div className="text-[#8C8C8C]">
                Add 5 or more photos plus a title and description. We’ll help
                you out.
              </div>
            </div>
          </div>
          <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
            <img src={social2}></img>
            <div>
              <div>Finish up and publish</div>
              <div className="text-[#8C8C8C]">
                Choose if you’d like to start with an experienced guest, set a
                starting price, and publish your listing.
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="m-auto max-w-[700px] text-center flex flex-col items-center space-y-[24px]">
          <img src={nft}></img>
          <div className="text-[#5B1DEE]">Step 1</div>
          <div className="text-[20px]">
            You don't have any listings, please create a listing.
          </div>
          <div className="text-[#8C8C8C]">
            In this step, wel’ll ask lorem ipsoan sdoansod asdjansojd naonsdan
            sodnaosdoansdon asodnasnd askdnajsnd ansdnas dadsals dnaos ndajspdj
            apsjd ajsdnaj sndjaksn dkansd
          </div>
          <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5B1DEE] text-white">
            Autofill Metamask
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] mb-[20px]">
            Which of these best describes your place
          </div>
          <div className="h-[400px] w-[450px] grid grid-cols-3 gap-[12px] overflow-y-auto pr-[10px] scrollbarwidth">
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={home}></img>
              <div>Home</div>
            </div>
          </div>
        </div> */}
        {/* <div className="m-auto">
          <div className="text-center text-[32px] mb-[20px]">
            What type of place will guest have?
          </div>
          <div className="w-[510px] space-y-[20px] px-[20px]">
            <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
              <img src={social2}></img>
              <div>
                <div>An entire place</div>
                <div className="text-[#8C8C8C]">
                  Guest have the whole place to themself
                </div>
              </div>
            </div>
            <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
              <img src={Private}></img>
              <div>
                <div>A Private room</div>
                <div className="text-[#8C8C8C]">
                  Guest sleep in private room but some areas may be shared with
                  you or others
                </div>
              </div>
            </div>
            <div className="p-[14px] gap-[14px] flex items-center shadow-md rounded-[8px]">
              <img src={Shared}></img>
              <div>
                <div>A shared room</div>
                <div className="text-[#8C8C8C]">
                  Guests sleep in a room or common area that may be shared with
                  you or others
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-[32px]">Pin point your location</div>
          <div className="text-[#595959]">Move the pin to your location</div>
          <img src={map}></img>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-[32px]">Confirm your address</div>
          <div className="text-[#595959] w-[400px] text-center">
            Your address is only shared with guest after they’ve made a
            reservation
          </div>
          <div className="p-[14px] rounded-[8px] shadow-md w-full">Street</div>
          <div className="p-[14px] rounded-[8px] shadow-md w-full">City</div>
          <div className="p-[14px] rounded-[8px] shadow-md w-full">
            State (optional)
          </div>
          <div className="p-[14px] rounded-[8px] shadow-md w-full">
            Zip coded (optional)
          </div>
          <div className="p-[14px] rounded-[8px] shadow-md w-full">
            County / Regional
          </div>
        </div> */}
        {/* <div className="m-auto flex flex-col items-center">
          <div className="text-[32px]">Share some basic about your place</div>
          <div className="text-[#595959]">You’ll add more details later</div>
          <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex items-center w-full justify-between max-w-[400px]">
            <div className="flex items-center gap-[5px]">
              <img src={Guests}></img>
              <div>Guests</div>
            </div>
            <NumberSpin value={guestsValue} min={1} onChange={setGuestsValue} />
          </div>
          <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex items-center w-full justify-between max-w-[400px]">
            <div className="flex items-center gap-[5px]">
              <img src={Bedrooms}></img>
              <div>Bedrooms</div>
            </div>
            <NumberSpin
              value={bedroomsValue}
              min={1}
              onChange={setBedroomsValue}
            />
          </div>
          <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex items-center w-full justify-between max-w-[400px]">
            <div className="flex items-center gap-[5px]">
              <img src={Beds}></img>
              <div>Beds</div>
            </div>
            <NumberSpin value={bedsValue} min={1} onChange={setBedsValue} />
          </div>
          <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex items-center w-full justify-between max-w-[400px]">
            <div className="flex items-center gap-[5px]">
              <img src={Bathrooms}></img>
              <div>Bathrooms</div>
            </div>
            <NumberSpin
              value={bathroomsValue}
              min={1}
              onChange={setBathroomsValue}
            />
          </div>
        </div> */}
        {/* <div className="m-auto flex flex-col items-center space-y-[40px]">
          <div className="text-[32px] font-bold">Next steps for you</div>
          <div className="flex gap-[12px]">
            <div className="p-[12px] space-y-[8px] shadow-md rounded-[5px]">
              <img src={wifi}></img>
              <div className="font-bold">Add check-in instructions</div>
              <div>Tell guests how to lock up and leave.</div>
              <div
                className="shadow-md px-[14px] py-[6px] text-[#5B1DEE] w-max rounded-[21px] flex items-center gap-[4px]"
                onClick={handleShow}
              >
                <img src={arrowtoleft}></img>
                <div>Add Detail</div>
              </div>
            </div>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Body>
                <div className="p-[16px] w-[500px] h-[650px] flex flex-col space-y-[10px]">
                  <div className="flex justify-between items-center">
                    <div className="font-bold">Add check-in instructions</div>
                    <img src={close} onClick={handleClose}></img>
                  </div>
                  <div className="font-bold">Description</div>
                  <div className="globalInputForm px-[12px] pt-[14px]">
                    <textarea placeholder="NUSD" className="w-full"></textarea>
                  </div>
                  <div className="font-bold">The correct images</div>
                  <div className="p-[16px] shadow-md rounded-[12px] flex flex-col h-full">
                    <div className="border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full">
                      <div className="m-auto flex flex-col items-center space-y-[20px]">
                        <img src={uploadimage}></img>
                        <div className="text-white px-[16px] py-[9px] rounded-[40px] bg-[#4C37C3]">
                          Upload file
                        </div>
                        <div className="text-[#595959]">
                          ... or drag and drop files
                        </div>
                      </div>
                    </div>
                    <div className="font-bold">Detail</div>
                    <div className="globalInputForm px-[12px] pt-[14px]">
                      <textarea
                        placeholder="Detail image.."
                        className="w-full"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end mt-[20px]">
                    <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5D00CF] text-white">
                      Save
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <div className="p-[12px] space-y-[8px] shadow-md rounded-[5px]">
              <img src={wifi}></img>
              <div className="font-bold">Add check-out instructions</div>
              <div>Tell guests how to lock up and leave.</div>
              <div className="shadow-md px-[14px] py-[6px] text-[#5B1DEE] w-max rounded-[21px] flex items-center gap-[4px]">
                <img src={arrowtoleft}></img>
                <div>Add Detail</div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] mb-[20px]">
            Tell guests what your place has to offer
          </div>
          <div className="w-[450px] grid grid-cols-3 gap-[12px]">
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={wifi}></img>
              <div>Wifi</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={tv}></img>
              <div>TV</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={kitchen}></img>
              <div>Kitchen</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={washer}></img>
              <div>Washer</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={boat}></img>
              <div>Boat</div>
            </div>
            <div className="p-[12px] rounded-[5px] shadow-md space-y-[8px] h-max">
              <img src={barn}></img>
              <div>Cabin</div>
            </div>
          </div>
          <div className="shadow-md px-[14px] py-[6px] w-max rounded-[21px] flex items-center gap-[4px]">
            <img src={arrowtoleft1}></img>
            <div>Add Detail</div>
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Add some photos of your house
          </div>
          <div className="text-[#595959]">
            You’ll need 5 photos to get started. You can add more or make
            changes later.
          </div>

          <div className="border-[2px] border-dashed rounded-[12px] shadow-lg flex w-full">
            <div className="m-auto flex flex-col items-center space-y-[20px] h-[300px] justify-center">
              <img src={uploadimage}></img>
              <div
                className="text-white px-[16px] py-[9px] rounded-[40px] bg-[#4C37C3]"
                onClick={() =>
                  dispatch(showGallery([uploadimage, uploadimage]))
                }
              >
                Upload file
              </div>
              <div className="text-[#595959]">... or drag and drop files</div>
            </div>
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Now, lets give your house a title
          </div>
          <div className="text-[#595959]">
            Short titles work best. Have fun with it. You can always change it
            later.
          </div>
          <div className="p-[14px] rounded-[16px] shadow-md w-full h-[200px]">
            <textarea className="w-full h-full" placeholder="Lorem ipsum..." />
          </div>
          <div className="flex justify-start w-full text-[#595959]">
            <div>11/32</div>
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Next, let’s describe your house
          </div>
          <div className="text-[#595959]">
            Choose up to 2 highlights. We’ll use these to get your description
            started.
          </div>
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="p-[11px] flex items-center shadow-md rounded-[8px] w-[250px]">
              <img src={social2}></img>
              <div>Peaceful</div>
            </div>
            <div className="p-[11px] flex items-center shadow-md rounded-[8px] w-[250px]">
              <img src={social2}></img>
              <div>Peaceful</div>
            </div>
            <div className="p-[11px] flex items-center shadow-md rounded-[8px] w-[250px]">
              <img src={social2}></img>
              <div>Peaceful</div>
            </div>
            <div className="p-[11px] flex items-center shadow-md rounded-[8px] w-[250px]">
              <img src={social2}></img>
              <div>Peaceful</div>
            </div>
          </div>
        </div> */}
        <div className="m-auto space-y-[20px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Create your description
          </div>
          <div className="text-[#595959]">
            Share what makes your place special
          </div>
          <div className="p-[14px] rounded-[16px] shadow-md w-full h-[200px]">
            <textarea className="w-full h-full" placeholder="Lorem ipsum..." />
          </div>
          <div className="flex justify-start w-full min-w-[600px] text-[#595959]">
            <div>11/32</div>
          </div>
        </div>
        {/* <div className="m-auto space-y-[10px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Now, set your price
          </div>
          <div className="text-[#595959]">You can change it anytime.</div>

          <div className="flex items-center gap-[10px]">
            <div className="text-[48px] font-bold">1350 NUSD</div>
            <img src={edit}></img>
          </div>
          <div className="text-[#595959]">Guest price 1,545 NUSD</div>
        </div> */}
        {/* <div className="m-auto space-y-[10px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">Add discount</div>
          <div className="text-[#595959]">
            Help your place stand out to get booked faster and earn your first
            reviews.
          </div>
          <div className="p-[11px] rounded-[8px] shadow-md flex items-center gap-[14px] justify-between min-w-[400px]">
            <div className="flex items-center gap-[14px]">
              <div>20%</div>
              <div>
                <div>New listing promotion</div>
                <div className="text-[#959595]">
                  Offer 20% off your first 3 bookings
                </div>
              </div>
            </div>

            <Checkbox
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
          <div className="p-[11px] rounded-[8px] shadow-md flex items-center gap-[14px] justify-between min-w-[400px]">
            <div className="flex items-center gap-[14px]">
              <div>12%</div>
              <div>
                <div>Weekly discount</div>
                <div className="text-[#959595]">
                  For stays of 7 nights or more
                </div>
              </div>
            </div>
            <Checkbox
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
          <div className="p-[11px] rounded-[8px] shadow-md flex items-center gap-[14px] justify-between min-w-[400px]">
            <div className="flex items-center gap-[14px]">
              <div>12%</div>
              <div>
                <div>Weekly discount</div>
                <div className="text-[#959595]">
                  For stays of 7 nights or more
                </div>
              </div>
            </div>
            <Checkbox
              checked={checked}
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div> */}
        {/* <div className="m-auto space-y-[10px] flex flex-col items-center">
          <div className="text-center text-[32px] font-bold">
            Yay! It’s time to publish
          </div>
          <div className="text-[#595959]">
            Help your place stand out to get booked faster and earn your first
            reviews.
          </div>
          <div className="grid grid-cols-2">
            <div className="p-[11px] shadow-md rounded-[8px] w-[300px]">
              <img src={house}></img>
              <div className="flex items-center justify-between my-[8px]">
                <div>fine house</div>
                <div className="flex items-center gap-[10px]">
                  <div>New</div>
                  <img src={star} className="w-[20px]"></img>
                </div>
              </div>
              <div className="flex gap-[4px]">
                <div className="line-through text-[#959595]">1,22 NUSD</div>
                <div className="font-bold">978 NUSD</div>
                <div>night</div>
              </div>
            </div>
            <div className="h-full flex flex-col justify-between">
              <div>What’s next?</div>
              <div className="p-[11px] rounded-[8px] shadow-md flex max-w-[400px] items-start gap-[10px]">
                <img src={calendar}></img>
                <div>
                  <div>Set up your calendar</div>
                  <div className="text-[10px]">
                    Choose which dates are available. Guests can start booking 2
                    hours after you publish.
                  </div>
                </div>
              </div>
              <div className="p-[11px] rounded-[8px] shadow-md flex max-w-[400px] items-start gap-[10px]">
                <img src={calendar}></img>
                <div>
                  <div>Adjust your settings</div>
                  <div className="text-[10px]">
                    Set house rules, select a cancellation policy, choose how
                    guests can bok, and more.
                  </div>
                </div>
              </div>
              <div className="p-[11px] rounded-[8px] shadow-md flex max-w-[400px] items-start gap-[10px]">
                <img src={calendar}></img>
                <div>
                  <div>Prepare for yur first guests</div>
                  <div className="text-[10px]">
                    Find tips in our Resources Center and access customer
                    support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="m-auto flex flex-col items-center">
          <img src={statusverified}></img>
          <div className="text-[32px]">Status Verified</div>
          <div className="max-w-[500px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="px-[18px] py-[10px] rounded-[16px] bg-[#5B1DEE] text-white mt-[20px]">
            Submitted
          </div>
        </div> */}
        {/* <div className="m-auto flex flex-col items-center space-y-[10px]">
          <img src={clock}></img>
          <div className="text-[20px] font-bold">
            Loading property valuation...
          </div>
          <div className="max-w-[500px] text-center text-[#8C8C8C]">
            Please wait a moment as we are preparing the data you provided.
            ullamcorper sedcing ut morbi Lorem ipsum ornare id.
          </div>
        </div> */}
        {/* <div className="w-full h-full relative">
          <img src={festivalback} className="m-auto max-w-[100vh]"></img>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center space-y-[80px]">
            <div className="text-[32px] font-bold">Your Property Valuation</div>
            <img src={dollar}></img>
            <div className="p-[20px] rounded-[8px] shadow-md space-y-[20px] w-[350px]">
              <div className="flex justify-center w-full items-center gap-[4px] font-bold text-[24px]">
                <img src={NUSD}></img>
                <div className="text-[#4C37C3]">2000</div>
                <div className="">NUSD</div>
              </div>
              <div className="text-center text-[#8C8C8C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>

            <div className="text-white px-[20px] py-[12px] bg-[#202020] rounded-[16px]">
              Add to NFT
            </div>
          </div>
        </div> */}
      </div>
      <ProgressBar className="progressbg" now={10} />
      <div className="w-full flex justify-between mt-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="px-[20px] py-[12px] rounded-[16px] shadow-md">
            Back
          </div>
          <div>1/12</div>
        </div>
        {/* <div></div> */}
        <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5D00CF] text-white">
          Get Started
        </div>
      </div>
    </div>
  );
};
