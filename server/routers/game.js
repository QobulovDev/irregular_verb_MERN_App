const router = require("express").Router();
const roomManager = require('../db/index')

module.exports = (io) => {
  io.of("/api/game").on("connection", (socket) => {
    socket.on("createGame", (data)=>{
      const {roomcode, roomname, user} = data;
      if(!roomManager.isExistRoomByCode(roomcode) || !roomManager.isExistRoomByName(roomname)){
        socket.disconnect();
      }  
      roomManager.addSocketIdToAdmin(user, roomcode, socket.id);
    })


    socket.on('join', ({ username, roomcode }) => {
      const users = roomManager.joinRoom(roomcode, username);

      socket.emit('addedUser', {users});

      // socket.broadcast.to(user.room)
      //     .emit('message', {
      //         user: "admin",
      //         text: `${user.name}, has joined`
      //     });

      // socket.join(user.room);

      // io.to(user.room).emit('roomData', {
      //     room: user.room,
      //     users: getUsersInRoom(user.room)
      // });
      // callback();
  })

    // socket.on("joinGame", ({ playerId, gameId }, callback)
    // socket.on("message", (data) => {
    //   console.log(`Klientdan kelgan xabar: ${data}`);
    //   // Barcha klientlarga javob yuborish
    //   io.of("/api/game").emit("message", `Serverdan javob: ${data}`);
    // });

    // Socket yopilganda
    socket.on("disconnect", () => {
      console.log("Klient tark etildi:", socket.id);
    });
  })

  return router;
};
