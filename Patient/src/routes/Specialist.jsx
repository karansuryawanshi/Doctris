import React from 'react'
import LoggedInHome from './LoggedInHome'
import { Icon } from '@iconify/react/dist/iconify.js'
import Dentist from "../assets/Dentist.jpg"
import Eyecare from "../assets/Eyecare.jpg"
import Gynacologist from "../assets/Gynacologist.jpg"
import Psycotheripist from "../assets/Psychotheripist.jpg"
import Orthopedic from "../assets/Orthopedic.jpg"
import Gastrologist from "../assets/Gastrologist.jpg"
import Urologist from "../assets/urologist.jpg"
import Neurology from "../assets/neurologist.webp"
import { useNavigate } from 'react-router-dom'

const Specialist = () => {

  const navigate = useNavigate();

    const data = [
        {
         icon:Eyecare,
          title:"Eye Care",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Gynacologist,
          title:"Gynacologist",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Psycotheripist,
          title:"Psycotheripist",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Orthopedic,
          title:"Orthopedic",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Dentist,
          title:"Dentist",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Gastrologist,
          title:"Gastrologist",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Urologist,
          title:"Urologist",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        },
        {
          icon: Neurology,
          title:"Neurology",
          description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, quas dolorem. Corrupti architecto consequatur odit."
        }
      ]

  return (
    <LoggedInHome>
        <div className='px-16 py-6 grid gap-10 grid-cols-4'>
            {data.map((item)=>{
                return(
                    <div className='w-80 border-2 flex flex-col items-center justify-center space-x-4 space-y-1 border-gray-400 bg-gray-200 hover:bg-gray-300 hover:shadow-xl duration-300 ease-in-out rounded-xl py-2'>
                        <p className='rounded-xl'><img src={item.icon} alt="" className='p-3 w-80 h-56 rounded-xl'/></p>
                        <p>{item.description}</p>                
                        <p 
                          className='bg-blue-200 hover:bg-blue-300 duration-300 p-2 rounded-lg font-semibold cursor-pointer' 
                          onClick={()=>{navigate(`/specialist/${item.title}`)}}>{item.title}
                        </p>
                    </div>
                )
            })}
        </div>
    </LoggedInHome>
  )
}

export default Specialist
