import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";

const socket = io('http://localhost:5000/api/game');
function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    socket.on('message', (data) => {
      console.log('Serverdan kelgan xabar:', data);
    });
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
  };

  return (
    <div className="container">
      <input name="name" />
      <button>Connect</button>

      <br />
      <br />

      <h1>Socket.io React Client</h1>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Xabarni yuborish</button>
    </div>
  );
}

export default App;
