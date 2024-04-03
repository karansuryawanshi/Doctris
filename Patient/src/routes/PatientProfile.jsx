import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';  
import ProfileLeft from "../component/ProfileLeft"
import ProfileRight from '../component/ProfileRight';
import LoggedInHome from './LoggedInHome';
import "react-datepicker/dist/react-datepicker.css";

const PatientProfile = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > false) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
      
  return (
  <div className='profile'>
    <LoggedInHome>
        <div className='flex items-center justify-center'>
        <div className='w-9/12 flex space-x-4'>
            <ProfileLeft></ProfileLeft>
            <ProfileRight></ProfileRight>
        </div>
        </div>
      </LoggedInHome>
    </div>
  )
}

export default PatientProfile
