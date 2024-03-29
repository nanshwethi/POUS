import { Link } from "react-router-dom";
import { useContextCustom } from "../../context/stateContext";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import Cookies from "js-cookie";
import axios from "axios";

const Monthly = () => {
  const { liHandler } = useContextCustom();
  // const [sortValue, setSortValue] = useState();
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [monthContainer, setMonthContainer] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novenber",
    "December",
  ]);
  const token = Cookies.get("token");
  const [monthTag, setMonthTag] = useState(null);
  const [mRecords, setMRecords] = useState(null);
  const [allYear, setAllYear] = useState();
  // const [exportValue, setExportValue] = useState();

  useEffect(() => {
    fetchYearData();
  }, []);

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

  const fetchData = async () => {
    const {data} = await axios({
      method: "get",
      url: `https://h.mmsdev.site/api/v1/monthly_sale_record?month=${month}&year=${year}&page=1`,
      headers: { authorization: `Bearer ${token}` },
      responseType: "finance",
    });
    const mdata = JSON.parse(data);
    console.log("mdata", mdata);
    setMRecords(mdata);
    setMonthTag(monthContainer[month-1]);
    // console.log("monthTag", monthTag.slice(3, monthTag.length));
  };

  const pageChange = async (link) => {
    const {data} = await axios({
      method: "get",
      url: link,
      headers: { authorization: `Bearer ${token}` },
      responseType: "finance",
    });
    const mdata = JSON.parse(data);
    // console.log('mdata')
    setMRecords(mdata);
    // setMonthTag(mdata?.data.monthly_sale_overview[0]?.date);
  };

  const next = () => {
    if (mRecords?.links?.next) {
      pageChange(mRecords?.links?.next);
    }
  };
  const prev = () => {
    if (mRecords?.links?.prev) {
      pageChange(mRecords?.links?.prev);
    }
  };

  return (
    <div className="container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      {/* Breadcrumg start */}
      <div className=" flex justify-between items-center mb-10">
        <div>
          <p className="breadcrumb-title	">Monthly</p>
          <p className=" text-[14px] text-white opacity-70  select-none">
            Finance / Monthly
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

      <div className=" flex justify-between items-center py-5">
        <p className="breadcrumb-title	">
          {monthTag ? monthTag : "Monthly"} Sale
          Overview
        </p>
        <div className=" flex items-baseline gap-4">
          <div className=" flex justify-start items-baseline gap-2">
            {/* <select
              name="sort"
              value={exportValue}
            onChange={(e) => setExportValue(e.target.value)}
              className="recent-dropdown "
            >
              <option value="" className="recent-dropdown hidden">
              Export
            </option>
            <option value="PDF" className="recent-dropdown">
              PDF
            </option>
            <option value="print" className="recent-dropdown">
              Print
            </option>
            <option value="Excel" className="recent-dropdown">
              Excel
            </option>
            </select> */}
          </div>

          <div className=" flex justify-start items-baseline gap-2">
            <select
              name="sort"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="recent-dropdown "
            >
              <option value="" className="recent-dropdown hidden">
                Month
              </option>
              {monthContainer?.map((month, index) => (
                <option
                  key={month}
                  value={index + 1}
                  className="recent-dropdown"
                >
                  {month.slice(0, 3)}
                </option>
              ))}
            </select>
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
            onClick={fetchData}
            className="w-[40px] h-[30px] font-semibold text-[16px] myBlueBtn flex justify-center items-center"
          >
            <BsSearch className=" text-[var(--sidebar-color)]" />
          </button>
        </div>
      </div>
      {/* showList start */}
      <table className="w-full text-gray-300 border border-gray-700 text-sm mb-20">
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
          </tr>
        </thead>
        <tbody>
          {mRecords?.data?.length > 0 ? (
            mRecords?.data.map((record, index) => {
              return (
                <tr key={record?.id} className=" ">
                  <td className="px-1 text-center  py-4">{index + 1}</td>
                  <td className="px-1 text-end py-4">{record?.vouchers}</td>
                  <td className="px-1 text-end py-4">{record?.cash}</td>
                  <td className="px-1 py-4 text-end">{record?.tax}</td>
                  <td className="px-1 py-4 text-end">{record?.total}</td>
                  <td className="px-1 py-4 text-end">{record?.date}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="px-1 text-center py-4 " colSpan={6}>
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
              Total Days
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {mRecords?.data.length}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Vouchers
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {mRecords?.total?.total_voucher}
            </p>
          </div>

          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Cash
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {mRecords?.total?Math.round(mRecords?.total?.total_cash):''}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total Tax
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {mRecords?.total?Math.round(mRecords?.total?.total_tax):null}
            </p>
          </div>
          <div
            className={`text-[var(--secondary-color)] btn-border-table-grid px-5 py-3 flex flex-col justify-end basis-1/4`}
          >
            <p className=" text-[var(--font-color)] text-end text-[14px] font-medium">
              Total
            </p>
            <p className=" text-[var(--secondary-color)] text-end text-[22px] font-semibold">
              {mRecords?.total?Math.round(mRecords?.total?.total):null}
            </p>
          </div>
        </div>
        {/* total calculate end*/}

        {/* pagination start*/}
        <div>
          <Button.Group className=" pt-10 flex justify-end">
            <Button
              onClick={prev}
              variant="default"
              className={`
                 text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent`}
            >
              <MdArrowBackIosNew />
            </Button>
            <Button
              variant="default"
              className={`text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent`}
            >
              page {mRecords?.meta?.current_page} / {mRecords?.meta?.last_page}
            </Button>

            <Button
              onClick={next}
              variant="default"
              className={`
                 text-[--secondary-color] hover:text-[--font-color] hover:bg-transparent`}
            >
              <MdArrowForwardIos />
            </Button>
          </Button.Group>
        </div>
        {/* pagination end*/}
      </div>
    </div>
  );
};

export default Monthly;
