import { updateGameState } from "@lib/api";
import { toast } from "react-toastify";

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const getRandomIntFromRange = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const gameStateListener = (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    if (action.type === 'gameState/nextMove') {
        const { gameState } = store.getState();
        updateGameState(gameState);
    }
    if (action.type === 'gameState/newGame' && action.payload) {
        toast.success("Started New Game");
    }
    return result;
}

export const cacheImages = async (imgs: string[]) => {
    const promises = await imgs.map(i => {
        return new Promise(function (resolve, reject) {
            const img = new Image();

            img.src = i;
            img.onload = resolve('done') as unknown as any;
            img.onerror = reject() as unknown as any;

        })
    });
    await Promise.all(promises);
}