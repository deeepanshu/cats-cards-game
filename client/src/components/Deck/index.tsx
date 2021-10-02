import MysteryCard from '@components/MysteryCard';
import TradingCard from '@components/TradingCard';
import React, { useState } from 'react';

const DECKORDER = [
    {
        type: "cat",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
        subText: "Cat Card",
        subDescription: "Cat Card",
    },
    {
        type: "diffuser",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/cat-with-wry-smile_1f63c.png'],
        subText: "Diffusal Card",
        subDescription: "Diffusal Card",
    },
    {
        type: "bomb",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/bomb_1f4a3.png'],
        subText: "Bomb Card",
        subDescription: "Bomb Card",
    },
    {
        type: "cat",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
        subText: "Cat Card",
        subDescription: "Cat Card",
    },
    {
        type: "cat",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
        subText: "Cat Card",
        subDescription: "Cat Card",
    },
    {
        type: "cat",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
        subText: "Cat Card",
        subDescription: "Cat Card",
    },
    {
        type: "cat",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
        subText: "Cat Card",
        subDescription: "Cat Card",
    },
    {
        type: "shuffle",
        imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/shuffle-tracks-button_1f500.png'],
        subText: "Shuffle Card",
        subDescription: "Shuffle Card",
    },
];

const Deck = () => {

    const [showingMysteryCard, setShowingMysteryCard] = useState(true);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [isDiffuseAvailable, setIsDiffuseAvailable] = useState<boolean>(false);
    const [gameLost, setGameLost] = useState<boolean>(false);
    const [gameWon, setGameWon] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [catCardsEncountered, setCatsCardsEncountered] = useState<number>(0);

    let currentCard = {
        type: '',
        imageUris: [] as string[],
        subText: '',
        subDescription: '',
    };

    if (currentIndex > -1) {
        currentCard = DECKORDER[currentIndex];
    }

    console.log('currentIndex: ', currentIndex);
    console.log('catCardsEncountered: ', catCardsEncountered);
    console.log('currentCard: ', currentCard);
    console.log('gameOver: ', gameLost);
    console.log('gameWon: ', gameWon);
    console.log('----------------');

    const pickFromDeck = () => {
        let currentProbableIndex = currentIndex + 1;
        let probableGameWon = false;
        let probableGameLost = false;
        let usedShuffleCard = false;
        const card = DECKORDER[currentProbableIndex];
        if (card.type === 'cat') {
            if (catCardsEncountered === 4) {
                probableGameWon = true;
            }
            setCatsCardsEncountered(old => old + 1);
        } else if (card.type === 'diffuser') {
            setIsDiffuseAvailable(true);
        } else if (card.type === 'bomb') {
            if (!isDiffuseAvailable) {
                probableGameLost = true;
            } else {
                setMessage('You have used your bomb diffusal card!!!');
                setIsDiffuseAvailable(false);
            }
        } else if (card.type === 'shuffle') {
            setMessage('OOPS!!! A SHUFFLE CARD!!! You have to start over :(');
            usedShuffleCard = true;
        }
        setShowingMysteryCard(false);
        setCurrentIndex(currentProbableIndex);
        setGameWon(probableGameWon);
        setGameLost(probableGameLost);
        setTimeout(() => {
            if (!probableGameWon && !probableGameLost) {
                setShowingMysteryCard(true);
            }
            if (usedShuffleCard) {
                setIsDiffuseAvailable(false);
                setCatsCardsEncountered(0);
                setCurrentIndex(-1);
            }
            setMessage('');
        }, 2000);
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                {
                    showingMysteryCard ? <MysteryCard /> : <TradingCard rotate={!showingMysteryCard} {...currentCard} />
                }
            </div>
            <h3 className="text-center">{message}</h3>
            <h5 className="text-center">Score: {catCardsEncountered}</h5>
            {
                isDiffuseAvailable && (
                    <h4 className="text-center">Bomb Diffuse Available.</h4>
                )
            }
            {(!gameWon && !gameLost) && (
                <div className="d-flex justify-content-center mt-10">

                    {
                        showingMysteryCard && (
                            <button className="fill" onClick={() => {
                                pickFromDeck();
                            }}>Click to reveal next card!</button>
                        )
                    }
                </div>
            )}

            {
                gameLost && (
                    <h1 className="text-center">You lost! ☹💣</h1>
                )
            }

            {
                gameWon && (
                    <h1 className="text-center">You won! 🎉</h1>
                )
            }
        </div>
    );
}

export default Deck;

/*
let currentProbableIndex = currentIndex + 1;
        let probableGameWon = false;
        const card = DECKORDER[currentProbableIndex];
        if (card.type === 'diffuser') {
            setIsDiffuseAvailable(true);
        } else if (card.type === 'bomb') {
            if (!isDiffuseAvailable) {
                setGameOver(true);
            } else {
                setMessage('You have used your bomb diffusal card!!!')
                if (currentProbableIndex === 3) {
                    probableGameWon = true;
                    setGameWon(true);
                }
            }
        } else if (card.type === 'shuffle') {
            if (currentProbableIndex === 4) {
                setGameWon(true);
            } else {
                //shuffle the array;
                setGameOver(false);
                setGameWon(false);
                setIsDiffuseAvailable(false);
                currentProbableIndex = -1;
            }
        }
        setShowingMysteryCard(false);
        setCurrentIndex(currentProbableIndex);
        !probableGameWon && setMessage('next card in 3.2.1...')
        setTimeout(() => {
            setShowingMysteryCard(true);
            setMessage('');
        }, 3000);

*/