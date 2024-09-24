import React, { useState, useEffect } from "react";
import AllComponent from "../component/AllComponent";
import ReactStars from "react-rating-stars-component";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { openUploadWidget } from "../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";
import { useParams } from "react-router-dom";
import { makeAuthenticatedPUTRequest } from "../utils/server";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prescription = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const { id } = useParams();

  const [prescription, setPrescription] = useState("");
  const [fileName, setFileName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { prescription };
    const response = await makeAuthenticatedPUTRequest(
      `/appointment/uploadprescription/${id}`,
      body
    );
    console.log("prescription response ", response);
    if (response) {
      toast.success("Prescription Submitted", {
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

  const uploadImageWidget = () => {
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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <AllComponent>
      <div className="flex flex-col items-center justify-center mt-10">
        <p
          className="flex"
          value={prescription}
          onChange={(e) => setPrescription(e.target.value)}
        >
          {fileName ? (
            <div className="flex flex-col">
              <p
                className="cursor cursor-pointer border-2 px-4 py-2 rounded-xl bg-blue-500 border-blue-500 text-white"
                onClick={uploadImageWidget}
              >
                {fileName.slice(0, 22)}...
              </p>
              <div>
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}
                  src={prescription}
                  alt="Prescription"
                  className="w-40 cursor-zoom-in mt-4 rounded-lg"
                />
                {isOpen && (
                  <div
                    className="fixed inset-0 cursor-zoom-out z-50 flex items-center justify-center bg-black bg-opacity-90 rounded-xl"
                    onClick={closeModal}
                  >
                    <div className="relative">
                      <img
                        src={prescription}
                        alt="Prescription"
                        className="max-w-full max-h-screen rounded-xl"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p
                className="bg-blue-500 px-4 py-2 rounded-lg text-white cursor-pointer"
                onClick={uploadImageWidget}
              >
                Upload Prescription
                <Icon
                  className="text-lg"
                  icon={"majesticons:attachment-line"}
                ></Icon>
              </p>
            </div>
          )}
        </p>
        <button
          className="border-2 px-6 py-2 mt-4 rounded-xl border-orange-500 text-white font-semibold bg-orange-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </AllComponent>
  );
};

export default Prescription;
