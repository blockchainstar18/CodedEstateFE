import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import {
  setNewMessage,
  setReadingNow,
  setMessagesToSend,
} from "../Actions/MessageSlice";
import { getMyNFTsInfo } from "../components/NFTs";
import { setMyNFTs } from "../Actions/NFTSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const account = useSelector((state) => state.auth.account);
  const messagesToSend = useSelector((state) => state.messages.messagesToSend);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  const allNFTs = useSelector((state) => state.nft.allNFTs);

  // const getMyAssets = async () => {
  //   const result = await getMyNFTsInfo(account);
  // };

  useEffect(() => {
    const myNFTs = [];
    for (let i = 0; i < allNFTs.length; i++) {
      if (allNFTs[i]?.nft_info.access.owner == account) myNFTs.push(allNFTs[i]);
    }
    dispatch(setMyNFTs(myNFTs));
  }, [allNFTs]);

  useEffect(() => {
    if (isAuthenticated) {
      const temp_socket = io("http://57.180.34.157:443");
      temp_socket.on("connect", () => {
        temp_socket.emit("connectedAccount", account);
      });
      temp_socket.on("messageReceived", (res) => {
        // console.log(res);
        dispatch(setNewMessage(res));
      });
      temp_socket.on("readingNow", (res) => {
        dispatch(setReadingNow(res));
      });
      setSocket(temp_socket);

      // getMyAssets();
    }
    if (!isAuthenticated) {
      if (socket !== null) socket.disconnect();
      navigate("/landing");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (messagesToSend) {
      if (socket !== null) socket.emit("sendMessage", messagesToSend);
      dispatch(setMessagesToSend(null));
    }
  }, [messagesToSend]);

  return (
    <div className="w-full">
      <Header />
      <div className="pt-[60px]">
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
        // transition: Bounce,
      />
    </div>
  );
};
