const express = require("express");
const ConnectDB = require("./database/connection");
const Tasks = require("./routes/tasks.route");
require("dotenv").config();

const app = express();
const Port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Task Manager");
});

//Middlewares
app.use("/api/v1/task", Tasks);
app.post("/api/v1/task", Tasks);
app.patch("/api/v1/task/:id", Tasks);
app.get("/api/v1/task/:id", Tasks);
app.delete('/api/v1/tasks/:id', Tasks)

const start = async () => {
  try {
    ConnectDB(process.env.MONGO_DB);
    app.listen(Port, () => console.log(`Server running on port ${Port}......`));
  } catch (error) {
    console.log(error);
  }
};

start();
