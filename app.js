var Hapi = require('hapi');
var path = require('path');

/**
 * Server Configuration
 */
var server = new Hapi.Server({
  debug: {
    request: ['debug', 'error']
  }
});

server.connection({port: process.env.PORT || 3000});

/**
 * Register Static Asset Plugin
 */
server.register(require('inert'), (err) => {
  if (err) console.log('Failed to load static asset plugin');

  server.route({
    method: 'GET',
    path: '/static/{params*}',
    handler: {
      directory: {
        path: path.join(__dirname, './src/public/')
      }
    }
  });

});

server.route({
  path: '/',
  method: 'GET',
  handler: (req, reply) => {
    reply.file(path.join(__dirname, './src/app/index.html'))
  }
})

return server.start((err) => {
  console.log('Server listening on port 3000');
});