import { create } from "../controllers/tickets/create.js";

export const tickets = [
  {
    method: 'POST',
    path: '/tickets',
    controller: create
  },
  {
    method: 'GET',
    path: '/tickets',
    controller: ({request, response}) => {
      response.end("Retornando tickets...");
    }
  }
]