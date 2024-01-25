import { queryContract } from "./InteractToContract";
import axios from "axios";
import sampleMetadata from "../metadata.json";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jwt =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzMWEyZjc5ZS1iNDQyLTQzOWUtOGNlNC0wZmRiMTIzYmNkNDciLCJlbWFpbCI6ImJsb2NrY2hhaW5zdGFyMThAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJkZjAxNDE1NGYxOTBhZjY4M2Y3Iiwic2NvcGVkS2V5U2VjcmV0IjoiZDUxNGZjOTljMGZkMGJlYTA1NzA4OTkzOGFkZGQyOTI5OWQ1ZjkyZTUyOGY2NWRjZjQ0NGIzODdmOTQ2YmEyMCIsImlhdCI6MTcwMjk2NDQxOX0.2KDJPbgRnpIbvgYbvGZnkwnjAZw7NiRhtif_SqW1z2E";
export const getMetadata = async (token_uri) => {
  if (
    token_uri ==
    "https://olive-raw-pony-643.mypinata.cloud/ipfs/QmZjsexNkk8o2NZgZAFDcibpVPk8hQqVDUy1XTqt45TqQv"
  )
    return sampleMetadata;
  const metadata = (await axios.get(token_uri)).data;
  return metadata;
};

export const pinMetadata = async (metadata) => {
  toast.info("Uploading Metadata..");
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      pinataContent: metadata,
      // pinataOptions: { cidVersion: 1 },
      pinataMetadata: { name: "sample.json" },
    }),
  };

  try {
    const response = await fetch(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      options
    );
    const res = await response.json();
    toast.dismiss();
    toast.success("Metadata uploaded.", { autoClose: 1000 });
    return res.IpfsHash;
  } catch (error) {
    toast.dismiss();
    toast.error(`Uploading failed with following errors ${error.toString()}`, {
      autoClose: 1000,
    });
    console.error(error);
  }
};

export const getAllInfo = async (token_id) => {
  const messageForItem = {
    all_nft_info: {
      token_id: token_id,
    },
  };
  const message = {
    nft_info_long_term_rental: {
      token_id: token_id,
    },
  };
  const nftInfo = await queryContract(messageForItem);
  const longtermrentalInfo = await queryContract(message);
  const metaData = await getMetadata(nftInfo.info.token_uri);
  return {
    token_id: token_id,
    metaData: metaData,
    longtermrental_info: longtermrentalInfo,
    nft_info: nftInfo,
  };
};
export const getAllTokenIds = async () => {
  const message = {
    all_tokens: {},
  };
  const tokens = (await queryContract(message)).tokens;
  // const array = [];
  // for (let i = 0; i < tokens.length; i++) {
  //   const item = await getAllInfo(tokens[i]);
  //   array.push(item);
  // }
  // return array;
  return tokens;
};

export const getMyNFTsInfo = async (account) => {
  const message = {
    tokens: {
      owner: account,
    },
  };
  const tokens = (await queryContract(message)).tokens;
  const array = [];
  for (let i = 0; i < tokens.length; i++) {
    const item = await getAllInfo(tokens[i]);
    array.push(item);
  }
  return array;
};
