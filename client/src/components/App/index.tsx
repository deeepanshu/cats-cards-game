import React, { useEffect } from 'react';
import { Header, Leaderboard, Main } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { Switch, Route } from 'react-router-dom';
import { cacheImages } from '@lib/utils';
import { IMAGES_TO_PRECACHE } from '@lib/constants';
import { getLeaderboardData } from '@store';

const App = () => {
    const dispatch = useDispatch();

    const { user, environment } = useSelector((state: RootState) => state);
    let pollingId: NodeJS.Timer | null = null;
    
    useEffect(() => {
        cacheImages(IMAGES_TO_PRECACHE);
        dispatch(getLeaderboardData());
        pollingId = setInterval(() => dispatch(getLeaderboardData()), 5000);
        return () => {
            if (pollingId) clearInterval(pollingId);
        }
    }, []);

  
    if (environment.loading) {
        return <h4 className="text-center">Loading...</h4>
    }

    return (
        <div className="d-flex flex-column">
            <Header username={user.userName} />
            <Switch>
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path='/' component={Main} />
            </Switch>
        </div>
    )
}

export default App;