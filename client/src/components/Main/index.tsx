import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineStop } from "react-icons/ai";

import { Deck, User } from '@components';
import { newGame, resetUser, RootState } from '@store';

const Main = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state: RootState) => state);

    const reset = () => {
        dispatch(resetUser());
        dispatch(newGame(false));
    }

    const endCurrentGame = () => {
        dispatch(newGame(true));
    }

    return (
        <div className="d-flex flex-column">
            {
                user.userName ? (
                    <React.Fragment>
                        <Deck />
                        <div className="endgame-icon-wrapper" onClick={endCurrentGame}>
                            <AiOutlineStop title="End and Start New Game" size={25} color={'#c07401'}  />
                        </div>
                        <div className="close-icon-wrapper" onClick={reset}>
                            <AiOutlineCloseCircle title="Close" size={25} color={'#c07401'}  />
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <User />
                        <button onClick={() => history.push('/leaderboard')} className="fill mt-30">View Leaderboard</button>
                    </React.Fragment>
                )
            }
        </div>
    );
}

export default Main;