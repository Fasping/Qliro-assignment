const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const monty = require("./monty.js");
const app = express();

const PORT = 3100;
const BUILD = "/../../build";

app.use(cors());
app.use(express.static(path.join(__dirname, BUILD)));
app.use(bodyParser.json());

app.post("/api/monty/", async (req, res) => {
  let sampleSize = req.body.sampleSize;
  let keep = req.body.keep;
  let numberOfDoors = req.body.numberOfDoors;
  let result = monty.simulateMonty(sampleSize, keep, numberOfDoors);
  // console.log(req.body)
  // console.log(result)
  await res.send(result);
  // console.log(`Simulation result returned`)
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, BUILD, "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Monty Hall problem backend listening at http://localhost:${PORT}`
  );
});
