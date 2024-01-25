import { useSelector, useDispatch } from "react-redux";
import close from "../assets/images/gallery/close-mini.png";
import share from "../assets/images/gallery/Send message, Send, Share.png";
import save from "../assets/images/gallery/heart-round-circle.png";
import previous from "../assets/images/gallery/Frame 1000005411.png";
import next from "../assets/images/gallery/Frame 1000005412.png";
import { hideGallery } from "../Actions/GallerySlice";
import { Carousel } from "react-bootstrap";

// import image from "../assets/images/image.png";

export const Gallery = () => {
  const show = useSelector((state) => state.gallery.show);
  const images = useSelector((state) => state.gallery.images);
  const dispatch = useDispatch();
  return (
    <div
      className="absolute top-0 right-0 w-[100vw] h-screen bg-[#202020] z-[1210] p-[50px] flex flex-col"
      hidden={!show}
    >
      <div className="flex justify-between w-full text-white">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(hideGallery())}
        >
          <img src={close}></img>
          <div>Close</div>
        </div>
        <div>1/{images.length}</div>
        <div className="flex gap-[10px]">
          <div className="flex items-center">
            <img src={share}></img>
            <div>Share</div>
          </div>
          <div className="flex items-center">
            <img src={save}></img>
            <div>Save</div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full h-full items-center">
        {/* <img src={previous}></img> */}
        <Carousel
          className="w-full flex"
          interval={null}
          // fade={true}
          prevIcon={<img src={previous}></img>}
          nextIcon={<img src={next}></img>}
        >
          {images.map((image) => {
            return (
              <Carousel.Item className="flex">
                <img src={image} className="mx-auto w-[600px] h-[400px]"></img>
              </Carousel.Item>
            );
          })}

          {/* <Carousel.Item className="flex">
            <img src={image} className="mx-auto w-[600px] h-[400px]"></img>
          </Carousel.Item> */}
        </Carousel>
        {/* <img src={next}></img> */}
      </div>
    </div>
  );
};
