export async function jsonHandler(request, response) {
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());

  } catch (err) {
    request.body = null;
    console.log(err);
  }

  response.setHeader('Content-Type', 'application/json');
}