import express, { Request, Response, } from 'express';
import bodyParser from 'body-parser'

async function startServer() {
    const app = express();

    app.use(express.json({ limit: '500mb' }));

    app.use(bodyParser.json({limit: '500mb'}));
    app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
    app.use(bodyParser.text({ limit: '500mb' }));

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