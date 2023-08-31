import React, { useEffect, useState } from "react";
import { BsListUl, BsSearch } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Select } from "@mantine/core";
import { useGetUnitStockQuery,useUpdateStockMutation,useGetSingleStockQuery,useDeleteStockMutation} from "../redux/api/stockApi.js";
import { addStockUnitQty } from "../redux/services/StockSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";


const Stock = () => {
  const token = Cookies.get("token");
  // console.log(token)
  const [unit, setUnit] = useState(1);
  // console.log(unit)
  const path = { token: token, p: unit };
  const currentData  = useGetUnitStockQuery(path);
  console.log(currentData);
  const [offcanvas, setOffcanvas] = useState(false);
  const dispatch = useDispatch()
  const [qty, setQty] = useState(null);
  // const [qty, setQty] = useState(null);
  const [desc, setDesc] = useState();
  const [pid, setPid] = useState();
  // const {data} = useSelector((state)=>state.stock)
  // console.log(data);

  const [updateStock] = useUpdateStockMutation()
  const [deleteStock] = useDeleteStockMutation()
  const i =  20;
  const d = {token,i}
  const data = useGetSingleStockQuery(d)
  console.log(data)
  // console.log(update(d));

  const delStock = async(id)=>{
    setPid(id)
    console.log(id);
    const d ={token,id}
    const data = await deleteStock(d)
    console.log(data)
  }

  const addStockQty = (e,id) => {
    setPid(id)
    setOffcanvas(true)
    console.log(pid)
  };

 

  const update =async(id)=>{
    // dispatch(addStockUnitQty(forStock))
    console.log(id)
    const content = {user_id : 1,product_id : id,quantity : Number(qty),more : desc}
    console.log(token);
    const data = await updateStock({token,content})
    console.log(data);
    
  }



  return (
    <div className=" flex-1 bg-[#202124] p-5 px-6 min-h-screen flex flex-col relative overflow-hidden">
      <div className="">
        <div>
          <h1 className=" text-2xl font-medium text-white">Stock Control</h1>
          <p className=" text-gray-400 mt-1 font-medium text-xs">
            Inventory / Stock control
          </p>
        </div>
        <div className=" mt-[40px] flex justify-between items-center">
          <div>
            <p className=" text-gray-100 font-semibold text-xl">
              Products Overview
            </p>
            <div className=" mt-3">
              <div className="border-gray-700 rounded border inline px-2 py-1">
                <BsSearch className=" inline text-gray-400 me-3" />
                <input
                  type="text"
                  placeholder="search"
                  className=" w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold"
                />
              </div>
            </div>
          </div>
          <div className=" flex items-baseline">
            <p className=" text-sm text-gray-400 me-2">Sort : </p>
            <Select
              defaultValue={"last"}
              className=" custom-select"
              rightSection={
                <FaAngleDown size="1rem" color="rgb(209 213 219)" />
              }
              rightSectionWidth={30}
              unstyled
              data={[
                { value: "last", label: "last" },
                { value: "first", label: "first" },
              ]}
            />
          </div>
        </div>
        {/* table */}
        <div className=" mt-[50px]">
          <table className=" w-full text-gray-300 border border-gray-700 text-sm ">
            <thead>
              <tr className=" border-b border-b-gray-700">
                
                <th className=" py-4 text-start px-1 ps-7 uppercase font-medium">
                  Product Name
                </th>
                <th className=" py-4 text-start px-1 uppercase font-medium">
                  User Name
                </th>
                <th className=" py-4 text-end px-1 uppercase font-medium">
                  Added quantity
                </th>
                <th className=" py-4 pe-4 text-end px-1 uppercase font-medium">
                  Created At
                </th>
                <th className=" py-4 pe-4 text-end px-1 uppercase font-medium"></th>
              </tr>
            </thead>
            <tbody className=" text-gray-100">
              {currentData?.data?.data.map((v) => (
                <tr
                  className=" border-b border-b-gray-700 "
                  key={v.id}
                  >
                  <td className="px-1 text-start py-4 ps-7">{v.product_name}</td>
                  <td className="px-1 text-start py-4 ">{v.user_name}</td>
                  <td className="px-1 py-4 text-end">{v.quantitiy}</td>
                  <td className="px-1 pe-4 py-4 text-end">{v.created_at}</td>
                  <td className="px-1 pe-4 py-4 text-end flex justify-center ">
                    <button className=" delete-stock block w-1/2 " onClick={(e)=> delStock(v.id)}>
                    <AiOutlineDelete className=" text-lg text-gray-200 mx-auto " />
                    </button>
                    <button className=" add block w-1/2 text-center" onClick={(e) => addStockQty(e,v.id)}>
                      <AiOutlinePlusCircle className=" text-xl text-gray-100 block mx-auto " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* pagination */}
      <div className=" mt-auto justify-end flex ">
        <div className=" text-gray-500 border flex items-center border-gray-700 px-4 mt-2">
          <button
            className={` px-3 py-2 ${
              unit == 1 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(1)}>
            1
          </button>
          <button
            className={` px-3 py-2 ${
              unit == 2 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(2)}>
            2
          </button>
          <button
            className={` px-3 py-2 ${
              unit == 3 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(3)}>
            3
          </button>
          <button
            className={` px-3 py-2 ${
              unit == 4 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(4)}>
            <FaAngleRight />
          </button>
          {/* <button className={` px-3 py-2 `} ></button> */}
        </div>
      </div>
      <div
        className={` custom-offcanvas ${
          offcanvas && "openAni"
        } bg-[#26272c] flex flex-col p-8`}>
        <div className=" ">
          <div className=" flex justify-between items-center">
            <p className=" text-gray-200 font-bold text-xl">Add Stock</p>
            <button
              className=" text-gray-50"
              onClick={() => setOffcanvas(!offcanvas)}>
              <TfiClose />
            </button>
          </div>
          <div className=" pt-7">
            <div>
              <p className=" text-gray-300 mb-2">Quantity</p>
              <input
                type="number"
                name=""
                id=""
                className=" outline-none p-2 border bg-transparent text-gray-400 rounded border-gray-700"
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <div className=" mt-3">
              <p className=" text-gray-300 mb-2">More</p>
              <textarea
                className=" outline-none text-gray-400 h-[130px] resize-none p-2 border bg-transparent rounded border-gray-700"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className=" mt-auto ">
          <button
            className=" bg-slate-400 block w-full text-center py-2 text-lg text-gray-900 font-extrabold rounded"
            onClick={() => update(pid)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
