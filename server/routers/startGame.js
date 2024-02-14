const route = require("express").Router();
const roomManager = require('../db/index');
const {createVaidator, joinGameValidator} = require('../helper/validator');

route.post("/create", (req, res) => {
  try {
    const {error} = createVaidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {roomcode, roomname, username} = req.body;
    const {userError, newRoom} = roomManager.createRooms(username, roomname, roomcode);
    if(userError) return res.status(400).json(userError)
    res.status(201).json(newRoom);
  } catch (error) {
    console.log(error);
    return res.send(500).json({ error: "Something went wrong", ok: "false" });
  }
});

route.get("/join", (req, res) => {
  try {
    const {error} = joinGameValidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {roomcode, username} = req.body;
    const {userId} = roomManager.joinRoom(roomcode, username);
    res.status(201).json(userId);
  } catch (error) {
    console.log(err);
    return res.send(500).json({ error: "Something went wrong", ok: "false" });
  }
});

module.exports = route;
