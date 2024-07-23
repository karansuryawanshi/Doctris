import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import PatientDashboard from "./routes/PatientDashboard";
import PatientProfile from "./routes/PatientProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointment from "./routes/Appointment";
import { useCookies } from "react-cookie";
import Specialist from "./routes/Specialist";
import SingleSpecialist from "./routes/SingleSpecialist";
import { SocketProvider } from "./context/SocketProvider";
import OnlineAppointment from "./routes/OnlineAppointment";
import OfflineAppointment from "./routes/OfflineAppointment";
import Lobby from "./screens/Lobby";
import Room from "./screens/Room";
import Start from "./Start";
import Success from "./routes/Success";
import Cancel from "./routes/Cancel";

function PatientMain() {
  const [cookies, setCookies] = useCookies(["token"]);
  return (
    <div className="font-K2D">
      {/* <BrowserRouter> */}
        {cookies.token ? (
          <SocketProvider>
            <Routes>
              <Route path="/" element={<Start/>} />
              <Route path="/patient" element={<Home />} />
              <Route path="/patient/profile/:_id" element={<PatientProfile />} />
              <Route path="/patient/dashboard" element={<PatientDashboard />} />
              <Route path="/patient/online appointment" element={<OnlineAppointment />} />
              <Route path="/patient/offline appointment" element={<OfflineAppointment />} />
              <Route path="/patient/appointment" element={<Appointment />} />
              <Route path="/patient/specialist" element={<Specialist />} />
              <Route path="/patient/specialist/:specialist" element={<SingleSpecialist />} />
              <Route path="/patient/Chat Lobby" element={<Lobby />} />
              <Route path="/patient/Room/:roomid" element={<Room />} />
              <Route path="/patient/success" element={<Success/>} />
              <Route path="/patient/cancel" element={<Cancel />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </SocketProvider>
        ) : (
          <SocketProvider>
            <Routes>
              <Route path="/patient" element={<Home />} />
              <Route path="*" element={<Login />} />
              <Route path="/patient/login" element={<Login />} />
              <Route path="/patient/signup" element={<Signup />} />
            </Routes>
          </SocketProvider>
        )}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default PatientMain;
