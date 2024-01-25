export const CustomChart = ({ data = [], min, max }) => {
  const width = Math.floor(100 / data.length);

  return (
    <div className="w-full h-[100px] flex items-end gap-[2px]">
      {data.map((item, i) => {
        if (
          100 + i * (2400 / data.length) > min &&
          100 + i * (2400 / data.length) < max
        )
          return (
            <div
              className={`w-[${width}%] h-[${
                (60 * item) / 100
              }%] bg-[#5B1DEE] rounded-[4px]`}
            ></div>
          );
        else
          return (
            <div
              className={`w-[${width}%] h-[${(60 * item) / 100}%] bg-[#E3E3E3]`}
            ></div>
          );
      })}
    </div>
  );
};
