const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const studentroutes = require("./routes/routesinfo");

const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env"});
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // convert json file

mongoose.Promise = global.Promise;
mongoose.connect(process.env.ATLAS_URI)
.then(console.log("connected to MongoDB"));

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


const port = process.env.PORT || 5000;

app.use("/students", studentroutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
  });
  