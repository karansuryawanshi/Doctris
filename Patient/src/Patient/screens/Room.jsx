import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import ReactPlayer from "react-player";
import Peer from "../service/Peer";
import LoggedInHome from "../routes/LoggedInHome";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const navigate = useNavigate();

  const handleUserJoined = useCallback(({ email, id }) => {
    // console.log(email)
    console.log(`Email  ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    const offer = await Peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const sendMystream = useCallback(() => {
    for (const track of myStream.getTracks()) {
      Peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    (from, ans) => {
      Peer.setLocalDescription(ans);
      console.log("call Accepted");
      sendMystream();
    },
    [sendMystream]
  );

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      console.log("Incomming call", from, offer);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`incomming:call`, from, offer);
      const ans = await Peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  useEffect(() => {
    Peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("!!got tracks!!");
      console.log("Helo This is remote stream", remoteStream);
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  const handleNegoNeeded = useCallback(async () => {
    const offer = await Peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    Peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      Peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await Peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoFinal = useCallback(async ({ ans }) => {
    // const ans = Peer.getAnswer(offer);
    await Peer.setLocalDescription(ans);
    // socket.emit('peer:nego:done',{to:from, ans})
  }, []);

  const EndCall = async () => {
    await navigate("/patient/online%20appointment");
    await window.location.reload();
  };

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoIncomming);
    socket.on("peer:nego:final", handleNegoFinal);

    return () => {
      socket.off("user:Joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call: accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoIncomming);
      socket.off("peer:nego:final", handleNegoFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleNegoIncomming,
    handleNegoFinal,
    handleCallAccepted,
  ]);

  return (
    <LoggedInHome>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl">Room</p>
        {remoteSocketId ? (
          <p className="text-lg p-2">Connected</p>
        ) : (
          <p className="text-lg p-2"> ! No one in the room !</p>
        )}
        {/* <p>{remoteSocketId? "connected" : "no one in room" }</p> */}
        <div>
          {myStream && (
            <button
              className="py-1 mx-2 px-4 rounded-lg hover:bg-blue-600 duration-300 bg-blue-500 border-blue-500 text-white font-semibold border-2 mb-4"
              onClick={sendMystream}
            >
              Send Stream
            </button>
          )}
          {remoteStream && (
            <button
              className="py-1 px-4 rounded-lg hover:bg-red-600 duration-300 bg-red-500 border-red-500 text-white font-semibold border-2 mb-4"
              onClick={EndCall}
            >
              End Call
            </button>
          )}
          {remoteSocketId && !myStream && (
            <button
              className="py-1 px-4 rounded-lg hover:bg-blue-600 duration-300 bg-blue-500 border-blue-500 text-white font-semibold border-2 mb-4"
              onClick={handleCallUser}
            >
              Call
            </button>
          )}
        </div>

        <div className="flex">
          {myStream && (
            <div className="m-2 flex flex-col items-center justify-center">
              <p className="font-semibold text-3xl text-blue-500">Stream 1</p>
              <ReactPlayer
                playing
                muted
                controls
                height="600px"
                width="600px"
                url={myStream}
              />
            </div>
          )}
          {remoteStream && (
            <div className="m-2 flex flex-col items-center justify-center">
              <p className="font-semibold text-3xl text-blue-500">Stream 2</p>
              <ReactPlayer
                playing
                muted
                controls
                height="600px"
                width="600px"
                url={remoteStream}
              />
            </div>
          )}
        </div>
      </div>
    </LoggedInHome>
  );
};

export default Room;
