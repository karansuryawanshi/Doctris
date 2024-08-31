import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest} from '../utils/server';
import { makeAuthenticatedPOSTRequest } from '../utils/server';
import LoggedInHome from './LoggedInHome';
import { json, useNavigate } from 'react-router-dom';
import {loadStripe} from "@stripe/stripe-js"

const Appointment = () => {

    const [scrolled, setScrolled] = useState(false);
    const [fetchData, setFetchData] = useState([]);

    const [patientName,setPatientName] = useState([])
    const [department,setDepartment] = useState([])
    const [doctorName,setDoctorName] = useState([])
    const [email,setEmail] = useState([])
    const [phoneNo,setPhnoNo] = useState([])
    const [comment,setComment] = useState([])
    const [address,setAddress] = useState([])
    const [onlineMode,setOnlineMode] = useState('online')
    const [offlineMode,setOfflineMode] = useState('offline')
    const [time,setTime] = useState('')
    const [date,setDate] = useState('')

    const [isVirtualAppointment, setIsVirtualAppointment] = useState(false)
    const [isClinicAppointment, setIsClinicAppointment] = useState(true)

    const navigate = useNavigate()

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

    useEffect(()=>{
        const fetchDoctor = async ()=>{
            const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor")
            setFetchData(response.data)
            // console.log("******* doctor Data ***********",response.data)
        }
        fetchDoctor()
    },[])

    const bookAppointment = async()=>{

        const makePayment=async()=>{

            const body = { 
                products:doctorName,
                email:email,
                address:address,
                time:time,
                date:date,
                amount:"200",
                logo:"https://plus.unsplash.com/premium_photo-1712160362268-68616bf1c0d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
            }
            // console.log("body products",JSON.stringify(body))
    
            const stripe = await loadStripe("pk_test_51PcCIGSBGJbgrrlQ5CMEE2PRtgNa9nSHfNDBKynPxIW4s1vQKyg2m1z8eZsUY8GlyM6tDtSep4weGrs2v3FArpeH0069tSMgZi")
    
            const header ={
                "Content-Type":"application/json"
            }
            const response = await fetch("http://localhost:8000/stripe-checkout-session",{
                method:"POST",
                headers:header,
                body:JSON.stringify(body)
            })

            console.log("Response :- ",response)
    
            const session = await response.json();

            console.log("Session is :- session",session.id)
    
            const result = stripe.redirectToCheckout({
                sessionId: session.id
            })
    
            if(result.error){
                console.log(result.error)
            }
        }


        const mode = date ? onlineMode : offlineMode;
        if(mode == onlineMode){
            await makePayment();
        }

        const data = 
            {
                patientName,
                department, 
                doctorName, 
                email,
                phoneNo,
                comment,
                address,
                mode,
                time,
                date}
        const response = await makeAuthenticatedPOSTRequest("/appointment/create", data)
        console.log("********* booked appointment data ************",response)
    }

    const VirtualAppointment = () => {
        setIsClinicAppointment(false);
        setIsVirtualAppointment(true);
    };

    const ClinicAppointment = () => {
        setIsClinicAppointment(true);
        setIsVirtualAppointment(false);
    };

  return (
    <div>
    <LoggedInHome>
        <div className='my-5'>
            <div className='bg-gradient-to-b from-gray-300 to-gray-0 py-10'>
                <div className='flex items-center justify-center'>
                    <p className='text-4xl font-semibold'>Book an appointment</p>
                </div>
                <div className='flex items-center justify-center py-2'>
                    <p className='w-4/12 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis itaque ipsam velit mollitia atque ipsa doloremque perferendis!</p>
                </div>
            </div>
            <div className='w-100 flex items-center justify-center'>
                <div className='w-6/12 border-2 rounded-xl overflow-hidden'>
                    <div className='flex items-center justify-between text-2xl font-semibold text-white rounded-t-xl'>
                        <p className={`cursor-pointer px-20 py-3 duration-300 text-gray-900 ${isClinicAppointment ? "bg-blue-600 text-white":""}`} onClick={ClinicAppointment}>Clinic Appointment</p>
                        <p className={`cursor-pointer px-20 py-3 duration-300 text-gray-900 ${isVirtualAppointment ? "bg-blue-600 text-white":""}`} onClick={VirtualAppointment}>Virtual appointment</p>
                    </div>
                    {isClinicAppointment &&
                        <div className='p-4'>
                            <div>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Patient Name <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                <input 
                                    className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                    placeholder='Patient Name:' 
                                    type="text" 
                                    value={patientName}
                                    onChange={(e)=>{
                                    setPatientName(e.target.value)
                                }}
                                />
                            </div>
                            <div className='grid grid-cols-2'>
                            <div className='mr-5'>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Department </p>
                                <select 
                                    className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                    placeholder='Patient Name:' 
                                    type="text"
                                    value={department}
                                    onChange={(e)=>{
                                    setDepartment(e.target.value)
                                    }}>
                                        <option value="">Select</option>
                                        <option value="Eye Care">Eye Care</option>
                                        <option value="Gynecologist">Gynecologist</option>
                                        <option value="Psychotherapist">Psychotherapist</option>
                                        <option value="Orthopedic">Orthopedic</option>
                                        <option value="Dentist">Dentist</option>
                                        <option value="Gastrologist">Gastrologist</option>
                                        <option value="Urologist">Urologist</option>
                                        <option value="Neurologist">Neurologist</option>
                                    </select>
                                </div>
                                <div className=''>
                                    <p className='text-normal py-2 font-semibold text-gray-800'>Doctor</p>
                                    <select 
                                        className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                        placeholder='Patient Name:' 
                                        type="text"
                                        value={doctorName}
                                        onChange={(e)=>{
                                        setDoctorName(e.target.value)
                                    }}>
                                        <option value="">Select</option>
                                        {fetchData.map((item)=>{
                                            return(
                                                <option value={item.name}>Dr. {item.name}</option>
                                                )
                                            })}
                                        </select>
                                </div>
                            </div>
                            <div className='grid grid-cols-2'>
                                <div className='mr-5'>
                                    <p className='text-normal py-2 font-semibold text-gray-800'>Your Email  <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                    <input 
                                        className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                        placeholder='Your Email:' 
                                        type="text"
                                        value={email}
                                        onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }} />
                            </div> 
                            <div className=''>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Your Phone <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                    <input 
                                        className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                        placeholder='Your Phone:' 
                                        type="text"
                                        value={phoneNo}
                                        onChange={(e)=>{
                                        setPhnoNo(e.target.value)
                                    }} />
                            </div>   
                        </div>
                        <div className=''>
                            <p className='text-normal py-2 font-semibold text-gray-800'>Address <span className='text-red-700 font-semibold text-xl'>*</span></p>
                            <input 
                                className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                placeholder='Your Address:' 
                                type="text" 
                                value={address}
                                onChange={(e)=>{
                                    setAddress(e.target.value)
                                }}/>
                        </div>

                        <div className=''>
                            <p className='text-normal py-2 font-semibold text-gray-800'>Comments <span className='text-red-700 font-semibold text-xl'>*</span></p>
                            <textarea 
                                className='border-2 p-1 h-32 rounded-lg w-full hover:border-blue-600 duration-300' 
                                placeholder='Your Message:' 
                                type="text"
                                value={comment}
                                onChange={(e)=>{
                                    setComment(e.target.value)
                                }} />
                        </div>

                        <div>
                            <button 
                                className='bg-blue-600 w-full p-2 rounded-lg mt-2 text-white text-lg'
                                onClick={bookAppointment}>Book an appointment</button>
                        </div>
                            
                        </div>
                    }
                    {isVirtualAppointment &&
                        <div className='p-4'>
                        <div>
                            <p className='text-normal py-2 font-semibold text-gray-800'>Patient Name <span className='text-red-700 font-semibold text-xl'>*</span></p>
                            <input 
                                className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                placeholder='Patient Name:' 
                                type="text" 
                                value={patientName}
                                onChange={(e)=>{
                                setPatientName(e.target.value)
                            }}
                            />
                        </div>
                        <div className='grid grid-cols-2'>
                        <div className='mr-5'>
                            <p className='text-normal py-2 font-semibold text-gray-800'>Department </p>
                            <select 
                                className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                placeholder='Patient Name:' 
                                type="text"
                                value={department}
                                onChange={(e)=>{
                                setDepartment(e.target.value)
                                }}>
                                    <option value="">Select</option>
                                    <option value="Eye Care">Eye Care</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Psychotherapist">Psychotherapist</option>
                                    <option value="Orthopedic">Orthopedic</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Gastrologist">Gastrologist</option>
                                    <option value="Urologist">Urologist</option>
                                    <option value="Neurologist">Neurologist</option>
                                </select>
                            </div>
                            <div className=''>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Doctor</p>
                                <select 
                                    className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                    placeholder='Patient Name:' 
                                    type="text"
                                    value={doctorName}
                                    onChange={(e)=>{
                                    setDoctorName(e.target.value)
                                }}>
                                    <option value="">Select</option>
                                    {fetchData.map((item)=>{
                                        return(
                                            <option value={item.name}>Dr. {item.name}</option>
                                            )
                                        })}
                                    </select>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='mr-5'>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Your Email  <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                <input 
                                    className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                    placeholder='Your Email:' 
                                    type="text"
                                    value={email}
                                    onChange={(e)=>{
                                    setEmail(e.target.value)
                                }} />
                            </div> 
                            <div className=''>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Your Phone <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                    <input 
                                        className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                        placeholder='Your Phone:' 
                                        type="text"
                                        value={phoneNo}
                                        onChange={(e)=>{
                                        setPhnoNo(e.target.value)
                                    }} />
                            </div>   
                        </div>

                        <div className='grid grid-cols-2'>
                            <div className='mr-5'>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Date <span className='text-red-700 font-semibold text-xl'>*</span></p>
                                <input 
                                    className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                    placeholder='Your Email:' 
                                    type="date"
                                    value={date}
                                    onChange={(e)=>{
                                    setDate(e.target.value)}}
                                />
                            </div> 
                            <div className=''>
                                <p className='text-normal py-2 font-semibold text-gray-800'>Time Slot<span className='text-red-700 font-semibold text-xl'>*</span></p>
                                <select 
                                className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                                placeholder='Patient Name:' 
                                type="text"
                                value={time}
                                onChange={(e)=>{
                                setTime(e.target.value)
                                }}
                                >
                                    <option value="">Select</option>
                                    <option value="10:00 am To 10:15 am">10:00 am To 10:15 am</option>
                                    <option value="10:30 am To 11:45 am">10:30 am To 11:45 am</option>
                                    <option value="11:00 am To 11:15 am">11:00 am To 11:15 am</option>
                                    <option value="11:30 am To 11:45 am">11:30 am To 11:45 am</option>
                                    <option value="12:00 pm To 12:15 pm">12:00 pm To 12:15 pm</option>
                                    <option value="12:30 pm To 12:45 pm">12:30 pm To 12:45 pm</option>
                                    <option value="04:00 pm To 04:15 pm">04:00 pm To 04:15 pm</option>
                                    <option value="04:30 pm To 04:45 pm">04:30 pm To 04:45 pm</option>
                                    <option value="05:00 pm To 05:15 pm">05:00 pm To 05:15 pm</option>
                                    <option value="05:30 pm To 05:45 pm">05:30 pm To 05:45 pm</option>
                                    <option value="06:00 pm To 06:15 pm">06:00 pm To 06:15 pm</option>
                                    <option value="06:30 pm To 06:45 pm">06:30 pm To 06:45 pm</option>
                                </select>
                            </div>   
                        </div>
                        <div className=''>
                        <p className='text-normal py-2 font-semibold text-gray-800'>Address <span className='text-red-700 font-semibold text-xl'>*</span></p>
                        <input 
                            className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                            placeholder='Your Address:' 
                            type="text" 
                            value={address}
                            onChange={(e)=>{
                                setAddress(e.target.value)
                            }}/>
                    </div>

                    <div className=''>
                        <p className='text-normal py-2 font-semibold text-gray-800'>Comments <span className='text-red-700 font-semibold text-xl'>*</span></p>
                        <textarea 
                            className='border-2 p-1 h-32 rounded-lg w-full hover:border-blue-600 duration-300' 
                            placeholder='Your Message:' 
                            type="text"
                            value={comment}
                            onChange={(e)=>{
                                setComment(e.target.value)
                            }} />
                    </div>
                        <div>
                            <button 
                                className='bg-blue-600 w-full p-2 rounded-lg mt-2 text-white text-lg'
                                onClick={bookAppointment}
                                // onClick={()=>makePayment()}
                                >Pay $20</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        </LoggedInHome>
    </div>
  )
}

export default Appointment
