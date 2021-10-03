import { Router } from 'express';
import { getGameState, patchGameState } from '@lib/controller/gamestate';
import { userMiddleware } from '@lib/utils';

export default Router()
    .get('/', userMiddleware, getGameState)
    .patch('/', userMiddleware, patchGameState);