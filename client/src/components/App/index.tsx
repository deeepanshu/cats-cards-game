import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Deck, User, Header } from '@components';
import { getLeaderboardData, newGame, resetUser, RootState } from '@store';
import { cacheImages } from '@lib/utils';
import { IMAGES_TO_PRECACHE } from '@lib/constants';
import { AiOutlineCloseCircle } from "react-icons/ai";
const App = () => {

    const dispatch = useDispatch();
    const { user, environment } = useSelector((state: RootState) => state);
    let pollingId: NodeJS.Timer | null = null;

    useEffect(() => {
        cacheImages(IMAGES_TO_PRECACHE);
        pollingId = setInterval(() => dispatch(getLeaderboardData()), 5000);
        return () => {
            if (pollingId) clearInterval(pollingId);
        }
    }, []);

    if (environment.loading) {
        return <h4 className="text-center">Loading...</h4>
    }

    const reset = () => {
        dispatch(resetUser());
        dispatch(newGame());
    }

    return (
        <div className="d-flex flex-column">
            <Header username={user.userName} />
            {
                user.userName ? (
                    <React.Fragment>
                        <Deck />
                        <div className="close-icon-wrapper" onClick={reset}>
                            <AiOutlineCloseCircle title="Close" size={25} />
                        </div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <User />
                        <button className="fill mt-20">View Leaderboard</button>

                    </React.Fragment>
                )
            }
        </div>
    );
}

export default App;