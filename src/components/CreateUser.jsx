// import { Button, Group, Stepper } from "@mantine/core";
// import Uploady from "@rpldy/uploady";
// import UploadPrewiew from "@rpldy/upload-preview";
// import UploadButton from "@rpldy/upload-button";
// import { useState } from "react";

const CreateUser = () => {
  // const [active, setActive] = useState(1);
  // const nextStep = () =>
  //   setActive((current) => (current < 3 ? current + 1 : current));
  // const prevStep = () =>
  //   setActive((current) => (current > 0 ? current - 1 : current));

  // const MyPreview = ({ type, url, id, name, isFallback, foo }) => {
  //   return <MyCustomPreviewUI />;
  // };
  return (
    <></>
    // <div>
    //   <div className="font-roboto">
    //     <div className="flex justify-between mb-10">
    //       {/* Breadcrumbs  */}
    //       <nav className="flex" aria-label="Breadcrumb">
    //         <ol className="inline-flex items-center space-x-1 md:space-x-3">
    //           <li className="inline-flex items-center">
    //             <a
    //               href="#"
    //               className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
    //             >
    //               <svg
    //                 className="w-3 h-3 mr-2.5"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="currentColor"
    //                 viewBox="0 0 20 20"
    //               >
    //                 <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    //               </svg>
    //               Home
    //             </a>
    //           </li>

    //           <li>
    //             <div className="flex items-center">
    //               <svg
    //                 className="w-3 h-3 text-gray-400 mx-1"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 6 10"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="m1 9 4-4-4-4"
    //                 />
    //               </svg>
    //               <a
    //                 href="#"
    //                 className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
    //               >
    //                 User
    //               </a>
    //             </div>
    //           </li>

    //           <li aria-current="page">
    //             <div className="flex items-center">
    //               <svg
    //                 className="w-3 h-3 text-gray-400 mx-1"
    //                 aria-hidden="true"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 6 10"
    //               >
    //                 <path
    //                   stroke="currentColor"
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="m1 9 4-4-4-4"
    //                 />
    //               </svg>
    //               <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
    //                 Create User
    //               </span>
    //             </div>
    //           </li>
    //         </ol>
    //       </nav>

    //       {/* second div  */}
    //       <div>
    //         <button className="bg-blue-600 text-white px-2 py-1.5 rounded-md">
    //           User List
    //         </button>
    //       </div>
    //     </div>

    //     <div className="flex justify-between">
    //       {/* form  */}
    //       {/* <div className="w-4/6">
    //         <form className="w-full px-5">
    //           <div className="mb-2 flex justify-center items-center">
    //             <label
    //               htmlFor="email"
    //               className="block mb-2 text-sm font-medium w-1/4"
    //             >
    //               Your email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //               required
    //             />
    //           </div>

    //           <div className="mb-2 flex justify-center items-center">
    //             <label
    //               htmlFor="password"
    //               className=" w-1/4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Your password
    //             </label>
    //             <input
    //               type="password"
    //               id="password"
    //               className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //               required
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             Register new account
    //           </button>
    //         </form>
    //       </div> */}

    //       {/* timeline  */}
    //       {/* <div className="w-2/6 ">
    //         <div className="px-5 ">
    //           <ol className="relative border-l border-gray-700 dark:border-gray-800">
    //             <li className="mb-10 ml-4 flex justify-start items-center">
    //               <div className="absolute w-10 h-10 bg-gray-800 rounded-full inline-flex justify-center item-center -left-5 border border-white dark:border-gray-900 dark:bg-gray-700">
    //                 <div className="text-white text-xl inline-flex text-center items-center">
    //                   <span>1</span>
    //                 </div>
    //               </div>

    //               <h3 className="text-lg pl-10 font-semibold text-gray-900 dark:text-white">
    //                 Personal
    //               </h3>
    //             </li>

    //             <li className="mb-10 ml-4 flex justify-start items-center">
    //               <div className="absolute w-10 h-10 bg-gray-800 rounded-full inline-flex justify-center item-center -left-5 border border-white dark:border-gray-900 dark:bg-gray-700">
    //                 <div className="text-white text-xl inline-flex text-center items-center">
    //                   <span>1</span>
    //                 </div>
    //               </div>

    //               <h3 className="text-lg pl-10 font-semibold text-gray-900 dark:text-white">
    //                 Personal
    //               </h3>
    //             </li>

    //             <li className="mb-10 ml-4 flex justify-start items-center">
    //               <div className="absolute w-10 h-10 bg-gray-800 rounded-full inline-flex justify-center item-center -left-5 border border-white dark:border-gray-900 dark:bg-gray-700">
    //                 <div className="text-white text-xl inline-flex text-center items-center">
    //                   <span>1</span>
    //                 </div>
    //               </div>

    //               <h3 className="text-lg pl-10 font-semibold text-gray-900 dark:text-white">
    //                 Personal
    //               </h3>
    //             </li>
    //           </ol>

    //           <button className="flex px-2.5 rounded-lg py-1 bg-blue-600">
    //             Next
    //           </button>
    //         </div>
    //       </div> */}
    //     </div>

    //     <Stepper active={active} onStepClick={setActive} breakpoint="sm">
    //       <Stepper.Step label="First step" description="Create an account">
    //         <div className="w-6/6 mt-10 h-[340px]">
    //           <form className="w-full px-5">
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Name
    //               </label>
    //               <input
    //                 type="name"
    //                 id="name"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    //                 required
    //                 // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Phone
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    //                 required
    //                 // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Date Of Birth
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
    //                 required
    //                 // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="password"
    //                 className=" w-1/4 block mb-2 text-sm font-medium text-gray-900 "
    //               >
    //                 Gender
    //               </label>
    //               <input
    //                 type="password"
    //                 id="password"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
    //                 required
    //                 // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="password"
    //                 className=" w-1/4 block mb-2 text-sm font-medium text-gray-900"
    //               >
    //                 Address
    //               </label>
    //               <input
    //                 type="password"
    //                 id="password"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
    //                 required
    //                 // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
    //               />
    //             </div>
    //             <button
    //               type="submit"
    //               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             >
    //               Register new account
    //             </button>
    //           </form>
    //         </div>
    //       </Stepper.Step>
    //       <Stepper.Step label="Second step" description="Verify email">
    //         <div className="w-6/6 h-[340px] mt-10">
    //           <form className="w-full px-5">
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Phone Number
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Position
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="password"
    //                 className=" w-1/4 block mb-2 text-sm font-medium text-gray-900"
    //               >
    //                 Email
    //               </label>
    //               <input
    //                 type="password"
    //                 id="password"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //                 required
    //               />
    //             </div>
    //             <div className="mb-2 flex justify-center items-center">
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm font-medium w-1/4"
    //               >
    //                 Confirm Password
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
    //                 required
    //               />
    //             </div>
    //             <button
    //               type="submit"
    //               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //             >
    //               Register new account
    //             </button>
    //           </form>
    //         </div>
    //       </Stepper.Step>
    //       <Stepper.Step label="Final step" description="Get full access">
    //         <div className=" flex justify-center items-center mt-10 h-[340px]">
    //           <div className=" ">
    //             <form className=" px-5">
    //               <div className=" border-2 border-gray-600 border-dashed rounded-full w-[200px] h-[200px] flex justify-center items-center">
    //                 <Uploady destination={{ url: "my-server.com/upload" }}>
    //                   <UploadButton />
    //                   <UploadPrewiew
    //                     PreviewComponent={MyPreview}
    //                     previewComponentProps={{
    //                       foo: "bar",
    //                     }}
    //                   />
    //                 </Uploady>
    //                 ;
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </Stepper.Step>
    //       <Stepper.Completed>
    //         Completed, click back button to get to previous step
    //       </Stepper.Completed>
    //     </Stepper>

    //     <Group position="center" className=" flex justify-around mt-5" mt="xl">
    //       <Button variant="default" onClick={prevStep}>
    //         Back
    //       </Button>
    //       <Button
    //         variant="default"
    //         className=" bg-blue-500 text-white hover:bg-blue-700"
    //         onClick={nextStep}
    //       >
    //         Next step
    //       </Button>
    //     </Group>
    //   </div>
    // </div>
  );
};

export default CreateUser;
