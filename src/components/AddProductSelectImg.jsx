import { FiUploadCloud } from "react-icons/fi";
import { useState } from "react";

const AddProductSelectImg = () => {
  const [showInsertBtn,setShowInsertBtn]=useState(false);


  return (
    <div className="w-[700px] h-full flex flex-col justify-center items-center gap-10 px-5">
      <div className=" flex flex-wrap gap-5 justify-start items-center ">
        {/* Upload img start */}
        <div className="w-[150px] h-[140px] bg-black flex flex-col justify-center items-center gap-3 border border-[var(--border-color)]">
          <div className=" w-[100px] h-[100px] rounded-full bg-[var(--gray-color)] opacity-5 absolute -top-[25%] -left-[25%]"></div>
          <div className=" w-[67px] h-[67px] border-dashed border-2 border-[var(--secondary-color)] rounded-full bg-[--base-color] flex justify-center items-center">
            <FiUploadCloud className=" text-[--font-color]" size={"1.5rem"} />
          </div>
          <p className=" text-white text-[14px]">
            <span className=" text-[--font-color]	select-none">Upload </span>{" "}
            Image
          </p>
        </div>
                {/* Upload img end */}
<<<<<<< HEAD

        <div onClick={()=>setShowInsertBtn(true)} className={`${showInsertBtn? 'border-4 rounded-[5px] border-[var(--font-color)]':'border rounded-[5px] border-[var(--border-color)]'} w-[150px] h-[140px] overflow-hidden flex justify-center items-center cursor-pointer`}>
            <img src="/lemon.avif" className="w-full h-full object-cover object-center" loading="lazy" alt="" />
=======
        <div className="w-[150px] h-[140px] border rounded-[5px] border-[var(--border-color)] myborder">
            <img src="/lemon.avif" className="w-full h-full object-cover object-center" alt="" />
>>>>>>> 17b8e8d245a2d5f592c6304245e836b309934ac7
        </div>
        <div className="w-[150px] h-[140px] border rounded-[5px] border-[var(--border-color)]">
            <img src="/lime.avif" className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="w-[150px] h-[140px] border rounded-[5px] border-[var(--border-color)]">
            <img src="/strawberries.avif" className="w-full h-full object-cover object-center" alt="" />
        </div>
        <div className="w-[150px] h-[140px] border rounded-[5px] border-[var(--border-color)]">
            <img src="/pineapple.avif" className="w-full h-full object-cover object-center" alt="" />
        </div>
      </div>
      <button className={`${showInsertBtn? 'block':'hidden'} w-[100px] h-[40px] font-semibold text-[16px] myBlueBtn ml-auto`}>
          insert
        </button>
    </div>
  );
};

export default AddProductSelectImg;
