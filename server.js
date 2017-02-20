const Hapi = require('hapi');
const server = new Hapi.Server();
const Joi = require('joi');
const UserModel = require('./models/user');
const UserController = require('./handlers/users');

// Include mongoose and connect
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restdemo');

server.connection({host: 'localhost', port: 3000});

server.route(require('./routes/userRoutes'));

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
