import express, { Response } from 'express';
import responseTime from 'response-time';
import cors from 'cors';
import morgan from 'morgan';
import routes from '@lib/routes';

const expressLoader = (app: express.Application) => {

    app.use(morgan());
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(responseTime());
    app.use('/api', routes);
    app.use((error, request, response: Response, next) => {
        response.status(error.status || 500);
        response.send({
            message: error.message,
            error: error
        });
    });

}

export default expressLoader;