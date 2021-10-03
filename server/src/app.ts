import express from 'express';
import expressLoader from '@services/express';
import { redisLoader } from '@services/redis';

const app = express();

expressLoader(app);
redisLoader(app);
