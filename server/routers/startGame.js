const route = require("express").Router();
const roomManager = require('../db/index');
const {createVaidator, joinGameValidator} = require('../helper/validator');

route.post("/create", (req, res) => {
  try {
    const {error} = createVaidator(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {roomcode, roomname, username} = req.body;
    const {userError, roomData} = roomManager.createRooms(username, roomname, roomcode);
    if(userError) return res.status(400).json(userError)
    res.status(201).json(roomData);
  } catch (error) {
    console.log(error);
    return res.send(500).json({ error: "Something went wrong", ok: "false" });
  }
});

route.post("/join", (req, res) => {
  try {
    const {error} = joinGameValidator(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const {roomcode, username} = req.body;
    const {userError, roomData} = roomManager.joinRoom(roomcode, username);
    if(userError) return res.status(400).json(userError)
    res.status(201).json(roomData);
  } catch (error) {
    console.log(err);
    return res.send(500).json({ error: "Something went wrong", ok: "false" });
  }
});

module.exports = route;
