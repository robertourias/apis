export const tickets = [
  {
    method: 'POST',
    path: '/tickets',
    controller: (request, response) => {
      response.end("Criando ticket");
    }
  },
  {
    method: 'GET',
    path: '/tickets',
    controller: (request, response) => {
      response.end("Retornando tickets...");
    }
  }
]