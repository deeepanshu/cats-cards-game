import React from 'react';
import MysteryCard from '@components/MysteryCard';
import TradingCard from '@components/TradingCard';
import { RootState } from '@store/store';
import { useDispatch, useSelector } from 'react-redux';
import { nextMove, nextCard } from '@store/slices/gameState';

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
        <React.Fragment>
            <div>
                {
                    showingFrontFaceCard ? <MysteryCard>
                        <img width={150} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/face-with-hand-over-mouth_1f92d.png" />
                    </MysteryCard> : <TradingCard rotate={!showingFrontFaceCard} {...currentCard} />
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
                <React.Fragment>

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
                </React.Fragment>
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
        </React.Fragment>
    );
}

export default Deck;
