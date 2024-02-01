import arrowdown from "../../assets/images/arrowdown (2).png";
import { MonthsCalendar } from "../../components/MonthsCalendar";
import { RightBar } from "../../components/RightBar";

export const LandlordCalendar = () => {
  return (
    <div className="bg-[#F6F6F6] rounded-[8px] w-full h-full flex gap-[5px]">
      <div className="w-full rounded-[8px] bg-white flex flex-col h-full relative">
        <div className="absolute flex right-[16px] top-[12px] gap-[12px] bg-white">
          <div className="border-[1px] border-[#E6E6E6] rounded-[100px] p-[6px] flex items-center gap-[12px]">
            <div className="rounded-[100px] p-[14px] bg-[#E6E6E6]" />
            <div>Modern Apartment in Bergen</div>
            <img src={arrowdown} className="mr-[10px]" alt="" />
          </div>
          <div className="border-[1px] border-[#E6E6E6] rounded-[100px] px-[16px] py-[6px] flex items-center gap-[12px]">
            <div>View</div>
            <img src={arrowdown} alt="" />
          </div>
        </div>
        <MonthsCalendar
          Periods={[
            {
              type: 1,
              start: {
                year: 2023,
                month: 11,
              },
              end: {
                year: 2024,
                month: 1,
              },
            },
            {
              type: 0,
              start: {
                year: 2024,
                month: 3,
              },
              end: {
                year: 2024,
                month: 8,
              },
            },
          ]}
        />
      </div>
      <div className="w-[400px] rounded-[8px] bg-white p-[16px] space-y-[16px] overflow-auto sidebarheight hiddenscrollbar">
        {/* <>
    <SelectionGroup
      className="p-[6px] rounded-[100px] shadow-md flex gap-[8px] h-max"
      defaultItem={0}
    >
      <SelectionItem
        SelectedItem={
          <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
            <div>Pricing</div>

            <img src={light}></img>
          </div>
        }
        UnselectedItem={
          <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
            <div className="text-[#959595]">Pricing</div>
          </div>
        }
      />
      <SelectionItem
        SelectedItem={
          <div className="flex justify-between items-center py-[6px] rounded-[100px] shadow-md w-full px-[20px]">
            <div>Availability</div>
            <img src={light}></img>
          </div>
        }
        UnselectedItem={
          <div className="flex justify-between items-center py-[6px] w-full px-[20px]">
            <div className="text-[#959595]">Availability</div>
          </div>
        }
      />
    </SelectionGroup>
    <div className="flex justify-between items-center">
      <div className="text-[24px]">Monthly Pricing</div>
      <div
        className="underline"
        onClick={() => setShowPriceEditModal(true)}
      >
        Edit
      </div>

      <Modal
        show={showPriceEditModal}
        centered
        onHide={() => setShowPriceEditModal(false)}
      >
        <Modal.Body>
          <div className="p-[18px] w-[400px]">
            <div className="w-full flex justify-between items-center">
              <div className="text-[24px] font-bold">
                Edit Monthly Price
              </div>
              <img src={closeIcon} />
            </div>
            <div className="p-[12px] rounded-[8px] border-[1px] border-[#5D00CF] my-[10px]">
              <div>monthly price</div>
              <div className="flex items-center font-semibold gap-[10px]">
                <img src={NUSD} />
                <div className="text-[24px]">NUSD 500</div>
              </div>
            </div>
            <div className="text-[#959595] my-[10px]">
              *The price the guest sees could be lower than the
              minimum nightly price you set if you have discounts or
              promotions.
            </div>
            <div className="bg-[#5D00CF] text-white text-center rounded-[16px] py-[12px]">
              Done
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
    <div className="p-[12px] rounded-[8px] shadow-md">
      <div>Select monthly price</div>
      <div className="flex items-center gap-[12px]">
        <img src={NUSD} />
        <div className="text-[28px]">NUSD 500</div>
      </div>
    </div>
    <div className="bg-[#E3E3E3] w-full h-[1px]" />
    <div className="text-[18px]">Discount</div>
    <div className="text-[#5A5A5A] text-[14px]">
      Adjust your pricing to attract more guests.
    </div>
    <div className="p-[12px] rounded-[8px] shadow-md">
      <div className="text-[18px]">12 Month</div>
      <div className="text-[#959595]">For 7 nights or more</div>
      <div className="flex items-end justify-between">
        <div className="text-[20px] font-bold">12%</div>
        <div className="text-[#5A5A5A] text-[14px]">
          Weekly average is 6,899 NUSD
        </div>
      </div>
    </div>
    <div className="p-[12px] rounded-[8px] shadow-md">
      <div className="text-[18px]">24 Month</div>
      <div className="text-[#959595]">For 28 nights or more</div>
      <div className="flex items-end justify-between">
        <div className="text-[20px] font-bold">12%</div>
        <div className="text-[#5A5A5A] text-[14px]">
          Monthly average is 25,200 NUSD
        </div>
      </div>
    </div>
  </> */}

        <RightBar />
      </div>
    </div>
  );
};
