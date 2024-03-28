import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from '@iconify/react';

const profileData = [
    {
        icon:"iconamoon:profile-light",
        category:"Gender",
        categoryOption:"Female"
    },
    {
        icon:"iconamoon:profile-light",
        category:"Birthday",
        categoryOption:"13th Sep 1993"
    },
    {
        icon:"iconamoon:profile-light",
        category:"Phone No.",
        categoryOption:"+91 9356497470"
    },
    {
        icon:"iconamoon:profile-light",
        category:"Address",
        categoryOption:"Sydney, Australia"
    },
    {
        icon:"iconamoon:profile-light",
        category:"Blood Group",
        categoryOption:"B +"
    },
]

const ProfileLeft = () => {
  return (
            <div className='w-4/12 border border-1 mt-10 rounded-xl'>
                <div className='w-full h-full rounded-t-xl'>
                    <div className='grid items-center bg-gray-100 justify-center'>
                        <div className='w-32 h-32 pl-2'>
                            <img className='rounded-full py-2' src="https://doctris-react-landing.vercel.app/static/media/09.a78fa894da10cce37f2f.jpg" alt="" />
                        </div>
                        <div className='grid items-center justify-center py-2'>
                            <p className='text-lg font-semibold'>Christopher Burrell</p>
                            <p className='text-gray-500 pl-6'>25 Years old</p>
                        </div>
                    </div>
                    <div className='px-6'>
                        <div className=' py-4 space-y-2'>
                            <div className='flex justify-between px-2'>
                                <p className='text-sm font-semibold'>Complete your profile</p>
                                <p className='font-semibold text-gray-500'>89%</p>
                            </div>
                            <div className=''>
                                <ProgressBar 
                                completed={89}
                                bgColor="#3b82f6"
                                labelColor="#3b82f6"
                                />
                            </div>
                        </div>
                        <div className='space-y-4 pb-5'>
                        {profileData.map((item)=>{
                                return(
                                <div className='flex space-x-2'>
                                    <div className='text-blue-500'>
                                        <Icon className='text-2xl' icon={item.icon}></Icon>
                                    </div>
                                    <div className='flex space-x-4'>
                                        <p className='text-base font-semibold'>{item.category}</p>
                                        <p className='text-gray-500'>{item.categoryOption}</p>
                                    </div>
                                </div>   
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ProfileLeft
