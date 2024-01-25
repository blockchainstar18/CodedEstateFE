import { SideBar } from "../components/SideBar";
import { MainPageComponent } from "../components/MainPageComponent";

import { Dashboard } from "./Dashboard";
import { DetailPage } from "./DetailPage";
import { DashboardTraveler } from "./DetailComfirm";
import { DashboardReservations } from "./DashboardReservations";
import { DashboardListing } from "./DashboardListing";

export const MainPage = () => {
  return (
    <div className="h-full pt-[5px] flex">
      <SideBar />
      {/* <DashboardReservations /> */}
      {/* <DashboardListing /> */}
      <Dashboard />
      {/* <DetailPage /> */}
      {/* <DashboardTraveler /> */}
      {/* <MainPageComponent /> */}
    </div>
  );
};
