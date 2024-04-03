import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import 'react-circular-progressbar/dist/styles.css';
import DashboardLeft from "../component/DashboardLeft"
import MainDashboard from '../component/MainDashboard';
import LoggedInHome from './LoggedInHome';

const PatientDashboard = () => {
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

    <div className='navbar'>
      <LoggedInHome>
        <div>
            <div className='w-full h-full flex'>    
                <DashboardLeft></DashboardLeft>
                <MainDashboard></MainDashboard>
            </div>
        </div>
      </LoggedInHome>
    </div>
  )
}

export default PatientDashboard
