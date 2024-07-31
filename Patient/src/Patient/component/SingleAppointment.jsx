import React from 'react'

const SingleAppointment = ({name, address, phno, department, doctorImage}) => {
    console.log("DoctorImage",doctorImage)
  return (
    <div className='border  rounded-xl flex hover:bg-gray-300 duration-300 cursor-pointer'>
                    <div className='w-20 h-20 p-2'>
                        {doctorImage ?(
                            <div className='w-full h-full'>
                                <img className='w-full h-full rounded-lg' src={doctorImage} alt="" />
                            </div>
                        ):(
                            <div className='w-full h-full'>
                                <img className='w-full h-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                            </div>
                        )}
                    </div>
                    <div className='mt-4 px-8 w-9/12'>
                        <p className='text-normal font-semibold'>{name}</p>
                        <p className='text-base text-gray-600'>{department}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-lg'>13 mar</p>
                    </div>
                </div>
  )
}

export default SingleAppointment
