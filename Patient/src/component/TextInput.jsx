import React from 'react'

const TextInput = ({InputType,type,placeholder}) => {
  return (
    <div>
        <div className='mx-8'>
            <div className='mt-6'>
            <label htmlFor={InputType} className='m-2'>{InputType} <span className='font-semibold text-red-700'>*</span></label> <br />
            <input type={type} placeholder={placeholder} className='border border-gray-400  p-2 rounded-lg w-full'/>
            </div>
        </div>  
    </div>
  )
}

export default TextInput
