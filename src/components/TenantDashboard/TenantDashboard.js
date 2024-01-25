import imgBack from "../../assets/images/dashboard/luke-van-zyl-koH7IVuwRLw-unsplash 1.png";
import colorarrow from "../../assets/images/Arrow.png";
import heart from "../../assets/images/dashboard/Frame 1000005004.png";
import { CarouselCompo } from "../CarouselCompo";
import { getAllNFTsInfo } from "../NFTs";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IDIcon from "../../assets/images/Social.png";
import { useNavigate } from "react-router-dom";

export const TenantDashboard = () => {
  //   const [assets, setAssets] = useState([]);
  const account = useSelector((state) => state.auth.account);
  const assets = useSelector((state) => state.nft.allNFTs);

  const navigate = useNavigate();
  //   const getAllAssets = async () => {
  //     const result = await getAllNFTsInfo();
  //     setAssets(result);
  //   };

  //   useEffect(() => {
  //     getAllAssets();
  //   }, []);

  return (
    <>
      <div className="p-[16px] w-full h-full flex flex-col">
        <div className="flex gap-[16px] ">
          <div className="rounded-[8px] shadow-md px-[12px] py-[18px] space-y-[20px] w-[260px] flex flex-col items-center">
            <img src={IDIcon} className="w-[88px] m-auto"></img>
            <div
              className="py-[8px] bg-black text-white text-center rounded-[100px] w-full cursor-pointer"
              onClick={() => {
                navigate("/account");
              }}
            >
              Verify ID
            </div>
          </div>
          <div className="bg-[#eeeeee] relative rounded-[8px] w-full shadow-md">
            <div className="w-full flex justify-end">
              <img src={imgBack} className="h-[220px] rounded-[8px]" />
            </div>
            <div className="absolute top-[10%] left-[2%] space-y-[16px] w-[50%]">
              <div className="text-[28px] font-bold">
                Explore homes on-chain, and find your dream stay today
              </div>
              <div>
                Explore the best of the best in real estate with our recommended
                properties.
              </div>
              <div className="flex justify-center">
                <div className="bg-[#5D00CF] text-white px-[14px] py-[8px] w-max rounded-[16px] cursor-pointer">
                  Explore
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between my-[10px]">
          <div>Recommended properties</div>
          <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
            <div className="text-[#4C37C3]">See all</div>
            <img src={colorarrow} className="" />
          </div>
        </div>

        <div className="flex gap-[20px]">
          {/* {assets.map((item) => {
            if (
              item.nft_info.access.owner != account &&
              item.longtermrental_info.tenant_address != account
            )
              return (
                <div className="w-[250px]">
                  <CarouselCompo
                    nftInfo={item.nft_info}
                    metaData={item.metaData}
                    onlyImages={true}
                    imageHeight={"150px"}
                  />
                </div>
              );
          })} */}
        </div>

        <div className="flex w-full justify-between my-[10px]">
          <div>Wishlist</div>
          <div className="flex items-center py-[4px] px-[12px] rounded-[100px] shadow-md">
            <div className="text-[#4C37C3]">See all</div>
            <img src={colorarrow} className="" />
          </div>
        </div>

        <div className="flex gap-[20px]">
          {/* {assets.map((item) => {
            if (
              item.nft_info.access.owner != account &&
              item.longtermrental_info.tenant_address != account
            )
              return (
                <div className="w-[250px]">
                  <CarouselCompo
                    nftInfo={item.nft_info}
                    metaData={item.metaData}
                    onlyImages={true}
                    imageHeight={"150px"}
                    topRightIcon={heart}
                  />
                </div>
              );
          })} */}
        </div>
      </div>
    </>
  );
};
