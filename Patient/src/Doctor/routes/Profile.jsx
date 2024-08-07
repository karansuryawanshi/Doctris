import React, { useState, useEffect } from 'react'
import AllComponent from '../component/AllComponent'
import {Icon} from "@iconify-icon/react" 
import ReactStars from "react-rating-stars-component";
import ProfileOverview from '../component/ProfileOverview';
import ProfileReview from '../component/ProfileReview';
import ProfileLocation from '../component/ProfileLocation';
import ProfileTimetable from '../component/ProfileTimetable';
import DoctorImage from "../assets/Doctor-Image.jpg"
import { makeAuthenticatedGETRequest } from '../utils/server';

const Profile = () => {

    const [isOverview, setIsOverview] = useState(true)
    const [isReview, setIsReview] = useState (false)
    const [isLocation, setIsLocation] = useState (false)
    const [isTimetable, setIsTimetable] = useState (false)
    const [name, setName] = useState ("");
    const [specialist, setSpecialist] = useState ("");
    const [doctorPhoto, setDoctorPhoto] = useState ("");

    const overview = () => {
        setIsReview(false);
        setIsLocation(false)
        setIsTimetable(false)
        setIsOverview(true)
    };

    const review = () => {
        setIsLocation(false)
        setIsTimetable(false)
        setIsOverview(false)
        setIsReview(true);
    };

    const location = () => {
        setIsReview(false);
        setIsTimetable(false)
        setIsOverview(false)
        setIsLocation(true)
    };

    const timetable = () => {
        setIsReview(false);
        setIsLocation(false)
        setIsOverview(false)
        setIsTimetable(true)
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor/me");
            setDoctorPhoto(response.data[0].doctorPhoto)

            setName(response.data[0].name)
            setSpecialist(response.data[0].specialist)
        };
        fetchData();
      }, []);


  return (
    <AllComponent>
        <div className='h-full w-full '>
            <div className='flex items-center justify-center'>
                <div className='border w-9/12 mt-14 flex rounded-xl shadow-lg overflow-hidden'>
                        <img className='w-80 h-96 rounded-xl m-2' src={doctorPhoto} alt="" />
                    <div className='grid w-8/12 items-center justify-center py-28 ml-8'>
                        <p className='font-semibold text-2xl text-gray-800' >Good Morning !</p>
                        <p className='text-4xl font-bold text-blue-500'>Dr. {name}</p>
                        <p className='w-9/12 font-seibold text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam sed at est, eligendi ab similique vero assumenda obcaecati necessitatibus id.</p>
                        <p className='font-semibold'>You have <span className='text-blue-600'> 18 patients</span> remaining today!</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-center pb-16'>
                    <div className='w-9/12 border-2 mt-8 flex-col items-center justify-center rounded-lg'>
                        <div className='flex bg-gray-200 m-6 rounded-xl gap-2'>
                            <div className={`w-11/12 p-3 flex items-center justify-center rounded-l-xl cursor-pointer duration-300 ${isOverview ? "bg-blue-600 text-white" :" "}`} onClick={overview}>
                                <p className='text-lg font-semibold'>Overview</p>
                            </div>
                            <div className={`w-11/12 p-3 flex items-center justify-center cursor-pointer duration-300 ${isReview ? "bg-blue-600 text-white":""}`} onClick={review} >
                                <p className='text-lg font-semibold'>Review</p>
                            </div>
                            <div className={`w-11/12 p-3 flex items-center justify-center cursor-pointer duration-300 ${isLocation ? "bg-blue-600 text-white":""}`} onClick={location}>
                                <p className='text-lg font-semibold'>Location</p>
                            </div>
                            <div className={`w-11/12 p-3 rounded-r-xl flex items-center justify-center cursor-pointer duration-300 ${isTimetable ? "bg-blue-600 text-white":""}`} onClick={timetable}>
                                <p className='text-lg font-semibold'>Time Table</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='w-11/12'>
                                {isOverview && 
                                <ProfileOverview name={name} specialist={specialist}></ProfileOverview>}

                                {isReview &&
                                <ProfileReview></ProfileReview>}
        
                                {isLocation &&
                                <ProfileLocation></ProfileLocation>}
                                
                                {isTimetable &&
                                <ProfileTimetable></ProfileTimetable>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AllComponent>
  )
}

export default Profile
