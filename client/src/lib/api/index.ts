import { GameState, LeaderBoardState } from '@lib/interfaces';
import axios, { AxiosResponse } from 'axios';


export const axiosInstance = axios.create({
    baseURL: "http://localhost:9000/api", 
    headers: {
        'Content-Type': 'application/json',
    }
});

const isHandlerEnabled = (config = {}) => {
    return true;
};

const requestHandler = async (request: any) => {
    if (isHandlerEnabled(request)) {
        const username = sessionStorage.getItem('username');
        request.headers = Object.assign({}, request.headers);
        request.headers['username'] = username || "";
    }
    return request;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

const updateGameState = (gameState: GameState): Promise<AxiosResponse> => {
    return axiosInstance({
        url: "/gamestate",
        method: "patch",
        data: gameState
    });
};

const getGameState = (): Promise<AxiosResponse<GameState | null>> => {
    return axiosInstance({
        url: "/gamestate",
        method: "get"
    })
}

const getLeaderboard = (): Promise<AxiosResponse<LeaderBoardState>> => {
    return axiosInstance({
        url: "/leaderboard",
        method: "get"
    })
}

export { updateGameState, getGameState, getLeaderboard };