import { Express } from 'express';
import redis from 'redis';
import { promisify } from 'util';

import { CONFIG } from '@lib/env';

const client = redis.createClient();
const redisMethods = {
    set: promisify(client.set).bind(client),
    get: promisify(client.get).bind(client),
    hset: promisify(client.hset).bind(client),
    hget: promisify(client.hget).bind(client),
    hmset: promisify(client.hmset).bind(client),
    hmget: promisify(client.hmget).bind(client),
    exists: promisify(client.exists).bind(client),
};

export const redisLoader = (app: Express) => {
    client.on('ready', () => {
        console.log("Redis instance ready...");
        app.listen(CONFIG.PORT, () => {
            console.log('server listening');
        })
    })
    
    client.on('connect', () => {
        console.log("Redis instance connected...");
    })
    
    client.on('error', (err) => {
        console.log("Error " + err);
    });
    
}

export default redisMethods;