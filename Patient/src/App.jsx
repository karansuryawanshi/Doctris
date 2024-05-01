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

function App() {
  
  const [cookies, setCookies] = useCookies(["token"]);
  return (
    <div className='font-K2D'>
      <BrowserRouter>
      {cookies.token_patient ? (
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/profile/:_id' element={<PatientProfile></PatientProfile>}></Route>
          <Route path='/dashboard' element={<PatientDashboard></PatientDashboard>}></Route>
          <Route path='/appointment' element={<Appointment></Appointment>}></Route>
          <Route path='*' element={<Home></Home>}></Route>
        </Routes>

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
