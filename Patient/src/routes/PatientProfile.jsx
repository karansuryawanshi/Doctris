import React from 'react'
import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Icon } from '@iconify/react';  
import ProfileLeft from "../component/ProfileLeft"
import ProfileRight from '../component/ProfileRight';
// import ProfileRight from "../component/ProfileRight"

const PatientProfile = () => {

=======
import { Icon } from '@iconify/react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Chart } from "react-google-charts";


const graphData = [
    ["rate", "Heardrate"],
    ["", 15],
    ["", 20],
    ["", 10],
    ["", 45],
    ["", 20],
    ["", 10],
    ["", 5],
  ];

  const options = {
     // title: "Company Performance",
    curveType: "function",
    legend: { position: "none" },
  };

const PatientProfile = () => {
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > false) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
<<<<<<< HEAD

  return (
    <div className='profile'>
=======
  return (
    <div className='navbar'>
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
      <div className={`transition duration-200 flex${scrolled ? " bg-white sticky top-0" : ""}`}>
            <div className='w-7/12 h-20 flex items-center justify-center space-x-10'>
                <div>
                    <img className='w-28' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAWCAYAAADzeqMPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0ODI2M0RBMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0ODI2M0RCMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4MjYzRDgwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4MjYzRDkwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GDWK8AAAJT0lEQVR42uxaC5BWZRl+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" alt="" />
                </div>
                <div className=''>
                    <ul className='flex text-sm text-zinc-700 space-x-8 font-semibold'>
                        <li className='cursor-pointer'>HOME</li>
                        <li className='cursor-pointer'>DOCTOR</li>
                        <li className='cursor-pointer'>PATIENT</li>
                        <li className='cursor-pointer'>PHARMACY</li>
                        <li className='cursor-pointer'>PAGES</li>
                    </ul>
                </div>
            </div>
            <div className='w-5/12 flex items-center justify-center space-x-4'>
            <div className='cursor-pointer bg-blue-600 rounded-full p-1 hover:bg-blue-700 transition duration-200'>
                <Icon className='text-3xl '
                    icon={"system-uicons:settings"}  
                    color='white'
                    />
            </div>
            <div className='bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200'>
                <Icon className='text-2xl'
                    icon={"system-uicons:search"}  
                    color='white'
                    />
            </div>
            <div className='w-10 h-10 rounded-full cursor-pointer border-2 border-blue-100'>
                <img className='rounded-full' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
            </div>
            </div>
        </div>
<<<<<<< HEAD
        <div className='flex items-center justify-center'>
        <div className='w-9/12 flex space-x-4'>
            <ProfileLeft></ProfileLeft>
            <ProfileRight></ProfileRight>
        </div>
=======
        <div className='w-full f-full flex'>    
            <div className='w-1/4 h-max m-2 border border-1 rounded-xl'>
                <div className='flex p-4'>
                    <div className='w-24 h-24'>
                        <img className='rounded-full' src="https://doctris-react-landing.vercel.app/static/media/09.a78fa894da10cce37f2f.jpg" alt="" />
                    </div>
                    <div className='my-4 mx-4'>
                        <p className='font-semibold text-lg'>Christopher Burrell</p>
                        <p>25 Years old</p>
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
                        <p>B +</p>
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>Height</p>
                        <p>175cm</p>
                    </div>
                    <div>
                        <p className='font-semibold text-gray-500'>Weight</p>
                        <p>64kg</p>
                    </div>
                </div>
                <div className='px-6 py-2'>
                    <p className='font-semibold'>Doctors:</p>
                    <div className='flex items-center justify-center space-x-2 py-2'>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src="https://doctris-react-landing.vercel.app/static/media/02.38e00cf46dc0cbd9fed3.jpg" alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src="https://doctris-react-landing.vercel.app/static/media/03.b192aca452235f61b392.jpg" alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src="https://doctris-react-landing.vercel.app/static/media/04.f645789423636f851180.jpg" alt="" />
                        </div>
                        <div className='w-10 h-10'>
                            <img className='rounded-full border border-1' src="https://doctris-react-landing.vercel.app/static/media/05.e4b5d05f3ab9e6bad04a.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className='px-6 py-2'>
                    <p className='font-semibold'>Payment:</p>
                    <div>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src="https://doctris-react-landing.vercel.app/static/media/mastercard.f100dbee1261ab395fe1.png" alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Mastercard  •••4584</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                        <di cursor-pointerv className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Discover  •••1254</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </di>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>Rupay  •••3521</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                        <div className='flex hover:bg-gray-300 px-2 rounded-lg duration-300 cursor-pointer'>
                            <div className='w-16 h-16'>
                                <img src="data:image/png;base64,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" alt="" />
                            </div>
                            <div className=' mt-2 ml-5 text-base'>
                                <p>American  •••6585</p>
                                <p className='text-gray-500'>Expires 12/24</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-4  border-2 border-blue-400 px-2 py-2 flex items-center justify-center rounded-lg text-blue-700 bg-blue-50 cursor-pointer hover:bg-blue-500 hover:text-white duration-300'>
                        <p className=' font-semibold text-normal'>View Profile</p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-max p-3'>
                <div className='text-lg font-semibold'>
                    <p>Dashboard</p>
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <div className='border border-1 rounded-xl'>
                            <div className='flex p-4'>
                                <div className='flex space-x-2'>
                                    <p className='text-base font-semibold'>Water</p>
                                    <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-blue-500 bg-blue-50 text-blue-500'>93%</p>
                                </div>
                                <div className='flex items-center justify-end ml-20'>
                                    <Icon className='text-blue-500 text-2xl' icon={"lets-icons:water"}></Icon>
                                </div>
                            </div>
                            <div className=' w-60 h-60 p-8'>
                                <CircularProgressbar value={90} />
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='border border-1 rounded-xl'>
                            <div className='flex p-4'>
                                <div className='flex space-x-2'>
                                    <p className='text-base font-semibold'>Water</p>
                                    <p className='text-xs border-2 font-bold px-2 py-1 rounded-full border-blue-500 bg-blue-50 text-blue-500'>93%</p>
                                </div>
                                <div className='flex items-center justify-end ml-20'>
                                    <Icon className='text-blue-500 text-2xl' icon={"lets-icons:water"}></Icon>
                                </div>
                            </div>
                            <div className='w-60 h-60 p-8'>
                                <Chart
                                chartType="LineChart"
                                width="240px"
                                height="240px"
                                data={graphData}
                                options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
>>>>>>> 9b09324780698521db15268299768ea600dc29f5
        </div>
    </div>
  )
}

export default PatientProfile
