
const express = require("express");

const server = new express();


server.listen(process.env.PORT || 8000, _ => console.log("HI"));
