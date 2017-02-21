const Hapi = require('hapi');
const server = new Hapi.Server();
const Joi = require('joi');
const Handlebars = require('handlebars');
// const UserModel = require('./models/user');

// Include mongoose and connect
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/3dprintstudio');

server.register(require('Vision'), (err) => {
  if (err) { console.log('Cannot register vision'); }

  // template support
  server.views({
    engines: {
      Handlebars
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default'
  });
});

server.register(require('inert'), (err) => {
  if (err) { throw err; }

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'client_assets'
      }
    }
  });
});

server.connection({host: 'localhost', port: 3000});

server.route(require('./routes/shop'));

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
