const CONFIG = {
    PORT: 9000,
};

enum REDIS_KEYS {
    GAMESTATES = 'gamestates',
    LEADERBOARD = 'leaderboard',
}

export { CONFIG, REDIS_KEYS };