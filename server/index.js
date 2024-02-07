//import lib from node_modules
const express = require('express');

//import lib from custom files
const routers = require('./routers/index');

const app = express()
const PORT = process.env.PORT || 5000; 


const start = async () => {
    try {

        routers(app)

        app.listen(PORT, ()=>{
            console.log(`Server running on http://localhost:5000/`);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start().then()