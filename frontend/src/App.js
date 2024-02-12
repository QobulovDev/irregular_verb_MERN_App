import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const Regis =  lazy(() => import("./pages/Regis"));
const Room=lazy(()=>import('./pages/Room'))
// const Error404 = () => <div>Error 404</div>

function App() {
  const [data, setData] = useState(window.localStorage.getItem("game_data"));
  return (
    <Suspense fallback={<>Loading</>}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ data? <Room data={data} setData={setData}/>: <Navigate to="/regis" replace />}/>
          <Route path="/regis" element={ !data? <Regis data={data} setData={setData}/>: <Navigate to="/" replace />}/>
          {/* <Route path="/" element={ <Room/>}/>
          <Route path="/regis" element={ <Regis/>}/> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
// import { io } from "socket.io-client";
// const socket = io('http://localhost:5000/api/game');
