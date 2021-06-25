const express = require("express");
const transactions = express.Router();
const transactionsArr = require("../models/transactions");

const validateTransaction = (req, res, next) => {
  const { date, name, amount } = req.body;
  if (date === undefined || name === undefined || amount === undefined) {
    res.status(400).send("Sorry, not found");
  } else {
    next();
  }
};

transactions.get("/", (req, res) => {
  res.json(transactionsArr);
});

transactions.get("/:index", (req, res) => {
  transactionsArr[req.params.index]
    ? res.json(transactionsArr[req.params.index])
    : res.redirect("/404");
});

transactions.post("/", validateTransaction, (req, res) => {
  transactionsArr.push(req.body);
  res.json(transactionsArr[transactionsArr.length - 1]);
});

transactions.put("/:index", (req, res) => {
  if (transactionsArr[req.params.index]) {
    transactionsArr[req.params.index] = req.body;
    res.status(200).json(transactionsArr[req.params.index]);
  } else {
    res.redirect("/404");
  }
});

transactions.delete("/:index", (req, res) => {
  if (transactionsArr[req.params.index]) {
    const deletedTransaction = transactionsArr.splice(req.params.index, 1);
    res.status(200).json(deletedTransaction);
  } else {
    res.redirect("/404");
  }
});

module.exports = transactions;
