import React from 'react'
import { Icon } from '@iconify-icon/react'
import { makeAuthenticatedDELETERequest } from '../utils/server'
import { makeAuthenticatedPOSTRequest } from '../utils/server'
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AcceptAppointment = ({closeModel,patientId,appointmentId,doctorId}) => {
    console.log("patientId",patientId)
    console.log("appointmentId",appointmentId)
    console.log("doctorId",doctorId)


    const AppointmentAccept = async()=>{
        const data = {patientId, appointmentId, doctorId}
        const response = await makeAuthenticatedPOSTRequest("/appointment/accept/appointment",data)
        // console.log("*********** Login response ************",response);
        await toast.success('Appointment accepted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });

      setTimeout(() => {
        window.location.reload();
      }, 3000);

      }
  return (
    <div>
      <div className='absolute bg-zinc-600 w-screen h-screen bg-opacity-90 flex justify-center items-center' onClick={closeModel}>
        <div className='bg-gray-50 w-1/3 rounded-md p-4' onClick={(e)=>{e.stopPropagation()}}>
            <div>
                <div className='text-red text-lg font-semibold  border-b pb-4'>Accept Appointment</div>
                <div className='pt-4 flex items-center justify-center'>
                    <Icon className='p-6 rounded-full text-5xl text-green-600 bg-green-100' icon={"lets-icons:done-ring-round-duotone"}></Icon>
                </div>
                <div className='flex items-center justify-center font-semibold pt-2'>
                    <p className='text-2xl'>Accept Appointment</p>
                </div>
                <div className='flex items-center justify-center pt-2'>
                    <p className='w-10/12 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam nemo nisi? Hic, numquam ipsum!</p>
                </div>
                <div className='flex items-center justify-center py-4'>
                    <button 
                        onClick={AppointmentAccept} 
                        className='bg-green-100 text-green-700 rounded-lg border shadow-2xl border-green-300 px-4 py-2 text-lg hover:text-white hover:bg-green-600 duration-300'>
                        Accept
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AcceptAppointment
