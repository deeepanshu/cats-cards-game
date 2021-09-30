import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient();

const redisMethods = {
    set: promisify(client.set).bind(client),
    get: promisify(client.get).bind(client),
    hmset: promisify(client.hmset).bind(client),
    hmget: promisify(client.hmget).bind(client),
};

client.on('ready', () => {
    console.log("Redis instance ready...");
})

client.on('connect', () => {
    console.log("Redis instance connected...");
})

client.on('error', (err) => {
    console.log("Error " + err);
});

export default redisMethods;