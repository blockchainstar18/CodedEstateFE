import image from "../assets/images/image.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showGallery } from "../Actions/GallerySlice";

export const ImageView = ({ counts = 5 }) => {
  const imagesHash = useSelector(
    (state) => state.nft.currentNFT.metaData?.images
  );
  const dispatch = useDispatch();

  const gateWay = "https://olive-raw-pony-643.mypinata.cloud/ipfs/";

  const images = imagesHash?.split(",");

  const imagesURL = [];

  const pushImages = () => {
    for (let i = 0; i < images.length; i++) {
      imagesURL.push(gateWay + images[i]);
    }
  };

  pushImages();

  console.log(counts);
  return (
    <>
      {images ? (
        <div
          className={`shadow-md bg-white p-[8px] rounded-[10px] cursor-pointer ${
            counts > 2 ? "grid grid-cols-2" : ""
          } gap-[20px]`}
          onClick={() => dispatch(showGallery(imagesURL))}
        >
          {counts == 1 ? (
            <img
              src={gateWay + images[0]}
              className="w-full h-full rounded-[10px]"
            ></img>
          ) : (
            <></>
          )}
          {counts == 3 ? (
            <>
              <img src={gateWay + images[0]} className="w-full h-full"></img>
              <div className="space-y-[10px]">
                {images.map((item, i) => {
                  if (i > 0 && i < 3)
                    return <img src={gateWay + item} className="w-full"></img>;
                })}
              </div>
            </>
          ) : (
            <></>
          )}
          {counts == 5 ? (
            <>
              <img src={gateWay + images[0]} className="w-full h-full"></img>
              <div className="grid grid-cols-2 gap-[20px]">
                {images.map((item, i) => {
                  if (i > 0 && i < 5)
                    return <img src={gateWay + item} className="w-full"></img>;
                })}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
