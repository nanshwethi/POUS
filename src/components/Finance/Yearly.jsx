import { Link } from "react-router-dom";
import { useContextCustom } from "../../context/stateContext";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";

const Yearly = () => {
  const token = Cookies.get("token");
  const { liHandler } = useContextCustom();
  const [year, setYear] = useState(null);
  const [allYear, setAllYear] = useState();
  const [yRecords, setYRecords] = useState();
  const [yearTag, setYearTag] = useState(null);
  
  useEffect(() => {
    fetchYearData();
  }, []);

  const fetchData = async (year) => {
    const { data } = await axios({
      method: "get",
      url: `https://h.mmsdev.site/api/v1/yearly_sale_record?year=${year}&page=1`,
      headers: { authorization: `Bearer ${token}` },
      responseType: "financeData",
    });
    const ydata = JSON.parse(data);
    setYRecords(ydata);
    setYearTag(year);
  };

  const fetchYearData = async () => {
    const { data } = await axios({
      method: "get",
      url: `https://h.mmsdev.site/api/v1/year`,
      headers: { authorization: `Bearer ${token}` },
      responseType: "getYear",
    });
    const ydata = JSON.parse(data);
    setAllYear(ydata);
  };

  console.log('ydata',yRecords)

  return (
    <div className="container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      {/* Breadcrumg start */}
      <div className=" flex justify-between items-center mb-10">
        <div>
          <p className="breadcrumb-title	">Yearly</p>
          <p className=" text-[14px] text-white opacity-70  select-none">
            Finance / Yearly
          </p>
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

      <div className=" flex justify-between items-center py-5">
        <p className="breadcrumb-title	">
          {yearTag ? yearTag : "Yearly"} Sale Overview
        </p>
        <div className=" flex items-baseline gap-4">
        
          <div className=" flex justify-start items-baseline gap-2">
            <select
              name="sort"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="recent-dropdown "
            >
              <option value="null" className="recent-dropdown hidden">
                Year
              </option>

              {allYear?.map((y) => {
                return (
                  <option key={y} value={y} className="recent-dropdown">
                    {y}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            onClick={() => fetchData(year)}
            className="w-[40px] h-[30px] font-semibold text-[16px] myBlueBtn flex justify-center items-center"
          >
            <BsSearch className=" text-[var(--sidebar-color)]" />
          </button>
        </div>
      </div>

      <table
        className="pdf_container w-full text-gray-300 border border-gray-700 text-sm mb-20 daily-table"
      >
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
              Month
            </th>
            <th className=" py-4 border-b text-end border-gray-600 px-1 uppercase font-medium">
              Year
            </th>
          </tr>
        </thead>

        <tbody>
          {yRecords?.data?.length > 0 ? (
            yRecords?.data?.map((record, index) => {
              return (
                <tr key={record?.id} className=" ">
                  <td className="px-1 text-center  py-4">{index + 1}</td>
                  <td className="px-1 text-end py-4">
                    {record?.vouchers}
                  </td>
                  <td className="px-1 text-end py-4">{record?.total_cash}</td>
                  <td className="px-1 py-4 text-end">{record?.total_tax}</td>
                  <td className="px-1 py-4 text-end">{record?.total}</td>
                  <td className="px-1 py-4 text-end">{record?.month}</td>
                  <td className=" px-1 py-4 text-end">{record?.year}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="px-1 text-center py-4 " colSpan={8}>
                There is no data now.
              </td>
            </tr>
          )}
        </tbody>
      
      </table>
      {/* showList end */}

      <div className="w-full flex justify-between items-end h-[60px] gap-5">
        {/* total calculate start*/}
        <div className=" flex justify-start items-center basis-2/3">
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Months
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {yRecords?.data?.length}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Voucher
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {yRecords?.total?.total_voucher}
            </p>
          </div>

          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Cash
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {yRecords?.total?.total_cash}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Tax
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {yRecords?.total?.total_tax
                ? Math.round(yRecords?.total?.total_tax)
                : null}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {yRecords?.total?Math.round(yRecords?.total?.total):""}
            </p>
          </div>
        </div>
        {/* total calculate end*/}

      </div>
    </div>
  );
};

export default Yearly;
