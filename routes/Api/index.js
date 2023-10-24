// setting routes

const routes = require("express").Router();
const userRoutes = require("./UserRoutes");
const thoughtRoutes = require("./ThoughtRoutes");

routes.use("/Users", userRoutes);
routes.use("/Thoughts", thoughtRoutes);

module.exports = routes;
