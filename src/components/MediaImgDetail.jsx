import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
import { useDeletePhotoMutation } from "../redux/api/mediaApi";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { addPhotos } from "../redux/services/mediaSlice";
import { useContextCustom } from "../context/stateContext";

const MediaImgDetail = ({ imgIndex, imgDetail, imgs }) => {
  const { setShowModal } = useContextCustom();
  const [deletePhoto] = useDeletePhotoMutation();
  const dispatch = useDispatch();
  const token = Cookies.get("token");
  const [imgAry, setImgAry] = useState(imgs);
  // console.log('hh',imgIndex)
  // console.log('imgDetail',imgDetail)
  // console.log('imgAry',imgAry)

  const [pictureDetail, setPictureDetail] = useState(imgDetail);
  const [pictureIndex, setPictureIndex] = useState(imgIndex);
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(true);

  // console.log('iid',imgDetail)

  useEffect(() => {
    dispatch(addPhotos({ photos: imgs }));
  }, [imgs]);

  const deletePhotoHandler = async (id) => {
    const { data } = await deletePhoto({ id, token });
    // console.log("del", data);
    setShowModal(false);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //     const { data } = await deletePhoto({ id, token });
    //     console.log('del',data);
    //   }
    // });
  };

  const nextBtn = () => {
    if (pictureIndex < imgAry.length - 1) {
      setPictureDetail(imgs[pictureIndex + 1]);
      setPictureIndex(pictureIndex + 1);
      // console.log("hh", pictureDetail);
    } else if (pictureIndex === imgAry.length - 1) {
      setShowNext(false);
      // console.log("hh", pictureDetail);
    }
  };

  const prevBtn = () => {
    if (pictureIndex < imgAry.length - 1 && pictureIndex) {
      setPictureDetail(imgs[pictureIndex - 1]);
      setPictureIndex(pictureIndex - 1);
      // console.log("yy", pictureDetail);
    }
    if (pictureIndex === 0) {
      setShowPrev(false);
      // console.log("yy", pictureDetail, pictureIndex);
    }
  };

  return (
    <div className=" bg-[--base-color] py-10 ">
      <div className=" flex justify-between items-center mb-10">
        <MdArrowBackIosNew
          onClick={prevBtn}
          className={` ${
            showPrev ? "block" : "opacity-0"
          }  text-[--secondary-color] cursor-pointer mx-2`}
          size={"1.5rem"}
        />
        <img src={pictureDetail.url} className="w-[320px] h-[300px]" alt="" />
        <MdArrowForwardIos
          onClick={nextBtn}
          className={` ${
            showNext ? "block" : "opacity-0"
          } text-[--secondary-color] cursor-pointer mx-2`}
          size={"1.5rem"}
        />
      </div>
      <div className="w-[60px] h-[50px] mx-auto flex justify-center items-center gap-3">
        <button
          onClick={() => deletePhotoHandler(pictureDetail?.id)}
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <RiDeleteBinLine size={"1.5rem"} />
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(pictureDetail?.url)}
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <BiCopy size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};

export default MediaImgDetail;
