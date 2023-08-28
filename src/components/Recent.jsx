// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/stateContext";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
const Recent = () => {
  const { liHandler } = useContextCustom();
    const [filterValue, setFilterValue] = useState();
    const [sortValue, setSortValue] = useState();

  return (
    <div className="container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      {/* Breadcrumg start */}
      <div className=" flex justify-between items-center mb-10">
        <div>
          <p className="breadcrumb-title	">Recent</p>
          <p className=" text-[14px] text-white opacity-70  select-none">
            Sale / Recent
          </p>{" "}
        </div>
        <Link to={"/cashier"}>
          <button
            onClick={() => liHandler("cashier")}
            className="w-[140px] h-[40px] font-semibold text-[16px] myBlueBtn"
          >
            Go to Shop
          </button>
        </Link>
      </div>
      {/* Breadcrumg end */}
      <p className="breadcrumb-title	">Sale Overview</p>

      <div className=" flex justify-between items-center py-5">
        <div className="border-gray-700 rounded border inline px-2 py-1">
          <BsSearch className=" inline text-gray-400 me-3" />
          <input
            type="text"
            placeholder="search"
            className=" w-[250px] outline-none bg-transparent text-gray-300 text-sm font-semibold"
          />
        </div>
        <div className=" flex items-baseline">
          <p className=" text-sm text-gray-400 me-2">Sort : </p>
          <select
              name="sort"
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
              className="recent-dropdown "
            >
              <option value="last" className="recent-dropdown">
                Last
              </option>
              <option value="first" className="recent-dropdown">
                First{" "}
              </option>
            </select>
          <p className=" text-sm text-gray-400 ms-5 me-2">Filter : </p>
          <select
              name="filter"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="recent-dropdown"
            >
              <option value="all" className="recent-dropdown">
                All Files
              </option>
             
            </select>
          {/* <Select
            defaultValue={"all"}
            className=" recent-dropDrown"
            rightSection={
              <FaAngleDown
                size="1rem"
                className="text-[var(--secondary-color)]"
              />
            }
            rightSectionWidth={30}
            unstyled
            data={[
              { value: "all", label: "All Files" },
              { value: "aa", label: "aa" },
            ]}
          /> */}
        </div>
      </div>
      <table className="w-full text-gray-300 border border-gray-700 text-sm ">
        <thead>
          <tr className="">
            <th className=" py-4 border-b text-center border-gray-600 px-1 uppercase font-medium">
              No
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              VOUCHER
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              CASH
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              TAX
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              TOTAL
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              DATE
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              TIME
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" ">
            <td className="px-1 text-center  py-4">1</td>
            <td className="px-1 text-end py-4">09465</td>
            <td className="px-1 text-end py-4">100000</td>
            <td className="px-1 py-4 text-end">100</td>
            <td className="px-1 py-4 text-end">100100</td>
            <td className="px-1 py-4 text-end">12/7/2023</td>
            <td className=" pe-5 py-4 text-end">10:00 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recent;
