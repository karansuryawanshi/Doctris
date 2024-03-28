import React from 'react'
import AppointMent from './AppointMent'

const Profile = () => {
  return (
      <div className='p-6'>
                    <div>
                        <p className='text-lg font-semibold text-gray-800'>Introduction:</p>
                    </div>
                    <div className='py-6 '>
                        <p className='font-normal text-gray-500'>Web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. Dummy texts have been in use by typesetters since the 16th century.</p>
                    </div>
                    <div>
                        <div>
                            <p className='text-xl font-semibold text-gray-800'>Appointment List</p>
                        </div>
                    </div>
                        <AppointMent></AppointMent>
                </div>
  )
}

export default Profile
