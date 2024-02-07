const express = require('express');
const cors = require('cors')

//routes
const home = require('./home');
// const verb = require('./verbs')
// const game = require('./game')

module.exports = function(app){
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.set("view engine", "ejs")

    app.use("/", home);
    // app.use("/api/vers", verbs)
    // app.use("/api/game", game)
}