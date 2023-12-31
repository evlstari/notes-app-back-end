const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    // host: '127.0.0.1',
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    // membuat jangkauan origin lebih luas
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
