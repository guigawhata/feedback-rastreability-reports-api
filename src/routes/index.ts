import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    // eslint-disable-next-line no-console
    console.log(request.body);
    return response.json({ message: request.body });
});

export default routes;
