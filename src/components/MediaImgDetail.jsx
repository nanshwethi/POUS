import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";

const MediaImgDetail = () => {
  return (
    <div className=" bg-[--base-color] py-10 ">
      <div className=" flex justify-between items-center mb-10">
        <MdArrowBackIosNew
          className=" text-[--secondary-color] cursor-pointer mx-2"
          size={"1.5rem"}
        />
        <img
          src="/strawberries.avif"
          className="w-[320px] h-[300px]"
          alt=""
        />
        <MdArrowForwardIos
          className=" text-[--secondary-color] cursor-pointer mx-2"
          size={"1.5rem"}
        />
      </div>
      <div className="w-[60px] h-[50px] mx-auto flex justify-center items-center gap-3">
        <button
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <RiDeleteBinLine size={"1.5rem"} />
        </button>
        <button
          className={`text-[--base-color] basis-1/2 bg-[--secondary-color] p-1 rounded-[5px] `}
        >
          <BiCopy size={"1.5rem"} />
        </button>
      </div>
    </div>
  );
};

export default MediaImgDetail;
