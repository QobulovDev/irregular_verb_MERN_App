const router = require("express").Router();

module.exports = (io) => {
  io.of("/api/game").on("connection", (socket) => {
    console.log("Klient bog'landi:", socket.id);

    // Klientdan kelgan xabarlarni eshitish
    socket.on("message", (data) => {
      console.log(`Klientdan kelgan xabar: ${data}`);
      // Barcha klientlarga javob yuborish
      io.of("/api/game").emit("message", `Serverdan javob: ${data}`);
    });

    // Socket yopilganda
    socket.on("disconnect", () => {
      console.log("Klient tark etildi:", socket.id);
    });
  });

  return router;
};
