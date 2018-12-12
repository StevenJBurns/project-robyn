/* Node & Express Dependencies */
const path = "path";
const express = require("express");

/* Local Dependencies */
const routerAPI = require("./routing/routerAPI.js");
const routerAccount = require("./routing/routerAccount.js");

/* Set up secret .env values */
require("dotenv").config();

/* Create a port and the Express server object */
const port = process.env.PORT || 4000;
const server = new express();

/* Start middleware */
/* use serve-favicon for annoying favicon GET requests */ 


/* default root GET routing */
server.get("/", (req, res, next) => {
  res.status(200).send('Root GET');
})

/* Start Middleware with local routers */
server.use("/account", routerAccount);
server.use("/api", routerAPI);

server.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = server;
