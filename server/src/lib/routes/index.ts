import { Router } from 'express';
import gameStateRoutes from "./gamestate";

export default Router()
    .use('/gamestate', gameStateRoutes);