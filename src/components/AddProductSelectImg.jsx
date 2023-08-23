import { FiUploadCloud } from "react-icons/fi";

const AddProductSelectImg = () => {
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
        <div className="w-[150px] h-[140px] border rounded-[5px] border-[var(--border-color)] myborder">
            <img src="/lemon.avif" className="w-full h-full object-cover object-center" alt="" />
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
      <button className="w-[100px] h-[40px] font-semibold text-[16px] myBlueBtn ml-auto">
          insert
        </button>
    </div>
  );
};

export default AddProductSelectImg;
