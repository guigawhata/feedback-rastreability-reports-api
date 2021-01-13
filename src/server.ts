import express, {Request, Response} from 'express';

async function startServer() {
    const app = express();

    app.get('/', (request: Request, response: Response) => {
        console.log(request);

        return response.json({ message: request.body });
    })

    app.listen(process.env.PORT || 3333, () => {
        // eslint-disable-next-line no-console
        console.log('Server started on port 3333!');
    });
}

startServer();