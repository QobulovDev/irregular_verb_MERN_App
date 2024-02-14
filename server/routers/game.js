const router = require("express").Router();
const roomManager = require("../db/index");

module.exports = (io) => {
  io.of("/api/game").on("connection", (socket) => {
    console.log(`new client connected : ${socket.id}`);

    socket.on("createGame", (data) => {
      const reqData = typeof data == "string"? JSON.parse(data): data;
      const { roomcode, roomname, userId } = reqData;
      if (
        !roomManager.isExistRoomByCode(roomcode) ||
        !roomManager.isExistRoomByName(roomname) ||
        !roomManager.isAdminByRoomcode(roomcode, userId)
      ) {
        socket.disconnect();
      }
      socket.join(roomcode);
    });
    
    socket.on("join", async (data) => {
      const reqData = typeof data == "string"? JSON.parse(data): data;
      const { username, roomcode } = reqData;
      // const {userError, users} = roomManager.joinRoom(roomcode, username);
      if(
        roomManager.isExistRoomByCode(roomcode) &&
        roomManager.isExistRoomByUserName(username, roomcode) 
        ){
          socket.join(roomcode);
          io.of("/api/game").in(roomcode).emit("addedUser", roomManager.getRoomUsers(roomcode));
        }else socket.disconnect();
    });

    // Socket yopilganda
    socket.on("disconnect", () => {
      console.log("Klient tark etildi:", socket.id);
    });
  });

  return router;
};
