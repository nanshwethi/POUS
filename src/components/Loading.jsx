import React from 'react'

const Loading = () => {
  return (
    <div className=' flex min-h-[70vh] justify-center items-center'>
      <div className=' relative'>
          <div className=' w-[50px] h-[50px] rounded-full z-0  bg-[#4381b4] loading'></div>
          <div className=' w-[45px] h-[45px] absolute right-[0.15rem] top-[0.173rem] bg-[#202124] rounded-full z-50'>
        </div>
    </div>
  </div>
)
}

export default Loading