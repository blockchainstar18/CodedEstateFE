import { useEffect, useState } from "react";
import NUSD from "../assets/images/NUSD.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setNFT } from "../Actions/NFTSlice";

export const InboxItem = ({ selected, chatId, time }) => {
  const account = useSelector((state) => state.auth.account);
  const [receiver, setReceiverAccount] = useState("");
  const [latestMessageTime, setLatestTime] = useState(time);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const dispatch = useDispatch();
  const isNewMessage = useSelector((state) => state.messages.isNewMessage);
  const newMessages = useSelector((state) => state.messages.messages);

  const [nftId, setNftId] = useState(null);

  const allNFTs = useSelector((state) => state.nft.allNFTs);
  const [buildingName, setBuildingName] = useState(null);
  const [price, setPrice] = useState(null);
  const [tempNFT, setTempNFT] = useState(null);

  let back, shadowBack;
  if (selected) {
    back = "bg-[#F6F6F6]";
    shadowBack = "shadow-md bg-white";
  } else {
    back = "bg-white";
    shadowBack = "";
  }
  const getTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const timeString = hours + ":" + minutes + " " + amOrPm;
    return timeString;
  };

  const getDay = (date) => {
    try {
      const monthString = new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(date);

      const day = ("0" + date.getDate()).slice(-2);
      let formattedDate = monthString + " " + day;

      if (
        new Date().getFullYear() +
          new Date().getMonth() +
          new Date().getDate() ==
        date.getFullYear() + date.getMonth() + date.getDate()
      )
        return "Today";

      return formattedDate;
    } catch (error) {}
  };
  const getReceiverAccount = async () => {
    const res = await axios.post(
      "http://57.180.34.157:443/chat/getChattingInfo",
      {
        id: chatId,
        reader: account,
      }
    );
    setUnreadMessages(res.data.unreadMessages);
    setLatestTime(res.data.latestMessageTime);
    setReceiverAccount(res.data.receiver);
    setNftId(res.data.nftId);
  };
  useEffect(() => {
    getReceiverAccount();
  }, []);

  useEffect(() => {
    if (nftId) {
      for (let i = 0; i < allNFTs.length; i++) {
        if (allNFTs[i].token_id == nftId) {
          setBuildingName(allNFTs[i].metaData["Building Name"].buildingNameEn);
          setPrice(allNFTs[i].longtermrental_info.landlord.price_per_month);

          setTempNFT({
            tokenId: allNFTs[i].token_id,
            NftInfo: allNFTs[i].nft_info,
            metaData: allNFTs[i].metaData,
            longtermrentalInfo: allNFTs[i].longtermrental_info,
          });
        }
      }
    }
  }, [nftId]);

  useEffect(() => {
    if (time != null) setLatestTime(time);
  }, [time]);

  useEffect(() => {
    if (isNewMessage) {
      newMessages.forEach((element) => {
        if (element.id == chatId) {
          setLatestTime(element.message.generatedTime);
          setUnreadMessages(unreadMessages + 1);
        }
      });
    }
  }, [isNewMessage]);

  const handleSetCurrentNFT = () => {
    dispatch(setNFT(tempNFT));
  };

  return (
    <>
      <div
        className={`w-full p-[16px] ${back} space-y-[12px] rounded-[4px] shadow-md cursor-pointer`}
        onClick={() => {
          handleSetCurrentNFT();
          setUnreadMessages(0);
        }}
      >
        <div className="w-full flex items-center justify-between">
          <div className="px-[12px] py-[4px] rounded-[8px] border-[1px] border-[#38A569] text-[#38A569]">
            Inquiry
          </div>
          <div className="text-[#B6B6B6]">
            {getDay(new Date(latestMessageTime)) +
              " " +
              getTime(new Date(latestMessageTime))}
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="font-bold">
            {receiver.substring(0, 7) +
              "..." +
              receiver.substring(receiver?.length - 4)}
          </div>
          {unreadMessages && !selected ? (
            <div className="px-[4px] rounded-[10px] bg-[#7C4AF1] text-white min-w-[26px] text-center">
              {unreadMessages}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <div className="text-[#B6B6B6]">{buildingName}</div>
          {/* <div className="text-[#B6B6B6]">Feb 4 - Feb 6 (2 nights)</div> */}
          <div className="flex items-center gap-[10px]">
            <img src={NUSD} />
            <div className={`p-[4px] rounded-[8px] font-bold ${shadowBack}`}>
              {price}
            </div>
            <div className="text-[#B6B6B6]">NUSD</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E3E3E3] my-[16px]" />
    </>
  );
};
