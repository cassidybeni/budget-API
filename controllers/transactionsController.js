const express = require("express");
const transactions = express.Router();
const transactionsArr = require("../models/transactions");

transactions.get("/:transactionsIndex", (req, res) => {
  const { transactionsIndex } = req.params;
  if (transactionsArr[transactionsIndex]) {
    res.status(200).json(transactionsArr[transactionsIndex]);
  } else {
    res.redirect("/404");
  }
});

transactions.get("/", (req, res) => {
  res.send(transactionsArr);
});

transactions.post("/", (req, res) => {
  transactionsArr.push(req.body);
  res.json(transactionsArr[transactionsArr.length - 1]);
});

transactions.delete("/:transactionsIndex", (req, res) => {
  const { transactionsIndex } = req.params;
  if (transactionsArr[transactionsIndex]) {
    transactionsArr.splice([transactionsIndex], 1);
    res.status(200).json(transactionsArr);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactions;
