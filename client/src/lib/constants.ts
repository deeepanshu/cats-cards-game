import { CardType } from "./interfaces";
import { shuffle } from "./utils";

export const DECK_CONFIG = [
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
    }
];

export const NEW_GAME_STATE = {
    isGameCompleted: false,
    gameLost: false,
    gameWon: false,
    currentIndex: -1,
    isDiffuseAvailable: false,
    catCardsEncountered: 0,
    showingFrontFaceCard: true,
    shuffleDeckPending: false,
    message: '',
    deckConfiguration: shuffle(DECK_CONFIG),
}

export const IMAGES_TO_PRECACHE = [
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/face-with-hand-over-mouth_1f92d.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/collision_1f4a5.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/bomb_1f4a3.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/cat-with-wry-smile_1f63c.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/shuffle-tracks-button_1f500.png'
]