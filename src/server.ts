import express, { Request, Response, } from 'express';
import bodyParser from 'body-parser'

async function startServer() {
    const app = express();

    app.use(express.json());

    app.use(bodyParser.json({ limit: '100mb' }));
    
    app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 100000
    }));

    app.post('/', async (request: Request, response: Response) => {
        console.log(request.body);

        return response.json({ message: request.body });
    })

    app.listen(process.env.PORT || 3333, () => {
        // eslint-disable-next-line no-console
        console.log('Server started on port 3333!');
    });
}

startServer();