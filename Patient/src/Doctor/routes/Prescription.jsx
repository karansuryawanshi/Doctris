import React, { useState, useEffect } from "react";
import AllComponent from "../component/AllComponent";
import ReactStars from "react-rating-stars-component";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { openUploadWidget } from "../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";
import { useParams } from "react-router-dom";
import { makeAuthenticatedPUTRequest } from "../utils/server";

const Prescription = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [prescription, setPrescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // try {
    const body = { prescription };
    const response = await makeAuthenticatedPUTRequest(
      `/auth/uploadprescription/66ee9f5e2d07c2b5a8973f35`,
      body
    );
    console.log("prescription response ", response);
  };

  const uploadImageWidget = () => {
    // console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dcjuzfafi",
        uploadPreset: cloudinary_upload_preset,
        // tags: ["myname"],
        // maxImageWidth: 600,
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          console.log(result);
          console.log(result.info.secure_url);
          setPrescription(result.info.secure_url);
          setFileName(result.info.original_filename);
        } else {
          if (error) {
            console.log(error);
          }
        }
      }
    );
    myUploadWidget.open();
  };
  return (
    <AllComponent>
      <div className="flex items-center justify-center mt-10">
        {/* <ProfileImage
          setUrl={setPatientPhoto}
          value={patientPhoto}
          setValue={setPatientPhoto}
        ></ProfileImage> */}
        <p
          className="cursor cursor-pointer border-2 px-4 py-2 rounded-xl bg-blue-500 border-blue-500 text-white"
          onClick={uploadImageWidget}
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        >
          {fileName}
          Upload Prescription{" "}
          <Icon className="text-lg" icon={"majesticons:attachment-line"}></Icon>
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </AllComponent>
  );
};

export default Prescription;
