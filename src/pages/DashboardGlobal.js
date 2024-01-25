import { ImageView } from "../components/ImageView";
import { PropertyAddress } from "../components/PropertyAddress";
import { PropertyDetail } from "../components/PropertyDetail";
import { PropertyListingDetail } from "../components/PropertyListingDetail";
import { SideBar } from "../components/SideBar";
import { DetailPage } from "./DetailPage";

export const DashboardGlobal = () => {
  return (
    <div className="h-full flex mx-[5px] py-[5px] gap-[5px]">
      <SideBar />
      <div className="space-y-[24px]">
        <PropertyAddress />
        <ImageView />
        <div className="flex gap-[24px]">
          <div className="min-w-[60%]">
            <PropertyDetail />
          </div>
          <PropertyListingDetail />
        </div>
      </div>
    </div>
  );
};
