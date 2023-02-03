const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const monty = require("./monty.js");
const app = express();

// Define the port for the app to run on
const PORT = 3100;
// Define the build path for serving the client app
const BUILD = "/../../build";

// Use CORS middleware to handle cross origin resource sharing
app.use(cors());
// Serve the client app build directory using express.static
app.use(express.static(path.join(__dirname, BUILD)));
// Use body-parser to handle incoming JSON data
app.use(bodyParser.json());

// POST endpoint for simulating the Monty Hall problem
app.post("/api/monty/", async (req, res) => {
  // Retrieve the sample size, keep choice, and number of doors from the request body
  let sampleSize = req.body.sampleSize;
  let keep = req.body.keep;
  let numberOfDoors = req.body.numberOfDoors;
  // Use the simulateMonty function from the monty.js module to get the simulation result
  let result = monty.simulateMonty(sampleSize, keep, numberOfDoors);
  // Send the simulation result back in the response
  await res.send(result);
});

// GET endpoint for serving the client app
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, BUILD, "index.html"));
});

// Start the app on the defined port and log a message to the console
app.listen(PORT, () => {
  console.log(`
Monty Hall problem backend listening at http://localhost:${PORT}
`);
});
