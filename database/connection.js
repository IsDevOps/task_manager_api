const mongoose = require("mongoose");


const ConnectionDB=(url)=>{
mongoose
  .connect(url)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
}
  module.exports = ConnectionDB