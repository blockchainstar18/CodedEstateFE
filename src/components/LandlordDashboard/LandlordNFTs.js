import listed from "../../assets/images/Frame 1000001303.png";
import unverified from "../../assets/images/Frame 1000001303 (1).png";
import upcoming from "../../assets/images/Frame 1000001303 (2).png";
import rent from "../../assets/images/Frame 1000001303 (3).png";
import { SelectionGroup, SelectionItem } from "../Selection";
import { useDispatch } from "react-redux";
import { setDashboardMode } from "../../Actions/DashboardSlice";
import { CarouselCompo } from "../CarouselCompo";
import light from "../../assets/images/light.png";
import search from "../../assets/images/tabler-icon-search.png";
import slash from "../../assets/images/slash.png";
import windowIcon from "../../assets/images/window.png";
import list from "../../assets/images/list.png";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { executeContract } from "../InteractToContract";
import uploadimage from "../../assets/images/dashboardListing/uploadimage.png";
import { setNFT, setNFTsSection } from "../../Actions/NFTSlice";
import { getMyNFTsInfo } from "../NFTs";
import axios from "axios";
import { getMetadata, pinMetadata } from "../NFTs";
import circlechecked from "../../assets/images/Frame 1000005306 (1).png";
import ImageUploading from "react-images-uploading";
import deleteIcon from "../../assets/images/close-mini.png";
import { PropertyDetail } from "../PropertyDetail";
import { PropertyAddress } from "../PropertyAddress";
import { ImageView } from "../ImageView";
import { PropertyListingDetail } from "../PropertyListingDetail";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LandlordNFTs = () => {
  const [totalListedNFTsCount, setTotalListedNFTsCount] = useState(0);
  const [totalUnverifedNFTsCount, setTotalUnverifiedNFTsCount] = useState(0);
  const dispatch = useDispatch();
  // const [NFTsFlag, setNFTsFlag] = useState(0);
  const NFTsFlag = useSelector((state) => state.nft.NFTsSection);
  const account = useSelector((state) => state.auth.account);
  const walletEx = useSelector((state) => state.auth.wallet);

  const uploadedImages = useSelector(
    (state) => state.nft.currentNFT?.metaData.images
  );
  const [currentImages, setCurrentImages] = useState([]);
  useEffect(() => {
    setCurrentImages(uploadedImages?.split(","));
  }, [uploadedImages]);

  const onImageRemoveFromCurrent = (index) => {
    let tempArray = currentImages;
    const toDelete = tempArray.splice(index, 1);
    // deletePinFromIPFS(toDelete);
    setCurrentImages(tempArray);
  };

  const [currentToken, setCurrentToken] = useState();
  const [actionMode, setActionMode] = useState(null);
  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWEyZjc5ZS1iNDQyLTQzOWUtOGNlNC0wZmRiMTIzYmNkNDciLCJlbWFpbCI6ImJsb2NrY2hhaW5zdGFyMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJkZjAxNDE1NGYxOTBhZjY4M2Y3Iiwic2NvcGVkS2V5U2VjcmV0IjoiZDUxNGZjOTljMGZkMGJlYTA1NzA4OTkzOGFkZGQyOTI5OWQ1ZjkyZTUyOGY2NWRjZjQ0NGIzODdmOTQ2YmEyMCIsImlhdCI6MTcwMjk2NDQxOX0.2KDJPbgRnpIbvgYbvGZnkwnjAZw7NiRhtif_SqW1z2E";

  const assets = useSelector((state) => state.nft.myNFTs);
  const description = useSelector(
    (state) => state.nft.uploadingData.description
  );
  const offers = useSelector((state) => state.nft.uploadingData.offers);

  const updateMetadata = async (hash, key_values) => {
    const metaData = { ...(await getMetadata(gateWay + hash)) };
    console.log(Object.isExtensible(metaData), metaData);
    await deletePinFromIPFS(hash);
    for (let i = 0; i < key_values.length; i++) {
      metaData[key_values[i].key] = key_values[i].value;
    }
    const newHash = await pinMetadata(metaData);
    return newHash;
  };
  const onUploadingImagesChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const deletePinFromIPFS = async (hashToUnpin) => {
    try {
      const res = await axios.delete(
        `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const updateTokenURI = async (token_id, newTokenURI) => {
    const updateMessage = {
      set_metadata: {
        token_id: token_id,
        token_uri: newTokenURI,
      },
    };
    await executeContract(dispatch, token_id, updateMessage, account, walletEx);
    // setUpdateFlag(!updateFlag);
    // dispatch(setDashboardMode(2));
  };
  useEffect(() => {
    let countlisted = 0,
      countunverifed = 0;
    for (let i = 0; i < assets.length; i++) {
      if (assets[i].longtermrental_info.islisted) countlisted++;
      if (!assets[i].metaData.images && !assets[i].metaData.offers)
        countunverifed++;
    }
    setTotalListedNFTsCount(countlisted);
    setTotalUnverifiedNFTsCount(countunverifed);
  }, [assets]);

  const setListNFT = async (
    token_id,
    islist,
    denom,
    price_per_month,
    refundable_deposit,
    available_period
  ) => {
    const listingMessage = {
      set_list_for_long_term_rental: {
        token_id: token_id,
        islisted: islist,
        denom: denom,
        price_per_month: price_per_month,
        refundable_deposit: refundable_deposit,
        available_period: available_period,
      },
    };
    await executeContract(
      dispatch,
      token_id,
      listingMessage,
      account,
      walletEx
    );

    setActionMode(null);
    dispatch(setNFTsSection(2));
  };

  const editMetaData = () => setActionMode(false);

  const pinFileToIPFS = async () => {
    if (images.length) toast.info("Uploading images..");
    const hashes = [];
    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();

      formData.append("file", images[i].file);

      try {
        const res = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: "Infinity",
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        console.log(res.data);
        hashes.push(res.data.IpfsHash);
      } catch (error) {
        toast.dismiss();
        toast.error(
          `Uploading failed with following errors ${error.toString()}`,
          {
            autoClose: 1000,
          }
        );
        console.log(error);
      }
    }
    if (images.length) {
      toast.dismiss();
      toast.success("Images uploaded.", { autoClose: 1000 });
    }
    return hashes;
  };

  const handleUpdateMetadata = async () => {
    let currentURI = currentToken.nft_info.info.token_uri.replace(gateWay, "");
    let imageHashes = [];
    if (currentImages)
      imageHashes = [...currentImages, ...(await pinFileToIPFS())];
    else imageHashes = [...(await pinFileToIPFS())];

    const newHash = await updateMetadata(currentURI, [
      {
        key: "images",
        value: imageHashes.toString(),
      },
      {
        key: "offers",
        value: offers,
      },
      {
        key: "description",
        value: description,
      },
    ]);

    await updateTokenURI(currentToken.token_id, gateWay + newHash);
    setImages([]);
    setActionMode(null);
  };

  return (
    <>
      {actionMode == null ? (
        <>
          <div className="p-[20px]">
            <div className="text-[#8C8C8C]">My Real Estate NFTs</div>
            <div className="my-[20px] text-[18px] font-bold">
              Your Real Estate Status
            </div>
            <div className="grid grid-cols-4 gap-[16px]">
              <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <img src={listed}></img>
                  <div className="text-[#8C8C8C]">Total NFTs Listed</div>
                </div>
                <div className="text-[24px]">{totalListedNFTsCount}</div>
              </div>
              <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <img src={unverified}></img>
                  <div className="text-[#8C8C8C]">Total NFTs Unverified</div>
                </div>
                <div className="text-[24px]">{totalUnverifedNFTsCount}</div>
              </div>
              <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <img src={upcoming}></img>
                  <div className="text-[#8C8C8C]">Upcoming</div>
                </div>
                <div className="text-[24px]">100</div>
              </div>
              <div className="p-[16px] rounded-[8px] shadow-md flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <img src={rent}></img>
                  <div className="text-[#8C8C8C]">Recent Active Rent</div>
                </div>
                <div className="text-[24px]">6</div>
              </div>
            </div>
          </div>
          <div className="p-[16px] border-y-[1px] border-[#EDEDED] flex justify-between">
            <div>
              <SelectionGroup
                defaultItem={NFTsFlag}
                className="p-[6px] shadow-md gap-[8px] rounded-[16px] flex w-max text-[#959595] items-center"
                SelectedItemMask="shadow-md"
              >
                <SelectionItem
                  SelectedItem={
                    <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] text-black">
                      <div>Verified NFTs</div>
                      <img src={light} alt=""></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                      onClick={() => dispatch(setNFTsSection(0))}
                    >
                      <div>Verified NFTs</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] text-black">
                      <div>Unverified NFTs</div>
                      <img src={light} alt=""></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                      onClick={() => dispatch(setNFTsSection(1))}
                    >
                      <div>Unverified NFTs</div>
                    </div>
                  }
                />
                <SelectionItem
                  SelectedItem={
                    <div className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px] text-black">
                      <div>My Listings</div>
                      <img src={light} alt=""></img>
                    </div>
                  }
                  UnselectedItem={
                    <div
                      className="w-[160px] rounded-[10px] flex items-center justify-between gap-[10px] px-[10px] py-[4px]"
                      onClick={() => dispatch(setNFTsSection(2))}
                    >
                      <div>My Listings</div>
                    </div>
                  }
                />
              </SelectionGroup>
            </div>

            <div className="flex items-center gap-[20px]">
              <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px]">
                <img src={search} alt=""></img>
                <input placeholder="Search" className="w-full" />
                <img src={slash} alt=""></img>
              </div>

              <div className="items-center flex">
                <div className="p-[8px] bg-[#F2F2F2]">
                  <img src={windowIcon} alt=""></img>
                </div>
                <div className="p-[8px]">
                  <img src={list} alt=""></img>
                </div>
              </div>
            </div>
          </div>
          <div className="p-[20px] h-full">
            <div className="grid grid-cols-4 gap-[20px]">
              {/* <PropertyItem /> */}

              {assets.map((item) => {
                if (item.longtermrental_info.islisted && NFTsFlag == 2)
                  return (
                    <CarouselCompo
                      nftInfo={item.nft_info}
                      metaData={item.metaData}
                      longtermrentalInfo={item.longtermrental_info}
                      totalPriceHide={true}
                      imageHeight={"200px"}
                      btn={
                        <div
                          className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                          onClick={() => {
                            // setListNFT(item.token_id, false, "unibi", 0, 0, []);

                            dispatch(
                              setNFT({
                                NftInfo: item.nft_info,
                                metaData: item.metaData,
                                tokenId: item.token_id,
                                longtermrentalInfo: item.longtermrental_info,
                              })
                            );
                            setCurrentToken(item);
                            setActionMode(true);
                          }}
                        >
                          Unlist
                        </div>
                      }
                    />
                  );
                if (
                  !item.longtermrental_info.islisted &&
                  item.metaData.images &&
                  item.metaData.offers &&
                  NFTsFlag == 0
                )
                  return (
                    <CarouselCompo
                      nftInfo={item.nft_info}
                      metaData={item.metaData}
                      totalPriceHide={true}
                      PriceHide={true}
                      emptyImage={uploadimage}
                      imageHeight={"200px"}
                      btn={
                        <div
                          className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                          onClick={() => {
                            setCurrentToken(item);

                            dispatch(
                              setNFT({
                                NftInfo: item.nft_info,
                                metaData: item.metaData,
                                tokenId: item.token_id,
                                longtermrentalInfo: item.longtermrental_info,
                              })
                            );
                            setActionMode(true);
                            //   dispatch(setDashboardMode(3));
                          }}
                        >
                          List
                        </div>
                      }
                    />
                  );
                if (
                  !item.longtermrental_info.islisted &&
                  !item.metaData.images &&
                  !item.metaData.offers &&
                  NFTsFlag == 1
                )
                  return (
                    <CarouselCompo
                      nftInfo={item.nft_info}
                      metaData={item.metaData}
                      totalPriceHide={true}
                      PriceHide={true}
                      emptyImage={uploadimage}
                      imageHeight={"200px"}
                      btn={
                        <div
                          className="bg-[#5D00CF] py-[10px] rounded-[16px] text-white text-center mt-[10px] cursor-pointer"
                          onClick={() => {
                            setActionMode(false);
                            dispatch(
                              setNFT({
                                NftInfo: item.nft_info,
                                metaData: item.metaData,
                                tokenId: item.token_id,
                                longtermrentalInfo: item.longtermrental_info,
                              })
                            );
                            setCurrentToken(item);
                            //   dispatch(setDashboardMode(3));
                          }}
                        >
                          Verify
                        </div>
                      }
                    />
                  );
              })}
            </div>
            {/* <div className="w-max shadow-md rounded-[10px] p-[10px] h-max">
<img src={image} className="rounded-[10px] w-full h-[200px]"></img>

<div className="flex items-center ml-[10px] my-[10px] font-semibold text-[14px] gap-[10px]">
  <img src={NUSD}></img>
  <div>10000 NUSD</div>
</div>
<div className="flex items-center text-[#959595] ml-[10px] gap-[10px]">
  <img src={LocationPin}></img>
  <div>Los Angeles, CA</div>
</div>
<div className="flex items-center gap-[10px] text-[#959595]">
  <img src={icon}></img>
  <div>350</div>

  <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>
  <img src={icon1}></img>
  <div>5</div>
  <div className="w-[2px] h-[15px] bg-[#D9D9D9]"></div>

  <img src={icon2}></img>
  <div>1</div>
</div>

<div className="bg-[#5D00CF] px-[16px] py-[10px] rounded-[16px] text-white text-center">
  Verify
</div>
</div> */}
            {/* <div className="w-full shadow-md bg-[#F6F6F6] h-full flex flex-col">
<div className="m-auto flex flex-col">
  <img src={empty} className="m-auto"></img>
  <div>You don´t have any verified NFTs minted yet.</div>
  <div className="m-auto flex gap-[30px] text-[#6B349A]">
    <div className="underline">Listing page</div>
    <div className="underline">Mint</div>
  </div>
</div>
</div> */}
          </div>
        </>
      ) : (
        <></>
      )}
      {actionMode == false ? (
        <>
          <div className="p-[16px]">
            <div className="w-full flex justify-end">
              <div
                className="px-[14px] py-[6px] rounded-[100px] shadow-md cursor-pointer text-white bg-[#4C37C3]"
                onClick={() => handleUpdateMetadata()}
              >
                Save Metadata
              </div>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="text-[24px] font-bold">Summary</div>
              <div className="text-[#595959]">
                Help your place stand out to get booked faster and earn your
                first reviews.
              </div>
              <div className="flex items-center mt-[40px]">
                <img src={circlechecked} alt="" />
                <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                <img src={circlechecked} alt="" />
                <div className="bg-[#EFE8FD] w-[160px] h-[4px]" />
                <img src={circlechecked} alt="" />
              </div>
              <div className="grid grid-cols-3 justify-items-center gap-[60px]">
                <div>Autofill Metadata</div>
                <div>Manual Metadata</div>
                <div>Finished</div>
              </div>
              <div className="p-[16px] rounded-[12px] shadow-md w-[600px] h-[400px] space-y-[12px] flex flex-col my-[20px] select-none">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onUploadingImagesChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["jpg", "jpeg", "png"]}
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    <div
                      className={
                        isDragging
                          ? "border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full bg-[#dddddd]"
                          : "border-[2px] border-dashed rounded-[12px] shadow-md flex w-full h-full"
                      }
                      {...dragProps}
                    >
                      <div className="m-auto flex flex-col items-center space-y-[20px]">
                        {imageList.length || currentImages?.length ? (
                          <div className="flex gap-[10px] w-full overflow-auto">
                            {currentImages?.map((hash, index) => {
                              return (
                                <div className="mx-auto flex flex-col items-center">
                                  <img
                                    src={gateWay + hash}
                                    className="w-[120px] h-[100px] rounded-[5px]"
                                    alt=""
                                  />
                                  <img
                                    className="cursor-pointer"
                                    src={deleteIcon}
                                    onClick={() => {
                                      onImageRemoveFromCurrent(index);
                                      onImageRemove(-1);
                                    }}
                                    alt=""
                                  />
                                </div>
                              );
                            })}
                            {imageList.map((im, index) => {
                              return (
                                <div className="mx-auto flex flex-col items-center">
                                  <img
                                    src={im.data_url}
                                    className="w-[120px] h-[100px] rounded-[5px]"
                                    alt=""
                                  />
                                  <img
                                    className="cursor-pointer"
                                    src={deleteIcon}
                                    onClick={() => onImageRemove(index)}
                                    alt=""
                                  />
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <img src={uploadimage} alt=""></img>
                        )}
                        <div
                          className="text-white px-[16px] py-[9px] rounded-[40px] bg-[#4C37C3] cursor-pointer"
                          style={isDragging ? { color: "red" } : null}
                          onClick={onImageUpload}
                        >
                          Upload file
                        </div>
                        <div className="text-[#595959]">
                          ... or drag and drop files
                        </div>
                      </div>
                    </div>
                  )}
                </ImageUploading>

                {/* <div className="w-full flex justify-end">
                  <div
                    className="underline cursor-pointer"
                  >
                    Edit
                  </div>
                </div> */}
              </div>
              <div className="w-[600px]">
                <PropertyDetail editable={true} />
              </div>
            </div>
            <div className="w-full flex justify-end h-[50px]">
              {/* <div className="px-[20px] py-[12px] rounded-[16px] bg-[#5D00CF] text-white shadow-md">
                Next
              </div> */}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {actionMode == true ? (
        <>
          <div className="w-full bg-[#f6f6f6] p-[16px] space-y-[16px]">
            <PropertyAddress />
            <ImageView />
            <div className="grid grid-cols-2 gap-[16px]">
              <PropertyDetail />
              <PropertyListingDetail
                token_id={currentToken.token_id}
                setListNFT={setListNFT}
                editMetaData={editMetaData}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
