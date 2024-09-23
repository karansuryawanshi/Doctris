import React, { useEffect, useState } from "react";
import LoggedInHome from "./LoggedInHome";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { makeAuthenticatedGETRequest } from "../utils/server";
import { saveAs } from "file-saver";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prescription = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [doctorImage, setDoctorImage] = useState([]);
  const [doctorName, setDoctorName] = useState([]);
  const [prescription, setPrescription] = useState([]);
  const [doctorId, setDoctorId] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await makeAuthenticatedGETRequest(
        `/appointment/get/patient/byid/${id}`
      );
      console.log("fetchData", response);

      setDoctorId(response.data[0].doctor);
      // console.log("Heklofjlwb", response.data[0].doctor);
      setPrescription(response.data[0].prescription);
      // console.log("Helo", response.data[0].prescription);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const doctorDetailbyid = async () => {
      const response = await makeAuthenticatedGETRequest(
        `/doctorauth/get/doctor/${doctorId}`
      );
      console.log("doctorDetailbyid", doctorId);
      console.log("doctorDetailbyid", response);
      setDoctorImage(response.data.doctorPhoto);
      setDoctorName(response.data.name);
    };
    doctorDetailbyid();
  }, [doctorId]);

  const prescriptionalert = async () => {
    await toast.success("Prescription Requested successfully!", {
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
  };

  console.log(prescription);

  const downloadImage = async (prescription) => {
    if (prescription) {
      saveAs(prescription, "Prescription.jpg");
    } else {
      await toast.warn("No prescription available for download", {
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
    }
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    setSubmitted(true);
    await toast.success("Feedback submitted", {
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
  };

  return (
    <LoggedInHome>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-3xl font-semibold">Rate the doctor</p>
        <div className="flex items-center justify-center flex-col">
          <img className="w-32 h-32 rounded-xl" src={doctorImage} alt="" />
          <p className="font-semibold mt-4">{doctorName}</p>
        </div>
        {!submitted && (
          <div className="flex items-center justify-center flex-col">
            <div>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={46}
                activeColor="#ff2323"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Review</p>
              <textarea
                className="border-2 w-72 h-32 p-2"
                name="Review"
                id="Review"
              />
            </div>
            <div>
              <button
                className="border-2 px-10 py-2 rounded-lg border-orange-500 bg-orange-500 text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {submitted && (
          <p className="text-xl font-semibold">Thanks for your feedback !!! </p>
        )}
        <div>
          <p
            className="flex items-center justify-center cursor cursor-pointer border-2 px-4 py-2 rounded-xl bg-blue-500 border-blue-500 text-white"
            onClick={prescriptionalert}
          >
            Request Prescription
          </p>
          <button onClick={() => downloadImage(prescription)}>
            {prescription ? (
              <button className="border-2 flex items-center mb-2 justify-center px-10 mt-4 py-2 rounded-lg border-orange-500 bg-orange-500 text-white">
                Download{" "}
                <Icon className="text-xl" icon={"ic:outline-download"}></Icon>
              </button>
            ) : (
              <p>No prescription available !</p>
            )}
          </button>
        </div>
      </div>
    </LoggedInHome>
  );
};

export default Prescription;
