import NUSD from "../assets/images/NUSD.png";
import avatar from "../assets/images/Ellipse 868.png";

export const MonthsCalendar = ({ Periods }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const start = Periods[0].start;
  const end = Periods[0].end;

  return (
    <div className="w-full overflow-auto sidebarheight hiddenscrollbar">
      {[2023, 2024, 2025].map((year) => {
        return (
          <>
            <div className="w-full p-[20px] text-[20px] font-bold">{year}</div>
            <div className="flex w-full flex-wrap select-none">
              {months.map((item, i) => {
                return (
                  <div>
                    <div className="m-[16px] text-[#959595]">{item}</div>
                    <div className="border-[1px] border-[#E3E3E3] bg-[#F6F6F6] p-[16px] w-[120px] h-[120px] flex">
                      <div className="m-auto flex items-center gap-[6px] relative">
                        <img src={NUSD} />
                        <div className="text-[#959595] text-[12px]">
                          NUSD 9650
                        </div>

                        {Periods.map((period) => {
                          const start = period.start;
                          const end = period.end;
                          const type = period.type;

                          let classes;
                          if (type) classes = "gradbg text-[#f6f6f6]";
                          else classes = "text-[#6f6f6f] bg-white shadow-md";

                          return (
                            <>
                              {start.year < end.year ? (
                                year == start.year ? (
                                  i + 1 >= start.month ? (
                                    i + 1 == start.month ? (
                                      <div
                                        className={`${classes} w-[102px] h-[40px] absolute rounded-l-[100px] p-[4px] z-[10]`}
                                      >
                                        <div className="relative w-max h-full flex items-center gap-[4px]">
                                          <img
                                            src={avatar}
                                            className="h-full"
                                          />
                                          <div>Geir + 3 guests 3,724.88</div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        className={`${classes} w-[120px] h-[40px] absolute left-[-18px]`}
                                      ></div>
                                    )
                                  ) : (
                                    <></>
                                  )
                                ) : year > start.year && year < end.year ? (
                                  <div
                                    className={`${classes} w-[120px] h-[40px] absolute left-[-18px]`}
                                  ></div>
                                ) : year == end.year && i + 1 <= end.month ? (
                                  i + 1 == end.month ? (
                                    <div
                                      className={`${classes} w-[102px] left-[-18px] h-[40px] absolute rounded-r-[100px]`}
                                    ></div>
                                  ) : (
                                    <div
                                      className={`${classes} w-[120px] h-[40px] absolute left-[-18px]`}
                                    ></div>
                                  )
                                ) : (
                                  <></>
                                )
                              ) : start.year == end.year &&
                                year == start.year &&
                                i + 1 >= start.month &&
                                i + 1 <= end.month ? (
                                i + 1 == start.month ? (
                                  <div
                                    className={`${classes} w-[102px] h-[40px] absolute rounded-l-[100px] p-[4px] z-[10]`}
                                  >
                                    <div className="relative w-max h-full flex items-center gap-[4px]">
                                      <img src={avatar} className="h-full" />
                                      <div>Geir + 3 guests 3,724.88</div>
                                    </div>
                                  </div>
                                ) : i + 1 == end.month ? (
                                  <div
                                    className={`${classes} w-[102px] left-[-18px] h-[40px] absolute rounded-r-[100px]`}
                                  ></div>
                                ) : (
                                  <div
                                    className={`${classes} w-[120px] h-[40px] absolute left-[-18px]`}
                                  ></div>
                                )
                              ) : (
                                <></>
                              )}
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};
