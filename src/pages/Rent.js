import { MainPageComponent } from "../components/MainPageComponent";
import { useSelector } from "react-redux";
import { DetailPage } from "./DetailPage";
import { DetailPayment } from "./DetailPayment";
import { DetailConfirm } from "./DetailComfirm";

export const Rent = () => {
  const page = useSelector((state) => state.page.page);

  return (
    <>
      {page == null ? <MainPageComponent /> : <></>}
      {page == "detail" ? <DetailPage /> : <></>}
      {page == "confirmation" ? <DetailPayment /> : <></>}
      {page == "confirmed" ? <DetailConfirm /> : <></>}
    </>
  );
};
