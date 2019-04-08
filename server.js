const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./routers/auth-router.js');
const usersRouter = require('./routers/users-router.js');
const restricted = require('./routers/restricted-middleware.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);

module.exports = server;