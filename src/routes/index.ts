import { Router, Request, Response } from 'express';

import Lote from '../models/Lote';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: request.body });
});

routes.get('/lotes', async (request: Request, response: Response) => {
    try {
        const lotes = await Lote.findAll();

        return response.json(lotes);
    } catch (error) {
        return response.json(error);
    }
});

export default routes;
