const express = require("express");
const transactionsController = require("./controllers/transactionsController");
const app = express();
const cors = require("cors")

app.use(cors())

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to The Budgeting App!");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
