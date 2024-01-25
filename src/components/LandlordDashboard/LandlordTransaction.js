import folderFilter from "../../assets/images/dashboard/folder-filter-left.png";
import arrangefiltersort from "../../assets/images/dashboard/Arrange, Filter, Sort.png";
import { useState } from "react";
import { executeContract } from "../InteractToContract";
import { useDispatch, useSelector } from "react-redux";
import circleunchecked from "../../assets/images/Frame 1000005306.png";
import circlechecked from "../../assets/images/Frame 1000005306 (1).png";
import festivalback from "../../assets/images/festivalback.png";
import { ImageView } from "../ImageView";
import { setDashboardMode } from "../../Actions/DashboardSlice";
import { getAllNFTsInfo } from "../NFTs";
import { useEffect } from "react";
import iconEjari from "../../assets/images/dashboard/iconEjari.png";
import hourGlass from "../../assets/images/dashboard/Group 1000004833.png";

export const LandlordTransaction = () => {
  const [transactionFlow, setTransactionFlow] = useState(0);
  const walletEx = useSelector((state) => state.auth.wallet);
  const account = useSelector((state) => state.auth.account);
  const assets = useSelector((state) => state.nft.allNFTs);

  const dispatch = useDispatch();
  const handleDeposit = async (token_id, denom, amount) => {
    const message = {
      deposit_for_long_term_rental: {
        token_id: token_id,
      },
    };
    const tokenToSend = [
      {
        amount: amount.toString(),
        denom: denom.toString(),
      },
    ];
    const res = await executeContract(
      dispatch,
      token_id,
      message,
      account,
      walletEx,
      tokenToSend
    );
    if (res) setTransactionFlow(1);
  };

  return (
    <>
      {transactionFlow == 0 ? (
        <div className="w-full p-[16px]">
          <div className="text-[20px]">Transactions</div>
          <div className="flex items-center justify-between">
            <div className="text-[#959595]">
              Get an overview of your Coded Estate transactions
            </div>
            <div className="flex items-center px-[12px] py-[4px] rounded-[100px] shadow-md w-max gap-[4px]">
              <img src={folderFilter} />
              <div className="text-[#4C37C3]">Filter</div>
            </div>
          </div>
          <table className="w-full">
            <tr className="text-[#959595]">
              <td>Property</td>
              <td>Type</td>
              <td>Price (NUSD) </td>
              <td>From</td>
              <td>To</td>
              <td>Date</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
            <tr>
              <td colSpan={8} className="w-full bg-[#E3E3E3] h-[1px]" />
            </tr>
            {assets.map((item) => {
              if (
                item.longtermrental_info.tenant_address == account &&
                item.longtermrental_info.isreserved &&
                item.longtermrental_info.deposit_amount == "0"
              )
                return (
                  <tr className="rounded-[8px] shadow-md p-[8px]">
                    <td>
                      <div className="flex items-center gap-[8px] px-[8px]">
                        <div className="w-[60px] py-[10px]">
                          {/* <ImageView counts={1} /> */}
                        </div>
                        <div>
                          {item.metaData["Building Name"].buildingNameEn}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-[4px]">
                        <div className="p-[4px] rounded-[4px] shadow-md">
                          <img src={arrangefiltersort} />
                        </div>
                        <div>
                          <div className="text-[#4C37C3]">Rent</div>
                          <div className="text-[#959595]">
                            {item.longtermrental_info.tenant.renting_period[0].toString() +
                              "~" +
                              item.longtermrental_info.tenant.renting_period[1].toString()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.longtermrental_info.tenant.deposit_amount} NUSD
                    </td>
                    <td>
                      {item.longtermrental_info.tenant_address?.substring(
                        0,
                        5
                      ) +
                        "..." +
                        item.longtermrental_info.tenant_address?.substring(
                          item.longtermrental_info.tenant_address?.length - 4
                        )}
                    </td>
                    <td>
                      {item.nft_info.access.owner?.substring(0, 5) +
                        "..." +
                        item.nft_info.access.owner?.substring(
                          item.nft_info.access.owner?.length - 4
                        )}
                    </td>
                    <td>{new Date().toDateString()}</td>
                    <td className="text-[#F8BC30]">PENDING</td>
                    <td>
                      <div className="flex items-center gap-[8px]">
                        <div className="px-[14px] py-[8px] rounded-[16px] shadow-md text-[#ff0000] w-max cursor-pointer">
                          Cancel
                        </div>
                        <div
                          className="px-[14px] py-[8px] bg-[#5D00CF] rounded-[16px] text-white w-max cursor-pointer"
                          onClick={() => {
                            // setRentingAssets([
                            //   ...rentingAssets,
                            //   { nft_info: nftInfo, metaData: metaData },
                            // ]);

                            handleDeposit(
                              item.token_id,
                              item.longtermrental_info.tenant.deposit_denom,
                              item.longtermrental_info.tenant.deposit_amount
                            );
                          }}
                        >
                          Complete
                        </div>
                      </div>
                    </td>
                  </tr>
                );
            })}
            {/* <LongTermRentalTxItem /> */}
          </table>
        </div>
      ) : (
        <></>
      )}
      {transactionFlow == 1 ? (
        <>
          <div className="items-center mx-auto w-[200px] mt-[80px]">
            <div className="flex items-center w-max mx-auto">
              <img src={circlechecked} />
              <div className="w-[74px] h-[4px] bg-[#EFE8FD]"></div>
              <img src={circleunchecked} />
            </div>
            <div className="flex grid grid-cols-2">
              <div className="justify-self-center">ID</div>
              <div className="justify-self-center">Ejari</div>
            </div>
          </div>

          <div className="mx-auto flex flex-col items-center mt-[100px]">
            <img src={iconEjari} />
            <div className="text-[24px] font-bold my-[20px]">Sign Contract</div>
            <div className="w-[50%] text-center">
              You have to to sign the ownership contract through zero-knowledge
              proof from ther Official Dubai Mainland Department website.
            </div>
            <div
              className="text-white bg-[#5D00CF] rounded-[8px] px-[20px] py-[8px] mt-[50px] cursor-pointer"
              onClick={() => {
                setTransactionFlow(2);
              }}
            >
              Submit
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {transactionFlow == 2 ? (
        <>
          <div className="items-center mx-auto w-[200px] mt-[80px]">
            <div className="flex items-center w-max mx-auto">
              <img src={circlechecked} />
              <div className="w-[74px] h-[4px] bg-[#EFE8FD]"></div>
              <img src={circleunchecked} />
            </div>
            <div className="flex grid grid-cols-2">
              <div className="justify-self-center">ID</div>
              <div className="justify-self-center">Ejari</div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center mt-[100px]">
            <img src={hourGlass} />
            <div className="text-[24px] font-bold my-[20px]">
              Waiting For The Other Party To Complete
            </div>
            {/* <div>No-Objection Certificate</div> */}
            <div
              className="text-white bg-[#5D00CF] rounded-[16px] px-[20px] py-[8px] mt-[50px] cursor-pointer"
              onClick={() => {
                setTransactionFlow(3);
              }}
            >
              Direct Message
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {transactionFlow == 3 ? (
        <>
          <div className="flex items-center mx-auto mt-[80px] mb-[10px]">
            <img src={circleunchecked} />
          </div>
          <div className="flex items-center mx-auto mb-[10px]">
            <div className="justify-self-center">Ejari</div>
          </div>
          <div className="mx-auto flex flex-col items-center mt-[20px] relative">
            <div className="absolute h-[400px]">
              <img src={festivalback} className="h-full" />
            </div>
            <div className="w-[50%]">
              <ImageView counts={3} />
            </div>

            <div className="text-[24px] font-bold mt-[40px]">
              Rental Period Initiatied
            </div>
            {/* <div>No-Objection Certificate</div> */}
            <div className="flex gap-[16px] z-[100]">
              <div className="text-white bg-black rounded-[16px] px-[20px] py-[8px] mt-[50px] cursor-pointer">
                View Transaction
              </div>
              <div
                className="text-white bg-[#5D00CF] rounded-[16px] px-[20px] py-[8px] mt-[50px] cursor-pointer"
                onClick={() => dispatch(setDashboardMode(1))}
              >
                My Rental
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
