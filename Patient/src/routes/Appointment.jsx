import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { makeAuthenticatedGETRequest } from '../utils/server';
import { makeAuthenticatedPOSTRequest } from '../utils/server';
import LoggedInHome from './LoggedInHome';
import { useNavigate } from 'react-router-dom';

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
        const data = {patientName, department, doctorName, email,phoneNo,comment,address }
        const response = await makeAuthenticatedPOSTRequest("/appointment/create", data)
        console.log("********* booked appointment data ************",response)
        alert("Updated Successfully")
        navigate("/dashboard")
    }

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
            <div className='flex items-center justify-center'>
                <div className='w-6/12  rounded-xl border-2'>
                    <div className='flex bg-blue-600 rounded-t-xl items-center justify-center'>
                        <p className='text-white font-semibold text-2xl p-3'>Clinic Appointment</p>
                    </div>
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
                        <div className="grid grid-cols-2">
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
                                }}
                                >
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
                            }} 
                            />
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
                </div>
            </div>
        </div>
        </LoggedInHome>
    </div>
  )
}

export default Appointment
