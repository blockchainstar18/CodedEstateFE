import filter from "../assets/images/Filter.png";
import expand from "../assets/images/Frame 1000005236.png";
import shrink from "../assets/images/Frame 1000005236 - Copy.png";

import arrowtoleft from "../assets/images/sidebar/arrowToLeft.png";

import dashboardactive from "../assets/images/sidebar/dashboard-active.png";
import dashboardinactive from "../assets/images/sidebar/dashboard-inactive.png";
import reservationactive from "../assets/images/sidebar/reservations-active.png";
import reservationinactive from "../assets/images/sidebar/reservations-inactive.png";
import listingactive from "../assets/images/sidebar/listing-active.png";
import listinginactive from "../assets/images/sidebar/listing-inactive.png";
import insightsactive from "../assets/images/sidebar/insights-active.png";
import insightsinactive from "../assets/images/sidebar/insights-inactive.png";
import calendarinactive from "../assets/images/sidebar/calendar-inactive.png";
import calendaractive from "../assets/images/sidebar/calendar-active.png";
import inboxinactive from "../assets/images/sidebar/inbox-inactive.png";
import inboxactive from "../assets/images/sidebar/inbox-active.png";
import tenantactive from "../assets/images/sidebar/tenant-active.png";
import tenantinactive from "../assets/images/sidebar/tenant-inactive.png";
import nftinactive from "../assets/images/sidebar/nft-inactive.png";
import nftactive from "../assets/images/sidebar/nft-active.png";
import portfolioinactive from "../assets/images/sidebar/portfolio-inactive.png";
import portfolioactive from "../assets/images/sidebar/portfolio-active.png";
import tripsinactive from "../assets/images/sidebar/trips-inactive.png";
import tripsactive from "../assets/images/sidebar/trips-active.png";
import wishlistinactive from "../assets/images/sidebar/wishlist-inactive.png";
import wishlistactive from "../assets/images/sidebar/wishlist-active.png";
import rentalinactive from "../assets/images/sidebar/rental-inactive.png";
import rentalactive from "../assets/images/sidebar/rental-active.png";

import propertyactive from "../assets/images/sidebar/property-active.png";
import propertyinactive from "../assets/images/sidebar/property-inactive.png";
import walletactive from "../assets/images/sidebar/wallet-active.png";
import walletinactive from "../assets/images/sidebar/wallet-inactive.png";
import rewardactive from "../assets/images/sidebar/reward-active.png";
import rewardinactive from "../assets/images/sidebar/reward-inactive.png";
import cartactive from "../assets/images/sidebar/cart-active.png";
import cartinactive from "../assets/images/sidebar/cart-inactive.png";
import transactionactive from "../assets/images/sidebar/transaction-active.png";
import transactioninactive from "../assets/images/sidebar/transaction-inactive.png";

import light from "../assets/images/light.png";

import host from "../assets/images/hand-key.png";
import traveler from "../assets/images/airplane-plane-big1.png";

import { SelectionGroup, SelectionItem } from "./Selection";

import landlord from "../assets/images/sidebar/home-user.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setDashboardMode } from "../Actions/DashboardSlice";
import { setHeaderMode } from "../Actions/HeaderSlice";

export const SideBar = () => {
  const mode = useSelector((state) => state.dashboard.mode);
  const dispatch = useDispatch();

  const dashboardMode = useSelector((state) => state.header.submode);

  return (
    <div className="sidebarheight">
      {/* <div className="w-[70px] bg-white rounded-[8px] grid justify-items-center h-full relative">
        <img className="mt-[20px]" src={filter}></img>

        <img className="absolute right-[-20px] top-[10px]" src={expand}></img>
      </div> */}
      {/* <div className="w-[300px] bg-white rounded-[8px] grid h-full p-[10px] relative">
        <img className="absolute right-[-20px] top-[10px]" src={shrink}></img>

        <div className="">
          <div className="flex m-[10px] items-center">
            <img src={filter}></img>
            <div>Filter</div>
          </div>
          <div className="w-full border-2 rounded-[10px] p-[10px]">
            <div className="rounded-[10px] w-full shadow-md p-[10px] text-[#5B1DEE]">
              Price
            </div>
            <div className="rounded-[10px] w-full shadow-md p-[10px]">
              <div>Min</div>
            </div>
          </div>
        </div>
      </div> */}
      {dashboardMode == 2 ? (
        <div className="w-[300px] bg-white rounded-[8px] h-full p-[10px] flex flex-col justify-between">
          <div className="space-y-[10px] h-max">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img src={landlord}></img>
                <div className="text-[18px]">Landlord’s Dashboard</div>
              </div>
              <img src={arrowtoleft}></img>
            </div>
            <SelectionGroup defaultItem={mode}>
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={dashboardactive}></img>
                      <div>Dashboard</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(0))}
                  >
                    <div className="flex items-center">
                      <img src={dashboardinactive}></img>
                      <div className="text-[#959595]">Dashboard</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={tenantactive}></img>
                      <div>Tenant Overview</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(1))}
                  >
                    <div className="flex items-center">
                      <img src={tenantinactive}></img>
                      <div className="text-[#959595]">Tenant Overview</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={nftactive}></img>
                      <div>My Real Estate NFTs</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(2))}
                  >
                    <div className="flex items-center">
                      <img src={nftinactive}></img>
                      <div className="text-[#959595]">My Real Estate NFTs</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={transactionactive}></img>
                      <div>Transaction</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(3))}
                  >
                    <div className="flex items-center">
                      <img src={transactioninactive}></img>
                      <div className="text-[#959595]">Transaction</div>
                    </div>
                  </div>
                }
              />
              {/* <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={insightsactive}></img>
                      <div>Insights</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(4))}
                  >
                    <div className="flex items-center">
                      <img src={insightsinactive}></img>
                      <div className="text-[#959595]">Insights</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={calendaractive}></img>
                      <div>Calendar</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(5))}
                  >
                    <div className="flex items-center">
                      <img src={calendarinactive}></img>
                      <div className="text-[#959595]">Calendar</div>
                    </div>
                  </div>
                }
              /> */}
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={inboxactive}></img>
                      <div>Inbox</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(4))}
                  >
                    <div className="flex items-center">
                      <img src={inboxinactive}></img>
                      <div className="text-[#959595]">Inbox</div>
                    </div>
                  </div>
                }
              />
              {/* <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={portfolioactive}></img>
                      <div>Portfolio</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(7))}
                  >
                    <div className="flex items-center">
                      <img src={portfolioinactive}></img>
                      <div className="text-[#959595]">Portfolio</div>
                    </div>
                  </div>
                }
              /> */}
            </SelectionGroup>
          </div>

          <SelectionGroup
            className="p-[6px] rounded-[16px] shadow-md flex gap-[8px] h-max"
            defaultItem={0}
          >
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Landlord</div>
                  </div>

                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="flex justify-between items-center py-[6px] w-full px-[10px]"
                  onClick={() => {
                    dispatch(setHeaderMode({ mode: 3, submode: 2 }));
                  }}
                >
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Landlord</div>
                  </div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Tenant</div>
                  </div>
                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="flex justify-between items-center py-[6px] w-full px-[10px]"
                  onClick={() => {
                    dispatch(setHeaderMode({ mode: 3, submode: 3 }));
                  }}
                >
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Tenant</div>
                  </div>
                </div>
              }
            />
          </SelectionGroup>
        </div>
      ) : (
        <></>
      )}
      {dashboardMode == 5 ? (
        <div className="w-[300px] bg-white rounded-[8px] h-full p-[10px] flex flex-col justify-between">
          <div className="space-y-[10px] h-max">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img src={traveler}></img>
                <div className="text-[18px]">Traveller’s Dashboard</div>
              </div>
              <img src={arrowtoleft}></img>
            </div>
            <SelectionGroup defaultItem={mode}>
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={dashboardactive}></img>
                      <div>Dashboard</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(0))}
                  >
                    <div className="flex items-center">
                      <img src={dashboardinactive}></img>
                      <div className="text-[#959595]">Dashboard</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={tripsactive}></img>
                      <div>Trips</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(1))}
                  >
                    <div className="flex items-center">
                      <img src={tripsinactive}></img>
                      <div className="text-[#959595]">Trips</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={wishlistactive}></img>
                      <div>Wishlist</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(2))}
                  >
                    <div className="flex items-center">
                      <img src={wishlistinactive}></img>
                      <div className="text-[#959595]">Wishlist</div>
                    </div>
                  </div>
                }
              />

              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={inboxactive}></img>
                      <div>Inbox</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(3))}
                  >
                    <div className="flex items-center">
                      <img src={inboxinactive}></img>
                      <div className="text-[#959595]">Inbox</div>
                    </div>
                  </div>
                }
              />
            </SelectionGroup>
          </div>

          <SelectionGroup
            className="p-[6px] rounded-[16px] shadow-md flex gap-[8px] h-max"
            defaultItem={1}
          >
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Host</div>
                  </div>

                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div className="flex justify-between items-center py-[6px] w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Host</div>
                  </div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Traveler</div>
                  </div>
                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div className="flex justify-between items-center py-[6px] w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Traveler</div>
                  </div>
                </div>
              }
            />
          </SelectionGroup>
        </div>
      ) : (
        <></>
      )}
      {dashboardMode == 3 ? (
        <div className="w-[300px] bg-white rounded-[8px] h-full p-[10px] flex flex-col justify-between">
          <div className="space-y-[10px] h-max">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img src={landlord}></img>
                <div className="text-[18px]">Tenant's Dashboard</div>
              </div>
              <img src={arrowtoleft}></img>
            </div>
            <SelectionGroup defaultItem={mode}>
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={dashboardactive}></img>
                      <div>Dashboard</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(0))}
                  >
                    <div className="flex items-center">
                      <img src={dashboardinactive}></img>
                      <div className="text-[#959595]">Dashboard</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={rentalactive}></img>
                      <div>My Rental</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(1))}
                  >
                    <div className="flex items-center">
                      <img src={rentalinactive}></img>
                      <div className="text-[#959595]">My Rental</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={transactionactive}></img>
                      <div>Transaction</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(2))}
                  >
                    <div className="flex items-center">
                      <img src={transactioninactive}></img>
                      <div className="text-[#959595]">Transaction</div>
                    </div>
                  </div>
                }
              />
              {/* <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={tripsactive}></img>
                      <div>Trips</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(3))}
                  >
                    <div className="flex items-center">
                      <img src={tripsinactive}></img>
                      <div className="text-[#959595]">Trips</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={wishlistactive}></img>
                      <div>Wishlist</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(4))}
                  >
                    <div className="flex items-center">
                      <img src={wishlistinactive}></img>
                      <div className="text-[#959595]">Wishlist</div>
                    </div>
                  </div>
                }
              /> */}

              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={inboxactive}></img>
                      <div>Inbox</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(3))}
                  >
                    <div className="flex items-center">
                      <img src={inboxinactive}></img>
                      <div className="text-[#959595]">Inbox</div>
                    </div>
                  </div>
                }
              />
            </SelectionGroup>
          </div>

          <SelectionGroup
            className="p-[6px] rounded-[16px] shadow-md flex gap-[8px] h-max"
            defaultItem={1}
          >
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Landlord</div>
                  </div>

                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="flex justify-between items-center py-[6px] w-full px-[10px]"
                  onClick={() => {
                    dispatch(setHeaderMode({ mode: 3, submode: 2 }));
                  }}
                >
                  <div className="flex items-center">
                    <img src={host}></img>
                    <div>Landlord</div>
                  </div>
                </div>
              }
            />
            <SelectionItem
              SelectedItem={
                <div className="flex justify-between items-center py-[6px] rounded-[10px] shadow-md w-full px-[10px]">
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Tenant</div>
                  </div>
                  <img src={light}></img>
                </div>
              }
              UnselectedItem={
                <div
                  className="flex justify-between items-center py-[6px] w-full px-[10px]"
                  onClick={() => {
                    dispatch(setHeaderMode({ mode: 3, submode: 3 }));
                  }}
                >
                  <div className="flex items-center">
                    <img src={traveler}></img>
                    <div>Tenant</div>
                  </div>
                </div>
              }
            />
          </SelectionGroup>
        </div>
      ) : (
        <></>
      )}
      {dashboardMode == 6 ? (
        <div className="w-[300px] bg-white rounded-[8px] h-full p-[10px] flex flex-col justify-between">
          <div className="space-y-[10px] h-max">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <img src={landlord}></img>
                <div className="text-[18px]">YieldEstate</div>
              </div>
              <img src={arrowtoleft}></img>
            </div>
            <SelectionGroup defaultItem={mode}>
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={propertyactive}></img>
                      <div>Properties</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(0))}
                  >
                    <div className="flex items-center">
                      <img src={propertyinactive}></img>
                      <div className="text-[#959595]">Properties</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={walletactive}></img>
                      <div>Wallet</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(1))}
                  >
                    <div className="flex items-center">
                      <img src={walletinactive}></img>
                      <div className="text-[#959595]">Wallet</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={insightsactive}></img>
                      <div>Portfolio</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(2))}
                  >
                    <div className="flex items-center">
                      <img src={insightsinactive}></img>
                      <div className="text-[#959595]">Portfolio</div>
                    </div>
                  </div>
                }
              />

              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={rentalactive}></img>
                      <div>Reward</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(3))}
                  >
                    <div className="flex items-center">
                      <img src={rentalinactive}></img>
                      <div className="text-[#959595]">Reward</div>
                    </div>
                  </div>
                }
              />
              <SelectionItem
                SelectedItem={
                  <div className="flex items-center justify-between px-[14px] py-[8px] rounded-[16px] shadow-md bg-[#F6F6F6]">
                    <div className="flex items-center">
                      <img src={cartactive}></img>
                      <div>Cart</div>
                    </div>

                    <img src={light}></img>
                  </div>
                }
                UnselectedItem={
                  <div
                    className="flex items-center justify-between px-[14px] py-[8px]"
                    onClick={() => dispatch(setDashboardMode(4))}
                  >
                    <div className="flex items-center">
                      <img src={cartinactive}></img>
                      <div className="text-[#959595]">Cart</div>
                    </div>
                  </div>
                }
              />
            </SelectionGroup>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
