import { Router } from 'express';
import { getLeaderboard } from '@lib/controller/leaderboard';
import { userMiddleware } from '@lib/utils';

export default Router()
    .get('/', getLeaderboard);