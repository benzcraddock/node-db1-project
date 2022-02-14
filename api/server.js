const express = require("express");

// router
const accountsRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

// USE ACCOUNTS
server.use('/api/accounts', accountsRouter)

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'api up!'
  })
})

module.exports = server;
