import React from 'react'

const UpdataDataInput = ({value, setValue, type, label}) => {
  return (
    <div>
        <p className='p-2'>{label}</p>
            <input 
            type={type}
            className='border-2 w-60 rounded-lg px-2 py-1'
            value={value}
            onChange={(e)=>{
                setValue(e.target.value)
            }}
        />
    </div>
  )
}
export default UpdataDataInput
