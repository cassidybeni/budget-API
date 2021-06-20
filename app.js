const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controllers/transactionsController");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to The Budgeting App!");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
