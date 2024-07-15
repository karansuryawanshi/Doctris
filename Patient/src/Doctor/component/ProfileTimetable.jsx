import React from 'react'
import {Icon} from "@iconify-icon/react"

const ProfileTimetable = () => {
  return (
    <div className='flex pb-8'>
      <div className='w-1/3 border rounded-xl'>
        <div className='grid grid-rows-3 p-3 gap-2'>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Monday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Tuesday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Wednesday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Thursday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Friday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Saturday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'><Icon className='text-blue-600 text-lg' icon={"ph:clock-fill"}></Icon><p className='text-gray-500'>Sunday</p></div>
            <p className=''>Time: <span className='text-blue-600'>8.00 - 20.00</span></p>
          </div>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='flex items-center justify-center'>
          <Icon className='text-4xl text-blue-600 p-4 rounded-xl bg-blue-100' icon={"ph:phone-light"}></Icon>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-xl font-semibold'>Phone</p>
        </div>
        <div className='m-6 grid grid-rows-2 items-center'>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, Fugiat, officiis!</p>
          <a href="tel:+91 9356497470" className='text-blue-600 ml-20'>+91 9356497470</a>
        </div>
      </div>
      <div className='w-1/3'>
        <div className='flex items-center justify-center'>
          <Icon className='text-4xl text-blue-600 p-4 rounded-xl bg-blue-100' icon={"material-symbols-light:mail-outline"}></Icon>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-xl font-semibold'>Email</p>
        </div>
        <div className='m-6 grid grid-rows-2 items-center'>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, Fugiat, officiis!</p>
          <a className='text-blue-600 ml-8' href="mailto:karansuryawanshi717@gmail.com">karansuryawanshi717@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default ProfileTimetable
