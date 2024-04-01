import React, { useEffect, useState } from 'react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import SingleAppointment from './SingleAppointment'
import { useNavigate } from 'react-router-dom'

const AppointMent = () => {

    const [appointmentData, setAppointmentData] = useState([])

    useEffect(() => {
        const FetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/appointment/my/appointment");
            setAppointmentData(response.appointment)
            console.log(response.appointment)
        };
        FetchData();
      }, []);

      const navigate = useNavigate()

      const navigateToAppointment=()=>{
        navigate("/appointment")
      }


  return (
        <div className='p-6 space-y-3'>
            {appointmentData.length > 0 ? (
                appointmentData.map((item, index) => (
                    <SingleAppointment
                        key={index}
                        name={item.doctorName}
                        address={item.address}
                        phno={item.phoneNo}
                    />
                ))
            ) : (
                <div className='flex-col items-center justify-center ml-48'>
                    <p className='text-2xl font-semibold mt-16'>No appointments booked  !!</p>
                    <button className='ml-20 mt-6 px-4 py-2 rounded-xl border-blue-600 duration-300 hover:bg-blue-700 bg-blue-600 text-white border-2' onClick={navigateToAppointment}>Book appointment</button>
                </div>
            )}
        </div>
  )
}

export default AppointMent
