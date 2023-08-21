import AddProductInfo from "./AddProductInfo";
import AddProductPrice from "./AddProductPrice";
import AddProductPhotoUpload from "./AddProductPhotoUpload";
import ModalCreateProduct from "./ModalCreateProduct";
import AddProductInfoPreview from "./AddProductInfoPreview";
import Modal from "./Modal";
import AddProductSelectImg from "./AddProductSelectImg";
import { useContextCustom } from "../context/stateContext";

const AddProduct = () => {
  const { showModal, current } = useContextCustom();

  console.log("cu", current);

  return (
    <div className=" container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      <div className=" flex justify-between items-center mb-20">
        <div>
          <p className="breadcrumb-title	">Media</p>
          <p className=" text-[14px] text-white opacity-70  select-none">
            Inventory / Add Product
          </p>{" "}
        </div>
        <button className="w-[140px] h-[40px] font-semibold text-[16px] myBlueBtn">
          Product List
        </button>
      </div>
      <div className=" flex gap-20 justify-start items-stretch">
        {current === 1 ? <AddProductInfo /> : ""}
        {current === 2 ? <AddProductPrice /> : ""}
        {current === 3 ? <AddProductPhotoUpload /> : ""}
        {current === 3 && showModal ? (
          <Modal
            title={"Select an image"}
            modalView={<AddProductSelectImg />}
          />
        ) : (
          ""
        )}
        {current === 4 ? <AddProductInfoPreview /> : ""}
        {current === 4 && showModal ? (
          <Modal title={"Create Product"} modalView={<ModalCreateProduct />} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddProduct;
