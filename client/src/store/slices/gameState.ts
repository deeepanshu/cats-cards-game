import { createSlice } from '@reduxjs/toolkit';
import { CardType, DeckConfig, GameState } from '@lib/interfaces';
import { shuffle } from '@lib/utils';

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
  deckConfiguration: [
    {
      type: CardType.CAT,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
    },
    {
      type: CardType.SHUFFLE,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/shuffle-tracks-button_1f500.png'],
    },
    {
      type: CardType.DIFFUSAL,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/cat-with-wry-smile_1f63c.png'],
    },
    {
      type: CardType.BOMB,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/bomb_1f4a3.png'],
    },
    {
      type: CardType.CAT,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
    },
    {
      type: CardType.CAT,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
    },
    {
      type: CardType.CAT,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
    },
    {
      type: CardType.CAT,
      imageUrls: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
    }
  ],
}

export const gameStateSlice = createSlice({
  name: 'gameState',
  initialState,
  reducers: {
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
        }
      } else if (currentCard.type === CardType.BOMB) {
        if (!state.isDiffuseAvailable) {
          state.gameLost = true;
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
  }
})

export const { nextMove, nextCard } = gameStateSlice.actions;
export default gameStateSlice.reducer;