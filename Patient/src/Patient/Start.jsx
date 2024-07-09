import React, {useState} from 'react'
import Logo from './assets/logo-icon.png'
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();
  
    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };
  
    const handleNextClick = () => {
      if (selectedRole === 'Patient') {
        navigate('/patient');
      } else if (selectedRole === 'Doctor') {
        navigate('/doctor');
      } else {
        alert('Please select an option');
      }
    };

  return (
    <div className='bg-slate-900 w-screen h-screen'>
        <div className='p-6 ml-48 flex items-center gap-4'>
            <img src={Logo} className='w-10' alt="" />
            <p className='text-3xl font-bold space-x-1 text-gray-300'>
                <span>D</span>
                <span>O</span>
                <span>C</span>
                <span>T</span>
                <span>R</span>
                <span>I</span>
                <span>S</span>
            </p>
        </div>
        <div className='p-4 w-full flex flex-col items-center justify-center mt-28'>
            <p className='text-5xl grid text-gray-300 font-bold'>
            <span> Book Your Next Appointment </span>
            <span className='ml-36 mt-6 text-emerald-600'> with Doctris </span> 
            </p>
            <p className='text-xl text-gray-400 mt-6'>Book Appointment instread of waiting in long Queue !!</p>
            <div className='text-gray-400 mt-4 space-y-4 space-x-4'>
                <p className='text-xl ml-4'>Register as</p>

                <input type="radio" name="favoriteColor" value="Patient" onChange={handleRoleChange}/>
                <label for="colorRed" className='text-xl'>Patient</label>

                <br/>
                
                <input type="radio" name="favoriteColor" value="Doctor" onChange={handleRoleChange}/>
                <label for="colorGreen" className='text-xl'>Doctor</label><br/>
            </div>
            <div>
                <button className='px-6 py-2 bg-slate-100 my-6 font-semibold rounded-xl' onClick={handleNextClick}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Start
