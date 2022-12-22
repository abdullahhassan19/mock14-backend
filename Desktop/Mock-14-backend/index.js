const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Connection } = require("./Config/db");
const { Gamerouter } = require("./Routers/Gamerouter");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use("/", Gamerouter);

app.listen(PORT, async () => {
  await Connection;
  try {
    console.log("connected to db");
  } catch {
    console.log("error in connection to db");
  }
  console.log(`running on port ${PORT}`);
});
