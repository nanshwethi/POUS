import React from 'react'
import AddProductStepper from './AddProductStepper';
import { BsArrowRightShort } from 'react-icons/bs';
import { useContextCustom } from '../context/stateContext';

const CreateUserForm1 = () => {
	const {
		name,
		setName,
		date_of_birth,
		setDate_of_birth,
		gender,
		setGender,
		address,
		setAddress,
		nextStepperHandler,
	  } = useContextCustom();
	
	
	  const nextHandler = () => {
		// const ppp=dispatch(addProduct)
		nextStepperHandler();
	  };
	
	  // useMemo(() => {
	  //   console.log("first", brand);
	  // }, [brand]);
	
	  return (
		<div className=" ">
		  <form
			onSubmit={nextHandler}
			action=""
			className=" flex gap-20 justify-start items-stretch bg-[--base-color]"
		  >
			<div className=" flex flex-col gap-5 px-14 py-10 w-[680px] h-fit bg-[var(--sidebar-color)]">
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				  Name
				</label>
				<input
				  type="text"
				  value={name}
				  onChange={(e) => setName(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				  Date Of Birth
				</label>
				<input
				  type="text"
				  value={date_of_birth}
				  onChange={(e) => setDate_of_birth(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  
			  
			  <div className=" flex justify-start items-start">
				<div className=" flex py-4 text-gray-200 items-center font-medium"><div className=" w-48 font-semibold text-[var(--secondary-color)]">Gender</div><div className=" flex-1"><div className=" flex justify-start items-center"><div className=" me-4 flex items-center"><input type="radio" id="male" name="gender" className="male opacity-0 absolute"/><span className=" fakeRadio me-2"></span><label htmlFor="male" className=" text-[var(--secondary-color)]">male</label></div><div className=" flex items-center"><input type="radio" id="female" name="gender" className="female absolute opacity-0 "/><span className=" fakeRadio me-2"></span><label htmlFor="female" className="  text-[var(--secondary-color)]">female</label></div></div></div></div>
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				  Address
				</label>
				<textarea
				  value={address}
				  onChange={(e) => setAddress(e.target.value)}
				  placeholder=""
				  className="w-[380px] h-[100px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>
			  </div>
			</div>
			<div className="w-[150px] h-[460px] flex flex-col justify-between items-center">
			  <AddProductStepper />
			  <button
				type="submit"
				// onClick={nextStepperHandler}
				className="w-[110px] h-[40px] myBlueBtn font-medium text-[14px] flex justify-center items-center gap-2"
			  >
				Next <BsArrowRightShort size={"1.5rem"} />
			  </button>
			</div>
		  </form>
		</div>
	  );
}

export default CreateUserForm1