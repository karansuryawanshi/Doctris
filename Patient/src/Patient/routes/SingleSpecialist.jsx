import React, {useEffect, useState} from 'react'
import LoggedInHome from './LoggedInHome'
import { makeAuthenticatedGETRequest } from '../utils/server';
import { useParams } from 'react-router-dom';
import DoctorCategory from "../assets/Doctor_category.jpg"
import {useNavigate} from "react-router-dom"

const SingleSpecialist = () => {

    const navigate = useNavigate();

        const [data, setData] = useState([""]);

        const {specialist} = useParams();
        useEffect(() => {
            const fetchData = async () => {
                const response = await makeAuthenticatedGETRequest(`/doctorauth/get/doctor/specialist/${specialist}`);
                console.log("*** category ***",response)
                setData(response.data)
        };
        fetchData();
    }, []);

  return (
    <LoggedInHome>
        <div className='px-16 py-6 grid grid-cols-4 gap-6'>
            {data.map((item)=>{
                return(
                <div className='border-2 w-80 flex flex-col items-center justify-center py-4 space-y-4 rounded-xl'>
                    <img className='rounded-lg' src={DoctorCategory} alt="" />
                    <div className='space-y-2'>
                        <p> <span className='font-semibold'>Name :</span> <span className='text-blue-700'> {item.name}</span></p>
                        <p> <span className='font-semibold'>Email :</span> <span className='text-blue-700'> {item.email}</span></p>
                        <p> <span className='font-semibold' >Specialist :</span> <span className='text-blue-700'> {item.specialist}</span></p>
                        <button className='border p-2 rounded-lg bg-blue-200 font-semibold' onClick={()=>{navigate("/patient/appointment")}}>Book Appointment</button>
                    </div>
                </div>
                )
            })}
        </div>
    </LoggedInHome>
  )
}

export default SingleSpecialist
