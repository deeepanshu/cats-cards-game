import { Router } from 'express';
import { patchGameState } from '@lib/controller/gamestate';

export default Router().patch('/', patchGameState);