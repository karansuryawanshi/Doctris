import React, { useState } from "react";
import { Icon } from "@iconify-icon/react";
import { makeAuthenticatedDELETERequest } from "../utils/server";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RejectAppointment = ({ closeModel, appointmentId }) => {
  console.log("****appointmentId", appointmentId);
  const AppointmentCancel = async () => {
    const response = await makeAuthenticatedDELETERequest(
      `/appointment/deleteappointment/${appointmentId}`
    );
    // console.log("******response****",response)
    await toast.error("Appointment Rejected!", {
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
    // window.location.reload();
  };

  return (
    <div>
      <div
        className="absolute bg-zinc-600 w-screen h-screen bg-opacity-90 flex justify-center items-center"
        onClick={closeModel}
      >
        <div
          className="bg-gray-50 w-1/3 rounded-md p-4"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div>
            <div className="text-red text-lg font-semibold  border-b pb-4">
              Accept Appointment
            </div>
            <div className="pt-4 flex items-center justify-center">
              <Icon
                className="p-6 rounded-full text-5xl text-red-600 bg-red-100"
                icon={"material-symbols:cancel-outline"}
              ></Icon>
            </div>
            <div className="flex items-center justify-center font-semibold pt-2">
              <p className="text-2xl">Cancel Appointment</p>
            </div>
            <div className="flex items-center justify-center pt-2">
              <p className="w-10/12 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                laboriosam nemo nisi? Hic, numquam ipsum!
              </p>
            </div>
            <div className="flex items-center justify-center py-4">
              <button
                onClick={AppointmentCancel}
                className="bg-red-100 text-red-700 rounded-lg border shadow-2xl border-red-300 px-4 py-2 text-lg hover:text-white hover:bg-red-600 duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectAppointment;
