const express = require("express");
const helmet = require("helmet");
const cors = require("cors");


const authRouter = require("../auth/auth-router.js");
const plantRouter = require('../plants/plant-router.js');


const server = express();



server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api/auth", authRouter);
server.use('/api/plants', plantRouter);


server.get("/", (req,res) => {
    res.json({api: "up"});
});

module.exports = server;