import http from 'node:http';

import { jsonHandler } from './middlewares/jsonHandler.js';
import { routesHandler } from './middlewares/routesHandler.js';

async function listener(request, response) {
  await jsonHandler(request, response);
  routesHandler(request, response);
}

http.createServer(listener).listen(3333);