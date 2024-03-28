import './App.css'
import Home from './routes/Home'
import Signup from './routes/Signup'
import Login from './routes/Login'
import PatientDashboard from "./routes/PatientDashboard"
import PatientProfile from './routes/PatientProfile'

function App() {

  return (
    <div className='font-K2D'>
      {/* <Home> </Home> */}
      <PatientProfile></PatientProfile>
      {/* <PatientDashboard></PatientDashboard> */}
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
    </div>
  )
}

export default App
