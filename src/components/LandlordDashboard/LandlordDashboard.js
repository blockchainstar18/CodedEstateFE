import { useDispatch } from "react-redux";
import IDIcon from "../../assets/images/Social.png";
import { setDashboardMode } from "../../Actions/DashboardSlice";
import { useSelector } from "react-redux";
import { CarouselCompo } from "../CarouselCompo";
import verifiedMark from "../../assets/images/dashboard/badges (1).png";
import uploadimage from "../../assets/images/dashboardListing/uploadimage.png";
import unverifiedMark from "../../assets/images/dashboard/badges.png";
import verifyIcon1 from "../../assets/images/dashboard/Frame 10000055681.png";
import sampleMetadata from "../../metadata.json";
import { executeContract, queryContract } from "../InteractToContract";
import { pinMetadata } from "../NFTs";
import { useState, useEffect } from "react";
import { getMyNFTsInfo } from "../NFTs";
import { useNavigate } from "react-router-dom";
import verifyIcon from "../../assets/images/dashboard/Frame 1000005568.png";
import { setNFTsSection } from "../../Actions/NFTSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LandlordDashboard = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.auth.account);
  const walletEx = useSelector((state) => state.auth.wallet);
  const [updateFlag, setUpdateFlag] = useState(false);

  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";

  const assets = useSelector((state) => state.nft.myNFTs);

  const navigate = useNavigate();

  // const [assets, setAssets] = useState([]);

  // const getMyAssets = async () => {
  //   const result = await getMyNFTsInfo(account);
  //   setAssets(result);
  // };

  // useEffect(() => {
  //   getMyAssets();
  // }, [updateFlag]);

  const mintNFT = async (token_uri) => {
    const token_id = ((await countMintedNFTs()) + 1).toString();

    console.log(token_id);
    const mintMessage = {
      mint: {
        token_id: token_id,
        owner: account,
        token_uri: token_uri,
        extension: {},
      },
    };
    await executeContract(dispatch, token_id, mintMessage, account, walletEx);
    setUpdateFlag(!updateFlag);
  };

  const countMintedNFTs = async () => {
    const query = {
      num_tokens: {},
    };
    return (await queryContract(query)).count;
  };

  const handleMint = async () => {
    const hash = await pinMetadata(sampleMetadata);
    if (!hash) return;
    console.log("Metadata uploaded..");
    mintNFT(gateWay + hash);
  };
  return (
    <>
      <div className="p-[20px] h-full flex flex-col">
        <div className="font-bold text-[24px]">Dashboard</div>
        <div className="text-[#8C8C8C]">
          Welcome to the CodedEstate Dashboard
        </div>
        <div className="my-[40px] flex gap-[16px]">
          <div>
            <div className="font-bold">Verify ID</div>
            <div className="rounded-[8px] shadow-md px-[12px] py-[18px] space-y-[20px] w-[260px] flex flex-col items-center">
              <img src={IDIcon} className="w-[88px]"></img>
              <div
                className="py-[8px] bg-black text-white text-center rounded-[100px] w-full cursor-pointer"
                onClick={() => {
                  navigate("/account");
                }}
              >
                Verify ID
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold">Your Minted NFTs</div>
            <div className="rounded-[8px] shadow-md w-full max-w-[1200px] h-[184px] flex p-[8px] gap-[16px] overflow-auto hiddenscrollbar">
              {assets.length > 0 ? (
                <>
                  {assets.map((item) => {
                    if (item.nft_info.access.owner == account)
                      if (item.metaData.images && item.metaData.offers)
                        return (
                          <div
                            className="min-w-[250px]"
                            onClick={() => {
                              dispatch(setNFTsSection(0));
                              dispatch(setDashboardMode(2));
                            }}
                          >
                            <CarouselCompo
                              nftInfo={item.nft_info}
                              metaData={item.metaData}
                              onlyImages={true}
                              topRightIcon={verifiedMark}
                              imageHeight={"146px"}
                              stopPropagation={true}
                            />
                          </div>
                        );
                      else
                        return (
                          <div
                            className="min-w-[250px]"
                            onClick={() => {
                              dispatch(setNFTsSection(1));

                              dispatch(setDashboardMode(2));
                            }}
                          >
                            <CarouselCompo
                              nftInfo={item.nft_info}
                              metaData={item.metaData}
                              emptyImage={uploadimage}
                              onlyImages={true}
                              topRightIcon={unverifiedMark}
                              imageHeight={"146px"}
                              stopPropagation={true}
                            />
                          </div>
                        );
                  })}
                </>
              ) : (
                <div className="rounded-[8px] m-auto flex flex-col items-center space-y-[20px]">
                  <img src={verifyIcon}></img>
                  <div className="">No Minted NFTs</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="font-bold">Mint Your Real Estate NFT</div>

        <div className="w-full h-full shadow-md rounded-[8px] flex">
          <div className="m-auto flex flex-col items-center space-y-[40px]">
            <img src={verifyIcon1}></img>
            <div
              className="bg-[#5B1DEE] text-white rounded-[100px] text-center w-[200px] py-[8px] cursor-pointer"
              onClick={() => {
                handleMint();
              }}
            >
              Mint
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
