// routes for insomnia

const routes = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../Controllers/UserController");

// /api/users
routes.route("/").get(getAllUser).post(createUser);

// /api/users/:id
routes.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
routes.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = routes;
