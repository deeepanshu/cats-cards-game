import { NextFunction, request, Request, Response } from 'express';
import { REDIS_KEYS } from '@lib/env';
import redisMethods from '@services/redis';

const getLeaderboard = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const data = await redisMethods.zrevrange(REDIS_KEYS.LEADERBOARD, 0, -1, 'withscores');
        const leaderboardData = [];
        for(let i = 0 ; i < data.length; i = i+2) {
            leaderboardData.push([data[i], data[i+1]]);
        }
       response.json(leaderboardData);
    } catch (error) {
        next(error);
    }
}


export { getLeaderboard };