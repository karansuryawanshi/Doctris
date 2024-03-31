import React, { useEffect, useState } from 'react'
import Poster from '../component/poster'
import Header from '../component/Header'
import { makeAuthenticatedGETRequest } from '../utils/server'

const Home = () => {

  const [userId, setUserId] = useState([""])

  useEffect(() => {
    const fetchData = async () => {
        const response = await makeAuthenticatedGETRequest("/auth/get/patient/me");
        setUserId(response.data[0]._id)
    };
    fetchData();
  }, []);

  return (
    <div className='w-full h-full'>
      <Header userId = {userId}></Header>
      <Poster></Poster>
    </div>
  )
}

export default Home
