const routerAPI = require("express").Router();

routerAPI.get("/", (req, res, next) => {
  res.status(200).send("GET /api Response");
});

module.exports = routerAPI;
