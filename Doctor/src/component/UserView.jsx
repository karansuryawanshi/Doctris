import React,{useEffect, useState} from 'react'
import { makeAuthenticatedGETRequest } from '../utils/server';

const UserView = ({closeModel,patientId}) => {
    // console.log("PID", patientId)
    const [name, setName]= useState([])
    const [age, setAge] = useState([])
    const [birthdate, setBirthdate] = useState([])
    const [gender, setGender] = useState([])
    const [department, setDepartment]= useState([])
    const [bloodGroup, setBloodGroup]= useState([])
    const [image, setImage]= useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest( `/appointment/get/patient/byid/${patientId}`);
            setName(response.data[0].patientName)
            setAge(response.data[0].patient.age)
            setBirthdate(response.data[0].patient.birthDate)
            setGender(response.data[0].patient.gender)
            setBloodGroup(response.data[0].patient.bloodGroup)
            setDepartment(response.data[0].department)
            setImage(response.data[0].patient.patientPhoto)
            console.log(response.data[0].patient)
        };
        fetchData();
      }, []);
  return (
    <div>
      <div className='absolute bg-black w-screen h-screen bg-opacity-90 flex justify-center items-center' onClick={closeModel}>
      <div className='bg-gray-50 w-1/3 rounded-md p-4' onClick={(e)=>{e.stopPropagation()}}>
        <div className='text-red text-lg font-semibold  border-b pb-4'>Appointment Detail</div>
        <div className='mt-6'>
            <div className='flex items-center space-x-6 font-semibold'>
                <img className='w-16 h-16 rounded-full' src={image} alt="" />
                <p className='text-xl'>{name}</p>
            </div>   
            <div className='grid grid-cols-2 gap-2 pt-6'>
                <div className='flex space-x-4'>
                    <p className='font-semibold'>Age:</p>
                    <p className='text-gray-500'>{age} years old</p>
                </div>
                <div className='flex space-x-6'>
                    <p className='font-semibold'>Birthdate:</p>
                    <p className='text-gray-500'>{birthdate}</p>
                </div>
                <div className='flex space-x-6'>
                    <p className='font-semibold'>Gender:</p>
                    <p className='text-gray-500'>{gender}</p>
                </div>
                <div className='flex space-x-6'>
                    <p className='font-semibold'>Time:</p>
                    <p className='text-gray-500'>11 AM</p>
                </div>
                <div className='flex space-x-6'>
                    <p className='font-semibold'>Department:</p>
                    <p className='text-gray-500'>{department}</p>
                </div>
                <div className='flex space-x-6'>
                    <p className='font-semibold'>Blood Group:</p>
                    <p className='text-gray-500'>{bloodGroup}</p>
                </div>
            </div> 
        </div>
        </div>
        </div>
    </div>
  )
}

export default UserView
