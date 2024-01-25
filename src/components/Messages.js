import avatar from "../assets/images/Ellipse 868.png";

export const ReceivedMessage = ({ text, time, isRead }) => {
  return (
    <div className="space-y-[5px] my-[10px] w-full">
      <div className="w-full flex justify-start">
        <div className="px-[12px] py-[8px] rounded-[5px] rounded-bl-[0px] bg-white break-words max-w-[600px]">
          {text}
        </div>
      </div>
      <div className="w-full flex justify-start gap-[10px] items-center">
        <div className="text-[#B6B6B6]">{time}</div>
        {isRead ? (
          <img src={avatar} className="w-[16px] h-[16px]"></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export const SentMessage = ({ text, time, isRead }) => {
  return (
    <div className="space-y-[5px] my-[10px] w-full">
      <div className="w-full flex justify-end">
        <div className="px-[12px] py-[8px] rounded-[5px] rounded-br-[0px] text-white bg-[#7C4AF1] break-words max-w-[600px]">
          {text}
        </div>
      </div>
      <div className="w-full flex justify-end gap-[10px] items-center">
        {isRead ? (
          <img src={avatar} className="w-[16px] h-[16px]"></img>
        ) : (
          <></>
        )}

        <div className="text-[#B6B6B6]">{time}</div>
      </div>
    </div>
  );
};
