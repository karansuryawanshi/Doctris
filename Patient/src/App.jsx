import "./App.css";
import PatientMain from "./Patient/PatientMain";
import { useLocation } from "react-router-dom";
import DoctorMain from "./Doctor/DoctorMain";
import Start from "./Patient/Start";
import Layout from "./Patient/component/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import gif from "./Doctor/assets/Doctris.gif";

function App() {
  const isPatientRoute = location.pathname.startsWith("/patient");
  const isDoctorRoute = location.pathname.startsWith("/doctor");
  const [landingVideo, setLandingVideo] = useState(false);
  const HomePage = location.pathname.startsWith("/");

  setTimeout(() => {
    setLandingVideo(true);
    console.log("Loaded");
  }, 0);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {/* {!landingVideo && (
          <div className="flex items-center justify-center mt-24">
            <img src={gif} alt="" />
          </div>
        )} */}
        {isPatientRoute && landingVideo && <PatientMain></PatientMain>}
        {isDoctorRoute && landingVideo && <DoctorMain></DoctorMain>}

        {HomePage && landingVideo && (
          <Routes>
            <Route path="/" element={<Start />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
