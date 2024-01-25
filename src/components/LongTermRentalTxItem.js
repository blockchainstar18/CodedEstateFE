import { useEffect } from "react";
import arrangefiltersort from "../assets/images/dashboard/Arrange, Filter, Sort.png";
import axios from "axios";
import { useState } from "react";
import { executeContract, queryContract } from "./InteractToContract";
import sampleMetadata from "../metadata.json";
import { useDispatch, useSelector } from "react-redux";

export const LongTermRentalTxItem = () => {
  const walletEx = useSelector((state) => state.auth.wallet);
  const account = useSelector((state) => state.auth.account);
  const [assets, setAssets] = useState([]);
  const dispatch = useDispatch();
  const getMetadata = async (token_uri) => {
    if (
      token_uri ==
      "https://olive-raw-pony-643.mypinata.cloud/ipfs/QmZjsexNkk8o2NZgZAFDcibpVPk8hQqVDUy1XTqt45TqQv"
    )
      return sampleMetadata;
    const metadata = (await axios.get(token_uri)).data;
    return metadata;
  };
  const getAllNFTs = async () => {
    const message = {
      all_tokens: {},
    };
    const tokens = (await queryContract(message)).tokens;
    const array = [];
    for (let i = 0; i < tokens.length; i++) {
      const messageForItem = {
        all_nft_info: {
          token_id: tokens[i],
        },
      };
      const message = {
        nft_info_long_term_rental: {
          token_id: tokens[i],
        },
      };
      const nftInfo = await queryContract(messageForItem);
      console.log(nftInfo.info.token_uri);
      const longtermrentalInfo = await queryContract(message);
      const metaData = await getMetadata(nftInfo.info.token_uri);
      console.log(metaData);
      array.push({
        token_id: tokens[i],
        metaData: metaData,
        longtermrental_info: longtermrentalInfo,
        nft_info: nftInfo,
      });
    }
    setAssets(array);
  };

  const handleDeposit = async (token_id) => {
    const message = {
      deposit_for_long_term_rental: {
        token_id: token_id,
      },
    };
    const tokenToSend = [
      {
        amount: "1000000",
        denom: "unibi",
      },
    ];
    await executeContract(
      dispatch,
      token_id,
      message,
      account,
      walletEx,
      tokenToSend
    );
  };

  useEffect(() => {
    getAllNFTs();
  }, []);

  return (
    <>
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
                  <div>{item.metaData["Building Name"].buildingNameEn}</div>
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
              <td>{item.longtermrental_info.tenant.deposit_amount} NUSD</td>
              <td>
                {item.longtermrental_info.tenant_address?.substring(0, 5) +
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

                      handleDeposit(item.token_id);
                      //   setTransactionFlow(1);
                    }}
                  >
                    Complete
                  </div>
                </div>
              </td>
            </tr>
          );
      })}
    </>
  );
};
