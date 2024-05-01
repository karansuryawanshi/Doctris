import React from 'react'
import Login from "./routes/Login"
import Signup from './routes/Signup'
import LoggedinHome from "./routes/LoggedinHome"
import Dashboard from './routes/Dashboard'
import AllComponent from "./component/AllComponent"
import Profile from './routes/Profile'
import Appointment from './routes/Appointment'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LoggedOutHome from './routes/LoggedOutHome'

const App = () => {
  const [cookies, setCookies] = useCookies(["token"]);

  return (
    <div className='font-K2D'>
      <BrowserRouter>
      {cookies.token ? (
        <Routes>
          <Route path='/' element={<LoggedinHome></LoggedinHome>}></Route>
          <Route path='/profile/:_id' element={<Profile></Profile>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/appointment' element={<Appointment></Appointment>}></Route>
          <Route path='*' element={<LoggedinHome></LoggedinHome>}></Route>
        </Routes>

      ):(
        <Routes>
          <Route path='/' element={<LoggedOutHome></LoggedOutHome>}></Route>
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
