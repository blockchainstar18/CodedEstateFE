import logo from "../assets/images/Logo Coded-Estate.svg";

import logowhite from "../assets/images/landingpage/logo.svg";

import warning from "../assets/images/landingpage/Warning.png";
import plus from "../assets/images/landingpage/Plus.png";
import xdefi from "../assets/images/landingpage/image 2226.png";
import metamask from "../assets/images/landingpage/image 2227.png";
import keplr from "../assets/images/landingpage/image 2228.png";
import phantom from "../assets/images/landingpage/image 2229.png";
import coinbase from "../assets/images/landingpage/image 2230.png";
import walletconnect from "../assets/images/landingpage/image 2231.png";
import leap from "../assets/images/landingpage/leap.svg";

import map from "../assets/images/landingpage/map.png";

import home from "../assets/images/landingpage/house-search.png";
import home1 from "../assets/images/landingpage/house-search.1.png";

import homeCanada from "../assets/images/landingpage/image 2134.svg";
import homeGreenland from "../assets/images/landingpage/image 2138.svg";
import homeUS from "../assets/images/landingpage/image 2135.svg";
import homeBrazil from "../assets/images/landingpage/image 2133.svg";
import homeFinland from "../assets/images/landingpage/image 2137.svg";
import homeRussia from "../assets/images/landingpage/image 2132.svg";
import homeIndonesia from "../assets/images/landingpage/image 2136.svg";

import Card from "../assets/images/landingpage/Card.png";
import image from "../assets/images/landingpage/image.png";

import icon from "../assets/images/landingpage/icon.svg";
import icon1 from "../assets/images/landingpage/icon (1).svg";
import icon2 from "../assets/images/landingpage/icon (2).svg";
import icon3 from "../assets/images/landingpage/icon (3).svg";

import real from "../assets/images/landingpage/Frame 1000005266.png";
import hidd from "../assets/images/landingpage/Frame 1000005266 (0).png";
import remo from "../assets/images/landingpage/Frame 1000005266 (1).png";
import frict from "../assets/images/landingpage/Frame 1000005266 (2).png";
import fully from "../assets/images/landingpage/Frame 1000005266 (3).png";

import email from "../assets/images/landingpage/email-mail-style-4-big.png";
import send from "../assets/images/landingpage/send-letters-mail-fast.png";

import discord from "../assets/images/landingpage/discord-big.png";
import twitter from "../assets/images/landingpage/Twitter.png";

import { ConnectWallet } from "../components/ConnectWallet";

import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { connected } from "../Actions/AuthSlice";
import { useNavigate } from "react-router-dom";
import NetworkManager from "@xdefi/wallets-connector";

import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import { setAllNFTs, updateNFT } from "../Actions/NFTSlice";
import { getAllTokenIds, getAllInfo } from "../components/NFTs";

import "../LandingPage.css";

export const LandingPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wallets, setWallets] = useState({
    isKeplrInstalled: null,
    isLeapInstalled: null,
  });

  const [flag, setFlag] = useState([1, 0, 0]);
  const [headlineText, setHeadlineText] = useState("Rent");

  const texts = ["Rent", "Buy", "Sell", "Own"];
  let currentIndex = 0;

  const cycleText = () => {
    if (currentIndex == 4) currentIndex = 0;
    setHeadlineText(texts[currentIndex]);
    currentIndex++;
    setTimeout(() => {
      cycleText();
    }, 2000);
  };

  const connect = async (wallet) => {
    if (wallet == "xdefi") {
      console.log(window.xfi);
      if (!window.xfi) {
        alert("Please install xdefi extension");
      } else {
      }
    }

    if (wallet == "leap") {
      if (!window.leap) {
        alert("Please install leap extension");
      } else {
        try {
          // const chainId = "nibiru-itn-3";
          const chainId = "nibiru-testnet-1";

          await window.leap.enable(chainId);

          const offlineSigner = window.leap.getOfflineSigner(chainId);

          const accounts = await offlineSigner.getAccounts();

          // console.log(accounts[0].address);

          setShow(false);

          dispatch(connected({ account: accounts[0].address, wallet: wallet }));

          navigate("/navigate");
        } catch (error) {
          console.log(error);
        }
      }
    }

    if (wallet == "keplr") {
      if (!window.keplr) {
        alert("Please install keplr extension");
      } else {
        try {
          // const chainId = "nibiru-itn-3";
          const chainId = "nibiru-testnet-1";

          await window.keplr.enable(chainId);

          const offlineSigner = window.keplr.getOfflineSigner(chainId);

          const accounts = await offlineSigner.getAccounts();

          // console.log(accounts[0].address);

          setShow(false);

          dispatch(connected({ account: accounts[0].address, wallet: wallet }));

          navigate("/navigate");
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const checkInstalledWallets = () => {
    setWallets({
      isLeapInstalled: window.leap !== undefined,
      isKeplrInstalled: window.keplr !== undefined,
    });
  };

  const getAllAssets = async () => {
    const tokens = await getAllTokenIds();
    for (let i = 0; i < tokens.length; i++) {
      const item = await getAllInfo(tokens[i]);
      dispatch(updateNFT(item));
    }
    // dispatch(setAllNFTs(result));
  };

  useEffect(() => {
    cycleText();
    getAllAssets();

    checkInstalledWallets();
    // connect("keplr");
  }, []);

  return (
    <div className="w-full bg-white" hidden={show}>
      <div className="flex items-center justify-between py-[14px] px-[100px] fixed top-0 w-full h-max z-[1200] bg-white">
        <img src={logo} width={140}></img>
        <div className="flex items-center gap-[32px] cursor-pointer">
          <div
            onClick={() => {
              document.getElementById("home").scrollIntoView();
            }}
          >
            Home
          </div>
          <div
            onClick={() => {
              document.getElementById("howitworks").scrollIntoView();
            }}
          >
            How it Works
          </div>
          <div>
            <a
              href="https://coded-estate.gitbook.io/coded-estate/"
              target="blank"
            >
              Documents
            </a>
          </div>
          <OverlayTrigger
            placement={"bottom"}
            overlay={<Tooltip className="margin">coming soon</Tooltip>}
          >
            <div
              className="bg-[#5D00CF] text-white px-[18px] py-[10px] rounded-[16px] cursor-pointer "
              onClick={handleShow}
            >
              Connect Wallet
            </div>
          </OverlayTrigger>

          <Modal
            show={show}
            centered
            onHide={handleClose}
            dialogClassName="modal-dialog-full-width"
            contentClassName="modal-content-full-width"
          >
            <Modal.Body>
              <div className="p-[18px] rounded-[16px] w-full fullheight flex flex-col">
                <div className="flex items-center justify-between">
                  <img src={logo}></img>
                  <div className="flex items-center gap-[12px]">
                    <div className="px-[14px] py-[8px] border-[#5D00CF] border-[1px] rounded-[16px] text-[#5D00CF] flex items-center gap-[8px]">
                      <img src={warning}></img>
                      <div>I don't have wallet</div>
                    </div>
                    <div
                      className="shadow-md rounded-[16px]"
                      onClick={handleClose}
                    >
                      <img src={plus}></img>
                    </div>
                  </div>
                </div>

                <div className="m-auto w-max h-max max-w-[370px]">
                  <div className="text-[32px] font-bold">
                    Connect to Coded Estate
                  </div>
                  <div className="text-center text-[#595959] font-semibold leading-[100%] mt-[20px]">
                    Securely access the Web3 environment by choosing your
                    preferred wallet from the available options.
                  </div>

                  <div className="grid grid-cols-2 gap-[12px] mt-[50px]">
                    <div
                      className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100"
                      onClick={() => {
                        connect("xdefi");
                      }}
                    >
                      <img src={xdefi}></img>
                      <div>
                        <div className="font-bold">Xdefi</div>
                        <div className="font-semibold text-[#4C37C3]">
                          install
                        </div>
                      </div>
                    </div>
                    <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100">
                      <img src={metamask}></img>
                      <div>
                        <div className="font-bold">Metamask</div>
                        <div className="font-semibold text-[#4C37C3]">
                          install
                        </div>
                      </div>
                    </div>
                    <div
                      className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100"
                      onClick={() => {
                        connect("keplr");
                      }}
                    >
                      <img src={keplr} className="w-[40px]"></img>
                      <div>
                        <div className="font-bold">Keplr</div>

                        {wallets.isKeplrInstalled ? (
                          <></>
                        ) : (
                          <div className="font-semibold text-[#4C37C3]">
                            install
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100">
                      <img src={phantom}></img>
                      <div>
                        <div className="font-bold">Phantom</div>
                        <div className="font-semibold text-[#4C37C3]">
                          install
                        </div>
                      </div>
                    </div>
                    <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100">
                      <img src={coinbase}></img>
                      <div>
                        <div className="font-bold">Coinbase</div>
                        <div className="font-semibold text-[#4C37C3]">
                          install
                        </div>
                      </div>
                    </div>
                    <div className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100">
                      <img src={walletconnect}></img>
                      <div>
                        <div className="font-bold">WalletConnect</div>
                        <div className="font-semibold text-[#4C37C3]">
                          install
                        </div>
                      </div>
                    </div>

                    <div
                      className="px-[8px] py-[12px] rounded-[8px] shadow-md flex gap-[12px] items-center cursor-pointer transition ease-in-out hover:bg-gray-300 duration-100"
                      onClick={() => {
                        connect("leap");
                      }}
                    >
                      <img src={leap} className="w-[40px]"></img>
                      <div>
                        <div className="font-bold">Leap</div>
                        {wallets.isLeapInstalled ? (
                          <></>
                        ) : (
                          <div className="font-semibold text-[#4C37C3]">
                            install
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* <NetworkManager options={options} /> */}

                  <div className="bg-[#5B1DEE] text-white px-[20px] py-[12px] rounded-[16px] w-max mx-auto mt-[20px]">
                    Connect Wallet
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div id="home" className="mt-[70px] relative w-full flex">
        <img src={map} className="w-full"></img>
        <div className="absolute w-full h-full flex z-[10]">
          <div className="m-auto">
            <div className="flex text-[48px] gap-[16px]">
              <div>Easiest Way to</div>
              <div className="w-[100px]">{headlineText}</div>
              <div>Real Estate</div>
            </div>
            <div className="globalInputForm p-[4px] pl-[16px] flex items-center w-full gap-[12px] radius40 mt-[20px]">
              <img src={home}></img>
              <input placeholder="Search properties" className="w-full"></input>
              <OverlayTrigger
                placement={"bottom"}
                overlay={<Tooltip>coming soon</Tooltip>}
              >
                <div className="bg-[#202020] p-[10px] rounded-[40px] cursor-pointer">
                  <img src={home1}></img>
                </div>
              </OverlayTrigger>
            </div>
            <div className="p-[24px] rounded-[12px] shadow-md bg-white mt-[16px] space-y-[10px]">
              <div className="text-center text-[20px]">Get Started</div>
              <div className="flex gap-[12px] justify-center">
                <OverlayTrigger
                  placement={"bottom"}
                  overlay={<Tooltip>coming soon</Tooltip>}
                >
                  <div className="px-[18px] py-[10px] rounded-[16px] text-[#5D00CF] border-[#5D00CF] border-[1px] cursor-pointer">
                    I'm Buyer
                  </div>
                </OverlayTrigger>

                <OverlayTrigger
                  placement={"bottom"}
                  overlay={<Tooltip>coming soon</Tooltip>}
                >
                  <div className="px-[18px] py-[10px] rounded-[16px] text-[#5D00CF] border-[#5D00CF] border-[1px] cursor-pointer">
                    I'm Owner
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement={"bottom"}
                  overlay={<Tooltip>coming soon</Tooltip>}
                >
                  <div className="px-[18px] py-[10px] rounded-[16px] text-[#5D00CF] border-[#5D00CF] border-[1px] cursor-pointer">
                    I'm Renting
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement={"bottom"}
                  overlay={<Tooltip>coming soon</Tooltip>}
                >
                  <div className="px-[18px] py-[10px] rounded-[16px] text-white bg-black cursor-pointer">
                    Just Looking
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>
        <img
          src={homeCanada}
          className="absolute top-[8vw] left-[10vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={homeUS}
          className="absolute top-[16vw] left-[20vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={homeGreenland}
          className="absolute top-[4vw] left-[35vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={homeBrazil}
          className="absolute top-[32vw] left-[30vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={homeFinland}
          className="absolute top-[8vw] left-[62vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={homeRussia}
          className="absolute top-[7vw] left-[75vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
        <img
          src={Card}
          className="absolute rounded-[16px] top-[10vw] left-[77vw] z-[90] transition ease-in-out duration-300 hover:-translate-y-[20px] hover:z-[110]"
        ></img>
        <img
          src={homeIndonesia}
          className="absolute top-[30vw] left-[74vw] rounded-[50%] z-[100] transition ease-in-out hover:scale-150 duration-300 hover:-translate-y-1"
        ></img>
      </div>

      <div id="howitworks" className="flex w-full">
        <div className="mx-auto my-[100px] text-center w-[50%]">
          <div className="text-[48px]">How it Works</div>
          <div className="text-[#5A5A5A]">
            Sign in and verify ownership in a few simply clicks and experience
            the first decentralized platform that serves as an all in one hub
            for travelers, investors, future home owners and home owners
          </div>
          <div className="flex my-[50px]">
            <img
              src={icon}
              className="mx-[80px] transition ease-in-out hover:-translate-y-[20px] duration-300"
            ></img>
            <div className="flex">
              <div className="m-auto space-y-[20px]">
                <div className="flex items-center gap-[20px] text-[#4C37C3]">
                  <div className="shadow-md w-[40px] h-[40px] rounded-[100px] text-center text-[22px]">
                    1
                  </div>
                  <div className="text-[32px]">Own</div>
                </div>
                <div className="text-center text-[#5A5A5A]">
                  Own premium Dubai real estate from as low as $50 when you
                  participate in a YieldEstate auction and earn up to 8% Yield*
                  on your fraction of ownership.
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-[50px]">
            <div className="flex">
              <div className="m-auto space-y-[20px]">
                <div className="flex items-center gap-[20px] text-[#4C37C3]">
                  <div className="shadow-md w-[40px] h-[40px] rounded-[100px] text-center text-[22px]">
                    2
                  </div>
                  <div className="text-[32px]">Travel</div>
                </div>
                <div className="text-center text-[#5A5A5A]">
                  Unlock travel experiences on the blockchain, find your next
                  home away from home and use cryptocurrency or stable coins to
                  visit unique destinations in the UAE.
                </div>
              </div>
            </div>
            <img
              src={icon1}
              className="mx-[80px] transition ease-in-out hover:-translate-y-[20px] duration-300"
            ></img>
          </div>
          <div className="flex my-[50px]">
            <img
              src={icon2}
              className="mx-[80px] transition ease-in-out hover:-translate-y-[20px] duration-300"
            ></img>
            <div className="flex">
              <div className="m-auto space-y-[20px]">
                <div className="flex items-center gap-[20px] text-[#4C37C3]">
                  <div className="shadow-md w-[40px] h-[40px] rounded-[100px] text-center text-[22px]">
                    3
                  </div>
                  <div className="text-[32px]">Buy & Sell</div>
                </div>
                <div className="text-center text-[#5A5A5A]">
                  Verifying & Transferring ownership made easier than ever
                  before leveraging zero-knowledge proofs and smart contracts.
                  Sign in and complete verification to purchase or sell homes in
                  Dubai.
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-[50px]">
            <div className="flex">
              <div className="m-auto space-y-[20px]">
                <div className="flex items-center gap-[20px] text-[#4C37C3]">
                  <div className="shadow-md w-[40px] h-[40px] rounded-[100px] text-center text-[22px]">
                    4
                  </div>
                  <div className="text-[32px]">Rental</div>
                </div>
                <div className="text-center text-[#5A5A5A]">
                  Extend your travel into home away from home by leveraging
                  on-chain real estate to rent homes more seamless than ever
                  before
                </div>
              </div>
            </div>
            <img
              src={icon3}
              className="mx-[80px] transition ease-in-out hover:-translate-y-[20px] duration-300"
            ></img>
          </div>
        </div>
      </div>

      <div id="document" className="flex w-full">
        <div className="mx-auto flex my-[100px] justify-between">
          <div className="flex gap-[30px]">
            <div className="w-[8px] rounded-[10px] h-full shadow-md"></div>

            <div className="flex flex-col justify-between">
              <div onMouseEnter={() => setFlag([1, 0, 0])}>
                {flag[0] ? (
                  <div className="text-[40px]">Marketplace</div>
                ) : (
                  <div className="text-[#959595] text-[32px]">Marketplace</div>
                )}
                <div className="text-[#5A5A5A] max-w-[450px]" hidden={!flag[0]}>
                  Making buying and selling real estate simpler than ever
                  combining traditional property transactions with smart
                  contracts, leveraging the blockchain. Coded Estate removes
                  intermediaries, empowers buyers and removes friction from
                  property ownership
                </div>
              </div>
              <div onMouseEnter={() => setFlag([0, 1, 0])}>
                {flag[1] ? (
                  <div className="text-[40px]">Rental</div>
                ) : (
                  <div className="text-[#959595] text-[32px]">Rental</div>
                )}
                <div className="text-[#5A5A5A] max-w-[450px]" hidden={!flag[1]}>
                  Your Key to Unforgettable Rentals. Unlock a world of adventure
                  and discovery with blockchain-powered rentals. Explore unique
                  spaces, create lasting memories, and embark on extraordinary
                  journeys with us, on-chain
                </div>
              </div>
              <div onMouseEnter={() => setFlag([0, 0, 1])}>
                {flag[2] ? (
                  <div className="text-[40px]">YieldEstate</div>
                ) : (
                  <div className="text-[#959595] text-[32px]">YieldEstate</div>
                )}
                <div className="text-[#5A5A5A] max-w-[450px]" hidden={!flag[2]}>
                  Coded Estate redefines property ownership with fractionalized
                  real estate investments. Join us to stake your claim in prime
                  properties and experience the future of real estate. Explore
                  flexible ownership options and embark on a new era in real
                  estate investment.
                </div>
              </div>
            </div>
          </div>
          <img
            src={image}
            className="transition ease-in-out duration-300 hover:-translate-y-5"
          ></img>
        </div>
      </div>

      <div className="flex w-full">
        <div className="mx-auto w-[80%] my-[100px] grid grid-cols-5">
          <div className="col-span-4">
            <div className="text-[36px] w-[80%]">
              The Five Key Features of Our Cutting-Edge NFTs Marketplace
            </div>
          </div>
          <div className="p-[20px] shadow-md space-y-[16px] rounded-[8px] transition ease-in-out hover:-translate-y-[10px] duration-100">
            <img src={real}></img>
            <div>Real world assets in NFTs</div>
          </div>
          <div></div>
          <div className="p-[20px] shadow-md space-y-[16px] rounded-[8px] transition ease-in-out hover:-translate-y-[10px] duration-100">
            <img src={hidd}></img>
            <div>No hidden or extra fees</div>
          </div>
          <div></div>
          <div className="p-[20px] shadow-md space-y-[16px] rounded-[8px] transition ease-in-out hover:-translate-y-[10px] duration-100">
            <img src={remo}></img>
            <div>Remove barriers to real estate investments</div>
          </div>
          <div></div>
          <div className="p-[20px] shadow-md space-y-[16px] rounded-[8px] transition ease-in-out hover:-translate-y-[10px] duration-100">
            <img src={frict}></img>
            <div>Frictionless buying and selling</div>
          </div>
          <div></div>
          <div className="p-[20px] shadow-md space-y-[16px] rounded-[8px] transition ease-in-out hover:-translate-y-[10px] duration-100">
            <img src={fully}></img>
            <div>Fully decentralised process</div>
          </div>
        </div>
      </div>

      <div className="gradbg px-[120px] pt-[56px] pb-[24px]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between items-center">
            <div className="w-full my-[20px]">
              <img src={logowhite}></img>
            </div>
            <div className="flex text-white gap-[24px]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  document.getElementById("home").scrollIntoView();
                }}
              >
                Home
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  document.getElementById("howitworks").scrollIntoView();
                }}
              >
                How it Works
              </div>
              <div>
                <a
                  href="https://coded-estate.gitbook.io/coded-estate/"
                  target="blank"
                >
                  Documents
                </a>
              </div>
            </div>
          </div>
          {/* <div className="w-[30%]">
            <div className="text-white">
              Ready to join our community? Subscribe to our newsletter now.
            </div>
            <div className="bg-white p-[4px] pl-[16px] flex items-center  gap-[12px] radius40 mt-[20px]">
              <img src={email}></img>
              <input placeholder="Enter email" className="w-full"></input>
              <div className="bg-[#4c37c3] p-[10px] rounded-[40px]">
                <img src={send}></img>
              </div>
            </div>
          </div> */}
        </div>
        <div className="w-full bg-[#959595] h-[1px] my-[24px]"></div>
        <div className="flex justify-between">
          <div className="flex gap-[10px] text-white">
            <div>Copyright © 2024 CodedEstate</div>
            {/* <div>Company</div>
            <div>About</div> */}
          </div>
          <div className="flex gap-[10px]">
            <div>
              <a href="https://discord.gg/vdMcXkQQ" target="blank">
                <img src={discord}></img>
              </a>
            </div>
            <div>
              <a
                href="https://x.com/codedestate?s=21&t=5OdxYhHLF31Z8VwzP3lI0g"
                target="blank"
              >
                <img src={twitter}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
