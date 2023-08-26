import { BsCheckLg } from "react-icons/bs";
import { useContextCustom } from "../context/stateContext";
import { Link } from "react-router-dom";

const ModalCreateProduct = () => {
  const { defaultHandler, setIsActivedProducts } = useContextCustom();

  const liHandler = () => {
    defaultHandler();
    setIsActivedProducts(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
          <div className=" w-[150px] h-[150px] rounded-full bg-[var(--base-color)] flex justify-center items-center">
            <div className=" w-[95px] h-[95px] rounded-full border border-[var(--gray-color)]  bg-[var(--border-color)] flex justify-center items-center">
              <BsCheckLg size={"4rem"} color="green" />
            </div>
          </div>
          <p className=" text-[18px] font-semibold text-white">
            Successfully created the product
          </p>
          <Link to={'/product'}>
          <button onClick={liHandler} className="w-[250px] h-[40px] font-medium text-[14px] myBlueBtn">
            SEE ALL PRODUCTS{" "}
          </button>
          </Link>
        </div>
  )
}

export default ModalCreateProduct