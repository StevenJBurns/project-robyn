/* Node & Express Dependencies */
const path = require("path");
const express = require("express");

/* External Dependencies */
const logger = require("morgan");

/* Local Dependencies */
const routerAPI = require("./routing/routerAPI.js");
const routerAccount = require("./routing/routerAccount.js");

/* Set up secret .env values */
require("dotenv").config();

/* Create a port and the Express server object */
const port = process.env.PORT || 4000;
const server = new express();
console.clear();

/* Start middleware */

/* Morgan Middleware for logging */
server.use(logger("dev"));

/* use Express v4.16.4 built in body-parser */
server.use(express.json());

/* use serve-favicon for annoying favicon GET requests */ 


/* default root GET routing */
server.use("/", express.static(path.join(__dirname, "client", "dist")));

/* Start Middleware with local routers */
server.use("/account", routerAccount);
server.use("/api", routerAPI);

server.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
