import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BsSearch } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import pro1 from "../img/pro1.jpg";
import pro2 from "../img/pro2.jpg";
import pro3 from "../img/pro3.jpg";
import pro4 from "../img/pro4.jpg";
import pro6 from "../img/pro6.jpg";
import pro7 from "../img/pro7.jpg";
import Cookies from "js-cookie";
import {
  selectProduct,
  setSelectedList,
  changeQty,
  updatePrice,
  editPrice,
  createPrice,
  addTotal,
  addTax,
  addRecent,
  deleteQty,
} from "../redux/services/shopSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery, useVoucherMutation } from "../redux/api/shopApi";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import SaleCloseGuard from "./SaleCloseGuard";

const Shop = () => {
  const token = Cookies.get("token");
  console.log(token);
  const [product, setProduct] = useState();
  const { currentData } = useGetProductsQuery(token);
  console.log(currentData);
  const [voucher] = useVoucherMutation();
  const dispatch = useDispatch();
  const receiveList = useSelector((state) => state.shop.list);
  const selectedList = useSelector((state) => state.shop.selectedList);
  // const [selectedList,setSelectedList] = useState()
  const [selectedAction, setSelectedAction] = useState("qty");
  const isTag = document.querySelector(".active-list");
  const list = document.querySelectorAll(".list");

  const products = [];
  let all = 0;
  let tax;
  let cost;

  const addPro = () => {
    const notZero = currentData?.data?.filter((i) => i.total_stock != 0);
    setProduct(notZero);
  };

  useEffect(() => addPro(), [currentData]);

  if ((isTag == null) & (receiveList.length > 1)) updateClass();

  console.log(receiveList);

  const select = (v) => {
    if (receiveList.length > 0) {
      const id = receiveList.map((value) => value.id);
      const IsAlreadSelected = id.includes(v.id);
      IsAlreadSelected == true ? null : dispatch(selectProduct(v));
      console.log(isTag);
      dispatch(setSelectedList(v.id));
      console.log(id, IsAlreadSelected);
      // setTimeout(()=>{
      //     // const tag = document.querySelector('.active-list')
      //     console.log(isTag);
      //    dispatch(setSelectedList(isTag.id))
      // },50)
    } else {
      dispatch(selectProduct(v));
      dispatch(setSelectedList(v.id));
      // setTimeout(()=>{
      //     const tag = document.querySelector('.active-list')
      //     console.log(tag);
      //     dispatch(setSelectedList(tag.id))
      // },50)
    }
  };

    function updateClass(){
        if (list.length >= 1){
            const addClass = list[list.length-1]
            addClass.classList.add('active-list')
            console.log(list);
            console.log(selectedList);
        }
        
    }

  console.log(selectedList);
  console.log(isTag);

  if (receiveList.length > 0) {
    const unit = receiveList.map(
      (value) => value.sale_price * value.total_stock
    );
    cost = unit.reduce((pv, cv) => Number(pv) + Number(cv), [0]);
    tax = ((cost / 100) * 5).toFixed(2);
    console.log(tax);
    all = cost + Number(tax);
    console.log(cost);
    dispatch(addTotal(all));
    dispatch(addTax(tax));
  }

 

  const onListClickHandler = (x, e) => {
    dispatch(setSelectedList(x.id));
    const getList = e.target.closest(".list");
    const tag = document.querySelector(".active-list");
    console.log(getList);
    console.log(tag);

    if (tag != null) {
      console.log(tag);
      setTimeout(() => {
        tag.classList.remove("active-list");
      }, 100);
      getList.classList.add("active-list");
      dispatch(setSelectedList(getList.id));
    } else {
      getList.classList.add("active-list");
      dispatch(setSelectedList(getList.id));
    }
  };

  const onQtyClickHandler = () => {
    setSelectedAction("qty");
    if (selectedList == null) {
      window.alert("select a list");
    }
  };

  const onDeleteHandler = () => {
    if (selectedAction == "qty") {
      const data = { id: selectedList, pro: product };
      dispatch(deleteQty(data));
    } else {
      const data = { id: selectedList, pro: product };
      console.log(data);
      dispatch(editPrice(data));
    }
  };

  const onPriceChangeHandler = () => {
    setSelectedAction("price");
  };

  const check = (e) => {
    if (receiveList.length >= 1) {
      if (selectedAction == "price") {
        // if( selectedList != null){
        //     const p = e.target.closest('.num-data').childNodes[0].innerText
        //     console.log(p);
        //     // dispatch(createPrice(p))
        //     const data = {price : p,id : selectedList}
        //     dispatch(updatePrice(data))
        // }else{
        //     window.alert('Oops! pick up your product')
        // }
      } else {
        const num = e.target.closest(".num-data").childNodes[0].innerText;

        const data = { id: selectedList, qty: num };
        console.log(data);
        dispatch(changeQty(data));
      }
    } else {
      window.alert(" pick up your product");
    }
  };

  receiveList.forEach((i) => {
    const d = { product_id: i.id, quantity: i.total_stock };
    console.log(d);
    products.push(d);
  });
  console.log(products);

  const pay = async () => {
    const content = {
      customer_name: "hnin hnin",
      phone_number: "09123456789",
      items: products,
    };

    const stData = JSON.stringify(content);
    console.log(stData);

    const data = {
      token,
      stData,
    };
        
        const d = await voucher(data)
        console.log(d);
        console.log(data);
        if(d?.data?.data){
            dispatch(addRecent(d.data.data))
            dispatch(clearList())
        } 
        
    }
        
    // console.log(addNum);
    console.log(receiveList);


  return (

      <div className="">
        <div className=" print:hidden">
          <Navbar />
        </div>
        <div className=" flex min-h-screen justify-between ">
          <div className=" w-[70%] bg-gray-900 print:hidden">
            <div className=" flex bg-slate-800 py-3 px-5 justify-between border-y border-gray-400">
              <div className=" flex items-center">
                <p className=" text-gray-400 font-medium text-sm  me-5">
                  Sale / Cashier
                </p>
                <p className=" text-gray-200 font-semibold text-lg  me-5">
                  All{" "}
                </p>
                <p className=" text-gray-200 font-semibold text-lg  me-5">
                  Drink{" "}
                </p>
                <p className=" text-gray-200 font-semibold text-lg  me-5">
                  Cake{" "}
                </p>
                <p className=" text-gray-200 font-semibold text-lg  me-5">
                  Dessert{" "}
                </p>
                <p className=" text-gray-200 font-semibold text-lg  me-5">
                  Set{" "}
                </p>
              </div>
              <div className="border-gray-300 rounded border px-2 py-1">
                <BsSearch className=" inline text-gray-200 me-3" />
                <input
                  type="text"
                  placeholder="search"
                  className=" w-[250px] outline-none bg-transparent text-gray-200 text-sm font-semibold"
                />
              </div>
            </div>
            {/* products */}
            {currentData ? (
              <div className=" bg-gray-900 px-4 pt-4">
                <div className=" flex gap-4 flex-wrap">
                  {product?.map((value) => (
                    <div
                      className=" border border-gray-700 rounded overflow-hidden"
                      key={value.id}
                      onClick={() => select(value)}
                    >
                      <img
                        src={value.photo}
                        alt=""
                        className=" w-[180px] h-[160px]"
                      />
                      <div className=" text-gray-400 p-3 text-end">
                        <p>{value.name}</p>
                        <p className=" font-bold">{value.sale_price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Loading />
            )}
          </div>
          {/* Receive */}
          <div className=" flex-1 min-h-full bg-slate-950 flex flex-col print:w-full">
            <div className=" overflow-auto shop-list">
              <h1 className=" font-extrabold hidden text-4xl pt-3 ps-5 print:my-6 print:ps-0 print:text-center print:block">
                MMS Shop
              </h1>
              <h1 className=" font-bold text-3xl text-gray-200 pt-3 ps-5 print:my-6 print:text-gray-400 print:ps-0 print:text-center">
                Receive
              </h1>
              <ul>
                {receiveList.length != 0
                  ? receiveList.map((value, index) => (
                      <li
                        className={`${
                          index == receiveList.length - 1 && "active-list"
                        } flex py-2 px-5 border-b border-gray-600 justify-between items-center list`}
                        key={value?.id}
                        id={value.id}
                        onClick={(e) => onListClickHandler(value, e)}
                      >
                        <div>
                          <p className=" text-gray-300 font-thin ">
                            {value.name}{" "}
                          </p>
                          <span className=" text-gray-400 font-medium text-sm">
                            {value.total_stock} / {value.unit}
                          </span>
                          <span className=" ps-1 text-gray-400 font-medium text-sm">
                            {value?.sale_price} ks
                          </span>
                        </div>
                        <p className=" text-gray-100 font-semibold price print:text-gray-400">
                          {value.sale_price * value.total_stock}
                        </p>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
            {/* Keypad */}
            <div className=" mt-auto ">
              <div className=" text-end pe-5 mt-12">
                <span className=" uppercase text-gray-300 me-3 font-medium text-sm ">
                  Cost -{" "}
                </span>
                <span className=" text-gray-200 text-sm font-semibold inline-block w-[160px] print:text-gray-600">
                  {cost}
                </span>
              </div>
              <div className=" text-end pe-5 mt-3 mb-2">
                <span className=" uppercase text-gray-300 me-3 text-sm">
                  tax -{" "}
                </span>
                <span className=" text-gray-200 text-sm font-semibold inline-block w-[160px] print:text-gray-600">
                  {" "}
                  {tax}
                </span>
              </div>
              <div className=" text-end pe-5 my-4">
                <span className=" uppercase text-gray-300 me-3 text-xl">
                  Total -{" "}
                </span>
                <span className=" text-gray-200 text-2xl font-bold inline-block w-[160px] print:text-gray-600">
                  {" "}
                  {all}
                </span>
              </div>
              <div className=" flex flex-col keypad print:hidden">
                {/* <div className='flex '>
                            <button className='flex justify-center w-[50%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600'>
                                <span className=' block text-gray-300 text-center'>Note</span>
                            </button>
                            <button className='flex justify-center w-[50%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                <span className=' block text-gray-300 text-center'>Tax</span>
                            </button>
                            
                        </div> */}

                        <div className='flex w-full' >
                            <div onClick={(e)=>check(e)} className=' w-[75%] flex'>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600' >
                                    <span className=' block text-gray-300 text-center '>1</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>2</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.40%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>3</span>
                                </button>
                            </div>
                            <button className={`  flex justify-center w-[25%] items-center ${selectedAction == 'qty'? 'bg-gray-300 selected' : 'bg-gray-800'} px-12 py-3 border border-e-0 border-gray-600`} onClick={()=>onQtyClickHandler()} >
                                <span className=' block text-gray-300 text-center font-semibold'>QTY</span>
                            </button>
                        </div>                        
                        <div className='flex ' onClick={(e)=>check(e)}>
                            <button className='flex justify-center w-[25%] num-data items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600'>
                                <span className=' block text-gray-300 text-center '>4</span>
                            </button>
                            <button className='flex justify-center w-[25%] num-data items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                <span className=' block text-gray-300 text-center '>5</span>
                            </button>
                            <button className='flex justify-center w-[25%] num-data items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                <span className=' block text-gray-300 text-center '>6</span>
                            </button>
                            <button className='flex justify-center w-[25%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                <span className=' block text-gray-600 text-center font-semibold'>DISC</span>
                            </button>
                        </div>
                        <div className='flex ' >
                            <div onClick={(e)=>check(e)} className=' w-[75%] flex'>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600' >
                                    <span className=' block text-gray-300 text-center '>7</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>8</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.40%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>9</span>
                                </button>
                            </div>
                            <button className={` flex-1 flex justify-center w-[25%] items-center ${selectedAction == 'price'? 'bg-gray-300 selected' : 'bg-gray-800'} px-12 py-3 border border-e-0 border-gray-600`} onClick={()=>onPriceChangeHandler()} >
                                <span className=' block text-gray-300 text-center font-semibold'>Price</span>
                            </button>
                        </div>
                        <div className='flex '>
                            <div onClick={(e)=>check(e)} className=' flex-1 flex'>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600' >
                                    <span className=' block text-gray-300 text-center '>+/-</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.35%]  items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>0</span>
                                </button>
                                <button className='flex justify-center num-data w-[33.40%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600 '>
                                    <span className=' block text-gray-300 text-center '>.</span>
                                </button>
                            </div>
                            <button className={` flex justify-center w-[25%] items-center bg-gray-800 px-12 py-3 border border-e-0 border-gray-600`} onClick={()=>onDeleteHandler()} >
                                <FiDelete className=' block text-gray-300 text-center font-semibold'/>
                            </button>
                        </div>
                    </div>
                    <Link to={'/voucher'}>
                    {/* onClick={()=> pay()} */}
                        <div className=' text-center py-3 bg-gray-900 border-s border-gray-600 print:hidden' onClick={()=>{ if(products.length >=1) pay()}}> 
                            <span className=' text-gray-300 font-semibold'>Payment</span>
                        </div>
                    </Link>
                </div>  

            </div>
          </div>
        </div>
     

  );
};

export default Shop;
