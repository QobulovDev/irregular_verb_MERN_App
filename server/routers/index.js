const express = require('express');
const cors = require('cors')

//routes
const home = require('./home');
const game = require('./game')
// const verb = require('./verbs')

module.exports = function(app, io){
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.set("view engine", "ejs")

    app.use("/", home);
    app.use("/api/game", game(io));
    // app.use("/api/vers", verbs)
    // app.use("/api/game", game)
}