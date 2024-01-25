import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";
import { Dashboard } from "../pages/Dashboard";

export const DashboardLayout = () => {
  return (
    <div className="flex w-full p-[5px] gap-[5px]">
      <SideBar />
      <Dashboard />
    </div>
  );
};
