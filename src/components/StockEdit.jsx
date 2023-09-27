import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Tooltip from '@mui/material/Tooltip';
import { useGetSingleStockQuery, useUpdateStockMutation } from '../redux/api/stockApi';
import { useParams,Link } from 'react-router-dom';
import { addStockMore, addStockProduct, addStockQty } from '../redux/services/brandSlice'
import Loading from './Loading';

const StockEdit = () => {

    const {id} = useParams()
    const token = Cookies.get('token')
    const forStock = {id,token}
    const {currentData} = useGetSingleStockQuery(forStock)
    const [updateStock] = useUpdateStockMutation()
    const updateData = useSelector((state)=>state.brandSlice.updateStock)
    const dispatch = useDispatch()
    console.log(currentData)
    console.log(updateData)

    const MySwal = withReactContent(Swal)

    useEffect(()=>{
        dispatch(addStockProduct(currentData?.data.id))
        dispatch(addStockQty(currentData?.data.total_stock))
        dispatch(addStockMore(currentData?.data.more))
    },[currentData])


    const update = async()=>{
        console.log(id)
        const d = {token,content : updateData}
        console.log(d);

        const data = await updateStock(d)
        console.log(data);
        // dispatch(addUpdateData(data?.data?.data))
        console.log(updateData);
        if (data?.data) {
            const Toast = MySwal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                padding : '10px 10px 10px',
                color : '#ffffff',
                background : '#393d3d',
                timer: 3000,
                customClass : {
                    timerProgressBar : 'progress-bar'
                },
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'updated total stock quantity '
              })
        }
    }

    const save = (e)=>{

        MySwal.fire({
            title: <p>Hello World</p>,
            didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    width : '400px',
                    padding : '0px 10px 20px',
                    color : '#ffffff',
                    background : '#393d3d',
                    iconColor : '5dfc68',
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Save'
                }).then((result) => {
                    if (result.isConfirmed) {
                        update()
                    }
                })
            },
            })
        
    }

  return (
    <div className=' flex-1 bg-[#202124] p-5 px-6 flex flex-col relative '>
        
        <div className=''>
            <div className=' flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-medium text-white'>Stock</h1>
                    <p className=' text-gray-400 mt-1 font-medium text-xs'>Inventory / products / edit Stock</p>
                </div>
                <div className=' flex items-center gap-5'>
                    <Link to={'/stock-control'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>Stock</button>
                    </Link>
                    <Link to={'/report-stock'}>
                    <button className=' px-5 py-2 bg-[#8ab4f8] rounded font-medium '>report</button>
                    </Link>
                </div>
            </div>
        </div>
        {
            currentData?.data ? <div className=' mt-12'>
                <div className="p-6 w-[60%] bg-[#171717] rounded  ">
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>Quantity</div>
                        <div className=' flex-1'>
                            <input type="text" className=' bg-[#202124] border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3 name'  placeholder={`${currentData?.data.total_stock}`} onChange={(e)=>dispatch(addStockQty(e.target.value))}  />
                        </div>
                        </div>
                    <div className=' flex py-4 text-gray-200 items-center font-medium'>
                        <div className=' w-48 font-semibold text-gray-400'>More</div> 
                        <div className=' flex-1'>
                            <textarea className=' bg-[#202124] h-[150px] resize-none border-2 border-[#313337] rounded text-slate-400 outline-none w-full py-2 px-3' placeholder={`${currentData?.data.more}`}  onChange={(e)=>dispatch(addStockMore(e.target.value))}/>

                        </div>
                    </div>
                    
                    <div className=' mt-[50px] text-end'>
                        <button className=' px-6 py-2 text-gray-50 bg-[#273c5d] font-semibold rounded' onClick={(e)=> save(e)}>Save</button>
                    </div>
                </div>
            
        </div>:<Loading/>
        }
        
    </div>
  )
}

export default StockEdit