import React, { useEffect, useState } from "react";
import { BsListUl, BsSearch } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Select } from "@mantine/core";
import { useGetUnitStockQuery,useUpdateStockMutation,useGetSingleStockQuery,useDeleteStockMutation} from "../redux/api/stockApi.js";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from "./Loading.jsx";
import { useGetStockOverviewQuery } from "../redux/api/reportStockApi.js";


const Stock = () => {

  const token = Cookies.get("token");
  const [unit, setUnit] = useState(2);
  const path = { token: token, p: unit };
  const stock  = useGetUnitStockQuery(path);
  // const stock  = useGetStockOverviewQuery(path);
  console.log(stock)
  const [pid, setPid] = useState();
  const nav = useNavigate()
  const [deleteStock] = useDeleteStockMutation()
  const MySwal = withReactContent(Swal)


  const delStock = async(id)=>{
    setPid(id)
    console.log(id);
    const d ={token,id}
    const data = await deleteStock(d)
    console.log(data)
    if (data.data == null) {
      MySwal.fire({
        text : 'Successfully Deleted!',
        width : '300px',
        padding : '10px 10px 10px',
        color : '#ffffff',
        background : '#393d3d',
        iconColor : '5dfc68',
    }
        
    )
  }
  }

  const del = (id)=>{
      MySwal.fire({
          title: <p>Hello World</p>,
          didOpen: () => {
              // `MySwal` is a subclass of `Swal` with all the same instance & static methods
              MySwal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  background : '#393d3d',
                  color : '#ffffff',
                  confirmButtonColor: '#3085d6',
                  confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                  if (result.isConfirmed) {
                      delStock(id)
                  }
              })
          },
          })

  }

  const addStockQty = (e,id) => {
    setPid(id)
    // setOffcanvas(true)
    nav(`/stock-edit/${id}`)
    console.log(pid)
  };

  console.log(pid)

  return (
    <div className=" flex-1 bg-[#202124] p-5 px-6 min-h-[110vh] flex flex-col relative overflow-hidden">
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
        {
          stock?.currentData?(
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
              {
                stock?.currentData?.data.map((v) => (
                  <tr
                    className=" border-b border-b-gray-700 "
                    key={v.id}
                    >
                    <td className="px-1 text-start py-4 ps-7">{v.product_name}</td>
                    <td className="px-1 text-start py-4 ">{v.user_name}</td>
                    <td className="px-1 py-4 text-end">{v.total_stock}</td>
                    <td className="px-1 pe-4 py-4 text-end">{v.created_at}</td>
                    <td className="px-1 pe-4 py-4 text-end flex justify-center gap-5 ">
                      <button className=" delete-stock block " onClick={(e)=> del(v.id)}>
                      <AiOutlineDelete className=" text-lg text-gray-200 mx-auto " />
                      </button>
                      <button className=" add block text-center" onClick={(e) => addStockQty(e,v.id)}>
                        <AiOutlinePlusCircle className=" text-xl text-gray-100 block mx-auto " />
                      </button>
                    </td>
                  </tr>
                ))
              
              }
            </tbody>
          </table>
        </div>
          ):(<Loading/>)
        }
        
      </div>
      {/* pagination */}
      <div className=" mt-auto justify-end flex ">
        <div className=" text-gray-500 border flex items-center border-gray-700 px-4 mt-2">
          <button
            className={` px-3 py-2 ${
              unit == 1 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(2)}>
            1
          </button>
          
          <button
            className={` px-3 py-2 ${
              unit == 3 ? "text-gray-50" : "text-gray-500"
            }`}
            onClick={() => setUnit(3)}>
            2
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
      {/* <div
        className={` custom-offcanvas ${
          offcanvas && "openAni"
        } bg-[#26272c] flex flex-col min-h-full p-8`}>
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
                onChange={(e) => dispatch(addStockQty(e.target.value))}
              />
            </div>
            <div className=" mt-3">
              <p className=" text-gray-300 mb-2">More</p>
              <textarea
                className=" outline-none text-gray-400 h-[130px] resize-none p-2 border bg-transparent rounded border-gray-700"
                onChange={(e) => dispatch(addStockMore(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className=" mt-auto ">
          <button
            className=" bg-slate-400 block w-full text-center py-2 text-lg text-gray-900 font-extrabold rounded"
            onClick={() => save()}>
            Add
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Stock;
