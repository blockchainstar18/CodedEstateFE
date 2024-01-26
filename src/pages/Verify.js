import close from "../assets/images/Close.png";
import icon from "../assets/images/icon1.png";
import checked from "../assets/images/Frame 1000005306 (1).png";
import unchecked from "../assets/images/Frame 1000005306.png";

import { GenerateProof } from "@reclaimprotocol/reclaim-connect-react";
import { useNavigate } from "react-router-dom";

export const Verify = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F2F2F2] p-[5px] w-full sidebarheight">
      <div className="bg-white shadow-md rounded-[6px] w-full h-full p-[24px] flex flex-col">
        <div className="flex items-center gap-[20px] h-max mb-[20px]">
          <img
            src={close}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          ></img>
          <div className="text-[24px] font-bold">Verify Your ID</div>
        </div>
        <div className="flex gap-[40px] w-full h-full">
          <div className="w-[400px] shadow-md rounded-[6px] p-[24px] h-max flex gap-[10px] border-t-[1px] border-[#f1f1f1]">
            <div className="w-max">
              <img src={unchecked}></img>
              {/* <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img>
              <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img>
              <div className="w-[4px] h-[32px] bg-[#EFE8FD] mx-auto"></div>
              <img src={unchecked}></img> */}
            </div>
            <div className="space-y-[36px]">
              <div>1. ID</div>
              {/* <div className="text-[#959595]">2. Ejari</div>
              <div className="text-[#959595]">3. DLD</div>
              <div className="text-[#959595]">4. Mint NFT Module </div> */}
            </div>
          </div>
          <div className="w-full shadow-md rounded-[6px] h-full flex items-center border-t-[1px] border-[#f1f1f1]">
            <div className="m-auto space-y-[24px]">
              <img src={icon} className="m-auto"></img>
              <div>
                <div className="text-center text-[24px]">Verify Your ID</div>
                <div className="text-center text-[#959595] mt-[20px] w-[600px]">
                  We´re utilizing Zero-Knowledge Proof Technology to verify your
                  ID, which means that all of your private data will stay
                  off-chain and we´re only validating the claim on-chain to
                  verify your identity.
                </div>
              </div>

              <div className="bg-[#5D00CF] px-[40px] py-[10px] rounded-[16px] text-white text-center w-max mx-auto cursor-pointer">
                Submit
              </div>

              <GenerateProof
                appID="06c58145-a605-49bf-acd2-23ea6d26d64b"
                userID="dasq2easdase-asdq2e3"
                onProofSubmission={(proofs, sessionId) => {
                  alert("submission success!");
                  console.log(proofs, sessionId);
                }}
                onProofSubmissionFailed={() => {
                  alert("submission failed!");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
