import { NextFunction, request, Request, Response } from 'express';
import { REDIS_KEYS } from '@lib/env';
import redisMethods from '@services/redis';

const patchGameState = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = request['principal']; // TODO: Add principal in Express namespace
        const { body } = request;
        const bodyStr = JSON.stringify(body);
        await redisMethods.hset(REDIS_KEYS.GAMESTATES, user, bodyStr);
        response.send("OK");
    } catch (error) {
        next(error);
    }
}

const getGameState = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = request['principal']; // TODO: Add principal in Express namespace
        const oldGameStr = await redisMethods.hget(REDIS_KEYS.GAMESTATES, user);
        if (!oldGameStr) return response.json(null);
        const oldGame = JSON.parse(oldGameStr);
        const { isGameCompleted } = oldGame;
        if (isGameCompleted) return response.json(null);
        response.json(oldGame);
    } catch (error) {
        next(error);
    }
}

export { patchGameState, getGameState };