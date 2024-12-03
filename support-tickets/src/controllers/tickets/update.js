export function update({ request, response, database }) {
  const { id } = request.params
  const { equipment, description, user_name } = request.body

  return response.end(user_name)
  // return response.end(JSON.stringify(request.params))
}
