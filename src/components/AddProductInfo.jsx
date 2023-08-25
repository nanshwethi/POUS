import { useContextCustom } from "../context/stateContext";
import AddProductStepper from "./AddProductStepper";
import { BsArrowRightShort } from "react-icons/bs";


const AddProductInfo = () => {
  const {productName,
    setProductName,
    brand,
    setBrand,
    unit,
    setUnit,
    productInfo,
    setProductInfo,
    stock,
    setStock, nextStepperHandler } = useContextCustom();
  

  const nextHandler=()=>{
    // const ppp=dispatch(addProduct)
    nextStepperHandler();
  }

  return (
    <div className=" ">
        <form onSubmit={nextHandler} action="" className=" flex gap-20 justify-start items-stretch bg-[--base-color]">
          <div className=" flex flex-col gap-5 px-14 py-10 w-[680px] h-fit bg-[var(--sidebar-color)]">
            <div className=" flex justify-start items-start">
              <label
                htmlFor=""
                className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Product Name"
                className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
              />{" "}
            </div>
            <div className=" flex justify-start items-start">
              <label
                htmlFor=""
                className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
              >
                Brand
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="brand"
                className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
              />
            </div>
            <div className=" flex justify-start items-start">
              <label
                htmlFor=""
                className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
              >
                Stock
              </label>
              <input
                type="text"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder=""
                className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
              />
            </div>{" "}
            <div className=" flex justify-start items-start">
              <label
                htmlFor=""
                className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
              >
                Unit
              </label>
              <input
                type="text"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder=""
                className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
              />
            </div>{" "}
            <div className=" flex justify-start items-start">
              <label
                htmlFor=""
                className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
              >
                More Info
              </label>
              <textarea
                value={productInfo}
                onChange={(e) => setProductInfo(e.target.value)}
                placeholder=""
                className="w-[380px] h-[100px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
              />
            </div>
          </div>
          <div className="w-[150px] h-[460px] flex flex-col justify-between items-center">
            <AddProductStepper />
            <button
              type="submit"
              // onClick={nextStepperHandler}
              className="w-[110px] h-[40px] myBlueBtn font-medium text-[14px] flex justify-center items-center gap-2"
            >
              Next <BsArrowRightShort size={"1.5rem"} />
            </button>
          </div>
        </form>
    </div>
  );
};

export default AddProductInfo;
