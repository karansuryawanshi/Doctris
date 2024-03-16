import React from 'react'
import { Icon } from '@iconify/react'

const DoctorDetail = ({doctorName,specialist}) => {
  return (
    <div className='rounded-lg duration-300 hover:bg-blue-500 hover:text-white'>
        <div className='flex'>
            <div className='absolute space-y-4 m-4 mt-8 text-blue-600'>
              <Icon className='border w-8 h-8 rounded-full p-1 bg-blue-100 border-blue-400 shadow-lg shadow-blue-300 hover:text-white hover:bg-blue-600 cursor-pointer duration-300' icon={"ri:github-line"}></Icon>
              <Icon className='border w-8 h-8 rounded-full p-1 bg-blue-100 border-blue-400 shadow-lg shadow-blue-300 hover:text-white hover:bg-blue-600 cursor-pointer duration-300' icon={"iconoir:facebook"}></Icon>
              <Icon className='border w-8 h-8 rounded-full p-1 bg-blue-100 border-blue-400 shadow-lg shadow-blue-300 hover:text-white hover:bg-blue-600 cursor-pointer duration-300' icon={"basil:linkedin-outline"}></Icon>
              <Icon className='border w-8 h-8 rounded-full p-1 bg-blue-100 border-blue-400 shadow-lg shadow-blue-300 hover:text-white hover:bg-blue-600 cursor-pointer duration-300' icon={"pajamas:twitter"}></Icon>
            </div>
            <img className='rounded-t-lg' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
        </div>
        <div className='rounded-b-lg flex flex-col py-6 items-center justify-center '>
            <p className='text-lg font-semibold cursor-pointer'>{doctorName}</p>
            <p className='text-gray-400 text-sm'>{specialist}</p>
            <div>
            </div>
        </div>
    </div>
  )
}

export default DoctorDetail
