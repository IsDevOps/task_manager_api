const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  updateTask,
  getTask,
  createTask,
  deleteTasks,
} = require("../controller/tasks.controller");

//Routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
