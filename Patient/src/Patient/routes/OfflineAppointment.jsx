import React from 'react'
import LoggedInHome from './LoggedInHome'
import { useEffect, useState } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/server';

const OfflineAppointment = () => {

    const [appointmentDetail, setAppointmentDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/appointment/my/appointment");

            console.log("*****Helo this is coming appointment****",response.appointment)
            setAppointmentDetail(response.appointment);
            console.log(response)
            
            if(!response){
                console.log("not response")
            }
            else(
                console.log("response gained")
            )
        };
        fetchData();
      }, []);

  return (
    <LoggedInHome>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-4/12 space-y-4'>
            <p className='font-semibold text-3xl ml-24'>Offline Appointment</p>
            <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis itaque ipsam velit mollitia atque ipsa doloremque perferendis!</p>
        </div>
            <div className='w-11/12 grid grid-cols-3'>
            {appointmentDetail ? (
                appointmentDetail.filter(item => item.mode == 'offline').map((item)=>{
                    return(
                        <div className='w-80 border-2 rounded-lg m-8'>
                            <div className='flex items-center justify-center'>
                                <img className='w-72 h-72 py-6' src={"https://images.unsplash.com/photo-1721406769891-f2ba651401d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
                            </div>
                            <div className='px-4 space-y-2 pb-4'>
                                <p className='font-semibold'>Patient name :- <span className='font-normal text-indigo-900'>{item.patientName}</span></p>
                                <p className='font-semibold'>Doctor name :- <span className='font-normal text-indigo-900'>{item.doctorName}</span></p>
                                <p className='font-semibold'>Department :- <span className='font-normal text-indigo-900'>{item.department}</span></p>
                                <p className='font-semibold'>Address :- <span className='font-normal text-indigo-900'>{item.address}</span></p>
                                <p className='font-semibold'>Mail Id :- <span className='font-normal text-indigo-900'>{item.email}</span></p>
                                <p className='font-semibold'>Comment :- <span className='font-normal text-indigo-900'>{item.comment}</span></p>
                            </div>
                        </div>      
                    )
                })
            ):(
                // <div className='w-100 h-100'>
                    <div className='py-72'>
                        <p className='text-4xl font-semibold'>!!No Appointment Details!!</p>
                </div>
            )}
            </div>
        </div>
    </LoggedInHome>
  )
}

export default OfflineAppointment


