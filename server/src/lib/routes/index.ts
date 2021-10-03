import { Router } from 'express';
import gameStateRoutes from "./gamestate";
import leaderboard from './leaderboard';

export default Router()
    .use('/gamestate', gameStateRoutes)
    .use('/leaderboard', leaderboard);