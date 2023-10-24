// setting routes

const routes = require("express").Router();
const userRoutes = require("./UserRoutes");
const thoughtRoutes = require("./ThoughtRoutes");

router.use("/Users", userRoutes);
router.use("/Thoughts", thoughtRoutes);

module.exports = routes;
