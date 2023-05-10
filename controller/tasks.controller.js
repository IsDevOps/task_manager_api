const TaskModel = require("../model/task.model");
const asynWrapper = require('../middlewares/async')

//GET ALL TASKS

const getAllTasks = asynWrapper (async(req, res)=>{
  const getAllTask = await TaskModel.find({});
  if (getAllTask) {
    res.status(200).json({ message: getAllTask });
  }
})
  

//
const updateTask = asynWrapper (async(req, res) => {
    const {id: updateID}= req.params
    const updateTask = await TaskModel.findOneAndUpdate({_id : updateID},req.body,{new:true,runValidators:true});
    
    if (!updateTask) {
      return res.status(500).send({ message: `No such task ${updateID}` });
    }
    return res.status(201).json({ message: updateTask });
 
});

const getTask = asynWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOne({ _id: taskID });
    if (!task) {
      return res.status(500).send({ message: `No such task ${taskID}` });
    }
    return res.status(201).json({ message: task });
});

// CREATE TASKS

const createTask = asynWrapper(async (req, res) => {
    const createTask = await TaskModel.create(req.body);
    if (createTask) {
      res.status(200).json({ message: "Task Successfully Created" });
    }  
});

const deleteTasks = asynWrapper(async(req, res) => {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(500).json({ message: `No such task ${taskID} in the database` });
    }
    return res.status(201).json({ message:  `Task ${taskID} deleted successfully`});  
});
module.exports = {
  getAllTasks,
  updateTask,
  getTask,
  createTask,
  deleteTasks,
};
