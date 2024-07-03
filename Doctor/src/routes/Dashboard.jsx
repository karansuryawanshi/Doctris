import React from 'react'
import AllComponent from '../component/AllComponent'
import {Icon} from "@iconify-icon/react" 
import {LineChart} from "@mui/x-charts"
import Doctor_image from "../assets/Doctor-Image.jpg"
import Profile_bg from "../assets/profile-bg.jpg"
import { makeAuthenticatedGETRequest } from '../utils/server'
import { useEffect } from 'react'

const Dashboard = () => {

    useEffect(()=>{
        const fetchDoctor = async ()=>{
            const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor/me")
            // console.log(response.data)
            // console.log("******* doctor Data ***********",response.data)
            // console.log(response)
        }
        fetchDoctor()
    },[])



    // ******** Categort **********
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor/specialist/Dentist");
    //         console.log("******** Doctor header *************",response)
    //     };
    //     fetchData();
    //   }, []);



  return (
    <AllComponent>
        <div className='w-full h-full flex'>
            <div className='w-3/12 m-3 border-2 rounded-xl'>
                <div className='border-b pb-6'>
                    <div className='w-full h-32 flex items-center justify-center rounded-t-lg pt-28' style={{ backgroundImage: `url(${Profile_bg})`}}>
                        <img className='w-20 h-20 rounded-full shadow-xl' src={Doctor_image} alt="" />
                    </div>
                    <div className='flex items-center justify-center pt-12'>
                        <p className='font-semibold text-xl text-gray-800'> Dr. Calvin Carlo </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-gray-600'>Orthopedic</p>
                    </div>
                </div>
                <div className='p-2 space-y-3'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"ic:baseline-dashboard"}></Icon>
                        <p className='text-blue-700 font-semibold'>Dashboard</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"carbon:task-complete"}></Icon>
                        <p className='font-semibold text-gray-700'>Appointment</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"ic:outline-schedule"}></Icon>
                        <p className='font-semibold text-gray-700'>Schedule Timing</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"fluent:payment-32-regular"}></Icon>
                        <p className='font-semibold text-gray-700'>Invoices</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"typcn:messages"}></Icon>
                        <p className='font-semibold text-gray-700'>Messages</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className=' text-xl' Icon={"iconamoon:profile-light"}></Icon>
                        <p className='font-semibold text-gray-700'>Profile</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"mingcute:user-setting-line"}></Icon>
                        <p className='font-semibold text-gray-700'>Profile Settings</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"mdi:patient-outline"}></Icon>
                        <p className='font-semibold text-gray-700'>Patients</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"material-symbols:rate-review-outline"}></Icon>
                        <p className='font-semibold text-gray-700'>Patients Review</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"ci:chat"}></Icon>
                        <p className='font-semibold text-gray-700'>Chat</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"ic:outline-login"}></Icon>
                        <p className='font-semibold text-gray-700'>Login</p>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <Icon className='text-xl' Icon={"mdi:forgot-password"}></Icon>
                        <p className='font-semibold text-gray-700'>Forgot Password</p>
                    </div>
                </div>
            </div>
            <div className='w-9/12 m-3'>
                <div className='pb-4'>
                    <p className='font-semibold text-xl text-gray-700'>Dashboard</p> 
                </div>
                <div className='flex overflow-hidden gap-3'>
                    <div className='border-2 rounded-xl'>
                        <div className='m-2 flex justify-between font-semibold'>
                            <p className='text-gray-700'>Appointment</p>  
                            <p className='text-sm border-2 px-1 rounded-xl border-blue-500 bg-blue-100  text-blue-600'>20%</p>
                        </div>
                        <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={260}
                        height={200}
                        />
                    </div>
                    <div className='border-2 rounded-xl'>
                        <div className='m-2 flex justify-between font-semibold'>
                            <p className='text-gray-700'>Patient</p>  
                            <p className='text-sm border-2 px-1 rounded-xl border-blue-500 bg-blue-100  text-blue-600'>25%</p>
                        </div>
                        <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [5, 8, 6, 7, 4, 5],
                            },
                        ]}
                        width={260}
                        height={200}
                        />
                    </div>
                    <div className='border-2 rounded-xl'>
                        <div className='m-2 flex justify-between font-semibold'>
                            <p className='text-gray-700'>Urgent</p>  
                            <p className='text-sm border-2 px-1 rounded-xl border-blue-500 bg-blue-100  text-blue-600'>35%</p>
                        </div>
                        <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [3, 6, 9, 6, 5, 3],
                            },
                        ]}
                        width={260}
                        height={200}
                        />
                    </div>
                    <div className='border-2 rounded-xl'>
                        <div className='m-2 flex justify-between font-semibold'>
                            <p className='text-gray-700'>Canceled</p>  
                            <p className='text-sm border-2 px-1 rounded-xl border-blue-500 bg-blue-100  text-blue-600'>35%</p>
                        </div>
                        <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [5, 3.5, 5, 4, 6, 8],
                            },
                        ]}
                        width={260}
                        height={200}
                        />
                    </div>
                </div>
                <div className='pt-2 flex gap-4'>
                    <div className='w-6/12'>
                        <div>
                            <div className='pb-2'>
                                <p className='font-semibold text-xl text-gray-700'>Latest Appointment</p>    
                            </div>
    {/* ************* Final ************************************ */}
                            <div className='space-y-2'>
                                <div className='border rounded-xl flex justify-between hover:bg-gray-300 duration-300 cursor-pointer'>
                                    <div className='flex'>
                                        <div className='w-20 h-20 p-2'>
                                            <img className='w-full h-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                                        </div>
                                        <div className='mt-4 px-8'>
                                            <p className='text-normal font-semibold'>name</p>
                                            <p className='text-base text-gray-600'>department</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-lg p-2'>13 mar</p>
                                    </div>
                                </div>
                                <div className='border rounded-xl flex justify-between hover:bg-gray-300 duration-300 cursor-pointer'>
                                    <div className='flex'>
                                        <div className='w-20 h-20 p-2'>
                                            <img className='w-full h-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                                        </div>
                                        <div className='mt-4 px-8'>
                                            <p className='text-normal font-semibold'>name</p>
                                            <p className='text-base text-gray-600'>department</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-lg p-2'>13 mar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='w-6/12'>
                        <div>
                            <div className='pb-2'>
                                <p className='font-semibold text-xl text-gray-700'>Latest Appointment</p>    
                            </div>
                            <div className='space-y-2'>
                                <div className='border justify-between rounded-xl flex hover:bg-gray-300 duration-300 cursor-pointer'>
                                    <div className='flex'>
                                        <div className='w-20 h-20 p-2'>
                                            <img className='w-full h-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                                        </div>
                                        <div className='mt-4 px-8 w-9/12'>
                                            <p className='text-normal font-semibold'>name</p>
                                            <p className='text-base text-gray-600'>department</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center p-2'>
                                        <p className='text-lg'>13 mar</p>
                                    </div>
                                </div>
                                <div className='border justify-between rounded-xl flex hover:bg-gray-300 duration-300 cursor-pointer'>
                                    <div className='flex'>
                                        <div className='w-20 h-20 p-2'>
                                            <img className='w-full h-full rounded-lg' src="https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                                        </div>                                        <div className='mt-4 px-8 w-9/12'>
                                            <p className='text-normal font-semibold'>name</p>
                                            <p className='text-base text-gray-600'>department</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center p-2'>
                                        <p className='text-lg'>13 mar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='py-4'>
                    <div className='text-lg font-semibold text-gray-600 pb-4'>
                        <p>Contact us</p>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='w-3/12 border border-1 rounded-xl'>
                            <div className='flex items-center justify-center p-8'>
                            <div className='p-4 rounded-full bg-blue-100'>
                                <Icon className='text-4xl border-1 text-blue-700' icon={"streamline:mail-send-email-message"}></Icon>
                            </div>
                            </div>
                            <div className='flex items-center justify-center'>
                            <p className='text-xl font-semibold'>New Messages</p>
                            </div>
                            <div className='flex items-center justify-center'>
                            <p className='text-base text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
                            </div>
                        </div>
                        <div className='w-3/12 border border-1 rounded-xl'>
                            <div className='flex items-center justify-center p-8'>
                                <div className='p-4 rounded-full bg-blue-100'>
                                    <Icon className='text-4xl border-1 text-blue-700' icon={"mdi:message-star-outline"}></Icon>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-xl font-semibold'>Latest Proposals</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-base pb-4 text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
                            </div>
                        </div>
                        <div className='w-3/12 border border-1 rounded-xl'>
                            <div className='flex items-center justify-center p-8'>
                                <div className='p-4 rounded-full bg-blue-100'>
                                    <Icon className='text-4xl border-1 text-blue-700' icon={"guidance:time"}></Icon>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-xl font-semibold'>Package Expiry</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-base pb-4 text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
                            </div>
                        </div>
                        <div className='w-3/12 border border-1 rounded-xl'>
                            <div className='flex items-center justify-center p-8'>
                                <div className='p-4 rounded-full bg-blue-100'>
                                    <Icon className='text-4xl border-1 text-blue-700' icon={"ph:heart"}></Icon>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-xl font-semibold'>Saved Item</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='text-base pb-4 text-blue-600 flex items-center justify-center'>Read More <Icon className='mt-1 ml-1' icon={"ep:right"}></Icon> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AllComponent>
  )
}

export default Dashboard
