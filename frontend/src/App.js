import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { io } from "socket.io-client";

const Regis =  lazy(() => import("./pages/Regis"));
const Room=lazy(()=>import('./pages/Room'))
const Error404 = () => <div>Error 404</div>

function App() {
  // const socket = io('http://localhost:5000/api/game');
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem("game_data")));
  // useEffect(()=>{
  //   if(!data) return;
  //   socket.on("connection", (socket) => {
  //     socket.on("say to someone", (id, msg) => {
  //       // send a private message to the socket with the given id
  //       socket.to(id).emit("my message", msg);
  //     });
  //   });
  //   // socket.emit('join', {roomcode: data.code, roomname: data.name, user: data?.creater?.name}, (error) => {
  //   //   if (error) {
  //   //       alert(error);
  //   //   }
  //   // })
  //   return () => {
  //       // socket.emit('disconnect');
  //       socket.off();
  //   }
  // },[data, socket])
  
  return (
    <Suspense fallback={Error404}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ data? <Room data={data} setData={setData}/>: <Navigate to="/regis" replace />}/>
          <Route path="/regis" element={ !data? <Regis data={data} setData={setData}/>: <Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;