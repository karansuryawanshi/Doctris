import './App.css'
import PatientMain from './Patient/PatientMain'
import { useLocation } from 'react-router-dom';
import DoctorMain from './Doctor/DoctorMain';
import Start from './Patient/Start';
import Layout from './Patient/component/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  const isPatientRoute = location.pathname.startsWith('/patient');
  const isDoctorRoute = location.pathname.startsWith('/doctor');
  const HomePage = location.pathname.startsWith('/');

  return (
    <>
    <BrowserRouter>
      {isPatientRoute && 
        <PatientMain></PatientMain>
      }
      {isDoctorRoute &&
        <DoctorMain></DoctorMain>
      }
      {HomePage &&
      <Routes> 
        <Route path="/" element={<Start/>} />
      </Routes> 
      }
    </BrowserRouter>
    </>
  )
}

export default App


