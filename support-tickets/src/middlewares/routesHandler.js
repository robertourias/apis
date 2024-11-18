import { routes } from "../routes/index.js";

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.url;
  });

  if(route) {
    return route.controller({request, response});
  } 
    
  return response.writeHead(404, { "Content-Type": "text/plain" }).end("Not Found");  
}
  