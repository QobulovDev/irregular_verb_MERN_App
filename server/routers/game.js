const router = require("express").Router();
const roomManager = require("../db/index");

module.exports = (io) => {
  io.of("/api/game").on("connection", (socket) => {
    console.log(`new client connected : ${socket.id}`);
    socket.on("createGame", (data) => {
      const reqData = typeof data == "string"? JSON.parse(data): data;
      const { roomcode, roomname, user } = reqData;
      if (
        !roomManager.isExistRoomByCode(roomcode) ||
        !roomManager.isExistRoomByName(roomname) ||
        !roomManager.isAdminByRoomcode(roomcode, user)
      ) {
        socket.disconnect();
      }
      socket.join(roomcode);
    });
    
    socket.on("join", async (data) => {
      const reqData = typeof data == "string"? JSON.parse(data): data;
      const { username, roomcode } = reqData;
      const roomData = roomManager.joinRoom(roomcode, username);
      socket.join(roomcode);
      io.of("/api/game").in(roomcode).emit("addedUser", roomData.users);
    });

    // Socket yopilganda
    socket.on("disconnect", () => {
      console.log("Klient tark etildi:", socket.id);
    });
  });

  return router;
};
