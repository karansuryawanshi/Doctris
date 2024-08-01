import React, { useContext } from 'react'
// import songContext from '../../context/songContext'
import { useNavigate } from 'react-router-dom'

const SingleSongSearch = ({ info }) => {

  const navigate = useNavigate();

  console.log(info)

  return (
    // <div className='flex'>
      <div className='w-80 border-2 rounded-lg m-8 hover:bg-gray-300 duration-300 bg-white'>
        <div className='flex items-center justify-center'>
          <img className='w-72 h-72 py-6' src={info.doctorPhoto} alt="" />
        </div>  
        <div className='px-4 space-y-2 pb-4'>
          <p className='font-semibold'>Doctor name :- <span className='font-normal text-indigo-900'>{info.name}</span></p>
          <p className='font-semibold'>Department :- <span className='font-normal text-indigo-900'>{info.specialist}</span></p>
          <p className='font-semibold'>Mail Id :- <span className='font-normal text-indigo-900'>{info.email}</span></p>
          <p className='font-semibold'>Address :- <span className='font-normal text-indigo-900'>{info.address}</span></p>
          <p className='font-semibold'>City :- <span className='font-normal text-indigo-900'>{info.city}</span></p>
          <p className='font-semibold'>Pincode :- <span className='font-normal text-indigo-900'>{info.pincode}</span></p>
          <button className='bg-blue-600 duration-300 hover:bg-blue-700 w-72 py-2 text-white font-semibold text-lg rounded-lg' onClick={() => { navigate('/patient/appointment') }}>Book Appointment</button>
        </div>
      </div>
    // </div>
  )
}

export default SingleSongSearch
