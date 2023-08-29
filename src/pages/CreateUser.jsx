import { Button, Group, Stepper, Tabs } from "@mantine/core";
import Uploady, { useItemStartListener } from "@rpldy/uploady";
import UploadPrewiew, { UploadPreview } from "@rpldy/upload-preview";
import UploadButton from "@rpldy/upload-button";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiEdit, FiPhoneCall } from "react-icons/fi";
import { PiDotFill } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";

const CreateUser = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const MyPreview = ({ type, url, id, name, isFallback, foo }) => {
    return <MyCustomPreviewUI />;
  };

  //   const PreviewContainer = styled.div`
  //   margin-top: 10px;

  //   img {
  //     max-width: 400px;
  //     height: auto;
  //   }
  // `;

  const readImageDimensions = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      var dataUrl = URL.createObjectURL(file);
      img.src = dataUrl;

      img.onload = () => {
        URL.revokeObjectURL(dataUrl);
        resolve([img.naturalWidth, img.naturalHeight]);
      };
    });
  };

  const UploadWithDimensionsCheck = () => {
    useItemStartListener(async (item) => {
      const [width, height] = await readImageDimensions(item.file);
      return width < 1500 && height < 1500;
    });

    return <UploadButton />;
  };
  return (
    <div>
      <div className="font-roboto bg-[#202124]">
        <div className="flex justify-between mb-10">
          {/* Breadcrumbs  */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>

              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    User
                  </a>
                </div>
              </li>

              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Create User
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          {/* second div  */}
          <div>
            <button className="bg-blue-600 text-white px-2 py-1.5 rounded-md">
              User List
            </button>
          </div>
        </div>

        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Create an account">
            {/* <div className="w-6/6 mt-10 h-[340px]">
            <form className="w-full px-5">
            <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  required
                  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Phone
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                  required
                  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Date Of Birth
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  required
                  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="password"
                  className=" w-1/4 block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gender
                </label>
                <input
                  type="password"
                  id="password"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  required
                  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="password"
                  className=" w-1/4 block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="password"
                  id="password"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                  required
                  // dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </form>
          </div> */}
            <div className="h-[400px]">
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">Name</div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>

              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">Phone</div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">
                  Date Of Birth
                </div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">Gender</div>
                <div className=" flex-1">
                  <div className=" flex justify-start items-center">
                    <div className=" me-4 flex items-center">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        className=" male opacity-0 absolute"
                      />
                      <span className=" fakeRadio me-2"></span>
                      <label htmlFor="male" className=" text-gray-500">
                        male
                      </label>
                    </div>
                    <div className=" flex items-center">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        className="female absolute opacity-0 "
                      />
                      <span className=" fakeRadio me-2"></span>
                      <label htmlFor="female" className="  text-gray-500">
                        female
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex py-4 text-gray-200 items-start font-medium">
                <div className=" w-48 font-semibold text-gray-400">Address</div>
                <div className=" flex-1">
                  <textarea className=" bg-[#202124] border-2 resize-none border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3 h-[100px]" />
                </div>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
            {/* <div className="w-6/6 h-[340px] mt-10">
            <form className="w-full px-5">
            
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Position
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="password"
                  className=" w-1/4 block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="password"
                  id="password"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Password
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-2 flex justify-center items-center">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium w-1/4"
                >
                  Confirm Password
                </label>
                <input
                  type="email"
                  id="email"
                  className=" w-3/4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </form>
          </div> */}
            <div className="h-[400px]">
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">
                  Position
                </div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">Email</div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>
              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">
                  Password
                </div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>

              <div className=" flex py-4 text-gray-200 items-center font-medium">
                <div className=" w-48 font-semibold text-gray-400">
                  ConFirm Password
                </div>
                <div className=" flex-1">
                  <input
                    type="text"
                    className=" bg-[#202124] border-2 border-[#4b4e54] rounded text-slate-400 outline-none w-4/6 py-2 px-3"
                  />
                </div>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access">
            <div className=" flex justify-center items-center h-[400px]">
              <div className=" ">
                <h1 className=" text-white text-center mb-5 font-semibold">
                  Upload Photo
                </h1>
                <form className=" px-5">
                  <div className=" border-2 border-blue-400 border-dashed rounded-full w-[180px] h-[180px] flex justify-center items-center">
                    <Uploady destination={{ url: "my-server.com/upload" }}>
                      <UploadButton className=" text-white"/>
                      <UploadPrewiew
                        PreviewComponent={MyPreview}
                        previewComponentProps={{
                          foo: "bar",
                        }}
                      />
                    </Uploady>

                    {/* <Uploady
                      destination={{ url: "my-server.com/upload" }}
                      accept="image/*"
                    >
                      <div className="App">
                        <UploadWithDimensionsCheck />
                        <div className="">
                          <UploadPreview />
                        </div>
                      </div>
                    </Uploady> */}
                  </div>
                </form>
              </div>
            </div>
          </Stepper.Step>
          <Stepper.Completed>
            <div className=" h-[400px] flex justify-center items-center">
              <h1 className=" text-white">
                Completed, click back button to get to previous step
              </h1>
            </div>
          </Stepper.Completed>
        </Stepper>

        <Group position="center" className=" flex justify-around" mt="xl">
          <Button
            className=" bg-blue-500 text-white hover:bg-blue-700 mb-4"
            onClick={prevStep}
          >
            Back
          </Button>
          <Button
            variant="default"
            className=" bg-blue-500 text-white hover:bg-blue-700 mb-4"
            onClick={nextStep}
          >
            Next step
          </Button>
        </Group>
      </div>
    </div>
  );
};

export default CreateUser;
