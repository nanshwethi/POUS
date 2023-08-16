import { FiUploadCloud } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import { PiGridFour } from "react-icons/pi";
import { useState } from "react";
import MediaTable from "./MediaTable";
import MediaGrid from "./MediaGrid";
// import {BsListUl} from "react-icons/bs"
// import {BsListUl} from "react-icons/bs"

const Media = () => {
  const [btnTableIsActive, setBtnTableIsActive] = useState(true);

  return (
    <div className=" w-full h-full py-4 px-5 bg-[--base-color]">
      <p className="font-semibold	text-[22px] text-white mb-2 select-none	">Media</p>
      <p className="text-white opacity-70 mb-[30px] select-none	">Media / Uploader</p>
      <div className="py-7 border-2 border-[--border-color] bg-[--sidebar-color] w-full h-[230px] flex flex-col  justify-center items-center mb-50">
        <div className=" relative  mb-[30px]">
        <div className="">
          <div className=" w-[100px] h-[100px] rounded-full bg-[#7E7F80] opacity-5 absolute -top-[25%] -left-[25%]"></div>
          <div className=" w-[67px] h-[67px] border-dashed border-2 border-[#7E7F80] rounded-full bg-[--base-color] flex justify-center items-center">
            <FiUploadCloud className=" text-[--font-color]" size={'1.5rem'}/>
          </div>
        </div>
          <input className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer" type="file"/>
          </div>

        <p className=" text-white">
          <span className=" text-[--font-color] select-none	select-none	">Browse </span>or Drag an Image
        </p>
      </div>
      <div className=" flex justify-between items-center mb-[30px]">
        <p className="text-white opacity-70 select-none	">Media / Uploaded Photo</p>
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
      <div>{btnTableIsActive ? <MediaTable /> : <MediaGrid />}</div>
    </div>
  );
};

export default Media;
