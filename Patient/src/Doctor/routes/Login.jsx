import React, { useState } from 'react';
import TextInput from '../component/TextInput';
import { makeUnAuthenticatedPOSTRequest } from '../utils/server';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["doctortoken"]);

  const navigate = useNavigate();

  const login = async() => {
    const data = { email, password };
    const response = await makeUnAuthenticatedPOSTRequest("/doctorauth/login", data);
    console.log("*********** Login response ************", response);
    const token = response.token;
    const date = new Date();
    date.setDate(date.getDate() + 30);
    setCookie("doctortoken", token, { path: "/", expires: date });
    // navigate("/doctor"); // Uncomment this line if you want to redirect after login
  };

  return (
    <div className='font-sans mt-16 block '>
      <div className='login-app-name flex items-center justify-center my-5 text-2xl font-semibold'>
        {/* Add your logo here */}
        <img src="data:image/png;base64,..." alt="" />
      </div>
      <div className='signup-background w-full flex items-center justify-center '>
        <div className='py-2 w-3/12 h-5/6 text-black rounded-xl border-2 border-gray-600'>
          <div className='mt-3 text-3xl font-bold flex flex-col items-center'>
              Sign In
          </div>
          <TextInput
            InputType="Email"
            type="email"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <TextInput
            InputType="Password"
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <div className='ml-10 my-4'>
            <input type="checkbox" className=''/>
            <label htmlFor="" className=''> Remember me </label>
          </div>
          <div className='mx-8'>
            <button 
              className='p-3 font-semibold text-white rounded-lg bg-blue-600 w-full border border-blue-600'
              onClick={login}
            >Sign in</button>
          </div>
          <div className='mt-2 ml-10 text-sm mb-3'>
            Don't have an account? <span className='font-semibold cursor-pointer' onClick={() => navigate("/doctor/signup")}>Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
