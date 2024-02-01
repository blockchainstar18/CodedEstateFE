import light from "../assets/images/light.png";
import notification from "../assets/images/Group 1000001279.png";
import swapIcon from "../assets/images/swapIcon.png";
import { SelectionGroup, SelectionItem } from "../components/Selection";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { IncentivizedTestnet, NibiruQueryClient } from "@nibiruchain/nibijs";

import { MsgSwapAssets } from "@nibiruchain/protojs/dist/nibiru/spot/v1/tx";

import { NibiruSigningClient } from "@nibiruchain/nibijs";
import axios from "axios";

import NUSDIcon from "../assets/images/swap/coloredNUSD-ce40c602.svg";
import NIBIIcon from "../assets/images/swap/coloredNIBI-49ade982.svg";
import USDTIcon from "../assets/images/swap/coloredTether-5bdcd470.svg";

import arrowdown from "../assets/images/ArrowDown.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Dropdown, Spinner } from "react-bootstrap";

export const Swap = () => {
  const TEST_CHAIN = IncentivizedTestnet(3);
  const account = useSelector((state) => state.auth.account);
  const walletEx = useSelector((state) => state.auth.wallet);

  const [balances, setBalances] = useState({
    NUSD: 0,
    NIBI: 0,
    USDT: 0,
  });

  const [pairSwap, setPairSwap] = useState(false);
  // let pairSwap = false;
  // const [coins, setCoins] = useState([]);

  const coinList = [
    {
      denom: "unibi",
      name: "NIBI",
      icon: NIBIIcon,
    },
    {
      denom: "unusd",
      name: "NUSD",
      icon: NUSDIcon,
    },
    {
      denom: "uusdt",
      name: "USDT",
      icon: USDTIcon,
    },
  ];

  const [swapParams, setSwapParams] = useState({
    swapFrom: {
      denom: "unusd",
      name: "NUSD",
      icon: NUSDIcon,
    },
    swapTo: {
      denom: "unibi",
      name: "NIBI",
      icon: NIBIIcon,
    },
  });

  const [pools, setPools] = useState([]);
  const [selectedPools, setSelectedPools] = useState([]);
  const [swapToCoins, setSwapToCoins] = useState([]);
  const [pool, setPool] = useState();
  const [amountIn, setAmountIn] = useState(0);
  const [amountOut, setAmountOut] = useState();

  const [balanceUpdated, setUpdated] = useState(false);

  const selectSwapFromCoin = () => {
    // coinList.forEach(item=>{
    // })
  };
  // const toastId = useRef(null);
  // const
  const notify = () =>
    toast(
      <div className="flex items-center gap-[20px] px-[10px]">
        <Spinner variant="primary" size="sm" />
        <div>Swapping tokens...</div>
      </div>,
      {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  const warning = () => toast.error("Transaction declined");

  const swapPair = async () => {
    setSwapParams({
      swapFrom: swapParams.swapTo,
      swapTo: swapParams.swapFrom,
    });
  };

  const swapTokens = async () => {
    notify();
    const signer = await window[walletEx].getOfflineSigner(TEST_CHAIN.chainId);
    const signingClient = await NibiruSigningClient.connectWithSigner(
      TEST_CHAIN.endptTm,
      signer
    );
    const Hn = [
      {
        typeUrl: "/nibiru.spot.v1.MsgSwapAssets",
        value: MsgSwapAssets.fromPartial({
          sender: account,
          poolId: pool.pool_id,
          tokenIn: {
            amount: (Number(amountIn) * 1000000).toString(),
            denom: swapParams.swapFrom.denom,
          },
          tokenOutDenom: swapParams.swapTo.denom,
        }),
      },
    ];
    try {
      const tx = await signingClient.signAndBroadcast(account, Hn, "auto");
      setUpdated(!balanceUpdated);
      console.log(tx.transactionHash);
      toast.dismiss();
      toast.success("Successfully Swapped Tokens");
    } catch (error) {
      // console.log(error);
      toast.dismiss();
      warning();
    }
  };

  const getBalance = async () => {
    const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm);
    const bals = await queryClient.getAllBalances(account);
    let tempBalances = {
      NUSD: 0,
      NIBI: 0,
      USDT: 0,
    };
    bals.forEach((item) => {
      if (item.denom == "unibi") tempBalances.NIBI = item.amount / 1000000;
      if (item.denom == "unusd") tempBalances.NUSD = item.amount / 1000000;
      if (item.denom == "uusdt") tempBalances.USDT = item.amount / 1000000;
    });
    setBalances(tempBalances);
  };

  const getPools = async () => {
    const res = await axios.post("https://hm-graphql.itn-3.nibiru.fi/query", {
      query:
        "{spotPools (limit: 10, order_desc: true, order_by: pool_id) { amplification pool_id  pool_type  swap_fee  tokens {  denom  amount  } total_shares { denom  amount }}}",
    });
    setPools(res.data.data.spotPools);
    // let coinList = [];
    // res.data.data.spotPools.forEach((pool) => {
    //   coinList = coinList.concat(...pool.tokens);
    // });

    // coinList = coinList.filter(
    //   (obj, index, self) =>
    //     index == self.findIndex((o) => o.denom === obj.denom)
    // );

    // setCoins(coinList);
  };

  const onChangeAmountIn = (e) => {
    // const amount = Number(e.target.value);
    if (!isNaN(Number(e.target.value))) setAmountIn(e.target.value);
    if (balances[swapParams.swapFrom.name] < Number(e.target.value))
      setAmountIn(Number(balances[swapParams.swapFrom.name]) - 0.1);
  };

  useEffect(() => {
    getPools();
  }, []);

  useEffect(() => {
    getBalance();
  }, [balanceUpdated]);

  useEffect(() => {
    if (pools.length > 0)
      coinList.forEach((coin) => {
        if (coin.denom == pools[0].tokens[0].denom) {
          setSwapParams({
            swapFrom: coin,
            swapTo: {},
          });
        }
      });
  }, [pools]);

  useEffect(() => {
    let tempPools = [];
    pools.forEach((item) => {
      item.tokens.forEach((token) => {
        if (token.denom == swapParams.swapFrom.denom) tempPools.push(item);
      });
    });
    setSelectedPools(tempPools);
  }, [swapParams.swapFrom]);

  useEffect(() => {
    let tempCoins = [];
    selectedPools.forEach((item) => {
      item.tokens.forEach((token) => {
        if (token.denom != swapParams.swapFrom.denom)
          coinList.forEach((coin) => {
            if (coin.denom == token.denom) tempCoins.push(coin);
          });
      });
    });
    setSwapToCoins(tempCoins);
  }, [selectedPools]);

  useEffect(() => {
    if (!pairSwap)
      setSwapParams({
        swapFrom: swapParams.swapFrom,
        swapTo: swapToCoins[0],
      });
    else {
      setPairSwap(false);
    }
  }, [swapToCoins]);

  useEffect(() => {
    const denoms = [swapParams.swapFrom?.denom, swapParams.swapTo?.denom];
    selectedPools.forEach((item) => {
      const pooldDenoms = [];
      item.tokens.forEach((token) => {
        pooldDenoms.push(token.denom);
      });
      if (denoms.every((denom) => pooldDenoms.includes(denom))) setPool(item);
    });
  }, [swapParams.swapTo]);

  useEffect(() => {
    let poolCapIn = 1,
      poolCapOut = 1;
    pool?.tokens?.forEach((token) => {
      if (token.denom == swapParams.swapFrom.denom)
        poolCapIn = Number(token.amount);
      else poolCapOut = Number(token.amount);
    });
    const expectedRate = poolCapOut / poolCapIn;
    setAmountOut(amountIn * expectedRate);
  }, [amountIn, pool, swapParams]);

  return (
    <div className="bg-[#F2F2F2] w-full height flex py-[10px]">
      {/* <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <div className="w-[80%] mx-auto h-full bg-white shadow-md p-[24px] flex">
        <div className="m-auto w-[600px]">
          <SelectionGroup
            className="p-[6px] rounded-[16px] shadow-md gap-[8px] w-full flex"
            defaultItem={0}
            SelectedItemMask="shadow-md rounded-[16px]"
          >
            <SelectionItem
              SelectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div>Swap Tokens</div>
                  <img src={light} />
                </div>
              }
              UnselectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div className="text-[#959595]">Swap Tokens</div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div>YieldEstate Swap</div>
                  <img src={light} />
                </div>
              }
              UnselectedItem={
                <div className="py-[6px] w-full flex px-[60px] items-center justify-between">
                  <div className="text-[#959595]">YieldEstate Swap</div>
                </div>
              }
            />
          </SelectionGroup>
          <div className="p-[24px] rounded-[12px] shadow-md">
            <div className="text-[18px]">Swap</div>
            <div className="text-[#959595]">Trade tokens in a instant</div>
            <div className="p-[16px] rounded-[8px] shadow-md space-y-[12px]">
              <div className="font-bold">Pay</div>
              <div className="globalInputForm p-[12px] flex gap-[4px]">
                <Dropdown>
                  <Dropdown.Toggle>
                    <div className="flex items-center gap-[4px] w-[100px] justify-between">
                      <img
                        src={swapParams.swapFrom.icon}
                        className="w-[30px]"
                        alt=""
                      />
                      <div className="text-[18px] cursor-pointer select-none">
                        {swapParams.swapFrom.name}
                      </div>
                      <img src={arrowdown} alt="" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {coinList.map((item) => {
                      return item.denom !== swapParams.swapFrom.denom ? (
                        <Dropdown.Item>
                          <div
                            className="flex items-center gap-[4px] w-[80px]"
                            onClick={() =>
                              setSwapParams({
                                swapFrom: item,
                                swapTo: swapParams.swapTo,
                              })
                            }
                          >
                            <img src={item.icon} className="w-[30px]" alt="" />
                            <div className="text-[18px] cursor-pointer select-none">
                              {item.name}
                            </div>
                          </div>
                        </Dropdown.Item>
                      ) : (
                        <></>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>

                <input
                  // placeholder={balances[swapParams.swapFrom.name]}
                  className="text-[18px] w-full px-[4px] py-[2px]"
                  value={amountIn}
                  onChange={onChangeAmountIn}
                />
              </div>
              <div className="shadow-md flex rounded-[100px] items-center text-[#4C37C3] w-max px-[12px] py-[4px]">
                <img src={notification} className="mr-[8px]" alt="" />
                <div>Your balance:</div>
                <div className="font-bold">
                  {balances[swapParams.swapFrom.name] +
                    swapParams.swapFrom.name}
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-[-10px] ">
              <img
                src={swapIcon}
                className="cursor-pointer shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full font-bold hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] hover:-translate-y-[3px] transition"
                onClick={() => {
                  setPairSwap(true);
                  swapPair();
                }}
                alt=""
              />
            </div>
            <div className="p-[16px] rounded-[8px] shadow-md space-y-[12px] mt-[-10px] border-t-[1px] border-[#eeeeee] ">
              <div className="font-bold">Receive</div>

              <div className="text-[#aaaaaa]">
                This will be an estimated output amount. The actual output
                amount will depend on timing/ordering of the transaction.
              </div>
              <div className="globalInputForm p-[12px] flex gap-[4px]">
                {swapToCoins.length > 1 ? (
                  <Dropdown>
                    <Dropdown.Toggle>
                      <div className="flex items-center gap-[4px] w-[100px] justify-between">
                        <img
                          src={swapParams.swapTo.icon}
                          className="w-[30px]"
                        />
                        <div className="text-[18px] cursor-pointer select-none">
                          {swapParams.swapTo.name}
                        </div>
                        <img src={arrowdown} />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {swapToCoins.map((item) => {
                        return item.denom != swapParams.swapTo.denom ? (
                          <Dropdown.Item>
                            <div
                              className="flex items-center gap-[4px] w-[80px]"
                              onClick={() =>
                                setSwapParams({
                                  swapFrom: swapParams.swapFrom,
                                  swapTo: item,
                                })
                              }
                            >
                              <img
                                src={item.icon}
                                className="w-[30px]"
                                alt=""
                              />
                              <div className="text-[18px] cursor-pointer select-none">
                                {item.name}
                              </div>
                            </div>
                          </Dropdown.Item>
                        ) : (
                          <></>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <div className="flex items-center gap-[4px] w-[100px]">
                    <img
                      src={swapParams.swapTo?.icon}
                      className="w-[30px]"
                      alt=""
                    />
                    <div className="text-[18px] cursor-pointer select-none">
                      {swapParams.swapTo?.name}
                    </div>
                  </div>
                )}

                <input
                  placeholder={amountOut}
                  disabled
                  className="text-[18px] w-full px-[4px] py-[2px]"
                />
              </div>
              <div className="shadow-md flex rounded-[100px] items-center text-[#4C37C3] w-max px-[12px] py-[4px]">
                <img src={notification} className="mr-[8px]" alt="" />
                <div>Your balance:</div>
                <div className="font-bold">
                  {balances[swapParams.swapTo?.name] + swapParams.swapTo?.name}
                </div>
              </div>
            </div>

            <div
              className="bg-[#5D00CF] text-white text-center mt-[16px] cursor-pointer px-[18px] py-[10px] shadow-[-1px_3px_3px_0_rgba(80,80,80,0.2)] rounded-full font-bold hover:shadow-[-1px_6px_10px_0_rgba(93,0,207,0.5)] hover:-translate-y-[3px]"
              onClick={() => {
                swapTokens();
              }}
            >
              Swap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
