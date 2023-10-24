// routing file

const routes = require("express").Router();
const apiRoute = require("./Api");

routes.use("/Api", apiRoute);

routes.use((req, res) => {
  res.status(404).send("<h1>404 Error!</h1>");
});

module.exports = routes;
