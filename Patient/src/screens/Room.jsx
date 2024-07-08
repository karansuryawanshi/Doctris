import React, { useCallback, useEffect, useState } from 'react'
import { useSocket } from '../context/SocketProvider'
import ReactPlayer from "react-player"
import Peer from '../service/Peer'

const Room = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null)
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const handleUserJoined = useCallback(({email, id})=>{
    // console.log(email)
    console.log(`Email  ${email} joined room`)
    setRemoteSocketId(id)
  }, [])

  const handleCallUser= useCallback( async ()=>{
    const stream = await navigator.mediaDevices.getUserMedia({
      audio : true,
      video: true
    })

    const offer = await Peer.getOffer();
    socket.emit("user:call",{to: remoteSocketId, offer})
    setMyStream(stream)
  }, [remoteSocketId, socket])

  const sendMystream = useCallback(()=>{
    for(const track of myStream.getTracks()){
      Peer.peer.addTrack(track, myStream);
    }
  }, [myStream])

  const handleCallAccepted = useCallback((from, ans)=>{
    Peer.setLocalDescription(ans)
    console.log("call Accepted")
    sendMystream();
  },[sendMystream])

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      console.log("Incomming call", from, offer)
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`incomming:call`, from, offer);
      const ans = await Peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans })},
    [socket]
  );


  useEffect(()=>{
    Peer.peer.addEventListener('track', async (ev) =>{
      const remoteStream = ev.streams
      console.log('!!got tracks!!')
      console.log("Helo This is remote stream",remoteStream)
      setRemoteStream(remoteStream[0])
    })
  },[])

  const handleNegoNeeded = useCallback(async ()=>{
    const offer = await Peer.getOffer()
    socket.emit('peer:nego:needed',{offer, to: remoteSocketId})
  },[remoteSocketId, socket])  

  useEffect(()=>{
    Peer.peer.addEventListener('negotiationneeded', handleNegoNeeded)
    return ()=>{
      Peer.peer.removeEventListener('negotiationneeded', handleNegoNeeded);
    }
  }, [handleNegoNeeded])

  const handleNegoIncomming = useCallback(async({from, offer})=>{
    const ans = await Peer.getAnswer(offer);
    socket.emit('peer:nego:done',{to:from, ans})
  },[socket])

  const handleNegoFinal = useCallback( async ({ans})=>{
    // const ans = Peer.getAnswer(offer);
    await Peer.setLocalDescription(ans)
    // socket.emit('peer:nego:done',{to:from, ans})
  },[])



  useEffect(()=>{
    socket.on("user:joined", handleUserJoined)
    socket.on("incomming:call", handleIncommingCall)
    socket.on("call:accepted",handleCallAccepted)
    socket.on("peer:nego:needed",handleNegoIncomming)
    socket.on("peer:nego:final", handleNegoFinal)

    return()=>{
      socket.off("user:Joined", handleUserJoined)
      socket.off("incomming:call", handleIncommingCall)
      socket.off("call: accepted",handleCallAccepted)
      socket.off("peer:nego:needed",handleNegoIncomming)
      socket.off("peer:nego:final", handleNegoFinal)
    }
  }, [
      socket, 
      handleUserJoined, 
      handleIncommingCall, 
      handleNegoIncomming, 
      handleNegoFinal, 
      handleCallAccepted])

  return (
    <div>
      <h1>This is my room Page</h1>
      <p>{remoteSocketId? "connected" : "no one in room" }</p>
      {myStream&& <button onClick={sendMystream}>Send Stream</button>}
      {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
      {myStream && 
      <>
        <p>My Stream</p>
        <ReactPlayer 
          playing 
          muted 
          height="300px" 
          width="300px"
          url={myStream}
          />
      </>
      }
      {remoteStream && 
      <>
        <p>My Stream</p>
        <ReactPlayer 
          playing 
          muted 
          height="300px" 
          width="300px"
          url={remoteStream}
          />
      </>
      }
    </div>
  )
}

export default Room
