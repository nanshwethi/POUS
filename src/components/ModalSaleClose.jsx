import { useContextCustom } from "../context/stateContext";
import { FiFolderPlus } from "react-icons/fi";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalSaleClose = () => {
  const { liHandler, setShowModal, setCloseDate } = useContextCustom();
  const token = Cookies.get("token");
const nav=useNavigate()

  const fetchData = async () => {
    const data = await axios({
      method: "post",
      url: `https://h.mmsdev.site/api/v1/sale_close`,
      headers: { authorization: `Bearer ${token}` },
      responseType: "sale",
    });
    // const closeSale = await JSON.parse(data);
    // setVouchers(voucher.data);
    setCloseDate(true);
    setShowModal(false);
    liHandler("daily");
    console.log("data", data);
    nav("/finance-daily")
    // console.log("closeSale", closeSale);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <div className=" w-[150px] h-[150px] rounded-full bg-[var(--base-color)] flex justify-center items-center">
        <div className=" w-[95px] h-[95px] rounded-full border border-[var(--gray-color)]  bg-[var(--border-color)] flex justify-center items-center">
          <FiFolderPlus size={"2.5rem"} className=" text-[var(--font-color)]" />
        </div>
      </div>
      <p className=" text-[18px] font-semibold text-white">
        Are you sure to sale close?
      </p>
      <div className="flex justify-between items-center gap-10">
        <button
          onClick={() => setShowModal(false)}
          className="w-[150px] h-[40px] font-medium text-[14px] bg-transparent text-[var(--secondary-color)] border-[var(--border-color)] rounded border px-2 py-1"
        >
          Cancel
        </button>
          <button
            onClick={fetchData}
            className="w-[150px] h-[40px] font-medium text-[14px] bg-[var(--secondary-color)] text-[var(--base-color)] border-[1px] border-[var(--border-color)] rounded-[5px]"
          >
            Sale Close
          </button>
      </div>
    </div>
  );
};

export default ModalSaleClose;
