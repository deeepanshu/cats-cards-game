export enum CardType {
    CAT = 'CAT',
    BOMB = 'BOMB',
    DIFFUSAL = 'DIFFUSAL',
    SHUFFLE = 'SHUFFLE',
}

export interface DeckConfig {
    type: CardType;
    imageUrls: string[];
}

export interface GameState {
    isGameCompleted: boolean;
    gameLost: boolean;
    gameWon: boolean;
    currentIndex: number;
    isDiffuseAvailable: boolean;
    catCardsEncountered: number;
    deckConfiguration: DeckConfig[];
    message: string;
    showingFrontFaceCard: boolean;
    shuffleDeckPending: boolean;
}

export interface UserState {
    userName: string;
}

export type LeaderBoardState = [string, string][]