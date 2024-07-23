import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const Cancel = () => {

    const navigate = useNavigate();

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <div className=" flex flex-col items-center justify-center">
                <div className="border-t-2 rounded-full absolute mb-28">
                    <Icon className="mb-20 text-9xl text-red-500" icon="line-md:cancel-twotone" />
                </div>
                <div className="mt-20 pt-16 px-10 space-x-6 border-2 rounded-xl shadow-lg shadow-red-300 flex flex-col items-center justify-center">
                    <p className="text-2xl font-semibold pb-4" ><span>$</span> <span>200</span></p>
                    <p className="text-lg font-semibold pb-2 italic">Payment Failed !</p>
                    <p className="font-semibold pb-2">Hey, seems like there was some trouble. <br /> we are there with you. just hold back</p>
                    <button className="mb-6 mt-2 bg-green-800 text-white px-4 py-2 rounded-xl"  onClick={()=>navigate("/patient/appointment")}>Try Again</button>
                </div>
            </div>
        </div>

    )
}

export default Cancel
