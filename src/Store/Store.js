import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Actions/AuthSlice";
import GallerySlice from "../Actions/GallerySlice";
import HeaderSlice from "../Actions/HeaderSlice";
import PropertySlice from "../Actions/PropertySlice";
import DashboardSlice from "../Actions/DashboardSlice";
import MessageSlice from "../Actions/MessageSlice";
import NFTSlice from "../Actions/NFTSlice";
import PageSlice from "../Actions/PageSlice";
import RentSlice from "../Actions/RentSlice";
import SearchSlice from "../Actions/SearchSlice";

export const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    gallery: GallerySlice,
    header: HeaderSlice,
    property: PropertySlice,
    dashboard: DashboardSlice,
    messages: MessageSlice,
    nft: NFTSlice,
    page: PageSlice,
    rent: RentSlice,
    search: SearchSlice,
  },
});
