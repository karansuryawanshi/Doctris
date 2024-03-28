import React from 'react'
import { Icon } from '@iconify/react'
import "react-datepicker/dist/react-datepicker.css";
import ProfileImage from './ProfileImage';

const ProfileSetting = () => {

  return (
    <div className='p-6'>
      <div className='text-lg font-semibold'>
        <p>Personal Information :</p>
      </div>
      <div className='flex'>
        <div className='bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center m-4'>
            <Icon className='text-8xl text-blue-600 p-2' icon={"iconamoon:profile-duotone"}></Icon>
        </div>
        <div className='w-5/12'>
            <p className='font-semibold'>Upload your picture</p>
            <p className='text-gray-500'>For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
        </div>
        <ProfileImage></ProfileImage>
      </div>
      <div className='grid grid-cols-2'>
        <div className=''>
            <p className='p-2'>First Name</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Last Name</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Email</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Phone no.</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Age</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Height</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Weight</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>gender</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>Birth Date</p>
            <input type="date" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>bloodGroup</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
        <div>
            <p className='p-2'>gender</p>
            <input type="text" className='border-2 w-60 rounded-lg px-2 py-1'/>
        </div>
      </div>
      <div className='flex items-center justify-center py-8'>
        <button className='border-2 border-blue-600 hover:bg-blue-700 duration-300 px-4 py-2 rounded-xl bg-blue-600 text-white'>Save Changes</button>
    </div>
    </div>
  )
}

export default ProfileSetting
