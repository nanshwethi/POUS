import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCopy } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const MediaImgDetail = () => {
  return (
    <div className=" bg-[--base-color] pb-20 h-screen">
      <div className="h-[50px] mb-10 flex justify-between items-center">
        <span></span>
        <span className=" text-[--secondary-color]">Strawberries.avif</span>
        <Link to={"/media"}>
          <MdClose
            className=" text-[--secondary-color] cursor-pointer mx-2"
            size={"1.5rem"}
          />
        </Link>
      </div>
      <div className=" flex justify-between items-center mb-10">
        <MdArrowBackIosNew
          className=" text-[--secondary-color] cursor-pointer mx-2"
          size={"1.5rem"}
        />
        <img
          src="/public/strawberries.avif"
          className="w-[540px] h-[490px]"
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
