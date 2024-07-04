import './App.css'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Login from './routes/Login'
import PatientDashboard from "./routes/PatientDashboard"
import PatientProfile from './routes/PatientProfile'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { makeAuthenticatedGETRequest } from './utils/server'
import { useEffect, useState } from 'react'
import Appointment from './routes/Appointment'
import LoggedInHome from './routes/LoggedInHome'
import { useCookies } from 'react-cookie'
import Specialist from './routes/Specialist'
import SingleSpecialist from "./routes/SingleSpecialist"
// import VideoChat from './routes/VideoChat'
// import Lobby from './screens/Lobby'
// import { SocketProvider } from './context.jsx/SocketProvider'

function App() {
  
  const [cookies, setCookies] = useCookies(["token"]);
  return (
    <div className='font-K2D'>
      <BrowserRouter>
      {cookies.token ? (
        // <SocketProvider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/profile/:_id' element={<PatientProfile></PatientProfile>}></Route>
            <Route path='/dashboard' element={<PatientDashboard></PatientDashboard>}></Route>
            <Route path='/appointment' element={<Appointment></Appointment>}></Route>
            <Route path='/specialist' element={<Specialist></Specialist>}></Route>
            <Route path='/specialist/:specialist' element={<SingleSpecialist></SingleSpecialist>}></Route>
            {/* <Route path='/Chat Lobby' element={<Lobby></Lobby>}></Route> */}
            <Route path='*' element={<Home></Home>}></Route>
          </Routes>
        // </SocketProvider>

      ):(
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='*' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
        </Routes>
      )}
      </BrowserRouter>
    </div>
  )
}

export default App
