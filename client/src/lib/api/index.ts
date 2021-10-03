import { GameState } from '@lib/interfaces';
import axios from 'axios';

const axiosInstance = axios.create({baseURL: "http://localhost:9000/api"});

const isHandlerEnabled = (config = {}) => {
    return true;
};

const requestHandler = async (request: any) => {
    if (isHandlerEnabled(request)) {
        const username = localStorage.getItem('username');
        request.headers = Object.assign({}, request.headers);
        request.headers['username'] = username || "";
    }
    return request;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

const updateGameState = (gameState: GameState) => {
    return axiosInstance({
        url: "/gamestate",
        method: "patch",
        data: gameState
    });
};

export {updateGameState};