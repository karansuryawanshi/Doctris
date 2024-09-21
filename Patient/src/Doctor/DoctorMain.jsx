import React from "react";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import LoggedinHome from "./routes/LoggedinHome";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";
import Appointment from "./routes/Appointment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import LoggedOutHome from "./routes/LoggedOutHome";
import ComingAppointment from "./component/ComingAppointment";
import Lobby from "./screens/Lobby";
import { SocketProvider } from "./context/SocketProvider";
import Room from "./screens/Room";
import OnlineAppointment from "./routes/OnlineAppointment";
import Prescription from "./routes/Prescription";

const DoctorMain = () => {
  const [cookies, setCookies] = useCookies(["doctortoken"]);

  return (
    <div className="font-K2D">
      {/* <BrowserRouter> */}
      {cookies.doctortoken ? (
        <SocketProvider>
          <Routes>
            <Route path="/doctor" element={<LoggedinHome />} />
            <Route path="/doctor/profile/:_id" element={<Profile />} />
            <Route path="/doctor/dashboard" element={<Dashboard />} />
            <Route path="/doctor/appointment" element={<Appointment />} />
            <Route
              path="/doctor/offline appointment"
              element={<ComingAppointment />}
            />
            <Route
              path="/doctor/online appointment"
              element={<OnlineAppointment />}
            />
            <Route path="/doctor/chat lobby" element={<Lobby />} />
            <Route path="/doctor/room/:roomid" element={<Room />} />
            <Route path="/doctor/prescription" element={<Prescription />} />
            <Route path="*" element={<LoggedinHome />} />
          </Routes>
        </SocketProvider>
      ) : (
        <Routes>
          <Route path="/doctor" element={<LoggedOutHome />} />
          <Route path="*" element={<Login />} />
          <Route path="/doctor/login" element={<Login />} />
          <Route path="/doctor/signup" element={<Signup />} />
        </Routes>
      )}
    </div>
  );
};

export default DoctorMain;
