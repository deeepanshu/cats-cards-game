import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CardType, DeckConfig, GameState } from '@lib/interfaces';
import { shuffle } from '@lib/utils';
import { getGameState } from '@lib/api';
import { toggleLoading } from './environment';
import { NEW_GAME_STATE } from '@lib/constants';

const initialState: GameState = {
  isGameCompleted: false,
  gameLost: false,
  gameWon: false,
  currentIndex: -1,
  isDiffuseAvailable: false,
  catCardsEncountered: 0,
  showingFrontFaceCard: true,
  shuffleDeckPending: false,
  message: '',
  deckConfiguration: [],
}

export const getLastGame = createAsyncThunk('/user/getLastGame', async (_, { dispatch }): Promise<GameState> => {
  const response = await getGameState();
  dispatch(toggleLoading(false));
  if (response.data) {
    return response.data;
  }
  return NEW_GAME_STATE;
});

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
    newGame: (state) => {
      return NEW_GAME_STATE;
    },
    nextCard: (state) => {
      if (state.shuffleDeckPending) {
        state.deckConfiguration = shuffle<DeckConfig>(state.deckConfiguration);
        state.shuffleDeckPending = false;
        state.isDiffuseAvailable = false;
        state.catCardsEncountered = 0;
        state.currentIndex = -1;
      }
      state.showingFrontFaceCard = true;
      state.message = '';
    },
    nextMove: (state) => {
      const { deckConfiguration = [] } = state;
      const newCurrentIndex = state.currentIndex + 1;
      const currentCard = deckConfiguration[newCurrentIndex];
      if (currentCard.type === CardType.CAT) {
        state.catCardsEncountered = state.catCardsEncountered + 1;
        if (state.catCardsEncountered === 5) {
          state.gameWon = true;
          state.isGameCompleted = true;
          state.message = '';
        }
      } else if (currentCard.type === CardType.BOMB) {
        if (!state.isDiffuseAvailable) {
          state.gameLost = true;
          state.isGameCompleted = true;
        } else {
          state.message = 'You have used your bomb diffusal card!!!';
          state.isDiffuseAvailable = false;
        }
      } else if (currentCard.type === CardType.DIFFUSAL) {
        state.isDiffuseAvailable = true;
      } else if (currentCard.type === CardType.SHUFFLE) {
        state.message = 'Your deck is shuffled';
        state.shuffleDeckPending = true;
      }
      state.currentIndex = newCurrentIndex;
      state.showingFrontFaceCard = false;
      return state;
    }
  },
  extraReducers: {
    [getLastGame.fulfilled as any]: (state, action) => {
      return action.payload;
    }
  }
})

export const { nextMove, nextCard, newGame } = gameStateSlice.actions;
export default gameStateSlice.reducer;