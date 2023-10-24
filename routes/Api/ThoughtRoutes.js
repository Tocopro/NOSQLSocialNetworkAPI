// setting all variables to controller folder

const routes = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../Controller/ThoughtController");

// /api/thoughts
routes.route("/").get(getAllThought).post(createThought);

// /api/thoughts/:id
routes
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
routes.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
routes.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = routes;
