import { Request, Response } from 'express';

const patchGameState = (request: Request, response: Response) => {
    console.log('got patch request');
    console.log(request.body);
    response.end();
}

export { patchGameState };