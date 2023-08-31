const express = require('express');
const router = express.Router();

const todoRouter = require('./todos');

router.use("/todos", todoRouter);

router.get("/", (req, res) => {
  res.send('Welcome to todos api. Please use specific endpoint.')
})

module.exports = router;