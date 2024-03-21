import React from 'react'
import { Icon } from '@iconify/react'

const Body = () => {
  return (
    
    <div className='w-full h-full pt-20'>
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div>
                    <img className='w-10/12 h-full' src="https://doctris-react-landing.vercel.app/static/media/about-2.4f696a42c208855604fb.png" alt="" />
                </div>
                <div className='w-5/12'>
                    <p className='text-4xl font-semibold'>About Our Treatments</p> <br />
                    <p className='text-lg text-gray-600'>Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p> <br />
                    <p className='text-lg text-gray-600'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                    <button className='mt-5 flex items-center bg-blue-600 px-4 py-2 rounded-lg text-white text-lg hover:bg-blue-700 duration-300'>Read More <Icon className='text-xl' icon={"basil:arrow-right-outline"}></Icon> </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body
