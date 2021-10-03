import { Router } from 'express';
import { patchGameState } from '@lib/controller/gamestate';
import { userMiddleware } from '@lib/utils';

export default Router().patch('/', userMiddleware, patchGameState);