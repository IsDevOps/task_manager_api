const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Field must not be Empty"],
    trim: true,
    maxlength: [10, "Character must not be more than 10 character"],
  },
  isCompleted: { type: Boolean, default: false },
});
module.exports = mongoose.model("Tasks", TaskSchema);
