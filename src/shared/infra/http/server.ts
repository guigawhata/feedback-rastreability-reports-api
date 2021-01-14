import express, { Request, Response } from 'express';

import '../typeorm';

async function startServer() {
  const app = express();

  app.use(express.json());

  app.post('/', async (request: Request, response: Response) => {
    // eslint-disable-next-line no-console
    console.log(request.body);

    return response.json({ message: request.body });
  });

  app.listen(process.env.PORT || 3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on port 3333!');
  });
}

startServer();
