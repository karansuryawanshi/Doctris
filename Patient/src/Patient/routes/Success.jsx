import React,{useState, useEffect} from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import accept from "../assets/accept.gif" 
import { useNavigate } from 'react-router-dom'; 

const Success = () => {

  const [showMain, setShowMain] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="app">{showMain ? (
      <div className="w-screen h-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center">
        <div className="border-t-2 rounded-full absolute mb-28">
            <Icon className="bg-white rounded-full mb-20 text-8xl text-emerald-500" icon="ep:success-filled" />
        </div>
        <div className="mt-20 pt-16 px-10 space-x-6 border-2 rounded-xl shadow-lg shadow-emerald-300 flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold pb-4" ><span>$</span> <span>200</span></p>
            <p className="text-lg font-semibold pb-2 italic">Payment Done !</p>
            <p className="font-semibold pb-2 flex flex-col items-center justify-center"> <span>Thankyou for completing your secure online payment.</span> <span>Have a Greate Day !</span></p>
            <button className="mb-6 mt-2 bg-emerald-600 text-white px-4 py-2 rounded-xl" onClick={()=>navigate("/patient")}>Go Back</button>
        </div>
    </div>
</div>
    ):(
      <div className="w-screen h-screen flex items-center justify-center">
        <img className='w-96 h-96' src={accept} alt="" />
      </div>
    )}</div>
    
  )
}

export default Success
