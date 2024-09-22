import React, { useState } from "react";
import TextInput from "../component/TextInput";
import { makeUnAuthenticatedPOSTRequest } from "../utils/server";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { openUploadWidget } from "../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";
import { makeAuthenticatedPOSTRequest } from "../utils/server";
import { ToastContainer, Zoom, toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [doctorPhoto, setDoctorPhoto] = useState("");
  const [fileName, setFileName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [cookie, setCookie] = useCookies(["doctortoken"]);

  const navigate = useNavigate();

  const signup = async () => {
    const data = {
      name,
      specialist,
      email,
      password,
      doctorPhoto,
      address,
      city,
      pincode,
    };
    const response = await makeUnAuthenticatedPOSTRequest(
      "/doctorauth/register",
      data
    );
    console.log("*****Signup******", response);
    if (response) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("doctortoken", token, { path: "/", expires: date });
    } else {
      await toast.warn("Appointment accepted!", {
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
          setDoctorPhoto(result.info.secure_url);
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
    <div className="font-sans mt-16 block">
      <div className="login-app-name flex items-center justify-center my-5 text-2xl font-semibold">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAWCAYAAADzeqMPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0ODI2M0RBMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0ODI2M0RCMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4MjYzRDgwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4MjYzRDkwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GDWK8AAAJT0lEQVR42uxaC5BWZRl+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"
          alt=""
        />
      </div>
      <div className="signup-background w-full flex items-center justify-center ">
        <div className="py-2 w-3/12 h-5/6 text-black rounded-xl border-2 border-gray-600">
          <div className="mt-3 text-3xl font-bold flex flex-col items-center">
            Sign up
          </div>
          <TextInput
            InputType="Full name"
            type="text"
            placeholder="Full name"
            value={name}
            setValue={setName}
          ></TextInput>

          <select
            className="mx-8 border w-10/12 mt-8 border-gray-400  p-2 rounded-lg "
            placeholder="Patient Name:"
            type="text"
            value={specialist}
            onChange={(e) => {
              setSpecialist(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="Eye Care">Eye Care</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Psychotherapist">Psychotherapist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Dentist">Dentist</option>
            <option value="Gastrologist">Gastrologist</option>
            <option value="Urologist">Urologist</option>
            <option value="Neurologist">Neurologist</option>
          </select>

          <TextInput
            InputType="Email"
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          ></TextInput>
          <TextInput
            InputType="Password"
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          ></TextInput>
          <TextInput
            InputType="Address"
            type="text"
            placeholder="Address"
            value={address}
            setValue={setAddress}
          ></TextInput>
          <div className="flex">
            <TextInput
              InputType="City"
              type="text"
              placeholder="City"
              value={city}
              setValue={setCity}
            ></TextInput>

            <TextInput
              InputType="Pincode"
              type="text"
              placeholder="Pincode"
              value={pincode}
              setValue={setPincode}
            ></TextInput>
          </div>
          <div className="py-4">
            <div className="flex items-center justify-center">
              <button
                className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 duration-300"
                onClick={uploadImageWidget}
              >
                {doctorPhoto ? (
                  <p>{fileName.substring(0, 6)}...</p>
                ) : (
                  <p>Upload</p>
                )}
              </button>
            </div>
          </div>
          <div className="ml-10 mb-4">
            <input type="checkbox" className="" />
            <label htmlFor="" className="">
              {" "}
              I accept the{" "}
              <span className="text-blue-600">term and condition</span>
            </label>
          </div>
          <div className="mx-8">
            <button
              className="p-3 font-semibold text-white rounded-lg bg-blue-600 w-full border border-blue-600"
              onClick={(e) => {
                signup();
              }}
            >
              Signup
            </button>
          </div>
          <div className="mt-2 ml-10 text-sm mb-3">
            Already have an account ?{" "}
            <span
              className="font-semibold cursor-pointer"
              onClick={() => {
                navigate("/doctor/login");
              }}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
