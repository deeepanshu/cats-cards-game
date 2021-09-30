import express from 'express';
import responseTime from 'response-time';
import cors from 'cors';

const expressApp = (app: express.Application) => {

    app.use(cors());
    app.use(responseTime());

    app.get('/', (req, res) => {
        console.log('say Hi');
        res.send('hi')
    });
    
}

export default expressApp;