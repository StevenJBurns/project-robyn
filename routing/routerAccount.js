const routerAccount = require("express").Router();

routerAccount.get("/", (req, res, next) => {
  res.status(200).send("GET /account Response");
});

module.exports = routerAccount;
