import React from 'react'
import { useContextCustom } from '../context/stateContext';
import { BsArrowRightShort } from 'react-icons/bs';
import AddProductStepper from './AddProductStepper';

const CreateUserForm2 = () => {
	const {
		role,
		setRole,
		email,
		setEmail,
		phone_number,
		setPhone_number,
		password,
		setPassword,
		password_confirmation,
		setPassword_confirmation,
		nextStepperHandler,
	  } = useContextCustom();
	
	  const nextHandler = () => {
		// const ppp=dispatch(addProduct)
		nextStepperHandler();
	  };
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
				 Position
				</label>
				<input
				  type="text"
				  value={role}
				  onChange={(e) => setRole(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				  Email
				</label>
				<input
				  type="text"
				  value={email}
				  onChange={(e) => setEmail(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				Phone
				</label>
				<input
				  type="text"
				  value={phone_number}
				  onChange={(e) => setPhone_number(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				Password
				</label>
				<input
				  type="text"
				  value={password}
				  onChange={(e) => setPassword(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
			  </div>
			  <div className=" flex justify-start items-start">
				<label
				  htmlFor=""
				  className="text-white w-[170px] pt-[2px] h-[24px] text-[16px] font-semibold"
				>
				Password Confirmation
				</label>
				<input
				  type="text"
				  value={password_confirmation}
				  onChange={(e) => setPassword_confirmation(e.target.value)}
				  className="w-[380px] h-[50px] px-5 py-1 border-2 rounded-[5px] border-[var(--border-color)] bg-[var(--base-color)] text-[var(--secondary-color)]"
				/>{" "}
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
  )
}

export default CreateUserForm2