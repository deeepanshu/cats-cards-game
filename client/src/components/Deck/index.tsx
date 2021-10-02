import MysteryCard from '@components/MysteryCard';
import TradingCard from '@components/TradingCard';
import { RootState } from '@store/store';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextMove, nextCard } from '@store/slices/gameState';
// const DECKORDER = [
//     {
//         type: "cat",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
//         subText: "Cat Card",
//         subDescription: "Cat Card",
//     },
//     {
//         type: "diffuser",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/cat-with-wry-smile_1f63c.png'],
//         subText: "Diffusal Card",
//         subDescription: "Diffusal Card",
//     },
//     {
//         type: "bomb",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/bomb_1f4a3.png'],
//         subText: "Bomb Card",
//         subDescription: "Bomb Card",
//     },
//     {
//         type: "cat",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
//         subText: "Cat Card",
//         subDescription: "Cat Card",
//     },
//     {
//         type: "cat",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
//         subText: "Cat Card",
//         subDescription: "Cat Card",
//     },
//     {
//         type: "cat",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
//         subText: "Cat Card",
//         subDescription: "Cat Card",
//     },
//     {
//         type: "cat",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png'],
//         subText: "Cat Card",
//         subDescription: "Cat Card",
//     },
//     {
//         type: "shuffle",
//         imageUris: ['https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/shuffle-tracks-button_1f500.png'],
//         subText: "Shuffle Card",
//         subDescription: "Shuffle Card",
//     },
// ];

const Deck = () => {

    const dispatch = useDispatch();
    const { gameState } = useSelector((state: RootState) => state);
    const { showingFrontFaceCard, catCardsEncountered, gameLost, gameWon, currentIndex, deckConfiguration, isDiffuseAvailable, message } = gameState;

    let currentCard = {
        type: '',
        imageUrls: [] as string[],
    };

    if (currentIndex > -1) {
        currentCard = deckConfiguration[currentIndex];
    }

    const pickFromDeck = () => {
        dispatch(nextMove());
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                {
                    showingFrontFaceCard ? <MysteryCard /> : <TradingCard rotate={!showingFrontFaceCard} {...currentCard} />
                }
            </div>
            <h5 className="text-center">Score: {catCardsEncountered}</h5>
            <h4 className="text-center">{message}</h4>

            {
                isDiffuseAvailable && (
                    <h4 className="text-center">Bomb Diffuse Available.</h4>
                )
            }
            {(!gameWon && !gameLost) && (
                <div className="d-flex justify-content-center mt-10">

                    {
                        showingFrontFaceCard && (
                            <button className="fill" onClick={() => {
                                pickFromDeck();
                            }}>REVEAL NEXT CARD</button>
                        )
                    }
                    {
                        !showingFrontFaceCard && (
                            <button className="fill" onClick={() => {
                                dispatch(nextCard());
                            }}>OK</button>
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
