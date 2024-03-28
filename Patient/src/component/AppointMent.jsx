import React from 'react'

const AppointmentData = [
    {
        img:"https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg",
        drName:"Dr. Calvin Carlo",
        address:"Sydney, Australia",
        date:"13 mar"
    },
    {
        img:"https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg",
        drName:"Dr. Calvin Carlo",
        address:"Sydney, Australia",
        date:"13 mar"
    },
]

const AppointMent = () => {
  return (
       <div className='p-6 space-y-3'>
    {AppointmentData.map((item)=>{
        return(
                <div className='border  rounded-xl flex hover:bg-gray-300 duration-300 cursor-pointer'>
                    <div className='w-20 h-20 p-2'>
                        <img className='rounded-full' src={item.img} alt="" />
                    </div>
                    <div className='mt-4 px-8 w-9/12'>
                        <p className='text-normal font-semibold'>{item.drName}</p>
                        <p className='text-base text-gray-600'>{item.address}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-lg'>{item.date}</p>
                    </div>
                </div>
        )
    })}
    </div>
  )
}

export default AppointMent
