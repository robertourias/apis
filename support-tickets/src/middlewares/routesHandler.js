import { routes } from "../routes/index.js"
import { DataBase } from "../database/database.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"

const database = new DataBase()

export function routesHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if (route) {
    const routeParams = request.url.match(route.path)
    const { query, ...params } = routeParams.groups
    request.params = params
    request.query = query ? extractQueryParams(query) : {}
    return route.controller({ request, response, database })
  }

  return response
    .writeHead(404, { "Content-Type": "text/plain" })
    .end("Not Found")
}
