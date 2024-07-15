import React, { useState } from 'react'
import AllComponent from '../component/AllComponent'
import { useEffect } from 'react';
import { makeAuthenticatedGETRequest } from '../utils/server';

const ComingAppointment = () => {

    const [appointmentDetail, setAppointmentDetail] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/appointment/get/all/patient");

            console.log("*****Helo this is coming appointment****",response.appointment)
            setAppointmentDetail(response.appointment);
            
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
    <AllComponent>
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
                                <img className='w-72 h-72 py-6' src={item.patient.patientPhoto} alt="" />
                            </div>
                            <div className='px-4 space-y-2 pb-4'>
                                <p className='font-semibold'>Name :- <span className='font-normal text-indigo-900'>{item.patientName}</span></p>
                                <p className='font-semibold'>Department :- <span className='font-normal text-indigo-900'>{item.department}</span></p>
                                <p className='font-semibold'>Birthdate :- <span className='font-normal text-indigo-900'>{item.patient.birthDate}</span></p>
                                <p className='font-semibold'>Blood Gr :- <span className='font-normal text-indigo-900'>{item.patient.bloodGroup}</span></p>
                                <p className='font-semibold'>Address :- <span className='font-normal text-indigo-900'>{item.address}</span></p>
                                <p className='font-semibold'>Mail Id :- <span className='font-normal text-indigo-900'>{item.email}</span></p>
                                <p className='font-semibold'>Comment :- <span className='font-normal text-indigo-900'>{item.comment}</span></p>
                                {/* <p className='font-semibold'>Date :- <span className='font-normal text-indigo-900'>{item.date}</span></p> */}
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
    </AllComponent>
  )
}

export default ComingAppointment
