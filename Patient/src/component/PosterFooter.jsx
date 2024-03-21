import React from 'react'
import { Icon } from '@iconify/react'

const PosterFooter = ({icon,head,text,background}) => {
  return (
        <div className={`w-4/12 p-4 ${background}`}>
            <Icon 
                className='text-blue-600 text-4xl '
                icon={icon}>
                </Icon>
            <p className='my-4 text-xl font-bold text-gray-700'>{head}</p>
            <p className='text-gray-700 text-base font-semibold'>{text}</p>
            <p className='flex items-center text-lg text-blue-700 py-3'>Read More <span className='pt-1 px-1'> <Icon icon={"ph:arrow-right-light"}></Icon></span> </p>
        </div>  
  )
}

export default PosterFooter
