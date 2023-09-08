import { BsArrowRight } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const SaleVoucher = () => {

    const receiveList = useSelector((state)=>state.shop.list)
    const total = useSelector((state)=>state.shop.total)
    const tax = useSelector((state)=>state.shop.tax)
    console.log(receiveList)

    

  return (
    <div className=" min-h-screen min-w-full bg-[--base-color]">
      <div className=" print:hidden">
      <Navbar />

      </div>
      <div className=" print:hidden container-fluid h-[45px] p-5 flex justify-between items-center bg-[--base-color] text-[--secondary-color] border-2 border-[--border-color]">
        <p className="text-[var(--secondary-color)] text-[14px] font-semibold flex justify-center items-center gap-3">
          <BsArrowRight size={"1.3rem"} />
          Back
        </p>
      </div>
      
      <div className="w-[500px] min-h-[400px] p-10 bg-[var(--sidebar-color)] mx-auto my-10">
        <p className="text-[var(--secondary-color)] text-[27px] font-semibold px-10 py-5">
          Receive
        </p>
        {
          receiveList.length >= 1 ? receiveList.map((v)=><div key={v.id}>
            <div className=" flex justify-between items-center border-b-2 border-[--border-color] px-10 py-5">
          <div>
            <p className="text-[var(--secondary-color)] text-[16px] font-bold">
              {v.name}
            </p>
            <p className="text-[var(--gray-color)] text-[14px] font-bold">
              {v.total_stock}{v.unit}/{v.sale_price}ks
            </p>
          </div>
          <p className="text-[var(--secondary-color)] text-[16px] font-bold">
            {v.total_stock * v.sale_price}
          </p>
        </div>
        
          </div>
        ) : null

        }
        <div className=" text-end px-9 py-5">
          <div className=" text-gray-200 flex justify-end items-center">
            <span>Total : </span>
            <span className=" block w-[100px]">{total}</span>
          </div>
          <div className=" text-gray-200 flex justify-end items-center">
            <span>Tax : </span>
            <span className=" block w-[100px]">{tax}</span>
          </div>
        </div>
      </div>

      {/* btn */}
      <div className=" h-[40px] flex justify-center gap-3">
        <Link to={"/recent"}>
          <button
            className={`text-[var(--secondary-color)] px-3 py-2 hover:text-[#8AB4F8] active:text-[#8AB4F8] btn-border-table-grid`}
          >
            Recent{" "}
          </button>
        </Link>
        <Link to={'/cashier'}>
        <button
          className={`text-[var(--secondary-color)] px-3 py-2 hover:text-[#8AB4F8] active:text-[#8AB4F8] btn-border-table-grid`}
        >
          Next Sale{" "}
        </button>
        </Link>
        <button
          className={`text-[#8AB4F8] px-3 hover:text-[#8AB4F8] active:text-[#8AB4F8] btn-border-table-grid`}
          onClick={()=>window.print()}
        >
          <BsPrinter />
        </button>
      </div>
    </div>
  );
};

export default SaleVoucher;
