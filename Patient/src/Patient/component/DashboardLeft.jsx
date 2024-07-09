import React from 'react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import Rupay from "../assets/rupay.png"
import Mastercard from "../assets/mastercard.png"
import Discover from "../assets/discover.png"
import American from "../assets/rupay.png"
import DoctorImage from "../assets/Doctor-Image.jpg"

const DashboardLeft = () => {

    const [firstname, setFirstname] = useState([])
    const [lastname, setLastname] = useState([])
    const [age, setAge] = useState([])
    const [blood, setBlood] = useState([])
    const [height, setHeight] = useState([])
    const [weight, setWeight] = useState([])
    const [userId, setUserId] = useState([])
    const [patientPhoto, setPatientPhoto] = useState([])

    const navigate = useNavigate()
  
    useEffect(() => {
      const fetchData = async () => {
          const response = await makeAuthenticatedGETRequest("/auth/get/patient/me");
          console.log(response);
          setFirstname(response.data[0].firstname)
          setLastname(response.data[0].lastname)
          setBlood(response.data[0].bloodGroup)
          setAge(response.data[0].age)
          setHeight(response.data[0].height)
          setWeight(response.data[0].weight)
          setUserId(response.data[0]._id)
          setPatientPhoto(response.data[0].patientPhoto)
          console.log("Dashboard response",response)
      };
      fetchData();
    }, []);

    const NavigateProfile =()=>{
        navigate("/patient/profile/"+userId)
    }

  return (
            <div className='w-1/4 h-max m-2 border border-1 rounded-xl'>
                <div className='flex p-4'>
                    <div className='w-24 h-24'>

                        {patientPhoto?(
                            <img className='w-24 h-24 rounded-full' src={patientPhoto} alt="" />
                        ):(
                            <img className='w-24 h-24 rounded-full' src={DoctorImage} alt="" />
                        )}
                        
                        
                    </div>
                    <div className='my-4 mx-4'>
                        <p className='font-semibold text-lg'>{firstname} {lastname}</p>
                        {age ? (
                            <p>{age} Years old</p>
                        ) : (
                            <span className='flex'>age<Icon className='text-2xl' icon={"openmoji:warning"}/></span>
                        )}
                    </div>
                </div>
                <div className='m-4 flex items-center justify-center border border-1 rounded-full border-green-500 bg-green-50'>
                    <p className='p-2 font-semibold text-green-500'>
                        Healthy
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-16'>
                    <div>
                        <p className='font-semibold text-gray-500'>Blood</p>
                        {blood ? (
                            <p>{blood}</p>
                        ):(
                            <Icon className='text-2xl' icon={"openmoji:warning"}/>
                        )}
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>Height</p>
                        {height ? (
                            <p>{height}cm</p>

                        ):(
                            <Icon className='text-2xl ml-2' icon={"openmoji:warning"}/>
                        )}
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>Weight</p>
                        {weight ?(
                            <p>{weight}kg</p>

                        ):(
                            <Icon className='text-2xl ml-2' icon={"openmoji:warning"}/>
                        )}
                    </div>
                </div>
                <div className='px-6 py-2'>
                    <p className='font-semibold'>Doctors:</p>
                    <div className='flex items-center justify-center space-x-2 py-2'>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src={DoctorImage} alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src={DoctorImage} alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src={DoctorImage} alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src={DoctorImage} alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src={DoctorImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className='px-6 py-2'>
                    <p className='font-semibold'>Payment:</p>
                    <div>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src={Mastercard} alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Mastercard  •••4584</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                        <di cursor-pointerv className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src={Discover} alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Discover  •••1254</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </di>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src={Rupay} alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Rupay  •••3521</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src={American} alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>American  •••6585</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-4  border-2 border-blue-400 px-2 py-2 flex items-center justify-center rounded-lg text-blue-700 bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white duration-300' onClick={NavigateProfile}>
                        <p className=' font-semibold text-normal'>View Profile</p>
                    </div>
                </div>
            </div>
  )
}

export default DashboardLeft
