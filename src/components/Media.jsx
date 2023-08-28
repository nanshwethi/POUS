import { FiUploadCloud } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import { PiGridFour } from "react-icons/pi";
import { useEffect, useState } from "react";
import MediaTable from "./MediaTable";
import MediaGrid from "./MediaGrid";
import { Button } from "@mantine/core";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {
  useGetPhotoQuery,
  useUploadPhotoMutation,
} from "../redux/api/mediaApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { addPhotos } from "../redux/services/mediaSlice";
import { useContextCustom } from "../context/stateContext";

const Media = () => {
  const { isActivedMedia } = useContextCustom();
  // console.log(isActivedMedia);
  const token = Cookies.get("token");
  const { data } = useGetPhotoQuery(token);
  const imgs = useSelector((state) => state.mediaSlice.photos);
  // console.log("ddd", data?.data);
  // console.log("imgs", imgs);

  const [uploadPhoto] = useUploadPhotoMutation();
  const [photo, setPhoto] = useState([]);
  const dispatch = useDispatch();
  const [btnTableIsActive, setBtnTableIsActive] = useState(true);

  useEffect(() => {
    dispatch(addPhotos({ photos: data?.data }));
  }, [data]);

  const uploadImg = async (imgUrl) => {
    try {
      const data = uploadPhoto({ photos: imgUrl, token });
      // console.log("ooo", { photos: imgUrl });

      // const data = uploadPhoto({ photos:chosenFiles, token });
      // console.log("ooo", imgUrl);
      console.log("uurl", data);
      // console.log("tt", token);
      // const { arg } = uploadPhoto(url);
      // console.log("url", arg.originalArgs);
    } catch (error) {
      console.log("err", error);
    }
  };

  const changeToUrl = async (files) => {
    const ary = [];
    for (let i = 0; i < files.length; i++) {
      const url = { url: window.URL.createObjectURL(files[i]) };
      console.log("url", url);
      ary.push(url);
    }

    console.log("ary", ary);
    try {
      const response = await uploadPhoto({ photos: ary, token });
      console.log("response", response);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      <p className="breadcrumb-title	">Media</p>
      <p className=" text-[14px] text-white opacity-70 mb-5 select-none">
        Media / Uploader
      </p>
      {/* <Breadcrumb breadcrumbItems={breadcrumbItems} /> */}
      <div className="py-7 border-2 border-[--border-color] bg-[--sidebar-color] w-full h-[230px] flex flex-col  justify-center items-center mb-50 mt-7 ">
        <form
          action=""
          className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            multiple
            className="input-field "
            hidden
            accept="image/*"
            type="file"
            name="picture"
            onChange={(e) => changeToUrl([...e.target.files])}
            // console.log('ee',e.target.files)
            //   ({ target: { files } }) => {
            //   // files[0] && setName(files[0].name);
            //   if (files) {
            //     setImage([window.URL.createObjectURL(files[0])]);
            //     // setExt(files[0].type);
            //     // setName(files[0].name);
            //   }
            //    console.log(files);
            // }}
          />
          {photo.length !== 0 ? (
            <>
              <img
                src={photo[0]}
                className=" w-[100px] h-[100px] rounded-full object-cover object-center"
              />
              <span className=" text-[--font-color] select-none mx-auto pt-5">
                Browse <span className="text-white ">or Drag an Image</span>
              </span>
            </>
          ) : (
            <>
              <div className=" w-[100px] h-[100px] rounded-full bg-[#1b1b1d] flex justify-center items-center">
                <div className=" w-[67px] h-[67px] border-dashed border-2 border-[#7E7F80] rounded-full bg-[--base-color] flex justify-center items-center">
                  <FiUploadCloud
                    className=" text-[--font-color]"
                    size={"1.5rem"}
                  />
                </div>
              </div>

              <span className=" text-[--font-color] select-none mx-auto pt-5">
                Browse <span className="text-white ">or Drag an Image</span>
              </span>
            </>
          )}
        </form>
      </div>
      <div className=" flex justify-between items-center mb-[30px]">
        <p className="text-white opacity-70 select-none	">
          Media / Uploaded Photo
        </p>
        <div className="btn-border-table-grid flex ">
          <button
            onClick={() => setBtnTableIsActive(true)}
            className={`${
              btnTableIsActive ? "text-[#8AB4F8]" : "text-[#7E7F80]"
            } basis-1/2 hover:text-[#8AB4F8] border-r-[1px] border-r-[#7E7F80] px-1 `}
          >
            <BsListUl />
          </button>
          <button
            onClick={() => setBtnTableIsActive(false)}
            className={`${
              btnTableIsActive ? "text-[#7E7F80]" : "text-[#8AB4F8]"
            } basis-1/2 text-[#7E7F80] px-1 hover:text-[#8AB4F8] active:text-[#8AB4F8]`}
          >
            <PiGridFour />
          </button>
        </div>
      </div>
      <div>
        {btnTableIsActive ? (
          <MediaTable imgs={imgs} />
        ) : (
          <MediaGrid imgs={imgs} />
        )}
      </div>

      {/* pagination */}
      <div>
        <Button.Group className=" border-[--border-color] pt-20 flex justify-end">
          <Button
            variant="default"
            className=" text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent"
          >
            <MdArrowBackIosNew />
          </Button>
          <Button
            variant="default"
            className=" text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent"
          >
            1
          </Button>
          <Button
            variant="default"
            className=" text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent"
          >
            2
          </Button>
          <Button
            variant="default"
            className=" text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent"
          >
            3
          </Button>
          <Button
            variant="default"
            className=" text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent"
          >
            <MdArrowForwardIos />
          </Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default Media;
