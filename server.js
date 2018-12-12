/* Node & Express Dependencies */
const path = "path";
const express = require("express");

/* Local Dependencies */
const routerAPI = require("./routing/routerAPI");
const routerAccount = require("./routing/routerUser");

/* Set up secret .env values */
require("dotenv").config();

/* Create a port and the Express server object */
const port = process.env.PORT || 4321;
const server = new express();

/* Start middleware for annoying favicon GET requests */ 

/* Start Middleware with local routers */
server.use("/account", routerAccount);
server.use("/api", routerAPI);

server.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
