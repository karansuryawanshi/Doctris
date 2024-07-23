import React, {useCallback, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../context/SocketProvider';
import LoggedInHome from '../routes/LoggedInHome';

const Lobby = () => {

    const [email, setEmail]= useState();
    const [room, setRoom]= useState();

    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmitForm = useCallback((e) =>{
        e.preventDefault();
        socket.emit('room:join',{email, room})
    },
  [email, room, socket])

  const handleJoinRoom = useCallback((data)=>{
    const {email, room} = data;
    console.log(email, room);
    navigate(`/patient/room/${room}`)
  }, [navigate])

  useEffect(()=>{
    socket.on('room:join', handleJoinRoom);
    return()=>{
      socket.off("room:join", handleJoinRoom);
    }
  },[socket])


  return (
    <LoggedInHome>
      <div className='flex items-center justify-center mb-6 pb-1'>
      <div className='my-28 border-2 rounded-xl border-blue-500 '>
        <p className='mb-4 text-3xl px-6 rounded-t-lg py-2 font-semibold text-white bg-blue-600'>Start Conversation</p>
        <form action="" className='flex flex-col px-6  justify-center items-center' onSubmit={handleSubmitForm}>
        <div>
          <p className='text-normal pb-2 font-semibold text-gray-800'>Email <span className='text-red-700 font-semibold text-xl'>*</span></p>
              <input 
                className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
                placeholder='Email:' 
                type="text" 
                value={email}
                onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
        </div>
        <br />
        <div>
          <p className='text-normal pb-2 font-semibold text-gray-800'>Room Number : <span className='text-red-700 font-semibold text-xl'>*</span></p>
          <input 
              className='border-2 p-1 rounded-lg w-full hover:border-blue-600 duration-300' 
              placeholder='Room Number:' 
              type="text" 
              value={room}
              onChange={(e)=>{
              setRoom(e.target.value)
          }}
          />
        </div>
        <br />
          <button className='bg-blue-300 hover:bg-blue-600 duration-300 hover:text-white px-6 py-3 mb-8 font-semibold rounded-lg'>Join</button>
        </form>
      </div>
      </div>
    </LoggedInHome>
  )
}

export default Lobby
