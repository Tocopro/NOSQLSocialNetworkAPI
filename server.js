
// load all libraries needed to run the App

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


// setting a listening port and activating the port

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
