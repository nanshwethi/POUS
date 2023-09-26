import React, { useEffect } from 'react'
import CreateUserForm1 from './CreateUserForm1';
import CreateUserForm2 from './CreateUserForm2';
import CreateUserPhoto from './CreateUserPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/services/userSlice';
import { useGetUserQuery } from '../redux/api/userApi';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import AddProductSelectImg from './AddProductSelectImg';
import Modal from './Modal';
import AddProductInfoPreview from './AddProductInfoPreview';
import ModalCreateProduct from './ModalCreateProduct';
import { Anchor, Breadcrumbs } from '@mantine/core';
import { useContextCustom } from '../context/stateContext';

const CreateUser = () => {

	
		const { showModal, current, liHandler } = useContextCustom();
		const token = Cookies.get("token");
    console.log(token);
		const { data } = useGetUserQuery(token);
    // console.log(data);
		const dispatch = useDispatch();
		const user = useSelector((state) => state.userSlice.user);
		// console.log('ddd',data?.data);
		// console.log("cu", current);
		// console.log('products',products);
	  
		useEffect(() => {
		  dispatch(createUser({ user: data?.data }));
		}, [data]);


    const items = [
      { title: "User", href: "/user-overview" },
      { title: "CreateUser", href: "/create-user" },
    ].map((item, index) => (
      <Anchor className=" font-semibold " href={item.href} key={index}>
        {item.title}
      </Anchor>
    ));
  return (
	<div className=" container mx-auto py-4 px-5 bg-[--base-color] pb-20">
      {/* Breadcrumg start */}
      <div className=" flex justify-between items-center mb-20">
        <div>
          <p className="breadcrumb-title	">User</p>
          <p className=" text-[14px] text-white opacity-70  select-none">
          <Breadcrumbs className="">{items}</Breadcrumbs>
          </p>{" "}
        </div>
        <Link to={"/product"}>
          <button
            onClick={() => liHandler("products")}
            className="w-[140px] h-[40px] font-semibold text-[16px] myBlueBtn"
          >
            Product List
          </button>
        </Link>
      </div>
      {/* Breadcrumg end */}

      <div className=" flex gap-20 justify-start items-stretch">
        {current === 1 ? <CreateUserForm1 /> : ""}
        {current === 2 ? <CreateUserForm2 /> : ""}
        {current === 3 ? <CreateUserPhoto /> : ""}
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
  )
}

export default CreateUser