import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { DetailPage } from "./pages/DetailPage";
import { DetailConfirm } from "./pages/DetailComfirm";
import { DetailPayment } from "./pages/DetailPayment";
import { Profile } from "./pages/Profile";
import { Verify } from "./pages/Verify";

import "bootstrap/dist/css/bootstrap.min.css";
import { ImageShow } from "./pages/ImageShow";
import { LandingPage } from "./pages/LandingPage";
import { MainPageComponent } from "./components/MainPageComponent";
import { Dashboard } from "./pages/Dashboard";
import { SideBar } from "./components/SideBar";

import { Navigater } from "./Navigater";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
import { DashboardReservations } from "./pages/DashboardReservations";
import { DashboardListing } from "./pages/DashboardListing";
import { Gallery } from "./components/Gallery";
import { DashboardGlobal } from "./pages/DashboardGlobal";
import { DashboardLayout } from "./Layout/DashboardLayout";
import { Swap } from "./pages/Swap";
import { Rent } from "./pages/Rent";
import { useSelector } from "react-redux";
import { Account } from "./pages/Account";

function App() {
  const show = useSelector((state) => state.gallery.show);

  return (
    <div className="w-full bg-[#F6F6F6] font-semibold flex flex-col">
      {/* <Router>
        <Navigater />
        <Routes>
          <Route path="*" element={<Navigate to="/landing" replace />} />
          <Route path="/home" element={<Navigater />} />

          <Route path="/landing" element={<LandingPage />} />
          <Route
            path="/yieldestate"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <div className="h-full pt-[5px] flex">

                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/rent/longterm"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <div className="h-full pt-[5px] flex">

                    <MainPageComponent />
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/landlord"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <DashboardGlobal />

                </div>
              </div>
            }
          />
          <Route
            path="/property"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <div className="h-full pt-[0px] flex">

                    <DetailPage />

                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <div className="h-full pt-[0px] flex">
 
                    <DetailPayment />
          
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/dashboard/host"
            element={
              <div className="h-full">
                <Header />
                <div className="pt-[60px] h-full">
                  <div className="h-full pt-[5px] flex">
                    <SideBar />

                    <DashboardListing />
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </Router> */}

      <div hidden={show}>
        <Router>
          {/* <Navigater /> */}
          <Routes>
            <Route path="*" element={<LandingPage />}></Route>
            {/* <Route element={<MainLayout />}>
              <Route path="account" element={<Account />}></Route>
              <Route path="swap" element={<Swap />}></Route>

              <Route path="yieldestate" element={<></>}></Route>
              <Route path="rent" element={<Rent />}></Route>
              <Route path="buy" element={<></>}></Route>
              <Route path="dashboard" element={<DashboardLayout />}></Route>
            </Route>
            <Route path="*" element={<Navigater />}></Route> */}
          </Routes>
        </Router>
      </div>
      <Gallery />
    </div>
  );
}

export default App;
