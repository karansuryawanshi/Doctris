import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/doctrisAILogo.png'; 
import { useNavigate } from 'react-router-dom';

const DoctrisAiLogo = () => {

    const navigate = useNavigate();

    const isVisible = useSelector((state) => state.header.isVisible);

    if (!isVisible) return null;

  return (
    <div className='sticky top-3/4 ml-96'>
        <header className='absolute left-3/4 ml-28 mt-14 rounded-full cursor-pointer overflow-hidden' onClick={()=>{navigate("/patient/DoctrisAi")}} >
          <img src={logo} alt="Doctris Logo" style={{ height: '70px' }} />
        </header>
    </div>
  );
};

export default DoctrisAiLogo;
