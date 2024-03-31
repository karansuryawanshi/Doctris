import React, { useEffect, useState } from 'react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import SingleAppointment from './SingleAppointment'

// const AppointmentData = [
//     {
//         img:"https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg",
//         drName:"Dr. Calvin Carlo",
//         address:"Sydney, Australia",
//         date:"13 mar"
//     },
//     {
//         img:"https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg",
//         drName:"Dr. Calvin Carlo",
//         address:"Sydney, Australia",
//         date:"13 mar"
//     },
// ]

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

  return (
       <div className='p-6 space-y-3'>
    {appointmentData.map((item)=>{
        return(
                <SingleAppointment
                firstname={item.doctorFirstname}
                lastname={item.doctorLastname}
                address = {item.address}
                phno = {item.phoneNo}
                />
        )
    })}
    </div>
  )
}

export default AppointMent
