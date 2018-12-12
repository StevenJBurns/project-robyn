/* Node & Express Dependencies */
const path = "path";
const express = require("express");

/* Local Dependencies */
const routerAPI = require("./routing/routerAPI");
const routerAccount = require("./routing/routerUser");


/* Create the Express server object */
const server = new express();

/* Start middleware for annoying favicon GET requests */ 

/* Start Middleware with local routers */
server.use("/account", routerAccount);
server.use("/api", routerAPI);

server.listen(process.env.PORT || 8000, () => console.log("HI"));

module.exports = server;
