const express = require("express");
const ConnectDB = require("./database/connection");
const cors = require("cors")
const NotFound = require('./middlewares/not-found')
const errorHandlers = require('./middlewares/error-handler')
require("dotenv").config();
const Tasks = require("./routes/tasks.route");

const app = express();

const Port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(express.static("./public"))



app.use("/api/v1/task", Tasks);
app.use(NotFound)
app.use(errorHandlers)



const start = async () => {
  try {
    ConnectDB(process.env.MONGO_DB);
    app.listen(Port, () => console.log(`Server running on port ${Port}......`));
  } catch (error) {
    console.log(error);
  }
};
start();

