const TaskModel = require("../model/task.model");

//GET ALL TASKS

const getAllTasks = async (req, res) => {
  try {
    const getAllTask = await TaskModel.find({});
    if (getAllTask) {
      res.status(200).json({ message: getAllTask });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

//
const updateTask = async (req, res) => {
  const {id: updateID}= req.params
  try {
    const updateTask = await TaskModel.findById({_id: updateID });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOne({ _id: taskID });
    if (!task) {
      return res.status(500).json({ message: `No such task ${taskID}` });
    }
    return res.status(201).json({ message: task });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE TASKS

const createTask = async (req, res) => {
  try {
    const createTask = await TaskModel.create(req.body);
    if (createTask) {
      res.status(200).json({ message: "Task Successfully Created" });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
const deleteTasks = async(req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(500).json({ message: `No such task ${taskID} in the database` });
    }
    return res.status(201).json({ message:  `Task ${taskID} deleted successfully`});
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  getAllTasks,
  updateTask,
  getTask,
  createTask,
  deleteTasks,
};
