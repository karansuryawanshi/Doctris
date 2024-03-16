import React from 'react'
import { Icon } from '@iconify/react'

const PosterFooter = ({icon,head,text,background}) => {
  return (
        <div className={`w-4/12 p-4 ${background}`}>
            <Icon 
                className='text-blue-600 text-4xl '
                icon={icon}>
                </Icon>
            <p className='my-4 text-lg font-bold font-sans opacity-80'>{head}</p>
            <p className='text-sm text-gray-700 font-semibold'>{text}</p>
            <p className='flex items-center text-blue-700 py-3'>Read More <span> <Icon icon={"ph:arrow-right-light"}></Icon></span> </p>
        </div>  
  )
}

export default PosterFooter
