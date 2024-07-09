import React,{useState, useEffect} from 'react'
import AllComponent from '../component/AllComponent'
import { Icon } from '@iconify-icon/react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import UserView from '../component/UserView'
import AcceptAppointment from '../component/AcceptAppointment'
import RejectAppointment from '../component/RejectAppointment'
import Doctor_image from "../assets/Doctor-Image.jpg"
import Profile_bg from "../assets/profile-bg.jpg"

const Appointment = () => {

    const [tableDetail, setTableDetail] = useState([""])
      const [userView,setUserView] = useState(false)
      const [acceptAppointment, setAcceptAppointment]= useState(false)
      const [rejectAppointment, setRejectAppointment]= useState(false)
      const [userViewData, setUserViewData] = useState([])
      const [patientId,setPatientId] = useState(null);
      const [doctorId,setDoctorId] = useState(null);
      const [appointmentId,setAppointmentId] = useState(null);
      const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/appointment/get/appointment/660c091d88755fef0e364e2d");
            // console.log("******response****",response.data)
            setData(response.data[0])
            setTableDetail(response.data)
            // if(!response){
            //     console.log("not response")
            // }
            // else(
            //     console.log("response gained")
            // )
        };
        fetchData();
      }, []);
    //   console.log("tble",tableDetail)

  return (
    <AllComponent>
    <div>
        {userView && 
            <div>
                <UserView patientId={patientId} closeModel={()=>setUserView(false)}/>  
            </div>
        }

        {acceptAppointment &&
            <div>
                <AcceptAppointment doctorId={doctorId} appointmentId={appointmentId} patientId={patientId} closeModel={()=>setAcceptAppointment(false)}/>
            </div>
        }

        {rejectAppointment &&
            <div>
                <RejectAppointment doctorId={doctorId} appointmentId={appointmentId} patientId={patientId} closeModel={()=>setRejectAppointment(false)}/>
            </div>
        }

        <div className='w-full h-full flex'>
            <div className='w-3/12 m-3 border-2 rounded-xl'>
                <div className='border-b pb-6'>
                    <div className='w-full h-32 flex items-center justify-center rounded-t-lg pt-28' style={{ backgroundImage: `url(${Profile_bg})`}}>
                        <img className='w-20 h-20 rounded-full shadow-xl' src={Doctor_image} alt="" />
                    </div>
                    <div className='flex items-center justify-center pt-12'>
                        <p className='font-semibold text-xl text-gray-800'> Dr. yuzi chahal </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-gray-600'>Orthopedic</p>
                    </div>
                </div>
                <div className='p-2 space-y-3'>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl' Icon={"ic:baseline-dashboard"}></Icon>
                        <p className='text-gray-700 font-semibold'>Dashboard</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl text-blue-700' Icon={"carbon:task-complete"}></Icon>
                        <p className='font-semibold text-blue-700'>Appointment</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl' Icon={"ic:outline-schedule"}></Icon>
                        <p className='font-semibold text-gray-700'>Schedule Timing</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl' Icon={"fluent:payment-32-regular"}></Icon>
                        <p className='font-semibold text-gray-700'>Invoices</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl' Icon={"typcn:messages"}></Icon>
                        <p className='font-semibold text-gray-700'>Messages</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className=' text-xl' Icon={"iconamoon:profile-light"}></Icon>
                        <p className='font-semibold text-gray-700'>Profile</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"mingcute:user-setting-line"}></Icon>
                        <p className='font-semibold text-gray-700'>Profile Settings</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"mdi:patient-outline"}></Icon>
                        <p className='font-semibold text-gray-700'>Patients</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"material-symbols:rate-review-outline"}></Icon>
                        <p className='font-semibold text-gray-700'>Patients Review</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"ci:chat"}></Icon>
                        <p className='font-semibold text-gray-700'>Chat</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"ic:outline-login"}></Icon>
                        <p className='font-semibold text-gray-700'>Login</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <Icon className='text-xl' Icon={"mdi:forgot-password"}></Icon>
                        <p className='font-semibold text-gray-700'>Forgot Password</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-xl font-semibold p-4'>
                    <p>Appointment</p>
                </div>
                <div className='flex items-center justify-center'>
                <table className="table-auto ml-10 rounded-xl">
                    <thead className=''>
                        <tr className='border-2'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Age</th>
                            <th className='p-3'>Gender</th>
                            <th className='p-3'>Department</th>
                            <th className='p-3'>Birth Date</th>
                            <th className='p-3'>Time</th>
                            <th className='p-3'>Doctor</th>
                            <th className='p-3'>Fees</th>
                            <th className='p-3'></th>
                        </tr>
                    </thead>
                    {data ?(
                    <tbody>
                        {tableDetail.map((item)=>{
                            return(
                                <tr className='border-2'>
                                    <td className='pl-3'>{item.patientName}</td>
                                    <td className='pl-3'>{item.patient ? item.patient.age : 'N/A'}</td>
                                    <td className='pl-3'>{item.patient ? item.patient.gender : 'N/A'}</td>
                                    <td className='pl-3'>{item.department}</td>
                                    <td className='pl-3'>{item.patient ? item.patient.birthDate : 'N/A'}</td>
                                    <td className='pl-3'>12:00</td>
                                    <td className='pl-3'>Dr. {item.doctorName}</td>
                                    <td className='pl-3'>$20/patient</td>
                                    <td className='flex items-center justify-center space-x-6 mx-6 pt-4'>
                                        <p onClick={()=>{setUserView(true);setPatientId(item?._id)}}><Icon className='text-2xl cursor-pointer shadow-xl hover:bg-blue-600 hover:text-white duration-300 text-blue-600 bg-blue-100 p-2 rounded-full' icon={"ph:eye"}></Icon></p>
                                        <p onClick={()=>{setAcceptAppointment(true);setPatientId(item?.patient?._id);setDoctorId(item?.doctor);setAppointmentId(item?._id)}}><Icon className='text-2xl cursor-pointer shadow-xl hover:bg-green-600 hover:text-white duration-300 text-green-600 bg-green-100 p-2 rounded-full' icon={"lets-icons:done-ring-round-duotone"}></Icon></p>
                                        <p onClick={()=>{setRejectAppointment(true);;setAppointmentId(item?._id)}}><Icon className='text-2xl cursor-pointer shadow-xl hover:bg-red-600 hover:text-white duration-300 text-red-600 bg-red-100 p-2 rounded-full' icon={"material-symbols:cancel-outline"}></Icon></p>
                                    </td>
                                </tr>
                                )
                            })}
                    </tbody>
                    ):(
                        <div>
                           No appointment booked yet     
                        </div>
                        )
                    }
                    </table>
                </div>
            </div>
       </div>
       </div>
    </AllComponent>
  )
}

export default Appointment
