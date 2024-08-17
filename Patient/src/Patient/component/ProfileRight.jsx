import React from 'react'
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import UpdataDataInput from "../component/UpdataDataInput"
import { makeAuthenticatedPUTRequest, makeAuthenticatedGETRequest } from '../utils/server';
import { useParams } from 'react-router-dom';
import AppointMent from '../component/AppointMent';

const ProfileRight = () => {

  const [isProfileVisible, setIsProfileVisible] = useState(true);
  const [isProfileSetingVisible, setIsProfileSetingVisible] = useState(false);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [birthDate, setBirthdate] = useState();
  const [patientPhoto, setPatientPhoto] = useState();

  const isProfileSetting = () => {
    setIsProfileVisible(false);
    setIsProfileSetingVisible(true)
  };

  const isProfile = () => {
    setIsProfileVisible(true);
    setIsProfileSetingVisible(false)
  }

  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await makeAuthenticatedGETRequest(`/auth/get/patient/me`);
      console.log("Main Response ", response.data[0])
      const data = response.data[0];
      setFirstname(data.firstname);
      setLastName(data.lastname);
      setEmail(data.email);
      setPhoneNumber(data.phoneNumber);
      setAge(data.age);
      setBloodGroup(data.bloodGroup);
      setHeight(data.height);
      setWeight(data.weight);
      setGender(data.gender);
      setBirthdate(data.birthDate);
    };

    fetchData();
  }, [_id]);


  const updateData = async () => {
    const body = {
      firstname, lastname, email, phoneNumber, age,
      bloodGroup, height, weight, gender, birthDate, patientPhoto
    };
    const response = await makeAuthenticatedPUTRequest(`/auth/updateprofile/` + _id, body);
    alert("Updated Successfully");
    window.location.reload("/");
  };
  return (
    <div className='w-8/12 pt-10 rounded-lg' style={{ marginLeft: "25em" }}>
      <div className='flex rounded-xl border-2 duration-300'>
        <div className={`w-1/2 p-3 rounded-l-xl  flex items-center justify-center cursor-pointer duration-300 ${isProfileVisible ? "bg-blue-600 text-white" : " "}`} onClick={isProfile}>
          <p className='text-lg '>Profile</p>
        </div>
        <div className={`w-1/2 rounded-r-xl p-3 flex items-center justify-center cursor-pointer duration-300 ${isProfileSetingVisible ? "bg-blue-600 text-white" : ""}`} onClick={isProfileSetting}>
          <p className='text-lg '>Profile Settings</p>
        </div>
      </div>
      {isProfileVisible && <div className='p-6'>
        <div>
          <p className='text-lg font-semibold text-gray-800'>Introduction:</p>
        </div>
        <div className='py-6 '>
          <p className='font-normal text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque officiis fuga incidunt eaque provident aliquid ut officia tempore! Officiis molestias alias earum voluptates ipsa nobis accusantium. Maiores, sed et.</p>
        </div>
        <div>
          <div>
            <p className='text-xl font-semibold text-gray-800'>Appointment List</p>
          </div>
        </div>
        <AppointMent></AppointMent>
      </div>}
      {isProfileSetingVisible &&
        <div className='p-6'>
          <div className='text-lg font-semibold'>
            <p>Personal Information :</p>
          </div>
          <div className='flex'>
            <div className='bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center m-4'>
              <Icon className='text-8xl text-blue-600 p-2' icon={"iconamoon:profile-duotone"}></Icon>
            </div>
            <div className='w-5/12'>
              <p className='font-semibold'>Upload your picture</p>
              <p className='text-gray-500'>For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
            </div>
            <ProfileImage
              setUrl={setPatientPhoto}
              value={patientPhoto}
              setValue={setPatientPhoto} ></ProfileImage>
          </div>
          <div className='grid grid-cols-2'>

            <UpdataDataInput
              label={"First Name"}
              type={"text"}
              value={firstname}
              setValue={setFirstname} />

            <UpdataDataInput
              label={"Last Name"}
              type={"text"}
              value={lastname}
              setValue={setLastName} />

            <UpdataDataInput
              label={"Email"}
              type={"email"}
              value={email}
              setValue={setEmail} />

            <UpdataDataInput
              label={"Phone No."}
              type={"text"}
              value={phoneNumber}
              setValue={setPhoneNumber} />

            <UpdataDataInput
              label={"Age"}
              type={"text"}
              value={age}
              setValue={setAge} />

            <UpdataDataInput
              label={"Height(in cm)"}
              type={"text"}
              value={height}
              setValue={setHeight} />

            <UpdataDataInput
              label={"Weight"}
              type={"text"}
              value={weight}
              setValue={setWeight} />

            <div className='pt-3'>
              <p>Gender</p>
              <select name="gender"
                class="block"
                className='border-2 w-60 rounded-lg h-10'
                value={gender}
                onChange={(e) => { setGender(e.target.value) }}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <UpdataDataInput
              label={"Birth Date"}
              type={"date"}
              value={birthDate}
              setValue={setBirthdate} />

            <UpdataDataInput
              label={"Blood Group"}
              type={"text"}
              value={bloodGroup}
              setValue={setBloodGroup} />
          </div>
          <div className='flex items-center justify-center py-8'>
            <button className='border-2 border-blue-600 hover:bg-blue-700 duration-300 px-4 py-2 rounded-xl bg-blue-600 text-white'
              onClick={updateData}
            >Save Changes</button>
          </div>
        </div>
      }
    </div>
  )
}

export default ProfileRight
