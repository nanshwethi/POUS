import React from 'react'
import { useContextCustom } from '../context/stateContext';
import { BsArrowRightShort } from 'react-icons/bs';
import AddProductStepper from './AddProductStepper';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { PiPencilSimpleLineBold } from 'react-icons/pi';

const CreateUserPhoto = () => {
	const { setShowModal, nextStepperHandler, photo, setPhoto } =
    useContextCustom();

  const photoUploadHandler = () => {
    setShowModal(true);
  };
  return (
	<div className="flex gap-20 justify-start items-stretch bg-[--base-color]">
      <div className=" w-[680px] h-fit bg-[var(--sidebar-color)] flex flex-col justify-center items-center gap-14 py-10">
        <p className=" text-white text-[16px] font-semibold">Upload Photo</p>
        {photo ? (
          <img
            src={photo}
            alt=""
            className=" relative w-[180px] h-[180px] border-[3px] rounded-full flex justify-center items-center cursor-pointer"
          />
        ) : (
          <div
            onClick={photoUploadHandler}
            className="relative w-[180px] h-[180px] border-[3px] rounded-full border-dashed border-[var(--font-color)] bg-[var(--base-color)] flex justify-center items-center cursor-pointer"
          >
            <img src="" alt="" />
            <MdOutlinePhotoLibrary size={"4rem"} color="white" />
            <div className="absolute bottom-0 right-5 w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center">
              <PiPencilSimpleLineBold />
            </div>
          </div>
        )}

        <button
          onClick={() => setPhoto(null)}
          className=" w-[110px] h-[40px] text-[var(--secondary-color)] border rounded-[5px] border-[var(--secondary-color)] font-medium text-[12px]"
        >
          Clear Photo
        </button>
      </div>
      <div className="w-[150px] h-[460px] flex flex-col justify-between items-center">
        <AddProductStepper />
        <button
          onClick={nextStepperHandler}
          className="w-[110px] h-[40px] myBlueBtn font-medium text-[14px] flex justify-center items-center gap-2"
        >
          Next <BsArrowRightShort size={"1.5rem"} />
        </button>
      </div>
    </div>
  )
}

export default CreateUserPhoto