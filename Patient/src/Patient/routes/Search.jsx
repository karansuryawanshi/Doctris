import React, { useEffect, useState } from 'react'
// import LoggedInContainer from '../container/LoggedInContainer'
import { Icon } from '@iconify/react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import SingleDoctorComponent from "../component/SingleDoctorComponent"
import LoggedInHome from './LoggedInHome'

const SearchPage = () => {
    const [isInputFocus, setIsInputFocus] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [songData, setSongData] = useState([])
    const [fetchData, setFetchData] = useState([]);

    const seachtext = async () => {
        const response = await makeAuthenticatedGETRequest(
            "/auth/get/doctorcity/" + searchText
        );
        setSongData(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        const fetchDoctor = async () => {
            const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor")
            const data = response.data;
            const suggestData = data.slice(-4);
            setFetchData(suggestData)
            console.log("******* doctor Data ***********", response.data)
        }
        fetchDoctor()
    }, [])

    return (
        <LoggedInHome>
            <div className='w-full py-6 bg-gray-500'>
                <div className={`mx-4 my-4 p-3 text-sm rounded-full bg-white px-5 flex space-x-3 items-center ${isInputFocus ? "border border-white" : ""}`}>
                    <Icon className='text-white text-2xl' icon="mdi:search" width="1.5rem" height="1.5rem" />
                    <input
                        type="text"
                        placeholder="Search for doctors with city name?"
                        className=" w-full focus:outline-none text-lg"
                        onFocus={() => {
                            setIsInputFocus(true)
                        }}
                        onBlur={() => {
                            setIsInputFocus(false)
                        }}
                        value={searchText}

                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                seachtext()
                            }
                        }}
                    />
                </div>
                {
                    songData.length > 0 ?
                        <div className='pt-10 space-y-3'>

                            <div className='text-white mx-6'>Search Result for <span className='font-bold'>{searchText}</span></div>
                            <div className='grid grid-cols-4'>
                                {songData.map((item) => {
                                    return (
                                        <div className='flex'>
                                            <SingleDoctorComponent
                                                info={item}
                                                playSound={() => { }}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div> :
                        <div className='text-white py-10 px-6'>
                            <p>Search for Doctors nearest to you.</p>

                        <div className='grid grid-cols-4 text-black'>
                            {fetchData.map((info)=>{
                                return(
                                <div className='w-80 border-2 rounded-lg m-8 hover:bg-gray-300 duration-300 bg-white'>
                                    <div className='flex items-center justify-center'>
                                        <img className='w-72 h-72 py-6' src={info.doctorPhoto} alt="" />
                                    </div>
                                    <div className='px-4 space-y-2 pb-4'>
                                        <p className='font-semibold '>Doctor name :- <span className='font-normal text-indigo-900'>{info.name}</span></p>
                                        <p className='font-semibold'>Department :- <span className='font-normal text-indigo-900'>{info.specialist}</span></p>
                                        <p className='font-semibold'>Mail Id :- <span className='font-normal text-indigo-900'>{info.email}</span></p>
                                        <p className='font-semibold'>Address :- <span className='font-normal text-indigo-900'>{info.address}</span></p>
                                        <p className='font-semibold'>City :- <span className='font-normal text-indigo-900'>{info.city}</span></p>
                                        <p className='font-semibold'>Pincode :- <span className='font-normal text-indigo-900'>{info.pincode}</span></p>
                                        <button className='bg-blue-600 duration-300 hover:bg-blue-700 w-72 py-2 text-white font-semibold text-lg rounded-lg' onClick={() => { navigate('/patient/appointment') }}>Book Appointment</button>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                        
                        </div>
                }
            </div>
        </LoggedInHome>
    )
}

export default SearchPage
