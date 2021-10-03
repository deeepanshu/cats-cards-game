import { NextFunction, Request, Response } from 'express';
import { REDIS_KEYS } from '@lib/env';
import redisMethods from '@services/redis';

const patchGameState = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = request['principal']; // TODO: Add principal in Express namespace
        const { body } = request;
        const bodyStr = JSON.stringify(body);
        await redisMethods.hset(REDIS_KEYS.GAMESTATES, user, bodyStr);
        response.end();
    } catch (error) {
        next(error);
    }   
}

export { patchGameState };