import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { makeAuthenticatedGETRequest } from '../utils/server'

const Home = () => {
  
  const [userId, setUserId] = useState([""])
  const [profileImage, setProfileImage] = useState([""])

  useEffect(() => {
    const fetchData = async () => {
        const response = await makeAuthenticatedGETRequest("/auth/get/patient/me");
        setUserId(response.data[0]._id)
        setProfileImage(response.data[0].patientPhoto)
    };
    fetchData();
  }, []);


  return (
    <div className='w-full h-full'>
      <Header userId = {userId} profileImage={profileImage}></Header>
      <div className=''>
        <div className='brightness-50'>
          <div className='opacity-70 hue-rotate-15'>
            <img src="https://doctris-react-landing.vercel.app/static/media/01.a38624f9facdafface04.jpg" alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home
