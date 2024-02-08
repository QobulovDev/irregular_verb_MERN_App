//import lib from node_modules
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

//import lib from custom files
const routers = require('./routers/index');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = new Server(server, { cors: { origin: "*"} });

routers(app, io)

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000/`);
});
