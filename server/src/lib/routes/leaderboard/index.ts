import { Router } from 'express';
import { getLeaderboard } from '@lib/controller/leaderboard';

export default Router()
    .get('/', getLeaderboard);