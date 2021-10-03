import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { RootState, nextMove, nextCard, newGame } from '@store';
import { TradingCard, MysteryCard } from '@components';

const Deck = () => {

    const dispatch = useDispatch();
    const { gameState } = useSelector((state: RootState) => state);
    const { showingFrontFaceCard, catCardsEncountered, gameLost, gameWon, currentIndex, deckConfiguration, isDiffuseAvailable, message, shuffleDeckPending } = gameState;

    let currentCard = {
        type: '',
        imageUrls: [] as string[],
    };

    if (currentIndex > -1) {
        currentCard = deckConfiguration[currentIndex];
    }

    return (
        <React.Fragment>
            <div className="">
                {
                    showingFrontFaceCard ? <MysteryCard>
                        <img width={150} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/face-with-hand-over-mouth_1f92d.png" />
                    </MysteryCard> : <TradingCard rotate={!showingFrontFaceCard} {...currentCard} />
                }
            </div>
            <h5 className="text-center">Score: {catCardsEncountered}/5</h5>
            {(isDiffuseAvailable && !gameWon && !gameLost && !shuffleDeckPending) && <h5 className="text-center">Bomb Diffuse Available</h5>}

            {
                message && <h5 className="text-center">{message}</h5>
            }
            {(!gameWon && !gameLost) && (
                <React.Fragment>
                    {
                        showingFrontFaceCard && (
                            <button className="fill" onClick={() => dispatch(nextMove())}>REVEAL NEXT CARD</button>
                        )
                    }
                    {
                        !showingFrontFaceCard && (
                            <button className="fill" onClick={() => dispatch(nextCard())}>OK</button>
                        )
                    }
                </React.Fragment>
            )}

            {
                (gameWon || gameLost) && (
                    <React.Fragment>
                        <h1 className="text-center">{gameWon ? 'You won! 🎉' : 'You lost! ☹💣'}</h1>
                        <button className="fill" onClick={() => {
                            dispatch(newGame());
                        }}>New Game</button>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    );
}

export default Deck;
