import { routes } from "../routes/index.js";
import { DataBase } from "../database/database.js";

const database = new DataBase();

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if(route) {
    return route.controller({request, response, database});
  } 
    
  return response.writeHead(404, { "Content-Type": "text/plain" }).end("Not Found");  
}
  