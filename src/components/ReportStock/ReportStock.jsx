import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
  AiOutlineUp,
  AiOutlineContainer,
} from "react-icons/ai";
import { Select } from "@mantine/core";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import {
  useDeleteStockMutation,
  useGetUnitStockQuery,
} from "../../redux/api/stockApi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BrandChart from "../Chart/BrandChart";
import { useGetBestSellerBrandQuery, useGetBrandReportQuery, useGetStockOverviewQuery } from "../../redux/api/reportStockApi";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

export const ReportStock = () => {
  const token = Cookies.get("token");
  const [unit, setUnit] = useState(1);
  const forStock = {token,p: unit}
  const stock = useGetStockOverviewQuery(forStock)
  const brand = useGetBestSellerBrandQuery(token)
  const brandReport = useGetBrandReportQuery(token)
  const [deleteStock] = useDeleteStockMutation();
  const dispatch = useDispatch()
  const [sort,setSort] = useState('high-stock')
  console.log(stock);
  console.log(brand);
  console.log(brandReport);
  const MySwal = withReactContent(Swal);


  const stockStatus = (v) => {
    if (v.total_stock == 0) {
      return (
        <div className=" text-xs text-red-500 border mx-auto border-red-950 px-1 w-[100px] rounded-full py-2 bg-[#4c4741]">
          out of stock
        </div>
      );
    } else if (v.total_stock < 10) {
      return (
        <div className=" text-xs text-yellow-400 border mx-auto border-yellow-700 px-1 w-[80px] rounded-full py-2 bg-[#4c4741]">
          low stock
        </div>
      );
    } else {
      return (
        <div className=" text-xs text-green-400 border mx-auto border-green-600 px-1 w-[70px] rounded-full py-2 bg-[#3e4c38]">
          in stock
        </div>
      );
    }
  };

  const delStock = async (id) => {
    console.log(id);
    const d = { token, id };
    const data = await deleteStock(d);
    console.log(data);
    if (data.data == null) {
      MySwal.fire({
        text: "Successfully Deleted!",
        width: "300px",
        padding: "10px 10px 10px",
        color: "#ffffff",
        background: "#393d3d",
        iconColor: "5dfc68",
      });
    }
  };

  const del = (id) => {
    MySwal.fire({
      title: <p>Hello World</p>,
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          background: "#393d3d",
          color: "#ffffff",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            delStock(id);
          }
        });
      },
    });
  };


  const toSort = stock?.currentData?.data
  console.log(toSort)
  
  if(toSort){
   const ddt =  [...toSort].sort((a,b)=> a.total_stock - b.total_stock)
    console.log(ddt)
  } 

  console.log(sort);

  return (
    <div className=" flex-1 bg-[#202124] p-5 px-6 min-h-screen flex flex-col">
      <div className=" flex flex-col min-h-full">
        <div className=" flex justify-between items-center">
          <div>
            <h1 className=" text-2xl font-medium text-white">Stock</h1>
            <p className=" text-gray-400 mt-1 font-medium text-xs">
              Report / Stock
            </p>
          </div>
          <div>
            <Link to={"/cashier"}>
              <button className=" px-5 py-2 text-[#8ab4f8] border-2 border-gray-500 rounded font-medium me-3">
                Go to shop
              </button>
            </Link>
            <Link to={"/add-product"}>
              <button className=" px-5 py-2 bg-[#8ab4f8] rounded font-medium ">
                {" "}
                <AiOutlinePlus className=" inline" /> Add Product
              </button>
            </Link>
          </div>
        </div>
        {
          stock.currentData?(
        <div>
          <div className=" flex items-center justify-between mt-14">
            <div className=" w-[47%] ">
            {/* total product & brand */}

            <div className=" flex w-full items-center gap-3">
              <div className=" flex w-[49%] items-center gap-5 border border-gray-700 px-5 rounded py-6">
                <div className=" p-3 bg-gray-800 rounded-full">
                  <div className=" border p-3 border-blue-800 bg-gray-700 rounded-full">
                    <AiOutlineShoppingCart className=" text-blue-400 text-3xl" />
                  </div>
                </div>
                <div className=" text-gray-200 text-center">
                  <p className=" font-semibold text-5xl">20</p>
                  <p className=" text-gray-300 text-sm">Total Products</p>
                </div>
              </div>
              <div className=" flex w-[49%] items-center gap-5 border border-gray-700 px-5 rounded py-7">
                <div className=" p-3 bg-gray-800 rounded-full">
                  <div className=" border p-3 border-blue-800 bg-gray-700 rounded-full">
                    <AiOutlineContainer className=" text-blue-400 text-3xl" />
                  </div>
                </div>
                <div className=" text-gray-200 text-center">
                  <p className=" font-semibold text-5xl">15</p>
                  <p className=" text-gray-300 text-sm ">Total Brand</p>
                </div>
              </div>
            </div>
            {/* progress bar */}
            <div className=" border border-gray-700 rounded mt-3 p-3 py-6">
              <div className=" my-6">
                <div className=" w-[80%] h-[8px] rounded flex overflow-x-hidden ">
                  <div className=" w-[60%] h-full bg-[#64fc61]"></div>
                  <div className=" w-[30%] h-full bg-[#FAC627]"></div>
                  <div className=" w-[10%] h-full bg-red-300"></div>
                </div>
              </div>
              <div>
                <Link to={'/report-instock'}>
                  <div className=" flex justify-between px-2 border-b border-gray-500 py-3">
                    <div className="">
                      <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-green-300 "></span>
                      <span className=" text-gray-400">Instock</span>
                    </div>
                    <div className=" text-gray-300 flex items-center ">
                      <span className=" font-medium">100</span>
                      <span className=" ms-3 me-2  text-gray-300">70%</span>
                      <AiOutlineUp className=" text-green-400" />
                    </div>
                  </div>
                </Link>
                <Link to={'/report-lowstock'}>
                  <div className=" flex justify-between px-2 border-b border-gray-500 py-3">
                    <div>
                      <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-yellow-300 "></span>
                      <span className=" text-gray-400">Low stock</span>
                    </div>
                    <div className=" text-gray-300 flex items-center">
                      <span className=" font-medium">100</span>
                      <span className=" ms-3 me-2  text-gray-300">25%</span>
                      <AiOutlineUp className=" text-green-400" />
                    </div>
                  </div>
                </Link>
                <Link to={'/report-outofstock'}>
                  <div className=" flex justify-between px-2  py-3">
                    <div>
                      <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-red-300 "></span>
                      <span className=" text-gray-400">Out of Stock</span>
                    </div>
                    <div className=" text-gray-300 flex items-center">
                      <span className=" font-medium">100</span>
                      <span className=" ms-3 me-2  text-gray-300">15%</span>
                      <AiOutlineUp className=" text-green-400" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" border border-gray-700 rounded w-[52%] px-3 py-4">
            <h1 className=" text-gray-200 text-xl ">Best Seller Brand</h1>
            <h1 className=" text-gray-100 text-xl font-semibold text-end mt-3">
              120000 Ks
            </h1>
            <div className=" flex items-end justify-between">
              <div className=" w-1/2">
                <BrandChart />
              </div>
              <div className="">
                <div className=" flex justify-between px-2 border-b border-gray-500 py-3">
                  <div className="">
                    <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-green-300 "></span>
                    <span className=" text-gray-400">Instock</span>
                  </div>
                  <div className=" text-gray-300 flex items-center ">
                    <span className=" font-medium">100</span>
                    <span className=" ms-3 me-2  text-gray-300">70%</span>
                    <AiOutlineUp className=" text-green-400" />
                  </div>
                </div>
                <div className=" flex justify-between px-2 border-b border-gray-500 py-3">
                  <div>
                    <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-yellow-300 "></span>
                    <span className=" text-gray-400">Low stock</span>
                  </div>
                  <div className=" text-gray-300 flex items-center">
                    <span className=" font-medium">100</span>
                    <span className=" ms-3 me-2  text-gray-300">70%</span>
                    <AiOutlineUp className=" text-green-400" />
                  </div>
                </div>
                <div className=" flex justify-between px-2  py-3">
                  <div>
                    <span className=" w-[10px] h-[10px] me-2 inline-block rounded-full bg-red-300 "></span>
                    <span className=" text-gray-400">Out of Stock</span>
                  </div>
                  <div className=" text-gray-300 flex items-center">
                    <span className=" font-medium">100</span>
                    <span className=" ms-3 me-2  text-gray-300">70%</span>
                    <AiOutlineUp className=" text-green-400" />
                  </div>
                </div>
                <div className=" text-end mt-10 mb-5">
                  <Link to={"/recent"}>
                    <button className=" px-3 bg-gray-800 py-1 rounded text-sm text-gray-400 border border-gray-500">
                      Recent Sale
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className=" mt-[70px] flex justify-between items-end">
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
            <div className=" flex items-baseline report-stock">
              <p className=" text-sm text-gray-400 me-2 ">Sort : </p>
              <Select
                defaultValue={sort}
                className=" custom-select"
                rightSection={
                  <FaAngleDown size="1rem" color="rgb(209 213 219)" />
                }
                rightSectionWidth={30}
                unstyled
                data={[
                  { value: "high-stock", label: "high-stock" },
                  { value: "low-stock", label: "low-stock" },
                ]}
                onChange={(value)=>setSort(value)}
                size="100px"
              />
            </div>
          </div>
          <div className=" mt-[50px] min-h-[700px]">
            <table className=" w-full text-gray-300 border border-gray-700 text-sm ">
              <thead>
                <tr className=" border-b border-b-gray-700">
                  <th className=" py-4 pe-4 text-end px-1 uppercase font-medium">
                    No
                  </th>

                  <th className=" py-4 text-start px-1 ps-7 uppercase font-medium">
                    Name
                  </th>
                  <th className=" py-4 text-start px-1 uppercase font-medium">
                    Brand
                  </th>
                  <th className=" py-4 text-end px-1 uppercase font-medium">
                    Unit
                  </th>
                  <th className=" py-4 pe-4 text-end px-1 uppercase font-medium">
                    Sale Price
                  </th>
                  <th className=" py-4 pe-4 text-end px-1 uppercase font-medium">
                    Total Stock
                  </th>
                  <th className=" py-4 text-center px-2 uppercase font-medium">
                    Stock level
                  </th>
                  <th className=" py-4 pe-4 text-end px-1 uppercase font-medium"></th>
                </tr>
              </thead>
                {
                  sort == 'high-stock'?(stock?.currentData? [...stock.currentData.data].sort((a,b)=> b.total_stock - a.total_stock).map((v, index) => (
                    <tbody className=" text-gray-100"  key={v.id}>
                      <tr className=" border-b border-b-gray-700 ">
                        <td className="px-1 text-start py-4 ps-7">{index + 1}</td>
                        <td className="px-1 text-start py-4 ps-7">
                          {v.name}
                        </td>
                        <td className="px-1 text-start py-4 ">{v.brand}</td>
                        <td className="px-1 py-4 text-end">{v.unit}</td>
                        <td className="px-1 pe-4 py-4 text-end">{v.sale_price}</td>
                        <td className="px-1 pe-4 py-4 text-end">{v.total_stock}</td>
                        <td className=" py-4 text-center">
                          {stockStatus(v)}
                        </td>
                        <td className="px-1 pe-4 py-4 text-end flex justify-center gap-5 ">
                          <button
                            className=" delete-stock block "
                            onClick={(e) => del(v.id)}>
                            <AiOutlineDelete className=" text-lg text-gray-200 mx-auto " />
                          </button>
                          <Link to={`/stock-edit/${v.id}`}>
                            <button className=" add block text-center">
                              <AiOutlinePlusCircle className=" text-xl text-gray-100 block mx-auto " />
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  )): null)
                  :
                  (stock?.currentData? [...stock.currentData.data].sort((a,b)=> a.total_stock - b.total_stock).map((v, index) => (
                    <tbody className=" text-gray-100">
                    <tr className=" border-b border-b-gray-700 " key={v.id}>
                      <td className="px-1 text-start py-4 ps-7">{index + 1}</td>
                      <td className="px-1 text-start py-4 ps-7">
                        {v.name}
                      </td>
                      <td className="px-1 text-start py-4 ">{v.brand}</td>
                      <td className="px-1 py-4 text-end">{v.unit}</td>
                      <td className="px-1 pe-4 py-4 text-end">{v.sale_price}</td>
                      <td className="px-1 pe-4 py-4 text-end">{v.total_stock}</td>
                      <td className="px-1 pe-4 py-4 text-center">
                        {stockStatus(v)}
                      </td>
                      <td className="px-1 pe-4 py-4 text-end flex justify-center gap-5 ">
                        <button
                          className=" delete-stock block "
                          onClick={(e) => del(v.id)}>
                          <AiOutlineDelete className=" text-lg text-gray-200 mx-auto " />
                        </button>
                        <Link to={`/stock-edit/${v.id}`}>
                          <button className=" add block text-center">
                            <AiOutlinePlusCircle className=" text-xl text-gray-100 block mx-auto " />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  )): null)
                }
            </table>
          </div>
        </div>
        ):(<Loading/>)
        }
        
        {/* pagination */}
        <div className=" mt-auto justify-end flex ">
          <div className=" text-gray-500 border mt-5 flex items-center border-gray-700 px-4 ">
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
            {/* <button
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
              <FaAngleRight /> */}
            {/* </button> */}
            {/* <button className={` px-3 py-2 `} ></button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
