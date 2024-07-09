import React from 'react'
import Login from "./routes/Login"
import Signup from './routes/Signup'
import LoggedinHome from "./routes/LoggedinHome"
import Dashboard from './routes/Dashboard'
import Profile from './routes/Profile'
import Appointment from './routes/Appointment'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LoggedOutHome from './routes/LoggedOutHome'
import ComingAppointment from './component/ComingAppointment'
import Lobby from './screens/Lobby'
import { SocketProvider } from './context/SocketProvider'
import Room from './screens/Room'

const DoctorMain = () => {
  const [cookies, setCookies] = useCookies(["doctorToken"]);

  return (
    <div className='font-K2D'>
      {/* <BrowserRouter> */}
      {cookies.doctorToken ? (
        <SocketProvider>
          <Routes>
            <Route path='/doctor' element={<LoggedinHome></LoggedinHome>}></Route>
            <Route path='/doctor/profile/:_id' element={<Profile></Profile>}></Route>
            <Route path='/doctor/dashboard' element={<Dashboard></Dashboard>}></Route>
            <Route path='/doctor/appointment' element={<Appointment></Appointment>}></Route>
            <Route path='/doctor/coming appointment' element={<ComingAppointment></ComingAppointment>}></Route>
            <Route path='/doctor/chat Lobby' element={<Lobby></Lobby>}></Route>
            <Route path='/doctor/Room/:roomid' element={<Room></Room>}></Route>
            <Route path='*' element={<LoggedinHome  ></LoggedinHome>}></Route>
          </Routes>
        </SocketProvider>

      ):(
        <Routes>
          <Route path='/doctor' element={<LoggedOutHome></LoggedOutHome>}></Route>
          <Route path='*' element={<Login></Login>}></Route>
          <Route path='/doctor/login' element={<Login></Login>}></Route>
          <Route path='/doctor/signup' element={<Signup></Signup>}></Route>
        </Routes>
      )}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default DoctorMain
