import search from "../assets/images/tabler-icon-search.png";
import slash from "../assets/images/slash.png";
import avatar from "../assets/images/Profile.png";
import { InboxItem } from "./InboxItem";
import { SelectionGroup, SelectionItem } from "./Selection";
import { ReceivedMessage, SentMessage } from "./Messages";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setEmpty, setReadingNow } from "../Actions/MessageSlice";
import { setMessagesToSend } from "../Actions/MessageSlice";

export const Inbox = () => {
  const ref = useRef(null);
  const [text, setText] = useState(null);
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const account = useSelector((state) => state.auth.account);
  const [receiver, setReceiver] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const isNewMessage = useSelector((state) => state.messages.isNewMessage);
  const newMessages = useSelector((state) => state.messages.messages);
  const nftId = useSelector((state) => state.nft.currentNFT?.tokenId);
  const someoneToContact = useSelector(
    (state) => state.messages.someoneToContact
  );
  const receiverReadingChat = useSelector(
    (state) => state.messages.receiverReadingChat
  );
  const [showSearchResult, setShowResult] = useState(false);
  const [SearchResult, setResult] = useState([]);
  const [readingState, setReceiverReadingState] = useState(0);
  const dispatch = useDispatch();

  const [currentChatId, setCurrentChat] = useState(null);
  const [latestChatId, setLatestChat] = useState(null);
  const [defaultSelected, setDefaultSelected] = useState(null);
  const [time, setTime] = useState(null);
  const sendMessage = async () => {
    if (!receiver) return;
    if (!text) return;
    if (text == "") return;
    if (!nftId) return;
    let textTosend = text;
    const generatedTime = new Date();
    const MessageObj = {
      sender: account,
      generatedTime: generatedTime,
      text: textTosend,
    };
    const sendingData = {
      id: currentChatId,
      newMessage: MessageObj,
      sender: account,
      receiver: receiver,
      nftId: nftId,
    };
    dispatch(setMessagesToSend(sendingData));
    setMessages([...messages, MessageObj]);
    setTime(generatedTime);
    setText("");

    const res = await axios.post(
      "http://57.180.34.157:443/chat/sendMessage",
      sendingData
    );
    if (res.data.isCreat) {
      getChats();
      setCurrentChat(res.data.id);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const getChats = async () => {
    const res = await axios.post("http://57.180.34.157:443/user/inbox", {
      account: account,
    });
    setChats(res.data);
  };

  const getMessages = async () => {
    const res = await axios.post("http://57.180.34.157:443/chat/getMessages", {
      id: currentChatId,
      reader: account,
    });
    if (res.data) {
      setMessages(res.data.chattingSession.messages);
      setReceiverReadingState(res.data.readingState);
      if (res.data.chattingSession.personOne == account)
        setReceiver(res.data.chattingSession.personTwo);
      else setReceiver(res.data.chattingSession.personOne);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  useEffect(() => {
    if (someoneToContact && chats.length) {
      checkIfExistingChat(someoneToContact);
    }
  }, [chats]);

  useEffect(() => {
    if (someoneToContact) {
      checkIfExistingChat(someoneToContact);
    }
  }, []);

  useEffect(() => {
    if (receiverReadingChat)
      if (receiverReadingChat == currentChatId) {
        // setReceiverReadingState(0);
        alert("Receiver is looking your chat!");
        dispatch(setReadingNow(null));
      }
  }, [receiverReadingChat]);

  useEffect(() => {
    // alert("chatid");
    if (currentChatId) getMessages();
  }, [currentChatId]);

  useEffect(() => {
    if (isNewMessage) {
      for (let i = 0; i < newMessages.length; i++) {
        const isMatching = chats.some(
          (item) => item.chatId === newMessages[i].id
        );
        if (isMatching) {
          if (newMessages[i].id == currentChatId) {
            if (newMessages[i].message.sender != account)
              setMessages([...messages, newMessages[i].message]);
          }
        } else {
          setChats([{ chatId: newMessages[i].id }, ...chats]);
        }
      }
      dispatch(setEmpty());
      // setLatestChat(newMessages[newMessages.length - 1].id);
    }
  }, [isNewMessage]);
  function moveChildToFirst(parentElement, childOrder) {
    var children = parentElement.children;
    if (childOrder >= 0 && childOrder < children.length) {
      var childToMove = children[childOrder];
      parentElement.insertBefore(childToMove, parentElement.firstChild);
    } else {
      console.error("Invalid child order");
    }
  }

  useEffect(() => {
    if (chats.length) {
      // let idx = 0;
      // for (let i = 0; i < chats.length; i++) {
      //   if (chats[i].chatId == latestChatId) {
      //     idx = i;
      //   }
      // }
      // console.log(idx);
      // moveChildToFirst(document.getElementsByClassName("chats")[0], idx);
    }
  }, [latestChatId]);

  useEffect(() => {
    if (ref) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages.length]);

  const checkIfExistingChat = async (selectedAccount) => {
    console.log("1", chats.length);
    console.log("checking if chat is exist...");
    let isExist = false;
    for (let i = 0; i < chats.length; i++) {
      const res = await axios.post(
        "http://57.180.34.157:443/chat/getChattingInfo",
        {
          id: chats[i].chatId,
          reader: account,
        }
      );

      if (res.data.receiver == selectedAccount) {
        isExist = true;
        setCurrentChat(chats[i].chatId);
        setDefaultSelected(i);
      }
    }
    console.log(isExist);
    if (!isExist) {
      console.log(currentChatId);
      setReceiver(selectedAccount);
      setCurrentChat(null);
      setMessages([]);
    }
  };

  const checkIfWalletAddress = (str) => {
    let regex = /^nibi\w{39}$/i;
    return regex.test(str);
  };

  const searchByAddress = async () => {
    if (account == searchValue) return;
    const res = await axios.post("http://57.180.34.157:443/user/search", {
      account: account,
      mode: "account",
      searchValue: searchValue,
    });
    setShowResult(res.data.result);
    setResult(res.data.account);
  };

  useEffect(() => {
    if (checkIfWalletAddress(searchValue)) searchByAddress();
  }, [searchValue]);

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
    const monthString = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(date);

    const day = ("0" + date.getDate()).slice(-2);
    let formattedDate = monthString + " " + day;

    if (
      new Date().getFullYear() + new Date().getMonth() + new Date().getDate() ==
      date.getFullYear() + date.getMonth() + date.getDate()
    )
      return "Today";

    return formattedDate;
  };

  return (
    <div className="w-full flex">
      <div className="min-w-[330px] sidebarheight px-[16px]">
        <div className="bg-white pt-[16px] ml-[-2px]">
          <div className="text-[20px]">All Message</div>
          <div className="relative">
            <div className="flex items-center shadow-md rounded-[4px] px-[12px] py-[6px] gap-[12px] my-[20px]">
              <img src={search}></img>
              <input
                placeholder="Search"
                className="w-full"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <img src={slash}></img>
            </div>
            <div
              className="absolute w-full bg-white shadow-md p-[10px] space-y-[10px] rounded-[5px]"
              hidden={!showSearchResult}
            >
              {showSearchResult ? (
                <>
                  {SearchResult.map((item) => {
                    return (
                      <div
                        className="flex items-center hover:bg-[#eeeeee] rounded-[5px] cursor-pointer"
                        onClick={() => {
                          setShowResult(false);
                          setSearchValue("");
                          checkIfExistingChat(item);
                        }}
                      >
                        <img src={avatar} />
                        <div>
                          {item?.substring(0, 10) +
                            "..." +
                            item?.substring(item?.length - 10)}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="messageboxheight overflow-auto scrollbarwidth">
          {/* <SelectionGroup defaultItem={defaultSelected} className="chats">
            {chats.map((chat) => {
              return (
                <SelectionItem
                  SelectedItem={
                    <InboxItem
                      selected={true}
                      chatId={chat.chatId}
                      time={chat.chatId == currentChatId ? time : null}
                    />
                  }
                  UnselectedItem={
                    <div
                      onClick={() => {
                        setCurrentChat(chat.chatId);
                      }}
                    >
                      <InboxItem chatId={chat.chatId} />
                    </div>
                  }
                />
              );
            })}
          </SelectionGroup> */}
          {chats.map((chat) => {
            return (
              <div
                onClick={() => {
                  setTime(null);
                  setCurrentChat(chat.chatId);
                }}
              >
                <InboxItem
                  selected={chat.chatId == currentChatId}
                  time={chat.chatId == currentChatId ? time : null}
                  chatId={chat.chatId}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full sidebarheight bg-white p-[8px] ">
        <div className="bg-[#F6F6F6] border-[1px] border-[#E3E3E3] rounded-[8px] w-full h-full relative">
          <div className="flex items-center bg-white w-full rounded-t-[8px] gap-[10px] border-b-[1px] border-[#E3E3E3]">
            <img src={avatar} />
            <div className="w-full overflow-hidden">{receiver}</div>
          </div>

          <div
            className="p-[8px] messageboxheight overflow-auto scrollbarwidth"
            ref={ref}
          >
            {messages.map((message, i) => {
              return (
                <>
                  <div className="w-full text-center text-[#B6B6B6] my-[10px]">
                    {i == 0 ? getDay(new Date(message.generatedTime)) : <></>}
                    {i > 0 &&
                    getDay(new Date(message.generatedTime)) !=
                      getDay(new Date(messages[i - 1].generatedTime)) ? (
                      getDay(new Date(message.generatedTime))
                    ) : (
                      <></>
                    )}
                  </div>

                  {message.sender == account ? (
                    <SentMessage
                      text={message.text}
                      time={getTime(new Date(message.generatedTime))}
                      // isRead={i == messages.length - 1 - readingState}
                    />
                  ) : (
                    <ReceivedMessage
                      text={message.text}
                      time={getTime(new Date(message.generatedTime))}
                      // isRead={i == messages.length - 1 - readingState}
                    />
                  )}
                </>
              );
            })}
          </div>

          <div className="flex w-full px-[20px] gap-[16px] absolute bottom-[20px]">
            <div className="rounded-[5px] px-[12px] py-[9px] w-full bg-white shadow-md">
              <input
                placeholder="Type Message.."
                className="w-full"
                onChange={(e) => setText(e.target.value)}
                value={text}
                onKeyDown={handleEnterKey}
              />
            </div>
            <div
              className="text-white rounded-[100px] bg-[#5D00CF] w-[150px] text-center py-[8px] cursor-pointer"
              onClick={() => {
                // setReceiver("nibi1ejt9zv8apvfh7vjr0zlsn48ka79wg4jw0pc820");
                sendMessage();
              }}
            >
              Send
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
