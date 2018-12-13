/* Node & Express Dependencies */
const path = require("path");
const express = require("express");

/* External Dependencies */
const logger = require("morgan");
const favicon = require("serve-favicon");

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
server.use(favicon(path.join(__dirname, "client", "public", "favicon.ico")));

/* default root GET routing */
server.use("/", express.static(path.join(__dirname, "client", "dist")));

/* Start Middleware with local routers */
server.use("/account", routerAccount);
server.use("/api", routerAPI);

/* Catch-All middleware routing that serves up the Vue client for non-API URLs vs a 404 error */
// server.get("*", (req, res) => res.sendFile(path.join(__dirname, "client", "dist")));

/* Express catch-all error handler */
server.use((err, req, res, next) => {
  console.error("catch-all: ", err);
  res.json({"error": err});
});

server.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
