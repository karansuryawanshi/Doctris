import React from 'react'
import Profile from './Profile';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import ProfileImage from './ProfileImage';
import UpdataDataInput from "../component/UpdataDataInput"
import { makeAuthenticatedPUTRequest } from '../utils/server';
import { useParams } from 'react-router-dom';

const ProfileRight = () => {

    const [isProfileVisible, setIsProfileVisible] = useState(true);
    const [isProfileSetingVisible, setIsProfileSetingVisible] = useState(false);

    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [age, setAge] = useState([]);
    const [bloodGroup, setBloodGroup] = useState([]);
    const [height, setHeight] = useState([]);
    const [weight, setWeight] = useState([]);
    const [gender, setGender] = useState([]);
    const [birthDate, setBirthdate] = useState([]);
    const [image, setImage] = useState([]);


    const isProfileSetting = () => {
        setIsProfileVisible(false);
        setIsProfileSetingVisible(true)
    };

    const isProfile =()=>{
        setIsProfileVisible(true);
        setIsProfileSetingVisible(false)
    }

    const {_id} = useParams();
    console.log("**************** Profile Id ************************",_id)

    const updateData = async ()=>{
        const body = {firstname, lastname, email,phoneNumber, age, bloodGroup,height,weight,gender,birthDate}
        const response = await makeAuthenticatedPUTRequest(`/auth/updateprofile/`+_id, body)
        console.log(response)
      }

  return (
    <div className='w-8/12 pt-10 rounded-lg'>
            <div className='flex rounded-xl border-2 duration-300'>
                <div className='w-1/2 bg-blue-600 p-3 rounded-l-xl flex items-center justify-center cursor-pointer'onClick={isProfile}>
                    <p className='text-lg text-white'>Profile</p>
                </div>
                <div className='w-1/2 rounded-r-xl p-3 flex items-center justify-center cursor-pointer'onClick={isProfileSetting}>
                    <p className='text-lg '>Profile Settings</p>
                </div>
            </div>
            {isProfileVisible && <Profile />}
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
                  <ProfileImage setUrl={setImage}></ProfileImage>
                </div>
                <div className='grid grid-cols-2'>

                <UpdataDataInput
                    type={"text"}
                    value={firstname}
                    setValue={setFirstname}/>
                    
                  <div>
                      <p className='p-2'>Last Name</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={lastname}
                      onChange={(e)=>{
                        setLastName(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Email</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Phone no.</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={phoneNumber}
                      onChange={(e)=>{
                        setPhoneNumber(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Age</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={age}
                      onChange={(e)=>{
                        setAge(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Height</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={height}
                      onChange={(e)=>{
                        setHeight(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Weight</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={weight}
                      onChange={(e)=>{
                        setWeight(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Gender</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={gender}
                      onChange={(e)=>{
                        setGender(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>Birth Date</p>
                      <input 
                      type="date" 
                      className='border-2 w-60 rounded-lg px-2 py-1'            
                      value={birthDate}
                      onChange={(e)=>{
                        setBirthdate(e.target.value)
                        }}
                      />
                  </div>
                  <div>
                      <p className='p-2'>bloodGroup</p>
                      <input 
                      type="text" 
                      className='border-2 w-60 rounded-lg px-2 py-1'
                      value={bloodGroup}
                      onChange={(e)=>{
                        setBloodGroup(e.target.value)
                        }}
                      />
                  </div>
                </div>
                <div className='flex items-center justify-center py-8'>
                  <button className='border-2 border-blue-600 hover:bg-blue-700 duration-300 px-4 py-2 rounded-xl bg-blue-600 text-white' onClick={updateData}>Save Changes</button>
              </div>
              </div>
            }
        </div>
  )
}

export default ProfileRight
