import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/server';

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
    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastname] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [bloodGroup, setBloodGroup] = useState([]);
    const [birthDate, setBirthDate] = useState([]);
    const [patientPhoto,setPatientPhoto] = useState ([])
  
    useEffect(() => {
      const fetchData = async () => {
          const response = await makeAuthenticatedGETRequest("/auth/get/patient/me");
          setFirstname(response.data[0].firstname)
          setLastname(response.data[0].lastname)
          setPhoneNumber(response.data[0].phoneNumber)
          setBloodGroup(response.data[0].bloodGroup)
          setBirthDate(response.data[0].birthDate)
          setPatientPhoto(response.data[0].patientPhoto)
      };
      fetchData();
    }, []);
  return (
            <div className='w-4/12 mt-10'>
                <div className='min-h-min rounded-xl border border-1'>
                    <div className='grid items-center bg-gray-100 justify-center rounded-t-xl'>
                        <div className='w-32 h-32 pl-2'>
                            <img className='w-32 h-32 rounded-3xl py-2' src={patientPhoto} alt="" />
                        </div>
                        <div className='grid items-center justify-center py-2'>
                            <p className='text-lg font-semibold'>{firstname} {lastname}</p>
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
                        <div className='flex space-x-2'>
                            <div className='text-blue-500'>
                                <Icon className='text-2xl' icon={"iconamoon:profile-light"}></Icon>
                            </div>
                            <div className='flex space-x-4'>
                                <p className='text-base font-semibold'>Gender</p>
                                <p className='text-gray-500'>Male</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='text-blue-500'>
                                <Icon className='text-2xl' icon={"iconamoon:profile-light"}></Icon>
                            </div>
                            <div className='flex space-x-4'>
                                <p className='text-base font-semibold'>Birthday</p>
                                <p className='text-gray-500'>{birthDate}</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='text-blue-500'>
                                <Icon className='text-2xl' icon={"iconamoon:profile-light"}></Icon>
                            </div>
                            <div className='flex space-x-4'>
                                <p className='text-base font-semibold'>Phone No</p>
                                <p className='text-gray-500'>{phoneNumber}</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='text-blue-500'>
                                <Icon className='text-2xl' icon={"iconamoon:profile-light"}></Icon>
                            </div>
                            <div className='flex space-x-4'>
                                <p className='text-base font-semibold'>Address</p>
                                <p className='text-gray-500'>Sydney, Australia</p>
                            </div>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='text-blue-500'>
                                <Icon className='text-2xl' icon={"iconamoon:profile-light"}></Icon>
                            </div>
                            <div className='flex space-x-4'>
                                <p className='text-base font-semibold'>Blood Group</p>
                                <p className='text-gray-500'>{bloodGroup}</p>
                            </div>
                        </div>   
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ProfileLeft
